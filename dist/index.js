(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Test = {})));
}(this, (function (exports) { 'use strict';

var Test = /** @class */ (function () {
    function Test() {
        this.foo = 1;
    }
    return Test;
}());

exports.Test = Test;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
