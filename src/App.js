import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Producto from './Producto';
import LineaProducto from './LineaProducto';

function App() {
  return (
    <div className="App">
      <Header /> 
      <LineaProducto />
      <LineaProducto />
      <LineaProducto />
      <LineaProducto /> 
    </div>
  );
}

export default App;
