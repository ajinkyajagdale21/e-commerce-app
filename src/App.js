import './App.css';
import {Home} from './components/Home'; 
import {ProductListing} from './components/ProductListing';
import {BrowserRouter as Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/"  exact component={Home}/>
          <Route path="/productlist" exact component={ProductListing}/>
       </Routes>     
    </div>
  );
}

export default App;
/*<Routes>
      <Route path = '/productlist' exact component={ProductListing} />
      </Routes>
      */