import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Footer from './app';

const reactLifecyles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: Footer,
});

export const bootstrap = [
  reactLifecyles.bootstrap,
];

export const mount = [
  reactLifecyles.mount,
];

export const unmount = [
  reactLifecyles.unmount,
];

function domElementGetter() {
  return document.getElementById("footer");
}
