import wallpaper from '/images/yasuo.jpg';
import vector from '/images/vector.png';
import './ContainerImage.css';
import {AiFillClockCircle} from 'react-icons/ai';
import React from 'react';

const ContainerImage = () => {  
    return(
        <section className='section-image'>

            <div className='tooltip'>
                <img className='vector' src={vector}/>

                <div className='tooltiptext'>
                    <h2 className='titulo'>Transferências de conta indisponíveis</h2>
                    <div className='content-data'>
                        <AiFillClockCircle color='#919191'/> 
                        <p> 22/09/2021 13:49 </p>
                    </div>

                    <p className='text-info'>As transferências de conta estão
                    indisponíveis enquanto trabalhamos na
                    solução de um problema</p>

                    <p className='detalhes'>mais detalhes</p>
                </div>
            </div>
           
            <img className='wallpaper' src={wallpaper} alt='wallpaper prinicipal do yasuo de league of legends'/>
        </section>
    )
}

export default ContainerImage;