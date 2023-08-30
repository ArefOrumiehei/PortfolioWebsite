import PropTypes from 'prop-types'

//Styles
import '../scss/Menu.scss'

const Menu = ({menuOpen , setMenuOpen}) => {
    return (
        <div className={`menu ${menuOpen && 'active'}`}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolios</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#certificates">Certificates</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

Menu.propTypes = {
    menuOpen : PropTypes.bool,
    setMenuOpen : PropTypes.any,
}

export default Menu;