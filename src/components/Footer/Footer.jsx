import './Footer.css';

const Footer = (props) => {
    return(
        <div className="footer">
            <div className='informacoes'>
                <p>Não consegue iniciar a sessão?</p>
                <p>Criar conta</p>
            </div>
            <div className='versao'>
                <span>V63.0.9</span>
            </div>
        </div>
    )
}

export default Footer;