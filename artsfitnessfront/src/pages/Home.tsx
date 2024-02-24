import Header from "../components/Header/Header";
import { getUserLocalStorage } from "../context/AuthProvider/util";

function Home(){
    const name = "Art's Fitnesss"
    const user = getUserLocalStorage();
    return<>
    <Header/>
    <h1>Olá {user.username}</h1>
    <h1>Academia {name}</h1>
    </>
}

export default Home;