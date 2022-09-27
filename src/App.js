import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Feed from './components/Feed'
import Create from './components/Create'
import './styles/app.css'

function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
