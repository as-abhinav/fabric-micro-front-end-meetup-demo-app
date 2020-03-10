import { registerApplication, start } from 'single-spa';
import 'babel-polyfill';
import { APPLICATIONS } from './src/shared/utils/applications.config';
import { pathPrefix } from './src/common/helpers';


APPLICATIONS.forEach(app => {
  registerApplication(app.name, app.loader, pathPrefix(app.url));
})

start();

// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './apps/questions/app'

// ReactDom.render(<App />, document.getElementById('questions'))