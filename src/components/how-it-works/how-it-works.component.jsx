import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './how-it-works.styles.scss';
import icon1 from '../../assets/Icons- attract customers-01.png';
import icon2 from '../../assets/Icons- increase sales-01-01.png';
import icon3 from '../../assets/Icons- teamwork-01.png';

export const HowItWorks = ({ title }) => (
    <div className='how-it-works'>
        <div className='title'>{title}</div>
        <div className='action-steps'>
            <div className='steps'>
            <img className='image' src={icon1} alt="icon" /> 
            <p>box</p> 
            </div>

            <div className='steps'>
            <img className='image' src={icon2} alt="icon" /> 
            <p>box</p> 
            </div>

            <div className='steps'>  
            <img className='image' src={icon3} alt="icon" />
            <p>box</p> 
            </div>
        </div>
        <CustomButton />
    </div>
);

export default HowItWorks;