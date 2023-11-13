import { FormEvent } from "react"
import { useNavigate } from "react-router-dom";
import { signup } from "../store/auth";
import { useDispatch } from "react-redux";

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  async function handleSubmit( e: FormEvent<HTMLFormElement>){
      e.preventDefault();
      const { elements } = e.currentTarget

      const usernameInput = elements.namedItem('username')
      const passwordInput = elements.namedItem('password') 
      const repeatPasswordInput = elements.namedItem('repeatPassword') 
      const username = usernameInput instanceof HTMLInputElement ? usernameInput.value : ''
      const password = passwordInput instanceof HTMLInputElement ? passwordInput.value : ''
      const repeatPassword = repeatPasswordInput instanceof HTMLInputElement ? repeatPasswordInput.value : ''
      
      if (username.trim() === '' || password.trim() === '' ) {
        alert('Fields cannot be empty')
        return; 
      }

      if (password !== repeatPassword) {
        alert('Passwords must be equal')
        return;
      }
        //TODO logica de redux para guardar el username en el state
        //TODO verificar que el usuario exista en la db (firestore) y en ese caso enviar a rutas protegidas
        const user: User = {
          username, 
          password
        }

        dispatch(await signup(user))
        
        navigate('/home')
      }
      

  
  return (
    <>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" placeholder="username" name="username"/>
         <input type="password"  placeholder="password" name="password" />
         <input type="password"  placeholder="password" name="repeatPassword" />

        <button type="submit">
          signup
        </button>
      </form>
    </>
  )
}

export default Signup
