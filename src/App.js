import './App.css';
import {Home} from './components/Home'; 
import {ProductListing} from './components/ProductListing';
import {Cart} from './components/Cart';
import {Wishlist} from './components/WishList';
import {BrowserRouter as Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/"  exact component={Home}/>
          <Route path="/productlist" exact component={ProductListing}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/wishlist" exact component={Wishlist}/>
       </Routes>     
    </div>
  );
}

export default App;
/*<Routes>
      <Route path = '/productlist' exact component={ProductListing} />
      </Routes>
      */