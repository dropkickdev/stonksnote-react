import { Field } from "formik"


export const SimpleInputHTML = props => {
    let {name, type, placeholder, touched, errors} = props
    return (
        <>
            <Field name={name}>
                { ({field, meta}) => (
                    <input name={ field.name } type={type} { ...field }
                           placeholder={placeholder}
                           className={ `form-control form-control-lg ${ meta.touched && meta.error && 'is-invalid' }` } />
                ) }
            </Field>
            <div className={'field-error'}>
                {(touched[name]) && (errors[name]) && (
                    <div className="error">{errors[name]}</div>
                )}
            </div>
        </>
    )
}