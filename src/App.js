import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Especie from './componentes/Especie';
import Formulario from './componentes/Formulario';

function App() {

  const [animais, setAnimais] = useState([]) 

  const aoNovoAnimalCadastrado = (animal) =>{ 
    console.log(animal) 
    setAnimais([...animais,animal]) 
  } 

    return ( 
      <div className="App"> 
      <Banner/> 
      <Formulario aoAnimalCadastrado ={animal => aoNovoAnimalCadastrado(animal)}/> 
      <Especie nome= "Cachorro"/>
      <Especie nome= "Gato"/>
      </div> 
    );
  }

export default App;
