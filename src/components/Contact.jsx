import { useState } from 'react';

//Styles
import '../scss/Contact.scss';

//Image
import contactImg from '../assets/images/website-content-sections.png'

const Contact = () => {

    const [message , setMessage] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        setMessage(true)

        setTimeout(() => {
            setMessage(false)
        }, 3000)
    }

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src={contactImg} alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={submitHandler}>
                    <input type="text" id="text" placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks for your message.</span>}
                </form>
            </div>
        </div>
    );
};

export default Contact;