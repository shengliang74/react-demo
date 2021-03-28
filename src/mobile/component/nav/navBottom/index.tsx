import React from 'react';
import { Link } from 'react-router-dom';
import { drag } from '@/utils/utils'
import entity from './entity';
import "./index.scss";

interface NavLi {
    pic: string,
    linkUrl: string,
    text: string
}

export default function NavBottom(props: any) {
    let { moduleData } = props;
    moduleData = Object.assign(entity, moduleData);
    const { triggerEditor } = props;
    const onCDivClick = () => {
        triggerEditor && triggerEditor(moduleData);
    }
    const renderLi = function () {
        const { customFeature = {} } = moduleData;

        if (moduleData && moduleData.content && moduleData.content.liList && moduleData.content.liList.length > 0) {
            return moduleData.content.liList.map((item: NavLi, index: number) => {
                return <li className="navLi" key={index} style={{ "height": customFeature.navHeight }}>
                    <img
                        className="navIcon"
                        style={{
                            "width": customFeature.iconWidth,
                            "height": customFeature.iconHeight,
                            "border": customFeature.iconBorder || 'none',
                            "borderTopLeftRadius": customFeature.iconBorderTopLeftRadius,
                            "borderTopRightRadius": customFeature.iconBorderTopRightRadius,
                            "borderBottomLeftRadius": customFeature.iconBorderBottomLeftRadius,
                            "borderBottomRightRadius": customFeature.iconBorderBottomRightRadius,
                        }}
                        src={item.pic || ''}
                    />
                    <Link
                        to={item.linkUrl || ''}
                        style={{ "color": customFeature.navColor, "fontSize": customFeature.navFontSize }}
                    >
                        {item.text || ''}
                    </Link>
                </li>
            })
        }
    }
    const { customFeature = {} } = moduleData;

    return (
        <ul className="com-nav-bottom"
            style={{ "backgroundColor": customFeature.navBackground, "height": customFeature.navHeight }}
            onClick={onCDivClick}
        >
            {renderLi()}
        </ul>
    )
}
