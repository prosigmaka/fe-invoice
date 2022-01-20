import { useState, useEffect } from "react";

const useForm = (callback, validateInfo) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toggle, setToogle] = useState(false);

    const toggleBtn = (e) => {
        setToogle(prevState => !prevState);
        e.preventDefault();
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validateInfo(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors])

    return { handleChange, values, handleSubmit, errors, toggleBtn, toggle };
}

export default useForm;