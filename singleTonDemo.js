var SingleTonDemo = /** @class */ (function () {
    // static.ref
    function SingleTonDemo() {
    }
    SingleTonDemo.getInstance = function () {
        if (!SingleTonDemo.instance) {
            SingleTonDemo.instance = new SingleTonDemo();
        }
        return this.instance;
    };
    return SingleTonDemo;
}());
var reference = SingleTonDemo.getInstance();
// const reference2: SingleTonDemo = SingleTonDemo.getInstance();
var reference2 = SingleTonDemo.getInstance();
console.log(reference === reference2);
