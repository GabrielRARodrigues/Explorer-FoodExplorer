import { Container } from './styles'
import { PiPlus, PiMinus } from 'react-icons/pi'

export function Stepper({ number, setNumber }) {
  function handleDecrementNumber() {
    setNumber(prevNumber => {
      if (prevNumber - 1 > 0) {
        return --prevNumber
      }

      return prevNumber
    })
  }

  function handleIncrementNumber() {
    setNumber(prevNumber => ++prevNumber)
  }
  return (
    <Container>
      <button onClick={handleDecrementNumber}>
        <PiMinus />
      </button>
      <span>{String(number).padStart(2, '0')}</span>
      <button onClick={handleIncrementNumber}>
        <PiPlus />
      </button>
    </Container>
  )
}
