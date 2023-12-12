import { useState } from 'react'

import { Container, Options, Option } from './styles'

import { PiCaretDown, PiCaretUp } from 'react-icons/pi'

export function Select({ options, option, setOption, label, ...rest }) {
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <span
        onClick={event => {
          event.target.nextSibling.focus()
        }}
      >
        {label}
      </span>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        {...rest}
      >
        <span>{option}</span>
        {open ? <PiCaretUp /> : <PiCaretDown />}

        <Options $isActive={open}>
          {options.map(option => (
            <Option key={option} onClick={() => setOption(option)}>
              {option}
            </Option>
          ))}
        </Options>
      </button>
    </Container>
  )
}
