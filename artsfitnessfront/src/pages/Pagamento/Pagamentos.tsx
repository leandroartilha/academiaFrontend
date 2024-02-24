import Header from "../../components/Header/Header";
import Table from 'react-bootstrap/Table';
import './Pagamentos.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

interface Pagamento{
id: number,
dataPagamentoFormatada: string,
nomeAluno: string,
valor: number
}

function Pagamentos(){

const [pagamentos, setPagamentos] = useState<Pagamento[]>([])

const getPagamentos = async () =>{
    await axios.get<Pagamento[]>('http://localhost:5197/api/pagamentos')
        .then(res => setPagamentos(res.data))
        .catch((erro) => {
          console.error('Erro ao buscar dados da API:', erro);
        });
}

useEffect(() => {
    getPagamentos();
  }, []);

    return (
        <>
        <Header/>
        <Button href='/criarpagamento' variant="primary" className='botaoCriarPagamento'>Efetuar Pagamento</Button>{' '}
        <div className="fundo">
        <Table className="tabela" striped bordered hover>
          <thead>
            <tr>
              <th>Data</th>
              <th>Aluno</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {pagamentos.map((item) => (            
            <tr key={item.id}>
              <td>{item.dataPagamentoFormatada}</td>
              <td>{item.nomeAluno}</td>
              <td>R$ {item.valor}</td>
            </tr>))}

          </tbody>
        </Table>

        </div>
        </>
      );
}

export default Pagamentos;