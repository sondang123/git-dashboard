import axios from 'axios'
import { BASE_URL_API, baseConfig, handleConfigApi } from './axios-client'

const client = axios.create(
  baseConfig({ baseURL: `${BASE_URL_API}/repositories` }),
)
handleConfigApi(client)
export const getListRepositories = async () => {
  const data: string[] = await client.get('')

  return data
}
