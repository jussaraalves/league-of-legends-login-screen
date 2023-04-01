import './BotaoCentral.css';
const BotaoCentral = ({children, className}) =>{
    
    return(
        <button className={`borda-botao ${className}`}>
            {children}  
        </button>
    )
}

export default BotaoCentral;