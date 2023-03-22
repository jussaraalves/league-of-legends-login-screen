import wallpaper from '/images/yasuo.jpg';
import './ContainerImage.css'
import React from 'react';

const ContainerImage = () => {
    return(
        <section className='section-image'>
            <img className='wallpaper' src={wallpaper} alt='wallpaper prinicipal do yasuo de league of legends'/>
        </section>
    )
}

export default ContainerImage;