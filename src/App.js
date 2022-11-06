import './App.css';
import Header from './Header';
import Producto from './Producto';

function App() {
  return (
    <div className="App">
      <Header />       
      <div className="lineaProducto">
        <Producto nombre="Blue Jean" descripcion ="Talles del 40 al 58" sku="4225-776-3234" precio="12.400" cantidad ="1" />
        <Producto nombre="T-Shirt" descripcion ="Lisas y a rayas horizontales" sku="4421-221-5643" precio="6.300" cantidad ="1" />
        <Producto nombre="Medias deportivas" descripcion ="Pack colores surtidos" sku="7301-373-1209" precio="3.200" cantidad ="5" />
      </div>
    </div>
  );
}

export default App;
