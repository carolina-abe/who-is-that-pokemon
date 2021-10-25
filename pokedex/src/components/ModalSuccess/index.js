import { Modal } from "../Modal";
import './style.scss'
import IconPokeball from "../../assets/images/icon-pokeball.png";

export function ModalSuccess({ open, onClickClose }) {
  return (
    <Modal open={open} onClickClose={onClickClose}>
      <h1>Congrats! You won a Pokeball!</h1>
      <img src={IconPokeball} alt="Pokeball" id="pokeball"/>
      <p>Pokéballs unlock a correct letter.</p>
    </Modal>
  );
}