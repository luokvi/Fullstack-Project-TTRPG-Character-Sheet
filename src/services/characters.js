import axios from 'axios'

const baseUrl = 'http://localhost:3001/characters'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addCharacter = async (object) => {
  const response = await axios.post(baseUrl, object)

  return response.data
}

const update = async (id, object) => {
  const response = await axios.put(`${baseUrl}/${id}`, object)

  return response.data
}

export default { getAll, addCharacter, update }