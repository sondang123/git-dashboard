import axios from 'axios'
import { BASE_URL_API, baseConfig, handleConfigApi } from './axios-client'
import type { pramsRqListCommit } from '~/type/commit'

const client = axios.create(baseConfig({ baseURL: `${BASE_URL_API}/commits` }))

handleConfigApi(client)
export const getListAllCommit = async ({
  from_date,
  to_date,
  author,
  repository,
}: pramsRqListCommit) => {
  const data = await client.get('', {
    params: {
      from_date,
      to_date,
      author,
      repository,
    },
  })
  return data
}
