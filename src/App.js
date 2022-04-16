import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import Header from './component/Pages/Header/Header';
import Services from './component/Pages/Services/Services';

function App() {
  return (
    <div className= "custom-bg">
      <Header></Header>
      <Routes>
        <Route path="/" element ={<Home></Home>}></Route>
        <Route path="/services" element ={<Services></Services>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
