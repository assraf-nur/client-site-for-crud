import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';
import UpdateUser from './Components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='user/add' element={<AddUser></AddUser>}/>
        <Route path='update/:id' element={<UpdateUser></UpdateUser>}/>
      </Routes>
    </div>
  );
}

export default App;
