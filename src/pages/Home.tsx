import { useDispatch } from "react-redux"
import { logout } from "../store/auth";
import { useTypedSelector } from "../store";
const Home = () => {
  const dispatch = useDispatch();
  const {uid} = useTypedSelector(state => state.auth);
  const handleLogout = async () => {
    alert('youre loggin out')
    dispatch(await logout())
  }
  return (
    <>
      <div>Welcum! your ID is {uid}</div>
      <button onClick={handleLogout}>logout</button>
    </>
  )
}

export default Home