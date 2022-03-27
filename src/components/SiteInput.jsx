export default function SiteInput(props) {
  let name = props.name;
  let data = props.data;

  return (
    <>
      <label className={`${props.className}-label`} htmlFor={`${name}-input`}>
        {props.label ?? name}:
      </label>
      <input
        id={`${name}-input`}
        name={name}
        value={data}
        className={props.className}
        onChange={(e) => props.update(e)}
      />
    </>
  );
}
