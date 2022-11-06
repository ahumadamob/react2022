import React, {useState} from "react";

function Producto({nombre, descripcion, sku, precio, cantidad}) {
    const [mensaje, setMensaje] = useState('');
    return(
        <div className="producto">
            <h2>{nombre}</h2>
            <h3>{descripcion}</h3>
            <p>{sku}</p>
            <p>Precio: $ {precio}</p>
            <p>Cantidad: {cantidad}</p>
            <p>{mensaje}</p>
            <button onClick={() => setMensaje('Gracias por su compra')}>Comprar</button>
        </div>
    );

}

export default Producto;