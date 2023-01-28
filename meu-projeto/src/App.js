import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {
  return (
    <div className="App">
      <h1>Olá, React!</h1>
      <p>Meu primeiro app</p>
      <Evento/>
      <HelloWorld/>
      <SayMyName nome='Geovana'/>
      <Form/>
      <Condicional/>
    </div>
  );
}

export default App;
