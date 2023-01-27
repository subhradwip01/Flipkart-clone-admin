import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Signup from './containers/Signup';
import Signin from './containers/Signin';
import Layout from './components/Layout';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="signin" element={<Signin/>} />
      <Route path="signup" element={<Signup/>} />
     </Routes>
    </div>
  );
}

export default App;
