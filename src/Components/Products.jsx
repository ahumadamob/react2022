import React, {useState,useEffect} from "react"
import { Row } from "react-bootstrap"
import { getAllProducts } from "../Services/productService"
import Loading from "./Loading/Loading"
import Product from "./Product"

function Products(){
  const [ products, setProducts ] = useState([])
  const [ isLoading, setIsloading] = useState(true)
  const [buscar, setBuscar] = useState('messi')

  useEffect(
    ()=>{
      const result = async ()=>{
        try{
          const products = await getAllProducts(buscar)
          setProducts(products)
          setIsloading(false)
        }catch(e){
          console.log(e)
        }       
      }
      result()
    },
    [buscar]
  )
  return (
    <Loading loading={isLoading}>
      <div className="row justify-content-md-center pt-5" >
        <div className="col-md-11">
          <div className="row mt-2">
                <h3>Listado de Productos</h3>
                <input type="text" value={buscar} onChange={(e)=>setBuscar(e.target.value)} />    
            </div>  
          <Row>
            {products.map(product => <Product {...product.data()} id={product.id} />)}
          </Row>             
      
        </div>
      </div> 
    </Loading>        
  ) 
}

export default Products
