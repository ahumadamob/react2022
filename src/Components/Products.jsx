import React, {useState,useEffect} from "react"
import { Row } from "react-bootstrap"
import { getAllProducts } from "../Services/productService"
import Loading from "./Loading/Loading"
import Product from "./Product"
import Title from "./Title"

function Products(){
  const [ products, setProducts ] = useState([])
  const [ isLoading, setIsloading] = useState(true)

  useEffect(
    ()=>{
      const result = async ()=>{
        try{
          const products = await getAllProducts()
          setProducts(products)
          setIsloading(false)
        }catch(e){
          console.log(e)
        }       
      }
      result()
    },
    []
  )
  return (
    <Loading loading={isLoading}>
        <Title>Listado de Productos</Title>
        <Row>
            {products.map(product => <Product {...product.data()} id={product.id} />)}
        </Row> 
    </Loading>        
  ) 
}
export default Products
