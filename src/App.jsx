import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import Routes from './routes/RouteList';

function App() {
  return (
    <Router>
      <Routes />
      <Header />
    </Router>
  );
}

export default App;
