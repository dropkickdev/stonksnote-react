import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Formik, Form, Field } from "formik"
import * as yup from 'yup'

import api from "../../app/axios"
import GuestTemplate from "../../templates/layouts/GuestTemplate"
import { set_pageclass } from "../../app/redux/slices"
import { SimpleInputHTML } from "../../templates/partials/forms"


const Register = props => {
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
        email: '',
        password: '',
        repeat: ''
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
            api.post('http://localhost:9000/auth/register', values)
                .then(res => {
                    console.log(res.data)
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

            </main>
        </GuestTemplate>
    )
}

export default Register