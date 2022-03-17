export default function SiteInput(props) {
  let name = props.name;
  let data = props.data;

  return (
    <>
      <label className={`${props.className}-label`} htmlFor={name}>
        {props.label ?? name}:
      </label>
      <input
        name={name}
        value={data}
        id={`input_${name}`}
        className={props.className}
        onChange={(e) => props.update(e)}
      />
    </>
  );
}
