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
import { useState } from 'react';


const Formulario = () =>{
    const [value, setValue] = useState({
        login: "",
        senha: "",
      });

    const [isActive, setIsActive] = useState({
        login: false,
        senha: false,
    });

    function handleTextChange(event) {
        const atr = event.target.name;
        setValue({ ...value, [atr]: event.target.value });
    
        value.login !== "" ? setIsActive({ ...isActive, login: true }): setIsActive({ ...isActive, login: false });
        value.senha !== "" ? setIsActive({ ...isActive, senha: true }): setIsActive({ ...isActive, senha: false });
    }

    const handleOnBlur = (event) =>{
        const atr = event.target.name;

        if(value[atr] !== ""){
            setIsActive({...isActive, [atr]: true});
        }else{
            setIsActive({...isActive, [atr]: false})
        }
    }
    return(
        <section className='formulario'>
            <img className='logo' src={logo} alt=""/>
            <form>
                <h2 className='title-login'>Fazer Login</h2>

                <Input 
                    label="Nome de usuário" 
                    type="text" 
                    name="login"
                    value={value.login}
                    isActive={isActive.login}
                    handleTextChange={handleTextChange}
                    handleOnBlur={handleOnBlur}
                />

                <Input 
                    label="Senha" 
                    type="password"
                    name="senha"
                    value={value.senha}
                    isActive={isActive.senha}
                    handleTextChange={handleTextChange}
                    handleOnBlur={handleOnBlur}
                 />

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

                <BotaoCentral 
                    className={
                        value.login !== "" && value.senha !== ""
                            ? "btn__ative"
                            : "btn__desative"}>
                    <AiOutlineArrowRight size={20} color={'#ECECEC'}/>
                </BotaoCentral>

                <Footer/>
            </form>
        </section>
    )
}

export default Formulario;