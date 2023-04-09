import "./card.style.css";

export const Card = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${name}set=set2&size=140x140`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
