var O = Object.defineProperty;
var j = (e, t, o) => t in e ? O(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var y = (e, t, o) => (j(e, typeof t != "symbol" ? t + "" : t, o), o);
const w = {
  mounted(e, t) {
    const o = `.${t.arg}`, l = Array.from(document.querySelectorAll(o));
    document.addEventListener(
      "click",
      (c) => {
        l.some((n) => n.contains(c.target)) || e.contains(c.target) || (t.value || function() {
          e.style.display = "none";
        })();
      },
      !1
    );
  },
  unmounted() {
    document.removeEventListener("click", () => {
    });
  }
}, E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: w
}, Symbol.toStringTag, { value: "Module" })), M = {
  beforeMount(e, t) {
    e.targetContent = t.value, e.addEventListener("click", () => {
      if (!e.targetContent)
        return console.warn("没有需要复制的目标内容");
      const o = document.createElement("textarea");
      o.readOnly = !0, o.style.position = "fixed", o.style.top = "-99999px", o.value = e.targetContent, document.body.appendChild(o), o.select();
      const l = document.execCommand("Copy"), c = t.arg;
      l && c ? c(e.targetContent) : console.log("复制内容：" + e.targetContent), document.body.removeChild(o);
    });
  },
  updated(e, t) {
    e.targetContent = t.value;
  },
  unmounted(e) {
    e.removeEventListener("click", () => {
    });
  }
}, T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: M
}, Symbol.toStringTag, { value: "Module" })), L = {
  mounted(e, t) {
    let o = null, l;
    t.arg === void 0 ? l = 1e3 : l = parseInt(t.arg), e.addEventListener("click", () => {
      o && clearTimeout(o), o || t.value(), o = setTimeout(() => {
        o = null;
      }, l);
    });
  }
}, C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: L
}, Symbol.toStringTag, { value: "Module" })), k = {
  mounted(e, t) {
    e.style.cursor = "move", e.style.position = "fixed";
    const o = t.arg || null;
    let l = window.innerWidth - I(), c = window.innerHeight;
    if (o) {
      const n = document.getElementById(o);
      if (n === null)
        return;
      const { width: i, height: r } = n.getBoundingClientRect();
      l = i, c = r, ["fixed", "absolute", "relative"].includes(P(n, "position")) || (n.style.position = "relative"), e.style.position = "absolute";
    }
    e.addEventListener("mousedown", (n) => {
      const { width: i, height: r } = e.getBoundingClientRect(), s = e.offsetLeft, u = e.offsetTop, x = n.clientX, S = n.clientY, m = s, p = l - s - i, v = u, g = c - u - r;
      document.onmousemove = (f) => {
        const a = f.clientX - x, d = f.clientY - S;
        return a < 0 && a <= -m ? e.style.left = s - m + "px" : a > 0 && a >= p ? e.style.left = s + p + "px" : e.style.left = s + a + "px", d < 0 && d <= -v ? e.style.top = u - v + "px" : d > 0 && d >= g ? e.style.top = u + g + "px" : e.style.top = u + d + "px", t == null || t.value(f), !1;
      }, document.onmouseup = () => {
        document.onmousemove = null, document.onmouseup = null;
      };
    });
  }
};
function P(e, t) {
  return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle(e, null)[t];
}
function I() {
  const e = document.createElement("DIV");
  e.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
  const t = document.body.appendChild(e).clientWidth;
  e.style.overflowY = "scroll";
  const o = e.clientWidth;
  return document.body.removeChild(e), document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) ? t - o : 0;
}
const z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: k
}, Symbol.toStringTag, { value: "Module" })), H = {
  mounted(e, t) {
    e.style.position = "fixed";
    const o = t.arg || "top";
    e.style[o] = t.value + "px";
  },
  updated(e, t) {
    const o = t.arg || "top";
    e.style[o] = t.value + "px";
  }
}, A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: H
}, Symbol.toStringTag, { value: "Module" })), W = {
  mounted(e) {
    e.focus();
  }
}, $ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: W
}, Symbol.toStringTag, { value: "Module" })), R = {
  mounted(e, t) {
    e.addEventListener("scroll", () => {
      var n;
      const o = e.clientHeight, l = Math.round(e.scrollTop), c = e.scrollHeight;
      Y(o, l, c) && ((n = t.value) == null || n.call(t));
    });
  },
  unmounted(e) {
    e.removeEventListener("scroll", () => {
    });
  }
};
function Y(e, t, o) {
  return [e + t, e + t + 1, e + t - 1].indexOf(o) !== -1;
}
const B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: R
}, Symbol.toStringTag, { value: "Module" })), D = {
  beforeMount(e, t) {
    e.$data_src = t.value;
  },
  mounted(e) {
    const t = new IntersectionObserver((o) => {
      const l = e.$data_src;
      o[0].isIntersecting && l && (e.src = l);
    });
    e.$io = t, t.observe(e);
  },
  updated(e, t) {
    e.$data_src = t.value;
  },
  unmounted(e) {
    e.$io.disconnect();
  }
}, X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D
}, Symbol.toStringTag, { value: "Module" })), U = {
  mounted(e, t) {
    if (typeof t.value != "function")
      throw "callback must be a function";
    let o = null, l;
    t.arg ? l = parseInt(t.arg) : l = 1500;
    const c = (r) => {
      r.type !== "click" && o === null && (o = setTimeout((s) => {
        i(s);
      }, l));
    }, n = () => {
      o !== null && (clearTimeout(o), o = null);
    }, i = (r) => {
      t.value(r);
    };
    e.addEventListener("mousedown", c), e.addEventListener("touchstart", c), e.addEventListener("click", n), e.addEventListener("mouseout", n), e.addEventListener("touchend", n), e.addEventListener("touchcancel", n);
  }
}, q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: U
}, Symbol.toStringTag, { value: "Module" })), J = {
  async beforeMount(e, t) {
    b(e, t);
  },
  async updated(e, t) {
    b(e, t);
  }
};
async function b(e, t) {
  if (t.value === e.src)
    return;
  const o = t.value;
  o && !await V(e.src) && e.setAttribute("src", o);
}
function V(e) {
  return new Promise((t) => {
    let o = new Image();
    o.src = e, o.onload = () => {
      o && o.complete && (t(!0), o = null);
    }, o.onerror = () => {
      t(!1), o = null;
    };
  });
}
const F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: J
}, Symbol.toStringTag, { value: "Module" })), G = {
  mounted(e, t) {
    K(t.value.text, e, t.value.font, t.value.textColor);
  }
};
function K(e, t, o, l) {
  const c = document.createElement("canvas");
  t.appendChild(c), c.width = 200, c.height = 150, c.style.display = "none";
  const n = c.getContext("2d");
  n && (n.rotate(-20 * Math.PI / 180), n.font = o || "16px Microsoft JhengHei", n.fillStyle = l || "rgba(180, 180, 180, 0.3)", n.textAlign = "left", n.textBaseline = "Middle", n.fillText(e, c.width / 10, c.height / 2), t.style.backgroundImage = "url(" + c.toDataURL("image/png") + ")");
}
const Q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G
}, Symbol.toStringTag, { value: "Module" })), h = /* @__PURE__ */ Object.assign({ "./directive/clickoutside.ts": E, "./directive/copy.ts": T, "./directive/debounce.ts": C, "./directive/draggable.ts": z, "./directive/fixed.ts": A, "./directive/focus.ts": $, "./directive/infinite-scroll.ts": B, "./directive/lazy-img.ts": X, "./directive/longpress.ts": q, "./directive/real-img.ts": F, "./directive/waterMarker.ts": Q }), _ = {};
Object.keys(h).forEach((e) => {
  const t = e.split("/")[2].slice(0, -3);
  _[t] = h[e].default;
});
class N {
  constructor(t) {
    y(this, "options");
    this.options = t;
  }
  install(t) {
    Object.keys(_).forEach((o) => {
      t.directive(o, _[o]);
    });
  }
}
export {
  N as default
};
