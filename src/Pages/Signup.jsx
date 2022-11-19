import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { Form,  Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import firebase from '../Config/firebase';
import AlertCustom from "../Components/AlertCustom";
import { signupMessage } from "../Utils/errorMessaje";

function Signup(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupSuccess, setSignupSuccess] = useState(false)
    const [alert, setAlert] = useState({variant: '', text: ''})
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
                if(document){
                    setSignupSuccess(true)
                }
            }
        }catch(e){
            setAlert({variant: "danger", text: signupMessage[e.code] || "Ha ocurrido un error"})
            console.log(e)
        }
    }    

    return(
        <Container>
            {signupSuccess &&
            <Row>
                <Col>
                    <Alert variant="success">
                        Gracias por registrarte. Ahora puedes 
                        &nbsp;<Alert.Link as={Link} to={'/login'}  >iniciar sesión</Alert.Link>&nbsp;o en su lugar 
                        &nbsp;<Alert.Link as={Link} to={'/'} >volver al inicio</Alert.Link>
                    </Alert>
                </Col>
            </Row>
            }
            {!signupSuccess && 
            <>
            <Row>
                <Col>
                    <AlertCustom {...alert} />
                </Col>
            </Row>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="firstname">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Tu Nombre" {...register("firstname", { required: true })} />
                            {errors.firstname && <Alert variant="danger">Campo Nombre es obligatorio</Alert>}
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="lastname">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Tu Apellido" {...register("lastname", { required: true })} />
                            {errors.lastname && <Alert variant="danger">Campo Apellido es obligatorio</Alert>}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="alguien@sample.com" {...register("email", { required: true })} />
                            {errors.email && <Alert variant="danger">Campo Correo electrónico es obligatorio</Alert>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Tu Password" {...register("password", { required: true })} />
                            {errors.password?.type === "required" && <Alert variant="danger">Campo Password es obligatorio</Alert>}
                            {errors.password?.type === "minLength" && <Alert variant="danger">La contraseña debe tener al menos 8 caracteres</Alert>}
                            {errors.password?.type === "maxLength" && <Alert variant="danger">La contraseña no debe superar los 16 caracteres</Alert>}
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit">Continuar con el registro</Button>
                    </Col>
                </Row>
            </Form>
            </>
            }
        </Container>
    )
}

export default Signup