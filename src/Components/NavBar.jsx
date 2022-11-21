import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext";

function NavBar({login}){
  const context = useContext(AuthContext)
    return(
      <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                {
                  !context.login &&
                  <>
                    <Nav.Link as={Link} to="/signup">Registro</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  </>
                }
                {
                  context.login &&
                  <>                    
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/product/add">Nuevo Producto</NavDropdown.Item>
                    </NavDropdown>
                  </>
                }

                {
                  context.login &&
                  <>
                  <NavDropdown title={`${context.user.firstname} ${context.user.lastname}`} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={context.handlerLogout}>Cerrar Sesión</NavDropdown.Item>
                  </NavDropdown>
                  </>
                }
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </>
    )
}
export default NavBar