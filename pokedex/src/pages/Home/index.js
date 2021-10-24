import './style.scss';
import ImagePokemon from '../../assets/images/image-pokemon.png'
// import ImageQuestion from '../../assets/images/icon-question.png'

function Home(){
  return(
    <main className="main-home">
      <h1>Who is that</h1>
      <img src={ImagePokemon} alt="Pokemon" />
      <h1>?</h1>
      {/* <img src={ImageQuestion} alt="Question"/> */}
      <button >Start</button>
    </main>
  );
} 

export default Home;