import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import TokenContext from "../store/TokenContext";
import { Button } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../store";
const Home=()=>
{ 
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const authctx=useContext(TokenContext);
    const tokenid=useSelector(state=>state.auth.tokenid)
    console.log(tokenid)
    const emailverificationHandler=()=>
    {
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCu84ggw5QyT2dJUlCmQvGfL2teJjDB1DE",
        {
          method:'POST',
          body:JSON.stringify({
            requestType:"VERIFY_EMAIL",
            idToken:authctx.tokenid 
          }),
          headers:{
            'Content-Type':'application/json'
          }
  
        }).then(res=>{
          if(res.ok)
          {
           
                  
          }
         else{
            return res.json().then(data=>{
             navigate('./')
            });
          }
        })
     }   
     const logoutHandler=()=>
     { 
      dispatch(authActions.logout())
      console.log(tokenid);
      navigate('/')
      
    } 
    const showExpensesHnadler=()=>
    {
     if(tokenid)
     {
        navigate('/expenses');
     }
     else
     {
       alert('Please login to see expenses')
       navigate('/');
     }
      
    }
    

  return(
       <>
        <div><h1>Welocme to Expense Tracker</h1>
        <button onClick={emailverificationHandler}>Verify Email</button>
        <p>Your profile is incomplete , <Link to='./profile'>complete now</Link></p>
        <Button onClick={logoutHandler}>Logout</Button>
        <Button onClick={showExpensesHnadler}>Expenses</Button>
        </div>
        </>
    )
}
export default Home;