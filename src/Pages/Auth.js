import React,{useContext, useState} from "react";
import { Button } from "react-bootstrap";
import Login from "../components/Login";
import Signup from "../components/Signup";
import TokenContext from "../store/TokenContext";

const Auth=()=>
{  const authctx=useContext(TokenContext);
  const [isloggedin,setLogin]=useState(false);
  let content;
  let text;
  const LoginHandler=()=>
  {
    setLogin(prev=>!prev);
  }  
 if(!isloggedin)
 {
   content=<Signup />  
   text='Already have an account,Login'
 } 
 else
 {
    content=<Login />
    text='Dont have an account,Signup'
 }

return(
    <><div>{content}</div>
    <Button onClick={LoginHandler}>{text}</Button>
    </>
)
}

export default Auth;