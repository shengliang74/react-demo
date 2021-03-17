import React from 'react';
import "./index.scss";

interface IProps {
    com1: any,
    com2: any
    // com2: React.ReactElement
}
export default function Wrap66(props:any) {
    const {children} = props;
    let com1 = "", com2 = "";
    if(Array.isArray(children)){
        com1 = children[0];
        com2 = children[1]
    }
    return(
        <div className="com-wrap66">
            <div className="wrapLeft">
                {com1}
            </div>
            <div className="wrapRight">
                {com2}
            </div>
        </div>
    )
}