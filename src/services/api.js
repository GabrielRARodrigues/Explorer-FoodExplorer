import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://explorer-api-gabrielrodrigues.koyeb.app/',
  withCredentials: true
})
