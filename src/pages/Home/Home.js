import React, {Component} from 'react';
import {util} from '@shengliang74/utils';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }

    render() {
        return (
            <div>
                this is home~<br/>
                当前计数：{this.state.count}<br/>
                <button onClick={() => this._handleClick()}>自增</button>
                <iframe src="http://localhost:8089/edit.html" scrolling="yes" style={{border:"1px solid red"}} width="375px" height="667px"></iframe>
            </div>
        )
    }
}