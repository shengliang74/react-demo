import React from 'react';
import entity from './entity';
import { drag } from '@/utils/utils';
import {ComponentType} from "@/mobile/const/componentType";
import "./index.scss";

export default function Wrap12(props:any) {
    let { moduleData } = props;
    moduleData = Object.assign(entity, moduleData);
    const {children, isInMenu, id} = props;
    let com1 = "";
    if(Array.isArray(children)){
        com1 = children[0]
    }
    return(
        <div
            id={id}
            className="com-wrap12"
            draggable="true"
            onDragStart={(ev)=>{drag(ev, ComponentType.wrap_wrap12, isInMenu, id)}}
            style={moduleData.style}
        >
            {com1}
        </div>
    )
}