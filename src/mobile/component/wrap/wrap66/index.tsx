import React from 'react';
import entity from './entity';
import { drag } from '@/utils/utils'
import {ComponentType} from "@/mobile/const/componentType";
import "./index.scss";

export default function Wrap66(props:any) {
    let { moduleData } = props;
    moduleData = Object.assign(entity, moduleData);
    const {children, isInMenu, id} = props;
    let com1 = "", com2 = "";
    if(Array.isArray(children)){
        com1 = children[0];
        com2 = children[1];
    }
    return(
        <div
            id={id}
            className="com-wrap66"
            draggable="true"
            onDragStart={(ev)=>{drag(ev, ComponentType.wrap_wrap66, isInMenu, id)}}
        >
            <div className="wrapLeft">
                {com1}
            </div>
            <div className="wrapRight">
                {com2}
            </div>
        </div>
    )
}