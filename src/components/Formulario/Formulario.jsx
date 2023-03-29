import {BsApple, BsXbox} from 'react-icons/Bs';
import {FcGoogle} from 'react-icons/Fc';
import {BsFacebook} from 'react-icons/Bs';
import {AiOutlineArrowRight} from 'react-icons/ai'
import Botao from '../Botao/Botao';
import Input from '../Input/Input';
import Footer from '../Footer/Footer'
import './Formulario.css'
import logo from '/images/logo-riot.png'
import ManterLogin from '../ManterLogin/ManterLogin';
import BotaoCentral from '../BotaoCentral/BotaoCentral';


const Formulario = () =>{
    return(
        <section className='formulario'>
            <img className='logo' src={logo} alt=""/>
            <form>
                <h2 className='title-login'>Fazer Login</h2>

                <Input label="Nome de usuário" type="text" />
                <Input label="Senha" type="password" />

                <Botao background="#0178F6">
                    <BsFacebook size={15} color={'#fff'}/>
                </Botao>
                <Botao background="#fff">
                   <FcGoogle size={15}/>
                </Botao>
                <Botao background="#000">
                    <BsApple size={15} color={'#fff'}/>
                </Botao>
                <Botao background="#007D00">
                    <BsXbox size={15} color={'#fff'}/>
                </Botao>

                <ManterLogin/>
                <BotaoCentral>
                    <AiOutlineArrowRight size={20} color={'#ECECEC'}/>
                </BotaoCentral>

                <Footer mensage="Não consegue iniciar sessão?" mensage2="Criar conta" mensage3="V63.0.9"/>
            </form>
        </section>
    )
}

export default Formulario;