import React from 'react';

import InfoBox from '../landing-section/info-box.component';
import HowItWorks from '../how-it-works/how-it-works.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                id: 1,
                title: 'Who we are',
                message: 'this is our story...Ye trysail barque spirits doubloon keel Brethren of the Coast league piracy dead men tell no tales.',
                button: 'learn more'
            },
            {
                id: 2,
                title: 'How it works',
                message: '',
                button: 'learn more'
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, title, message, button}) => ( 
                        <React.Fragment>
                            <InfoBox key={id} title={title} message={message} button={button} />
                            <HowItWorks key={id} title={title} message={message} button={button} /> 
                        </React.Fragment>
                    ))
                }
            </div>
        );
    }
}

export default Directory;