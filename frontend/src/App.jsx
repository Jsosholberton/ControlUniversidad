import{ HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'

import GeneradorQR from './paginas/GeneradorQR'

import Login from './paginas/Login'
import Nuevopassword from './paginas/Nuevopassword'
import Olvidepassword from './paginas/Olvidepassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Bienvenido from './paginas/Bienvenido'
import Estudiante from './paginas/Estudiante'

import {AuthProvider} from './context/AuthProvider'
import { EstudianteProvider } from './context/EstudianteProvider'

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <EstudianteProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='olvidepassword' element={<Olvidepassword />} />
            <Route path='olvidepassword/:token' element={<Nuevopassword />} />
            <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
            <Route path='generar-qr' element={<GeneradorQR />} />
            </Route>

            <Route path="/home" element={<RutaProtegida />}>
              <Route index element={<Bienvenido />} />
              <Route path=":id" element={<Estudiante />} />
            </Route>
          </Routes>
          </EstudianteProvider>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App
