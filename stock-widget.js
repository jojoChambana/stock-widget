import ee, { useMemo as rt, useState as Be, useCallback as Lr, useEffect as Dr } from "react";
var at = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function St(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var it = { exports: {} }, He = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function xo() {
  if (qr) return He;
  qr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var u in i)
        u !== "key" && (a[u] = i[u]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return He.Fragment = t, He.jsx = n, He.jsxs = n, He;
}
var Ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ir;
function wo() {
  return Ir || (Ir = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === X ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case _:
          return "Fragment";
        case R:
          return "Profiler";
        case C:
          return "StrictMode";
        case v:
          return "Suspense";
        case x:
          return "SuspenseList";
        case A:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case O:
            return "Portal";
          case m:
            return (f.displayName || "Context") + ".Provider";
          case T:
            return (f._context.displayName || "Context") + ".Consumer";
          case y:
            var g = f.render;
            return f = f.displayName, f || (f = g.displayName || g.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case P:
            return g = f.displayName || null, g !== null ? g : e(f.type) || "Memo";
          case D:
            g = f._payload, f = f._init;
            try {
              return e(f(g));
            } catch {
            }
        }
      return null;
    }
    function t(f) {
      return "" + f;
    }
    function n(f) {
      try {
        t(f);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var E = g.error, k = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return E.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), t(f);
      }
    }
    function r(f) {
      if (f === _) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === D)
        return "<...>";
      try {
        var g = e(f);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var f = S.A;
      return f === null ? null : f.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(f) {
      if (H.call(f, "key")) {
        var g = Object.getOwnPropertyDescriptor(f, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function u(f, g) {
      function E() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: E,
        configurable: !0
      });
    }
    function s() {
      var f = e(this.type);
      return q[f] || (q[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function c(f, g, E, k, N, L, I, Y) {
      return E = L.ref, f = {
        $$typeof: w,
        type: f,
        key: g,
        props: L,
        _owner: N
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: s
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(f, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Y
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function h(f, g, E, k, N, L, I, Y) {
      var $ = g.children;
      if ($ !== void 0)
        if (k)
          if (F($)) {
            for (k = 0; k < $.length; k++)
              l($[k]);
            Object.freeze && Object.freeze($);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else l($);
      if (H.call(g, "key")) {
        $ = e(f);
        var b = Object.keys(g).filter(function(j) {
          return j !== "key";
        });
        k = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", Z[$ + k] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          $,
          b,
          $
        ), Z[$ + k] = !0);
      }
      if ($ = null, E !== void 0 && (n(E), $ = "" + E), o(g) && (n(g.key), $ = "" + g.key), "key" in g) {
        E = {};
        for (var M in g)
          M !== "key" && (E[M] = g[M]);
      } else E = g;
      return $ && u(
        E,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), c(
        f,
        $,
        L,
        N,
        i(),
        E,
        I,
        Y
      );
    }
    function l(f) {
      typeof f == "object" && f !== null && f.$$typeof === w && f._store && (f._store.validated = 1);
    }
    var d = ee, w = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), X = Symbol.for("react.client.reference"), S = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, F = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      "react-stack-bottom-frame": function(f) {
        return f();
      }
    };
    var K, q = {}, G = d["react-stack-bottom-frame"].bind(
      d,
      a
    )(), Q = U(r(a)), Z = {};
    Ye.Fragment = _, Ye.jsx = function(f, g, E, k, N) {
      var L = 1e4 > S.recentlyCreatedOwnerStacks++;
      return h(
        f,
        g,
        E,
        !1,
        k,
        N,
        L ? Error("react-stack-top-frame") : G,
        L ? U(r(f)) : Q
      );
    }, Ye.jsxs = function(f, g, E, k, N) {
      var L = 1e4 > S.recentlyCreatedOwnerStacks++;
      return h(
        f,
        g,
        E,
        !0,
        k,
        N,
        L ? Error("react-stack-top-frame") : G,
        L ? U(r(f)) : Q
      );
    };
  }()), Ye;
}
var Fr;
function To() {
  return Fr || (Fr = 1, process.env.NODE_ENV === "production" ? it.exports = xo() : it.exports = wo()), it.exports;
}
var te = To();
function pt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function _o(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ot(e) {
  let t, n, r;
  e.length !== 2 ? (t = pt, n = (u, s) => pt(e(u), s), r = (u, s) => e(u) - s) : (t = e === pt || e === _o ? e : Mo, n = e, r = e);
  function i(u, s, c = 0, h = u.length) {
    if (c < h) {
      if (t(s, s) !== 0) return h;
      do {
        const l = c + h >>> 1;
        n(u[l], s) < 0 ? c = l + 1 : h = l;
      } while (c < h);
    }
    return c;
  }
  function a(u, s, c = 0, h = u.length) {
    if (c < h) {
      if (t(s, s) !== 0) return h;
      do {
        const l = c + h >>> 1;
        n(u[l], s) <= 0 ? c = l + 1 : h = l;
      } while (c < h);
    }
    return c;
  }
  function o(u, s, c = 0, h = u.length) {
    const l = i(u, s, c, h - 1);
    return l > c && r(u[l - 1], s) > -r(u[l], s) ? l - 1 : l;
  }
  return { left: i, center: o, right: a };
}
function Mo() {
  return 0;
}
function Co(e) {
  return e === null ? NaN : +e;
}
const So = Ot(pt), Oo = So.right;
Ot(Co).center;
var nr = Math.sqrt(50), rr = Math.sqrt(10), ar = Math.sqrt(2);
function Eo(e, t, n) {
  var r, i = -1, a, o, u;
  if (t = +t, e = +e, n = +n, e === t && n > 0) return [e];
  if ((r = t < e) && (a = e, e = t, t = a), (u = Ei(e, t, n)) === 0 || !isFinite(u)) return [];
  if (u > 0) {
    let s = Math.round(e / u), c = Math.round(t / u);
    for (s * u < e && ++s, c * u > t && --c, o = new Array(a = c - s + 1); ++i < a; ) o[i] = (s + i) * u;
  } else {
    u = -u;
    let s = Math.round(e * u), c = Math.round(t * u);
    for (s / u < e && ++s, c / u > t && --c, o = new Array(a = c - s + 1); ++i < a; ) o[i] = (s + i) / u;
  }
  return r && o.reverse(), o;
}
function Ei(e, t, n) {
  var r = (t - e) / Math.max(0, n), i = Math.floor(Math.log(r) / Math.LN10), a = r / Math.pow(10, i);
  return i >= 0 ? (a >= nr ? 10 : a >= rr ? 5 : a >= ar ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= nr ? 10 : a >= rr ? 5 : a >= ar ? 2 : 1);
}
function ir(e, t, n) {
  var r = Math.abs(t - e) / Math.max(0, n), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), a = r / i;
  return a >= nr ? i *= 10 : a >= rr ? i *= 5 : a >= ar && (i *= 2), t < e ? -i : i;
}
function ki(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Fe(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function tt(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function _e() {
}
var ke = 0.7, Le = 1 / ke, $e = "\\s*([+-]?\\d+)\\s*", Ke = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", pe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ko = /^#([0-9a-f]{3,8})$/, Po = new RegExp(`^rgb\\(${$e},${$e},${$e}\\)$`), Ro = new RegExp(`^rgb\\(${pe},${pe},${pe}\\)$`), No = new RegExp(`^rgba\\(${$e},${$e},${$e},${Ke}\\)$`), Ao = new RegExp(`^rgba\\(${pe},${pe},${pe},${Ke}\\)$`), $o = new RegExp(`^hsl\\(${Ke},${pe},${pe}\\)$`), jo = new RegExp(`^hsla\\(${Ke},${pe},${pe},${Ke}\\)$`), Ur = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Fe(_e, Qe, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Hr,
  // Deprecated! Use color.formatHex.
  formatHex: Hr,
  formatHex8: Lo,
  formatHsl: Do,
  formatRgb: Yr,
  toString: Yr
});
function Hr() {
  return this.rgb().formatHex();
}
function Lo() {
  return this.rgb().formatHex8();
}
function Do() {
  return Pi(this).formatHsl();
}
function Yr() {
  return this.rgb().formatRgb();
}
function Qe(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ko.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Wr(t) : n === 3 ? new re(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ot(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ot(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Po.exec(e)) ? new re(t[1], t[2], t[3], 1) : (t = Ro.exec(e)) ? new re(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = No.exec(e)) ? ot(t[1], t[2], t[3], t[4]) : (t = Ao.exec(e)) ? ot(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = $o.exec(e)) ? Vr(t[1], t[2] / 100, t[3] / 100, 1) : (t = jo.exec(e)) ? Vr(t[1], t[2] / 100, t[3] / 100, t[4]) : Ur.hasOwnProperty(e) ? Wr(Ur[e]) : e === "transparent" ? new re(NaN, NaN, NaN, 0) : null;
}
function Wr(e) {
  return new re(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ot(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new re(e, t, n, r);
}
function Mr(e) {
  return e instanceof _e || (e = Qe(e)), e ? (e = e.rgb(), new re(e.r, e.g, e.b, e.opacity)) : new re();
}
function or(e, t, n, r) {
  return arguments.length === 1 ? Mr(e) : new re(e, t, n, r ?? 1);
}
function re(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Fe(re, or, tt(_e, {
  brighter(e) {
    return e = e == null ? Le : Math.pow(Le, e), new re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ke : Math.pow(ke, e), new re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new re(Oe(this.r), Oe(this.g), Oe(this.b), dt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: zr,
  // Deprecated! Use color.formatHex.
  formatHex: zr,
  formatHex8: qo,
  formatRgb: Gr,
  toString: Gr
}));
function zr() {
  return `#${Se(this.r)}${Se(this.g)}${Se(this.b)}`;
}
function qo() {
  return `#${Se(this.r)}${Se(this.g)}${Se(this.b)}${Se((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Gr() {
  const e = dt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Oe(this.r)}, ${Oe(this.g)}, ${Oe(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function dt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Oe(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Se(e) {
  return e = Oe(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Vr(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new he(e, t, n, r);
}
function Pi(e) {
  if (e instanceof he) return new he(e.h, e.s, e.l, e.opacity);
  if (e instanceof _e || (e = Qe(e)), !e) return new he();
  if (e instanceof he) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, u = a - i, s = (a + i) / 2;
  return u ? (t === a ? o = (n - r) / u + (n < r) * 6 : n === a ? o = (r - t) / u + 2 : o = (t - n) / u + 4, u /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : u = s > 0 && s < 1 ? 0 : o, new he(o, u, s, e.opacity);
}
function ur(e, t, n, r) {
  return arguments.length === 1 ? Pi(e) : new he(e, t, n, r ?? 1);
}
function he(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Fe(he, ur, tt(_e, {
  brighter(e) {
    return e = e == null ? Le : Math.pow(Le, e), new he(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ke : Math.pow(ke, e), new he(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - r;
    return new re(
      qt(e >= 240 ? e - 240 : e + 120, i, r),
      qt(e, i, r),
      qt(e < 120 ? e + 240 : e - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new he(Br(this.h), ut(this.s), ut(this.l), dt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = dt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Br(this.h)}, ${ut(this.s) * 100}%, ${ut(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Br(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ut(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function qt(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ri = Math.PI / 180, Ni = 180 / Math.PI, vt = 18, Ai = 0.96422, $i = 1, ji = 0.82521, Li = 4 / 29, je = 6 / 29, Di = 3 * je * je, Io = je * je * je;
function qi(e) {
  if (e instanceof de) return new de(e.l, e.a, e.b, e.opacity);
  if (e instanceof me) return Ii(e);
  e instanceof re || (e = Mr(e));
  var t = Ht(e.r), n = Ht(e.g), r = Ht(e.b), i = It((0.2225045 * t + 0.7168786 * n + 0.0606169 * r) / $i), a, o;
  return t === n && n === r ? a = o = i : (a = It((0.4360747 * t + 0.3850649 * n + 0.1430804 * r) / Ai), o = It((0.0139322 * t + 0.0971045 * n + 0.7141733 * r) / ji)), new de(116 * i - 16, 500 * (a - i), 200 * (i - o), e.opacity);
}
function sr(e, t, n, r) {
  return arguments.length === 1 ? qi(e) : new de(e, t, n, r ?? 1);
}
function de(e, t, n, r) {
  this.l = +e, this.a = +t, this.b = +n, this.opacity = +r;
}
Fe(de, sr, tt(_e, {
  brighter(e) {
    return new de(this.l + vt * (e ?? 1), this.a, this.b, this.opacity);
  },
  darker(e) {
    return new de(this.l - vt * (e ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var e = (this.l + 16) / 116, t = isNaN(this.a) ? e : e + this.a / 500, n = isNaN(this.b) ? e : e - this.b / 200;
    return t = Ai * Ft(t), e = $i * Ft(e), n = ji * Ft(n), new re(
      Ut(3.1338561 * t - 1.6168667 * e - 0.4906146 * n),
      Ut(-0.9787684 * t + 1.9161415 * e + 0.033454 * n),
      Ut(0.0719453 * t - 0.2289914 * e + 1.4052427 * n),
      this.opacity
    );
  }
}));
function It(e) {
  return e > Io ? Math.pow(e, 1 / 3) : e / Di + Li;
}
function Ft(e) {
  return e > je ? e * e * e : Di * (e - Li);
}
function Ut(e) {
  return 255 * (e <= 31308e-7 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055);
}
function Ht(e) {
  return (e /= 255) <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Fo(e) {
  if (e instanceof me) return new me(e.h, e.c, e.l, e.opacity);
  if (e instanceof de || (e = qi(e)), e.a === 0 && e.b === 0) return new me(NaN, 0 < e.l && e.l < 100 ? 0 : NaN, e.l, e.opacity);
  var t = Math.atan2(e.b, e.a) * Ni;
  return new me(t < 0 ? t + 360 : t, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity);
}
function cr(e, t, n, r) {
  return arguments.length === 1 ? Fo(e) : new me(e, t, n, r ?? 1);
}
function me(e, t, n, r) {
  this.h = +e, this.c = +t, this.l = +n, this.opacity = +r;
}
function Ii(e) {
  if (isNaN(e.h)) return new de(e.l, 0, 0, e.opacity);
  var t = e.h * Ri;
  return new de(e.l, Math.cos(t) * e.c, Math.sin(t) * e.c, e.opacity);
}
Fe(me, cr, tt(_e, {
  brighter(e) {
    return new me(this.h, this.c, this.l + vt * (e ?? 1), this.opacity);
  },
  darker(e) {
    return new me(this.h, this.c, this.l - vt * (e ?? 1), this.opacity);
  },
  rgb() {
    return Ii(this).rgb();
  }
}));
var Fi = -0.14861, Cr = 1.78277, Sr = -0.29227, Et = -0.90649, et = 1.97294, Zr = et * Et, Xr = et * Cr, Jr = Cr * Sr - Et * Fi;
function Uo(e) {
  if (e instanceof Ee) return new Ee(e.h, e.s, e.l, e.opacity);
  e instanceof re || (e = Mr(e));
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = (Jr * r + Zr * t - Xr * n) / (Jr + Zr - Xr), a = r - i, o = (et * (n - i) - Sr * a) / Et, u = Math.sqrt(o * o + a * a) / (et * i * (1 - i)), s = u ? Math.atan2(o, a) * Ni - 120 : NaN;
  return new Ee(s < 0 ? s + 360 : s, u, i, e.opacity);
}
function fr(e, t, n, r) {
  return arguments.length === 1 ? Uo(e) : new Ee(e, t, n, r ?? 1);
}
function Ee(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Fe(Ee, fr, tt(_e, {
  brighter(e) {
    return e = e == null ? Le : Math.pow(Le, e), new Ee(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ke : Math.pow(ke, e), new Ee(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = isNaN(this.h) ? 0 : (this.h + 120) * Ri, t = +this.l, n = isNaN(this.s) ? 0 : this.s * t * (1 - t), r = Math.cos(e), i = Math.sin(e);
    return new re(
      255 * (t + n * (Fi * r + Cr * i)),
      255 * (t + n * (Sr * r + Et * i)),
      255 * (t + n * (et * r)),
      this.opacity
    );
  }
}));
const kt = (e) => () => e;
function Ui(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Ho(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Or(e, t) {
  var n = t - e;
  return n ? Ui(e, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : kt(isNaN(e) ? t : e);
}
function Yo(e) {
  return (e = +e) == 1 ? ae : function(t, n) {
    return n - t ? Ho(t, n, e) : kt(isNaN(t) ? n : t);
  };
}
function ae(e, t) {
  var n = t - e;
  return n ? Ui(e, n) : kt(isNaN(e) ? t : e);
}
const lr = function e(t) {
  var n = Yo(t);
  function r(i, a) {
    var o = n((i = or(i)).r, (a = or(a)).r), u = n(i.g, a.g), s = n(i.b, a.b), c = ae(i.opacity, a.opacity);
    return function(h) {
      return i.r = o(h), i.g = u(h), i.b = s(h), i.opacity = c(h), i + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Wo(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
    return r;
  };
}
function zo(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Go(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = Er(e[o], t[o]);
  for (; o < n; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < r; ++o) a[o] = i[o](u);
    return a;
  };
}
function Vo(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function gt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Bo(e, t) {
  var n = {}, r = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Er(e[i], t[i]) : r[i] = t[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var hr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Yt = new RegExp(hr.source, "g");
function Zo(e) {
  return function() {
    return e;
  };
}
function Xo(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Jo(e, t) {
  var n = hr.lastIndex = Yt.lastIndex = 0, r, i, a, o = -1, u = [], s = [];
  for (e = e + "", t = t + ""; (r = hr.exec(e)) && (i = Yt.exec(t)); )
    (a = i.index) > n && (a = t.slice(n, a), u[o] ? u[o] += a : u[++o] = a), (r = r[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, s.push({ i: o, x: gt(r, i) })), n = Yt.lastIndex;
  return n < t.length && (a = t.slice(n), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? s[0] ? Xo(s[0].x) : Zo(t) : (t = s.length, function(c) {
    for (var h = 0, l; h < t; ++h) u[(l = s[h]).i] = l.x(c);
    return u.join("");
  });
}
function Er(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? kt(t) : (n === "number" ? gt : n === "string" ? (r = Qe(t)) ? (t = r, lr) : Jo : t instanceof Qe ? lr : t instanceof Date ? Vo : zo(t) ? Wo : Array.isArray(t) ? Go : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Bo : gt)(e, t);
}
function Hi(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Yi(e) {
  return function(t, n) {
    var r = e((t = ur(t)).h, (n = ur(n)).h), i = ae(t.s, n.s), a = ae(t.l, n.l), o = ae(t.opacity, n.opacity);
    return function(u) {
      return t.h = r(u), t.s = i(u), t.l = a(u), t.opacity = o(u), t + "";
    };
  };
}
const Ko = Yi(Or);
var Qo = Yi(ae);
function eu(e, t) {
  var n = ae((e = sr(e)).l, (t = sr(t)).l), r = ae(e.a, t.a), i = ae(e.b, t.b), a = ae(e.opacity, t.opacity);
  return function(o) {
    return e.l = n(o), e.a = r(o), e.b = i(o), e.opacity = a(o), e + "";
  };
}
function Wi(e) {
  return function(t, n) {
    var r = e((t = cr(t)).h, (n = cr(n)).h), i = ae(t.c, n.c), a = ae(t.l, n.l), o = ae(t.opacity, n.opacity);
    return function(u) {
      return t.h = r(u), t.c = i(u), t.l = a(u), t.opacity = o(u), t + "";
    };
  };
}
const tu = Wi(Or);
var nu = Wi(ae);
function zi(e) {
  return function t(n) {
    n = +n;
    function r(i, a) {
      var o = e((i = fr(i)).h, (a = fr(a)).h), u = ae(i.s, a.s), s = ae(i.l, a.l), c = ae(i.opacity, a.opacity);
      return function(h) {
        return i.h = o(h), i.s = u(h), i.l = s(Math.pow(h, n)), i.opacity = c(h), i + "";
      };
    }
    return r.gamma = t, r;
  }(1);
}
const ru = zi(Or);
var au = zi(ae);
function iu(e) {
  return function() {
    return e;
  };
}
function ou(e) {
  return +e;
}
var Kr = [0, 1];
function Ae(e) {
  return e;
}
function pr(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : iu(isNaN(t) ? NaN : 0.5);
}
function uu(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function su(e, t, n) {
  var r = e[0], i = e[1], a = t[0], o = t[1];
  return i < r ? (r = pr(i, r), a = n(o, a)) : (r = pr(r, i), a = n(a, o)), function(u) {
    return a(r(u));
  };
}
function cu(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r; )
    i[o] = pr(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
  return function(u) {
    var s = Oo(e, u, 1, r) - 1;
    return a[s](i[s](u));
  };
}
function Gi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function fu() {
  var e = Kr, t = Kr, n = Er, r, i, a, o = Ae, u, s, c;
  function h() {
    var d = Math.min(e.length, t.length);
    return o !== Ae && (o = uu(e[0], e[d - 1])), u = d > 2 ? cu : su, s = c = null, l;
  }
  function l(d) {
    return d == null || isNaN(d = +d) ? a : (s || (s = u(e.map(r), t, n)))(r(o(d)));
  }
  return l.invert = function(d) {
    return o(i((c || (c = u(t, e.map(r), gt)))(d)));
  }, l.domain = function(d) {
    return arguments.length ? (e = Array.from(d, ou), h()) : e.slice();
  }, l.range = function(d) {
    return arguments.length ? (t = Array.from(d), h()) : t.slice();
  }, l.rangeRound = function(d) {
    return t = Array.from(d), n = Hi, h();
  }, l.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Ae, h()) : o !== Ae;
  }, l.interpolate = function(d) {
    return arguments.length ? (n = d, h()) : n;
  }, l.unknown = function(d) {
    return arguments.length ? (a = d, l) : a;
  }, function(d, w) {
    return r = d, i = w, h();
  };
}
function Vi() {
  return fu()(Ae, Ae);
}
function lu(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function mt(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, r = e.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +e.slice(n + 1)
  ];
}
function De(e) {
  return e = mt(Math.abs(e)), e ? e[1] : NaN;
}
function hu(e, t) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, u = e[0], s = 0; i > 0 && u > 0 && (s + u + 1 > r && (u = Math.max(1, r - s)), a.push(n.substring(i -= u, i + u)), !((s += u + 1) > r)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function pu(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var du = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function yt(e) {
  if (!(t = du.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new kr({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
yt.prototype = kr.prototype;
function kr(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
kr.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function vu(e) {
  e: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+e[n]) break e;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var Bi;
function gu(e, t) {
  var n = mt(e, t);
  if (!n) return e + "";
  var r = n[0], i = n[1], a = i - (Bi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + mt(e, Math.max(0, t + a - 1))[0];
}
function Qr(e, t) {
  var n = mt(e, t);
  if (!n) return e + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ea = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: lu,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Qr(e * 100, t),
  r: Qr,
  s: gu,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ta(e) {
  return e;
}
var na = Array.prototype.map, ra = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function mu(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ta : hu(na.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? ta : pu(na.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(l) {
    l = yt(l);
    var d = l.fill, w = l.align, O = l.sign, _ = l.symbol, C = l.zero, R = l.width, T = l.comma, m = l.precision, y = l.trim, v = l.type;
    v === "n" ? (T = !0, v = "g") : ea[v] || (m === void 0 && (m = 12), y = !0, v = "g"), (C || d === "0" && w === "=") && (C = !0, d = "0", w = "=");
    var x = _ === "$" ? n : _ === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = _ === "$" ? r : /[%p]/.test(v) ? o : "", D = ea[v], A = /[defgprs%]/.test(v);
    m = m === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m));
    function X(S) {
      var H = x, F = P, U, K, q;
      if (v === "c")
        F = D(S) + F, S = "";
      else {
        S = +S;
        var G = S < 0 || 1 / S < 0;
        if (S = isNaN(S) ? s : D(Math.abs(S), m), y && (S = vu(S)), G && +S == 0 && O !== "+" && (G = !1), H = (G ? O === "(" ? O : u : O === "-" || O === "(" ? "" : O) + H, F = (v === "s" ? ra[8 + Bi / 3] : "") + F + (G && O === "(" ? ")" : ""), A) {
          for (U = -1, K = S.length; ++U < K; )
            if (q = S.charCodeAt(U), 48 > q || q > 57) {
              F = (q === 46 ? i + S.slice(U + 1) : S.slice(U)) + F, S = S.slice(0, U);
              break;
            }
        }
      }
      T && !C && (S = t(S, 1 / 0));
      var Q = H.length + S.length + F.length, Z = Q < R ? new Array(R - Q + 1).join(d) : "";
      switch (T && C && (S = t(Z + S, Z.length ? R - F.length : 1 / 0), Z = ""), w) {
        case "<":
          S = H + S + F + Z;
          break;
        case "=":
          S = H + Z + S + F;
          break;
        case "^":
          S = Z.slice(0, Q = Z.length >> 1) + H + S + F + Z.slice(Q);
          break;
        default:
          S = Z + H + S + F;
          break;
      }
      return a(S);
    }
    return X.toString = function() {
      return l + "";
    }, X;
  }
  function h(l, d) {
    var w = c((l = yt(l), l.type = "f", l)), O = Math.max(-8, Math.min(8, Math.floor(De(d) / 3))) * 3, _ = Math.pow(10, -O), C = ra[8 + O / 3];
    return function(R) {
      return w(_ * R) + C;
    };
  }
  return {
    format: c,
    formatPrefix: h
  };
}
var st, Zi, Xi;
yu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function yu(e) {
  return st = mu(e), Zi = st.format, Xi = st.formatPrefix, st;
}
function bu(e) {
  return Math.max(0, -De(Math.abs(e)));
}
function xu(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(De(t) / 3))) * 3 - De(Math.abs(e)));
}
function wu(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, De(t) - De(e)) + 1;
}
function Tu(e, t, n, r) {
  var i = ir(e, t, n), a;
  switch (r = yt(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return r.precision == null && !isNaN(a = xu(i, o)) && (r.precision = a), Xi(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = wu(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = bu(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Zi(r);
}
function _u(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var r = t();
    return Eo(r[0], r[r.length - 1], n ?? 10);
  }, e.tickFormat = function(n, r) {
    var i = t();
    return Tu(i[0], i[i.length - 1], n ?? 10, r);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var r = t(), i = 0, a = r.length - 1, o = r[i], u = r[a], s, c, h = 10;
    for (u < o && (c = o, o = u, u = c, c = i, i = a, a = c); h-- > 0; ) {
      if (c = Ei(o, u, n), c === s)
        return r[i] = o, r[a] = u, t(r);
      if (c > 0)
        o = Math.floor(o / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function Ji() {
  var e = Vi();
  return e.copy = function() {
    return Gi(e, Ji());
  }, ki.apply(e, arguments), _u(e);
}
function Mu(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, i = e[n], a = e[r], o;
  return a < i && (o = n, n = r, r = o, o = i, i = a, a = o), e[n] = t.floor(i), e[r] = t.ceil(a), e;
}
const Wt = /* @__PURE__ */ new Date(), zt = /* @__PURE__ */ new Date();
function ne(e, t, n, r) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const s = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (c < a && a < o);
    return s;
  }, i.filter = (a) => ne((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), n && (i.count = (a, o) => (Wt.setTime(+a), zt.setTime(+o), e(Wt), e(zt), Math.floor(n(Wt, zt))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(r ? (o) => r(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const bt = ne(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
bt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ne((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : bt);
bt.range;
const ye = 1e3, le = ye * 60, be = le * 60, xe = be * 24, Pr = xe * 7, aa = xe * 30, Gt = xe * 365, we = ne((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * ye);
}, (e, t) => (t - e) / ye, (e) => e.getUTCSeconds());
we.range;
const Pt = ne((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ye);
}, (e, t) => {
  e.setTime(+e + t * le);
}, (e, t) => (t - e) / le, (e) => e.getMinutes());
Pt.range;
const Ki = ne((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * le);
}, (e, t) => (t - e) / le, (e) => e.getUTCMinutes());
Ki.range;
const Rt = ne((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * ye - e.getMinutes() * le);
}, (e, t) => {
  e.setTime(+e + t * be);
}, (e, t) => (t - e) / be, (e) => e.getHours());
Rt.range;
const Qi = ne((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * be);
}, (e, t) => (t - e) / be, (e) => e.getUTCHours());
Qi.range;
const Ue = ne(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * le) / xe,
  (e) => e.getDate() - 1
);
Ue.range;
const Nt = ne((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / xe, (e) => e.getUTCDate() - 1);
Nt.range;
const Cu = ne((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / xe, (e) => Math.floor(e / xe));
Cu.range;
function Pe(e) {
  return ne((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * le) / Pr);
}
const nt = Pe(0), xt = Pe(1), Su = Pe(2), Ou = Pe(3), qe = Pe(4), Eu = Pe(5), ku = Pe(6);
nt.range;
xt.range;
Su.range;
Ou.range;
qe.range;
Eu.range;
ku.range;
function Re(e) {
  return ne((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Pr);
}
const Rr = Re(0), wt = Re(1), Pu = Re(2), Ru = Re(3), Ie = Re(4), Nu = Re(5), Au = Re(6);
Rr.range;
wt.range;
Pu.range;
Ru.range;
Ie.range;
Nu.range;
Au.range;
const At = ne((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
At.range;
const eo = ne((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
eo.range;
const ve = ne((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
ve.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ne((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
ve.range;
const Te = ne((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Te.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ne((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
Te.range;
function $u(e, t, n, r, i, a) {
  const o = [
    [we, 1, ye],
    [we, 5, 5 * ye],
    [we, 15, 15 * ye],
    [we, 30, 30 * ye],
    [a, 1, le],
    [a, 5, 5 * le],
    [a, 15, 15 * le],
    [a, 30, 30 * le],
    [i, 1, be],
    [i, 3, 3 * be],
    [i, 6, 6 * be],
    [i, 12, 12 * be],
    [r, 1, xe],
    [r, 2, 2 * xe],
    [n, 1, Pr],
    [t, 1, aa],
    [t, 3, 3 * aa],
    [e, 1, Gt]
  ];
  function u(c, h, l) {
    const d = h < c;
    d && ([c, h] = [h, c]);
    const w = l && typeof l.range == "function" ? l : s(c, h, l), O = w ? w.range(c, +h + 1) : [];
    return d ? O.reverse() : O;
  }
  function s(c, h, l) {
    const d = Math.abs(h - c) / l, w = Ot(([, , C]) => C).right(o, d);
    if (w === o.length) return e.every(ir(c / Gt, h / Gt, l));
    if (w === 0) return bt.every(Math.max(ir(c, h, l), 1));
    const [O, _] = o[d / o[w - 1][2] < o[w][2] / d ? w - 1 : w];
    return O.every(_);
  }
  return [u, s];
}
const [ju, Lu] = $u(ve, At, nt, Ue, Rt, Pt);
function Vt(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Bt(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function We(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Du(e) {
  var t = e.dateTime, n = e.date, r = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, s = e.shortMonths, c = ze(i), h = Ge(i), l = ze(a), d = Ge(a), w = ze(o), O = Ge(o), _ = ze(u), C = Ge(u), R = ze(s), T = Ge(s), m = {
    a: G,
    A: Q,
    b: Z,
    B: f,
    c: null,
    d: fa,
    e: fa,
    f: os,
    g: gs,
    G: ys,
    H: rs,
    I: as,
    j: is,
    L: to,
    m: us,
    M: ss,
    p: g,
    q: E,
    Q: pa,
    s: da,
    S: cs,
    u: fs,
    U: ls,
    V: hs,
    w: ps,
    W: ds,
    x: null,
    X: null,
    y: vs,
    Y: ms,
    Z: bs,
    "%": ha
  }, y = {
    a: k,
    A: N,
    b: L,
    B: I,
    c: null,
    d: la,
    e: la,
    f: _s,
    g: As,
    G: js,
    H: xs,
    I: ws,
    j: Ts,
    L: ro,
    m: Ms,
    M: Cs,
    p: Y,
    q: $,
    Q: pa,
    s: da,
    S: Ss,
    u: Os,
    U: Es,
    V: ks,
    w: Ps,
    W: Rs,
    x: null,
    X: null,
    y: Ns,
    Y: $s,
    Z: Ls,
    "%": ha
  }, v = {
    a: X,
    A: S,
    b: H,
    B: F,
    c: U,
    d: sa,
    e: sa,
    f: Qu,
    g: ua,
    G: oa,
    H: ca,
    I: ca,
    j: Zu,
    L: Ku,
    m: Bu,
    M: Xu,
    p: A,
    q: Vu,
    Q: ts,
    s: ns,
    S: Ju,
    u: Hu,
    U: Yu,
    V: Wu,
    w: Uu,
    W: zu,
    x: K,
    X: q,
    y: ua,
    Y: oa,
    Z: Gu,
    "%": es
  };
  m.x = x(n, m), m.X = x(r, m), m.c = x(t, m), y.x = x(n, y), y.X = x(r, y), y.c = x(t, y);
  function x(b, M) {
    return function(j) {
      var p = [], J = -1, z = 0, ue = b.length, ce, Me, jr;
      for (j instanceof Date || (j = /* @__PURE__ */ new Date(+j)); ++J < ue; )
        b.charCodeAt(J) === 37 && (p.push(b.slice(z, J)), (Me = ia[ce = b.charAt(++J)]) != null ? ce = b.charAt(++J) : Me = ce === "e" ? " " : "0", (jr = M[ce]) && (ce = jr(j, Me)), p.push(ce), z = J + 1);
      return p.push(b.slice(z, J)), p.join("");
    };
  }
  function P(b, M) {
    return function(j) {
      var p = We(1900, void 0, 1), J = D(p, b, j += "", 0), z, ue;
      if (J != j.length) return null;
      if ("Q" in p) return new Date(p.Q);
      if ("s" in p) return new Date(p.s * 1e3 + ("L" in p ? p.L : 0));
      if (M && !("Z" in p) && (p.Z = 0), "p" in p && (p.H = p.H % 12 + p.p * 12), p.m === void 0 && (p.m = "q" in p ? p.q : 0), "V" in p) {
        if (p.V < 1 || p.V > 53) return null;
        "w" in p || (p.w = 1), "Z" in p ? (z = Bt(We(p.y, 0, 1)), ue = z.getUTCDay(), z = ue > 4 || ue === 0 ? wt.ceil(z) : wt(z), z = Nt.offset(z, (p.V - 1) * 7), p.y = z.getUTCFullYear(), p.m = z.getUTCMonth(), p.d = z.getUTCDate() + (p.w + 6) % 7) : (z = Vt(We(p.y, 0, 1)), ue = z.getDay(), z = ue > 4 || ue === 0 ? xt.ceil(z) : xt(z), z = Ue.offset(z, (p.V - 1) * 7), p.y = z.getFullYear(), p.m = z.getMonth(), p.d = z.getDate() + (p.w + 6) % 7);
      } else ("W" in p || "U" in p) && ("w" in p || (p.w = "u" in p ? p.u % 7 : "W" in p ? 1 : 0), ue = "Z" in p ? Bt(We(p.y, 0, 1)).getUTCDay() : Vt(We(p.y, 0, 1)).getDay(), p.m = 0, p.d = "W" in p ? (p.w + 6) % 7 + p.W * 7 - (ue + 5) % 7 : p.w + p.U * 7 - (ue + 6) % 7);
      return "Z" in p ? (p.H += p.Z / 100 | 0, p.M += p.Z % 100, Bt(p)) : Vt(p);
    };
  }
  function D(b, M, j, p) {
    for (var J = 0, z = M.length, ue = j.length, ce, Me; J < z; ) {
      if (p >= ue) return -1;
      if (ce = M.charCodeAt(J++), ce === 37) {
        if (ce = M.charAt(J++), Me = v[ce in ia ? M.charAt(J++) : ce], !Me || (p = Me(b, j, p)) < 0) return -1;
      } else if (ce != j.charCodeAt(p++))
        return -1;
    }
    return p;
  }
  function A(b, M, j) {
    var p = c.exec(M.slice(j));
    return p ? (b.p = h.get(p[0].toLowerCase()), j + p[0].length) : -1;
  }
  function X(b, M, j) {
    var p = w.exec(M.slice(j));
    return p ? (b.w = O.get(p[0].toLowerCase()), j + p[0].length) : -1;
  }
  function S(b, M, j) {
    var p = l.exec(M.slice(j));
    return p ? (b.w = d.get(p[0].toLowerCase()), j + p[0].length) : -1;
  }
  function H(b, M, j) {
    var p = R.exec(M.slice(j));
    return p ? (b.m = T.get(p[0].toLowerCase()), j + p[0].length) : -1;
  }
  function F(b, M, j) {
    var p = _.exec(M.slice(j));
    return p ? (b.m = C.get(p[0].toLowerCase()), j + p[0].length) : -1;
  }
  function U(b, M, j) {
    return D(b, t, M, j);
  }
  function K(b, M, j) {
    return D(b, n, M, j);
  }
  function q(b, M, j) {
    return D(b, r, M, j);
  }
  function G(b) {
    return o[b.getDay()];
  }
  function Q(b) {
    return a[b.getDay()];
  }
  function Z(b) {
    return s[b.getMonth()];
  }
  function f(b) {
    return u[b.getMonth()];
  }
  function g(b) {
    return i[+(b.getHours() >= 12)];
  }
  function E(b) {
    return 1 + ~~(b.getMonth() / 3);
  }
  function k(b) {
    return o[b.getUTCDay()];
  }
  function N(b) {
    return a[b.getUTCDay()];
  }
  function L(b) {
    return s[b.getUTCMonth()];
  }
  function I(b) {
    return u[b.getUTCMonth()];
  }
  function Y(b) {
    return i[+(b.getUTCHours() >= 12)];
  }
  function $(b) {
    return 1 + ~~(b.getUTCMonth() / 3);
  }
  return {
    format: function(b) {
      var M = x(b += "", m);
      return M.toString = function() {
        return b;
      }, M;
    },
    parse: function(b) {
      var M = P(b += "", !1);
      return M.toString = function() {
        return b;
      }, M;
    },
    utcFormat: function(b) {
      var M = x(b += "", y);
      return M.toString = function() {
        return b;
      }, M;
    },
    utcParse: function(b) {
      var M = P(b += "", !0);
      return M.toString = function() {
        return b;
      }, M;
    }
  };
}
var ia = { "-": "", _: " ", 0: "0" }, ie = /^\s*\d+/, qu = /^%/, Iu = /[\\^$*+?|[\]().{}]/g;
function W(e, t, n) {
  var r = e < 0 ? "-" : "", i = (r ? -e : e) + "", a = i.length;
  return r + (a < n ? new Array(n - a + 1).join(t) + i : i);
}
function Fu(e) {
  return e.replace(Iu, "\\$&");
}
function ze(e) {
  return new RegExp("^(?:" + e.map(Fu).join("|") + ")", "i");
}
function Ge(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Uu(e, t, n) {
  var r = ie.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function Hu(e, t, n) {
  var r = ie.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function Yu(e, t, n) {
  var r = ie.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function Wu(e, t, n) {
  var r = ie.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function zu(e, t, n) {
  var r = ie.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function oa(e, t, n) {
  var r = ie.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function ua(e, t, n) {
  var r = ie.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Gu(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Vu(e, t, n) {
  var r = ie.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Bu(e, t, n) {
  var r = ie.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function sa(e, t, n) {
  var r = ie.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Zu(e, t, n) {
  var r = ie.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function ca(e, t, n) {
  var r = ie.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Xu(e, t, n) {
  var r = ie.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Ju(e, t, n) {
  var r = ie.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Ku(e, t, n) {
  var r = ie.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Qu(e, t, n) {
  var r = ie.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function es(e, t, n) {
  var r = qu.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function ts(e, t, n) {
  var r = ie.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function ns(e, t, n) {
  var r = ie.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function fa(e, t) {
  return W(e.getDate(), t, 2);
}
function rs(e, t) {
  return W(e.getHours(), t, 2);
}
function as(e, t) {
  return W(e.getHours() % 12 || 12, t, 2);
}
function is(e, t) {
  return W(1 + Ue.count(ve(e), e), t, 3);
}
function to(e, t) {
  return W(e.getMilliseconds(), t, 3);
}
function os(e, t) {
  return to(e, t) + "000";
}
function us(e, t) {
  return W(e.getMonth() + 1, t, 2);
}
function ss(e, t) {
  return W(e.getMinutes(), t, 2);
}
function cs(e, t) {
  return W(e.getSeconds(), t, 2);
}
function fs(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ls(e, t) {
  return W(nt.count(ve(e) - 1, e), t, 2);
}
function no(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? qe(e) : qe.ceil(e);
}
function hs(e, t) {
  return e = no(e), W(qe.count(ve(e), e) + (ve(e).getDay() === 4), t, 2);
}
function ps(e) {
  return e.getDay();
}
function ds(e, t) {
  return W(xt.count(ve(e) - 1, e), t, 2);
}
function vs(e, t) {
  return W(e.getFullYear() % 100, t, 2);
}
function gs(e, t) {
  return e = no(e), W(e.getFullYear() % 100, t, 2);
}
function ms(e, t) {
  return W(e.getFullYear() % 1e4, t, 4);
}
function ys(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? qe(e) : qe.ceil(e), W(e.getFullYear() % 1e4, t, 4);
}
function bs(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + W(t / 60 | 0, "0", 2) + W(t % 60, "0", 2);
}
function la(e, t) {
  return W(e.getUTCDate(), t, 2);
}
function xs(e, t) {
  return W(e.getUTCHours(), t, 2);
}
function ws(e, t) {
  return W(e.getUTCHours() % 12 || 12, t, 2);
}
function Ts(e, t) {
  return W(1 + Nt.count(Te(e), e), t, 3);
}
function ro(e, t) {
  return W(e.getUTCMilliseconds(), t, 3);
}
function _s(e, t) {
  return ro(e, t) + "000";
}
function Ms(e, t) {
  return W(e.getUTCMonth() + 1, t, 2);
}
function Cs(e, t) {
  return W(e.getUTCMinutes(), t, 2);
}
function Ss(e, t) {
  return W(e.getUTCSeconds(), t, 2);
}
function Os(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Es(e, t) {
  return W(Rr.count(Te(e) - 1, e), t, 2);
}
function ao(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ie(e) : Ie.ceil(e);
}
function ks(e, t) {
  return e = ao(e), W(Ie.count(Te(e), e) + (Te(e).getUTCDay() === 4), t, 2);
}
function Ps(e) {
  return e.getUTCDay();
}
function Rs(e, t) {
  return W(wt.count(Te(e) - 1, e), t, 2);
}
function Ns(e, t) {
  return W(e.getUTCFullYear() % 100, t, 2);
}
function As(e, t) {
  return e = ao(e), W(e.getUTCFullYear() % 100, t, 2);
}
function $s(e, t) {
  return W(e.getUTCFullYear() % 1e4, t, 4);
}
function js(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Ie(e) : Ie.ceil(e), W(e.getUTCFullYear() % 1e4, t, 4);
}
function Ls() {
  return "+0000";
}
function ha() {
  return "%";
}
function pa(e) {
  return +e;
}
function da(e) {
  return Math.floor(+e / 1e3);
}
var Ne, io;
Ds({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Ds(e) {
  return Ne = Du(e), io = Ne.format, Ne.parse, Ne.utcFormat, Ne.utcParse, Ne;
}
function qs(e) {
  return new Date(e);
}
function Is(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function oo(e, t, n, r, i, a, o, u, s, c) {
  var h = Vi(), l = h.invert, d = h.domain, w = c(".%L"), O = c(":%S"), _ = c("%I:%M"), C = c("%I %p"), R = c("%a %d"), T = c("%b %d"), m = c("%B"), y = c("%Y");
  function v(x) {
    return (s(x) < x ? w : u(x) < x ? O : o(x) < x ? _ : a(x) < x ? C : r(x) < x ? i(x) < x ? R : T : n(x) < x ? m : y)(x);
  }
  return h.invert = function(x) {
    return new Date(l(x));
  }, h.domain = function(x) {
    return arguments.length ? d(Array.from(x, Is)) : d().map(qs);
  }, h.ticks = function(x) {
    var P = d();
    return e(P[0], P[P.length - 1], x ?? 10);
  }, h.tickFormat = function(x, P) {
    return P == null ? v : c(P);
  }, h.nice = function(x) {
    var P = d();
    return (!x || typeof x.range != "function") && (x = t(P[0], P[P.length - 1], x ?? 10)), x ? d(Mu(P, x)) : h;
  }, h.copy = function() {
    return Gi(h, oo(e, t, n, r, i, a, o, u, s, c));
  }, h;
}
function Fs() {
  return ki.apply(oo(ju, Lu, ve, At, nt, Ue, Rt, Pt, we, io).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Us(e, t) {
  t.domain && ("nice" in e || "quantiles" in e || "padding" in e, e.domain(t.domain));
}
function Hs(e, t) {
  t.range && ("padding" in e, e.range(t.range));
}
function Ys(e, t) {
  "align" in e && "align" in t && typeof t.align < "u" && e.align(t.align);
}
function Ws(e, t) {
  "base" in e && "base" in t && typeof t.base < "u" && e.base(t.base);
}
function zs(e, t) {
  "clamp" in e && "clamp" in t && typeof t.clamp < "u" && e.clamp(t.clamp);
}
function Gs(e, t) {
  "constant" in e && "constant" in t && typeof t.constant < "u" && e.constant(t.constant);
}
function Vs(e, t) {
  "exponent" in e && "exponent" in t && typeof t.exponent < "u" && e.exponent(t.exponent);
}
var va = {
  lab: eu,
  hcl: tu,
  "hcl-long": nu,
  hsl: Ko,
  "hsl-long": Qo,
  cubehelix: ru,
  "cubehelix-long": au,
  rgb: lr
};
function Bs(e) {
  switch (e) {
    case "lab":
    case "hcl":
    case "hcl-long":
    case "hsl":
    case "hsl-long":
    case "cubehelix":
    case "cubehelix-long":
    case "rgb":
      return va[e];
  }
  var t = e.type, n = e.gamma, r = va[t];
  return typeof n > "u" ? r : r.gamma(n);
}
function Zs(e, t) {
  if ("interpolate" in t && "interpolate" in e && typeof t.interpolate < "u") {
    var n = Bs(t.interpolate);
    e.interpolate(n);
  }
}
var Xs = new Date(Date.UTC(2020, 1, 2, 3, 4, 5)), Js = "%Y-%m-%d %H:%M";
function Ks(e) {
  var t = e.tickFormat(1, Js)(Xs);
  return t === "2020-02-02 03:04";
}
var ga = {
  day: Ue,
  hour: Rt,
  minute: Pt,
  month: At,
  second: we,
  week: nt,
  year: ve
}, ma = {
  day: Nt,
  hour: Qi,
  minute: Ki,
  month: eo,
  second: we,
  week: Rr,
  year: Te
};
function Qs(e, t) {
  if ("nice" in t && typeof t.nice < "u" && "nice" in e) {
    var n = t.nice;
    if (typeof n == "boolean")
      n && e.nice();
    else if (typeof n == "number")
      e.nice(n);
    else {
      var r = e, i = Ks(r);
      if (typeof n == "string")
        r.nice(i ? ma[n] : ga[n]);
      else {
        var a = n.interval, o = n.step, u = (i ? ma[a] : ga[a]).every(o);
        u != null && r.nice(u);
      }
    }
  }
}
function ec(e, t) {
  "padding" in e && "padding" in t && typeof t.padding < "u" && e.padding(t.padding), "paddingInner" in e && "paddingInner" in t && typeof t.paddingInner < "u" && e.paddingInner(t.paddingInner), "paddingOuter" in e && "paddingOuter" in t && typeof t.paddingOuter < "u" && e.paddingOuter(t.paddingOuter);
}
function tc(e, t) {
  if (t.reverse) {
    var n = e.range().slice().reverse();
    "padding" in e, e.range(n);
  }
}
function nc(e, t) {
  "round" in t && typeof t.round < "u" && (t.round && "interpolate" in t && typeof t.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", t) : "round" in e ? e.round(t.round) : "interpolate" in e && t.round && e.interpolate(Hi));
}
function rc(e, t) {
  "unknown" in e && "unknown" in t && typeof t.unknown < "u" && e.unknown(t.unknown);
}
function ac(e, t) {
  if ("zero" in t && t.zero === !0) {
    var n = e.domain(), r = n[0], i = n[1], a = i < r, o = a ? [i, r] : [r, i], u = o[0], s = o[1], c = [Math.min(0, u), Math.max(0, s)];
    e.domain(a ? c.reverse() : c);
  }
}
var ic = [
  // domain => nice => zero
  "domain",
  "nice",
  "zero",
  // interpolate before round
  "interpolate",
  "round",
  // set range then reverse
  "range",
  "reverse",
  // Order does not matter for these operators
  "align",
  "base",
  "clamp",
  "constant",
  "exponent",
  "padding",
  "unknown"
], oc = {
  domain: Us,
  nice: Qs,
  zero: ac,
  interpolate: Zs,
  round: nc,
  align: Ys,
  base: Ws,
  clamp: zs,
  constant: Gs,
  exponent: Vs,
  padding: ec,
  range: Hs,
  reverse: tc,
  unknown: rc
};
function uo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = new Set(t), i = ic.filter(function(a) {
    return r.has(a);
  });
  return function(o, u) {
    return typeof u < "u" && i.forEach(function(s) {
      oc[s](o, u);
    }), o;
  };
}
var uc = uo("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
function sc(e) {
  return uc(Ji(), e);
}
var cc = uo("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function fc(e) {
  return cc(Fs(), e);
}
function lc(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number") return t;
  }
  return e;
}
function hc(e, t) {
  var n = e;
  return "ticks" in n ? n.ticks(t) : n.domain().filter(function(r, i, a) {
    return t == null || a.length <= t || i % Math.round((a.length - 1) / t) === 0;
  });
}
function pc(e) {
  return e == null ? void 0 : e.toString();
}
var Zt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ya;
function dc() {
  return ya || (ya = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var a = "", o = 0; o < arguments.length; o++) {
          var u = arguments[o];
          u && (a = i(a, r(u)));
        }
        return a;
      }
      function r(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return n.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var o = "";
        for (var u in a)
          t.call(a, u) && a[u] && (o = i(o, u));
        return o;
      }
      function i(a, o) {
        return o ? a ? a + " " + o : a + o : a;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(Zt)), Zt.exports;
}
var vc = dc();
const ge = /* @__PURE__ */ St(vc);
var dr = Math.PI, vr = 2 * dr, Ce = 1e-6, gc = vr - Ce;
function gr() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function so() {
  return new gr();
}
gr.prototype = so.prototype = {
  constructor: gr,
  moveTo: function(e, t) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(e, t) {
    this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
  },
  quadraticCurveTo: function(e, t, n, r) {
    this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
  },
  bezierCurveTo: function(e, t, n, r, i, a) {
    this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +a);
  },
  arcTo: function(e, t, n, r, i) {
    e = +e, t = +t, n = +n, r = +r, i = +i;
    var a = this._x1, o = this._y1, u = n - e, s = r - t, c = a - e, h = o - t, l = c * c + h * h;
    if (i < 0) throw new Error("negative radius: " + i);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
    else if (l > Ce) if (!(Math.abs(h * u - s * c) > Ce) || !i)
      this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
    else {
      var d = n - a, w = r - o, O = u * u + s * s, _ = d * d + w * w, C = Math.sqrt(O), R = Math.sqrt(l), T = i * Math.tan((dr - Math.acos((O + l - _) / (2 * C * R))) / 2), m = T / R, y = T / C;
      Math.abs(m - 1) > Ce && (this._ += "L" + (e + m * c) + "," + (t + m * h)), this._ += "A" + i + "," + i + ",0,0," + +(h * d > c * w) + "," + (this._x1 = e + y * u) + "," + (this._y1 = t + y * s);
    }
  },
  arc: function(e, t, n, r, i, a) {
    e = +e, t = +t, n = +n, a = !!a;
    var o = n * Math.cos(r), u = n * Math.sin(r), s = e + o, c = t + u, h = 1 ^ a, l = a ? r - i : i - r;
    if (n < 0) throw new Error("negative radius: " + n);
    this._x1 === null ? this._ += "M" + s + "," + c : (Math.abs(this._x1 - s) > Ce || Math.abs(this._y1 - c) > Ce) && (this._ += "L" + s + "," + c), n && (l < 0 && (l = l % vr + vr), l > gc ? this._ += "A" + n + "," + n + ",0,1," + h + "," + (e - o) + "," + (t - u) + "A" + n + "," + n + ",0,1," + h + "," + (this._x1 = s) + "," + (this._y1 = c) : l > Ce && (this._ += "A" + n + "," + n + ",0," + +(l >= dr) + "," + h + "," + (this._x1 = e + n * Math.cos(i)) + "," + (this._y1 = t + n * Math.sin(i))));
  },
  rect: function(e, t, n, r) {
    this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
  },
  toString: function() {
    return this._;
  }
};
function ct(e) {
  return function() {
    return e;
  };
}
function co(e) {
  this._context = e;
}
co.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // proceed
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function mc(e) {
  return new co(e);
}
function yc(e) {
  return e[0];
}
function bc(e) {
  return e[1];
}
function xc() {
  var e = yc, t = bc, n = ct(!0), r = null, i = mc, a = null;
  function o(u) {
    var s, c = u.length, h, l = !1, d;
    for (r == null && (a = i(d = so())), s = 0; s <= c; ++s)
      !(s < c && n(h = u[s], s, u)) === l && ((l = !l) ? a.lineStart() : a.lineEnd()), l && a.point(+e(h, s, u), +t(h, s, u));
    if (d) return a = null, d + "" || null;
  }
  return o.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : ct(+u), o) : e;
  }, o.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : ct(+u), o) : t;
  }, o.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : ct(!!u), o) : n;
  }, o.curve = function(u) {
    return arguments.length ? (i = u, r != null && (a = i(r)), o) : i;
  }, o.context = function(u) {
    return arguments.length ? (u == null ? r = a = null : a = i(r = u), o) : r;
  }, o;
}
function ba(e, t) {
  e(t);
}
function wc(e) {
  var t = e === void 0 ? {} : e, n = t.x, r = t.y, i = t.defined, a = t.curve, o = xc();
  return n && ba(o.x, n), r && ba(o.y, r), i && o.defined(i), a && o.curve(a), o;
}
var ft = { exports: {} }, lt = { exports: {} }, V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xa;
function Tc() {
  if (xa) return V;
  xa = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function m(v) {
    if (typeof v == "object" && v !== null) {
      var x = v.$$typeof;
      switch (x) {
        case t:
          switch (v = v.type, v) {
            case s:
            case c:
            case r:
            case a:
            case i:
            case l:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case u:
                case h:
                case O:
                case w:
                case o:
                  return v;
                default:
                  return x;
              }
          }
        case n:
          return x;
      }
    }
  }
  function y(v) {
    return m(v) === c;
  }
  return V.AsyncMode = s, V.ConcurrentMode = c, V.ContextConsumer = u, V.ContextProvider = o, V.Element = t, V.ForwardRef = h, V.Fragment = r, V.Lazy = O, V.Memo = w, V.Portal = n, V.Profiler = a, V.StrictMode = i, V.Suspense = l, V.isAsyncMode = function(v) {
    return y(v) || m(v) === s;
  }, V.isConcurrentMode = y, V.isContextConsumer = function(v) {
    return m(v) === u;
  }, V.isContextProvider = function(v) {
    return m(v) === o;
  }, V.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, V.isForwardRef = function(v) {
    return m(v) === h;
  }, V.isFragment = function(v) {
    return m(v) === r;
  }, V.isLazy = function(v) {
    return m(v) === O;
  }, V.isMemo = function(v) {
    return m(v) === w;
  }, V.isPortal = function(v) {
    return m(v) === n;
  }, V.isProfiler = function(v) {
    return m(v) === a;
  }, V.isStrictMode = function(v) {
    return m(v) === i;
  }, V.isSuspense = function(v) {
    return m(v) === l;
  }, V.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === c || v === a || v === i || v === l || v === d || typeof v == "object" && v !== null && (v.$$typeof === O || v.$$typeof === w || v.$$typeof === o || v.$$typeof === u || v.$$typeof === h || v.$$typeof === C || v.$$typeof === R || v.$$typeof === T || v.$$typeof === _);
  }, V.typeOf = m, V;
}
var B = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wa;
function _c() {
  return wa || (wa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, O = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, R = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function m(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === r || p === c || p === a || p === i || p === l || p === d || typeof p == "object" && p !== null && (p.$$typeof === O || p.$$typeof === w || p.$$typeof === o || p.$$typeof === u || p.$$typeof === h || p.$$typeof === C || p.$$typeof === R || p.$$typeof === T || p.$$typeof === _);
    }
    function y(p) {
      if (typeof p == "object" && p !== null) {
        var J = p.$$typeof;
        switch (J) {
          case t:
            var z = p.type;
            switch (z) {
              case s:
              case c:
              case r:
              case a:
              case i:
              case l:
                return z;
              default:
                var ue = z && z.$$typeof;
                switch (ue) {
                  case u:
                  case h:
                  case O:
                  case w:
                  case o:
                    return ue;
                  default:
                    return J;
                }
            }
          case n:
            return J;
        }
      }
    }
    var v = s, x = c, P = u, D = o, A = t, X = h, S = r, H = O, F = w, U = n, K = a, q = i, G = l, Q = !1;
    function Z(p) {
      return Q || (Q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), f(p) || y(p) === s;
    }
    function f(p) {
      return y(p) === c;
    }
    function g(p) {
      return y(p) === u;
    }
    function E(p) {
      return y(p) === o;
    }
    function k(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function N(p) {
      return y(p) === h;
    }
    function L(p) {
      return y(p) === r;
    }
    function I(p) {
      return y(p) === O;
    }
    function Y(p) {
      return y(p) === w;
    }
    function $(p) {
      return y(p) === n;
    }
    function b(p) {
      return y(p) === a;
    }
    function M(p) {
      return y(p) === i;
    }
    function j(p) {
      return y(p) === l;
    }
    B.AsyncMode = v, B.ConcurrentMode = x, B.ContextConsumer = P, B.ContextProvider = D, B.Element = A, B.ForwardRef = X, B.Fragment = S, B.Lazy = H, B.Memo = F, B.Portal = U, B.Profiler = K, B.StrictMode = q, B.Suspense = G, B.isAsyncMode = Z, B.isConcurrentMode = f, B.isContextConsumer = g, B.isContextProvider = E, B.isElement = k, B.isForwardRef = N, B.isFragment = L, B.isLazy = I, B.isMemo = Y, B.isPortal = $, B.isProfiler = b, B.isStrictMode = M, B.isSuspense = j, B.isValidElementType = m, B.typeOf = y;
  }()), B;
}
var Ta;
function fo() {
  return Ta || (Ta = 1, process.env.NODE_ENV === "production" ? lt.exports = Tc() : lt.exports = _c()), lt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Xt, _a;
function Mc() {
  if (_a) return Xt;
  _a = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, u = 0; u < 10; u++)
        o["_" + String.fromCharCode(u)] = u;
      var s = Object.getOwnPropertyNames(o).map(function(h) {
        return o[h];
      });
      if (s.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        c[h] = h;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Xt = i() ? Object.assign : function(a, o) {
    for (var u, s = r(a), c, h = 1; h < arguments.length; h++) {
      u = Object(arguments[h]);
      for (var l in u)
        t.call(u, l) && (s[l] = u[l]);
      if (e) {
        c = e(u);
        for (var d = 0; d < c.length; d++)
          n.call(u, c[d]) && (s[c[d]] = u[c[d]]);
      }
    }
    return s;
  }, Xt;
}
var Jt, Ma;
function Nr() {
  if (Ma) return Jt;
  Ma = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Jt = e, Jt;
}
var Kt, Ca;
function lo() {
  return Ca || (Ca = 1, Kt = Function.call.bind(Object.prototype.hasOwnProperty)), Kt;
}
var Qt, Sa;
function Cc() {
  if (Sa) return Qt;
  Sa = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Nr(), n = {}, r = /* @__PURE__ */ lo();
    e = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, u, s, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in a)
        if (r(a, h)) {
          var l;
          try {
            if (typeof a[h] != "function") {
              var d = Error(
                (s || "React class") + ": " + u + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            l = a[h](o, h, s, u, null, t);
          } catch (O) {
            l = O;
          }
          if (l && !(l instanceof Error) && e(
            (s || "React class") + ": type specification of " + u + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), l instanceof Error && !(l.message in n)) {
            n[l.message] = !0;
            var w = c ? c() : "";
            e(
              "Failed " + u + " type: " + l.message + (w ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Qt = i, Qt;
}
var en, Oa;
function Sc() {
  if (Oa) return en;
  Oa = 1;
  var e = fo(), t = Mc(), n = /* @__PURE__ */ Nr(), r = /* @__PURE__ */ lo(), i = /* @__PURE__ */ Cc(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(u) {
    var s = "Warning: " + u;
    typeof console < "u" && console.error(s);
    try {
      throw new Error(s);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return en = function(u, s) {
    var c = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function l(f) {
      var g = f && (c && f[c] || f[h]);
      if (typeof g == "function")
        return g;
    }
    var d = "<<anonymous>>", w = {
      array: R("array"),
      bigint: R("bigint"),
      bool: R("boolean"),
      func: R("function"),
      number: R("number"),
      object: R("object"),
      string: R("string"),
      symbol: R("symbol"),
      any: T(),
      arrayOf: m,
      element: y(),
      elementType: v(),
      instanceOf: x,
      node: X(),
      objectOf: D,
      oneOf: P,
      oneOfType: A,
      shape: H,
      exact: F
    };
    function O(f, g) {
      return f === g ? f !== 0 || 1 / f === 1 / g : f !== f && g !== g;
    }
    function _(f, g) {
      this.message = f, this.data = g && typeof g == "object" ? g : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function C(f) {
      if (process.env.NODE_ENV !== "production")
        var g = {}, E = 0;
      function k(L, I, Y, $, b, M, j) {
        if ($ = $ || d, M = M || Y, j !== n) {
          if (s) {
            var p = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw p.name = "Invariant Violation", p;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var J = $ + ":" + Y;
            !g[J] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + $ + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), g[J] = !0, E++);
          }
        }
        return I[Y] == null ? L ? I[Y] === null ? new _("The " + b + " `" + M + "` is marked as required " + ("in `" + $ + "`, but its value is `null`.")) : new _("The " + b + " `" + M + "` is marked as required in " + ("`" + $ + "`, but its value is `undefined`.")) : null : f(I, Y, $, b, M);
      }
      var N = k.bind(null, !1);
      return N.isRequired = k.bind(null, !0), N;
    }
    function R(f) {
      function g(E, k, N, L, I, Y) {
        var $ = E[k], b = q($);
        if (b !== f) {
          var M = G($);
          return new _(
            "Invalid " + L + " `" + I + "` of type " + ("`" + M + "` supplied to `" + N + "`, expected ") + ("`" + f + "`."),
            { expectedType: f }
          );
        }
        return null;
      }
      return C(g);
    }
    function T() {
      return C(o);
    }
    function m(f) {
      function g(E, k, N, L, I) {
        if (typeof f != "function")
          return new _("Property `" + I + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var Y = E[k];
        if (!Array.isArray(Y)) {
          var $ = q(Y);
          return new _("Invalid " + L + " `" + I + "` of type " + ("`" + $ + "` supplied to `" + N + "`, expected an array."));
        }
        for (var b = 0; b < Y.length; b++) {
          var M = f(Y, b, N, L, I + "[" + b + "]", n);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return C(g);
    }
    function y() {
      function f(g, E, k, N, L) {
        var I = g[E];
        if (!u(I)) {
          var Y = q(I);
          return new _("Invalid " + N + " `" + L + "` of type " + ("`" + Y + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(f);
    }
    function v() {
      function f(g, E, k, N, L) {
        var I = g[E];
        if (!e.isValidElementType(I)) {
          var Y = q(I);
          return new _("Invalid " + N + " `" + L + "` of type " + ("`" + Y + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(f);
    }
    function x(f) {
      function g(E, k, N, L, I) {
        if (!(E[k] instanceof f)) {
          var Y = f.name || d, $ = Z(E[k]);
          return new _("Invalid " + L + " `" + I + "` of type " + ("`" + $ + "` supplied to `" + N + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return C(g);
    }
    function P(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function g(E, k, N, L, I) {
        for (var Y = E[k], $ = 0; $ < f.length; $++)
          if (O(Y, f[$]))
            return null;
        var b = JSON.stringify(f, function(j, p) {
          var J = G(p);
          return J === "symbol" ? String(p) : p;
        });
        return new _("Invalid " + L + " `" + I + "` of value `" + String(Y) + "` " + ("supplied to `" + N + "`, expected one of " + b + "."));
      }
      return C(g);
    }
    function D(f) {
      function g(E, k, N, L, I) {
        if (typeof f != "function")
          return new _("Property `" + I + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var Y = E[k], $ = q(Y);
        if ($ !== "object")
          return new _("Invalid " + L + " `" + I + "` of type " + ("`" + $ + "` supplied to `" + N + "`, expected an object."));
        for (var b in Y)
          if (r(Y, b)) {
            var M = f(Y, b, N, L, I + "." + b, n);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return C(g);
    }
    function A(f) {
      if (!Array.isArray(f))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var g = 0; g < f.length; g++) {
        var E = f[g];
        if (typeof E != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Q(E) + " at index " + g + "."
          ), o;
      }
      function k(N, L, I, Y, $) {
        for (var b = [], M = 0; M < f.length; M++) {
          var j = f[M], p = j(N, L, I, Y, $, n);
          if (p == null)
            return null;
          p.data && r(p.data, "expectedType") && b.push(p.data.expectedType);
        }
        var J = b.length > 0 ? ", expected one of type [" + b.join(", ") + "]" : "";
        return new _("Invalid " + Y + " `" + $ + "` supplied to " + ("`" + I + "`" + J + "."));
      }
      return C(k);
    }
    function X() {
      function f(g, E, k, N, L) {
        return U(g[E]) ? null : new _("Invalid " + N + " `" + L + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return C(f);
    }
    function S(f, g, E, k, N) {
      return new _(
        (f || "React class") + ": " + g + " type `" + E + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function H(f) {
      function g(E, k, N, L, I) {
        var Y = E[k], $ = q(Y);
        if ($ !== "object")
          return new _("Invalid " + L + " `" + I + "` of type `" + $ + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var b in f) {
          var M = f[b];
          if (typeof M != "function")
            return S(N, L, I, b, G(M));
          var j = M(Y, b, N, L, I + "." + b, n);
          if (j)
            return j;
        }
        return null;
      }
      return C(g);
    }
    function F(f) {
      function g(E, k, N, L, I) {
        var Y = E[k], $ = q(Y);
        if ($ !== "object")
          return new _("Invalid " + L + " `" + I + "` of type `" + $ + "` " + ("supplied to `" + N + "`, expected `object`."));
        var b = t({}, E[k], f);
        for (var M in b) {
          var j = f[M];
          if (r(f, M) && typeof j != "function")
            return S(N, L, I, M, G(j));
          if (!j)
            return new _(
              "Invalid " + L + " `" + I + "` key `" + M + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(E[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(f), null, "  ")
            );
          var p = j(Y, M, N, L, I + "." + M, n);
          if (p)
            return p;
        }
        return null;
      }
      return C(g);
    }
    function U(f) {
      switch (typeof f) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !f;
        case "object":
          if (Array.isArray(f))
            return f.every(U);
          if (f === null || u(f))
            return !0;
          var g = l(f);
          if (g) {
            var E = g.call(f), k;
            if (g !== f.entries) {
              for (; !(k = E.next()).done; )
                if (!U(k.value))
                  return !1;
            } else
              for (; !(k = E.next()).done; ) {
                var N = k.value;
                if (N && !U(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function K(f, g) {
      return f === "symbol" ? !0 : g ? g["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && g instanceof Symbol : !1;
    }
    function q(f) {
      var g = typeof f;
      return Array.isArray(f) ? "array" : f instanceof RegExp ? "object" : K(g, f) ? "symbol" : g;
    }
    function G(f) {
      if (typeof f > "u" || f === null)
        return "" + f;
      var g = q(f);
      if (g === "object") {
        if (f instanceof Date)
          return "date";
        if (f instanceof RegExp)
          return "regexp";
      }
      return g;
    }
    function Q(f) {
      var g = G(f);
      switch (g) {
        case "array":
        case "object":
          return "an " + g;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + g;
        default:
          return g;
      }
    }
    function Z(f) {
      return !f.constructor || !f.constructor.name ? d : f.constructor.name;
    }
    return w.checkPropTypes = i, w.resetWarningCache = i.resetWarningCache, w.PropTypes = w, w;
  }, en;
}
var tn, Ea;
function Oc() {
  if (Ea) return tn;
  Ea = 1;
  var e = /* @__PURE__ */ Nr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, tn = function() {
    function r(o, u, s, c, h, l) {
      if (l !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, tn;
}
var ka;
function Ec() {
  if (ka) return ft.exports;
  if (ka = 1, process.env.NODE_ENV !== "production") {
    var e = fo(), t = !0;
    ft.exports = /* @__PURE__ */ Sc()(e.isElement, t);
  } else
    ft.exports = /* @__PURE__ */ Oc()();
  return ft.exports;
}
var kc = /* @__PURE__ */ Ec();
const oe = /* @__PURE__ */ St(kc);
var Pc = ["top", "left", "transform", "className", "children", "innerRef"];
function mr() {
  return mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, mr.apply(this, arguments);
}
function Rc(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function $t(e) {
  var t = e.top, n = t === void 0 ? 0 : t, r = e.left, i = r === void 0 ? 0 : r, a = e.transform, o = e.className, u = e.children, s = e.innerRef, c = Rc(e, Pc);
  return /* @__PURE__ */ ee.createElement("g", mr({
    ref: s,
    className: ge("visx-group", o),
    transform: a || "translate(" + i + ", " + n + ")"
  }, c), u);
}
$t.propTypes = {
  top: oe.number,
  left: oe.number,
  transform: oe.string,
  className: oe.string,
  children: oe.node,
  innerRef: oe.oneOfType([oe.string, oe.func, oe.object])
};
var Nc = ["from", "to", "fill", "className", "innerRef"];
function yr() {
  return yr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yr.apply(this, arguments);
}
function Ac(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ho(e) {
  var t = e.from, n = t === void 0 ? {
    x: 0,
    y: 0
  } : t, r = e.to, i = r === void 0 ? {
    x: 1,
    y: 1
  } : r, a = e.fill, o = a === void 0 ? "transparent" : a, u = e.className, s = e.innerRef, c = Ac(e, Nc), h = n.x === i.x || n.y === i.y;
  return /* @__PURE__ */ ee.createElement("line", yr({
    ref: s,
    className: ge("visx-line", u),
    x1: n.x,
    y1: n.y,
    x2: i.x,
    y2: i.y,
    fill: o,
    shapeRendering: h ? "crispEdges" : "auto"
  }, c));
}
var $c = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function br() {
  return br = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, br.apply(this, arguments);
}
function jc(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Lc(e) {
  var t = e.children, n = e.data, r = n === void 0 ? [] : n, i = e.x, a = e.y, o = e.fill, u = o === void 0 ? "transparent" : o, s = e.className, c = e.curve, h = e.innerRef, l = e.defined, d = l === void 0 ? function() {
    return !0;
  } : l, w = jc(e, $c), O = wc({
    x: i,
    y: a,
    defined: d,
    curve: c
  });
  return t ? /* @__PURE__ */ ee.createElement(ee.Fragment, null, t({
    path: O
  })) : /* @__PURE__ */ ee.createElement("path", br({
    ref: h,
    className: ge("visx-linepath", s),
    d: O(r) || "",
    fill: u,
    strokeLinecap: "round"
  }, w));
}
var nn, Pa;
function Dc() {
  if (Pa) return nn;
  Pa = 1, nn = e;
  function e(r, i, a) {
    r instanceof RegExp && (r = t(r, a)), i instanceof RegExp && (i = t(i, a));
    var o = n(r, i, a);
    return o && {
      start: o[0],
      end: o[1],
      pre: a.slice(0, o[0]),
      body: a.slice(o[0] + r.length, o[1]),
      post: a.slice(o[1] + i.length)
    };
  }
  function t(r, i) {
    var a = i.match(r);
    return a ? a[0] : null;
  }
  e.range = n;
  function n(r, i, a) {
    var o, u, s, c, h, l = a.indexOf(r), d = a.indexOf(i, l + 1), w = l;
    if (l >= 0 && d > 0) {
      for (o = [], s = a.length; w >= 0 && !h; )
        w == l ? (o.push(w), l = a.indexOf(r, w + 1)) : o.length == 1 ? h = [o.pop(), d] : (u = o.pop(), u < s && (s = u, c = d), d = a.indexOf(i, w + 1)), w = l < d && l >= 0 ? l : d;
      o.length && (h = [s, c]);
    }
    return h;
  }
  return nn;
}
var rn, Ra;
function qc() {
  if (Ra) return rn;
  Ra = 1, rn = e;
  function e(r, i, a) {
    r instanceof RegExp && (r = t(r, a)), i instanceof RegExp && (i = t(i, a));
    var o = n(r, i, a);
    return o && {
      start: o[0],
      end: o[1],
      pre: a.slice(0, o[0]),
      body: a.slice(o[0] + r.length, o[1]),
      post: a.slice(o[1] + i.length)
    };
  }
  function t(r, i) {
    var a = i.match(r);
    return a ? a[0] : null;
  }
  e.range = n;
  function n(r, i, a) {
    var o, u, s, c, h, l = a.indexOf(r), d = a.indexOf(i, l + 1), w = l;
    if (l >= 0 && d > 0) {
      if (r === i)
        return [l, d];
      for (o = [], s = a.length; w >= 0 && !h; )
        w == l ? (o.push(w), l = a.indexOf(r, w + 1)) : o.length == 1 ? h = [o.pop(), d] : (u = o.pop(), u < s && (s = u, c = d), d = a.indexOf(i, w + 1)), w = l < d && l >= 0 ? l : d;
      o.length && (h = [s, c]);
    }
    return h;
  }
  return rn;
}
var an, Na;
function Ic() {
  if (Na) return an;
  Na = 1;
  var e = qc();
  an = t;
  function t(i, a, o) {
    var u = i;
    return n(i, a).reduce(function(s, c) {
      return s.replace(c.functionIdentifier + "(" + c.matches.body + ")", r(c.matches.body, c.functionIdentifier, o, u, a));
    }, i);
  }
  function n(i, a) {
    var o = [], u = typeof a == "string" ? new RegExp("\\b(" + a + ")\\(") : a;
    do {
      var s = u.exec(i);
      if (!s)
        return o;
      if (s[1] === void 0)
        throw new Error("Missing the first couple of parenthesis to get the function identifier in " + a);
      var c = s[1], h = s.index, l = e("(", ")", i.substring(h));
      if (!l || l.start !== s[0].length - 1)
        throw new SyntaxError(c + "(): missing closing ')' in the value '" + i + "'");
      o.push({ matches: l, functionIdentifier: c }), i = l.post;
    } while (u.test(i));
    return o;
  }
  function r(i, a, o, u, s) {
    return o(t(i, s, o), a, u);
  }
  return an;
}
var on, Aa;
function Fc() {
  if (Aa) return on;
  Aa = 1;
  var e = function(t) {
    this.value = t;
  };
  return e.math = {
    isDegree: !0,
    // mode of calculator
    acos: function(t) {
      return e.math.isDegree ? 180 / Math.PI * Math.acos(t) : Math.acos(t);
    },
    add: function(t, n) {
      return t + n;
    },
    asin: function(t) {
      return e.math.isDegree ? 180 / Math.PI * Math.asin(t) : Math.asin(t);
    },
    atan: function(t) {
      return e.math.isDegree ? 180 / Math.PI * Math.atan(t) : Math.atan(t);
    },
    acosh: function(t) {
      return Math.log(t + Math.sqrt(t * t - 1));
    },
    asinh: function(t) {
      return Math.log(t + Math.sqrt(t * t + 1));
    },
    atanh: function(t) {
      return Math.log((1 + t) / (1 - t));
    },
    C: function(t, n) {
      var r = 1, i = t - n, a = n;
      a < i && (a = i, i = n);
      for (var o = a + 1; o <= t; o++)
        r *= o;
      return r / e.math.fact(i);
    },
    changeSign: function(t) {
      return -t;
    },
    cos: function(t) {
      return e.math.isDegree && (t = e.math.toRadian(t)), Math.cos(t);
    },
    cosh: function(t) {
      return (Math.pow(Math.E, t) + Math.pow(Math.E, -1 * t)) / 2;
    },
    div: function(t, n) {
      return t / n;
    },
    fact: function(t) {
      if (t % 1 !== 0) return "NaN";
      for (var n = 1, r = 2; r <= t; r++)
        n *= r;
      return n;
    },
    inverse: function(t) {
      return 1 / t;
    },
    log: function(t) {
      return Math.log(t) / Math.log(10);
    },
    mod: function(t, n) {
      return t % n;
    },
    mul: function(t, n) {
      return t * n;
    },
    P: function(t, n) {
      for (var r = 1, i = Math.floor(t) - Math.floor(n) + 1; i <= Math.floor(t); i++)
        r *= i;
      return r;
    },
    Pi: function(t, n, r) {
      for (var i = 1, a = t; a <= n; a++)
        i *= Number(r.postfixEval({
          n: a
        }));
      return i;
    },
    pow10x: function(t) {
      for (var n = 1; t--; )
        n *= 10;
      return n;
    },
    sigma: function(t, n, r) {
      for (var i = 0, a = t; a <= n; a++)
        i += Number(r.postfixEval({
          n: a
        }));
      return i;
    },
    sin: function(t) {
      return e.math.isDegree && (t = e.math.toRadian(t)), Math.sin(t);
    },
    sinh: function(t) {
      return (Math.pow(Math.E, t) - Math.pow(Math.E, -1 * t)) / 2;
    },
    sub: function(t, n) {
      return t - n;
    },
    tan: function(t) {
      return e.math.isDegree && (t = e.math.toRadian(t)), Math.tan(t);
    },
    tanh: function(t) {
      return e.sinha(t) / e.cosha(t);
    },
    toRadian: function(t) {
      return t * Math.PI / 180;
    },
    and: function(t, n) {
      return t & n;
    }
  }, e.Exception = function(t) {
    this.message = t;
  }, on = e, on;
}
var un, $a;
function Uc() {
  if ($a) return un;
  $a = 1;
  var e = Fc();
  function t(T, m) {
    for (var y = 0; y < T.length; y++)
      T[y] += m;
    return T;
  }
  for (var n = [
    { token: "sin", show: "sin", type: 0, value: e.math.sin },
    { token: "cos", show: "cos", type: 0, value: e.math.cos },
    { token: "tan", show: "tan", type: 0, value: e.math.tan },
    { token: "pi", show: "&pi;", type: 3, value: "PI" },
    { token: "(", show: "(", type: 4, value: "(" },
    { token: ")", show: ")", type: 5, value: ")" },
    { token: "P", show: "P", type: 10, value: e.math.P },
    { token: "C", show: "C", type: 10, value: e.math.C },
    { token: " ", show: " ", type: 14, value: " ".anchor },
    { token: "asin", show: "asin", type: 0, value: e.math.asin },
    { token: "acos", show: "acos", type: 0, value: e.math.acos },
    { token: "atan", show: "atan", type: 0, value: e.math.atan },
    { token: "7", show: "7", type: 1, value: "7" },
    { token: "8", show: "8", type: 1, value: "8" },
    { token: "9", show: "9", type: 1, value: "9" },
    { token: "int", show: "Int", type: 0, value: Math.floor },
    { token: "cosh", show: "cosh", type: 0, value: e.math.cosh },
    { token: "acosh", show: "acosh", type: 0, value: e.math.acosh },
    { token: "ln", show: " ln", type: 0, value: Math.log },
    { token: "^", show: "^", type: 10, value: Math.pow },
    { token: "root", show: "root", type: 0, value: Math.sqrt },
    { token: "4", show: "4", type: 1, value: "4" },
    { token: "5", show: "5", type: 1, value: "5" },
    { token: "6", show: "6", type: 1, value: "6" },
    { token: "/", show: "&divide;", type: 2, value: e.math.div },
    { token: "!", show: "!", type: 7, value: e.math.fact },
    { token: "tanh", show: "tanh", type: 0, value: e.math.tanh },
    { token: "atanh", show: "atanh", type: 0, value: e.math.atanh },
    { token: "Mod", show: " Mod ", type: 2, value: e.math.mod },
    { token: "1", show: "1", type: 1, value: "1" },
    { token: "2", show: "2", type: 1, value: "2" },
    { token: "3", show: "3", type: 1, value: "3" },
    { token: "*", show: "&times;", type: 2, value: e.math.mul },
    { token: "sinh", show: "sinh", type: 0, value: e.math.sinh },
    { token: "asinh", show: "asinh", type: 0, value: e.math.asinh },
    { token: "e", show: "e", type: 3, value: "E" },
    { token: "log", show: " log", type: 0, value: e.math.log },
    { token: "0", show: "0", type: 1, value: "0" },
    { token: ".", show: ".", type: 6, value: "." },
    { token: "+", show: "+", type: 9, value: e.math.add },
    { token: "-", show: "-", type: 9, value: e.math.sub },
    { token: ",", show: ",", type: 11, value: "," },
    { token: "Sigma", show: "&Sigma;", type: 12, value: e.math.sigma },
    { token: "n", show: "n", type: 13, value: "n" },
    { token: "Pi", show: "&Pi;", type: 12, value: e.math.Pi },
    { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
    { token: "&", show: "&", type: 9, value: e.math.and }
  ], r = {
    0: 11,
    1: 0,
    2: 3,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 11,
    8: 11,
    9: 1,
    10: 10,
    11: 0,
    12: 11,
    13: 0,
    14: -1,
    15: 11
    // will be filtered after lexer
  }, i = 0; i < n.length; i++)
    n[i].precedence = r[n[i].type];
  var a = {
    0: !0,
    1: !0,
    3: !0,
    4: !0,
    6: !0,
    8: !0,
    9: !0,
    12: !0,
    13: !0,
    14: !0,
    15: !0
  }, o = {
    0: !0,
    1: !0,
    2: !0,
    3: !0,
    4: !0,
    5: !0,
    6: !0,
    7: !0,
    8: !0,
    9: !0,
    10: !0,
    11: !0,
    12: !0,
    13: !0,
    15: !0
  }, u = {
    0: !0,
    3: !0,
    4: !0,
    8: !0,
    12: !0,
    13: !0,
    15: !0
  }, s = {}, c = {
    0: !0,
    1: !0,
    3: !0,
    4: !0,
    6: !0,
    8: !0,
    12: !0,
    13: !0,
    15: !0
  }, h = {
    1: !0
  }, l = [
    [],
    [
      "1",
      "2",
      "3",
      "7",
      "8",
      "9",
      "4",
      "5",
      "6",
      "+",
      "-",
      "*",
      "/",
      "(",
      ")",
      "^",
      "!",
      "P",
      "C",
      "e",
      "0",
      ".",
      ",",
      "n",
      " ",
      "&"
    ],
    ["pi", "ln", "Pi"],
    ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"],
    ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"],
    ["acosh", "atanh", "asinh", "Sigma"]
  ];
  function d(T, m, y, v) {
    for (var x = 0; x < v; x++)
      if (T[y + x] !== m[x])
        return !1;
    return !0;
  }
  e.tokenTypes = {
    FUNCTION_WITH_ONE_ARG: 0,
    NUMBER: 1,
    BINARY_OPERATOR_HIGH_PRECENDENCE: 2,
    CONSTANT: 3,
    OPENING_PARENTHESIS: 4,
    CLOSING_PARENTHESIS: 5,
    DECIMAL: 6,
    POSTFIX_FUNCTION_WITH_ONE_ARG: 7,
    FUNCTION_WITH_N_ARGS: 8,
    BINARY_OPERATOR_LOW_PRECENDENCE: 9,
    BINARY_OPERATOR_PERMUTATION: 10,
    COMMA: 11,
    EVALUATED_FUNCTION: 12,
    EVALUATED_FUNCTION_PARAMETER: 13,
    SPACE: 14
  }, e.addToken = function(T) {
    for (var m = 0; m < T.length; m++) {
      var y = T[m].token.length, v = -1;
      T[m].type === e.tokenTypes.FUNCTION_WITH_N_ARGS && T[m].numberOfArguments === void 0 && (T[m].numberOfArguments = 2), l[y] = l[y] || [];
      for (var x = 0; x < l[y].length; x++)
        if (T[m].token === l[y][x]) {
          v = w(l[y][x], n);
          break;
        }
      v === -1 ? (n.push(T[m]), T[m].precedence = r[T[m].type], l.length <= T[m].token.length && (l[T[m].token.length] = []), l[T[m].token.length].push(T[m].token)) : (n[v] = T[m], T[m].precedence = r[T[m].type]);
    }
  };
  function w(T, m) {
    for (var y = 0; y < m.length; y++)
      if (m[y].token === T) return y;
    return -1;
  }
  function O(T) {
    for (var m = [], y = T.length, v, x, P, D = 0; D < y; D++)
      if (!(D < y - 1 && T[D] === " " && T[D + 1] === " ")) {
        for (v = "", x = T.length - D > l.length - 2 ? l.length - 1 : T.length - D; x > 0; x--)
          if (l[x] !== void 0)
            for (P = 0; P < l[x].length; P++)
              d(T, l[x][P], D, x) && (v = l[x][P], P = l[x].length, x = 0);
        if (D += v.length - 1, v === "")
          throw new e.Exception("Can't understand after " + T.slice(D));
        m.push(n[w(v, n)]);
      }
    return m;
  }
  var _ = {
    value: e.math.changeSign,
    type: 0,
    pre: 21,
    show: "-"
  }, C = {
    value: ")",
    show: ")",
    type: 5,
    pre: 0
  }, R = {
    value: "(",
    type: 4,
    pre: 0,
    show: "("
  };
  return e.lex = function(T, m) {
    var y = [R], v = [], x = T, P = a, D = 0, A = s, X = "", S;
    typeof m < "u" && e.addToken(m);
    var H = {}, F = O(x);
    for (S = 0; S < F.length; S++) {
      var U = F[S];
      if (U.type === 14) {
        if (S > 0 && S < F.length - 1 && F[S + 1].type === 1 && (F[S - 1].type === 1 || F[S - 1].type === 6))
          throw new e.Exception("Unexpected Space");
        continue;
      }
      var K = U.token, q = U.type, G = U.value, Q = U.precedence, Z = U.show, f = y[y.length - 1], g;
      for (g = v.length; g-- && v[g] === 0; )
        if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(q) !== -1) {
          if (P[q] !== !0)
            throw new e.Exception(K + " is not allowed after " + X);
          y.push(C), P = o, A = c, v.pop();
        }
      if (P[q] !== !0)
        throw new e.Exception(K + " is not allowed after " + X);
      if (A[q] === !0 && (q = 2, G = e.math.mul, Z = "&times;", Q = 3, S = S - 1), H = {
        value: G,
        type: q,
        pre: Q,
        show: Z,
        numberOfArguments: U.numberOfArguments
      }, q === 0)
        P = a, A = s, t(v, 2), y.push(H), F[S + 1].type !== 4 && (y.push(R), v.push(2));
      else if (q === 1)
        f.type === 1 ? (f.value += G, t(v, 1)) : y.push(H), P = o, A = u;
      else if (q === 2)
        P = a, A = s, t(v, 2), y.push(H);
      else if (q === 3)
        y.push(H), P = o, A = c;
      else if (q === 4)
        t(v, 1), D++, P = a, A = s, y.push(H);
      else if (q === 5) {
        if (!D)
          throw new e.Exception("Closing parenthesis are more than opening one, wait What!!!");
        D--, P = o, A = c, y.push(H), t(v, 1);
      } else if (q === 6) {
        if (f.hasDec)
          throw new e.Exception("Two decimals are not allowed in one number");
        f.type !== 1 && (f = {
          value: 0,
          type: 1,
          pre: 0
        }, y.push(f)), P = h, t(v, 1), A = s, f.value += G, f.hasDec = !0;
      } else q === 7 && (P = o, A = c, t(v, 1), y.push(H));
      q === 8 ? (P = a, A = s, t(v, U.numberOfArguments + 2), y.push(H), F[S + 1].type !== 4 && (y.push(R), v.push(U.numberOfArguments + 2))) : q === 9 ? (f.type === 9 ? f.value === e.math.add ? (f.value = G, f.show = Z, t(v, 1)) : f.value === e.math.sub && Z === "-" && (f.value = e.math.add, f.show = "+", t(v, 1)) : f.type !== 5 && f.type !== 7 && f.type !== 1 && f.type !== 3 && f.type !== 13 ? K === "-" && (P = a, A = s, t(v, 2).push(2), y.push(_), y.push(R)) : (y.push(H), t(v, 2)), P = a, A = s) : q === 10 ? (P = a, A = s, t(v, 2), y.push(H)) : q === 11 ? (P = a, A = s, y.push(H)) : q === 12 ? (P = a, A = s, t(v, 6), y.push(H), F[S + 1].type !== 4 && (y.push(R), v.push(6))) : q === 13 && (P = o, A = c, y.push(H)), t(v, -1), X = K;
    }
    for (g = v.length; g--; )
      y.push(C);
    if (P[5] !== !0)
      throw new e.Exception("complete the expression");
    for (; D--; )
      y.push(C);
    return y.push(C), new e(y);
  }, un = e, un;
}
var sn, ja;
function Hc() {
  if (ja) return sn;
  ja = 1;
  var e = Uc();
  return e.prototype.toPostfix = function() {
    for (var t = [], n, r, i, a, o, u = [{ value: "(", type: 4, pre: 0 }], s = this.value, c = 1; c < s.length; c++)
      if (s[c].type === 1 || s[c].type === 3 || s[c].type === 13)
        s[c].type === 1 && (s[c].value = Number(s[c].value)), t.push(s[c]);
      else if (s[c].type === 4)
        u.push(s[c]);
      else if (s[c].type === 5)
        for (; (r = u.pop()).type !== 4; )
          t.push(r);
      else if (s[c].type === 11) {
        for (; (r = u.pop()).type !== 4; )
          t.push(r);
        u.push(r);
      } else {
        n = s[c], a = n.pre, o = u[u.length - 1], i = o.pre;
        var h = o.value == "Math.pow" && n.value == "Math.pow";
        if (a > i) u.push(n);
        else {
          for (; i >= a && !h || h && a < i; )
            r = u.pop(), o = u[u.length - 1], t.push(r), i = o.pre, h = n.value == "Math.pow" && o.value == "Math.pow";
          u.push(n);
        }
      }
    return new e(t);
  }, sn = e, sn;
}
var cn, La;
function Yc() {
  if (La) return cn;
  La = 1;
  var e = Hc();
  return e.prototype.postfixEval = function(t) {
    t = t || {}, t.PI = Math.PI, t.E = Math.E;
    for (var n = [], r, i, a, o = this.value, u = typeof t.n < "u", s = 0; s < o.length; s++)
      if (o[s].type === 1)
        n.push({ value: o[s].value, type: 1 });
      else if (o[s].type === 3)
        n.push({ value: t[o[s].value], type: 1 });
      else if (o[s].type === 0)
        typeof n[n.length - 1].type > "u" ? n[n.length - 1].value.push(o[s]) : n[n.length - 1].value = o[s].value(n[n.length - 1].value);
      else if (o[s].type === 7)
        typeof n[n.length - 1].type > "u" ? n[n.length - 1].value.push(o[s]) : n[n.length - 1].value = o[s].value(n[n.length - 1].value);
      else if (o[s].type === 8) {
        for (var c = [], h = 0; h < o[s].numberOfArguments; h++)
          c.push(n.pop().value);
        n.push({ type: 1, value: o[s].value.apply(o[s], c.reverse()) });
      } else o[s].type === 10 ? (r = n.pop(), i = n.pop(), typeof i.type > "u" ? (i.value = i.concat(r), i.value.push(o[s]), n.push(i)) : typeof r.type > "u" ? (r.unshift(i), r.push(o[s]), n.push(r)) : n.push({ type: 1, value: o[s].value(i.value, r.value) })) : o[s].type === 2 || o[s].type === 9 ? (r = n.pop(), i = n.pop(), typeof i.type > "u" ? (i = i.concat(r), i.push(o[s]), n.push(i)) : typeof r.type > "u" ? (r.unshift(i), r.push(o[s]), n.push(r)) : n.push({ type: 1, value: o[s].value(i.value, r.value) })) : o[s].type === 12 ? (r = n.pop(), typeof r.type < "u" && (r = [r]), i = n.pop(), a = n.pop(), n.push({ type: 1, value: o[s].value(a.value, i.value, new e(r)) })) : o[s].type === 13 && (u ? n.push({ value: t[o[s].value], type: 3 }) : n.push([o[s]]));
    if (n.length > 1)
      throw new e.Exception("Uncaught Syntax error");
    return n[0].value > 1e15 ? "Infinity" : parseFloat(n[0].value.toFixed(15));
  }, e.eval = function(t, n, r) {
    return typeof n > "u" ? this.lex(t).toPostfix().postfixEval() : typeof r > "u" ? typeof n.length < "u" ? this.lex(t, n).toPostfix().postfixEval() : this.lex(t).toPostfix().postfixEval(n) : this.lex(t, n).toPostfix().postfixEval(r);
  }, cn = e, cn;
}
var fn, Da;
function Wc() {
  if (Da) return fn;
  Da = 1;
  var e = Yc();
  return e.prototype.formulaEval = function() {
    for (var t, n, r, i = [], a = this.value, o = 0; o < a.length; o++)
      a[o].type === 1 || a[o].type === 3 ? i.push({ value: a[o].type === 3 ? a[o].show : a[o].value, type: 1 }) : a[o].type === 13 ? i.push({ value: a[o].show, type: 1 }) : a[o].type === 0 ? i[i.length - 1] = { value: a[o].show + (a[o].show != "-" ? "(" : "") + i[i.length - 1].value + (a[o].show != "-" ? ")" : ""), type: 0 } : a[o].type === 7 ? i[i.length - 1] = { value: (i[i.length - 1].type != 1 ? "(" : "") + i[i.length - 1].value + (i[i.length - 1].type != 1 ? ")" : "") + a[o].show, type: 7 } : a[o].type === 10 ? (t = i.pop(), n = i.pop(), a[o].show === "P" || a[o].show === "C" ? i.push({ value: "<sup>" + n.value + "</sup>" + a[o].show + "<sub>" + t.value + "</sub>", type: 10 }) : i.push({ value: (n.type != 1 ? "(" : "") + n.value + (n.type != 1 ? ")" : "") + "<sup>" + t.value + "</sup>", type: 1 })) : a[o].type === 2 || a[o].type === 9 ? (t = i.pop(), n = i.pop(), i.push({ value: (n.type != 1 ? "(" : "") + n.value + (n.type != 1 ? ")" : "") + a[o].show + (t.type != 1 ? "(" : "") + t.value + (t.type != 1 ? ")" : ""), type: a[o].type })) : a[o].type === 12 && (t = i.pop(), n = i.pop(), r = i.pop(), i.push({ value: a[o].show + "(" + r.value + "," + n.value + "," + t.value + ")", type: 12 }));
    return i[0].value;
  }, fn = e, fn;
}
var ln, qa;
function zc() {
  if (qa) return ln;
  qa = 1;
  var e = Dc(), t = Ic(), n = Wc(), r = 100, i = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, a;
  ln = o;
  function o(s, c) {
    a = 0, c = Math.pow(10, c === void 0 ? 5 : c), s = s.replace(/\n+/g, " ");
    function h(d, w, O) {
      if (a++ > r)
        throw a = 0, new Error("Call stack overflow for " + O);
      if (d === "")
        throw new Error(w + "(): '" + O + "' must contain a non-whitespace string");
      d = l(d, O);
      var _ = u(d);
      if (_.length > 1 || d.indexOf("var(") > -1)
        return w + "(" + d + ")";
      var C = _[0] || "";
      C === "%" && (d = d.replace(/\b[0-9\.]+%/g, function(m) {
        return parseFloat(m.slice(0, -1)) * 0.01;
      }));
      var R = d.replace(new RegExp(C, "gi"), ""), T;
      try {
        T = n.eval(R);
      } catch {
        return w + "(" + d + ")";
      }
      return C === "%" && (T *= 100), (w.length || C === "%") && (T = Math.round(T * c) / c), T += C, T;
    }
    function l(d, w) {
      d = d.replace(/((?:\-[a-z]+\-)?calc)/g, "");
      for (var O = "", _ = d, C; C = i.exec(_); ) {
        C[0].index > 0 && (O += _.substring(0, C[0].index));
        var R = e("(", ")", _.substring([0].index));
        if (R.body === "")
          throw new Error("'" + d + "' must contain a non-whitespace string");
        var T = h(R.body, "", w);
        O += R.pre + T, _ = R.post;
      }
      return O + _;
    }
    return t(s, /((?:\-[a-z]+\-)?calc)\(/, h);
  }
  function u(s) {
    for (var c = [], h = [], l = /[\.0-9]([%a-z]+)/gi, d = l.exec(s); d; )
      !d || !d[1] || (h.indexOf(d[1].toLowerCase()) === -1 && (c.push(d[1]), h.push(d[1].toLowerCase())), d = l.exec(s));
    return c;
  }
  return ln;
}
var Gc = zc();
const hn = /* @__PURE__ */ St(Gc);
var pn, Ia;
function Vc() {
  if (Ia) return pn;
  Ia = 1;
  var e = typeof at == "object" && at && at.Object === Object && at;
  return pn = e, pn;
}
var dn, Fa;
function Ar() {
  if (Fa) return dn;
  Fa = 1;
  var e = Vc(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return dn = n, dn;
}
var vn, Ua;
function po() {
  if (Ua) return vn;
  Ua = 1;
  var e = Ar(), t = e.Symbol;
  return vn = t, vn;
}
var gn, Ha;
function Bc() {
  if (Ha) return gn;
  Ha = 1;
  var e = po(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, i = e ? e.toStringTag : void 0;
  function a(o) {
    var u = n.call(o, i), s = o[i];
    try {
      o[i] = void 0;
      var c = !0;
    } catch {
    }
    var h = r.call(o);
    return c && (u ? o[i] = s : delete o[i]), h;
  }
  return gn = a, gn;
}
var mn, Ya;
function Zc() {
  if (Ya) return mn;
  Ya = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return mn = n, mn;
}
var yn, Wa;
function Xc() {
  if (Wa) return yn;
  Wa = 1;
  var e = po(), t = Bc(), n = Zc(), r = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function o(u) {
    return u == null ? u === void 0 ? i : r : a && a in Object(u) ? t(u) : n(u);
  }
  return yn = o, yn;
}
var bn, za;
function vo() {
  if (za) return bn;
  za = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return bn = e, bn;
}
var xn, Ga;
function Jc() {
  if (Ga) return xn;
  Ga = 1;
  var e = Xc(), t = vo(), n = "[object AsyncFunction]", r = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function o(u) {
    if (!t(u))
      return !1;
    var s = e(u);
    return s == r || s == i || s == n || s == a;
  }
  return xn = o, xn;
}
var wn, Va;
function Kc() {
  if (Va) return wn;
  Va = 1;
  var e = Ar(), t = e["__core-js_shared__"];
  return wn = t, wn;
}
var Tn, Ba;
function Qc() {
  if (Ba) return Tn;
  Ba = 1;
  var e = Kc(), t = function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }();
  function n(r) {
    return !!t && t in r;
  }
  return Tn = n, Tn;
}
var _n, Za;
function ef() {
  if (Za) return _n;
  Za = 1;
  var e = Function.prototype, t = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return _n = n, _n;
}
var Mn, Xa;
function tf() {
  if (Xa) return Mn;
  Xa = 1;
  var e = Jc(), t = Qc(), n = vo(), r = ef(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, o = Function.prototype, u = Object.prototype, s = o.toString, c = u.hasOwnProperty, h = RegExp(
    "^" + s.call(c).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!n(d) || t(d))
      return !1;
    var w = e(d) ? h : a;
    return w.test(r(d));
  }
  return Mn = l, Mn;
}
var Cn, Ja;
function nf() {
  if (Ja) return Cn;
  Ja = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return Cn = e, Cn;
}
var Sn, Ka;
function go() {
  if (Ka) return Sn;
  Ka = 1;
  var e = tf(), t = nf();
  function n(r, i) {
    var a = t(r, i);
    return e(a) ? a : void 0;
  }
  return Sn = n, Sn;
}
var On, Qa;
function jt() {
  if (Qa) return On;
  Qa = 1;
  var e = go(), t = e(Object, "create");
  return On = t, On;
}
var En, ei;
function rf() {
  if (ei) return En;
  ei = 1;
  var e = jt();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return En = t, En;
}
var kn, ti;
function af() {
  if (ti) return kn;
  ti = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return kn = e, kn;
}
var Pn, ni;
function of() {
  if (ni) return Pn;
  ni = 1;
  var e = jt(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var u = o[a];
      return u === t ? void 0 : u;
    }
    return r.call(o, a) ? o[a] : void 0;
  }
  return Pn = i, Pn;
}
var Rn, ri;
function uf() {
  if (ri) return Rn;
  ri = 1;
  var e = jt(), t = Object.prototype, n = t.hasOwnProperty;
  function r(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : n.call(a, i);
  }
  return Rn = r, Rn;
}
var Nn, ai;
function sf() {
  if (ai) return Nn;
  ai = 1;
  var e = jt(), t = "__lodash_hash_undefined__";
  function n(r, i) {
    var a = this.__data__;
    return this.size += this.has(r) ? 0 : 1, a[r] = e && i === void 0 ? t : i, this;
  }
  return Nn = n, Nn;
}
var An, ii;
function cf() {
  if (ii) return An;
  ii = 1;
  var e = rf(), t = af(), n = of(), r = uf(), i = sf();
  function a(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = i, An = a, An;
}
var $n, oi;
function ff() {
  if (oi) return $n;
  oi = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return $n = e, $n;
}
var jn, ui;
function lf() {
  if (ui) return jn;
  ui = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return jn = e, jn;
}
var Ln, si;
function Lt() {
  if (si) return Ln;
  si = 1;
  var e = lf();
  function t(n, r) {
    for (var i = n.length; i--; )
      if (e(n[i][0], r))
        return i;
    return -1;
  }
  return Ln = t, Ln;
}
var Dn, ci;
function hf() {
  if (ci) return Dn;
  ci = 1;
  var e = Lt(), t = Array.prototype, n = t.splice;
  function r(i) {
    var a = this.__data__, o = e(a, i);
    if (o < 0)
      return !1;
    var u = a.length - 1;
    return o == u ? a.pop() : n.call(a, o, 1), --this.size, !0;
  }
  return Dn = r, Dn;
}
var qn, fi;
function pf() {
  if (fi) return qn;
  fi = 1;
  var e = Lt();
  function t(n) {
    var r = this.__data__, i = e(r, n);
    return i < 0 ? void 0 : r[i][1];
  }
  return qn = t, qn;
}
var In, li;
function df() {
  if (li) return In;
  li = 1;
  var e = Lt();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return In = t, In;
}
var Fn, hi;
function vf() {
  if (hi) return Fn;
  hi = 1;
  var e = Lt();
  function t(n, r) {
    var i = this.__data__, a = e(i, n);
    return a < 0 ? (++this.size, i.push([n, r])) : i[a][1] = r, this;
  }
  return Fn = t, Fn;
}
var Un, pi;
function gf() {
  if (pi) return Un;
  pi = 1;
  var e = ff(), t = hf(), n = pf(), r = df(), i = vf();
  function a(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = i, Un = a, Un;
}
var Hn, di;
function mf() {
  if (di) return Hn;
  di = 1;
  var e = go(), t = Ar(), n = e(t, "Map");
  return Hn = n, Hn;
}
var Yn, vi;
function yf() {
  if (vi) return Yn;
  vi = 1;
  var e = cf(), t = gf(), n = mf();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return Yn = r, Yn;
}
var Wn, gi;
function bf() {
  if (gi) return Wn;
  gi = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return Wn = e, Wn;
}
var zn, mi;
function Dt() {
  if (mi) return zn;
  mi = 1;
  var e = bf();
  function t(n, r) {
    var i = n.__data__;
    return e(r) ? i[typeof r == "string" ? "string" : "hash"] : i.map;
  }
  return zn = t, zn;
}
var Gn, yi;
function xf() {
  if (yi) return Gn;
  yi = 1;
  var e = Dt();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return Gn = t, Gn;
}
var Vn, bi;
function wf() {
  if (bi) return Vn;
  bi = 1;
  var e = Dt();
  function t(n) {
    return e(this, n).get(n);
  }
  return Vn = t, Vn;
}
var Bn, xi;
function Tf() {
  if (xi) return Bn;
  xi = 1;
  var e = Dt();
  function t(n) {
    return e(this, n).has(n);
  }
  return Bn = t, Bn;
}
var Zn, wi;
function _f() {
  if (wi) return Zn;
  wi = 1;
  var e = Dt();
  function t(n, r) {
    var i = e(this, n), a = i.size;
    return i.set(n, r), this.size += i.size == a ? 0 : 1, this;
  }
  return Zn = t, Zn;
}
var Xn, Ti;
function Mf() {
  if (Ti) return Xn;
  Ti = 1;
  var e = yf(), t = xf(), n = wf(), r = Tf(), i = _f();
  function a(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = n, a.prototype.has = r, a.prototype.set = i, Xn = a, Xn;
}
var Jn, _i;
function Cf() {
  if (_i) return Jn;
  _i = 1;
  var e = Mf(), t = "Expected a function";
  function n(r, i) {
    if (typeof r != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var a = function() {
      var o = arguments, u = i ? i.apply(this, o) : o[0], s = a.cache;
      if (s.has(u))
        return s.get(u);
      var c = r.apply(this, o);
      return a.cache = s.set(u, c) || s, c;
    };
    return a.cache = new (n.Cache || e)(), a;
  }
  return n.Cache = e, Jn = n, Jn;
}
var Sf = Cf();
const Of = /* @__PURE__ */ St(Sf);
var Mi = "__react_svg_text_measurement_id";
function Ef(e, t) {
  try {
    var n = document.getElementById(Mi);
    if (!n) {
      var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      r.setAttribute("aria-hidden", "true"), r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", n = document.createElementNS("http://www.w3.org/2000/svg", "text"), n.setAttribute("id", Mi), r.appendChild(n), document.body.appendChild(r);
    }
    return Object.assign(n.style, t), n.textContent = e, n.getComputedTextLength();
  } catch {
    return null;
  }
}
const Ci = Of(Ef, function(e, t) {
  return e + "_" + JSON.stringify(t);
});
var kf = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function Pf(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Kn(e) {
  return typeof e == "number";
}
function Si(e) {
  return (
    // number that is not NaN or Infinity
    typeof e == "number" && Number.isFinite(e) || // for percentage
    typeof e == "string"
  );
}
function Rf(e) {
  var t = e.verticalAnchor, n = t === void 0 ? "end" : t, r = e.scaleToFit, i = r === void 0 ? !1 : r, a = e.angle, o = e.width, u = e.lineHeight, s = u === void 0 ? "1em" : u, c = e.capHeight, h = c === void 0 ? "0.71em" : c, l = e.children, d = e.style, w = Pf(e, kf), O = w.x, _ = O === void 0 ? 0 : O, C = w.y, R = C === void 0 ? 0 : C, T = !Si(_) || !Si(R), m = rt(function() {
    var A = l == null ? [] : l.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: A.map(function(X) {
        return {
          word: X,
          wordWidth: Ci(X, d) || 0
        };
      }),
      spaceWidth: Ci(" ", d) || 0
    };
  }, [l, d]), y = m.wordsWithWidth, v = m.spaceWidth, x = rt(function() {
    return T ? [] : o || i ? y.reduce(function(A, X) {
      var S = X.word, H = X.wordWidth, F = A[A.length - 1];
      if (F && (o == null || i || (F.width || 0) + H + v < o))
        F.words.push(S), F.width = F.width || 0, F.width += H + v;
      else {
        var U = {
          words: [S],
          width: H
        };
        A.push(U);
      }
      return A;
    }, []) : [{
      words: l == null ? [] : l.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [T, o, i, l, y, v]), P = rt(function() {
    var A = T ? "" : hn(n === "start" ? "calc(" + h + ")" : n === "middle" ? "calc(" + (x.length - 1) / 2 + " * -" + s + " + (" + h + " / 2))" : "calc(" + (x.length - 1) + " * -" + s + ")");
    return A;
  }, [T, n, h, x.length, s]), D = rt(function() {
    var A = [];
    if (T)
      return "";
    if (Kn(_) && Kn(R) && Kn(o) && i && x.length > 0) {
      var X = x[0].width || 1, S = i === "shrink-only" ? Math.min(o / X, 1) : o / X, H = S, F = _ - S * _, U = R - H * R;
      A.push("matrix(" + S + ", 0, 0, " + H + ", " + F + ", " + U + ")");
    }
    return a && A.push("rotate(" + a + ", " + _ + ", " + R + ")"), A.length > 0 ? A.join(" ") : "";
  }, [T, _, R, o, i, x, a]);
  return {
    wordsByLines: x,
    startDy: P,
    transform: D
  };
}
var Nf = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xr.apply(this, arguments);
}
function Af(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var $f = {
  overflow: "visible"
};
function mo(e) {
  var t = e.dx, n = t === void 0 ? 0 : t, r = e.dy, i = r === void 0 ? 0 : r, a = e.textAnchor, o = a === void 0 ? "start" : a, u = e.innerRef, s = e.innerTextRef;
  e.verticalAnchor, e.angle;
  var c = e.lineHeight, h = c === void 0 ? "1em" : c;
  e.scaleToFit, e.capHeight, e.width;
  var l = Af(e, Nf), d = l.x, w = d === void 0 ? 0 : d, O = l.fontSize, _ = Rf(e), C = _.wordsByLines, R = _.startDy, T = _.transform;
  return /* @__PURE__ */ ee.createElement("svg", {
    ref: u,
    x: n,
    y: i,
    fontSize: O,
    style: $f
  }, C.length > 0 ? /* @__PURE__ */ ee.createElement("text", xr({
    ref: s,
    transform: T
  }, l, {
    textAnchor: o
  }), C.map(function(m, y) {
    return /* @__PURE__ */ ee.createElement("tspan", {
      key: y,
      x: w,
      dy: y === 0 ? R : h
    }, m.words.join(" "));
  })) : null);
}
var fe = {
  top: "top",
  left: "left",
  bottom: "bottom"
};
function jf(e) {
  var t = e.labelOffset, n = e.labelProps, r = e.orientation, i = e.range, a = e.tickLabelFontSize, o = e.tickLength, u = r === fe.left || r === fe.top ? -1 : 1, s, c, h;
  if (r === fe.top || r === fe.bottom) {
    var l = r === fe.bottom && typeof n.fontSize == "number" ? n.fontSize : 0;
    s = (Number(i[0]) + Number(i[i.length - 1])) / 2, c = u * (o + t + a + l);
  } else
    s = u * ((Number(i[0]) + Number(i[i.length - 1])) / 2), c = -(o + t), h = "rotate(" + u * 90 + ")";
  return {
    x: s,
    y: c,
    transform: h
  };
}
function Ze() {
  return Ze = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ze.apply(this, arguments);
}
function Lf(e) {
  var t = e.hideTicks, n = e.horizontal, r = e.orientation, i = e.tickClassName, a = e.tickComponent, o = e.tickLabelProps, u = e.tickStroke, s = u === void 0 ? "#222" : u, c = e.tickTransform, h = e.ticks, l = e.strokeWidth, d = e.tickLineProps;
  return h.map(function(w) {
    var O, _ = w.value, C = w.index, R = w.from, T = w.to, m = w.formattedValue, y = (O = o[C]) != null ? O : {}, v = Math.max(10, typeof y.fontSize == "number" && y.fontSize || 0), x = T.y + (n && r !== fe.top ? v : 0);
    return /* @__PURE__ */ ee.createElement($t, {
      key: "visx-tick-" + _ + "-" + C,
      className: ge("visx-axis-tick", i),
      transform: c
    }, !t && /* @__PURE__ */ ee.createElement(ho, Ze({
      from: R,
      to: T,
      stroke: s,
      strokeWidth: l,
      strokeLinecap: "square"
    }, d)), a ? a(Ze({}, y, {
      x: T.x,
      y: x,
      formattedValue: m
    })) : /* @__PURE__ */ ee.createElement(mo, Ze({
      x: T.x,
      y: x
    }, y), m));
  });
}
function Xe() {
  return Xe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xe.apply(this, arguments);
}
var Oi = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function Df(e) {
  var t = e.axisFromPoint, n = e.axisLineClassName, r = e.axisToPoint, i = e.hideAxisLine, a = e.hideTicks, o = e.horizontal, u = e.label, s = u === void 0 ? "" : u, c = e.labelClassName, h = e.labelOffset, l = h === void 0 ? 14 : h, d = e.labelProps, w = e.orientation, O = w === void 0 ? fe.bottom : w, _ = e.scale, C = e.stroke, R = C === void 0 ? "#222" : C, T = e.strokeDasharray, m = e.strokeWidth, y = m === void 0 ? 1 : m, v = e.tickClassName, x = e.tickComponent, P = e.tickLineProps, D = e.tickLabelProps, A = e.tickLength, X = A === void 0 ? 8 : A, S = e.tickStroke, H = S === void 0 ? "#222" : S, F = e.tickTransform, U = e.ticks, K = e.ticksComponent, q = K === void 0 ? Lf : K, G = Xe({}, Oi, d), Q = Xe({}, Oi, typeof D == "object" ? D : null), Z = U.map(function(g) {
    var E = g.value, k = g.index;
    return typeof D == "function" ? D(E, k, U) : Q;
  }), f = Math.max.apply(Math, [10].concat(Z.map(function(g) {
    return typeof g.fontSize == "number" ? g.fontSize : 0;
  })));
  return /* @__PURE__ */ ee.createElement(ee.Fragment, null, q({
    hideTicks: a,
    horizontal: o,
    orientation: O,
    scale: _,
    tickClassName: v,
    tickComponent: x,
    tickLabelProps: Z,
    tickStroke: H,
    tickTransform: F,
    ticks: U,
    strokeWidth: y,
    tickLineProps: P
  }), !i && /* @__PURE__ */ ee.createElement(ho, {
    className: ge("visx-axis-line", n),
    from: t,
    to: r,
    stroke: R,
    strokeWidth: y,
    strokeDasharray: T
  }), s && /* @__PURE__ */ ee.createElement(mo, Xe({
    className: ge("visx-axis-label", c)
  }, jf({
    labelOffset: l,
    labelProps: G,
    orientation: O,
    range: _.range(),
    tickLabelFontSize: f,
    tickLength: X
  }), G), s));
}
function qf(e, t) {
  t === void 0 && (t = "center");
  var n = e;
  if (t !== "start" && "bandwidth" in n) {
    var r = n.bandwidth();
    return t === "center" && (r /= 2), n.round() && (r = Math.round(r)), function(i) {
      var a = n(i);
      return typeof a == "number" ? a + r : a;
    };
  }
  return e;
}
function If(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : pc;
}
var wr = /* @__PURE__ */ function() {
  function e(n) {
    var r = n.x, i = r === void 0 ? 0 : r, a = n.y, o = a === void 0 ? 0 : a;
    this.x = 0, this.y = 0, this.x = i, this.y = o;
  }
  var t = e.prototype;
  return t.value = function() {
    return {
      x: this.x,
      y: this.y
    };
  }, t.toArray = function() {
    return [this.x, this.y];
  }, e;
}();
function ht(e, t) {
  var n = e.x, r = e.y;
  return new wr(t ? {
    x: n,
    y: r
  } : {
    x: r,
    y: n
  });
}
function Tr() {
  return Tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tr.apply(this, arguments);
}
var Qn = 0;
function Ff(e) {
  return e === void 0 && (e = Qn), typeof e == "number" ? {
    start: e,
    end: e
  } : Tr({
    start: Qn,
    end: Qn
  }, e);
}
var Uf = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function _r() {
  return _r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _r.apply(this, arguments);
}
function Hf(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function yo(e) {
  var t = e.children, n = t === void 0 ? Df : t, r = e.axisClassName, i = e.hideAxisLine, a = i === void 0 ? !1 : i, o = e.hideTicks, u = o === void 0 ? !1 : o, s = e.hideZero, c = s === void 0 ? !1 : s, h = e.innerRef, l = e.left, d = l === void 0 ? 0 : l, w = e.numTicks, O = w === void 0 ? 10 : w, _ = e.orientation, C = _ === void 0 ? fe.bottom : _, R = e.rangePadding, T = R === void 0 ? 0 : R, m = e.scale, y = e.tickFormat, v = e.tickLength, x = v === void 0 ? 8 : v, P = e.tickValues, D = e.top, A = D === void 0 ? 0 : D, X = Hf(e, Uf), S = y ?? If(m), H = C === fe.left, F = C === fe.top, U = F || C === fe.bottom, K = qf(m), q = H || F ? -1 : 1, G = m.range(), Q = Ff(T), Z = ht({
    x: Number(G[0]) + 0.5 - Q.start,
    y: 0
  }, U), f = ht({
    x: Number(G[G.length - 1]) + 0.5 + Q.end,
    y: 0
  }, U), g = (P ?? hc(m, O)).filter(function(k) {
    return !c || k !== 0 && k !== "0";
  }).map(function(k, N) {
    return {
      value: k,
      index: N
    };
  }), E = g.map(function(k) {
    var N = k.value, L = k.index, I = lc(K(N));
    return {
      value: N,
      index: L,
      from: ht({
        x: I,
        y: 0
      }, U),
      to: ht({
        x: I,
        y: x * q
      }, U),
      formattedValue: S(N, L, g)
    };
  });
  return /* @__PURE__ */ ee.createElement($t, {
    className: ge("visx-axis", r),
    innerRef: h,
    top: A,
    left: d
  }, n(_r({}, X, {
    axisFromPoint: Z,
    axisToPoint: f,
    hideAxisLine: a,
    hideTicks: u,
    hideZero: c,
    horizontal: U,
    numTicks: O,
    orientation: C,
    rangePadding: T,
    scale: m,
    tickFormat: S,
    tickLength: x,
    tickPosition: K,
    tickSign: q,
    ticks: E
  })));
}
var Yf = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function Tt() {
  return Tt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Tt.apply(this, arguments);
}
function Wf(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var zf = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function Gf(e) {
  var t = e.axisClassName, n = e.labelOffset, r = n === void 0 ? 36 : n, i = e.tickLength, a = i === void 0 ? 8 : i, o = e.tickLabelProps, u = Wf(e, Yf), s = typeof o == "function" ? o : Tt({}, zf, o);
  return /* @__PURE__ */ ee.createElement(yo, Tt({
    axisClassName: ge("visx-axis-left", t),
    labelOffset: r,
    orientation: fe.left,
    tickLabelProps: s,
    tickLength: a
  }, u));
}
var Vf = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _t.apply(this, arguments);
}
function Bf(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Zf = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Xf(e) {
  var t = e.axisClassName, n = e.labelOffset, r = n === void 0 ? 8 : n, i = e.tickLength, a = i === void 0 ? 8 : i, o = e.tickLabelProps, u = Bf(e, Vf), s = typeof o == "function" ? o : _t({}, Zf, o);
  return /* @__PURE__ */ ee.createElement(yo, _t({
    axisClassName: ge("visx-axis-bottom", t),
    labelOffset: r,
    orientation: fe.bottom,
    tickLabelProps: s,
    tickLength: a
  }, u));
}
var Jf = ["tooltipOpen"];
function Kf(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Mt() {
  return Mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Mt.apply(this, arguments);
}
function Qf(e) {
  var t = Be(Mt({
    tooltipOpen: !1
  }, e)), n = t[0], r = t[1], i = Lr(function(o) {
    return r(typeof o == "function" ? function(u) {
      u.tooltipOpen;
      var s = Kf(u, Jf);
      return Mt({}, o(s), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: o.tooltipLeft,
      tooltipTop: o.tooltipTop,
      tooltipData: o.tooltipData
    });
  }, [r]), a = Lr(function() {
    return r({
      tooltipOpen: !1,
      tooltipLeft: void 0,
      tooltipTop: void 0,
      tooltipData: void 0
    });
  }, [r]);
  return {
    tooltipOpen: n.tooltipOpen,
    tooltipLeft: n.tooltipLeft,
    tooltipTop: n.tooltipTop,
    tooltipData: n.tooltipData,
    updateTooltip: r,
    showTooltip: i,
    hideTooltip: a
  };
}
var el = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ct.apply(this, arguments);
}
function tl(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var bo = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, $r = /* @__PURE__ */ ee.forwardRef(function(e, t) {
  var n = e.className, r = e.top, i = e.left, a = e.offsetLeft, o = a === void 0 ? 10 : a, u = e.offsetTop, s = u === void 0 ? 10 : u, c = e.style, h = c === void 0 ? bo : c, l = e.children, d = e.unstyled, w = d === void 0 ? !1 : d, O = e.applyPositionStyle, _ = O === void 0 ? !1 : O, C = tl(e, el);
  return /* @__PURE__ */ ee.createElement("div", Ct({
    ref: t,
    className: ge("visx-tooltip", n),
    style: Ct({
      top: r == null || s == null ? r : r + s,
      left: i == null || o == null ? i : i + o
    }, _ && {
      position: "absolute"
    }, !w && h)
  }, C), l);
});
$r.propTypes = {
  children: oe.node,
  className: oe.string,
  left: oe.number,
  offsetLeft: oe.number,
  offsetTop: oe.number,
  top: oe.number,
  applyPositionStyle: oe.bool,
  unstyled: oe.bool
};
$r.displayName = "Tooltip";
function nl(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function rl(e) {
  return !!e && "createSVGPoint" in e;
}
function al(e) {
  return !!e && "getScreenCTM" in e;
}
function il(e) {
  return !!e && "changedTouches" in e;
}
function ol(e) {
  return !!e && "clientX" in e;
}
function ul(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function Je() {
  return Je = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Je.apply(this, arguments);
}
var er = {
  x: 0,
  y: 0
};
function sl(e) {
  if (!e) return Je({}, er);
  if (il(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : Je({}, er);
  if (ol(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, n = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return n ? {
    x: n.x + n.width / 2,
    y: n.y + n.height / 2
  } : Je({}, er);
}
function cl(e, t) {
  if (!e || !t) return null;
  var n = sl(t), r = nl(e) ? e.ownerSVGElement : e, i = al(r) ? r.getScreenCTM() : null;
  if (rl(r) && i) {
    var a = r.createSVGPoint();
    return a.x = n.x, a.y = n.y, a = a.matrixTransform(i.inverse()), new wr({
      x: a.x,
      y: a.y
    });
  }
  var o = e.getBoundingClientRect();
  return new wr({
    x: n.x - o.left - e.clientLeft,
    y: n.y - o.top - e.clientTop
  });
}
function fl(e, t) {
  if (ul(e)) {
    var n = e, r = n.target;
    if (r) return cl(r, n);
  }
  return null;
}
const tr = 800, Ve = 400, se = { top: 20, right: 30, bottom: 50, left: 60 }, hl = () => {
  const [e, t] = Be([]), [n, r] = Be(!1), [i, a] = Be(!1), [o, u] = Be(0), {
    showTooltip: s,
    hideTooltip: c,
    tooltipData: h,
    tooltipLeft: l = 0,
    tooltipTop: d = 0
  } = Qf(), w = async () => {
    a(!0);
    try {
      const m = "MH2ZSQHGFWEVXGXZ", y = "AAPL", x = await (await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${y}&apikey=${m}`
      )).json();
      if (x["Error Message"] || !x["Time Series (Daily)"])
        throw new Error("Alpha Vantage API error");
      const P = Object.entries(
        x["Time Series (Daily)"]
      ).map(([D, A]) => ({
        date: new Date(D),
        price: parseFloat(A["4. close"])
      })).sort((D, A) => D.date.getTime() - A.date.getTime());
      t(P), r(!1);
    } catch (m) {
      console.error("Fetch failed:", m);
    } finally {
      a(!1);
    }
  };
  Dr(() => {
    w();
  }, []), Dr(() => {
    if (o === 0) return;
    const m = setInterval(() => {
      u((y) => Math.max(y - 1, 0));
    }, 1e3);
    return () => clearInterval(m);
  }, [o]);
  const O = () => {
    o > 0 || i || (w(), u(60));
  };
  if (!e.length) return /* @__PURE__ */ te.jsx("p", { children: "Loading chart..." });
  const _ = fc({
    domain: [
      Math.min(...e.map((m) => m.date.getTime())),
      Math.max(...e.map((m) => m.date.getTime()))
    ],
    range: [se.left, tr - se.right]
  }), C = sc({
    domain: [
      Math.min(...e.map((m) => m.price)) - 10,
      Math.max(...e.map((m) => m.price)) + 10
    ],
    range: [Ve - se.bottom, se.top]
  }), R = Ot((m) => m.date).left, T = (m) => {
    const { x: y } = fl(m) || { x: 0 }, v = _.invert(y), x = R(e, v, 1), P = e[x - 1], D = e[x], A = v.getTime() - P.date.getTime() > D.date.getTime() - v.getTime() ? D : P;
    s({
      tooltipData: A,
      tooltipLeft: _(A.date),
      tooltipTop: C(A.price)
    });
  };
  return /* @__PURE__ */ te.jsxs("div", { children: [
    n && /* @__PURE__ */ te.jsx(
      "div",
      {
        style: {
          padding: "8px",
          background: "#fff3cd",
          color: "#856404",
          fontSize: "14px",
          marginBottom: "1rem",
          border: "1px solid #ffeeba"
        },
        children: "⚠️ Using mock data – check your API key or network connection."
      }
    ),
    /* @__PURE__ */ te.jsx("div", { style: { marginBottom: "1rem" }, children: /* @__PURE__ */ te.jsx(
      "button",
      {
        onClick: O,
        disabled: o > 0 || i,
        style: {
          padding: "8px 16px",
          fontSize: "14px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: o > 0 || i ? "not-allowed" : "pointer",
          opacity: o > 0 || i ? 0.6 : 1
        },
        children: i ? "Loading..." : o > 0 ? `Cooldown: ${o}s` : "Refresh Data"
      }
    ) }),
    /* @__PURE__ */ te.jsxs("svg", { width: tr, height: Ve, children: [
      /* @__PURE__ */ te.jsxs($t, { children: [
        /* @__PURE__ */ te.jsx(
          Lc,
          {
            data: e,
            x: (m) => _(m.date),
            y: (m) => C(m.price),
            stroke: "#007bff",
            strokeWidth: 2
          }
        ),
        /* @__PURE__ */ te.jsx(Xf, { top: Ve - se.bottom, scale: _ }),
        /* @__PURE__ */ te.jsx(Gf, { left: se.left, scale: C }),
        /* @__PURE__ */ te.jsx(
          "rect",
          {
            x: se.left,
            y: se.top,
            width: tr - se.left - se.right,
            height: Ve - se.top - se.bottom,
            fill: "transparent",
            onMouseMove: T,
            onMouseLeave: c
          }
        ),
        h && /* @__PURE__ */ te.jsxs(te.Fragment, { children: [
          /* @__PURE__ */ te.jsx(
            "line",
            {
              x1: l,
              x2: l,
              y1: se.top,
              y2: Ve - se.bottom,
              stroke: "gray",
              strokeDasharray: "4"
            }
          ),
          /* @__PURE__ */ te.jsx(
            "circle",
            {
              cx: l,
              cy: d,
              r: 4,
              fill: "#007bff",
              stroke: "white"
            }
          )
        ] })
      ] }),
      h && /* @__PURE__ */ te.jsxs(
        $r,
        {
          top: d - 10,
          left: l + 10,
          style: bo,
          children: [
            /* @__PURE__ */ te.jsx("div", { children: /* @__PURE__ */ te.jsx("strong", { children: h.date.toDateString() }) }),
            /* @__PURE__ */ te.jsxs("div", { children: [
              "Price: $",
              h.price.toFixed(2)
            ] })
          ]
        }
      )
    ] })
  ] });
};
export {
  hl as StockChart
};
