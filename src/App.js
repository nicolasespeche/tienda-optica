import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
        <ItemListContainer greeting="Bienvenido a mi primer entrega de React"></ItemListContainer>      
      </header>
    </div>
  );
}

export default App;
