import './App.css';

// PACKAGES
import { BrowserRouter as Router } from 'react-router-dom';


// COMPONENTS
import Navbar from './components/Navbar';
import Routes from './routes/Routes';


function App() {
  return (
    <Router>
        <Navbar/>
        <Routes/>
    </Router>
  );
}

export default App;
