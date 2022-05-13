import React, { useState } from 'react'
import { auth, db } from '../Config/Config'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const navigate = useNavigate('')
    const handleSignup = (e) => {
        e.preventDefault();
        console.log()
        auth.createUserWithEmailAndPassword(email, password).then((credentials) => {
            console.log(credentials);
            db.collection('users').doc(credentials.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setSuccessMsg('signup successfull you will now utomatically get redirect to login')
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                setTimeout(() => {
                    setSuccessMsg('');
                    navigate('/login');
                }, 1000)
            }).catch(error => setError(error.message));
        }).catch(() => {
            setError(error.message)
        })

    }
    return (
        <div className='container'><form autoComplete='off' onSubmit={handleSignup}  >

            <h1>Signup</h1><br></br>
            {successMsg && <><div className='success-msg'>{successMsg}</div></>}
            <label className='form-group'>Enter your Name  </label>&nbsp;&nbsp;
            <input className='form-control' onChange={(e) => setName(e.target.value)} id="name" required="required" value={name} placeholder="enter your name ...." type="text"></input><br />
            <label className='form-group'>Enter your Email  </label>&nbsp;&nbsp;
            <input className='form-control' onChange={(e) => setEmail(e.target.value)} id="email" required="required" value={email} placeholder="enter your email ...." type="email"></input><br />
            <label className='form-group'>Enter your Password  </label>&nbsp;&nbsp;
            <input className='form-control' onChange={(e) => setPassword(e.target.value)} id="password" required="required" value={password} placeholder="enter your email ...." type="password"></input><br />


            <button className='btn btn-primary'>Submit</button>

        </form>
            {error && <span className='error-msg'>{error}</span>}
            <br />
            <span>Already have an account? Login
                <Link to="/login">Here</Link>
            </span>
        </div>
    )
}

export default Signup
