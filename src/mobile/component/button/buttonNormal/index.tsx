import React from 'react';
import entity from "./entity";
import "./index.scss"

export default function ButtonNormal(props:any) {
    let { moduleData, triggerEditor } = props;
    const {isInMenu, id} = props;

    moduleData = Object.assign(entity,moduleData);

    const onCDivClick = () => {
        triggerEditor && triggerEditor(moduleData);
    }

    const jumpUrl = () => {
        if (moduleData && moduleData.customFeature && moduleData.customFeature.jumpUrl) {
            location.href = moduleData.customFeature.jumpUrl;
        }
    }
    const drag = function (ev: any, data:string):void {
        ev.dataTransfer.setData("Text", data);
        ev.dataTransfer.setData("handleType", isInMenu ? "add" : "move");
        ev.dataTransfer.setData("id", id);
    }
    return (
        <div
            className="com-button-normal"
            data-id={moduleData.dataid}
            onClick={onCDivClick}
            draggable="true" onDragStart={(ev)=>{drag(ev, moduleData.type)}}
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
