import React from 'react';
import '../styles/way.css'

export default class Vaengad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['Full Name', 'Email Address', 'Telephone Number', 'Perferred Contact Method'],
            item: [false, false, false],
            selectContent: ['your name', 'your Email', 'your phone', 'your contact'],
            confirm: false,
            select: false,
            selectIndex: 0,
            inputHascontent: [false, false, false, false],
            inputContents: ['', '', '', '']
        };
    }
    _hover(index) {
        this.state.item[index] = true
        this.setState({
            item: [...this.state.item]
        })
    }
    _leave(index) {
        this.state.item[index] = false
        this.setState({
            item: [...this.state.item]
        })
    }
    _select() {
        var select = document.getElementById('waySelect')
        if (this.state.select) {
            select.style.overflow = 'hidden'
            select.style.borderBottomWidth = '3px'
        } else {
            select.style.overflow = 'visible'
            select.style.borderBottomWidth = '0px'
        }
        this.setState({
            select: !this.state.select
        })
    }
    _selectitem(index) {
        this.state.inputHascontent[3] = true
        var select = document.getElementById('waySelect')
        this.setState({
            select: !this.state.select,
            selectIndex: index,
            confirm: this.state.inputHascontent.every((item, index) => {
                return item
            })
        })
        select.style.overflow = 'hidden'
        select.style.borderBottomWidth = '3px'
        this.state.inputContents[3] = index === 1 ? 'Telephone' : 'Email'
    }
    _input(index, event) {
        this.state.inputHascontent[index] = event.target.value.length > 0 ? true : false
        // this.state.item[index] = event.target.value.length > 0 ? true : false
        this.state.inputContents[index] = event.target.value
        this.setState({
            confirm: this.state.inputHascontent.every((item, index) => {
                return item
            })
        })

    }
    _submit() {
        let obj = {
            name: this.state.inputContents[0],
            Email: this.state.inputContents[1],
            Telephone: this.state.inputContents[2],
            method: this.state.inputContents[3]
        }
        this.props.Submit(obj, 1)
        this.props.SwitchTo(6)
    }
    componentDidMount(){
        var tempdd = document.getElementsByClassName('ddd')
        for (let index = 0; index < tempdd.length; index++) {
            const item = tempdd[index];
            item.addEventListener('focus',function(e){
                console.log(e.target.parentNode.style)
                e.target.parentNode.style.borderLeftWidth = '12px'
                e.target.parentNode.style.borderLeftStyle = 'solid'
                e.target.parentNode.style.borderLeftColor = '#BC9B56'
                e.target.style.width = '537px'
            })
            item.addEventListener('blur',function(e){
                console.log(e.target.parentNode.style)
                e.target.parentNode.style.borderLeft = 'none'
                e.target.style.width = '549px'
            })
        }
    }
    render() {
        return (
            <div className='waycontainer'>
                <article className='main'>
                    <p>What best describes the sector
                        <br></br>
                        of your company?</p>
                    {this.state.list.map((item, index) =>
                        <div key={index} >
                            {index !== 3 && this.state.inputHascontent[index] || this.state.item[index] ?
                                <p>{item + '*'}</p> : <p>&nbsp;</p>
                            }
                            {index === 3 ?
                                <div className='select' id='waySelect'>
                                    <div onClick={() => this._select()} style={{ textAlign: 'left' }}>
                                        {
                                            this.state.selectIndex === 0 ?
                                                null
                                                : this.state.selectIndex === 1 ? <img style={{ marginRight: '40px' }} src='../images/phone.svg'></img>
                                                    : <img style={{ marginRight: '32px' }} src='../images/email.svg'></img>
                                        }
                                        {
                                            this.state.selectIndex === 0 ?
                                                item
                                                : this.state.selectIndex === 1 ? <span style={{ textAlign: 'left', flex: 1 }}>Via Telephone</span> : <span style={{ textAlign: 'left', flex: 1 }}>Via Email</span>
                                        }
                                        <img style={{ transform: 'rotateZ(-90deg) scale(0.6)', width: '30px' }} src='../images/back@2x.png'></img>
                                    </div>
                                    <div className='selectItem'>
                                        <div onClick={() => this._selectitem(1)}>
                                            <img src='../images/phone.svg'></img>
                                            Via Telephone
                                        </div>
                                        <div onClick={() => this._selectitem(2)}>
                                            <img src='../images/email.svg'></img>
                                            Via Email
                                        </div>
                                    </div>
                                </div> :
                                <div className='optionParent'>
                                    <input className='option ddd' placeholder={this.state.item[index] ? this.state.selectContent[index] : item}
                                        onMouseOver={() => this._hover(index)}
                                        onMouseLeave={() => this._leave(index)}
                                        onInput={this._input.bind(this, index)}
                                    />
                                </div>
                            }
                        </div>
                    )}
                    <div onClick={() => this.state.confirm ? this._submit() : null}
                        className={this.state.confirm ? 'span confirm call' : 'span call'}
                    >
                        <span className='temp'>DONE, NEXT QUESTION</span>
                        <div>
                            <img style={{ width: '33px' }} src="../images/complete@2x.png"></img>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
