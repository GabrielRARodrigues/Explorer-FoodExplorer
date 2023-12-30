import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { Container } from './styles'

const defaultMaskOptions = {
  prefix: 'R$ ',
  suffix: '',
  includeThousandsSeparator: false,
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: null,
  allowNegative: false,
  allowLeadingZeroes: false
}

export function CurrencyInput({
  label = '',
  type = 'text',
  name,
  setValue,
  id,
  placeholder,
  title,
  required = false,
  minLength,
  maxLength,
  ...rest
}) {
  const currencyMask = createNumberMask(defaultMaskOptions)

  function handleChange(event) {
    const inputElement = event.target

    if (
      inputElement.value.search(/,\d\d?/) === -1 &&
      inputElement.value.length > 3
    ) {
      if (inputElement.value.includes(',')) inputElement.value += '00'
      else {
        inputElement.value += ',00'
      }
      inputElement.setSelectionRange(
        inputElement.value.length - 3,
        inputElement.value.length - 3
      )
    }

    let formattedCurrencyValue = inputElement.value
      .substring(3)
      .replace(',', '.')

    if (inputElement.value.length >= 1) {
      if (
        formattedCurrencyValue.substring(formattedCurrencyValue.indexOf('.'))
          .length < 3
      ) {
        formattedCurrencyValue += '0'
      }

      formattedCurrencyValue = formattedCurrencyValue.padStart(5, 0)
    }

    setValue(formattedCurrencyValue)
  }

  function onBlur(event) {
    const inputElement = event.target

    const integerSection = () =>
      inputElement.value.substring(
        inputElement.value.indexOf(' ') + 1,
        inputElement.value.indexOf(',')
      )

    if (inputElement.value.length >= 1) {
      if (
        inputElement.value.substring(inputElement.value.indexOf(',')).length < 3
      ) {
        inputElement.value += '0'
      }

      if (integerSection().length < 2) {
        inputElement.value =
          inputElement.value.slice(0, inputElement.value.indexOf(' ') + 1) +
          '00' +
          integerSection() +
          inputElement.value.slice(inputElement.value.indexOf(','))
      }

      if ((integerSection().length >= 3) & integerSection().startsWith('0')) {
        inputElement.value = inputElement.value.replace('0', '')
      }
    }
  }

  return (
    <Container>
      {label ? (
        <label htmlFor={id}>{label}</label>
      ) : (
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
      )}
      <div>
        <MaskedInput
          name={name}
          id={id}
          mask={currencyMask}
          placeholderChar="0"
          type={type}
          placeholder={placeholder}
          title={title}
          onChange={handleChange}
          onBlur={onBlur}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          {...rest}
        />
      </div>
    </Container>
  )
}
