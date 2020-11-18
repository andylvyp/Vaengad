import React from 'react';
import '../styles/infoInput.css'
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import Vaengad from './vaengad'
import Description from './description'
import Insight from './insight'
import Skill from './skill'
import Way from './way'
import Thank from './thank'

export default class infoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            lastIndex: false,
            result: {}
        };
    }
    componentDidMount() {
        const mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            allowTouchMove: false
        })
    }
    nav() {
        window.location.href = 'http://www.vaengad.se'
    }
    switchTo(index) {
        var mySwiper = document.querySelector('.swiper-container').swiper
        if (index === 10) {
            mySwiper.slideTo(4);
            this.setState({
                index: 4,
                lastIndex: true
            })
        } else if (index === 9) {
            if (this.state.lastIndex) {
                mySwiper.slideTo(2);
                this.setState({
                    index: 2,
                    lastIndex: false
                })
            } else {
                mySwiper.slidePrev();
                this.setState({
                    index: this.state.index - 1,
                    lastIndex: false
                })
            }
        } else {
            mySwiper.slideTo(index);
            this.setState({
                index: index,
                lastIndex: false
            })
        }
    }
    _submit(obj, index) {
        Object.assign(this.state.result, obj)
        var data = JSON.stringify(obj);
        if (index === 1) {
            var name = 'cdk.json';//文件名
            this.exportRaw(data, name);
        }
    }
    exportRaw(data, name) {
        var urlObject = window.URL || window.webkitURL || window;
        var export_blob = new Blob([data]);
        var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
        save_link.href = urlObject.createObjectURL(export_blob);
        save_link.download = name;
        save_link.click();
    }
    render() {
        return (
            <div className='infoInputcontainer' >
                <header className='header'>
                    <div className='left' onClick={() => { this.state.index === 1 ? this.nav() : this.switchTo(9) }}>
                        <img style={{ width: '30px' }} src='../images/back@2x.png'></img>
                        <span>PREVIOUS</span>
                    </div>
                    <div className='center'>
                    </div>
                    <div className='right' onClick={this.nav}>
                        <span>EXIT</span>
                        <img style={{ width: '50px' }} src='../images/del@2x.png'></img>
                    </div>
                    <img style={{ width: '68px' }} src='../images/logo@2x.png' className='logo' onClick={this.nav}></img>
                </header>
                <article className='main'>
                    {[false, false, true, true, true, true, false][this.state.index] ?
                        <div className='nav' >
                            <div className={this.state.index === 2 ? 'active' : ''} onClick={() => this.switchTo(2)}></div>
                            <div className={this.state.index === 3 ? 'active' : ''} onClick={() => this.switchTo(3)}></div>
                            <div className={this.state.index === 4 ? 'active' : ''} onClick={() => this.switchTo(4)}></div>
                            <div className={this.state.index === 5 ? 'active' : ''} onClick={() => this.switchTo(5)}></div>
                        </div> : null
                    }

                </article>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Vaengad SwitchTo={this.switchTo.bind(this)}></Vaengad>
                        </div>
                        <div className="swiper-slide">
                            <Description SwitchTo={this.switchTo.bind(this)}></Description>
                        </div>
                        <div className="swiper-slide">
                            <Insight SwitchTo={this.switchTo.bind(this)} Submit={this._submit.bind(this)}></Insight>
                        </div>
                        <div className="swiper-slide">
                            <Skill SwitchTo={this.switchTo.bind(this)} Submit={this._submit.bind(this)}></Skill>
                        </div>
                        <div className="swiper-slide">
                            <Way SwitchTo={this.switchTo.bind(this)} Submit={this._submit.bind(this)}></Way>
                        </div>
                        <div className="swiper-slide">
                            <Thank SwitchTo={this.switchTo.bind(this)}></Thank>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
