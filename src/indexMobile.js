import React from 'react';
import ReactDom from 'react-dom';
import 'babel-polyfill';
import {AppContainer} from 'react-hot-loader';
import Page1 from "./pages/Page1"
import 'antd/dist/antd.css';
import "./style/global.scss";

const getRouter = () => (
    <Page1 />
);
/*初始化*/
renderWithHotReload(getRouter());


function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}
