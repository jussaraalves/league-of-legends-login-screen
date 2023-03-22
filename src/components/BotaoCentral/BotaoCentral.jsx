import './BotaoCentral.css'
const BotaoCentral = ({children}) =>{
    return(
        <button className="borda-botao">
            {children}
        </button>
    )
}

export default BotaoCentral;