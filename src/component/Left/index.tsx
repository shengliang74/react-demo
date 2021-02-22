import React from 'react';
import {bigClassComList} from './comType';
// import * as abc  from '@shengliang74/utils';
import "./index.scss"

interface Props {
    changeComponent: Function
}

export default function Left(props:Props){
    const {changeComponent} = props;
    const clickCom = function(data:any){
        
        if(changeComponent){
            changeComponent(data);
        }
    }
    return (
        <div className="m-left">
            <div>
                {
                    bigClassComList.map((item:any)=>{
                        return <div key={item.name} onClick={()=>{clickCom(item)}}>
                            {item.name}
                        </div>
                    })
                }
            </div>
            <div>

            </div>
        </div>
    )
}