import types from './types'
import axios from 'axios'

axios.defaults.withCredentials = false

const apiHost = "http://localhost:9000";

export function registerUser (data) {
    return {
      type: types.REGISTER_USER,
      payload: axios.post(`${apiHost}/users`, data)
    }
  }
  