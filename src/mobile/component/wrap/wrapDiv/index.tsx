import React from 'react';
import "./index.scss";

export default function WrapDiv(props:any) {
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