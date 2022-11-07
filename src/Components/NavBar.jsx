import { Link } from "react-router-dom"

function NavBar(){
    return(
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link active" aria-current="page">Registro</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link active" aria-current="page">Ingresar</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
}

export default NavBar