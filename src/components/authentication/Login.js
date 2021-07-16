import { useEffect, useState } from "react"
import { Redirect, useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { Field, Form, Formik } from "formik"
import * as yup from "yup"
import GoogleLogin from "react-google-login"

import conutils from "../../app/utils"
import s from "../../app/settings/settings"
import GuestTemplate from "../../templates/layouts/GuestTemplate"
import { SimpleInputHTML } from "../../templates/partials/forms"
import { login, logout, set_pageclass } from "../../app/redux/slices"
import { api_login, api_logout, api_google_login } from "../../app/api/auth-account"




const Login = () => {
    const [state, setState] = useState({
        formerror: false
    })
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        dispatch(set_pageclass('login-app'))
    }, [])

    const init = {
        email: 'enchance@gmail.com',
        password: 'pass123',
    }

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    })

    const formik = {
        initialValues: init,
        validationSchema: schema,
        onSubmit: async ({email, password}, actions) => {
            const form = new FormData()
            form.set('username', email)
            form.set('password', password)

            try {
                const {data: {display, access_token, is_verified, avatar, timezone}} = await api_login(form)
                dispatch(login({email, display, access_token, is_verified, avatar, timezone}))
                history.replace('/')
            }
            catch(err) {
                setState({
                    formerror: true
                })
            }
        }
    }

    const googleResponse = response => {
        // const id_token = response.tokenObj && response.tokenObj.id_token || null
        if(response.tokenObj) {
            const {tokenObj: {id_token}} = response
            if(id_token) {
                api_google_login(id_token).then(res => {
                    const {display, email, access_token, is_verified, avatar} = res.data
                    dispatch(login({display, email, access_token, is_verified, avatar}))
                }).catch(err => {
                    conutils.log(err.response)
                })
            }
        }
    };

    return (
        <GuestTemplate>
            <div id="login-content">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 col-xxl-5 mx-auto">

                        <div className="card">
                            <div className="card-body">
                                <header>
                                    <h1>Login</h1>
                                </header>
<div className={'text-center'}>
    <GoogleLogin
        className={'btn-google w-100'}
        clientId={s.GOOGLE_CLIENT_ID}
        cookiePolicy={'single_host_origin'}
        onSuccess={googleResponse}
        onFailure={googleResponse}
    />
</div>

<div className={'text-center py-2'}>or</div>

<Formik {...formik}>
    {({errors, touched}) => {
        return (
            <Form>
                <div className={'mb-3'}>
                    <Field name={'email'}>
                        { ({field, meta}) => (
                            <input name={ field.name } type="text" { ...field } autoFocus
                                   placeholder={ 'Email' }
                                   className={ `form-control form-control-lg ${ meta.touched && meta.error && 'is-invalid' }` } />
                        ) }
                    </Field>
                    <div className={'field-error'}>
                        {(touched.email) && (errors.email) && (
                            <div className="error">{errors.email}</div>
                        )}
                    </div>
                </div>
                <div className={'mb-3'}>
                    <SimpleInputHTML name={'password'} type={'password'} placeholder={'Password'} touched={touched} errors={errors} />
                </div>

                <div className="submit">
                    <button type={'submit'} className={'btn btn-primary btn-lg w-100' +
                    ' justify-content-center'}>
                        Sign-in
                    </button>
                </div>

            </Form>
        )
    }}
</Formik>
                                <div className="text-center mt-3">
                                    <p>No account? <Link to={'/auth/register'}>Register here</Link>.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </GuestTemplate>
    )
}


export const Logout = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(async () => {
        try {
            await api_logout()
            dispatch(logout())
        }
        catch(err) {
            console.warn('[Unable to logout]')
            console.log(err.response)
        }
    }, [])
    return <Redirect from={ '/auth/logout' } to={'/'} />
}


export const FooPage = () => (
    <GuestTemplate>
        <main>
            <h1>Foo page</h1>
        </main>
    </GuestTemplate>
)

export default Login