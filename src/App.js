import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Feed from './components/home/feed/Feed'
import Create from './components/home/create/Create'

function App() {
  return (
    <div>
      <AuthProvider>
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
