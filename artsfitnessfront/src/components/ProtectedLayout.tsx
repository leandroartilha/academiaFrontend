import { Children } from "react";
import { UseAuth } from "../context/AuthProvider/useAuth";
import { Nav } from "react-bootstrap";

export const ProtectedLayout = ({children}:{children: JSX.Element}) => {

    const auth = UseAuth();

    if(!auth.username){
        return(
            <>
            <h1>Sem acesso</h1>
            <Nav.Link href="/login">Faça o Login</Nav.Link>
            </>
        ) 
    }

    return children;
}