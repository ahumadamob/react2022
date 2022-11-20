import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Button, Form } from 'react-bootstrap'
import firebase from '../../Config/firebase'
import { useEffect } from "react";
import { getProductById, updateProduct, deleteProduct } from "../../Services/productService"

function EditProduct(){
    const {id} = useParams()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    useEffect(
        ()=>{
          const result = async ()=>{
            try{
              const productData = await getProductById(id)
              if(productData){
                setValue("name", productData.data().name)
                setValue("price", productData.data().price)
                setValue("description", productData.data().description)
                setValue("image", productData.data().image)
              }
            }catch(e){
              console.log(e)
            }
           
          }
          result()
        },
        [id]
      )

    const onSubmit = async data => {
        try{
            const document = await updateProduct(id,data)
        }catch(e){
            console.log(e)
        }
    }
    const handleDelete = async ()=>{
        try{
            const document = await deleteProduct(id)
        }catch(e){
            console.log(e)
        }
    }

    return(
        <div>
            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre" {...register("name", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.name && <span>This field is required</span>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre" {...register("price", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.price && <span>This field is required</span>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre" {...register("description", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.description && <span>This field is required</span>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" placeholder="Ingresar nombre" {...register("image", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.image && <span>This field is required</span>}
                    </Form.Text>
                </Form.Group>
                
               
                <Button type="submit" variant="primary">Guardar</Button>
            </Form>
        </div>
    )
}
export default EditProduct