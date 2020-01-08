import React from 'react';

import InfoBox from '../../components/info-box/info-box.component';
import HowItWorks from '../../components/how-it-works/how-it-works.component';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                
                <InfoBox />

                <HowItWorks />

                <div className='content'>
                    <h1 className='title'>How it works</h1>
                    <span className='info'>box box box</span>
                    <span className='button'>GET STARTED</span>
                </div>

                <div className='content'>
                    <h1 className='title'>Check if we deliver to your zip code</h1>
                    <span className='zip'>Empty box</span>
                    <span className='button'>CHECK</span>
                </div>

                <div className='content'>
                    <h1 className='title'>What folks are saying</h1>
                    <span className='info'>user comments...</span>
                </div>

            </div>
        </div>
    </div>
);

export default HomePage;