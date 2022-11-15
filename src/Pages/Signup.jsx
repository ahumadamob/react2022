import { useForm } from "react-hook-form";
import { Form,  Button, Alert } from 'react-bootstrap';
import firebase from '../Config/firebase';

function Signup(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    //TODO: Hacer una verificación de amnbas passwords que sean iguales
    const onSubmit = async data => {
        console.log(data)
        try{
            const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
            console.log("responseUser",responseUser.user.uid)
            if(responseUser.user.uid){
                const document = await firebase.firestore().collection("users")
                .add({
                    firstname:data.firstname,
                    lastname:data.lastname,
                    userId:responseUser.user.uid
                })
                console.log(document)
            }
        }catch(e){
            console.log(e)
        }
    }    

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
            
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="alguien@sample.com" {...register("email", {required: true})} />
                {errors.email && <Alert variant="danger">Campo Correo electrónico es obligatorio</Alert>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Tu Password" {...register("password", {required: true})} />
                {errors.password?.type === "required" && <Alert variant="danger">Campo Password es obligatorio</Alert>}
                {errors.password?.type === "minLength" && <Alert variant="danger">La contraseña debe tener al menos 8 caracteres</Alert>}
                {errors.password?.type === "maxLength" && <Alert variant="danger">La contraseña no debe superar los 16 caracteres</Alert>}
            </Form.Group>
            
            <Button variant="primary" type="submit">Continuar con el registro</Button>
        </Form>    

    </div>

    )
}

export default Signup