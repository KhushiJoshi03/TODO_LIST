import { useNavigate } from "react-router-dom";
function Error()
{
    let usenav=useNavigate();
    return(
        <>
        <h1 style={{color:"red"}}>Error</h1>
        <button onClick={()=>usenav("/Home")}> Go Back </button>
        </>
    )
}
export default Error;