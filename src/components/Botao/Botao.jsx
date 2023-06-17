import './Botao.css'
const Botao = ({children, background}) =>{
    return(
        <button className="botao" style={{background}}>
            <div className='icons_botao'>
                {children}
            </div>
        </button>
    )
}

export default Botao;