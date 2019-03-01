import angular from 'angular';
import myComponentComponent from './components/myComponent/myComponent.component';
import { MyService } from './services/myService.service';

export default angular.module('my-module', [])
    .component('myComponent', myComponentComponent)
    .service('myService', MyService)
    .name;