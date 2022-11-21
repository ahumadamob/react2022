import { Spinner } from "react-bootstrap";
import "./Loading.css"

function Loading({children, loading}){
    if(loading){
        return(
            <div className="spinner">
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="light" />
              <Spinner animation="grow" variant="info" />
            </div>             
          )

    }else{
        return(
            <>
                {children}
            </>
        )
    }
}

export default Loading