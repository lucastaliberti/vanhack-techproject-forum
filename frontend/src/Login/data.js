import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export const getLogin = async payload =>
  await axios.post(`${BASE_URL}/user/signin`, payload)
