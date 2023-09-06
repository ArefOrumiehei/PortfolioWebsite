import { useState } from 'react';

//Icons
import { IconChevronLeft, IconChevronRight, IconDeviceMobileCode, IconIcons, IconWorldCode } from '@tabler/icons-react';

//Styles
import '../scss/Works.scss';

//Data
import { sliderData } from '../data/data';


const Works = () => {

    const [currentSlide , setCurrentSlide] = useState(0)

    const clickHandler = (way) => {
        if (way === 'left') setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : sliderData.length - 1)
        if (way === 'right') setCurrentSlide(currentSlide == sliderData.length - 1 ? 0 : currentSlide + 1)
    }

    return (
        <div className='works' id='works'>
            <div className="slider" style={{transform : `translateX(-${currentSlide * 100}vw)`}}>
                {sliderData.map(data => (
                    <div className="container" key={data.id}>
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="iconContainer">
                                {data.icon === 'web' && <IconWorldCode />}
                                {data.icon === 'mobile' && <IconDeviceMobileCode />}
                                {data.icon === 'icons' && <IconIcons />}
                                </div>
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={data.img} alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <IconChevronLeft className='arrow left' onClick={() => clickHandler('left')} size={70} stroke={1.25}/>
            <IconChevronRight className='arrow right' onClick={() => clickHandler('right')} size={70} stroke={1.25}/>
        </div>
    );
};

export default Works;