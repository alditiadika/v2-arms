import axios from 'axios'
import { AuthTypes as IAuthTypes } from 'pages/login'
import { errorResponse } from 'utils/error-response'
import IGlobalTypes from 'utils/global-types'

type TGetDataFunc = () => Promise<IGlobalTypes.IServiceResponse<IAuthTypes.ITestData[]>>

const testGetData:TGetDataFunc = async () => {
  try {
    const response = await axios.get('https://61ca6f6a37ae840017c6f56f.mockapi.io/v1/test/Test')
    const data:IAuthTypes.ITestData[] = response.data
    return {
      isError: false,
      errorMessage: '',
      errorCode: 0,
      data
    }

  } catch(e) {
    const {
      isError,
      errorCode,
      errorMessage
    } = errorResponse(e)
    return { isError, errorMessage, errorCode, data:[] }
  }
}
export default testGetData