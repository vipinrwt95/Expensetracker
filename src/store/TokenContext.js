import React,{useState}from "react";
const TokenContext=React.createContext({
tokenid:'',
isLoggedIn:false,
login:(token)=>
{

},
logout:()=>
{

}
});
export const TokenProvider=(props)=>
{
  const initailToken=localStorage.getItem('token');
  const [tokenid,updateToken]=useState(initailToken);
  let userIsLoggedIn=!!tokenid;

const loginHandler=(token)=>{
  updateToken(token)
  localStorage.setItem('token',token);
}
const logoutHandler=()=>
{
    updateToken(null);
    localStorage.removeItem('token');
}
const tokenContext={
    tokenid:tokenid,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler
}

 return(
    <TokenContext.Provider value={tokenContext}>{props.children}</TokenContext.Provider>
 )

}


export default TokenContext;