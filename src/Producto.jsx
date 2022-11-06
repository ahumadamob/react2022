import React, {Component} from "react";

class Producto extends Component {
    render(){
        return(
            <div className="producto">
                <h2>Blue Jean</h2>
                <h3>Talles del 40 al 58</h3>
                <p>SKU: 4225-776-3234</p>
                <p>Precio: $ 12.400</p>
                <p>Cantidad: 1</p>
            </div>
        );
    }
}

export default Producto;