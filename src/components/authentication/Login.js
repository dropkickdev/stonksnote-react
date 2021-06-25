import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Field, Form, Formik } from "formik"
import * as yup from "yup"

import api from "../../app/axios"
import GuestTemplate from "../../templates/layouts/GuestTemplate"
import { SimpleInputHTML } from "../../templates/partials/forms"
import { login, set_pageclass } from "../../app/redux/slices"


const Login = props => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(set_pageclass('login-app'))
    }, [])

    const init = {
        email: '',
        password: '',
    }

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
    })

    const formik = {
        initialValues: init,
        validationSchema: schema,
        onSubmit: ({email, password}, actions) => {
            const form = new FormData()
            form.set('username', email)
            form.set('password', password)

            api.post('/auth/login', form)
                .then(res => {
                    console.table(res.data)
                })
                .catch(({response: {data: {detail}, status}}) => {
                    console.log(detail)
                    console.log(status)
                })
        }
    }

    return (
        <GuestTemplate>
            <main>

                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 col-xxl-5 mx-auto">
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

export const FooPage = () => (
    <GuestTemplate>
        <main>
            <h1>Foo page</h1>
        </main>
    </GuestTemplate>
)

export default Login