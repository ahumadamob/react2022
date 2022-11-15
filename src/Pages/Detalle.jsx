import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getByIdProductos } from "../Services/productosServices"

function Detalle(){
    const {id} = useParams()
    
    const [producto,setProducto] = useState({})
    const [isLoading,setIsloading] = useState(true)

    useEffect(
        ()=>{
          const result = async ()=>{
            try{
              const productoData = await getByIdProductos(id)
              if(productoData){
                console.log(productoData.data());
                setProducto(productoData.data())
              }
              
              setIsloading(false)
            }catch(e){
              console.log(e)
            }
           
          }
          result()
        },
        [id]
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
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title">{producto.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{producto.description}</h6>
                    
                    <div className="row">
                      <img src={producto.image} className="d-block w-100 shadow-sm" alt={producto.image} />
                    </div> 
                    <hr />
                    <div className="row align-items-center">

                      <div className="col-2">
                        $ <span className="fw-bold">{producto.price}</span> 
                      </div>
                      <div className="col-2">
                        <button type="button" class="btn btn-success btn-lg">Comprar</button>
                      </div>                      
                    </div>
                    <p></p>                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
     } 
    
}

export default Detalle