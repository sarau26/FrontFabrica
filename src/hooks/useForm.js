import { useState } from "react"


export const useForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm);
    const [errors, setErros] = useState({});

    const onInputChange = ({ target }) => {
        let { name, value, type} = target;
        if(type === "number") {
            value = +value
        }
        setformState({
            ...formState,
            [name]: value,
        })
    }

    const onSelectChange = ({ target }, isNumber=false) => {
        let { name, value} = target;
        if(isNumber) {
            value = +value
        }
        setformState({
            ...formState,
            [name]: value,
        })
    }

    const handleChexbox = ({target}) => {
        const { name, checked } = target;
        setformState({
            ...formState,
            [name]: checked,
        })
    }

    const onResetForm = () => {
        setformState( initialForm );
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onSelectChange,
        handleChexbox,
        onResetForm,
    }
}