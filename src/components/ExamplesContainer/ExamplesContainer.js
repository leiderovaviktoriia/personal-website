import Example from "../Example/Example";

function ExamplesContainer() {
  return (
    <div>
      <Example reverse={false} />
      <Example reverse={true} />
    </div>
  );
}

export default ExamplesContainer;
