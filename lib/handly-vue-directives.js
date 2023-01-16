var h = Object.defineProperty;
var x = (e, t, o) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var m = (e, t, o) => (x(e, typeof t != "symbol" ? t + "" : t, o), o);
const clickoutside = {
  mounted(e, t) {
    const o = `.${t.arg}`, r = Array.from(document.querySelectorAll(o));
    document.addEventListener(
      "click",
      (l) => {
        r.some((n) => n.contains(l.target)) || e.contains(l.target) || (t.value || function() {
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
}, __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: clickoutside
}, Symbol.toStringTag, { value: "Module" })), copy = {
  beforeMount(e, t) {
    e.targetContent = t.value, e.addEventListener("click", () => {
      if (!e.targetContent)
        return console.warn("没有需要复制的目标内容");
      const o = document.createElement("textarea");
      o.readOnly = "readonly", o.style.position = "fixed", o.style.top = "-99999px", o.value = e.targetContent, document.body.appendChild(o), o.select();
      const r = document.execCommand("Copy"), l = t.arg;
      r && l ? l(e.targetContent) : console.log("复制内容：" + e.targetContent), document.body.removeChild(o);
    });
  },
  updated(e, t) {
    e.targetContent = t.value;
  },
  unmounted(e) {
    e.removeEventListener("click", () => {
    });
  }
}, __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: copy
}, Symbol.toStringTag, { value: "Module" })), debounce = {
  mounted(e, t) {
    let o = null;
    e.addEventListener("click", () => {
      o && clearTimeout(o), o || t.value(), o = setTimeout(() => {
        o = null;
      }, t.arg || 1e3);
    });
  }
}, __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: debounce
}, Symbol.toStringTag, { value: "Module" })), draggable = {
  mounted(e, t) {
    e.style.cursor = "move", e.style.position = "fixed";
    const o = t.arg || null;
    let r = window.innerWidth - getScrollWidth(), l = window.innerHeight;
    if (o) {
      const n = document.getElementById(o), { width: c, height: d } = n.getBoundingClientRect();
      r = c, l = d, ["fixed", "absolute", "relative"].includes(getStyle(n, "position")) || (n.style.position = "relative"), e.style.position = "absolute";
    }
    e.addEventListener("mousedown", (n) => {
      const { width: c, height: d } = e.getBoundingClientRect(), i = e.offsetLeft, s = e.offsetTop, y = n.clientX, b = n.clientY, v = i, p = r - i - c, g = s, f = l - s - d;
      document.onmousemove = (_) => {
        const a = _.clientX - y, u = _.clientY - b;
        return a < 0 && a <= -v ? e.style.left = i - v + "px" : a > 0 && a >= p ? e.style.left = i + p + "px" : e.style.left = i + a + "px", u < 0 && u <= -g ? e.style.top = s - g + "px" : u > 0 && u >= f ? e.style.top = s + f + "px" : e.style.top = s + u + "px", t == null || t.value(_), !1;
      }, document.onmouseup = () => {
        document.onmousemove = null, document.onmouseup = null;
      };
    });
  }
};
function getStyle(e, t) {
  return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle(e, !1)[t];
}
function getScrollWidth() {
  const e = document.createElement("DIV");
  e.style.cssText = "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
  const t = document.body.appendChild(e).clientWidth;
  e.style.overflowY = "scroll";
  const o = e.clientWidth;
  return document.body.removeChild(e), document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) ? t - o : 0;
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: draggable
}, Symbol.toStringTag, { value: "Module" })), fixed = {
  mounted(e, t) {
    e.style.position = "fixed";
    const o = t.arg || "top";
    e.style[o] = t.value + "px";
  },
  updated(e, t) {
    const o = t.arg || "top";
    e.style[o] = t.value + "px";
  }
}, __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fixed
}, Symbol.toStringTag, { value: "Module" })), focus = {
  mounted(e) {
    e.focus();
  }
}, __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: focus
}, Symbol.toStringTag, { value: "Module" })), infiniteScroll = {
  mounted(e, t) {
    e.addEventListener("scroll", () => {
      var n;
      const o = e.clientHeight, r = Math.round(e.scrollTop), l = e.scrollHeight;
      approximate(o, r, l) && ((n = t.value) == null || n.call(t));
    });
  },
  unmounted(e) {
    e.removeEventListener("scroll", () => {
    });
  }
};
function approximate(e, t, o) {
  return [e + t, e + t + 1, e + t - 1].indexOf(o) !== -1;
}
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: infiniteScroll
}, Symbol.toStringTag, { value: "Module" })), input = {
  mounted(el, binding) {
    const _type = binding.arg, types = ["number", "decimal", "decimal_2", "customize"];
    if (!_type || !types.includes(_type))
      return console.log(
        `使用v-input指令需要选择特定功能：v-input:type="inputValue";  type = ${types.join("/")}.`
      );
    el.$handler = (el) => {
      switch (_type) {
        case "number":
          el.value = el.value.replace(/[^\d]/, "");
          break;
        case "decimal":
          el.value = el.value.replace(/[^\d.]/g, ""), el.value = el.value.replace(/\.{2,}/g, "."), el.value = el.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), el.value.indexOf(".") < 0 && el.value !== "" && (el.value = parseFloat(el.value)), el.value.indexOf(".") > -1 && el.value.length === 1 && (el.value = "");
          break;
        case "decimal_2":
          el.value = el.value.replace(/[^\d.]/g, ""), el.value = el.value.replace(/\.{2,}/g, "."), el.value = el.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", "."), el.value = el.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3"), el.value.indexOf(".") < 0 && el.value !== "" && (el.value = parseFloat(el.value)), el.value.indexOf(".") > -1 && el.value.length === 1 && (el.value = "");
          break;
        case "customize":
          const rule = el.dataset.rule && eval(el.dataset.rule);
          el.value = el.value.replace(rule, "");
          break;
      }
      trigger(el, "input");
    }, el.$handler(el);
  },
  beforeUpdate(e) {
    e.$handler && e.$handler(e);
  }
}, trigger = (e, t) => {
  const o = document.createEvent("HTMLEvents");
  o.initEvent(t, !0, !0), e.dispatchEvent(o);
}, __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: input
}, Symbol.toStringTag, { value: "Module" })), lazyImg = {
  beforeMount(e, t) {
    e.$data_src = t.value;
  },
  mounted(e) {
    const t = new IntersectionObserver((o) => {
      const r = e.$data_src;
      o[0].isIntersecting && r && (e.src = r);
    });
    e.$io = t, t.observe(e);
  },
  updated(e, t) {
    e.$data_src = t.value;
  },
  unmounted(e) {
    e.$io.disconnect();
  }
}, __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lazyImg
}, Symbol.toStringTag, { value: "Module" })), longpress = {
  mounted(e, t) {
    if (typeof t.value != "function")
      throw "callback must be a function";
    let o = null;
    const r = (c) => {
      c.type === "click" && c.button !== 0 || o === null && (o = setTimeout(() => {
        n();
      }, t.arg || 1500));
    }, l = () => {
      o !== null && (clearTimeout(o), o = null);
    }, n = (c) => {
      t.value(c);
    };
    e.addEventListener("mousedown", r), e.addEventListener("touchstart", r), e.addEventListener("click", l), e.addEventListener("mouseout", l), e.addEventListener("touchend", l), e.addEventListener("touchcancel", l);
  }
}, __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: longpress
}, Symbol.toStringTag, { value: "Module" })), realImg = {
  async beforeMount(e, t) {
    useRealImg(e, t);
  },
  async updated(e, t) {
    useRealImg(e, t);
  }
};
async function useRealImg(e, t) {
  if (t.value === e.src)
    return;
  const o = t.value;
  o && !await imageIsExist(e.src) && e.setAttribute("src", o);
}
function imageIsExist(e) {
  return new Promise((t) => {
    let o = new Image();
    o.src = e, o.onload = () => {
      o.complete && (t(!0), o = null);
    }, o.onerror = () => {
      t(!1), o = null;
    };
  });
}
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: realImg
}, Symbol.toStringTag, { value: "Module" })), waterMarker = {
  mounted(e, t) {
    addWaterMarker(t.value.text, e, t.value.font, t.value.textColor);
  }
};
function addWaterMarker(e, t, o, r) {
  const l = document.createElement("canvas");
  t.appendChild(l), l.width = 200, l.height = 150, l.style.display = "none";
  const n = l.getContext("2d");
  n.rotate(-20 * Math.PI / 180), n.font = o || "16px Microsoft JhengHei", n.fillStyle = r || "rgba(180, 180, 180, 0.3)", n.textAlign = "left", n.textBaseline = "Middle", n.fillText(e, l.width / 10, l.height / 2), t.style.backgroundImage = "url(" + l.toDataURL("image/png") + ")";
}
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: waterMarker
}, Symbol.toStringTag, { value: "Module" })), importModules = /* @__PURE__ */ Object.assign({ "./directive/clickoutside.js": __vite_glob_0_0, "./directive/copy.js": __vite_glob_0_1, "./directive/debounce.js": __vite_glob_0_2, "./directive/draggable.js": __vite_glob_0_3, "./directive/fixed.js": __vite_glob_0_4, "./directive/focus.js": __vite_glob_0_5, "./directive/infinite-scroll.js": __vite_glob_0_6, "./directive/input.js": __vite_glob_0_7, "./directive/lazy-img.js": __vite_glob_0_8, "./directive/longpress.js": __vite_glob_0_9, "./directive/real-img.js": __vite_glob_0_10, "./directive/waterMarker.js": __vite_glob_0_11 }), modules = {};
Object.keys(importModules).forEach((e) => {
  const t = e.split("/")[2].slice(0, -3);
  modules[t] = importModules[e].default;
});
class HandlyDirective {
  constructor(t) {
    m(this, "options");
    this.options = t;
  }
  install(t) {
    console.log(modules), console.log(t);
  }
}
export {
  HandlyDirective as default
};
