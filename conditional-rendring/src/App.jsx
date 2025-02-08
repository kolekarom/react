import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [isLoggedin, setLoggedin] = useState(true);

  return (
    <div>
      {isLoggedin ? <Login /> : <Logout />}
    </div>
  );
}

export default App;
