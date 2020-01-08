import React from 'react';

import { CustomButton } from './../custom-button/custom-button.component';

import './info-box.styles.scss';
import heroImage from '../../assets/hills.jpg';

const InfoBox = ({ title }) => (
    <div className='hero-menu'>
        <img className='image' src={heroImage} alt="Our Ranch" />
        <div className='value-statement'>
            <span className='title'>Who We Are</span>
            <span className='value-message'>this is our story... 
            Ye trysail barque spirits doubloon keel Brethren of the 
            Coast league piracy dead men tell no tales.</span>
        <CustomButton />
        </div>
    </div>
);

export default InfoBox;