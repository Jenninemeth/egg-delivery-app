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
                button: 'learn more',
                subtitle: 'How it works...',
                step1: 'Choose the delivery day that suits you best',
                step2: 'We gather your order each week',
                step3: "You'll recieve a text when your eggs are on your porch, for a contact-less delivery!"
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, title, message, button, subtitle, step1, step2, step3}) => ( 
                        <React.Fragment>
                            <InfoBox key={id} title={title} message={message} button={button} />
                            <HowItWorks key={id} subtitle={subtitle} step1={step1} step2={step2} step3={step3} /> 
                        </React.Fragment>
                    ))
                }
            </div>
        );
    }
}

export default Directory;