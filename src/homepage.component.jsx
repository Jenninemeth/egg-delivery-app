import React from 'react';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                
                <div className='content'>
                    <h1 className='title'>Who we are</h1>
                    <span className='info'>this is our story... </span>
                    <span className='button'>LEARN MORE</span>
                </div>

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