import './styles/reset.css'
import './styles/global.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { UserRegister } from './pages/UserRegister'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
