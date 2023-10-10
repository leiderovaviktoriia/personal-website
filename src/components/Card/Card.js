import styles from "./Card.module.sass";

function Card(props) {
  const { image, title } = props;

  return (
    <div className={styles.card}>
      <div className="img-card">
        <img src={image} alt="figure" />
      </div>

      <div className="text-card">
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Lorem ipsum dolor sit amet.
        </p>

        <button className="flare">LEARN MORE</button>
      </div>
    </div>
  );
}

export default Card;
