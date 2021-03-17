import React from 'react';
import entity from './entity.js';
import './index.scss';

export default function ImgNormal(props:any) {
    let {moduleData, triggerEditor} = props;

    moduleData = Object.assign(entity,moduleData);
    
    const onCDivClick = ()=>{
        triggerEditor && triggerEditor(moduleData);
    }

    const jumpUrl = () => {
        if(moduleData && moduleData.customFeature && moduleData.customFeature.jumpUrl ){
           const customUrl=moduleData.customFeature.jumpUrl;
           location.href = customUrl
        }       
    }

    return (
        <div 
            className="com-img-normal"
            style={{'textAlign': moduleData.customFeature.textAlign}}
            data-id={moduleData.dataid}
            onClick={onCDivClick}
        >
            <img style={moduleData.style} 
                id={`home_com_img`}
                src={moduleData.content.pic} 
                onClick={jumpUrl}
            />
        </div>
    );
}
