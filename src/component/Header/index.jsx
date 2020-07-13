import React, {Component} from 'react';
import "./index.scss";

export default class Header extends Component {
    render() {
        return (
            <div className="m-header">
                <ul>
                    <li>home</li>
                    <li>page1</li>
                </ul>
            </div>
        )
    }
}