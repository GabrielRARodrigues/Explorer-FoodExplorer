import { Container } from './styles'

import { PiX, PiPlus } from 'react-icons/pi'

export function IngredientMarker({
  isNew = false,
  value,
  id,
  placeholder = 'Adicionar',
  onClick,
  onChange,
  ...rest
}) {
  return (
    <Container $isNew={isNew}>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        readOnly={!isNew}
        onChange={onChange}
        {...rest}
      />
      <button type="button" onClick={onClick}>
        {isNew ? <PiPlus /> : <PiX />}
      </button>
    </Container>
  )
}
