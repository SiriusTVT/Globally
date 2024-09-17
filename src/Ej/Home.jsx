import { Link } from "react-router-dom";
function Home (){
    return(
        <div> 
            <p>Home</p> 
            <Link to="/about">About</Link>
        </div>
    );
}
export default Home;