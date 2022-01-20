import React, { useState } from 'react'
import FormLogin from './FormLogin'
import './Form.css' 
import FormSuccess from './FormSuccess';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();
    function submitForm() {
        navigate("/dashboard");
    }

    return (
        <>
            <div className='form-container'>
                <div className='form-content-left'>
                    <img className='form-img' src='img/img-2.svg' alt='spaceship' />
                </div>
                { !isSubmitted ? 
                    <FormLogin submitForm={submitForm} /> 
                        :  
                            <FormSuccess />
                            }
            </div>
        </>
    )
}

export default Form
