import Login from './pages/Login';
import Register from './pages/Register';
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
