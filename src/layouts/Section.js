import styles from "./Section.module.sass";
function Section(props) {
  const { id, className, children } = props;

  return (
    <section id={id} className={styles[className]}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}

export default Section;
