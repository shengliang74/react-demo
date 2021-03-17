import React, { Component, Suspense } from 'react';
const ButtonNormal = React.lazy(() => import('../../mobile/component/button/buttonNormal'));
const ImgNormal = React.lazy(() => import('../../mobile/component/img/imgNormal'));
const NavBottom = React.lazy(() => import('../../mobile/component/nav/navBottom'));
const TextCricle = React.lazy(() => import('../../mobile/component/text/textCricle'));
const Wrap12 = React.lazy(() => import('../../mobile/component/wrap/wrap12'));
const Wrap66 = React.lazy(() => import('../../mobile/component/wrap/wrap66'));
import './index.scss';


interface IState {
    componentList: IComponentListItem[];
    componentInfo: object
}

interface IComponentListItem {
    type: string,
    children?: object[],
}

export default class Page1 extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            componentList: [
                {type:'wrap-wrap12',children:[{type:"button-normal"}]},
                {type:'wrap-wrap12',children:[{type:"wrap-wrap66",children:[{type:'button-normal'},{type:'img-normal'}]}]},
            ],
            componentInfo: {}
        }
    }
    public state: IState
    componentDidMount() {
        window.addEventListener('message', this.getData, false);
    }
    componentWillUnmount() {
        window.removeEventListener("message", this.getData)
    }
    getData = (e: any) => {
        const { componentList } = this.state;
        const { origin, data } = e || {};
        if (origin !== 'http://127.0.0.1:8089') {
            return
        }
        if(data && data.type){
            this.setState({
                componentList: [...componentList, data]
            })
        }
    }
    getComponents = (com: IComponentListItem) => {
        const dom = com.children ? com.children.map((it:IComponentListItem) => this.getComponents(it)) : "";
        switch (com.type) {
            case "wrap-wrap12":
                return <Wrap12>{dom}</Wrap12>
            case "wrap-wrap66":
                return <Wrap66>{dom}</Wrap66>
            case "button-normal":
                return <ButtonNormal />
            case "img-normal":
                return <ImgNormal />
            case "nav-bottom":
                return <NavBottom />
            case "text-cricle":
                return <TextCricle />
        }
    }
    drop = (ev:any) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        const {componentList} = this.state;
        if(data){
            this.setState({
                componentList: [...componentList, {type: data}]
            })
        }
    }
    allowDrop = (ev:any) => {
        ev.preventDefault();
    }
    render() {
        const { componentList } = this.state;
        return (
            <div className="m-page1" onDrop={this.drop} onDragOver={this.allowDrop}>
                <Suspense fallback={<div>Loading...</div>}>
                    {
                        Array.isArray(componentList) &&
                        componentList.map((item: IComponentListItem, index) => this.getComponents(item, index))
                    }
                </Suspense>
            </div>
        )
    }
}