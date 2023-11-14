import { Action } from "redux";



export enum AUTH {
    CHECKISLOGGED=  'CHECKISLOGGED', 
    LOGIN = 'LOGIN', 
    LOGOUT = 'LOGOUT', 
    SIGNUP = 'SIGNUP'
}

export interface loginAction extends Action {
    type: AUTH.LOGIN, 
    payload: authState

}

export interface logoutAction extends Action {
    type: AUTH.LOGOUT, 
    payload: authState

}

export interface signupAction extends Action {
    type: AUTH.SIGNUP, 
    payload: authState
}


export type authActions = loginAction | logoutAction | signupAction


export type authState = {
	isLogged: boolean
    uid: string
} 



