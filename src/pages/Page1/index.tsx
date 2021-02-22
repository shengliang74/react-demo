import React, {Component} from 'react';
import hdl from '../../assets/hdl.jpg';
import th from '../../assets/th.jpg';
import './index.scss';
interface IState {
    componentList: Object[];
}
export default class Page1 extends Component {
    constructor(props:any){
        super(props)
        this.state = {
            componentList:[],
        }
    }
    public state: IState
    componentDidMount(){
        window.addEventListener('message',this.getData,false);
    }
    componentWillUnmount(){
        window.removeEventListener("message",this.getData)
    }
    getData=(e:any)=>{
        console.log("111")
        console.log(e);
        const {componentList} = this.state;
        console.log(componentList)
        const {data} = e;
        this.setState({
            componentList:[...componentList,data]
        })
    }
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