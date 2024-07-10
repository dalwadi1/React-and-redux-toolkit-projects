import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Comps/Home'
import { Route, Routes } from 'react-router-dom';
import Layout from './Comps/layout/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
