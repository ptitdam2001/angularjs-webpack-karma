import angular from 'angular';
import angularSanitize from 'angular-sanitize';

import myModuleModule from './myModule/myModule.module';

angular.module('my-application', [angularSanitize, myModuleModule]);