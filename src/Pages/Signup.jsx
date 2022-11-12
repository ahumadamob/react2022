import { useState } from "react"

function Signup(){
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        passwordrepeat: ''
    })
    const handleChange = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setForm({...form, [name]:value});

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form: ', form);
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
                    <input type="text" className="form-control" id="firstname" name="firstname" value={form.firstname} onChange={handleChange} />
                </div>

                <div className="col-md-6">
                    <label for="lastname" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastname" name="lastname" value={form.lastname} onChange={handleChange} />
                </div>   
            </div>

            <div className="row mt-3">
                
                <div className="col-md-6">
                    <label for="username" className="form-label">Nombre de Usuario</label>
                    <input type="text" className="form-control" id="username" name="username"  value={form.username} onChange={handleChange}  />
                </div>

                <div className="col-md-6">
                    <label for="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} />
                </div>   
            </div> 

            <div className="row mt-3">
                
                <div className="col-md-6">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={form.password} onChange={handleChange} />
                </div>

                <div className="col-md-6">
                    <label for="passwordrepeat" className="form-label">Repetir password</label>
                    <input type="password" className="form-control" id="passwordrepeat" name="passwordrepeat"  value={form.passwordRepeat} onChange={handleChange} />
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