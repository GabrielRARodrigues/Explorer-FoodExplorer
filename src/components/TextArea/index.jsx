import { Container } from './styles'

export function TextArea({
  value,
  name,
  id,
  label = '',
  placeholder,
  required = false,
  onChange,
  title,
  minLength,
  maxLength,
  ...rest
}) {
  return (
    <Container>
      {label ? (
        <label htmlFor={id}>{label}</label>
      ) : (
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
      )}
      <textarea
        id={id}
        placeholder={placeholder}
        name={name}
        required={required}
        onChange={onChange}
        title={title}
        minLength={minLength}
        maxLength={maxLength}
        {...rest}
      >
        {value}
      </textarea>
    </Container>
  )
}
