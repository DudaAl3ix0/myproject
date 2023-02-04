import './Animal.css'

const Animal = ({imagem, nome, descricao, telefone}) =>{
    return(
        <div className='Animal'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h3>{nome}</h3>
                <h4>{descricao}</h4>
                <h5>{telefone}</h5>
            </div>
        </div>

    )
}
export default Animal