import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartContextProvider } from './context/cartContext';

import BaseLayout from "./layout/BaseLayout";
import Home from './pages/Home';
import Store from './pages/Store';
import Detail from './pages/Detail';
import Contact from './pages/Contact';
import Error404 from './pages/404';
import Update from './pages/Update';
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/tienda" element={<Store />}/>
            <Route path="/tienda/:category" element={<Store />}/>
            <Route path="/detalle/:id" element={<Detail />}/>
            <Route path='/contacto' element={<Contact />}/>
            <Route path='/update' element={<Update />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path="*" element={<Error404 />}/>
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
