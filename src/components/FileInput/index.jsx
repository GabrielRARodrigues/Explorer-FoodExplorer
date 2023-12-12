import { Container, InputContainer } from './styles'

import { PiUploadSimple, PiCheck } from 'react-icons/pi'

export function FileInput({
  icon: Icon = PiUploadSimple,
  file,
  label = '',
  name,
  value,
  id,
  placeholder,
  filledPlaceholder = 'Arquivo Selecionado',
  title,
  onChange,
  required = false,
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

      <InputContainer $isFile={file}>
        <input
          type="file"
          className="sr-only"
          id={id}
          name={name}
          value={value}
          title={title}
          required={required}
          onChange={onChange}
          {...rest}
        />
        <label htmlFor={id}>
          {file ? <PiCheck /> : <Icon />}
          <span>{file ? filledPlaceholder : placeholder}</span>
        </label>
      </InputContainer>
    </Container>
  )
}
