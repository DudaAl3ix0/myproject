import CampoTexto from '../CampoTexto';
import './Formulario.css';


const Formulario = () => {
    return(
       <section className="formulario">
        <form>
            <h2>Preencha os dados para adicionar o animal para adoção responsável.</h2>
            <CampoTexto label='Nome' placeholder="Digite o nome do animal"/>
            <CampoTexto label='Descrição' placeholder="Faça uma breve descrição sobre o animal"/>
            <CampoTexto label='Imagem' placeholder="Digite o endereço da imagem"/>
        </form>
       </section> 
    )
}
export default Formulario