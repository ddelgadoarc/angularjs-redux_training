import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import {combineReducers}  from 'redux';
import reducers from './redux/reducers';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

angular.module('app', [
    ngRedux,
    uiRouter,
    Common,
    Components,
  ])
  .config(($locationProvider, $ngReduxProvider) => {

    "ngInject";

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    //Redux Config
    const logger = createLogger({
          level: 'info',
          collapsed: true
    });

    $ngReduxProvider.createStoreWith(reducers, [thunk, logger]);
  })

  .component('app', AppComponent);
