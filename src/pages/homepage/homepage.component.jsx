import React from 'react';

import Directory from '../../components/directory/directory.component';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                
                <Directory />
    
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