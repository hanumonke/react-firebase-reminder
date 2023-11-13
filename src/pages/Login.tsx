import { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function handleSubmit( e: FormEvent<HTMLFormElement>){
      e.preventDefault();
      const { elements } = e.currentTarget

      const usernameInput = elements.namedItem('username')
      const passwordInput = elements.namedItem('password') 
      const username = usernameInput instanceof HTMLInputElement ? usernameInput.value : ''
      const password = passwordInput instanceof HTMLInputElement ? passwordInput.value : ''
      
      if (username.trim() === '' || password.trim() === '' ) {
        alert('Fields cannot be empty')
        return; 
      } else {
        //TODO logica de redux para guardar el username en el state
        //TODO verificar que el usuario exista en la db (firestore) y en ese caso enviar a rutas protegidas
        const user: User = {
          username, 
          password
        }

        dispatch(login(user))
        
        navigate('/home')
      }
      

  } 
  return (
    <>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" placeholder="username" name="username"/>
         <input type="password"  placeholder="password" name="password" />

        <button type="submit">
          login
        </button>
        <Link to='/signup'>Don't have an account? Sign up instead</Link>
      </form>
    </>
  )
}

export default Login
