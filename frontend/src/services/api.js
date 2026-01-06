import axios from 'axios'

// URL del backend: usa la variable de entorno VITE_API_URL
// En Render, configura esta variable de entorno con la URL de tu backend
// Ejemplo: https://portafolio-backend.onrender.com
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getProjects = async () => {
  const response = await api.get('/api/projects')
  return response.data
}

export const getProject = async (id) => {
  const response = await api.get(`/api/projects/${id}`)
  return response.data
}

export const getSkills = async () => {
  const response = await api.get('/api/skills')
  return response.data
}

export const sendContact = async (data) => {
  const response = await api.post('/api/contact', data)
  return response.data
}

export default api

