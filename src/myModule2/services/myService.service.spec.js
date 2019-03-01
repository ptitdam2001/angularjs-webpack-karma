describe("My service2", function () {
    var _myService;

    beforeEach(angular.mock.module("my-module2"));
    beforeEach(angular.mock.inject(function (_myService2_) {
        // CODE NEVER GETS IN HERE
        _myService = _myService2_;
    }));

    describe(".getHello()", function () {
        it("returns 'Hello my world'", function () {
            var result = _myService.getHello();
            expect(result).toBe("Hello my world 2");
        });
    });
});