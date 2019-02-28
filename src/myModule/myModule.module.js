import angular from 'angular';
import myComponentComponent from './components/myComponent/myComponent.component';

export default angular.module('my-module', [])
    .component('myComponent', myComponentComponent)
    .name;