import './CampoTexto.css';
const CampoTexto = (props) => { 
    const placeholderInfoInput = `${props.placeholder}`
    
    return(
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input placeholder={placeholderInfoInput}/>
        </div>
    )
}

export default CampoTexto;