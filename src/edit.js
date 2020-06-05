import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import getRouter from '$router/router-edit';
import "$style/reset.scss";

/*初始化*/
renderWithHotReload(getRouter());

if (module.hot) {
    module.hot.accept('./router/router-edit', () => {
        const getRouter = require('./router/router-edit').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}
