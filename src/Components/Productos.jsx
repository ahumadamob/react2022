import React, {useState,useEffect} from "react"
import { getAllProductos } from "../Services/productosServices"
import Producto from "./Producto"

function Productos(){
  const [productos,setProductos] = useState([])
  const [isLoading,setIsloading] = useState(true)

  useEffect(
    ()=>{
      const result = async ()=>{
        try{
          const responseData = await getAllProductos()
          console.log(responseData.data)
          setProductos(responseData.data.results)
          setIsloading(false)
        }catch(e){
          console.log(e)
        }
       
      }
      result()
    },
    []
  )
  if(isLoading){
      return(
        <div className="row justify-content-md-center pt-5" >
          <div className="col-md-11">
            <div className="row mt-2">
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>        
      )
  }else{
      return (
        <div className="row justify-content-md-center pt-5" >
          <div className="col-md-11">
            <div className="row mt-2">
                  <h3>Listado de Productos</h3>    
              </div> 

            <div className='row mt-1'>
              {productos.map(producto => <Producto {...producto} />)}
            </div>          
          </div>
        </div>
      )
  }   

}

export default Productos
