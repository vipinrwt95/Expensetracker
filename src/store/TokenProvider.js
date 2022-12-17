import TokenContext from "./TokenContext";
import React,{useState} from "react";

const TokenProvider=(props)=>
{
  const [tokenid,updateToken]=useState(null)
  let userIsLoggedIn=!!tokenid;

const loginHandler=(token)=>{
  updateToken(1)
}
const logoutHandler=()=>
{
    updateToken(null);
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

export default TokenProvider;