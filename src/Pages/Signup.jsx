import { useState } from "react"

function Signup(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('firstname: ', firstname);
        console.log('lastname: ', lastname);
        console.log('username: ', username);
        console.log('email: ', email);
        console.log('password: ', password);
        console.log('passwordRepeat: ', passwordRepeat);
    }
    return(
<div className="row justify-content-md-center pt-5" >    
        <form className="col-md-10 mt-10" onSubmit={handleSubmit}>            
            <div className="row">
                <h1>Registro</h1>    
            </div>
            
            <div className="row mt-3">
                
                <div className="col-md-6">
                    <label for="firstname" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
                </div>

                <div className="col-md-6">
                    <label for="lastname" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                </div>   
            </div>

            <div className="row mt-3">
                
                <div className="col-md-6">
                    <label for="username" className="form-label">Nombre de Usuario</label>
                    <input type="text" className="form-control" id="username"  value={username} onChange={(e)=>setUsername(e.target.value)}  />
                </div>

                <div className="col-md-6">
                    <label for="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>   
            </div> 

            <div className="row mt-3">
                
                <div className="col-md-6">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <div className="col-md-6">
                    <label for="passwordrepeat" className="form-label">Repetir password</label>
                    <input type="password" className="form-control" id="passwordrepeat"  value={passwordRepeat} onChange={(e)=>setPasswordRepeat(e.target.value)} />
                </div>   
            </div> 

             <div className="row mt-3 align-items-center">
                
                <div className="col-md-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Acepto los Términos y condiciones
                        </label>
                    </div>
                </div>          

                <div className="col-md-6">
                    <button type="submit" className="btn btn-primary">Continuar con el Registro</button>
                </div>   
            </div>                                  
        </form>
    </div>

    )
}

export default Signup