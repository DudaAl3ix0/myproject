import './CampoTexto.css';

const CampoTexto = (props) => { 
    const placeholderInfoInput = `${props.placeholder}` //Como importar dados com const

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderInfoInput}/>
        </div>
    )
}

export default CampoTexto;