import './App.css';
import Header from './Header';
import Main from './Main';
import Menu from './Menu';
import {
  BrowserRouter as Router
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Menu />
          <Main />
      </Router>
    </div>
  );
}

export default App;
