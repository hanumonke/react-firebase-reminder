import { createUserEmailPassword } from "../../api";
import { AUTH, loginAction, logoutAction, signupAction } from "./types";

export const login = (user: User): loginAction => {
    let payload = false;

    if (user.username === 'hanu' && user.password === 'hanu') {
        payload = true
    } else {
        payload = false
    }

    return {
        type: AUTH.LOGIN, 
        payload
    }
}

export const logout = (): logoutAction => {
    return {
        type: AUTH.LOGOUT, 
        payload: null
    }
}

export const signup = async (user: User): Promise<signupAction> => { 
    let uid = ''
    let isLogged = true
    await createUserEmailPassword(user)
                    .then(userCredential =>  { uid = userCredential.user.uid })
                    .catch(error => {
                        isLogged = false;
                        alert(error.message)
                    })

    return {
        type: AUTH.SIGNUP, 
        payload: {
            isLogged, 
            uid
        }
    }
}




