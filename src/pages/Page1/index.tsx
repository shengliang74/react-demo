import React, {Component} from 'react';
import hdl from '../../assets/hdl.jpg';
import th from '../../assets/th.jpg';
import './index.scss';
export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                <img className="hotPot" src={hdl} alt="海底捞"/>
                <img src={th} alt="小图标"/>
                <img src={th} alt="小图标2"/>
                <div className="car"></div>
                <div>
                    <p>this is Page1kkkk~</p>
                </div>
            </div>
        )
    }
}