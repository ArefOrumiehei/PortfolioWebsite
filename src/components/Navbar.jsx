import PropTypes from 'prop-types'

//Styles
import '../scss/Navbar.scss';

//Icons
import { IconMailFilled } from '@tabler/icons-react';


const Navbar = ({menuOpen , setMenuOpen}) => {
    return (
        <div className={`navbar ${menuOpen && 'active'}`} id='navbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>
                        <span>Aref.dev</span>
                    </a>
                    <div className="itemContainer">
                        <IconMailFilled className='icon'/>
                        <span>areforumiehei@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    menuOpen : PropTypes.bool,
    setMenuOpen : PropTypes.any,
}

export default Navbar;