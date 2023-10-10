import styles from "./AboutMe.module.sass";
function AboutMe(props) {
  return (
    <div className={styles.photoText}>
      <div className="information-arrow">
        <img className="arrow" src="./assets/arrow.svg" alt="arrow" />
        <p className="information-name">
          Hello! I Am <span>{props.name}</span>
        </p>
      </div>
      <div className="photo">
        <img src="./assets/sticker.webp" alt="photo" />
        <div className="photo-elipse elipse"></div>
        <div className="photo-elipse-second elipse"></div>
      </div>

      <div className="text">
        <p className="first-p">A Web Developer who</p>
        <h1>
          Judges a site
          <br />
          by its <span>code</span>...
        </h1>
        <p className="second-p">
          Because if the code isn't clean, what else can?
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
