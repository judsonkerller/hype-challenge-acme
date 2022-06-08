import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Register from "./pages/Register"
import ProductList from "./pages/ProductList";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/product" element={<Product />}>
        <Route index element={<Product />} />
      </Route>
      <Route path="/cart" element={<Cart />}>
        <Route index element={<Cart />} />
      </Route>
      <Route path="/register" element={<Register />}>
        <Route index element={<Register />} />
      </Route>
      <Route path="/productlist" element={<ProductList />}>
        <Route index element={<ProductList />} />
      </Route>
      <Route path="/login" element={<Login />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
};

export default App;