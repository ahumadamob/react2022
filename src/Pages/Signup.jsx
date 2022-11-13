import { useForm } from "react-hook-form";
import { Form,  Button, Alert } from 'react-bootstrap';

function Signup(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
<div className="row justify-content-md-center pt-5" >
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu Nombre" {...register("firstname", {required: true})} />
                {errors.firstname && <Alert variant="danger">Campo Nombre es obligatorio</Alert>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Tu Apellido" {...register("lastname", {required: true})} />
                {errors.lastname && <Alert variant="danger">Campo Apellido es obligatorio</Alert>}
            </Form.Group>  
            
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control type="text" placeholder="Elige un nombre de Usuario" {...register("username", {required: true})} />
                {errors.username && <Alert variant="danger">Campo Nombre de Usuario es obligatorio</Alert>}
            </Form.Group> 
            
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="alguien@sample.com" {...register("email", {required: true})} />
                {errors.email && <Alert variant="danger">Campo Correo electrónico es obligatorio</Alert>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Tu Password" {...register("password", {required: true})} />
                {errors.password?.type === "required" && <Alert variant="danger">Campo Password es obligatorio</Alert>}
                {errors.password?.type === "minLength" && <Alert variant="danger">La contraseña debe tener al menos 8 caracteres</Alert>}
                {errors.password?.type === "maxLength" && <Alert variant="danger">La contraseña no debe superar los 16 caracteres</Alert>}
            </Form.Group> 

            <Form.Group className="mb-3" controlId="passwordrepeat">
                <Form.Label>Repetir Password</Form.Label>
                <Form.Control type="text" placeholder="Repite tu Password" {...register("passwordrepeat", {required: true})} />
                {errors.passwordrepeat?.type === "required" && <Alert variant="danger">Campo Password es obligatorio</Alert>}
                {errors.passwordrepeat?.type === "minLength" && <Alert variant="danger">La contraseña debe tener al menos 8 caracteres</Alert>}
                {errors.passwordrepeat?.type === "maxLength" && <Alert variant="danger">La contraseña no debe superar los 16 caracteres</Alert>}
            </Form.Group>            

            <Button variant="primary" type="submit">Continuar con el registro</Button>
        </Form>    

    </div>

    )
}

export default Signup