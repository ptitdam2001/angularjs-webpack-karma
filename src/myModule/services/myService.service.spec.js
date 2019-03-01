describe("My service", function () {
    var _myService;

    beforeEach(angular.mock.module("my-module"));
    beforeEach(angular.mock.inject(function (_myService_) {
        // CODE NEVER GETS IN HERE
        _myService = _myService_;
    }));

    describe(".getHello()", function () {
        it("returns 'Hello my world'", function () {
            var result = _myService.getHello();
            expect(result).toBe("Hello my world");
        });
    });
});