import React, {Component} from 'react';

export default class BasePage extends Component {
    constructor(props){
        super(props)
        this.pv();
    }
    goTo = (options) =>{
        this.props.history.push(options)
    }
    replace = (options) =>{
        this.props.history.replace(options)
    }
    pv = () => {

    }
}