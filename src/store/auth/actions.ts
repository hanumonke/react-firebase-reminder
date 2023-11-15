import { createUserEmailPassword, loginUserEmailPassword, logoutUser } from "../../api";
import { AUTH, loginAction, logoutAction, signupAction } from "./types";


// CREO QUE NECESITO REDUX THUNK PQ SON ACTIONS ASINCRONAS
export const login = (user: User): loginAction => {
   let uid= '';
   let isLogged= false; 

   loginUserEmailPassword(user)
            .then(userCredential => {
                console.log('Loggin user')
                uid = userCredential.user.uid
                isLogged = true
            })
            .catch(error => {
                isLogged = false; 
                alert(error.message)
                return;
            })
    return {
        type: AUTH.LOGIN, 
        payload: {
            isLogged, 
            uid
        }
    }
}

export const logout = (): logoutAction => {
    logoutUser()
            .then(() => alert('see ya later!'))
            .catch(err => {
                alert(err.message)
                return;
            })
    return {
        type: AUTH.LOGOUT, 
        payload: {
            isLogged: false, 
            uid: ''
        }
    }
}

export const signup = (user: User): signupAction => { 
    let uid = ''
    let isLogged = false
    createUserEmailPassword(user)
                    .then(userCredential =>  { uid = userCredential.user.uid; isLogged = true })
                    .catch(error => {
                        isLogged = false;
                        alert(error.message)
                        return;
                    })

    return {
        type: AUTH.SIGNUP, 
        payload: {
            isLogged, 
            uid
        }
    }
}




