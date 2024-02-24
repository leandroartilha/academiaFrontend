import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Button } from 'react-bootstrap';
import { FormEvent } from 'react';
import { UseAuth } from '../../context/AuthProvider/useAuth';

function Header(){

  const auth = UseAuth();

  const encerrarSessao = async (e: FormEvent) =>{
    e.preventDefault();
    await auth.logout();
  }

    return(
    <>
    <Navbar className='navBarTop' bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Art's Fitness</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Alunos">Alunos</Nav.Link>
            <Nav.Link href="/criaraluno">Criar Aluno</Nav.Link>
            <Nav.Link href="/pagamentos">Pagamentos</Nav.Link>
            <Nav.Link href="/criarpagamento">Fazer Pagamento</Nav.Link>
            <Button onClick={encerrarSessao}>Logout</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}

export default Header;