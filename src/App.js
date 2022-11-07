import './App.css';
import Teams from './Components/Teams';
import Header from './Components/Header';
import Producto from './Components/Producto';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className='row'>
          <Teams />
        </div>        
      </div>
    </div>
  );
}

export default App;
