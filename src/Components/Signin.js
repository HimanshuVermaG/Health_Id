import './Css/Signin.css';
import React, {useState} from "react"
export const Signin = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(email,pass)
    }
    return (
        <>
        <div id = "image-container">
            <div className="side img"></div>
        </div>
        <div id="fields">
            <div className="heading-section">
                <span>Sign</span> In
                <div className="profile img"/>
            </div>
            <form onSubmit={handelSubmit} >
                <div className="input-fields">
                    <div className="input-container">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input value={email} onChange = {(e) =>setEmail(e.target.value)} type="email"className="form-control" name="email" 
                         id="email box" aria-describedby="emailHelp" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input value={pass} onChange = {(e) =>setPass(e.target.value)} type="password" className="form-control" name="password" id="password" />
                    </div>
                    <div className="other">
                        <button type="submit" className="signin">Sign In</button>
                        <p>Don't have an account? <a onClick={()=> props.onFormSwitch('register')} href="#"> Register</a> </p>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}