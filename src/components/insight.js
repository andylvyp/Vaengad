import React from 'react';
import '../styles/insight.css'

export default class Vaengad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['OPTION ONE', 'OPTION TWO', 'OPTION THREE', 'OPTION FOUT', 'OPTION FIVE'],
            confirm: false,
            content:''
        };
    }
    _input() {
        let text = document.getElementById('text').value
        this.state.content = text
        text.length > 0 ? this.setState({
            confirm: true
        }) : this.setState({
            confirm: false
        })
    }
    _submit() {
        let obj = {
            insight:this.state.content
        }
        this.props.Submit(obj)
        this.props.SwitchTo(4)
    }
    render() {
        return (
            <div className='container'>
                <article className='main'>
                    <p>In 50 words or less,
                        <br></br>
                        Please give us some insight into what you do.
                    </p>
                    <textarea placeholder={'Please limit your answers to 50 words max'} maxLength={50} onInput={() => this._input()} id='text' className='text' placeholder="Please limit your answers to 50 words max"></textarea>
                    <div
                        onClick={() => this.state.confirm ? this._submit() : null}
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
