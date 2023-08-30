import PropTypes from 'prop-types'

//Styles
import '../scss/PortfolioList.scss'

const PortfolioList = ({title , id , active , setSelected}) => {
    return (
        <li className={active ? 'portfolioList active' : 'portfolioList'} id={id} onClick={() => setSelected(id)}>
            {title}
        </li>
    );
};

PortfolioList.propTypes = {
    title : PropTypes.string,
    id : PropTypes.string,
    active : PropTypes.bool,
    setSelected : PropTypes.any,
}

export default PortfolioList;