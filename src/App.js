import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import Header from './component/Pages/Header/Header';
import Services from './component/Pages/Services/Services';
import Blog from './component/Pages/Blog/Blog';
import About from './component/Pages/About/About';
import Login from './component/Pages/Login/Login';
import NotFound from './component/Pages/NotFound/NotFound';
import Register from './component/Pages/Register/Register';
import Checkout from './component/Pages/Checkout/Checkout';
import RequireAuth from './component/Pages/RequreAuth/RequireAuth';

function App() {
  return (
    <div className= "custom-bg">
    <Header></Header>
      <Routes>
        <Route path="/" element ={<Home></Home>}></Route>
        <Route path="/home" element ={<Home></Home>}></Route>
        <Route path="/services" element ={<Services></Services>}></Route>
        <Route path="/blog" element ={<Blog></Blog>}></Route>
        <Route path="/about" element ={<About></About>}></Route>
        <Route path="/login" element ={<Login></Login>}></Route>
        <Route path="/register" element ={<Register></Register>}></Route>
        <Route path="/checkout" element ={
          <RequireAuth>
        <Checkout></Checkout>
        </RequireAuth>
        }></Route>
        <Route path ="*" element = {<NotFound></NotFound>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
