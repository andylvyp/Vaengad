import React from 'react';
import '../styles/vaengad.css'
import { NavLink } from 'react-router-dom';

export default class Vaengad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }
    nav() {
        window.location.href = 'http://www.vaengad.se'
    }
    render() {
        return (
            <div className='vaengadcontainer'>
                <article className='main'>
                    <img style={{width:'388px'}} src='../images/logo&font@2x.png'></img>
                    <p className='p1'>
                        Welcome to the Vaengad Lab's
                        <br></br>
                        New Business Questionnaire
                    </p>
                    <p className='p2'>
                        Please note that all your answers will remain strictly confidential. They will be used ONLY
                    <br></br>
                    for our internal professional means of determining the appropriate
                    </p>
                    <div onClick={() => this.props.SwitchTo(2)}
                        className={'span'}
                    >LET'S GET STARTED</div>
                </article>
            </div>
        )
    }
}
