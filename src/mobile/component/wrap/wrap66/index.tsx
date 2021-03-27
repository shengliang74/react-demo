import React from 'react';
import "./index.scss";

interface IProps {
    com1: any,
    com2: any
    // com2: React.ReactElement
}
export default function Wrap66(props:any) {
    const {children, isInMenu, id} = props;
    let com1 = "", com2 = "";
    if(Array.isArray(children)){
        com1 = children[0];
        com2 = children[1]
    }
    console.log("zzzzzzzzz")
    console.log(children)
    const drag = function (ev: any, data:string):void {
        ev.dataTransfer.setData("Text", data);
        ev.dataTransfer.setData("handleType", isInMenu ? "add" : "move");
        ev.dataTransfer.setData("id", id);
    }
    return(
        <div id={id} className="com-wrap66" draggable="true" onDragStart={(ev)=>{drag(ev, "wrap_wrap66")}} >
            <div className="wrapLeft">
                {com1}
            </div>
            <div className="wrapRight">
                {com2}
            </div>
        </div>
    )
}