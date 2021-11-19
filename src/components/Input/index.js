import { InputBox } from "./styles"

function Input({ label, type, onChange, placeholder, name, value, ...rest }) {
  return (
    <>
      <label style={{ fontSize: '18px', fontWeight: '500'}}>{label}</label>
      <InputBox
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
        required
        {...rest}
      />
    </>
  )
}

export default Input