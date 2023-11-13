import { ComponentType, FC } from "react"
import { Navigate } from "react-router-dom"
import { useTypedSelector } from "../store"
interface IProps {
    component: ComponentType
} 
const PrivateRoute: FC<IProps> = ({component: RouteElement}) => {
  const { isLogged } = useTypedSelector(state => state.auth)
  if (isLogged) {
    return <RouteElement />
  }  else {
    alert('You are not logged!')
    return <Navigate to='/' />
  }
}

export default PrivateRoute