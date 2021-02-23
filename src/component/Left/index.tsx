import React, { useState } from 'react';
import {Card} from 'antd';
import {bigClassComList} from './comType';
import CatalogList from '../CatalogList'
// import * as abc  from '@shengliang74/utils';
import "./index.scss"

interface Props {
    changeComponent: Function
}

enum TitleKeyEnum {
    componentsList = "componentsList",
    empty1 = "empty1",
    empty2 = "empty2",
}

export default function Left(props:Props){
    const [titleKey, setTitleKey] = useState(TitleKeyEnum.componentsList); 
    const {changeComponent} = props;
    const clickCom = function(data:any){
        if(changeComponent){
            changeComponent(data);
        }
    }
    // 组件列表
    const comList = function(){
        return bigClassComList.map((item:any)=>{
            return (
                <div key={item.name}  onClick={()=>{clickCom(item)}}>
                    {item.name}
                </div>
            )
        })
    }
    // 标题内容Dom
    const contentListNoTitle = {
        componentsList: CatalogList(),
        empty1: <p>empty1</p>,
        empty2: <p>empty2</p>
    }
    // 标题列表
    const tabListNoTitle = [
        {key: TitleKeyEnum.componentsList,tab: "组件"},
        {key: TitleKeyEnum.empty1,tab: "空1"},
        {key: TitleKeyEnum.empty2,tab: "空2"}
    ]
    return (
        <div className="m-left">
            <Card
                style={{ width: '100%' }}
                tabList={tabListNoTitle}
                activeTabKey={titleKey}
                onTabChange={(key:TitleKeyEnum) => {
                    setTitleKey(key)
                }}
            >
                {contentListNoTitle[titleKey]}
            </Card>
            <div>
                
            </div>
            <div>

            </div>
        </div>
    )
}