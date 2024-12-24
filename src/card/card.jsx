import reactlogo from "./react.svg";
import styles from "./card.module.css";

function Card(props) {
  return (
    <div className={styles.card_cont}>
      <img src={props.image} className={styles.image} />
      <h1>{props.name}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;
