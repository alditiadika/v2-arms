import axios, { AxiosError } from 'axios'
import { AuthTypes as IAuthTypes } from 'pages/auth'
import IGlobalTypes from 'utils/global-types'

type TGetDataFunc = () => Promise<IGlobalTypes.IServiceResponse<IAuthTypes.ITestData[]>>

const testGetData:TGetDataFunc = async () => {
  try {
    const response = await axios.get('https://61ca6f6a37ae840017c6f56f.mockapi.io/v1/test/Test')
    const data = response.data as IAuthTypes.ITestData[]
    return {
      isError: false,
      errorMessage: '',
      errorCode: 0,
      data
    }

  } catch(e) {
    const err = e as AxiosError
    return {
      isError: true,
      errorMessage: err.message,
      errorCode: err.code || 500,
      data:[]
    }
  }
}
export default testGetData