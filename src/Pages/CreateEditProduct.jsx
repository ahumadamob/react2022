import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import firebase from '../Config/firebase'
import Loading from "../Components/Loading/Loading"
import Title from "../Components/Title"
import { Form,  Button, Alert, Container, Row, Col, Stack } from 'react-bootstrap';
import ErrorField from "../Components/ErrorField";
import AlertCustom from "../Components/AlertCustom";
import { Link, useParams, useNavigate } from "react-router-dom"
import { deleteProduct, getProductById, updateProduct } from "../Services/productService"

function CreateEditProduct(){

    const {id} = useParams()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const [saveSuccess, setSaveSuccess] = useState(false)
    const [alert, setAlert] = useState({variant: '', text: ''})
    const [title, setTitle] = useState('')
    const [idToEdit, setIdToEdit] = useState('')
    const navigate = useNavigate()

    useEffect(
        ()=>{
          const result = async ()=>{
            setIsLoading(true)
            try{
              const productData = await getProductById(id)
              if(productData){
                setValue("name", productData.data().name)
                setValue("price", productData.data().price)
                setValue("description", productData.data().description)
                setValue("image", productData.data().image)
                setIdToEdit(id)
                setIsLoading(false)
              }
            }catch(e){
              console.log(e)
              setIsLoading(false)
            }           
          }

          setSaveSuccess(false)
          if(id){
            setTitle("Modifica tu producto")
            result()
          }else{
            setTitle("Agrega un nuevo producto")
            setValue("name", "")
            setValue("price", "")
            setValue("description", "")
            setValue("image", "")            
          }
        },
        [id, setValue]
      )

    const onSubmit = async data => {
        setIsLoading(true)
        if(id){
            try{
                await updateProduct(id,data)
                setTitle("Producto actualizado correctamente")
                setSaveSuccess(true)
                setIsLoading(false) 
            }catch(e){
                console.log(e)
                setIsLoading(false)
                setSaveSuccess(false)
                setAlert({variant: "danger", text: "Ha ocurrido un error"})
            }

        }else{
            try{
                const document = await firebase.firestore().collection("products").add(data)
                console.log(document.id)
                if(document){
                    setIdToEdit(document.id)
                    setTitle("Producto agregado correctamente")
                    setSaveSuccess(true)
                    setIsLoading(false)
                }
            }catch(e){
                console.log(e)
                setIsLoading(false)
                setSaveSuccess(false)
                setAlert({variant: "danger", text: "Ha ocurrido un error"})
            }           
        }
    }

    const handleDelete = async () => {
        try{
            await deleteProduct(id)
            navigate("/")
        }catch(e){
            console.log(e)
        }
    }

    return(
        <Loading loading={isLoading} >
            <Container className="mt-4">
                {saveSuccess &&
                    <>                
                        <Title>{title}</Title>
                        <Row>
                            <Col>
                                <Alert variant="success">
                                    El producto ha sido guardado correctamente. Puedes
                                    &nbsp;<Alert.Link as={Link} to={'/'} >ver este producto en el listado principal</Alert.Link>&nbsp;o también es posible
                                    &nbsp;<Alert.Link as={Link} to={`/product/edit/${idToEdit}`} >editarlo desde aquí</Alert.Link>
                                    
                                </Alert>
                            </Col>
                        </Row>           
                    </>
                }
                {!saveSuccess && 
                <>
                    <Row>                
                        <Col>
                            <AlertCustom {...alert} />
                        </Col>
                    </Row>               
                    <Title>{title}</Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre del Producto" {...register("name", { required: true })} />
                            {errors.name && <ErrorField>Campo Nombre del Producto es obligatorio</ErrorField>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" placeholder="Descripción del Producto" {...register("description", { required: true })} />
                            {errors.description && <ErrorField>Campo Descripción es obligatorio</ErrorField>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="text" placeholder="Precio del Producto" {...register("price", { required: true })} />
                            {errors.price && <ErrorField>Campo Precio es obligatorio</ErrorField>}
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>URL Imagen</Form.Label>
                            <Form.Control type="text" placeholder="URL de la Imagen del producto" {...register("image")} />
                        </Form.Group>
                        <Stack direction="horizontal" gap={3}>
                            <Button type="submit" variant="primary">Guardar</Button>
                            {id &&
                                <Button variant="danger" onClick={handleDelete}>Eliminar</Button> 
                            }
                        </Stack>        
                    </Form>
                </>
                }
            </Container>
        </Loading>
    )
}
export default CreateEditProduct