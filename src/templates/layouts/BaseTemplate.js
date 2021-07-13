import { useEffect } from 'react'



const BaseTemplate = props => {
    useEffect(() => {
        // var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
        //     keyboard: false
        // })
    }, [])

    return (
        <>
            {props.children}
        </>
    )
}

export default BaseTemplate