import './Footer.css';

const Footer = (props) => {
    return(
        <div className="footer">
            <div className='informacoes'>
                {props.mensage.toUpperCase()}
                {props.mensage2.toUpperCase()}
                {props.mensage3.toUpperCase()}
            </div>
        </div>
    )
}

export default Footer;