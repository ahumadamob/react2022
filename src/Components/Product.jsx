import { React, useContext } from "react"
import { Link } from "react-router-dom"
import { Button, Card, Col, Stack, ListGroup } from "react-bootstrap"
import { AuthContext } from "../Context/AuthContext";
import ProductImage from "./ProductImage";

const styles = {
  card:{
    width: '18rem',
    marginTop: "2rem"
  },
  button:{
    width: '50%'
  }
  
}

function Product({
  id,
  name,
  price,
  description,
  image
}){
  const context = useContext(AuthContext)
  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card style={styles.card}>
        <ProductImage src={image} smallsize={true} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{description}</Card.Subtitle>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
          <Stack direction="horizontal" gap={2}>
            <span className="ms-auto">$</span>
            <span>{price}</span>
          </Stack>            
        </ListGroup.Item>
        </ListGroup>
        <Card.Body>
            <Stack direction="horizontal" gap={3}>
              <Button as={Link} to={`/product/${id}`} variant="success" style={styles.button}>Ver detalle</Button>
              {context.login &&
              <Button as={Link} to={`/product/edit/${id}`} variant="primary" style={styles.button}>Editar</Button>
              }
            </Stack>          
        </Card.Body>
      </Card>       
    </Col>
  )
}
export default Product
