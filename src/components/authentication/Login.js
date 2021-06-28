import { useEffect, useState } from "react"
import { Redirect, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { Field, Form, Formik } from "formik"
import * as yup from "yup"

import GuestTemplate from "../../templates/layouts/GuestTemplate"
import { SimpleInputHTML } from "../../templates/partials/forms"
import { login, logout, set_pageclass } from "../../app/redux/slices"
import { api_login, api_logout } from "../../app/api/auth-account"



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
                const res = await api_login(form)
                dispatch(login({
                    email,
                    display: res.data.display,
                    access_token: res.data.access_token,
                    is_verified: res.data.is_verified,
                }))

                history.replace('/')
            }
            catch(err) {
                setState({
                    formerror: true
                })
            }
        }
    }

    return (
        <GuestTemplate>
            <main>

                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 col-xxl-5 mx-auto">

                        {state.formerror && (
                            <div className="alert alert-danger">Something seems wrong. Did you type your password correctly?</div>
                        )}

                        <div className="card">
                            <div className="card-body">
                                <header>
                                    <h1>Login</h1>
                                </header>
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
                                                    <button type={'submit'} className={'btn btn-primary btn-lg w-100'}>
                                                        Sign-in
                                                    </button>
                                                </div>

                                            </Form>
                                        )
                                    }}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </GuestTemplate>
    )
}


export const Logout = () => {
    const dispatch = useDispatch()
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
    return <Redirect from={ '/logout' } to={'/'} />
}


export const FooPage = () => (
    <GuestTemplate>
        <main>
            <h1>Foo page</h1>
        </main>
    </GuestTemplate>
)

export default Login