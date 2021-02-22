import * as React from 'react';
import BasePage from "../../component/BasePage";
import Header from "../../component/Header";
import Footer from '../../component/Footer';
import Left from '../../component/Left';
import Right from '../../component/Right';
import {util} from '@shengliang74/utils';
import "./index.scss"

// 然后在下面的类中使用泛型这种格式来定义，接收方式和js相同
interface IProps{
    name:string;
    age?:string | number | undefined;
    center: string | undefined;
}
// 通过接口声明状态state
interface IState{
    count:number;
}
export default class Home extends BasePage {
    public constructor(props:IProps) {
        super(props);
        this.iframeId = null;
        this.state = {
            count: 0,
        }
    }
    public iframeId: any
    public state: IState

    componentDidMount(){
        this.iframeId = document.getElementById("iframeId");
    }

    changeComponent = (data:Object) => {
        console.log(data)
        this.iframeId.contentWindow.postMessage(data)
    }

    render() {
        return (
            <div className="m-home">
                <Header />
                <div className="homeContent">
                    <Left changeComponent={this.changeComponent} />
                    <iframe id="iframeId" className="iframeContent" width="375" height="667" src="http://127.0.0.1:8089/page1" />
                    <Right />
                </div>
                <Footer />
            </div>
        )
    }
}