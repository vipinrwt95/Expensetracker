import React,{useState,useRef,useContext} from "react"
import { Form, } from "react-bootstrap"
import classes from './Signupform.module.css'
import TokenContext from "../store/TokenContext"
import {Link, useNavigate} from 'react-router-dom';
import { authActions } from "../store";
import { useSelector,useDispatch } from "react-redux";

const Login=()=>
{   const Navigate=useNavigate();
    const authctx=useContext(TokenContext);
    const emailref=useRef();
    const passwordref=useRef();
    const dispatch=useDispatch();
    const authStatus=useSelector(state=>state.isloggedin);
    const tokenid=useSelector(state=>state.auth.tokenid);
    
    const formSubmitHandler=(event)=>
    {     
        event.preventDefault();
       const enteredEmail=emailref.current.value;
       const enteredPassword=passwordref.current.value;
       
  fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCu84ggw5QyT2dJUlCmQvGfL2teJjDB1DE",
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
              return res.json().then(data=>
                {
                 dispatch(authActions.login(data.idToken))
                 Navigate('./home')
                    
            })
           }
            else{
              return res.json().then(data=>{
               alert(data.error.message)
              });
            }
          })
       }    

    return (
        <>
            <Form onSubmit={formSubmitHandler}>
            <section className={classes.auth}>
        <h1>LOGIN</h1>
        <div className={classes.control}>
        <label>E-MAIL</label>
        <input type="text" required ref={emailref}/>
        </div>
        <div className={classes.control}>
        <label>PASSWORD</label>
         <input type="password" required ref={passwordref}/>
        </div>
       <div className={classes.actions}>
          <button >LOGIN</button>
          </div>
          </section>
        </Form>
        <div className={classes.control}>
            <Link to='./reset'>Forgot password</Link>
        </div>
        </>
    
    )
}
export default Login;