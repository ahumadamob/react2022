import './App.css';

import NavBar from './Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import firebase from './Config/firebase';
import AuthProvider from './Context/AuthContext';
import { Container } from 'react-bootstrap';

function App() {
  console.log(firebase);
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <NavBar />          
          <Container className="mt-4">
            <Public />
          </Container>        
        </AuthProvider> 
      </Router> 
    </div>

  );
}

export default App;
