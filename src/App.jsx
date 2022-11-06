import Formulario from './Formulario';
import Titulos from './Titulos';


function App() {
  return (
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col col-lg-10">
        <Titulos />
      </div>
    </div>
    <div className="row justify-content-md-center">
      <div className="col col-lg-10">      
        <Formulario />
      </div>
    </div>
</div>  
  );
}
export default App;

