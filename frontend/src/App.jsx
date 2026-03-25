import './App.css'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Dashboard from './views/Dashboard/Dashboard';
import Chat from './views/Chat/Chat';
import Settings from './views/Settings/Settings';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route
          path='/dashboard'
          element={(
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          )}
        ></Route>
        <Route
          path='/chat'
          element={(
            <ProtectedRoute>
              <Chat/>
            </ProtectedRoute>
          )}
        ></Route>
        <Route
          path='/settings'
          element={(
            <ProtectedRoute>
              <Settings/>
            </ProtectedRoute>
          )}
        ></Route>
      </Routes>
    </Router>
  )
}

export default App
