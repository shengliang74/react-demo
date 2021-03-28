import React from 'react';
import { drag } from '@/utils/utils'
import entity from "./entity";
import {ComponentType} from "@/mobile/const/componentType";
import "./index.scss"

export default function ButtonNormal(props:any) {
    let { moduleData } = props;
    moduleData = Object.assign(entity,moduleData);
    const {isInMenu, id,triggerEditor} = props;


    const onCDivClick = () => {
        triggerEditor && triggerEditor(moduleData);
    }

    const jumpUrl = () => {
        if (moduleData && moduleData.customFeature && moduleData.customFeature.jumpUrl) {
            location.href = moduleData.customFeature.jumpUrl;
        }
    }
    return (
        <div
            className="com-button-normal"
            data-id={moduleData.dataid}
            onClick={onCDivClick}
            draggable="true"
            onDragStart={(ev)=>{drag(ev, ComponentType.button_normal, isInMenu, id)}}
        >
            {/* 编辑器左侧栏位! */}
            <span 
                style={moduleData.style}
                onClick={jumpUrl}
            >
                {moduleData.content.text}
            </span>
        </div>
    )
}
