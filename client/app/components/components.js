import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Todos from './todos/todos';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Todos
])

.name;

export default componentModule;
