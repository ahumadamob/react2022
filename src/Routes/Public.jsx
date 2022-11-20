import { Route, Routes } from "react-router-dom"

import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import NotFound from '../Pages/NotFound'
import Home from '../Pages/Home'
import Checkout from "../Pages/Checkout"
import AddProduct from "../Pages/Products/AddProduct"
import EditProduct from "../Pages/Products/EditProduct"

function Public(){
    return(
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<Checkout />} />
          <Route path='/product/add' element={<AddProduct />} />
          <Route path='/product/edit/:id' element={<EditProduct />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Public