import Header from '../../components/Header/Header';
import CardAluno from '../../components/CardAluno/CardAluno';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Alunos.css'
import { Button, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import './Alunos.css'

interface Aluninho {
    id: string;
    nome: string;
    cpf: string;
    dataNascimento: string;
    dataUltimoPagamento: string;
    statusPagamentoId: number;
    dataNascimentoFormatada: string;
    dataUltimoPagamentoFormatada: string;
    statusAlunoPagamento: number
  }
  
  const Alunos = () => {
    const [alunos, setAlunos] = useState<Aluninho[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    
  console.log(search);
      const fetchData = async () => {
        axios.get<Aluninho[]>('http://localhost:5197/api/alunos')
        .then(res => {
          setAlunos(res.data)
          console.log(res.data)
          setLoading(false);
        })
        .catch((erro) => {
          console.error('Erro ao buscar dados da API:', erro);
        });
      };

    useEffect(() => {
      setLoading(true);
      fetchData();
    }, []);

    return(<>
    <Header/>
      <Button href='/criaraluno' variant="primary" className='botaoFazerMatricula'>Fazer Matrícula</Button>{' '}
      {loading && 
      <div className='circle'>
        <Loading/>
      </div>
      }
      <Form className='pesquisador'>
        <InputGroup className='my-3'>
          <Form.Control
           onChange={(e) => setSearch(e.target.value)}
           placeholder='Pesquisar...'/>
        </InputGroup>
      </Form>
    <ul>
        {alunos.filter((item) =>{
          return search.toLocaleLowerCase() === ''
          ? item
          : item.nome.toLocaleLowerCase().includes(search);
        }).map((item) => (
          <li key={item.id}>
            <CardAluno aluno={item} />
          </li>
        ))}
      </ul>
    </>
    )
}

export default Alunos;