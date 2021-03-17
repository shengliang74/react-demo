import React from 'react';
import entity from "./entity.js";
import "./index.scss"

export default function ButtonNormal(props:any) {
    let { moduleData, triggerEditor } = props;

    moduleData = Object.assign(entity,moduleData);

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
