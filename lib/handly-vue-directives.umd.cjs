(function (n, e) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = e())
    : typeof define == "function" && define.amd
    ? define(e)
    : ((n = typeof globalThis < "u" ? globalThis : n || self),
      (n["handly-vue-directives"] = e()));
})(this, function () {
  "use strict";
  var o = Object.defineProperty;
  var s = (n, e, i) =>
    e in n
      ? o(n, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (n[e] = i);
  var t = (n, e, i) => (s(n, typeof e != "symbol" ? e + "" : e, i), i);
  class n {
    constructor(i) {
      t(this, "options");
      this.options = i;
    }
    install(i) {
      console.log(i);
    }
  }
  return n;
});
