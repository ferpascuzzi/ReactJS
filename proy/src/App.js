import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/HomeView/ItemListContainer';
import './App.css';


function App() {

  return (
      <>
      <NavBar logo="MascoLand"/>     
      <ItemListContainer greeting= "SALUDO TEST"/>
      </>
  );
}

export default App;