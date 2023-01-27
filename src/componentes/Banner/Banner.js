import './Banner.css';

function Banner(){ 
    //JSX como o React trabalha com a parte visual, parece HTML mas não é. É JSX 
    return (
        <header className="banner">
            <img src="/imagens/banner.png" alt="Banner principal da página"/>
        </header>
    )
}
export default Banner