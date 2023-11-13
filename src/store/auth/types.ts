import { Action } from "redux";

export enum AUTH {
    CHECKISLOGGED=  'CHECKISLOGGED', 
    LOGIN = 'LOGIN', 
    LOGOUT = 'LOGOUT', 
    SIGNUP = 'SIGNUP'
}

export interface loginAction extends Action {
    type: AUTH.LOGIN, 
    payload: boolean

}

export interface logoutAction extends Action {
    type: AUTH.LOGOUT, 
    payload: null

}

export interface signupAction extends Action {
    type: AUTH.SIGNUP, 
    payload: {
        isLogged: boolean, 
        uid: string
    }
}


export type authActions = loginAction | logoutAction | signupAction


export type authState = {
	isLogged: boolean
    uid: string
} 



