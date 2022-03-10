export default function SiteInput(props) {
  let name = props.name;
  let data = props.data;

  return (
    <>
      <label htmlFor={name}>{props.translate ?? name}:</label>
      <input
        name={name}
        value={data}
        id={`input_${name}`}
        onChange={(e) => props.update(e)}
      />
    </>
  );
}
