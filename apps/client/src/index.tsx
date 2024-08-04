import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.variable.css';
import { App } from './pages/home-page/app.js';
import { ConfigProvider } from 'antd';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/configure-store.js';

ConfigProvider.config({
  theme: {
    primaryColor: '#722ed1',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
