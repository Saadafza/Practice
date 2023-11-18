
import { Link } from "react-router-dom"
import notfound from "../Images/3747371.jpg"
function Notfound (){
    return(
        <>
<div className="container text-center">
    <img src={notfound} style={{width:"100%"}} alt="notfound"/>
    <Link className="btn btn-danger text-light" to="/">Back to Home</Link>
</div>


        </>
    )
}
export default Notfound