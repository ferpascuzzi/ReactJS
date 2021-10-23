import {NavBar} from './components/NavBar/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CartScreen } from './components/CartScreen/CartScreen';
import { UIProvider } from './context/UIContext';

function App() {

  return (
      <>

      <UIProvider>

      
      <CartProvider>

      <BrowserRouter>
      
      <NavBar/> 
        
      <Switch>  

        <Route exact path="/">
          <ItemListContainer/>

        </Route>

        <Route exact path="/productos/:categoryId">
          <ItemListContainer/>
        </Route>

        <Route exact path="/detail/:itemId">
          <ItemDetailContainer/>
        </Route>

        <Route exact path="/contacto">
          <h1>Contacto</h1>
        </Route>

        <Route exact path="/cart">
          <CartScreen/>
        </Route>

        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>

      </Switch>

      </BrowserRouter>

      </CartProvider>

      </UIProvider>
      
      </>
  );
}

export default App;