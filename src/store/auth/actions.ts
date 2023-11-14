import { createUserEmailPassword, loginUserEmailPassword, logoutUser } from "../../api";
import { AUTH, loginAction, logoutAction, signupAction } from "./types";


//TODO es posible que necesite hacer una clase para manejar la persistencia de la autenticacion. 
/*
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    / Existing and future Auth states are now persisted in the current
    / session only. Closing the window would clear any existing state even
    / if a user forgets to sign out.
    / ...
    / New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    / Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });

 - firebase docs -

*/
export const login = async (user: User): Promise<loginAction> => {
   let uid= '';
   let isLogged= true; 

   await loginUserEmailPassword(user)
            .then(userCredential => {
                uid = userCredential.user.uid
            })
            .catch(error => {
                isLogged = false; 
                alert(error.message)
            })
    return {
        type: AUTH.LOGIN, 
        payload: {
            isLogged, 
            uid
        }
    }
}

export const logout = async     (): Promise<logoutAction> => {
    await logoutUser()
            .then(() => alert('see ya later!'))
            .catch(err => alert(err.message))
    return {
        type: AUTH.LOGOUT, 
        payload: {
            isLogged: false, 
            uid: ''
        }
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




