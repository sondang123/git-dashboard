import axios from 'axios'
import { BASE_URL_API, baseConfig, handleConfigApi } from './axios-client'

const client = axios.create(baseConfig({ baseURL: `${BASE_URL_API}/authors` }))
handleConfigApi(client)
export const getListUsers = async () => {
  const data: string[] = await client.get('')

  return data
}
