//Styles
import '../scss/Team.scss';

//Data 
import { teamData } from '../data/data';

//Icons
import { IconBrandLinkedin, IconCornerDownRight } from '@tabler/icons-react';


const Team = () => {
    return (
        <div className='team' id='team'>
            <h1>Team</h1>
            <div className="container">
                {teamData.map(item => (
                <div className={item.featured ? 'card featured' : 'card'} key={item.id}>
                    <div className="top">
                        <IconCornerDownRight className='icon' size={30} />
                        <img src={item.img} alt="" className='user' />
                        <IconBrandLinkedin className='linkdin' stroke={1.5} size={30} />
                    </div>
                    <div className="center">
                        {item.description}
                    </div>
                    <div className="bottom">
                        <h3>{item.name}</h3>
                        <h4>{item.title}</h4>
                    </div>
                </div>))}
            </div>
        </div>
    );
};

export default Team;