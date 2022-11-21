import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { Form,  Button, Container, Row, Col } from 'react-bootstrap';
import { useState, useContext } from "react";
import firebase from '../Config/firebase';
import AlertCustom from "../Components/AlertCustom";
import { loginMessage } from "../Utils/errorMessaje";
import Title from "../Components/Title";
import ErrorField from "../Components/ErrorField";
import Loading from "../Components/Loading/Loading";
import { AuthContext } from "../Context/AuthContext";

function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const [alert, setAlert] = useState({variant: '', text: ''})
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit = async data => {
        setIsLoading(true)
        try{
           const responseUser = await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
           if(responseUser.user.uid){
            const userDocument = await firebase.firestore().collection("users")
            .where("userId","==",responseUser.user.uid)
            .get()
            const user = userDocument.docs[0].data()
            console.log("user", user)
            context.handlerLogin(user)
            navigate("/")
           }
        }catch(e){
            setAlert({variant:'danger',text: loginMessage[e.code] || 'Ha ocurrido un error'})
            setIsLoading(false)
        }
    }    

    return(
        <Loading loading={isLoading} >
            <Container className="mt-4">
                <Row>                
                    <Col>
                        <AlertCustom {...alert} />
                    </Col>
                </Row>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Title>Inicio de Sesión</Title>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="alguien@sample.com" {...register("email", { required: true })} />
                                {errors.email && <ErrorField>Campo Correo electrónico es obligatorio</ErrorField>}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Tu Contraseña" {...register("password", { required: true })} />
                                    {errors.password?.type === "required" && <ErrorField>La contraseña es obligatoria</ErrorField>}
                                </Form.Group>
                        </Col>
                    </Row>                
                    <Row>
                        <Col></Col>
                        <Col>
                            <Button variant="primary" type="submit">Iniciar Sesión</Button>
                        </Col>
                    </Row>
                </Form>               
            </Container>
        </Loading>
    )
}

export default Login