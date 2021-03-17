import React, { useState } from 'react';
import { Menu } from 'antd';
import ButtonNormal from "../../mobile/component/button/buttonNormal"
import Wrap12 from "../../mobile/component/wrap/wrap12"
import Wrap66 from "../../mobile/component/wrap/wrap66";
import { CalalogComList } from '../../const/calalog';
import "./index.scss"

const { SubMenu } = Menu;
interface IProps {
    changeComponent: Function
}

export default function CatalogList(props: IProps) {
    const { changeComponent } = props;
    const handleClick = function (e: ISubCom) {
        changeComponent(e)
    }
    const drag = function (ev: any, data:string):void {
        ev.dataTransfer.setData("Text", data);
    }
    return (
        <div className="com-catelogList">
            <Menu
                style={{ width: 256 }}
                mode="inline"
            >
                <SubMenu title="容器" data-type="wrap">
                    <Menu.Item>
                        <div className="liItem" draggable="true" onDragStart={(ev)=>{drag(ev, "wrap-wrap12")}}>
                            <span>容器12</span>
                            <Wrap12 />
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div className="liItem" draggable="true" onDragStart={(ev)=>{drag(ev, "wrap-wrap66")}}>
                            <span>容器66</span>
                            <Wrap66 />
                        </div>
                    </Menu.Item>
                </SubMenu>
                <SubMenu title="按钮1" data-type="button">
                    {/* <Menu.Item onClick={() => { handleClick("button-normal") }}> */}
                    <Menu.Item>
                        <div className="liItem" draggable="true" onDragStart={(ev)=>{drag(ev, "button-normal")}}>
                            <span>普通按钮</span>
                            <ButtonNormal />
                        </div>
                    </Menu.Item>
                </SubMenu>
                {
                    CalalogComList && CalalogComList.map((item, index) => (
                        <SubMenu key={index} title={item.name}>
                            {
                                Array.isArray(item.subCom) && item.subCom.map((it, idx) => (
                                    <Menu.Item key={idx} onClick={() => { handleClick(it) }}>
                                        <div draggable="true" onDragStart={drag} id={"test" + index}>
                                            {it.name}
                                            <ButtonNormal />
                                        </div>
                                    </Menu.Item>
                                ))
                            }
                        </SubMenu>
                    ))
                }
            </Menu>
        </div>
    )
}