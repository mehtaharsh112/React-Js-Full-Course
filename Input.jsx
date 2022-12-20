function Input(props) {
  return (
        <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.className}
        onChange={props.val}
        onClick={props.sub}
        name = {props.fetch}
        value = {props.field}
      />
  );
}
export default Input;
