import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './app';

const reactLifecyles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: App
});

export const bootstrap = [reactLifecyles.bootstrap];

export const mount = [reactLifecyles.mount];

export const unmount = [reactLifecyles.unmount];

function domElementGetter() {
  return document.getElementById('navbar');
}
