import React from 'react';
const ButtonNormal = React.lazy(() => import('./button/buttonNormal'));
const ImgNormal = React.lazy(() => import('./img/imgNormal'));
const NavBottom = React.lazy(() => import('./nav/navBottom'));
const TextCricle = React.lazy(() => import('./text/textCricle'));
const Wrap12 = React.lazy(() => import('./wrap/wrap12'));
const Wrap66 = React.lazy(() => import('./wrap/wrap66'));
const WrapDiv = React.lazy(() => import('./wrap/wrapDiv'));

export {
    ButtonNormal,
    ImgNormal,
    NavBottom,
    TextCricle,
    Wrap12,
    Wrap66,
    WrapDiv
}