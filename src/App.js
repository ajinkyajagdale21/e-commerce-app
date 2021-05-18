import './App.css';
import {ProductListing} from './components/ProductListing';
import {BrowserRouter as Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>E-commerce</h1>
      <Routes>
      <Route path = '/productlist' exact component={ProductListing} />
      </Routes>
      
    </div>
  );
}

export default App;
