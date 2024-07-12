import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Comps/Home'
import { Route, Routes } from 'react-router-dom';
import Layout from './Comps/layout/Layout';
import { checkLogin } from "../Mycontext/loginContext.js";
import { cartItems } from "../Mycontext/cartContext.js";
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false)
  const [addcartItems, setCartitems] = useState([ ])

  return (
    <>

      <checkLogin.Provider value={{ login, setLogin }}>
        <cartItems.Provider value={{ addcartItems, setCartitems }}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </ cartItems.Provider>
      </checkLogin.Provider>

    </>
  )
}

export default App
