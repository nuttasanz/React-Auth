import {Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import User from './components/pages/auth/User'
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='user' element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
