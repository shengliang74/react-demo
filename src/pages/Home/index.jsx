import React from 'react';
import BasePage from "$component/BasePage";
import Header from '$component/Header/index.tsx';
import Footer from '$component/Footer/index.tsx';
import Left from '$component/Left/index.tsx';
import {util} from '@shengliang74/utils';

export default class Home extends BasePage {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className="m-home">
                <Header />
                <div>
                    <Left />
                    <iframe width="375" height="667" src="http://127.0.0.1:8089/page1" />
                </div>
                <Footer />
            </div>
        )
    }
}