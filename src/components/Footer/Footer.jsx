import './Footer.css';

const Footer = (props) => {
    return(
        <div className="footer">
            <div className='informacoes'>
                <p>Não consegue iniciar a sessão ?</p>
                <a href="https://signup.leagueoflegends.com/pt-br/signup/index" target="_blank">
                    <p className='criar-conta'>Criar conta</p>
                </a>
            </div>
            <div className='versao'>
                <span>V63.0.9</span>
            </div>
        </div>
    )
}

export default Footer;