import React from 'react';
import '../styles/description.css'


export default class Vaengad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['OPTION ONE', 'OPTION TWO', 'OPTION THREE', 'OPTION FOUR', 'NOT LISTED'],
            index: -1,
            confirm: false
        };
    }
    _select(index) {
        this.setState({
            index: index,
            confirm: true
        })
    }
    render() {
        return (
            <div className='descriptioncontainer'>
                <article className='main'>
                    <p>What best describes the sector
                        <br></br>
                        of your company?</p>
                    {this.state.list.map((item, index) =>
                        <div key={index} className={this.state.index === index ? 'active option' : 'option'} onClick={() => this._select(index)}>
                            <div>
                                <div></div>
                            </div>
                            <p>{item}</p>
                        </div>
                    )}
                    <div onClick={() => this.state.confirm ?this.state.index===4?this.props.SwitchTo(3): this.props.SwitchTo(10) : null}
                        className={this.state.confirm ? 'span confirm call' : 'span call'}
                    ><span className='temp'>DONE, NEXT QUESTION</span>
                        <div>
                            <img style={{width:'33px'}} src="../images/complete@2x.png"></img>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
