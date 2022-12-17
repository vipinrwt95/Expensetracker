import React,{useRef, useState} from "react";
import { Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from  '../components/Signupform.module.css';
import LoadingSpinner from "../components/UI/LoadingSpinner";
const ResetPassword=()=>
{  const navigate=useNavigate();
  const enteredEmailref=useRef();
  const [isLoading,setLoader]=useState(false);
  const resetpasswordHandler=(event)=>
  {    
     event.preventDefault();
     setLoader(prev=>!prev)
     
    const email=enteredEmailref.current.value;
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCu84ggw5QyT2dJUlCmQvGfL2teJjDB1DE",
        {
          method:'POST',
          body:JSON.stringify({
            requestType:"PASSWORD_RESET",
            email:email
          }),
          headers:{
            'Content-Type':'application/json'
          }
  
        }).then(res=>{
          if(res.ok)
          {  
             setLoader(false);
             navigate('/')
                  
          }
         else{
            return res.json().then(data=>{
             
            });
          }
        })
    }
 return(
    <div className={classes.auth}>
    <form onSubmit={resetpasswordHandler}>
     <div className={classes.control}>   
     <label>Email you are registered with</label>
      <input type="text" ref={enteredEmailref} required />
      <button className={classes.actions}>Send Reset Link</button>
      </div>
      </form>
      <>{isLoading && <LoadingSpinner /> }</>
    </div>
 )    

}

export default ResetPassword;