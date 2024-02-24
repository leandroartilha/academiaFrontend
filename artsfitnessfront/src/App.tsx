import { BrowserRouter as Router, Route, Link, RouterProvider, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CriarAluno from './pages/Aluno/CriarAluno';
import Alunos from './pages/Aluno/Alunos';
import Pagamentos from './pages/Pagamento/Pagamentos';
import CriarPagamento from './pages/Pagamento/CriarPagamento';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login/Login';
import { AuthProvider } from './context/AuthProvider/Index';
import { Switch } from '@chakra-ui/react';
import { ProtectedLayout } from './components/ProtectedLayout';
import EditarAluno from './pages/Aluno/EditarAluno';

function App() {
      return (
        <AuthProvider>
          <Router>
            <Routes>
            <Route path='/' element={
                <ProtectedLayout>
                  <Home/>
                </ProtectedLayout>
              } />
              <Route path='/profile' element={
                <ProtectedLayout>
                  <h2>Componente profile</h2>
                </ProtectedLayout>
              } />
                  <Route path='/home' element={
                <ProtectedLayout>
                  <Home/>
                </ProtectedLayout>
              } />
              <Route path='/alunos' element={
                <ProtectedLayout>
                  <Alunos/>
                </ProtectedLayout>
              } />
              <Route path='/criaraluno' element={
                <ProtectedLayout>
                  <CriarAluno/>
                </ProtectedLayout>
              } />
              <Route path='/editaraluno' element={
                <ProtectedLayout>
                  <EditarAluno/>
                </ProtectedLayout>
              } />
              <Route path='/pagamentos' element={
                <ProtectedLayout>
                  <Pagamentos/>
                </ProtectedLayout>
              } />
                <Route path='/criarpagamento' element={
                <ProtectedLayout>
                  <CriarPagamento/>
                </ProtectedLayout>
              } />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Router>
        </AuthProvider>
      );
    }

export default App;