import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AddBlog from './components/AddBlog';
import { Route,Routes } from 'react-router-dom';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <AddBlog/> */}
      {/* <DashBoard/> */}
      <Routes>
        <Route path='/Addblog' element={<AddBlog/>}></Route>
        <Route path='/DashBoard' element={<DashBoard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
