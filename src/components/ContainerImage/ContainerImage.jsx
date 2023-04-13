import wallpaper from '/images/yasuo.jpg';
import vector from '/images/vector.png';
import './ContainerImage.css';
import {AiFillClockCircle} from 'react-icons/ai';
import Modal from 'react-modal';
import { useState } from 'react';
import React from 'react';

const  customStyles  =  { 
    content: { 
      fontFamily: 'Lexend Deca, sans-serif',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    
      position: 'absolute',
      top:'1%',
      left:'25%',
      backgroundColor: '#F9F9F9',
      padding:'37px',
      width:'350px',
      height:'259px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  
    },
    'h2':{ 
      fontWeight: '300',
      fontSize: '20px'
    },
    '.content-data': {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        lineHeight: '1.5',
        color: '#919191',
        margin: '10px 0',
        fontWeight: '600',
    },
    'p':{
        fontSize:'13px',
    },
    '.detalhes':{
        color:'#B2B2B2' ,
        paddingTop: '40px',
        fontSize: '11px',
        fontWeight: '500',
        textTransform: 'uppercase',
        cursor: 'pointer',

    }
};

Modal.setAppElement('#root');

const ContainerImage = () => {
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal(){
        setIsOpen(true)
    }

    function closeModal(){
        setIsOpen(false)
    }

    return(
        <section className='section-image'>
            <button className='button-image' onClick={openModal}>
                <img className='vector' src={vector}/>
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Exemple Modal"
                overlayClassName="modal-overlay"
                style = { customStyles } 
                className="modal-content"
            >
                <h2 className='titulo' style={customStyles['h2']}>Transferências de conta indisponíveis</h2>
                <div className='content-data' style={customStyles['.content-data']}>
                    <AiFillClockCircle color='#919191'/> 
                    <p> 22/09/2021 13:49 </p>
                </div>

                <p style={customStyles['p']}>As transferências de conta estão
                indisponíveis enquanto trabalhamos na
                solução de um problema</p>

                <p className='detalhes' style={customStyles['.detalhes']}>mais detalhes</p>
            </Modal> 
            <img className='wallpaper' src={wallpaper} alt='wallpaper prinicipal do yasuo de league of legends'/>
        </section>
    )
}

export default ContainerImage;