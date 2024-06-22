"use strict";
var foo = (function () {
  function _foo(acc, x) {
    if (x <= 1) return acc;
    return _foo((x / 2) + acc, x - 1);
  }
  return function (x) {
    return _foo(1, x);
  };
})();
foo(123456);
--harmony_tailcalls