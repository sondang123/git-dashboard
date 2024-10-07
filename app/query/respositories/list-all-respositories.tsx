import { useQuery } from '@tanstack/react-query'
import { GET_ALL_NAME_REPOSITORIES } from './query-keys'
import { getListRepositories } from '~/service/repositories-api'

export const useListRepositories = () => {
  return useQuery({
    queryKey: [GET_ALL_NAME_REPOSITORIES],
    queryFn: async () => {
      const data = await getListRepositories()

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
