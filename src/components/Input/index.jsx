import { Container } from './styles'

export function Input({
  icon: Icon,
  label = '',
  type = 'text',
  name,
  value,
  id,
  placeholder,
  title,
  onChange,
  required = false,
  pattern,
  minLength,
  maxLength,
  inputAlign = 'start',
  ...rest
}) {
  return (
    <Container $inputAlign={inputAlign}>
      {label ? (
        <label htmlFor={id}>{label}</label>
      ) : (
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
      )}
      <div>
        {Icon && <Icon />}
        <input
          name={name}
          id={id}
          value={value}
          type={type}
          placeholder={placeholder}
          title={title}
          onChange={onChange}
          required={required}
          pattern={pattern}
          minLength={minLength}
          maxLength={maxLength}
          {...rest}
        />
      </div>
    </Container>
  )
}
