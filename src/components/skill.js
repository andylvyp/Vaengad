import React from 'react';
import '../styles/skill.css'

export default class Vaengad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['OPTION ONE', 'OPTION TWO', 'OPTION THREE', 'OPTION FOUT', 'OPTION FIVE'],
            conform: false,
            selectItem: [false, false, false, false]
        };
    }
    _select(index) {
        this.state.selectItem[index] = !this.state.selectItem[index]
        this.setState({
            selectItem: [...this.state.selectItem],
            confirm: this.state.selectItem.some((item, index) => {
                return item
            })
        })
    }
    _sumbit() {
        let obj = {
            marketing: this.state.selectItem[0],
            branding: this.state.selectItem[1],
            socialMedia: this.state.selectItem[2],
            digital: this.state.selectItem[3]
        }
        this.props.Submit(obj)
        this.props.SwitchTo(5)
    }
    render() {
        return (
            <div className='skillcontainer'>
                <article className='main'>
                    <p>What skills or services
                        <br></br>
                        are you looking for?
                    </p>
                    <div className='skills'>
                        <div className='first'>
                            <div onClick={() => this._select(0)} className={this.state.selectItem[0] ? 'active' : ''}>
                                <img src={this.state.selectItem[0] ? '../images/skilloneSelected.svg' : '../images/skillone.svg'} className='skill'></img>
                                <p>MARKETING</p>
                            </div>
                            <div onClick={() => this._select(1)} className={this.state.selectItem[1] ? 'active' : ''}>
                                <img src={this.state.selectItem[1] ? '../images/skilltwoSelected.svg' : '../images/skilltwo.svg'} className='skill'></img>
                                <p>BRANDING</p>
                            </div>
                        </div>
                        <div className='first'>
                            <div onClick={() => this._select(2)} className={this.state.selectItem[2] ? 'active' : ''}>
                                <img src={this.state.selectItem[2] ? '../images/skillthreeSelected.svg' : '../images/skillthree.svg'} className='skill'></img>
                                <p>SOCIAL MEDIA</p>
                            </div>
                            <div onClick={() => this._select(3)} className={this.state.selectItem[3] ? 'active' : ''}>
                                <img src={this.state.selectItem[3] ? '../images/skillfourSelected.svg' : '../images/skillfour.svg'} className='skill'></img>
                                <p>DIGITAL</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => this.state.confirm ? this._sumbit() : null}
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
