import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import PrivateRoute from './components/HOC/PrivateRoute';
import { isUserSignedin } from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log("Hello")
    dispatch(isUserSignedin())
  },[])
  return (
    <div className="App">
     <Routes>
      <Route element={<PrivateRoute/>}>
        <Route element={<Home/>} path="/" exact/>
        <Route element={<Products/>} path="/products"/>
        <Route element={<Orders/>} path="/orders"/>
      </Route>
      <Route path="signin" element={<Signin/>} />
      <Route path="signup" element={<Signup/>} />
     </Routes>
    </div>
  );
}

export default App;
