import React, {Component} from "react";
import Producto from "./Producto";

class LineaProducto extends Component{
    render(){
        return (
            <div className="lineaProducto">
                <Producto />
                <Producto />
                <Producto />
            </div>
        )
    }
}

export default LineaProducto;