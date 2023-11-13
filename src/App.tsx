import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Signup from './pages/Signup';
//TODO aca importo islogged de redux que fue alterado desde el login

function App() {

  return (

    <>
      
      <Routes>
        <Route path='/'>
          <Route index Component={Login}></Route>
          <Route path='signup' Component={Signup}></Route>
          <Route path='home' element={<PrivateRoute component={Home}/>}></Route>
        </Route>
      </Routes>

    </>

  )
}

export default App
