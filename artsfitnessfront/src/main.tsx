import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Alunos from './pages/Aluno/Alunos'
//import Pagamentos from './pages/Pagamentos'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import CriarAluno from './pages/Aluno/CriarAluno'
import EditarAluno from './pages/Aluno/EditarAluno'
import Pagamentos from './pages/Pagamento/Pagamentos'
import CriarPagamento from './pages/Pagamento/CriarPagamento'
import Login from './pages/Login/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/alunos",
    element: <Alunos/>
  },
  {
    path: "/criaraluno",
    element: <CriarAluno/>
  },
  {
    path: "/editaraluno",
    element: <EditarAluno/>
  },
  {
    path: "/pagamentos",
    element: <Pagamentos/>
  },
  {
    path: "/criarPagamento",
    element: <CriarPagamento/>
  },
]);

// const AppRoutes: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <PrivateRoute path="/home" element={<Home />} />
//       <PrivateRoute path="/alunos" element={<Alunos />} />
//       <PrivateRoute path="/criaraluno" element={<CriarAluno />} />
//       <PrivateRoute path="/editaraluno" element={<EditarAluno />} />
//       <PrivateRoute path="/pagamentos" element={<Pagamentos />} />
//       <PrivateRoute path="/criarPagamento" element={<CriarPagamento />} />
//     </Routes>
//   );
// };

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App></App>
  </React.StrictMode>
)
