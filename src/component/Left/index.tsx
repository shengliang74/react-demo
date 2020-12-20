import React from 'react';
import {bigClassComList} from './comType.tsx';


export default function Left(){
    return (
        <div className="m-left">
            <div>
                {
                    bigClassComList.map((item)=>{
                        return <div>
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