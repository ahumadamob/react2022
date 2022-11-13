import { useForm } from "react-hook-form";

function Signup(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
<div className="row justify-content-md-center pt-5" >    
        <form className="col-md-10 mt-10" onSubmit={handleSubmit(onSubmit)}>            
            <div className="row">
                <h1>Registro</h1>    
            </div>
            
            <div className="row mt-3">
                
                <div className="col-md-6">
                    <label for="firstname" className="form-label">Nombre</label>
                    <input type="text" className="form-control" {...register("firstname", {required: true})} />
                    {errors.firstname && <span>Campo Nombre es obligatorio</span>}
                </div>

                <div className="col-md-6">
                    <label for="lastname" className="form-label">Apellido</label>
                    <input type="text" className="form-control" {...register("lastname", {required: true})} />
                    {errors.lastname && <span>Campo Apellido es obligatorio</span>}
                </div>   
            </div>

            <div className="row mt-3">
                
                <div className="col-md-6">
                    <label for="username" className="form-label">Nombre de Usuario</label>
                    <input type="text" className="form-control" {...register("username", {required: true})}  />
                    {errors.username && <span>Campo Nombre de Usuario es obligatorio</span>}
                </div>

                <div className="col-md-6">
                    <label for="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" {...register("email", {required: true})} />
                    {errors.email && <span>Campo Correo electrónico es obligatorio</span>}
                </div>   
            </div> 

            <div className="row mt-3">
                
                <div className="col-md-6">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" {...register("password", {required: true, minLength:8, maxLength: 16})} />
                    {errors.password?.type === "required" && <span>Campo Password es obligatorio</span>}
                    {errors.password?.type === "minLength" && <span>La contraseña debe tener al menos 8 caracteres</span>}
                    {errors.password?.type === "maxLength" && <span>La contraseña no debe superar los 16 caracteres</span>}
                </div>

                <div className="col-md-6">
                    <label for="passwordrepeat" className="form-label">Repetir password</label>
                    <input type="password" className="form-control" {...register("passwordrepeat", {required: true, minLength: 8, maxLength: 16})} />
                    {errors.passwordrepeat?.type === "required" && <span>Campo Repetir Password es obligatorio</span>}
                    {errors.passwordrepeat?.type === "minLength" && <span>La contraseña debe tener al menos 8 caracteres</span>}
                    {errors.passwordrepeat?.type === "maxLength" && <span>La contraseña no debe superar los 16 caracteres</span>}                    
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