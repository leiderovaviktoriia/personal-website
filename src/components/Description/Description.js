import styles from "./Description.module.sass";

function Description() {
  return (
    <div className={styles.onlyText}>
      <h2>I'm a Software Engineer.</h2>
      <p className="third-p">Currently, I'm a looking for a job.</p>
      <p className="fouth-p">
        A self-taught web-developer, trying to make a name in the industry
        <br />
        I make meaningful and delightful digital products that create an
        equilibrium <br />
        between user needs and business goals.
      </p>
    </div>
  );
}

export default Description;
