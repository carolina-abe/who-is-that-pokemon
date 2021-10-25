import "./style.scss";

export function NamePokemon({ name, value = [] }) {
  return (
    <div className="name-letter-container">
      {name &&
        name.map((item, index) => (
          <input
            value={value.includes(item) || item === "-" ? item : ""}
            disabled
            key={item + index}
          />
        ))}
    </div>
  );
}