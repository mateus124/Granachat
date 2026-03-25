import './App.css'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Dashboard from './views/Dashboard/Dashboard';
import Chat from './views/Chat/Chat';
import Settings from './views/Settings/Settings';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/chat' element={<Chat/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
