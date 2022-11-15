import { useForm } from "react-hook-form";
import {Button, Form} from 'react-bootstrap'
import firebase from '../Config/firebase'

function ProductosAlta(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        console.log(data)
        try{
            const document = await firebase.firestore().collection("productos")
            .add(data)
            console.log(document)
        }catch(e){
            console.log(e)
        }
    }

    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del Producto" {...register("name", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.name && <span>Campo Nombre del Producto es obligatorio</span>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" placeholder="Precio del Producto" {...register("price", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.price && <span>Campo Precio es Obligatorio</span>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Descripción del Producto" {...register("description", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.description && <span>Descripción del Producto es obligatorio</span>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" placeholder="URL de la Imagen del producto" {...register("image", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.image && <span>Imagen es Obligatoria</span>}
                    </Form.Text>
                </Form.Group>
                               
                <Button type="submit" variant="primary">Guardar</Button>
            </Form>
        </div>
    )
}
export default ProductosAlta