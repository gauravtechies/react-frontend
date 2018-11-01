import types from '../actions/types'

const initialState = { user: null }

export default function (state = initialState, action) {
  switch (action.type) {

  case `${types.AUTHENTICATE_USER}_PENDING`:
    return { ...state, user: null }
  case `${types.AUTHENTICATE_USER}_FULFILLED`:
    return { ...state, user: action.payload.data, errors: null }
  case `${types.AUTHENTICATE_USER}_REJECTED`:
    return { ...state, errors: action.payload.response.data, user: null }


      /* Register user */  
    case `${types.REGISTER_USER}_PENDING`:
      return { ...state, isProcessing: true, isSuccess: null }
    case `${types.REGISTER_USER}_FULFILLED`:
      return { ...state, user: action.payload.data, isSuccess: true, isProcessing: false, errors: {} }
    case `${types.REGISTER_USER}_REJECTED`:
      return { ...state, errors: action.payload.response.data, isSuccess: false, isProcessing: false }
      
    default:
      return state
  }
}