import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from "formik"
import * as yup from 'yup'

import api from "../../app/axios"
import { IF } from "../../app/utilcomp"
import GuestTemplate from "../../templates/layouts/GuestTemplate"
import { set_pageclass } from "../../app/redux/slices"
import { SimpleInputHTML } from "../../templates/partials/forms"
import { api_register } from "../../app/api/auth-account"


const Register = props => {
    const [state, setState] = useState({error: false, success: false})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(set_pageclass('register-app'))
    }, [])

    // Sauce: https://github.com/jquense/yup/issues/97
    function equalTo(ref, msg) {
        return this.test({
            name: 'equalTo',
            exclusive: false,
            message: msg || 'Your passwords must be the same',
            params: {
                reference: ref.path
            },
            test: function(value) {
                return value === this.resolve(ref)
            }
        })
    }
    yup.addMethod(yup.string, 'equalTo', equalTo);

    const init = {
        email: 'enchance@gmail.com',
        password: 'pass123',
        repeat: 'pass123'
    }

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        repeat: yup.string().min(6).equalTo(yup.ref('password')).required(),
    })

    const formik = {
        initialValues: init,
        validationSchema: schema,
        onSubmit: (values, actions) => {
            setState({...state, error: false, success: false})
            api_register(values)
                .then(res => {
                    if(res.status === 201) {
                        setState({...state, error: false, success: true})
                    }
                    else {
                        setState({...state, error: true, success: false})
                    }
                })
                .catch(err => {
                    setState({...state, error: true, success: false})
                })
        }
    }

    // TODO: Page for '/auth/change-password'
    return (
        <GuestTemplate>
            <div id="register-content">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 col-xxl-5 mx-auto">
                        <IF condition={state.error}>
                            <div className="alert alert-danger">
                                <p>Can't seem to register that account.</p>
                                <ul>
                                    <li>The account already exists. <br/>You can <Link to={'/auth/change-password'}>change your password</Link>.</li>
                                    <li>It's our fault. Try again in a few seconds.</li>
                                </ul>
                            </div>
                        </IF>
                        <IF condition={state.success}>
                            <div className="alert alert-success">Account created. Please check your email to verify.</div>
                        </IF>
                        <div className="card">
                            <div className="card-body">
                                <header>
                                    <h1>Register</h1>
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
        <div className={'mb-3'}>
            <SimpleInputHTML name={'repeat'} type={'password'} placeholder={'Repeat'} touched={touched} errors={errors} />
        </div>

        <div className="submit">
            <button type={'submit'} className={'btn btn-primary btn-lg w-100'}>Submit</button>
        </div>

    </Form>
                                        )
                                    }}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuestTemplate>
    )
}

export default Register