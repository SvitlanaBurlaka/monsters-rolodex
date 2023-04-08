import { Component } from "react";
import "./card.style.css";

class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;
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
  }
}

export default Card;
