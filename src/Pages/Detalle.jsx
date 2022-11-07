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
              const responseData = await getByIdProductos(id)
              if(responseData.data){
                console.log(responseData.data);
                setProducto(responseData.data)
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
                    <h5 className="card-title">{producto.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{producto.category_id}</h6>
                    
                    <div className="row">
                      {producto.pictures.map( (picture) =>
                        <div className="col-2 shadow-sm p-3 mb-5 bg-body rounded m-2">
                          <img src={picture.url} className="d-block w-100 shadow-sm" alt={picture.id} />
                        </div>                      
                      )}  
                    </div> 
                    <hr />
                    <div className="row align-items-center">
                      
                      <div className="col-4">
                        Ubicación del vendedor: <span className="fw-bold">{producto.seller_address.city.name}</span> 
                      </div>

                      <div className="col-4">
                        Unidades vendidas: <span className="fw-bold">{producto.sold_quantity}</span> 
                      </div>
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