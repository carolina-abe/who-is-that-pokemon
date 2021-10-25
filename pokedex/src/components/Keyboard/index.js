import './style.scss';
import IconPokeball from "../../assets/images/icon-pokeball.png";
import IconRight from '../../assets/images/icon-right.png';
import IconWrong from '../../assets/images/icon-wrong.png';

const letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const lettersSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const lettersThirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

export function Keyboard({
  onClickLetter,
  onClickChances,
  chances,
  checkStatus,
}) {
  function letterStatus(letter) {
    // Função para retornar a imagem de certo ou errado
    switch (checkStatus(letter)) {
      case "right":
        return <img src={IconRight} alt="right" />;
      case "wrong":
        return <img src={IconWrong} alt="wrong" />;
      default:
        return null;
    }
  }

  return (
    <div className="keyboard-container">
      <div className="keyboard-button">
        {letters &&
          letters.map((item) => (
            <button onClick={() => onClickLetter(item)} key={item}>
              {item}
              {letterStatus(item)}
            </button>
          ))}
      </div>
      <div className="keyboard-button">
        {lettersSecondRow &&
          lettersSecondRow.map((item) => (
            <button onClick={() => onClickLetter(item)} key={item}>
              {item}
              {letterStatus(item)}
            </button>
          ))}
      </div>
      <div className="keyboard-button">
        {lettersThirdRow &&
          lettersThirdRow.map((item) => (
            <button onClick={() => onClickLetter(item)} key={item}>
              {item}
              {letterStatus(item)}
            </button>
          ))}
        <button className="button-chances" onClick={onClickChances}>
          <img src={IconPokeball} alt="Chances" id="pokeball"/>
          <div className="chances">
            <p>{chances}</p>
          </div>
        </button>
      </div>
    </div>
  );
}