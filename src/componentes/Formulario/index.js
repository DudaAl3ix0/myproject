import { useState } from 'react';
import Button from '../Button';
import CampoTexto from '../CampoTexto';
import Dropdown from '../Dropdown';
import './Formulario.css';

const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [telefone, setTelefone] = useState('')
    const [imagem, setImagem] = useState('')
    const [especie, setEspecie] = useState('')


    const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoAnimalCadastrado({
        nome: nome,
        descricao: descricao,
        telefone: telefone,
        imagem: imagem,
        especie: especie
    })
        setNome('')
        setDescricao ('')
        setTelefone ('')
        setImagem('')
        setEspecie('')

    }

    return(
       <section className="formulario">
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para adicionar o animal para uma adoção responsável.</h2>
            <CampoTexto 
                obrigatorio = {true} 
                label='Nome' 
                placeholder="Digite o nome do animal"
                valor = {nome}
                aoAlterado = {valor => setNome(valor)}
            />

            <CampoTexto  
                obrigatorio = {true} 
                label='Descrição' 
                placeholder="Faça uma breve descrição sobre o animal"
                valor = {descricao}
                aoAlterado = {valor => setDescricao(valor)}
            />

            <CampoTexto 
                label='Telefone' 
                placeholder="(XX)XXXXX-XXXX"
                valor = {telefone}
                aoAlterado = {valor => setTelefone(valor)}
            />

            <CampoTexto 
                label='Imagem' 
                placeholder="Digite o endereço da imagem"
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}
            />

            <Dropdown 
            obrigatorio = {true} 
            label='Espécie' 
            itens={props.especies}
            valor = {especie}
            aoAlterado = {valor => setEspecie(valor)}
            />

            <Button>
                Adicionar Animal
            </Button>
        </form>
       </section> 
    )
}
export default Formulario