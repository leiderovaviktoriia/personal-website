import styles from "./Footer.module.sass";

function Footer() {
  return (
    <div className={styles.contactContainer}>
      <div className="contact-text">
        <p style={{ paddingBottom: "70px", fontSize: "25px" }}>Contact</p>
        <p style={{ paddingBottom: "50px", maxWidth: "900px" }}>
          I'm currently seeking to collaborate with a cross-functional team
          dedicated to enhancing user experiences through thoughtful web
          development, or do you have a project in mind? Let's connect.
        </p>
        <p style={{ marginBottom: "30px" }}>viktoriia.leiderova@gmail.com</p>
      </div>

      <div style={{ marginBottom: "30px" }} className="contact-icons">
        <img src="./assets/instagram.png" alt="instagram" />
        <img src="./assets/google.png" alt="instagram" />
        <img src="./assets/telegram.png" alt="instagram" />
        <img src="./assets/whatsapp.png" alt="instagram" />
      </div>
    </div>
  );
}

export default Footer;
