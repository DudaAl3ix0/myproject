import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label='Nome' placeholder="Digite o nome do animal"/>
      <CampoTexto label='Descrição' placeholder="Faça uma breve descrição sobre o animal"/>
      <CampoTexto label='Imagem' placeholder="Digite o endereço da imagem"/>
    </div>
  );
}

export default App;
