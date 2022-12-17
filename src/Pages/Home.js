import { Link } from "react-router-dom";

const Home=()=>
{

    return(
       <>
        <div><h1>Welocme to Expense Tracker</h1>
        <p>Your profile is incomplete , <Link to='./profile'>complete now</Link>
        </p>
        </div>
        </>
    )
}
export default Home;