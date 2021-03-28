import React from 'react';
import entity from './entity';
import "./index.scss";

export default function WrapDiv(props:any) {
    let { moduleData } = props;
    moduleData = Object.assign(entity, moduleData);
    const {children, id} = props;
    let com1 = "";
    if(Array.isArray(children)){
        com1 = children[0]
    }
    return(
        <div className="com-wrapDiv" id={id}>
            {com1}
        </div>
    )
}