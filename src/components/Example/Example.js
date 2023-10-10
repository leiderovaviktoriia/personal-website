import styles from "./Example.module.sass";

function Example(props) {
  const { reverse } = props;

  function getStyle() {
    if (reverse) {
      return { flexDirection: "row-reverse" };
    } else {
      return { flexDirection: "row" };
    }
  }

  return (
    <div style={{ marginBottom: "50px" }} className={styles.container}>
      <div className="examples-elipse elipse"></div>

      <div style={getStyle()} className="examples-container">
        <div className="examples-text">
          <h6>Featured Project</h6>

          <div className="examples-p-effect">
            <p style={{ marginBottom: "30px" }}>Example Project</p>
          </div>

          <div className="blur">
            <p className="p-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur cum magni omnis, possimus quasi quo ut vel veniam.
              Animi explicabo modi nam? Commodi doloremque laborum maxime rerum
              similique sit suscipit!
            </p>
          </div>
        </div>

        <div className="examples-picture"></div>
      </div>
    </div>
  );
}

export default Example;
