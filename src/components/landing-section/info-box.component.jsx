import React from 'react';

import { CustomButton } from '../custom-button/custom-button.component';

import './info-box.styles.scss';
import heroImage from '../../assets/hills.jpg';

const InfoBox = ({ title, message }) => (
    <div className='hero-menu'>
        <img className='image' src={heroImage} alt="Our Ranch" />
        <div className='value-statement'>
            <span className='title'>{title}</span>
            <span className='value-message'>{message}</span>
        <CustomButton />
        </div>
    </div>
);

export default InfoBox;