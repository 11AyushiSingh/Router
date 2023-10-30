
import './App.css';
import Home from './Home'
import Books from './Books';
import Favorites from './Favorites';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './Error';



function App() {
  return (
    <div >
      <BrowserRouter>
      
     <NavBar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Books' element={<Books/>}/>
     <Route path='/school' element={<Favorites/>}/>
     <Route path='/*' element={<Error/>}/>

     
     
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
