import React from 'react'
import useForm from '../../hooks/useForm'
import validateInfo from '../../hooks/validateInfo'
import './Form.css'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const FormSignup = ({ submitForm }) => {
    const { handleChange,values, handleSubmit, errors, toggleBtn, toggle } = useForm(
            submitForm,
            validateInfo
        );
    
    return (
        <>
            <div className="form-content-right">
                <form 
                    className="form"
                    onSubmit={handleSubmit}>
                    <h1> Masukan Username dan Password Anda. </h1>
                    <div className="form-inputs">
                        <label 
                        htmlFor="username" className="form-label">
                            Username : 
                        </label>
                        <input 
                            id="username"
                            type="email" 
                            name="username"
                            className="form-input"
                            placeholder="Enter your username . . ."
                            value={values.username} 
                            onChange={handleChange} 
                        />
                        { errors.username && <p>{errors.username}</p> }
                    </div>
                    <div className="form-inputs">
                        <label 
                        htmlFor="password" className="form-label">
                            Password : 
                        </label>
                        <div className="form-inputs-password">
                            <input 
                                id="password"
                                // type="password"
                                type={toggle ? "text" : "password"}
                                name="password"
                                className="form-input"
                                placeholder="Enter your password . . ." 
                                value={values.password} 
                                onChange={handleChange}
                            />
                            <button className="password-toogle-icon" onClick={toggleBtn}>
                                { toggle ? <AiOutlineEyeInvisible /> : <AiOutlineEye /> }
                            </button>
                        </div>
                        { errors.password && <p>{errors.password}</p> }
                    </div>
                    <button className="form-input-btn" type="submit"> 
                        Masuk 
                    </button>
                </form>
            </div>
        </>
    )
}

export default FormSignup
