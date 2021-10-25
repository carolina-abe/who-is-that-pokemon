import './style.scss';
// ID = Recebe por parametro o id randômico
// preventDefault = Previne o comportamento padrão da função chamada (onDragStart)
export function ImagePokemon({id, showPicture}){
  return(
    <div className={`shadow-pokemon ${showPicture && "active"}`}>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
        alt="Pokemon"
        onDragStart={(event) => event.preventDefault()}
        />
    </div>
  );
}