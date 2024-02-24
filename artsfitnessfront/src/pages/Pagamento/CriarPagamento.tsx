import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import './CriarPagamento.css'
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import SweetAlert2 from 'react-sweetalert2';

interface Aluno{
    id: number,
    nome: string
}

function CriarPagamento(){

const [alunos, setAlunos] = useState<Aluno[]>([]);
const [pagamento, setPagamento] = useState({
    valor: '',
    alunoId: '',
});

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () =>{
  setShow(true);
} 

const [swalProps, setSwalProps] = useState({});

const showAlert = () =>{
setSwalProps({
  show: true,
  title: 'Sucesso!',
  text: 'Pagamento Concluído!',
});
}

const getAlunos = async () =>{
    await axios.get<Aluno[]>('http://localhost:5197/api/alunos')
        .then(res => setAlunos(res.data))
        .catch((erro) => {
          console.error('Erro ao buscar dados da API:', erro);
        });
      };

const efetuarPagamento = async (e: FormEvent) => {
        e.preventDefault();
        console.log(pagamento)
        await axios.post('http://localhost:5197/api/pagamentos', pagamento, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
        .then(res => {
          console.log(res)
          handleClose();
          showAlert();
        } )
        .catch((erro) => {
          console.error('Erro ao buscar dados da API:', erro);
        });
      };
      
      useEffect(() => {
        getAlunos();
      }, []);
    return (
        <>
        <Header/>
        <h1 >Pagamento</h1>
        <Form className='formPagamento' onSubmit={efetuarPagamento}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="">
              <Form.Label>Valor</Form.Label>
              <Form.Control onChange={(e) => setPagamento({...pagamento, valor: e.target.value})} type="text" placeholder="Valor" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Aluno</Form.Label>
              <Form.Select onChange={(e) => setPagamento({...pagamento, alunoId: e.target.value})} >
                <option>Selecione...</option>
              {alunos.map((aluno) => (<option key={aluno.id} value={aluno.id}>{aluno.nome}</option>))}
              </Form.Select>
            </Form.Group>
          </Row>
    
          <Button variant="primary" onClick={handleShow}>
            Efetuar Pagamento
          </Button>

          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pagamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tem certeza que irá efetuar o pagamento?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary"  onClick={efetuarPagamento} >
            Efetuar Pagamento
          </Button>
        </Modal.Footer>
      </Modal>
        </Form>
        <SweetAlert2 {...swalProps} />
        </>
    
      );
}

export default CriarPagamento;