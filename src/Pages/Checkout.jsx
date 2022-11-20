import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../Components/Loading/Loading"
import { getProductById } from "../Services/productService"

function Checkout(){
    const {id} = useParams()    
    const [ product, setProduct ] = useState({})
    const [ isLoading, setIsloading ] = useState(true)

    useEffect(
        ()=>{
          const result = async ()=>{
            try{
              const productData = await getProductById(id)
              if(productData){
                setProduct(productData.data())
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
        return (
          <Loading loading={isLoading}>
            <div className="row justify-content-md-center pt-5" >
              <div className="col-md-11">
                <div className="row mt-2">
                  <div className="card" >
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{product.description}</h6>
                      
                      <div className="row">
                        <img src={product.image} className="d-block w-100 shadow-sm" alt={product.image} />
                      </div> 
                      <hr />
                      <div className="row align-items-center">

                        <div className="col-2">
                          $ <span className="fw-bold">{product.price}</span> 
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
          </Loading>
        )

    
}

export default Checkout