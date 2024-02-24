import { Button, Form } from "react-bootstrap";
import './Login.css'
import { FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { UseAuth } from "../../context/AuthProvider/useAuth";


function Login() {

    const auth = UseAuth();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        Username: "",
        Password: ""
    })

    // const headers = {
    //     'Content-Type': 'application/json',
    //     // Outros cabeçalhos, se necessário
    // };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            await auth.authenticate(user.Username, user.Password);

            navigate('/home')
        } catch (error) {

        }
        // await axios.post('http://localhost:5197/login', null,{
        //     params: {
        //         Username: user.Username,
        //         Password: user.Password,
        //       },
        //       headers: {
        //         'Accept': '*/*',
        //       },
        // })
        // .then(res => {
        //     localStorage.setItem("bearer-token",res.data)
        //     })
        //     .catch((erro) => {
        //       console.error('Erro ao buscar dados da API:', erro);
        //     });
    }


    return (
        <>
            <Form className="formLogin" onSubmit={handleSubmit}>
                <h1>Bem Vindes</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control type="text" placeholder="Usuário" onChange={(e) => setUser({...user, Username: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" onChange={(e) => setUser({...user, Password: e.target.value})}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
        </>
    );
}

export default Login;

