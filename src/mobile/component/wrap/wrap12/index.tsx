import React from 'react';
import "./index.scss";

interface IProps {
    com1: any
}

export default function Wrap12(props:any) {
    const {children} = props;
    let com1 = "";
    if(Array.isArray(children)){
        com1 = children[0]
    }
    const drag = function (ev: any, data:string):void {
        ev.dataTransfer.setData("Text", data);
    }
    return(
        <div className="com-wrap12" draggable="true" onDragStart={(ev)=>{drag(ev, "wrap-wrap12")}}>
            {com1}
        </div>
    )
}