import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import Login from './components/Login'
import Register from './components/Register'
import Feed from './components/Feed'
import Create from './components/Create'

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
