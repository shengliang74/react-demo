import React, { useState } from 'react';
import { Menu } from 'antd';
import {CalalogComList} from '../../const/calalog'

const { SubMenu } = Menu;

export default function CatalogList() {
    const handleClick = function(){}
    return (
        <div>
            <Menu
                onClick={handleClick}
                style={{ width: 256 }}
                mode="inline"
            >
                {
                    CalalogComList.map((item,index) => (
                        <SubMenu key={index} title={item.name}>
                            {
                                Array.isArray(item.subCom) && item.subCom.map((it,idx) => (
                                    <Menu.Item key={idx}>{it.name}</Menu.Item>
                                ))
                            }
                        </SubMenu>
                    ))
                }
            </Menu>
        </div>
    )
}