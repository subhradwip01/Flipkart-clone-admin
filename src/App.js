import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import PrivateRoute from './components/HOC/PrivateRoute';
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
     <Routes>
      <Route element={<PrivateRoute/>}>
        <Route element={<Home/>} path="/" exact/>
      </Route>
      <Route path="signin" element={<Signin/>} />
      <Route path="signup" element={<Signup/>} />
     </Routes>
    </div>
  );
}

export default App;
