describe('Component: my-component', function () {
    beforeEach(angular.mock.module('my-module'));

    var scope;
    var element;

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<my-component></my-component>');
        element = $compile(element)(scope);
        scope.$apply();
    }));

    it('should render the text "Hello my component"', function() {
        var div = element.find('div');
        expect(div.text()).toBe('Hello my component');
    });
});