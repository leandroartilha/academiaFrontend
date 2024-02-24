import Header from '../../components/Header/Header';
import './CriarAluno.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Badge, Card } from 'react-bootstrap';




function EditarAluno() {

  const [aluno, setAluno] = useState({
    id: 0,
    nome: '',
    cpf: '',
    endereco: '',
    dataNascimento: '',
    planoId: '',
    dataNascimentoFormatada: '',
    statusPagamentoId: 0,
    statusAlunoPagamento: 0
  });

  const idAluno = localStorage.getItem("idAluno");

  const fetchData = async () => {
    await axios.get('http://localhost:5197/api/alunos/' + idAluno)
    .then(res => {
      setAluno({...aluno,
        id: res.data.id,
        nome: res.data.nome,
        cpf: res.data.cpf,
        endereco: res.data.dataUltimoPagamento,
        dataNascimento: res.data.dataNascimento,
        planoId: res.data.planoId,
        dataNascimentoFormatada: res.data.dataNascimentoFormatada,
        statusPagamentoId: res.data.statusPagamento,
        statusAlunoPagamento: res.data.statusAlunoPagamento
        });
    })
    .catch((erro) => {
      console.error('Erro ao buscar dados da API:', erro);
    });
  };


  const updateAluno = async (e: FormEvent) => {
    e.preventDefault()
    console.log(aluno)
    await axios.put('http://localhost:5197/api/Alunos/1', aluno, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
    console.log(res.data)
    })
    .catch((erro) => {
      console.error('Erro ao buscar dados da API:', erro);
    });
  };

useEffect(() => {
  fetchData();
  
}, []);


let conteudo;
if(aluno.statusAlunoPagamento <= 30){
  conteudo = <Card.Subtitle className="mb-2 text-muted"><Badge bg="success">Em dia</Badge></Card.Subtitle>;
}
else if(aluno.statusAlunoPagamento > 30 && aluno.statusAlunoPagamento < 3000){
  conteudo = <Card.Subtitle className="mb-2 text-muted"><Badge bg="danger">Atrasado</Badge></Card.Subtitle>;
}else{
  conteudo = <Card.Subtitle className="mb-2 text-muted"><Badge bg="secondary">Indefinido</Badge></Card.Subtitle>;
}

  return (
    <>
    <Header/>
    <Form className='formCriarAluno' onSubmit={updateAluno}>
      <Row className="mb-3">
      <Form.Group as={Col} controlId="">
        {conteudo}
      </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="">
          <Form.Label>Nome</Form.Label>
          <Form.Control value={aluno.nome} onChange={(e) => setAluno({...aluno, nome: e.target.value})} type="text" placeholder="Nome" />
        </Form.Group>
        <Form.Group as={Col} controlId="">
          <Form.Label>CPF</Form.Label>
          <Form.Control value={aluno.cpf} onChange={(e) => setAluno({...aluno, cpf: e.target.value})} type="text" placeholder="Somente Números" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Endereço</Form.Label>
        <Form.Control value={aluno.endereco} onChange={(e) => setAluno({...aluno, endereco: e.target.value})} placeholder="" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Data Nascimento</Form.Label>
          <Form.Control value={aluno.dataNascimentoFormatada} onChange={(e) => setAluno({...aluno, dataNascimentoFormatada: e.target.value})} type='date'/>
        </Form.Group>
        <Form.Group as={Col} controlId="">
          <Form.Label>Plano</Form.Label>
          <Form.Select value={aluno.planoId} onChange={(e) => setAluno({...aluno, planoId: e.target.value})}>
            <option value={'1'}>Nenhum</option>
            <option value={'2'}>Mensal</option>
            <option value={'3'}>Semestral</option>
            <option value={'4'}>Anual</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Atualizar
      </Button>
    </Form>
    </>

  );
}

export default EditarAluno;