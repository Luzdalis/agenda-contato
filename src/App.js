import './App.css';
import Header from "./component/Header"
import CadastrarContato from './component/CadastrarContato'
import ListarContatos from './component/ListarContatos';

function App() {
  return (
    <div>
      <Header />
      <CadastrarContato />
      <ListarContatos />
    </div>
  );
}

export default App;
