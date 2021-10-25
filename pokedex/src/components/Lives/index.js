import "./style.scss";

export function Lives({ number }) {
  return (
    <div className="lifes-container">
      <p>{number}</p>
    </div>
  );
}