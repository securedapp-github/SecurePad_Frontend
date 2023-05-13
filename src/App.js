import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Sidebar from './Components/sidebar.jsx'
import Contact from './Components/contact.jsx'
import Price from './Components/price.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Sidebar page={"wallet"}/>} />
      <Route exact path="/contact" element={<Sidebar page={"contact"}/>} />
      <Route exact path="/pricing" element={<Sidebar page={"pricing"}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
