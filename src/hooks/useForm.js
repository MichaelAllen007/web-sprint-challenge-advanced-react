// write your custom hook here to control your checkout form
import {useState} from 'react'

function useForm (props) {
    const [showSuccessMessage, setSuccessMessage] = useState(false)
    const [values, setValues] = useState(props)

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name] : e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccessMessage(true)
    }

    return [showSuccessMessage, values, handleChanges, handleSubmit]
}

export default useForm