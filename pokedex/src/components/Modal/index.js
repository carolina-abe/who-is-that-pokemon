import "./style.scss";

export function Modal({ children, open, onClickClose }) {
  return (
    <div className={`modal-background ${open ? "modal-open" : "modal-close"}`}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClickClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}