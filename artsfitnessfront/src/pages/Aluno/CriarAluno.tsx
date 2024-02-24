import { FormEvent, useState, useRef, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './CriarAluno.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import ModalConfirmacao from '../../components/ModalConfirmacao/Modal';
import SweetAlert2 from 'react-sweetalert2';

function CriarAluno() {


  const [inputValue, setInputValue] = useState('');
  const [swalProps, setSwalProps] = useState({});

 const showAlert = () =>{
  setSwalProps({
    show: true,
    title: 'Sucesso!',
    text: 'Matrícula efetuada com sucesso!',
});
 }

  const [aluno, setAluno] = useState({
    nome:'',
    cpf: '',
    endereco: '',
    telefone: '',
    celular: '',
    planoId: 0,
    dataNascimento: '',
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{
    setShow(true);
  } 

  const handleSubmit = async (e: FormEvent) =>{
    e.preventDefault();
    try {
      const resposta = await axios.post('http://localhost:5197/api/alunos', aluno);
      handleClose();
      showAlert();
      console.log('Resposta da API:', resposta.data);
    } catch (erro) {
      console.error('Erro ao fazer a solicitação POST:', erro);
    }
    
  }

  useEffect(() => {
    setShow(false);
  }, []);

  return (
    <>
    <Header/>
    <h1 >Matriculando Aluno</h1>
    <Form className='formCriarAluno'>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Nome</Form.Label>
          <Form.Control value={aluno.nome} onChange={(e) => setAluno({...aluno, nome: e.target.value})}  type="text" placeholder="Nome" />
        </Form.Group>

        <Form.Group as={Col} controlId="">
          <Form.Label>CPF</Form.Label>
          <Form.Control onChange={(e) => setAluno({...aluno, cpf: e.target.value})}  type="text" placeholder="Somente Números" />
        </Form.Group>

        <Form.Group as={Col} controlId="">
          <Form.Label>Celular</Form.Label>
          <Form.Control onChange={(e) => setAluno({...aluno, celular: e.target.value})}  type="text" placeholder="Somente Números" />
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} className="mb-3" controlId="">
              <Form.Label>Endereço</Form.Label>
              <Form.Control onChange={(e) => setAluno({...aluno, endereco: e.target.value})}  placeholder="" />
            </Form.Group>
      <Form.Group as={Col} controlId="">
                <Form.Label>Telefone</Form.Label>
                <Form.Control onChange={(e) => setAluno({...aluno, telefone: e.target.value})}  type="text" placeholder="Somente Números" />
              </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Data Nascimento</Form.Label>
          <Form.Control onChange={(e) => setAluno({...aluno, dataNascimento: e.target.value})} type='date'/>
        </Form.Group>

        <Form.Group as={Col} controlId="">
          <Form.Label>Plano</Form.Label>
          <Form.Select onChange={(e) => setAluno({...aluno, planoId: parseInt(e.target.value)})} defaultValue="Nenhum">
            <option value={0}>Nenhum</option>
            <option value={1}>Mensal</option>
            <option value={2}>Semestral</option>
            <option value={3}>Anual</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Button variant="primary" onClick={handleShow}>
        Matricular
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Matrícula</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que irá adicionar esse aluno?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary"  onClick={handleSubmit} >
            Adicionar Aluno
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
    <SweetAlert2 {...swalProps} />
    </>
  );
}

export default CriarAluno;