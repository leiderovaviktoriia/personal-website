import styles from "./Header.module.sass";

function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src="./assets/logo.svg" alt="logo" />
          </div>

          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#work-experience">Experience</a>
              </li>
              <li>
                <a href="#examples">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
