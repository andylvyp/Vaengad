import React from 'react';
import '../styles/thank.css'
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
            <div className='thankcontainer'>
                <article className='main'>
                    <img style={{width:'179px'}} src='../images/fly@2x.png'></img>
                    <p className='p1'>
                        We have everything we need to take flight.
                    </p>
                    <p className='p2'>
                        Thank you for diving deeper! It makes a difference
                        <br></br>
                        knowing how we can help you. You can schedule a call
                        <br></br>
                        with us below or simply, be redirected back to our home.
                    </p>
                    <div className='Button'>
                        <div className='span1'
                            onClick={() => this.nav()}
                        >
                            <img style={{width:'43px'}} src='../images/return@2x.png'></img>
                            <div
                                className='left'
                            >TAKE ME HOME</div>
                        </div>
                        <div
                            className='call span'
                        ><span className='temp'>SCHEDULE YOUR CALL</span>
                            <div onClick={()=>{window.location.href='https://www.vaengad.se/contact'}}>
                                <img src="../images/call.svg"></img>
                            </div>
                        </div>
                    </div>

                </article>
            </div>
        )
    }
}
