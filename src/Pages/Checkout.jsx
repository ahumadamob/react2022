import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Card, Button, Row, Col, Stack, Alert } from "react-bootstrap"
import Loading from "../Components/Loading/Loading"
import { getProductById } from "../Services/productService"
import Title from "../Components/Title"
import ProductImage from "../Components/ProductImage"
import "./Checkout.css"

function Checkout(){
    const {id} = useParams()    
    const [product, setProduct] = useState({})
    const [isLoading, setIsloading] = useState(false)
    const [soldOut, setSoldOut] = useState(false)



    useEffect(
        ()=>{
          setIsloading(true)
          const result = async ()=>{
            try{
              const productData = await getProductById(id)
              if(productData){
                setProduct(productData.data())
                setIsloading(false)
              }              
              
            }catch(e){
              console.log(e)
              setIsloading(false)
            }           
          }
          result()
        },
        [id]
      )

      const handleClick = () => setSoldOut(true);

      return (
        <Loading loading={isLoading}>
          <Title>Checkout de Producto</Title>
          <Card>
            <Card.Header>Producto seleccionado</Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Row className="pricebox">
                    <Col>
                      <Stack direction="horizontal" gap={2}>
                        <span className="ms-auto">$</span>
                        <span className="price">{product.price}</span>
                      </Stack> 
                    </Col>
                  </Row>
                  <Row >
                    <Col>                    
                    {soldOut &&
                      <Alert variant="success">¡Gracias por tu compra!</Alert>
                    }
                    {!soldOut &&
                      <Button variant="success" onClick={handleClick} className="button">Comprar</Button>
                    }                      
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <ProductImage src={product.image} />
                </Col>
              </Row>
            </Card.Body>
          </Card>          
        </Loading>
      )    
}

export default Checkout