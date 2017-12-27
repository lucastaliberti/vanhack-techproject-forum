import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export const getGroupedData = async () =>
  await axios.get(`${BASE_URL}/forum/grouped`)
