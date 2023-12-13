import { createGlobalStyle } from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../deviceBreakpoints'

export const Styles = createGlobalStyle`

:root{
  --gradients-100: linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%);
  --gradients-200: linear-gradient(180deg, #091E26 0%, #00131C 100%);;

  font-size: 46.875%; 

  @media screen and (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 62.5%;
  }
}

body {
  background-color: ${({ theme }) => theme.COLORS.DARK[400]} ;
}

body, input, button, textarea{
  font-family: ${({ theme }) => theme.FONT.FAMILY['ROBOTO']};
  font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
  color: ${({ theme }) => theme.COLORS.LIGHT[300]};  
  -webkit-font-smoothing: antialiased;
}


h1, 
h2,
h3,
h4{
  font-weight: bold;
}

button, a{
  transition: filter 0.2s;
}

button:hover, a:hover{
  filter: brightness(0.8);
}

/* Screen Reader */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Alerts Styles */

// General Alert Styles
.alerts{
  font-family: ${({ theme }) => theme.FONT.FAMILY['ROBOTO']} !important;
}

.alerts__title{
  font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
}

.alerts__confirm-button{
  font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
}

// Comum Alert
.alert__container{}

.alert__title{}

.alert__text{}

.alert__confirm-button{}

//Error Alert
.error__container{}

.error__title{}

.error__text{}

.error__confirm-button{}

//Confirm Alert
.confirm__container{}

.confirm__title{}

.confirm__text{}

.confirm__confirm-button{}

.confirm__cancel-button{}

`
