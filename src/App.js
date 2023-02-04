import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Especie from './componentes/Especie';
import Formulario from './componentes/Formulario';
import Animal from './componentes/Animal';

function App() {

  const especies = [
    {
    nome:'Cachorro',
    corBorda:'#3E77B6',
    corDeFundo:'#F0F8E2',
    },
    {
    nome:'Gato',
    corBorda:'#72418C' ,
    corDeFundo:'#DFDBE1',
    }
  ]

  const [animais, setAnimais] = useState([]) 

  const aoNovoAnimalCadastrado = (animal) =>{ 
    console.log(animal) 
    setAnimais([...animais,animal]) 
  } 

    return ( 
      <div className="App"> 
      <Banner/> 
      <Formulario especies={especies.map(especie => especie.nome)} aoAnimalCadastrado ={animal => aoNovoAnimalCadastrado(animal)}/> 
      {especies.map(especie => 
        <Especie key={especie.nome}  
        nome={especie.nome}   
        corBorda={especie.corBorda} 
        corDeFundo={especie.corDeFundo}
        animais = {animais.filter(animal => animal.especie == especie.nome)}
        />)}
      
      
      </div> 
    )
  }

export default App;
