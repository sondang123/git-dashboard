import { useQuery } from '@tanstack/react-query'

import { GET_ALL_USERS } from './query-keys'
import { getListUsers } from '~/service/user-api'

export const useListUser = () => {
  return useQuery({
    queryKey: [GET_ALL_USERS],
    queryFn: async () => {
      const data = await getListUsers()

      const labelValueArray = [
        { label: 'Tất cả', value: '' },
        ...(data?.map((item: string) => ({
          label: item,
          value: item,
        })) || []),
      ]

      return {
        data,
        labelValueArray,
      }
    },
  })
}
