import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todosComponent from './todos.component';

let todosModule = angular.module('todos', [
    uiRouter
])

    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('todos', {
                url: '/todos',
                component: 'todo'
            });
    })

    .component('todo', todosComponent)

    .name;

export default todosModule;