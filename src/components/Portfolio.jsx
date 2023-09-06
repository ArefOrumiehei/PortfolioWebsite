import { useEffect, useState } from 'react';

//Data
import { featuredPortfolio , webPortfolio , mobilePortfolio , designPortfolio , contentPortfolio} from '../data/data'

//Styles
import '../scss/Portfolio.scss';

//Components
import PortfolioList from './PortfolioList';


const Portfolio = () => {

    const [selected , setSelected] = useState('featured')
    const [data , setData] = useState([])

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio)
                break;

            case "web":
                setData(webPortfolio)
                break;

            case "mobile":
                setData(mobilePortfolio)
                break;

            case "design":
                setData(designPortfolio)
                break;

            case "content":
                setData(contentPortfolio)
                break;

            default:
                setData(featuredPortfolio)
                break;
        }
    }, [selected])

    const list = [
        {
            title : 'Featured',
            id : 'featured',
        },
        {
            title : 'Web App',
            id : 'web',
        },
        {
            title : 'Mobile App',
            id : 'mobile',
        },
        {
            title : 'Design',
            id : 'design',
        },
        {
            title : 'Content',
            id : 'content',
        },
    ]

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList key={item.id} title={item.title} id={item.id} active={selected === item.id} setSelected={setSelected} />
                ))}
            </ul>
            <div className="container">
                {data.map(item => (
                    <div className='item' key={item.id}>
                        <img src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;