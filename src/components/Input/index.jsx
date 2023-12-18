import { useRef } from 'react'

import InputMask from 'react-input-mask'

import { Container } from './styles'

export function Input({
  icon: Icon,
  label = '',
  type = 'text',
  mask,
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
  const ref = useRef(null)
  const inputRef = useRef(null)

  return (
    <Container $inputAlign={inputAlign}>
      <label htmlFor={id}>{label}</label>
      <div>
        {Icon && <Icon />}
        <InputMask
          name={name}
          id={id}
          ref={ref}
          inputRef={inputRef}
          mask={mask}
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
