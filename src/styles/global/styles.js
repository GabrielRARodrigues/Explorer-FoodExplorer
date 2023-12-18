import { createGlobalStyle } from 'styled-components'

import { DEVICE_BREAKPOINTS } from '../deviceBreakpoints'

export const Styles = createGlobalStyle`

:root{
  --gradients-100: linear-gradient(90deg, rgba(0, 10, 15, 0.27) 0%, #000A0F 100%);
  --gradients-200: linear-gradient(180deg, #091E26 0%, #00131C 100%);

  font-size: 62.5%;
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
  font-weight: ${({ theme }) => theme.FONT.WEIGHT['BOLD']};
}

button, a{
  transition: filter 0.2s;
}

button:hover, a:hover{
  filter: brightness(1.2);
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
  background-color: ${({ theme }) => theme.COLORS.DARK[800]};

  width: 100%;
  max-width: 36rem;

  @media screen and (max-width:${DEVICE_BREAKPOINTS.LG}){
  max-width: 40rem;
  }
}

.alerts__title{
  font-size: ${({ theme }) => theme.FONT.SIZE['XLG']};
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
}

.alerts__confirm-button{
  font-size: ${({ theme }) => theme.FONT.SIZE['SM']}!important;

  @media screen and (max-width:${DEVICE_BREAKPOINTS.LG}){
    font-size: ${({ theme }) => theme.FONT.SIZE['MD']}!important;
  }
}

// Comum Alert
.alert__container{
  background-color: ${({ theme }) => theme.COLORS.DARK[1000]};
}

.alert__title{
  color: ${({ theme }) => theme.COLORS.TINTS.MINT[100]};
}

.alert__text{}

.alert__confirm-button{
  background-color: ${({ theme }) => theme.COLORS.TINTS.CAKE[200]}!important;
  color:${({ theme }) => theme.COLORS.DARK[100]}!important;
}

//Error Alert
.error__container{
  background-color: ${({ theme }) => theme.COLORS.TINTS.TOMATO[100]};
}

.error__title{
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
}

.error__text{}

.error__confirm-button{
  background-color: ${({ theme }) => theme.COLORS.LIGHT[700]}!important;
}

//Confirm Alert
.confirm__container{}

.confirm__title{}

.confirm__text{
  font-size: ${({ theme }) => theme.FONT.SIZE['MD']}!important;
  color:  ${({ theme }) => theme.COLORS.LIGHT[300]};
}

.confirm__confirm-button{
  background-color: ${({ theme }) => theme.COLORS.TINTS.TOMATO[400]}!important;
}

.confirm__cancel-button{
  font-size: ${({ theme }) => theme.FONT.SIZE['SM']}!important;
  background-color: ${({ theme }) => theme.COLORS.LIGHT[700]}!important;

  @media screen and (max-width:${DEVICE_BREAKPOINTS.LG}){
    font-size: ${({ theme }) => theme.FONT.SIZE['MD']}!important;
  }
}


`
