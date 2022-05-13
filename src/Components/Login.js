import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import {auth} from '../Config/Config'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
function Log() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');
    const [successMsg,setSuccessMsg]=useState('');
    const navigate = useNavigate('')
    const handleLogin=(e)=>{
         e.preventDefault();
        console.log(email,password);
        auth.signInWithEmailAndPassword(email,password).then(()=>{
            setSuccessMsg('login successfull you will now utomatically get redirect to HomePage')
            // setName('');
            setEmail('');
            setPassword('');
            setError('');
            setTimeout(() => {
                setSuccessMsg('');
                navigate('/');
            }, 1000)
        }).catch(error=>setError(error.message));
    }
  return (
      <div className='container'>
    <form onSubmit={handleLogin}  >
  
        <h1>Login</h1><br></br>
        {successMsg &&<><div className='success-msg'>{successMsg}</div></>}
        <label className='form-group'>Enter your Email  </label><br></br><br></br>
        <input className='form-control' onChange={(e) => setEmail(e.target.value)} id="email" required="required"  placeholder="enter your email ...." type="email"></input><br/>
        <label className='form-group'>Enter your Password  </label><br></br><br></br>
        <input className='form-control' onChange={(e) => setPassword(e.target.value)} id="password" required="required" value={password} placeholder="enter your password ...." type="password"></input><br/>

        <button className='btn btn-primary'>Submit</button><br/>
        <span>You Don't have an account? 
                <Link to="/signup"> Register Here</Link>
            </span>
        </form>
        {error && <span className='error-msg'>{error}</span>}
    </div>



  )
}

export default Log