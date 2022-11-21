import './Css/Register.css';
import React, {useState} from 'react';
export const Register = (props) => {
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [mob,setMob] = useState('')
    const [pass,setPass] = useState('')
    const [cpass,setCpass] = useState('')
    const [adhaar,setAdhaar] = useState('')
    
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return (
        <>
        <div id = "image-container">
            <div className="side img"></div>
        </div>
        <div id="fields">
            <div className="heading-section">
                <span>Register</span> Beneficiary
            </div>
            <form onSubmit={handelSubmit} >
                <div className="input-fields">
                <div className="two-fields">
                        <div className="input-container">
                            <label  htmlFor="fullname" className="form-label">Full Name</label>
                            <input value = {name} onChange = {(e) => setName(e.target.value)} type="text" className="form-control" name="fullname" id="fullname" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="mobile-number" className="form-label">Mobile Number</label>
                            <input value = {mob} onChange = {(e) => setMob(e.target.value)} type="tel" maxLength="11" className="form-control" 
                            name="mobile-number" id="mobile-number" />
                        </div>
                    </div>
                    <div className="one-fields">
                        <div className="input-container">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type="email"className="form-control" name="email" id="email box" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className="one-fields">
                        <div className="input-container">
                            <label htmlFor="adhaar" className="form-label">Adhaar Number</label>
                            <input value = {adhaar} onChange = {(e) => setAdhaar(e.target.value)}type="mobile"className="form-control" name="adhaar" id="adhaar-number" />
                        </div>
                    </div>
                    <div className="two-fields">
                        <div className="input-container">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input value = {pass} onChange = {(e) => setPass(e.target.value)} type="password" className="form-control" name="password" id="password" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                            <input value = {cpass} onChange = {(e) => setCpass(e.target.value)} type="password" className="form-control" name="confirm-password" id="confirm-password" />
                        </div>
                    </div>
                    <div className="other">
                        <button type="submit" className="signin">Creat an Account</button>
                        <p>Already have an account? <a onClick={()=> props.onFormSwitch('signin')} href="#"> Sign In</a> </p>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}