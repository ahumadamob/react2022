import { Route, Routes } from "react-router-dom"

import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Home from '../Pages/Home';
import Detalle from "../Pages/Detalle";
import ProductosAlta from '../Pages/ProductosAlta';
import ProductosModificar from "../Pages/ProductosModificar";

function Public(){
    return(
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/producto/:id' element={<Detalle />} />
          <Route path='/productos/alta' element={<ProductosAlta />} />
          <Route path='/productos/modificar/:id' element={<ProductosModificar />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Public