import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Todos from './todos/todos';
import User from './user/user';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Todos,
  User
])

.name;

export default componentModule;
