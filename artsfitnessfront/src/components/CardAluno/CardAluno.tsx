import Card from 'react-bootstrap/Card';
import './CardAluno.css'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';

interface IAluno{
  aluno:{
    id: string,
    nome: string,
    cpf: string,
    dataNascimento: string,
    dataUltimoPagamento: string,
    statusPagamentoId: number;
    dataNascimentoFormatada: string;
    dataUltimoPagamentoFormatada: string;
    statusAlunoPagamento: number
  } 
}

function CardAluno(props: IAluno) {

  function setLocal(){
    localStorage.setItem("idAluno", props.aluno.id);
  }
  
  let conteudo;
  let conteudoDataUltimoPagamento;
  if(props.aluno.statusAlunoPagamento <= 30){
    conteudo = <Card.Subtitle className="mb-2 text-muted"><Badge bg="success">Em dia</Badge></Card.Subtitle>;
    conteudoDataUltimoPagamento = <Card.Subtitle  className="mb-2 text-muted">Último Pagamento: {props.aluno.dataUltimoPagamentoFormatada}</Card.Subtitle>;
  }
  else if(props.aluno.statusAlunoPagamento > 30 && props.aluno.statusAlunoPagamento < 3000){
    conteudo = <Card.Subtitle className="mb-2 text-muted"><Badge bg="danger">Atrasado</Badge></Card.Subtitle>;
    conteudoDataUltimoPagamento = <Card.Subtitle  className="mb-2 text-muted">Último Pagamento: {props.aluno.dataUltimoPagamentoFormatada}</Card.Subtitle>;
  }
  else{
    conteudo = <Card.Subtitle className="mb-2 text-muted"><Badge bg="secondary">Indefinido</Badge></Card.Subtitle>;
    conteudoDataUltimoPagamento = <Card.Subtitle  className="mb-2 text-muted">Sem Pagamento</Card.Subtitle>;
  }






 

  return (
    <Card style={{ width: '18rem' }} className='cardAluno'>
      <Card.Body>
        <Row style={{ marginBottom: '1rem' }} >
          <Col sm={8}>
            <Card.Title>{props.aluno.nome}</Card.Title>
          </Col>
          <Col sm={4}>
            {conteudo}
          </Col>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
        {conteudoDataUltimoPagamento}
        </Row>


        <Container>
      <Row>
        <Col>
        <Card.Link onClick={setLocal}  href="/editaraluno"><Button variant="outline-primary">Editar</Button>{' '}</Card.Link>
        </Col>
      <Col>
      <Card.Link onClick={setLocal}  href="/editaraluno"><Button variant="outline-danger">Excluir</Button>{' '}</Card.Link>
      </Col>
      </Row>
    </Container>
       
      </Card.Body>
    </Card>
  );
}

export default CardAluno;