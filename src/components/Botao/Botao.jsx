import './Botao.css'
const Botao = ({children, background}) =>{
    return(
        <button className="botao" style={{background}}>
            {children}
        </button>
    )
}

export default Botao;