import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

export const HowItWorks = () => (
    <div className=''>
        <div className='title'>How it Works</div>
        <div className='actionSteps'>
            <div className='steps'>
            <img></img>  
            <p>box</p> 
            </div>

            <div className='steps'>
            <img></img>  
            <p>box</p> 
            </div>

            <div className='steps'>
            <img></img>  
            <p>box</p> 
            </div>
        </div>
        <CustomButton />
    </div>
);

export default HowItWorks;