import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { Form,  Button, Alert, Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import firebase from '../Config/firebase';
import AlertCustom from "../Components/AlertCustom";
import { signupMessage } from "../Utils/errorMessaje";
import Title from "../Components/Title";
import ErrorField from "../Components/ErrorField";
import Loading from "../Components/Loading/Loading";

function Signup(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupSuccess, setSignupSuccess] = useState(false)
    const [alert, setAlert] = useState({variant: '', text: ''})
    const [passwordMatchError, setPasswordMatchError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit = async data => {
        if(data.password === data.passwordrepeat){
            setPasswordMatchError(false)
            setIsLoading(true)
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
                        setIsLoading(false)
                    }
                }
            }catch(e){
                setAlert({variant: "danger", text: signupMessage[e.code] || "Ha ocurrido un error"})
                setIsLoading(false)
                console.log(e)
            }           
        }else{
            setPasswordMatchError(true)
        }
    }    

    return(
        <Loading loading={isLoading} >
            <Container className="mt-4">
                {signupSuccess &&
                <>                
                    <Title>¡Ya eres parte de nosotros!</Title>
                    <Row>
                        <Col>
                            <Alert variant="success">
                                Gracias por registrarte. Ahora puedes 
                                &nbsp;<Alert.Link as={Link} to={'/login'}  >iniciar sesión</Alert.Link>&nbsp;o en su lugar 
                                &nbsp;<Alert.Link as={Link} to={'/'} >volver al inicio</Alert.Link>
                            </Alert>
                        </Col>
                    </Row>           
                </>
                }
                {!signupSuccess && 
                <>
                <Row>                
                    <Col>
                        <AlertCustom {...alert} />
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Title>Regístrate con nosotros</Title>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="alguien@sample.com" {...register("email", { required: true })} />
                                {errors.email && <ErrorField>Campo Correo electrónico es obligatorio</ErrorField>}
                            </Form.Group>
                        </Col>
                        <Col>
                        </Col>
                    </Row>                
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="firstname">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Tu Nombre" {...register("firstname", { required: true })} />
                                {errors.firstname && <ErrorField>Campo Nombre es obligatorio</ErrorField>}
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Tu Apellido" {...register("lastname", { required: true })} />
                                {errors.lastname && <ErrorField>Campo Apellido es obligatorio</ErrorField>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Tu Contraseña" {...register("password", { required: true })} />
                                {errors.password?.type === "required" && <ErrorField>La contraseña es obligatoria</ErrorField>}
                                {errors.password?.type === "minLength" && <ErrorField>La contraseña debe tener al menos 8 caracteres</ErrorField>}
                                {errors.password?.type === "maxLength" && <ErrorField>La contraseña no debe superar los 16 caracteres</ErrorField>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="passwordrepeeat">
                                    <Form.Label>Repetir contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Repite tu contraseña" {...register("passwordrepeat")} />
                                    {passwordMatchError && <ErrorField>Las contraseñas no coinciden</ErrorField>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Button variant="primary" type="submit">Continuar con el registro</Button>
                        </Col>
                    </Row>
                </Form>
                </>
                }
            </Container>
        </Loading>
    )
}

export default Signup