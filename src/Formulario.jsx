import React, {Component} from 'react';

class Formulario extends Component{
    render(){
        return(
            <form>

            <div className="mb-3 row">
                <label for="inputNombre" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputNombre" />
                </div>
            </div>

            <div className="mb-3 row">
                <label for="inputApellido" className="col-sm-2 col-form-label">Apellido</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputApellido" />
                </div>
            </div> 

            <div className="mb-3 row">
                <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail" />
                </div>
            </div> 
 
            <div className="mb-3 row">
                <label for="inputTelefono" className="col-sm-2 col-form-label">Teléfono</label>
                <div className="col-sm-10">
                    <input type="phone" className="form-control" id="inputTelefono" />
                </div>
            </div>            
 
            <div className="mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
            </div>

            <div className="mb-3 row">
                <label for="inputConfirmarPassword" className="col-sm-2 col-form-label">Confirmar password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputConfirmarPassword" />
                </div>
            </div> 

            <div className="col-12">
                <button className="btn btn-primary" >Enviar</button>
            </div>

        </form>
        );
    }
}

export default Formulario;