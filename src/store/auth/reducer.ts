import { Reducer } from 'redux'; 
import {AUTH, authActions, authState} from '.'


export const initialState: authState = {
    isLogged: false, 
    uid: ''
}

export const auth:  Reducer<authState, authActions> =  (state = initialState, { type, payload }) => {
  switch (type) {
  case AUTH.LOGIN:
      return { ...state, isLogged: payload}
  case AUTH.LOGOUT: 
    return {...state, isLogged: false}
  case AUTH.SIGNUP:
    return {...state, uid: payload.uid, isLogged: payload.isLogged}
  default:
    return state
  }
}
