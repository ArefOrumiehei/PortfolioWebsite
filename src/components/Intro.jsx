import { useEffect, useRef } from 'react';
import { init } from 'ityped';

//Styles
import '../scss/Intro.scss';

//Photos
import Picture from '../assets/images/ryangoslingNoBG.jpg'

//Icons
import { IconChevronDown } from '@tabler/icons-react';


const Intro = () => {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, 
            {showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Front-end Developer', 'Designer' , 'Content Creator' ] })
    }, [])

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src={Picture} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I`m</h2>
                    <h1>Aref Orumiehei</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio" className='downBtn'>
                    <IconChevronDown size={65} stroke={1}/>
                </a>
            </div>
        </div>
    );
};

export default Intro;