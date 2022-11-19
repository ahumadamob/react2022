import React from "react"
import { Link } from "react-router-dom"
import { Button, Card, Col, Stack, ListGroup } from 'react-bootstrap';
const styles = {
  card:{
    width: '18rem',
    marginTop: "2rem"
  },
  button:{
    width: '50%'
  }
  
}


function Producto({
  id,
  name,
  price,
  description,
  image
}){
  return (
    <Col xs={12} sm={6} lg={4} xxl={3}>
      <Card style={styles.card}>
        <Card.Img variant="top" src={image} />
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
              <Button as={Link} to={`/producto/${id}`} variant="success" style={styles.button}>Ver detalle</Button>
              <Button as={Link} to={`/productos/modificar/${id}`} variant="primary" style={styles.button}>Editar</Button>
            </Stack>          
        </Card.Body>
      </Card>       
    </Col>
   
    /*
    <div className="col-2">
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-end"><span className="fw-bold">$</span>&nbsp;{price}</li>
          <li className="list-group-item text-center fw-light">{description}</li>
        </ul>
        <div className="card-body text-center">
          <Link to={`/producto/${id}`} class="btn btn-primary btn-sm">Ver Detalle</Link>
        </div>
        <div className="card-body text-center">
          <Link to={`/productos/modificar/${id}`} class="btn btn-success btn-sm">Modificar</Link>
        </div>       
      </div>      
    </div>
    */
  )
}

export default Producto
