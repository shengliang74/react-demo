import React, { Component, Suspense } from 'react';
import {
    ButtonNormal,
    ImgNormal,
    NavBottom,
    TextCricle,
    Wrap12,
    Wrap66,
    WrapDiv
} from "../../mobile/component";
import {ComponentType} from "@/mobile/const/componentType";
import {getInDomData, getRandomNumber} from "@/utils/utils";
import { util } from "@shengliang74/utils"
import './index.scss';


interface IState {
    componentList: IComponentListItem[];
    componentInfo: object
}

interface IComponentListItem {
    id?: string,
    type: string,
    children?: IComponentListItem[],
}

export default class Page1 extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            componentList: [
                {id: "wrap_wrap12-1111", type:'wrap_wrap12',children:[
                    {id: "button_normal-2222", type:"button_normal", children:[]}
                ]},
                {id: "wrap_wrap12-3333", type:'wrap_wrap12',children:[
                    {id: "wrap_wrap66-4444", type:"wrap_wrap66",children:[
                        {id: "wrap_wrapDiv-5555", type:'wrap_wrapDiv',children:[
                            {id: "button_normal-6666", type:'button_normal'},
                        ]},
                        {id: "wrap_wrapDiv-7777", type:'wrap_wrapDiv',children:[
                            {id: "img_normal-8888", type:'img_normal'}]
                        }]
                    }]
                },
            ],
            componentInfo: {
            }
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
            case ComponentType.wrap_wrap12:
                return <Wrap12 id={com.id}>{dom}</Wrap12>
            case ComponentType.wrap_wrap66:
                return <Wrap66 id={com.id}>{dom}</Wrap66>
            case ComponentType.wrap_wrapDiv:
                return <WrapDiv id={com.id}>{dom}</WrapDiv>
            case ComponentType.button_normal:
                return <ButtonNormal />
            case ComponentType.img_normal:
                return <ImgNormal />
            case ComponentType.nav_bottom:
                return <NavBottom />
            case ComponentType.text_cricle:
                return <TextCricle />
        }
    }
    drop = (ev:any) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("Text");
        var handleType = ev.dataTransfer.getData("handleType");
        var domId = ev.dataTransfer.getData("id");
        const {componentList} = this.state;
        if(data){
            console.log(data,handleType)
            console.log(ev)
            console.log(ev.target.id)
            if(handleType === 'add'){
                const addObj:IComponentListItem = {
                    id:`${data}-${getRandomNumber()}`,
                    type: data
                }
                if(data && data.indexOf('wrap') > -1){
                    addObj['children'] = []
                }
                if(data === 'wrap_wrap66'){
                    addObj.children.push(
                        {
                            id: `wrap_wrapDiv-${getRandomNumber()}`,
                            type: 'wrap_wrapDiv',
                            children: []
                        },
                        {
                            id: `wrap_wrapDiv-${getRandomNumber()}`,
                            type: 'wrap_wrapDiv',
                            children: []
                        }
                    )
                }
                debugger
                this.addComponent(componentList, ev.target.id, componentList.length, addObj);
                const newComponentList = util.copy(componentList);
                this.setState({componentList: newComponentList});
            }
            if(handleType === 'move'){
                if(ev && ev.target && ev.target.id){
                    const dom = document.getElementById(ev.target.id);
                    const childrenDomList = ev.target.children;
                    const {pageX, pageY} = ev;
                    const newChildrenDomList = [].slice.call(childrenDomList)
                    const coordinateList = newChildrenDomList.map((it:any) => it.getBoundingClientRect())
                    let place = null;
                    let len = coordinateList.length;
                    let lastData = null;
                    for(let i=0;i<len; i++){
                        const temp = getInDomData(coordinateList[i], pageX, pageY);
                        if(
                            place === null &&
                            (temp.isOutsideTop && i === 0)
                            || (temp.isInsideTop && i === 0)
                        ){
                            // 添加至最顶端
                            place = 0;
                            break
                        }
                        if(
                            place === null
                            && lastData
                            && lastData.isOutsideBottom
                            && temp.isOutsideTop
                        ){
                            // 添加至当前位置上部
                            place = i;
                            break
                        }
                        if(
                            place === null
                            && temp.isInsideTop
                        ){
                            // 添加至当前位置上部
                            place = i;
                            break
                        }
                        if(
                            place === null
                            && temp.isInsideBottom
                        ){
                            // 添加至当前位置下部
                            place = i+1;
                            break
                        }
                        if(
                            (temp.isOutsideBottom && i === coordinateList.length-1)
                            || (temp.isInsideBottom && i === coordinateList.length-1)
                        ){
                            // 添加至末尾
                            place = len;
                            break
                        }
                        // 保存上一个节点的数据
                        lastData = temp;
                    }
                    if(place !== null){
                        const tarData = this.deleteComponent(componentList, domId);
                        this.addComponent(componentList, ev.target.id, place, tarData);
                        const newComponentList = util.copy(componentList);
                        this.setState({componentList: newComponentList});
                    }
                }
            }
        }
    }
    deleteComponent=(componentList:Array<IComponentListItem>, id:string):any => {
        let tempData = null;
        componentList.forEach((it, idx)=>{
            if(Array.isArray(it.children) && it.children.length> 0){
                tempData = this.deleteComponent(it.children, id)
            }
            if(it.id === id){
                componentList.splice(idx, 1);
                tempData = it
            }
        })
        return tempData
    }
    addComponent = (componentList:Array<IComponentListItem>, targetId:string, place:number, addData:IComponentListItem) => {
        if(targetId === 'page1'){
            componentList.splice(place,0,addData)
        }else{
            componentList.forEach((it:any) => {
                if(it.children && it.children.length > 0){
                    this.addComponent(it.children, targetId, place, addData)
                }else{
                    if(it.id === targetId){
                        it.children.splice(place,0,addData)
                    }
                }
            })
        }
    }
    allowDrop = (ev:any) => {
        ev.preventDefault();
    }

    render() {
        const { componentList } = this.state;
        return (
            <div id="page1" className="m-page1" onDrop={this.drop} onDragOver={this.allowDrop}>
                <Suspense fallback={<div>Loading...</div>}>
                    {
                        Array.isArray(componentList) &&
                        componentList.map((item: IComponentListItem, index) => this.getComponents(item))
                    }
                </Suspense>
            </div>
        )
    }
}