import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from 'axios'
import queryString from 'query-string'
import { env } from '~/helper/get-env'
import { showToastError } from '~/helper/toast'

export const BASE_URL_API = env.baseUrlApi

export const baseConfig = ({
  baseURL,
}: {
  baseURL: string
}): AxiosRequestConfig => ({
  baseURL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

const axiosClient: AxiosInstance = axios.create(
  baseConfig({ baseURL: BASE_URL_API }),
)

// export const addToken = (client: AxiosInstance): void => {
//   client.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN)}`
//     return config
//   })
// }

const responseInterceptor = (client: AxiosInstance): void => {
  client.interceptors.response.use(
    (response: AxiosResponse) => {
      if (response?.data) {
        if (response.status === 201) {
          return { status: 201, ...response.data }
        }
        return response.data
      }
      return response
    },
    (error: AxiosError) => {
      throw error
    },
  )
}

const errorInterceptor = (client: AxiosInstance): void => {
  client.interceptors.response.use(undefined, (error: AxiosError) => {
    let errorMessage: string | null = null
    const response = error.response

    if (response && (response.status === 401 || response.status === 403)) {
      window.location.href = '/sign-in'
      throw error
    }

    if ((response?.data as ErrorResponse)?.error) {
      errorMessage = (response?.data as ErrorResponse)?.error ?? null
    }

    if (errorMessage) {
      showToastError(errorMessage)
    }

    throw error
  })
}

interface ErrorResponse {
  error?: string
}

export const handleConfigApi = (client: AxiosInstance): void => {
  // addToken(client)
  responseInterceptor(client)
  errorInterceptor(client)
}

handleConfigApi(axiosClient)

export default axiosClient
