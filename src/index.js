import angular from 'angular';
import angularSanitize from 'angular-sanitize';

import myModuleModule from './myModule/myModule.module';
import myModule2Module from './myModule2/myModule2.module';

angular.module('my-application', [angularSanitize, myModuleModule, myModule2Module]);