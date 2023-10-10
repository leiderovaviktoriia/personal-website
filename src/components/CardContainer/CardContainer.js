import Card from "../Card/Card";
import styles from "./CardContainer.module.sass";

const cards = [
  { title: "Title", image: "./assets/Group 1.svg" },
  { title: "Title", image: "./assets/Group 2.svg" },
  { title: "Title", image: "./assets/Group 3.svg" },
  { title: "Title", image: "./assets/Group 4.svg" },
];

function CardContainer() {
  return (
    <div className={styles.cardContainer}>
      <div className="card-elipse elipse"></div>
      {cards.map(function (card) {
        return <Card {...card} />;
      })}
    </div>
  );
}

export default CardContainer;
