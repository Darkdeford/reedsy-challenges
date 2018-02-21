import template from './app-test.html';

export default class AppTest {
    constructor() {
        this.restrict = 'E';
        this.bindings =  {
            ngModel: '='
        };
        this.require =  {
            timestamp: 'ngModel'
        };
        this.template = template;
        this.controller = 'appTestController as $ctrl';
    };
};