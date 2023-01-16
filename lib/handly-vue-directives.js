var i = Object.defineProperty;
var n = (s, o, t) =>
  o in s
    ? i(s, o, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (s[o] = t);
var l = (s, o, t) => (n(s, typeof o != "symbol" ? o + "" : o, t), t);
class c {
  constructor(o) {
    l(this, "options");
    this.options = o;
  }
  install(o) {
    console.log(o);
  }
}
export { c as default };
