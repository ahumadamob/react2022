import React, {useState,useEffect} from "react"
import { Row, Spinner } from "react-bootstrap"
import { getAllProductos } from "../Services/productosServices"
import Loading from "./Loading/Loading"
import Producto from "./Producto"


function Productos(){
  const [productos,setProductos] = useState([])
  const [isLoading,setIsloading] = useState(true)
  const [buscar, setBuscar] = useState('messi')

  useEffect(
    ()=>{
      const result = async ()=>{
        try{
          const productos = await getAllProductos(buscar)
          console.log(productos)
          setProductos(productos)
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
            {productos.map(producto => <Producto {...producto.data()} id={producto.id} />)}
          </Row>             
      
        </div>
      </div> 
    </Loading>        
  ) 

}

export default Productos
