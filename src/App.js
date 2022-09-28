import Home from './pages/Home';
import Error from './pages/404';
import Blog from './pages/Blog';
import Blogsingle from './pages/Blogsingle';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Contactus from './pages/Contact-us';
import Productdetails from './pages/Productdetails';
import Shop from './pages/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Error' element={<Error />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Blogsingle' element={<Blogsingle />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/Productdetails' element={<Productdetails />} />
          <Route path='/Shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;