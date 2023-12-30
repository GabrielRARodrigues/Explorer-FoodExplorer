import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-development.onrender.com/',
  withCredentials: true
})
