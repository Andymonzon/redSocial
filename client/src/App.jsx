import { Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';
import { ProtectedAuth } from './ProtectedAuth';

function App() {

  return (
    <Routes>
      <Route element={<ProtectedAuth />}>
        <Route element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/:id' element={<Home />} />
        </Route>
      </Route>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
