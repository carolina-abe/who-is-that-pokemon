import './style.scss';
import ImagePokemon from '../../assets/images/image-pokemon.png'
// import ImageQuestion from '../../assets/images/icon-question.png'
import { useHistory } from 'react-router';

 export function Home(){
 const history = useHistory(); {/* pega o histórico do nav e redireciona para a página do jogo */}
  return(
    <main className="main-home">
      <h1>Who is that</h1>
      <img src={ImagePokemon} alt="Pokemon" />
      <h1>?</h1>
      {/* <img src={ImageQuestion} alt="Question"/> */}
      <button onClick={() => history.push("/game")}>Start</button>
    </main>
  );
} 
