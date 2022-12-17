import React,{useState,useRef} from "react"
import { Form, } from "react-bootstrap"
import classes from './Signupform.module.css'


const Signup=()=>
{
  const emailref=useRef();
  const passwordref=useRef();
  const confirmpasswordref=useRef();

 const formSubmitHandler=(event)=>
{     
    event.preventDefault();
   const enteredEmail=emailref.current.value;
   const enteredPassword=passwordref.current.value;
   const confirmPassword=confirmpasswordref.current.value

   if(enteredPassword!=confirmPassword)
   {
    alert('passwords dont match');
   }
   else
   {
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCu84ggw5QyT2dJUlCmQvGfL2teJjDB1DE",
      {
        method:'POST',
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnSecureToken:true
        }),
        headers:{
          'Content-Type':'application/json'
        }

      }).then(res=>{
        if(res.ok)
        {
          console.log('user has successfully signed up')
        }
        else{
          return res.json().then(data=>{
           alert(data.error.message)
          });
        }
      })



   }    
  
 }   
return (
    
    <Form onSubmit={formSubmitHandler}>
        <section className={classes.auth}>
    <h1>SIGNUP</h1>
    <div className={classes.control}>
    <label>E-MAIL</label>
    <input type="text" required ref={emailref}/>
    </div>
    <div className={classes.control}>
    <label>PASSWORD</label>
     <input type="password" required ref={passwordref}/>
    </div>
    <div className={classes.control}>
    <label>CONFIRM PASSWORD</label>
    <input type="password" required ref={confirmpasswordref}/>
    </div>
    <div className={classes.actions}>
      <button >SIGNUP</button>
      </div>
      </section>
    </Form>

)

}
export default Signup;