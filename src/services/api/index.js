import axios from 'axios'
import interceptors from '../../utils/interceptors'

const api = axios.create({
    baseURL:"https://reqres.in/api/"   
})

interceptors(api)

export default api