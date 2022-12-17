import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import classes from '../components/Signupform.module.css';
import React,{useRef,useContext,useState} from "react";
import TokenContext from "../store/TokenContext";

const Profile=()=>
{ 
    const fullnameref=useRef();
    const profilephotoref=useRef();
    const authctx=useContext(TokenContext)
    const[displayname,setname]=useState();
    const[photoUrl,setUrl]=useState();

    if(authctx.isLoggedIn)
 {
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCu84ggw5QyT2dJUlCmQvGfL2teJjDB1DE",
      {
        method:'POST',
        body:JSON.stringify({
          idToken:authctx.tokenid,  
       }
       )
    }
    ).then(res=>{
        if(res.ok)
        {
          return res.json().then(data=>{
             setname(data.displayName);
             setUrl(data.photoUrl);
             
          })
        }
        else{
          return res.json().then(data=>{
           alert(data.error.message)
          });
        }})
  } 


  const detailsformHandler=(event)=>
  {  event.preventDefault();
    const enteredname=fullnameref.current.value;
    const enteredurl=profilephotoref.current.value;
    
fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCu84ggw5QyT2dJUlCmQvGfL2teJjDB1DE",
      {
        method:'POST',
        body:JSON.stringify({
          idToken:authctx.tokenid,  
          displayName:enteredname,
          photoUrl:enteredurl,
          returnSecureToken:true
        }),
        headers:{
          'Content-Type':'application/json'
        }

      }).then(res=>{
        if(res.ok)
        {
          return res.json().then(data=>{
            console.log(data);
          })
        }
        else{
          return res.json().then(data=>{
           alert(data.error.message)
          });
        }
      })


   
  }
 
return(
   
    <Container>
    <h2>Contact Details</h2>
    <section>
    <Form onSubmit={detailsformHandler}>
     <div className={classes.auth}> 
    <label>Full Name</label>
    <input type="text" required defaultValue={displayname} ref={fullnameref}/></div>  
    <div className={classes.auth}><label>Profile photo URL</label>
     <input type="text" required defaultValue={photoUrl} ref={profilephotoref} /></div>
     <div className={classes.actions}>
        <button>UPDATE</button>
     </div>
    </Form>
    </section>
    </Container>

)    

}
export default Profile;