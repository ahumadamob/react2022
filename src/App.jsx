import './App.css';

import NavBar from './Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import firebase from './Config/firebase';

function App() {
  console.log(firebase);
  return (
    <div className="App">
      <div className='container'>
        <Router>        
          <NavBar />
          <Public />
        </Router> 
      </div>
    </div>
  );
}

export default App;
