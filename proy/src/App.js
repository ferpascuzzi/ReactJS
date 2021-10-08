import {NavBar} from './components/NavBar/NavBar';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
      <>
      <NavBar logo="MascoLand"/>     
      <ItemListContainer/>
      </>
  );
}

export default App;