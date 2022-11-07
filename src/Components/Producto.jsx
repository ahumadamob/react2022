import React from "react"
import { Link } from "react-router-dom"

function Producto({
  id,
  title,
  category,
  price,
  category_id,
  thumbnail
}){
  return (
    <div className="col-2">
      <div className="card">
        <img src={thumbnail} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-end"><span className="fw-bold">$</span>&nbsp;{price}</li>
          <li className="list-group-item text-center fw-light">{category_id}</li>
        </ul>
        <div className="card-body text-center">
          <Link to={`/producto/${id}`} class="btn btn-primary btn-sm">Ver Detalle</Link>
        </div>
      </div>      
    </div>
  )
}

export default Producto
