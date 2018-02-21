import angular from 'angular';

import MainController from './main-controller';
import AppTestComponent from './components/app-test-component';
import AppTestController from './components/app-test-controller';

angular.module('app', [])
    .controller('mainController', MainController)
    .controller('appTestController', AppTestController)
    .component('appTest', new AppTestComponent());