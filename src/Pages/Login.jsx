function Login(){
    return(
    <div className="row justify-content-md-center pt-5" >    
        <form className="col-md-8 mt-10">            
            <div className="row">
                <h3>Iniciar Sesión</h3>    
            </div>
            
            <div className="row mt-3">
                
                <div className="col-md-6">
                    <label for="username" className="form-label">Nombre de Usuario</label>
                    <input type="text" className="form-control" id="username" />
                </div>

                <div className="col-md-6">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
            </div> 

            <div className="row mt-3 align-items-center">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                    <button type="button" className="btn btn-success">Iniciar Sesión</button>
                </div>   
            </div>                                  
        </form>
    </div>

    )
}

export default Login