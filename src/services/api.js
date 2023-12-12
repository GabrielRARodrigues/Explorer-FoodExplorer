import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-6hfx.onrender.com/',
  withCredentials: true
})
