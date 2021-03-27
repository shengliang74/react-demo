import React, { Component } from 'react';
import { Menu } from 'antd';
import ButtonNormal from "@/mobile/component/button/buttonNormal"
import Wrap12 from "@/mobile/component/wrap/wrap12"
import Wrap66 from "@/mobile/component/wrap/wrap66";
import TextCricle from "@/mobile/component/text/textCricle"
import ImgNormal from "@/mobile/component/img/imgNormal"
import NavBottom from "@/mobile/component/nav/navBottom"
import { CalalogComList } from '@/const/calalog';
import "./index.scss"

const { SubMenu } = Menu;
interface IProps {
    changeComponent: Function
}

export default function CatalogList(props: IProps) {
    return (
        <div className="com-catelogList">
            <Menu
                style={{ width: 256 }}
                mode="inline"
            >
                <SubMenu title="容器" data-type="wrap">
                    <Menu.Item>
                        <div className="liItem">
                            <span>容器12</span>
                            <Wrap12 isInMenu={true} />
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div className="liItem">
                            <span>容器66</span>
                            <Wrap66 isInMenu={true} />
                        </div>
                    </Menu.Item>
                </SubMenu>
                <SubMenu title="按钮">
                    <Menu.Item>
                        <div className="liItem">
                            <span>普通按钮</span>
                            <ButtonNormal isInMenu={true} />
                        </div>
                    </Menu.Item>
                </SubMenu>
                <SubMenu title="文本">
                    <Menu.Item>
                        <div className="liItem">
                            <span>文本</span>
                            <TextCricle />
                        </div>
                    </Menu.Item>
                </SubMenu>
                <SubMenu title="图片">
                    <Menu.Item>
                        <div className="liItem">
                            <span>图片</span>
                            <ImgNormal isInMenu={true} />
                        </div>
                    </Menu.Item>
                </SubMenu>
                <SubMenu title="导航">
                    <Menu.Item>
                        <div className="liItem">
                            <span>底部导航</span>
                            <NavBottom />
                        </div>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}