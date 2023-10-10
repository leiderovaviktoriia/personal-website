import styles from "./Skills.module.sass";

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <div className="skills-text">
        <h5>
          I'm currently looking to join a <span>cross-functional</span> team
        </h5>
        <p>that values improving people's lives</p>
      </div>

      <div className="skills-icons">
        <div className="icon">
          <img src="./assets/Rectangle 1.svg" alt="" />
        </div>

        <div className="icon">
          <img src="./assets/Rectangle 22.svg" alt="" />
        </div>

        <div className="icon">
          <img src="./assets/Rectangle 66.svg" alt="" />
        </div>

        <div className="icon">
          <img src="./assets/Rectangle 77.svg" alt="" />
        </div>

        <div className="icon">
          <img src="./assets/Rectangle 55.svg" alt="" />
        </div>

        <div className="icon">
          <img src="./assets/Rectangle 111.svg" alt="" />
        </div>

        <div className="icon">
          <img className="icon-html" src="./assets/html-5.png" alt="" />
        </div>

        <div className="icon">
          <img className="icon-html" src="./assets/photoshop.png" alt="" />
        </div>

        <div className="icon">
          <img className="icon-html" src="./assets/bootstrap.png" alt="" />
        </div>

        <div className="icon">
          <img className="icon-html" src="./assets/git.png" alt="" />
        </div>

        <div className="icon">
          <img className="icon-html" src="./assets/sass.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
