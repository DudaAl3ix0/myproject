import Animal from '../Animal'
import './Especie.css'

const Especie = (props) => {

    const css = {backgroundColor:props.corDeFundo}
    const cssH3 = {borderColor:props.corBorda}

    return(
           (props.animais.length > 0) ? <section className='especie' style={css}>
            <h3 style={cssH3}>{props.nome}</h3>
            <div className='especies'>
                    {props.animais.map(animal => 
                    <Animal nome={animal.nome}  
                    descricao={animal.descricao}  
                    telefone={animal.telefone}  
                    imagem={animal.imagem}
                    key={animal.nome}
                    corBorda={props.corBorda}
                    />)}
            </div>
        </section>
        : ''
    )
}
export default Especie