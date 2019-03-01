import angular from 'angular';
import myComponent2Component from './components/myComponent2/myComponent2.component';
import { MyService2 } from './services/myService2.service';

export default angular.module('my-module2', [])
    .component('myComponent2', myComponent2Component)
    .service('myService2', MyService2)
    .name;