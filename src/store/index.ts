//HERE COMES THE INIT OF THE STORE AND ITS EXPORT
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, legacy_createStore as createStore } from "redux";

import { auth, initialState as authInitialState } from "./auth"; 

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION__: any; //No entiendo como tiparlo
    }
  }
  export const initialState = {
    auth: authInitialState
};

export const rootReducer = combineReducers({
	 auth    
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Tipando el reducer
export type AppState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;