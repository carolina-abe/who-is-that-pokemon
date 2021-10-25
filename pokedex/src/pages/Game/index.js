import "./style.scss";

import { ImagePokemon } from "../../components/ImagePokemon";
import { Keyboard } from "../../components/Keyboard";
import { Lives } from "../../components/Lives";
import { NamePokemon } from "../../components/NamePokemon";
import { ModalSuccess } from "../../components/ModalSuccess";
import { ModalError } from "../../components/ModalError";

import IconQuestion from "../../assets/images/icon-question.png";
import { useEffect, useState } from "react";
import { GetPokemons } from "../../services";
import { useHistory } from "react-router";

export function Game() {
  // History = Utilizado para redirecionamento de páginas (document.history)
  const history = useHistory();

  // Declaração de estados (states) (Pesquisar: React State, React Hooks State)
  const [idPokemon, setIdPokemon] = useState(0);
  const [namePokemon, setNamePokemon] = useState("");
  const [rightLetters, setRightLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  const [lives, setLives] = useState(10);

  const [chances, setChances] = useState(3);

  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [openModalError, setOpenModalError] = useState(false);

  useEffect(() => {
    if (!openModalSuccess) {
      // Validação se o modal de sucesso está aberto, se não estiver entra na função, "!" na frente, serve para negação
      let numberPokemon = Math.floor(Math.random() * 151); // Geração do valor randomico (Math.floor: Arredonda o valor)
      numberPokemon = numberPokemon > 0 ? numberPokemon : 1;
      setIdPokemon(numberPokemon);

      if (numberPokemon > 0) {
        // Chamada da api, passando por parametro o ID gerado acima
        GetPokemons(numberPokemon).then((data) => {
          if (data) {
            setNamePokemon(data.name.toUpperCase());
            setRightLetters([]);
            setWrongLetters([]);
          }
        });
      }
    }
  }, [openModalSuccess]);

  useEffect(() => {
    const nameReplace = namePokemon ? namePokemon.replace(/-/g, "") : "";

    if (
      nameReplace &&
      [...nameReplace].every((r) => rightLetters.includes(r)) // Pesquisar: Método every javascript | Percore o array e para cada item, executa a validação se a letra existe no array de letras certas
    ) {
      setChances(chances + 1);
      setOpenModalSuccess(true);
    }
  }, [rightLetters]); // Quando adicionado valor ao [] do useeffect, o useffect será chamado quando o valor dentro de [] alterar

  function onClickLetters(value) {
    if (!rightLetters.includes(value) && !wrongLetters.includes(value)) {
      // Valida se a letra ainda não foi selecionada
      if (namePokemon.includes(value)) {
        // Verifica se o value (letra) passada (clicada) existe no nome do pokémon
        setRightLetters([...rightLetters, value]);
      } else {
        setWrongLetters([...wrongLetters, value]);

        if (lives > 1) {
          setLives(lives - 1);
        } else {
          setLives(lives - 1);

          setOpenModalError(true);
        }
      }
    }
  }

  function getRandomLetter() {
    // Função para pegar uma letra aleatória quando clicar na pokébola de chances

    if (chances > 0) {
      setChances(chances - 1);

      let letterNotFound = [];

      [...namePokemon].forEach((i) => {
        // Percorre o array, e valie se a letra existe nas corretas, se não existir, adiciona a letra no array "letterNotFound"
        if (!rightLetters.includes(i)) {
          letterNotFound.push(i);
        }
      });

      onClickLetters(letterNotFound[0]);
    }
  }

  function getLetterStatus(letter) {
    // Função para saber o status da letra (certo) ou (errada)
    if (rightLetters.includes(letter)) {
      return "right";
    } else if (wrongLetters.includes(letter)) {
      return "wrong";
    }
  }

  return (
    <main className="game-main">
      <div className="game-image-pokemon">
        <header>
          <img src={IconQuestion} alt="question" id="question" />
        </header>
        <ImagePokemon id={idPokemon} showPicture={openModalSuccess} />
      </div>
      <div className="game-name-pokemon">
        <NamePokemon name={namePokemon.split("")} value={rightLetters} />
        <Lives number={lives} />
        <Keyboard
          onClickLetter={onClickLetters}
          chances={chances}
          onClickChances={getRandomLetter}
          checkStatus={getLetterStatus}
        />
      </div>
      <ModalSuccess
        open={openModalSuccess}
        onClickClose={() => setOpenModalSuccess(false)}
      />
      <ModalError
        open={openModalError}
        onClickClose={() => {
          setOpenModalError(false);
          history.push("/");
        }}
        onClickTryAgain={() => history.push("/")}
      />
    </main>
  );
}
