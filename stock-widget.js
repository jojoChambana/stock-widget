import Wt, { useMemo as Iv, useState as Kp, useCallback as P2, useEffect as I2 } from "react";
import Wx from "react-dom";
var eg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function n0(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var tg = { exports: {} }, Gp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eE;
function JA() {
  if (eE) return Gp;
  eE = 1;
  var c = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function h(m, g, v) {
    var T = null;
    if (v !== void 0 && (T = "" + v), g.key !== void 0 && (T = "" + g.key), "key" in g) {
      v = {};
      for (var A in g)
        A !== "key" && (v[A] = g[A]);
    } else v = g;
    return g = v.ref, {
      $$typeof: c,
      type: m,
      key: T,
      ref: g !== void 0 ? g : null,
      props: v
    };
  }
  return Gp.Fragment = s, Gp.jsx = h, Gp.jsxs = h, Gp;
}
var Vp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tE;
function KA() {
  return tE || (tE = 1, process.env.NODE_ENV !== "production" && function() {
    function c(O) {
      if (O == null) return null;
      if (typeof O == "function")
        return O.$$typeof === Ve ? null : O.displayName || O.name || null;
      if (typeof O == "string") return O;
      switch (O) {
        case ge:
          return "Fragment";
        case Se:
          return "Profiler";
        case ye:
          return "StrictMode";
        case k:
          return "Suspense";
        case ie:
          return "SuspenseList";
        case fe:
          return "Activity";
      }
      if (typeof O == "object")
        switch (typeof O.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), O.$$typeof) {
          case pe:
            return "Portal";
          case P:
            return (O.displayName || "Context") + ".Provider";
          case me:
            return (O._context.displayName || "Context") + ".Consumer";
          case ne:
            var $ = O.render;
            return O = O.displayName, O || (O = $.displayName || $.name || "", O = O !== "" ? "ForwardRef(" + O + ")" : "ForwardRef"), O;
          case ve:
            return $ = O.displayName || null, $ !== null ? $ : c(O.type) || "Memo";
          case He:
            $ = O._payload, O = O._init;
            try {
              return c(O($));
            } catch {
            }
        }
      return null;
    }
    function s(O) {
      return "" + O;
    }
    function h(O) {
      try {
        s(O);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var le = $.error, se = typeof Symbol == "function" && Symbol.toStringTag && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return le.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          se
        ), s(O);
      }
    }
    function m(O) {
      if (O === ge) return "<>";
      if (typeof O == "object" && O !== null && O.$$typeof === He)
        return "<...>";
      try {
        var $ = c(O);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function g() {
      var O = de.A;
      return O === null ? null : O.getOwner();
    }
    function v() {
      return Error("react-stack-top-frame");
    }
    function T(O) {
      if (Te.call(O, "key")) {
        var $ = Object.getOwnPropertyDescriptor(O, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return O.key !== void 0;
    }
    function A(O, $) {
      function le() {
        et || (et = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      le.isReactWarning = !0, Object.defineProperty(O, "key", {
        get: le,
        configurable: !0
      });
    }
    function x() {
      var O = c(this.type);
      return C[O] || (C[O] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), O = this.props.ref, O !== void 0 ? O : null;
    }
    function U(O, $, le, se, be, De, Ae, Xe) {
      return le = De.ref, O = {
        $$typeof: ce,
        type: O,
        key: $,
        props: De,
        _owner: be
      }, (le !== void 0 ? le : null) !== null ? Object.defineProperty(O, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(O, "ref", { enumerable: !1, value: null }), O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(O, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(O, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ae
      }), Object.defineProperty(O, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Xe
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    }
    function q(O, $, le, se, be, De, Ae, Xe) {
      var we = $.children;
      if (we !== void 0)
        if (se)
          if (_e(we)) {
            for (se = 0; se < we.length; se++)
              _(we[se]);
            Object.freeze && Object.freeze(we);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(we);
      if (Te.call($, "key")) {
        we = c(O);
        var re = Object.keys($).filter(function(Ye) {
          return Ye !== "key";
        });
        se = 0 < re.length ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}", Me[we + se] || (re = 0 < re.length ? "{" + re.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          se,
          we,
          re,
          we
        ), Me[we + se] = !0);
      }
      if (we = null, le !== void 0 && (h(le), we = "" + le), T($) && (h($.key), we = "" + $.key), "key" in $) {
        le = {};
        for (var Ee in $)
          Ee !== "key" && (le[Ee] = $[Ee]);
      } else le = $;
      return we && A(
        le,
        typeof O == "function" ? O.displayName || O.name || "Unknown" : O
      ), U(
        O,
        we,
        De,
        be,
        g(),
        le,
        Ae,
        Xe
      );
    }
    function _(O) {
      typeof O == "object" && O !== null && O.$$typeof === ce && O._store && (O._store.validated = 1);
    }
    var Y = Wt, ce = Symbol.for("react.transitional.element"), pe = Symbol.for("react.portal"), ge = Symbol.for("react.fragment"), ye = Symbol.for("react.strict_mode"), Se = Symbol.for("react.profiler"), me = Symbol.for("react.consumer"), P = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), ve = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), Ve = Symbol.for("react.client.reference"), de = Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Te = Object.prototype.hasOwnProperty, _e = Array.isArray, qe = console.createTask ? console.createTask : function() {
      return null;
    };
    Y = {
      "react-stack-bottom-frame": function(O) {
        return O();
      }
    };
    var et, C = {}, K = Y["react-stack-bottom-frame"].bind(
      Y,
      v
    )(), oe = qe(m(v)), Me = {};
    Vp.Fragment = ge, Vp.jsx = function(O, $, le, se, be) {
      var De = 1e4 > de.recentlyCreatedOwnerStacks++;
      return q(
        O,
        $,
        le,
        !1,
        se,
        be,
        De ? Error("react-stack-top-frame") : K,
        De ? qe(m(O)) : oe
      );
    }, Vp.jsxs = function(O, $, le, se, be) {
      var De = 1e4 > de.recentlyCreatedOwnerStacks++;
      return q(
        O,
        $,
        le,
        !0,
        se,
        be,
        De ? Error("react-stack-top-frame") : K,
        De ? qe(m(O)) : oe
      );
    };
  }()), Vp;
}
var nE;
function WA() {
  return nE || (nE = 1, process.env.NODE_ENV === "production" ? tg.exports = JA() : tg.exports = KA()), tg.exports;
}
var en = WA(), ng = { exports: {} }, Xp = {}, ag = { exports: {} }, nb = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aE;
function FA() {
  return aE || (aE = 1, function(c) {
    function s(C, K) {
      var oe = C.length;
      C.push(K);
      e: for (; 0 < oe; ) {
        var Me = oe - 1 >>> 1, O = C[Me];
        if (0 < g(O, K))
          C[Me] = K, C[oe] = O, oe = Me;
        else break e;
      }
    }
    function h(C) {
      return C.length === 0 ? null : C[0];
    }
    function m(C) {
      if (C.length === 0) return null;
      var K = C[0], oe = C.pop();
      if (oe !== K) {
        C[0] = oe;
        e: for (var Me = 0, O = C.length, $ = O >>> 1; Me < $; ) {
          var le = 2 * (Me + 1) - 1, se = C[le], be = le + 1, De = C[be];
          if (0 > g(se, oe))
            be < O && 0 > g(De, se) ? (C[Me] = De, C[be] = oe, Me = be) : (C[Me] = se, C[le] = oe, Me = le);
          else if (be < O && 0 > g(De, oe))
            C[Me] = De, C[be] = oe, Me = be;
          else break e;
        }
      }
      return K;
    }
    function g(C, K) {
      var oe = C.sortIndex - K.sortIndex;
      return oe !== 0 ? oe : C.id - K.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var v = performance;
      c.unstable_now = function() {
        return v.now();
      };
    } else {
      var T = Date, A = T.now();
      c.unstable_now = function() {
        return T.now() - A;
      };
    }
    var x = [], U = [], q = 1, _ = null, Y = 3, ce = !1, pe = !1, ge = !1, ye = !1, Se = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    function ne(C) {
      for (var K = h(U); K !== null; ) {
        if (K.callback === null) m(U);
        else if (K.startTime <= C)
          m(U), K.sortIndex = K.expirationTime, s(x, K);
        else break;
        K = h(U);
      }
    }
    function k(C) {
      if (ge = !1, ne(C), !pe)
        if (h(x) !== null)
          pe = !0, ie || (ie = !0, Te());
        else {
          var K = h(U);
          K !== null && et(k, K.startTime - C);
        }
    }
    var ie = !1, ve = -1, He = 5, fe = -1;
    function Ve() {
      return ye ? !0 : !(c.unstable_now() - fe < He);
    }
    function de() {
      if (ye = !1, ie) {
        var C = c.unstable_now();
        fe = C;
        var K = !0;
        try {
          e: {
            pe = !1, ge && (ge = !1, me(ve), ve = -1), ce = !0;
            var oe = Y;
            try {
              t: {
                for (ne(C), _ = h(x); _ !== null && !(_.expirationTime > C && Ve()); ) {
                  var Me = _.callback;
                  if (typeof Me == "function") {
                    _.callback = null, Y = _.priorityLevel;
                    var O = Me(
                      _.expirationTime <= C
                    );
                    if (C = c.unstable_now(), typeof O == "function") {
                      _.callback = O, ne(C), K = !0;
                      break t;
                    }
                    _ === h(x) && m(x), ne(C);
                  } else m(x);
                  _ = h(x);
                }
                if (_ !== null) K = !0;
                else {
                  var $ = h(U);
                  $ !== null && et(
                    k,
                    $.startTime - C
                  ), K = !1;
                }
              }
              break e;
            } finally {
              _ = null, Y = oe, ce = !1;
            }
            K = void 0;
          }
        } finally {
          K ? Te() : ie = !1;
        }
      }
    }
    var Te;
    if (typeof P == "function")
      Te = function() {
        P(de);
      };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), qe = _e.port2;
      _e.port1.onmessage = de, Te = function() {
        qe.postMessage(null);
      };
    } else
      Te = function() {
        Se(de, 0);
      };
    function et(C, K) {
      ve = Se(function() {
        C(c.unstable_now());
      }, K);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, c.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : He = 0 < C ? Math.floor(1e3 / C) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, c.unstable_next = function(C) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = Y;
      }
      var oe = Y;
      Y = K;
      try {
        return C();
      } finally {
        Y = oe;
      }
    }, c.unstable_requestPaint = function() {
      ye = !0;
    }, c.unstable_runWithPriority = function(C, K) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var oe = Y;
      Y = C;
      try {
        return K();
      } finally {
        Y = oe;
      }
    }, c.unstable_scheduleCallback = function(C, K, oe) {
      var Me = c.unstable_now();
      switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? Me + oe : Me) : oe = Me, C) {
        case 1:
          var O = -1;
          break;
        case 2:
          O = 250;
          break;
        case 5:
          O = 1073741823;
          break;
        case 4:
          O = 1e4;
          break;
        default:
          O = 5e3;
      }
      return O = oe + O, C = {
        id: q++,
        callback: K,
        priorityLevel: C,
        startTime: oe,
        expirationTime: O,
        sortIndex: -1
      }, oe > Me ? (C.sortIndex = oe, s(U, C), h(x) === null && C === h(U) && (ge ? (me(ve), ve = -1) : ge = !0, et(k, oe - Me))) : (C.sortIndex = O, s(x, C), pe || ce || (pe = !0, ie || (ie = !0, Te()))), C;
    }, c.unstable_shouldYield = Ve, c.unstable_wrapCallback = function(C) {
      var K = Y;
      return function() {
        var oe = Y;
        Y = K;
        try {
          return C.apply(this, arguments);
        } finally {
          Y = oe;
        }
      };
    };
  }(nb)), nb;
}
var ab = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lE;
function PA() {
  return lE || (lE = 1, function(c) {
    process.env.NODE_ENV !== "production" && function() {
      function s() {
        if (k = !1, fe) {
          var C = c.unstable_now();
          Te = C;
          var K = !0;
          try {
            e: {
              P = !1, ne && (ne = !1, ve(Ve), Ve = -1), me = !0;
              var oe = Se;
              try {
                t: {
                  for (T(C), ye = m(ce); ye !== null && !(ye.expirationTime > C && x()); ) {
                    var Me = ye.callback;
                    if (typeof Me == "function") {
                      ye.callback = null, Se = ye.priorityLevel;
                      var O = Me(
                        ye.expirationTime <= C
                      );
                      if (C = c.unstable_now(), typeof O == "function") {
                        ye.callback = O, T(C), K = !0;
                        break t;
                      }
                      ye === m(ce) && g(ce), T(C);
                    } else g(ce);
                    ye = m(ce);
                  }
                  if (ye !== null) K = !0;
                  else {
                    var $ = m(pe);
                    $ !== null && U(
                      A,
                      $.startTime - C
                    ), K = !1;
                  }
                }
                break e;
              } finally {
                ye = null, Se = oe, me = !1;
              }
              K = void 0;
            }
          } finally {
            K ? _e() : fe = !1;
          }
        }
      }
      function h(C, K) {
        var oe = C.length;
        C.push(K);
        e: for (; 0 < oe; ) {
          var Me = oe - 1 >>> 1, O = C[Me];
          if (0 < v(O, K))
            C[Me] = K, C[oe] = O, oe = Me;
          else break e;
        }
      }
      function m(C) {
        return C.length === 0 ? null : C[0];
      }
      function g(C) {
        if (C.length === 0) return null;
        var K = C[0], oe = C.pop();
        if (oe !== K) {
          C[0] = oe;
          e: for (var Me = 0, O = C.length, $ = O >>> 1; Me < $; ) {
            var le = 2 * (Me + 1) - 1, se = C[le], be = le + 1, De = C[be];
            if (0 > v(se, oe))
              be < O && 0 > v(De, se) ? (C[Me] = De, C[be] = oe, Me = be) : (C[Me] = se, C[le] = oe, Me = le);
            else if (be < O && 0 > v(De, oe))
              C[Me] = De, C[be] = oe, Me = be;
            else break e;
          }
        }
        return K;
      }
      function v(C, K) {
        var oe = C.sortIndex - K.sortIndex;
        return oe !== 0 ? oe : C.id - K.id;
      }
      function T(C) {
        for (var K = m(pe); K !== null; ) {
          if (K.callback === null) g(pe);
          else if (K.startTime <= C)
            g(pe), K.sortIndex = K.expirationTime, h(ce, K);
          else break;
          K = m(pe);
        }
      }
      function A(C) {
        if (ne = !1, T(C), !P)
          if (m(ce) !== null)
            P = !0, fe || (fe = !0, _e());
          else {
            var K = m(pe);
            K !== null && U(
              A,
              K.startTime - C
            );
          }
      }
      function x() {
        return k ? !0 : !(c.unstable_now() - Te < de);
      }
      function U(C, K) {
        Ve = ie(function() {
          C(c.unstable_now());
        }, K);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var q = performance;
        c.unstable_now = function() {
          return q.now();
        };
      } else {
        var _ = Date, Y = _.now();
        c.unstable_now = function() {
          return _.now() - Y;
        };
      }
      var ce = [], pe = [], ge = 1, ye = null, Se = 3, me = !1, P = !1, ne = !1, k = !1, ie = typeof setTimeout == "function" ? setTimeout : null, ve = typeof clearTimeout == "function" ? clearTimeout : null, He = typeof setImmediate < "u" ? setImmediate : null, fe = !1, Ve = -1, de = 5, Te = -1;
      if (typeof He == "function")
        var _e = function() {
          He(s);
        };
      else if (typeof MessageChannel < "u") {
        var qe = new MessageChannel(), et = qe.port2;
        qe.port1.onmessage = s, _e = function() {
          et.postMessage(null);
        };
      } else
        _e = function() {
          ie(s, 0);
        };
      c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(C) {
        C.callback = null;
      }, c.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : de = 0 < C ? Math.floor(1e3 / C) : 5;
      }, c.unstable_getCurrentPriorityLevel = function() {
        return Se;
      }, c.unstable_next = function(C) {
        switch (Se) {
          case 1:
          case 2:
          case 3:
            var K = 3;
            break;
          default:
            K = Se;
        }
        var oe = Se;
        Se = K;
        try {
          return C();
        } finally {
          Se = oe;
        }
      }, c.unstable_requestPaint = function() {
        k = !0;
      }, c.unstable_runWithPriority = function(C, K) {
        switch (C) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            C = 3;
        }
        var oe = Se;
        Se = C;
        try {
          return K();
        } finally {
          Se = oe;
        }
      }, c.unstable_scheduleCallback = function(C, K, oe) {
        var Me = c.unstable_now();
        switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? Me + oe : Me) : oe = Me, C) {
          case 1:
            var O = -1;
            break;
          case 2:
            O = 250;
            break;
          case 5:
            O = 1073741823;
            break;
          case 4:
            O = 1e4;
            break;
          default:
            O = 5e3;
        }
        return O = oe + O, C = {
          id: ge++,
          callback: K,
          priorityLevel: C,
          startTime: oe,
          expirationTime: O,
          sortIndex: -1
        }, oe > Me ? (C.sortIndex = oe, h(pe, C), m(ce) === null && C === m(pe) && (ne ? (ve(Ve), Ve = -1) : ne = !0, U(A, oe - Me))) : (C.sortIndex = O, h(ce, C), P || me || (P = !0, fe || (fe = !0, _e()))), C;
      }, c.unstable_shouldYield = x, c.unstable_wrapCallback = function(C) {
        var K = Se;
        return function() {
          var oe = Se;
          Se = K;
          try {
            return C.apply(this, arguments);
          } finally {
            Se = oe;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(ab)), ab;
}
var uE;
function Fx() {
  return uE || (uE = 1, process.env.NODE_ENV === "production" ? ag.exports = FA() : ag.exports = PA()), ag.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iE;
function IA() {
  if (iE) return Xp;
  iE = 1;
  var c = Fx(), s = Wt, h = Wx;
  function m(n) {
    var l = "https://react.dev/errors/" + n;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        l += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function g(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function v(n) {
    var l = n, u = n;
    if (n.alternate) for (; l.return; ) l = l.return;
    else {
      n = l;
      do
        l = n, (l.flags & 4098) !== 0 && (u = l.return), n = l.return;
      while (n);
    }
    return l.tag === 3 ? u : null;
  }
  function T(n) {
    if (n.tag === 13) {
      var l = n.memoizedState;
      if (l === null && (n = n.alternate, n !== null && (l = n.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function A(n) {
    if (v(n) !== n)
      throw Error(m(188));
  }
  function x(n) {
    var l = n.alternate;
    if (!l) {
      if (l = v(n), l === null) throw Error(m(188));
      return l !== n ? null : n;
    }
    for (var u = n, o = l; ; ) {
      var d = u.return;
      if (d === null) break;
      var y = d.alternate;
      if (y === null) {
        if (o = d.return, o !== null) {
          u = o;
          continue;
        }
        break;
      }
      if (d.child === y.child) {
        for (y = d.child; y; ) {
          if (y === u) return A(d), n;
          if (y === o) return A(d), l;
          y = y.sibling;
        }
        throw Error(m(188));
      }
      if (u.return !== o.return) u = d, o = y;
      else {
        for (var S = !1, E = d.child; E; ) {
          if (E === u) {
            S = !0, u = d, o = y;
            break;
          }
          if (E === o) {
            S = !0, o = d, u = y;
            break;
          }
          E = E.sibling;
        }
        if (!S) {
          for (E = y.child; E; ) {
            if (E === u) {
              S = !0, u = y, o = d;
              break;
            }
            if (E === o) {
              S = !0, o = y, u = d;
              break;
            }
            E = E.sibling;
          }
          if (!S) throw Error(m(189));
        }
      }
      if (u.alternate !== o) throw Error(m(190));
    }
    if (u.tag !== 3) throw Error(m(188));
    return u.stateNode.current === u ? n : l;
  }
  function U(n) {
    var l = n.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return n;
    for (n = n.child; n !== null; ) {
      if (l = U(n), l !== null) return l;
      n = n.sibling;
    }
    return null;
  }
  var q = Object.assign, _ = Symbol.for("react.element"), Y = Symbol.for("react.transitional.element"), ce = Symbol.for("react.portal"), pe = Symbol.for("react.fragment"), ge = Symbol.for("react.strict_mode"), ye = Symbol.for("react.profiler"), Se = Symbol.for("react.provider"), me = Symbol.for("react.consumer"), P = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), ve = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), Ve = Symbol.for("react.memo_cache_sentinel"), de = Symbol.iterator;
  function Te(n) {
    return n === null || typeof n != "object" ? null : (n = de && n[de] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var _e = Symbol.for("react.client.reference");
  function qe(n) {
    if (n == null) return null;
    if (typeof n == "function")
      return n.$$typeof === _e ? null : n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case pe:
        return "Fragment";
      case ye:
        return "Profiler";
      case ge:
        return "StrictMode";
      case k:
        return "Suspense";
      case ie:
        return "SuspenseList";
      case fe:
        return "Activity";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ce:
          return "Portal";
        case P:
          return (n.displayName || "Context") + ".Provider";
        case me:
          return (n._context.displayName || "Context") + ".Consumer";
        case ne:
          var l = n.render;
          return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case ve:
          return l = n.displayName || null, l !== null ? l : qe(n.type) || "Memo";
        case He:
          l = n._payload, n = n._init;
          try {
            return qe(n(l));
          } catch {
          }
      }
    return null;
  }
  var et = Array.isArray, C = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Me = [], O = -1;
  function $(n) {
    return { current: n };
  }
  function le(n) {
    0 > O || (n.current = Me[O], Me[O] = null, O--);
  }
  function se(n, l) {
    O++, Me[O] = n.current, n.current = l;
  }
  var be = $(null), De = $(null), Ae = $(null), Xe = $(null);
  function we(n, l) {
    switch (se(Ae, l), se(De, n), se(be, null), l.nodeType) {
      case 9:
      case 11:
        n = (n = l.documentElement) && (n = n.namespaceURI) ? Yu(n) : 0;
        break;
      default:
        if (n = l.tagName, l = l.namespaceURI)
          l = Yu(l), n = Wo(l, n);
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    le(be), se(be, n);
  }
  function re() {
    le(be), le(De), le(Ae);
  }
  function Ee(n) {
    n.memoizedState !== null && se(Xe, n);
    var l = be.current, u = Wo(l, n.type);
    l !== u && (se(De, n), se(be, u));
  }
  function Ye(n) {
    De.current === n && (le(be), le(De)), Xe.current === n && (le(Xe), ba._currentValue = oe);
  }
  var L = Object.prototype.hasOwnProperty, ht = c.unstable_scheduleCallback, rt = c.unstable_cancelCallback, hn = c.unstable_shouldYield, Ft = c.unstable_requestPaint, Pt = c.unstable_now, Ku = c.unstable_getCurrentPriorityLevel, u0 = c.unstable_ImmediatePriority, Wh = c.unstable_UserBlockingPriority, xr = c.unstable_NormalPriority, Fh = c.unstable_LowPriority, no = c.unstable_IdlePriority, Ng = c.log, i0 = c.unstable_setDisableYieldValue, ao = null, $n = null;
  function yu(n) {
    if (typeof Ng == "function" && i0(n), $n && typeof $n.setStrictMode == "function")
      try {
        $n.setStrictMode(ao, n);
      } catch {
      }
  }
  var ua = Math.clz32 ? Math.clz32 : qg, Ph = Math.log, c0 = Math.LN2;
  function qg(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Ph(n) / c0 | 0) | 0;
  }
  var lo = 256, mu = 4194304;
  function Ta(n) {
    var l = n & 42;
    if (l !== 0) return l;
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return n & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return n;
    }
  }
  function Wu(n, l, u) {
    var o = n.pendingLanes;
    if (o === 0) return 0;
    var d = 0, y = n.suspendedLanes, S = n.pingedLanes;
    n = n.warmLanes;
    var E = o & 134217727;
    return E !== 0 ? (o = E & ~y, o !== 0 ? d = Ta(o) : (S &= E, S !== 0 ? d = Ta(S) : u || (u = E & ~n, u !== 0 && (d = Ta(u))))) : (E = o & ~y, E !== 0 ? d = Ta(E) : S !== 0 ? d = Ta(S) : u || (u = o & ~n, u !== 0 && (d = Ta(u)))), d === 0 ? 0 : l !== 0 && l !== d && (l & y) === 0 && (y = d & -d, u = l & -l, y >= u || y === 32 && (u & 4194048) !== 0) ? l : d;
  }
  function xl(n, l) {
    return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & l) === 0;
  }
  function yn(n, l) {
    switch (n) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Fu() {
    var n = lo;
    return lo <<= 1, (lo & 4194048) === 0 && (lo = 256), n;
  }
  function ki() {
    var n = mu;
    return mu <<= 1, (mu & 62914560) === 0 && (mu = 4194304), n;
  }
  function Pu(n) {
    for (var l = [], u = 0; 31 > u; u++) l.push(n);
    return l;
  }
  function $i(n, l) {
    n.pendingLanes |= l, l !== 268435456 && (n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0);
  }
  function o0(n, l, u, o, d, y) {
    var S = n.pendingLanes;
    n.pendingLanes = u, n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0, n.expiredLanes &= u, n.entangledLanes &= u, n.errorRecoveryDisabledLanes &= u, n.shellSuspendCounter = 0;
    var E = n.entanglements, D = n.expirationTimes, G = n.hiddenUpdates;
    for (u = S & ~u; 0 < u; ) {
      var te = 31 - ua(u), ue = 1 << te;
      E[te] = 0, D[te] = -1;
      var X = G[te];
      if (X !== null)
        for (G[te] = null, te = 0; te < X.length; te++) {
          var Z = X[te];
          Z !== null && (Z.lane &= -536870913);
        }
      u &= ~ue;
    }
    o !== 0 && Mr(n, o, 0), y !== 0 && d === 0 && n.tag !== 0 && (n.suspendedLanes |= y & ~(S & ~l));
  }
  function Mr(n, l, u) {
    n.pendingLanes |= l, n.suspendedLanes &= ~l;
    var o = 31 - ua(l);
    n.entangledLanes |= l, n.entanglements[o] = n.entanglements[o] | 1073741824 | u & 4194090;
  }
  function Ar(n, l) {
    var u = n.entangledLanes |= l;
    for (n = n.entanglements; u; ) {
      var o = 31 - ua(u), d = 1 << o;
      d & l | n[o] & l && (n[o] |= l), u &= ~d;
    }
  }
  function al(n) {
    switch (n) {
      case 2:
        n = 1;
        break;
      case 8:
        n = 4;
        break;
      case 32:
        n = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        n = 128;
        break;
      case 268435456:
        n = 134217728;
        break;
      default:
        n = 0;
    }
    return n;
  }
  function gs(n) {
    return n &= -n, 2 < n ? 8 < n ? (n & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function r0() {
    var n = K.p;
    return n !== 0 ? n : (n = window.event, n === void 0 ? 32 : np(n.type));
  }
  function Yg(n, l) {
    var u = K.p;
    try {
      return K.p = n, l();
    } finally {
      K.p = u;
    }
  }
  var ln = Math.random().toString(36).slice(2), mn = "__reactFiber$" + ln, Jn = "__reactProps$" + ln, uo = "__reactContainer$" + ln, bs = "__reactEvents$" + ln, f0 = "__reactListeners$" + ln, Ss = "__reactHandles$" + ln, s0 = "__reactResources$" + ln, ze = "__reactMarker$" + ln;
  function Rr(n) {
    delete n[mn], delete n[Jn], delete n[bs], delete n[f0], delete n[Ss];
  }
  function xn(n) {
    var l = n[mn];
    if (l) return l;
    for (var u = n.parentNode; u; ) {
      if (l = u[uo] || u[mn]) {
        if (u = l.alternate, l.child !== null || u !== null && u.child !== null)
          for (n = Cn(n); n !== null; ) {
            if (u = n[mn]) return u;
            n = Cn(n);
          }
        return l;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function Ji(n) {
    if (n = n[mn] || n[uo]) {
      var l = n.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return n;
    }
    return null;
  }
  function Or(n) {
    var l = n.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return n.stateNode;
    throw Error(m(33));
  }
  function pu(n) {
    var l = n[s0];
    return l || (l = n[s0] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function un(n) {
    n[ze] = !0;
  }
  var Dr = /* @__PURE__ */ new Set(), Ea = {};
  function Iu(n, l) {
    ei(n, l), ei(n + "Capture", l);
  }
  function ei(n, l) {
    for (Ea[n] = l, n = 0; n < l.length; n++)
      Dr.add(l[n]);
  }
  var d0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ts = {}, Ih = {};
  function h0(n) {
    return L.call(Ih, n) ? !0 : L.call(Ts, n) ? !1 : d0.test(n) ? Ih[n] = !0 : (Ts[n] = !0, !1);
  }
  function vu(n, l, u) {
    if (h0(l))
      if (u === null) n.removeAttribute(l);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            n.removeAttribute(l);
            return;
          case "boolean":
            var o = l.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              n.removeAttribute(l);
              return;
            }
        }
        n.setAttribute(l, "" + u);
      }
  }
  function zr(n, l, u) {
    if (u === null) n.removeAttribute(l);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(l);
          return;
      }
      n.setAttribute(l, "" + u);
    }
  }
  function Ml(n, l, u, o) {
    if (o === null) n.removeAttribute(u);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          n.removeAttribute(u);
          return;
      }
      n.setAttributeNS(l, u, "" + o);
    }
  }
  var Es, ey;
  function Ki(n) {
    if (Es === void 0)
      try {
        throw Error();
      } catch (u) {
        var l = u.stack.trim().match(/\n( *(at )?)/);
        Es = l && l[1] || "", ey = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Es + n + ey;
  }
  var Kn = !1;
  function ti(n, l) {
    if (!n || Kn) return "";
    Kn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var ue = function() {
                throw Error();
              };
              if (Object.defineProperty(ue.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ue, []);
                } catch (Z) {
                  var X = Z;
                }
                Reflect.construct(n, [], ue);
              } else {
                try {
                  ue.call();
                } catch (Z) {
                  X = Z;
                }
                n.call(ue.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                X = Z;
              }
              (ue = n()) && typeof ue.catch == "function" && ue.catch(function() {
              });
            }
          } catch (Z) {
            if (Z && X && typeof Z.stack == "string")
              return [Z.stack, X.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      d && d.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var y = o.DetermineComponentFrameRoot(), S = y[0], E = y[1];
      if (S && E) {
        var D = S.split(`
`), G = E.split(`
`);
        for (d = o = 0; o < D.length && !D[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; d < G.length && !G[d].includes(
          "DetermineComponentFrameRoot"
        ); )
          d++;
        if (o === D.length || d === G.length)
          for (o = D.length - 1, d = G.length - 1; 1 <= o && 0 <= d && D[o] !== G[d]; )
            d--;
        for (; 1 <= o && 0 <= d; o--, d--)
          if (D[o] !== G[d]) {
            if (o !== 1 || d !== 1)
              do
                if (o--, d--, 0 > d || D[o] !== G[d]) {
                  var te = `
` + D[o].replace(" at new ", " at ");
                  return n.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", n.displayName)), te;
                }
              while (1 <= o && 0 <= d);
            break;
          }
      }
    } finally {
      Kn = !1, Error.prepareStackTrace = u;
    }
    return (u = n ? n.displayName || n.name : "") ? Ki(u) : "";
  }
  function Wi(n) {
    switch (n.tag) {
      case 26:
      case 27:
      case 5:
        return Ki(n.type);
      case 16:
        return Ki("Lazy");
      case 13:
        return Ki("Suspense");
      case 19:
        return Ki("SuspenseList");
      case 0:
      case 15:
        return ti(n.type, !1);
      case 11:
        return ti(n.type.render, !1);
      case 1:
        return ti(n.type, !0);
      case 31:
        return Ki("Activity");
      default:
        return "";
    }
  }
  function ty(n) {
    try {
      var l = "";
      do
        l += Wi(n), n = n.return;
      while (n);
      return l;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function qn(n) {
    switch (typeof n) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Cr(n) {
    var l = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function ny(n) {
    var l = Cr(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      n.constructor.prototype,
      l
    ), o = "" + n[l];
    if (!n.hasOwnProperty(l) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var d = u.get, y = u.set;
      return Object.defineProperty(n, l, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(S) {
          o = "" + S, y.call(this, S);
        }
      }), Object.defineProperty(n, l, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(S) {
          o = "" + S;
        },
        stopTracking: function() {
          n._valueTracker = null, delete n[l];
        }
      };
    }
  }
  function ni(n) {
    n._valueTracker || (n._valueTracker = ny(n));
  }
  function Fi(n) {
    if (!n) return !1;
    var l = n._valueTracker;
    if (!l) return !0;
    var u = l.getValue(), o = "";
    return n && (o = Cr(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== u ? (l.setValue(n), !0) : !1;
  }
  function io(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  var jg = /[\n"\\]/g;
  function Ya(n) {
    return n.replace(
      jg,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function xs(n, l, u, o, d, y, S, E) {
    n.name = "", S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? n.type = S : n.removeAttribute("type"), l != null ? S === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + qn(l)) : n.value !== "" + qn(l) && (n.value = "" + qn(l)) : S !== "submit" && S !== "reset" || n.removeAttribute("value"), l != null ? Ur(n, S, qn(l)) : u != null ? Ur(n, S, qn(u)) : o != null && n.removeAttribute("value"), d == null && y != null && (n.defaultChecked = !!y), d != null && (n.checked = d && typeof d != "function" && typeof d != "symbol"), E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" ? n.name = "" + qn(E) : n.removeAttribute("name");
  }
  function Ms(n, l, u, o, d, y, S, E) {
    if (y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (n.type = y), l != null || u != null) {
      if (!(y !== "submit" && y !== "reset" || l != null))
        return;
      u = u != null ? "" + qn(u) : "", l = l != null ? "" + qn(l) : u, E || l === n.value || (n.value = l), n.defaultValue = l;
    }
    o = o ?? d, o = typeof o != "function" && typeof o != "symbol" && !!o, n.checked = E ? n.checked : !!o, n.defaultChecked = !!o, S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" && (n.name = S);
  }
  function Ur(n, l, u) {
    l === "number" && io(n.ownerDocument) === n || n.defaultValue === "" + u || (n.defaultValue = "" + u);
  }
  function Pi(n, l, u, o) {
    if (n = n.options, l) {
      l = {};
      for (var d = 0; d < u.length; d++)
        l["$" + u[d]] = !0;
      for (u = 0; u < n.length; u++)
        d = l.hasOwnProperty("$" + n[u].value), n[u].selected !== d && (n[u].selected = d), d && o && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + qn(u), l = null, d = 0; d < n.length; d++) {
        if (n[d].value === u) {
          n[d].selected = !0, o && (n[d].defaultSelected = !0);
          return;
        }
        l !== null || n[d].disabled || (l = n[d]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function ay(n, l, u) {
    if (l != null && (l = "" + qn(l), l !== n.value && (n.value = l), u == null)) {
      n.defaultValue !== l && (n.defaultValue = l);
      return;
    }
    n.defaultValue = u != null ? "" + qn(u) : "";
  }
  function ly(n, l, u, o) {
    if (l == null) {
      if (o != null) {
        if (u != null) throw Error(m(92));
        if (et(o)) {
          if (1 < o.length) throw Error(m(93));
          o = o[0];
        }
        u = o;
      }
      u == null && (u = ""), l = u;
    }
    u = qn(l), n.defaultValue = u, o = n.textContent, o === u && o !== "" && o !== null && (n.value = o);
  }
  function co(n, l) {
    if (l) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = l;
        return;
      }
    }
    n.textContent = l;
  }
  var y0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function As(n, l, u) {
    var o = l.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? o ? n.setProperty(l, "") : l === "float" ? n.cssFloat = "" : n[l] = "" : o ? n.setProperty(l, u) : typeof u != "number" || u === 0 || y0.has(l) ? l === "float" ? n.cssFloat = u : n[l] = ("" + u).trim() : n[l] = u + "px";
  }
  function Hr(n, l, u) {
    if (l != null && typeof l != "object")
      throw Error(m(62));
    if (n = n.style, u != null) {
      for (var o in u)
        !u.hasOwnProperty(o) || l != null && l.hasOwnProperty(o) || (o.indexOf("--") === 0 ? n.setProperty(o, "") : o === "float" ? n.cssFloat = "" : n[o] = "");
      for (var d in l)
        o = l[d], l.hasOwnProperty(d) && u[d] !== o && As(n, d, o);
    } else
      for (var y in l)
        l.hasOwnProperty(y) && As(n, y, l[y]);
  }
  function Ii(n) {
    if (n.indexOf("-") === -1) return !1;
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Bg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), m0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _r(n) {
    return m0.test("" + n) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : n;
  }
  var ec = null;
  function Rs(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var oo = null, ro = null;
  function p0(n) {
    var l = Ji(n);
    if (l && (n = l.stateNode)) {
      var u = n[Jn] || null;
      e: switch (n = l.stateNode, l.type) {
        case "input":
          if (xs(
            n,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), l = u.name, u.type === "radio" && l != null) {
            for (u = n; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Ya(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < u.length; l++) {
              var o = u[l];
              if (o !== n && o.form === n.form) {
                var d = o[Jn] || null;
                if (!d) throw Error(m(90));
                xs(
                  o,
                  d.value,
                  d.defaultValue,
                  d.defaultValue,
                  d.checked,
                  d.defaultChecked,
                  d.type,
                  d.name
                );
              }
            }
            for (l = 0; l < u.length; l++)
              o = u[l], o.form === n.form && Fi(o);
          }
          break e;
        case "textarea":
          ay(n, u.value, u.defaultValue);
          break e;
        case "select":
          l = u.value, l != null && Pi(n, !!u.multiple, l, !1);
      }
    }
  }
  var uy = !1;
  function fo(n, l, u) {
    if (uy) return n(l, u);
    uy = !0;
    try {
      var o = n(l);
      return o;
    } finally {
      if (uy = !1, (oo !== null || ro !== null) && (Hc(), oo && (l = oo, n = ro, ro = oo = null, p0(l), n)))
        for (l = 0; l < n.length; l++) p0(n[l]);
    }
  }
  function tc(n, l) {
    var u = n.stateNode;
    if (u === null) return null;
    var o = u[Jn] || null;
    if (o === null) return null;
    u = o[l];
    e: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (u && typeof u != "function")
      throw Error(
        m(231, l, typeof u)
      );
    return u;
  }
  var Al = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Os = !1;
  if (Al)
    try {
      var gu = {};
      Object.defineProperty(gu, "passive", {
        get: function() {
          Os = !0;
        }
      }), window.addEventListener("test", gu, gu), window.removeEventListener("test", gu, gu);
    } catch {
      Os = !1;
    }
  var bu = null, so = null, nc = null;
  function iy() {
    if (nc) return nc;
    var n, l = so, u = l.length, o, d = "value" in bu ? bu.value : bu.textContent, y = d.length;
    for (n = 0; n < u && l[n] === d[n]; n++) ;
    var S = u - n;
    for (o = 1; o <= S && l[u - o] === d[y - o]; o++) ;
    return nc = d.slice(n, 1 < o ? 1 - o : void 0);
  }
  function Mn(n) {
    var l = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && l === 13 && (n = 13)) : n = l, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Ds() {
    return !0;
  }
  function zs() {
    return !1;
  }
  function Wn(n) {
    function l(u, o, d, y, S) {
      this._reactName = u, this._targetInst = d, this.type = o, this.nativeEvent = y, this.target = S, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (u = n[E], this[E] = u ? u(y) : y[E]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? Ds : zs, this.isPropagationStopped = zs, this;
    }
    return q(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ds);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ds);
      },
      persist: function() {
      },
      isPersistent: Ds
    }), l;
  }
  var ai = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(n) {
      return n.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Cs = Wn(ai), wr = q({}, ai, { view: 0, detail: 0 }), v0 = Wn(wr), cy, Us, Nr, ac = q({}, wr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Su,
    button: 0,
    buttons: 0,
    relatedTarget: function(n) {
      return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
    },
    movementX: function(n) {
      return "movementX" in n ? n.movementX : (n !== Nr && (Nr && n.type === "mousemove" ? (cy = n.screenX - Nr.screenX, Us = n.screenY - Nr.screenY) : Us = cy = 0, Nr = n), cy);
    },
    movementY: function(n) {
      return "movementY" in n ? n.movementY : Us;
    }
  }), oy = Wn(ac), g0 = q({}, ac, { dataTransfer: 0 }), b0 = Wn(g0), Lg = q({}, wr, { relatedTarget: 0 }), ry = Wn(Lg), Gg = q({}, ai, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Vg = Wn(Gg), Xg = q({}, ai, {
    clipboardData: function(n) {
      return "clipboardData" in n ? n.clipboardData : window.clipboardData;
    }
  }), qr = Wn(Xg), S0 = q({}, ai, { data: 0 }), fy = Wn(S0), T0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, E0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, sy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function x0(n) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(n) : (n = sy[n]) ? !!l[n] : !1;
  }
  function Su() {
    return x0;
  }
  var lc = q({}, wr, {
    key: function(n) {
      if (n.key) {
        var l = T0[n.key] || n.key;
        if (l !== "Unidentified") return l;
      }
      return n.type === "keypress" ? (n = Mn(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? E0[n.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Su,
    charCode: function(n) {
      return n.type === "keypress" ? Mn(n) : 0;
    },
    keyCode: function(n) {
      return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
    },
    which: function(n) {
      return n.type === "keypress" ? Mn(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
    }
  }), ll = Wn(lc), xa = q({}, ac, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Yr = Wn(xa), Hs = q({}, wr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Su
  }), dy = Wn(Hs), ia = q({}, ai, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), M0 = Wn(ia), _s = q({}, ac, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), uc = Wn(_s), hy = q({}, ai, {
    newState: 0,
    oldState: 0
  }), A0 = Wn(hy), R0 = [9, 13, 27, 32], jr = Al && "CompositionEvent" in window, Br = null;
  Al && "documentMode" in document && (Br = document.documentMode);
  var yy = Al && "TextEvent" in window && !Br, Rl = Al && (!jr || Br && 8 < Br && 11 >= Br), my = " ", ws = !1;
  function Lr(n, l) {
    switch (n) {
      case "keyup":
        return R0.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function li(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ui = !1;
  function py(n, l) {
    switch (n) {
      case "compositionend":
        return li(l);
      case "keypress":
        return l.which !== 32 ? null : (ws = !0, my);
      case "textInput":
        return n = l.data, n === my && ws ? null : n;
      default:
        return null;
    }
  }
  function ic(n, l) {
    if (ui)
      return n === "compositionend" || !jr && Lr(n, l) ? (n = iy(), nc = so = bu = null, ui = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Rl && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var O0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Ns(n) {
    var l = n && n.nodeName && n.nodeName.toLowerCase();
    return l === "input" ? !!O0[n.type] : l === "textarea";
  }
  function qs(n, l, u, o) {
    oo ? ro ? ro.push(o) : ro = [o] : oo = o, l = Ko(l, "onChange"), 0 < l.length && (u = new Cs(
      "onChange",
      "change",
      null,
      u,
      o
    ), n.push({ event: u, listeners: l }));
  }
  var ul = null, il = null;
  function vy(n) {
    qc(n, 0);
  }
  function Ol(n) {
    var l = Or(n);
    if (Fi(l)) return n;
  }
  function gy(n, l) {
    if (n === "change") return l;
  }
  var by = !1;
  if (Al) {
    var cc;
    if (Al) {
      var oc = "oninput" in document;
      if (!oc) {
        var Sy = document.createElement("div");
        Sy.setAttribute("oninput", "return;"), oc = typeof Sy.oninput == "function";
      }
      cc = oc;
    } else cc = !1;
    by = cc && (!document.documentMode || 9 < document.documentMode);
  }
  function ho() {
    ul && (ul.detachEvent("onpropertychange", Ty), il = ul = null);
  }
  function Ty(n) {
    if (n.propertyName === "value" && Ol(il)) {
      var l = [];
      qs(
        l,
        il,
        n,
        Rs(n)
      ), fo(vy, l);
    }
  }
  function Ys(n, l, u) {
    n === "focusin" ? (ho(), ul = l, il = u, ul.attachEvent("onpropertychange", Ty)) : n === "focusout" && ho();
  }
  function ii(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Ol(il);
  }
  function Tu(n, l) {
    if (n === "click") return Ol(l);
  }
  function Ey(n, l) {
    if (n === "input" || n === "change")
      return Ol(l);
  }
  function xy(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var An = typeof Object.is == "function" ? Object.is : xy;
  function ci(n, l) {
    if (An(n, l)) return !0;
    if (typeof n != "object" || n === null || typeof l != "object" || l === null)
      return !1;
    var u = Object.keys(n), o = Object.keys(l);
    if (u.length !== o.length) return !1;
    for (o = 0; o < u.length; o++) {
      var d = u[o];
      if (!L.call(l, d) || !An(n[d], l[d]))
        return !1;
    }
    return !0;
  }
  function oi(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Ht(n, l) {
    var u = oi(n);
    n = 0;
    for (var o; u; ) {
      if (u.nodeType === 3) {
        if (o = n + u.textContent.length, n <= l && o >= l)
          return { node: u, offset: l - n };
        n = o;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = oi(u);
    }
  }
  function Gr(n, l) {
    return n && l ? n === l ? !0 : n && n.nodeType === 3 ? !1 : l && l.nodeType === 3 ? Gr(n, l.parentNode) : "contains" in n ? n.contains(l) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function My(n) {
    n = n != null && n.ownerDocument != null && n.ownerDocument.defaultView != null ? n.ownerDocument.defaultView : window;
    for (var l = io(n.document); l instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof l.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) n = l.contentWindow;
      else break;
      l = io(n.document);
    }
    return l;
  }
  function Vr(n) {
    var l = n && n.nodeName && n.nodeName.toLowerCase();
    return l && (l === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || l === "textarea" || n.contentEditable === "true");
  }
  var rc = Al && "documentMode" in document && 11 >= document.documentMode, Dl = null, cl = null, ri = null, fc = !1;
  function js(n, l, u) {
    var o = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    fc || Dl == null || Dl !== io(o) || (o = Dl, "selectionStart" in o && Vr(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), ri && ci(ri, o) || (ri = o, o = Ko(cl, "onSelect"), 0 < o.length && (l = new Cs(
      "onSelect",
      "select",
      null,
      l,
      u
    ), n.push({ event: l, listeners: o }), l.target = Dl)));
  }
  function Eu(n, l) {
    var u = {};
    return u[n.toLowerCase()] = l.toLowerCase(), u["Webkit" + n] = "webkit" + l, u["Moz" + n] = "moz" + l, u;
  }
  var sc = {
    animationend: Eu("Animation", "AnimationEnd"),
    animationiteration: Eu("Animation", "AnimationIteration"),
    animationstart: Eu("Animation", "AnimationStart"),
    transitionrun: Eu("Transition", "TransitionRun"),
    transitionstart: Eu("Transition", "TransitionStart"),
    transitioncancel: Eu("Transition", "TransitionCancel"),
    transitionend: Eu("Transition", "TransitionEnd")
  }, ja = {}, ol = {};
  Al && (ol = document.createElement("div").style, "AnimationEvent" in window || (delete sc.animationend.animation, delete sc.animationiteration.animation, delete sc.animationstart.animation), "TransitionEvent" in window || delete sc.transitionend.transition);
  function zl(n) {
    if (ja[n]) return ja[n];
    if (!sc[n]) return n;
    var l = sc[n], u;
    for (u in l)
      if (l.hasOwnProperty(u) && u in ol)
        return ja[n] = l[u];
    return n;
  }
  var D0 = zl("animationend"), Ay = zl("animationiteration"), z0 = zl("animationstart"), Ry = zl("transitionrun"), Bs = zl("transitionstart"), C0 = zl("transitioncancel"), Oy = zl("transitionend"), Dy = /* @__PURE__ */ new Map(), yo = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yo.push("scrollEnd");
  function Ba(n, l) {
    Dy.set(n, l), Iu(l, [n]);
  }
  var zy = /* @__PURE__ */ new WeakMap();
  function Ma(n, l) {
    if (typeof n == "object" && n !== null) {
      var u = zy.get(n);
      return u !== void 0 ? u : (l = {
        value: n,
        source: l,
        stack: ty(l)
      }, zy.set(n, l), l);
    }
    return {
      value: n,
      source: l,
      stack: ty(l)
    };
  }
  var ca = [], fi = 0, Cl = 0;
  function rl() {
    for (var n = fi, l = Cl = fi = 0; l < n; ) {
      var u = ca[l];
      ca[l++] = null;
      var o = ca[l];
      ca[l++] = null;
      var d = ca[l];
      ca[l++] = null;
      var y = ca[l];
      if (ca[l++] = null, o !== null && d !== null) {
        var S = o.pending;
        S === null ? d.next = d : (d.next = S.next, S.next = d), o.pending = d;
      }
      y !== 0 && po(u, d, y);
    }
  }
  function si(n, l, u, o) {
    ca[fi++] = n, ca[fi++] = l, ca[fi++] = u, ca[fi++] = o, Cl |= o, n.lanes |= o, n = n.alternate, n !== null && (n.lanes |= o);
  }
  function mo(n, l, u, o) {
    return si(n, l, u, o), Xr(n);
  }
  function Ul(n, l) {
    return si(n, null, null, l), Xr(n);
  }
  function po(n, l, u) {
    n.lanes |= u;
    var o = n.alternate;
    o !== null && (o.lanes |= u);
    for (var d = !1, y = n.return; y !== null; )
      y.childLanes |= u, o = y.alternate, o !== null && (o.childLanes |= u), y.tag === 22 && (n = y.stateNode, n === null || n._visibility & 1 || (d = !0)), n = y, y = y.return;
    return n.tag === 3 ? (y = n.stateNode, d && l !== null && (d = 31 - ua(u), n = y.hiddenUpdates, o = n[d], o === null ? n[d] = [l] : o.push(l), l.lane = u | 536870912), y) : null;
  }
  function Xr(n) {
    if (50 < Xo)
      throw Xo = 0, zm = null, Error(m(185));
    for (var l = n.return; l !== null; )
      n = l, l = n.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var vo = {};
  function U0(n, l, u, o) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function oa(n, l, u, o) {
    return new U0(n, l, u, o);
  }
  function Qr(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function fl(n, l) {
    var u = n.alternate;
    return u === null ? (u = oa(
      n.tag,
      l,
      n.key,
      n.mode
    ), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = l, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 65011712, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, l = n.dependencies, u.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u.refCleanup = n.refCleanup, u;
  }
  function tt(n, l) {
    n.flags &= 65011714;
    var u = n.alternate;
    return u === null ? (n.childLanes = 0, n.lanes = l, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = u.childLanes, n.lanes = u.lanes, n.child = u.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = u.memoizedProps, n.memoizedState = u.memoizedState, n.updateQueue = u.updateQueue, n.type = u.type, l = u.dependencies, n.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), n;
  }
  function he(n, l, u, o, d, y) {
    var S = 0;
    if (o = n, typeof n == "function") Qr(n) && (S = 1);
    else if (typeof n == "string")
      S = sv(
        n,
        u,
        be.current
      ) ? 26 : n === "html" || n === "head" || n === "body" ? 27 : 5;
    else
      e: switch (n) {
        case fe:
          return n = oa(31, u, l, d), n.elementType = fe, n.lanes = y, n;
        case pe:
          return La(u.children, d, y, l);
        case ge:
          S = 8, d |= 24;
          break;
        case ye:
          return n = oa(12, u, l, d | 2), n.elementType = ye, n.lanes = y, n;
        case k:
          return n = oa(13, u, l, d), n.elementType = k, n.lanes = y, n;
        case ie:
          return n = oa(19, u, l, d), n.elementType = ie, n.lanes = y, n;
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case Se:
              case P:
                S = 10;
                break e;
              case me:
                S = 9;
                break e;
              case ne:
                S = 11;
                break e;
              case ve:
                S = 14;
                break e;
              case He:
                S = 16, o = null;
                break e;
            }
          S = 29, u = Error(
            m(130, n === null ? "null" : typeof n, "")
          ), o = null;
      }
    return l = oa(S, u, l, d), l.elementType = n, l.type = o, l.lanes = y, l;
  }
  function La(n, l, u, o) {
    return n = oa(7, n, o, l), n.lanes = u, n;
  }
  function go(n, l, u) {
    return n = oa(6, n, null, l), n.lanes = u, n;
  }
  function Bt(n, l, u) {
    return l = oa(
      4,
      n.children !== null ? n.children : [],
      n.key,
      l
    ), l.lanes = u, l.stateNode = {
      containerInfo: n.containerInfo,
      pendingChildren: null,
      implementation: n.implementation
    }, l;
  }
  var di = [], hi = 0, Zr = null, bo = 0, Ga = [], ra = 0, xu = null, sl = 1, Vt = "";
  function ft(n, l) {
    di[hi++] = bo, di[hi++] = Zr, Zr = n, bo = l;
  }
  function Ls(n, l, u) {
    Ga[ra++] = sl, Ga[ra++] = Vt, Ga[ra++] = xu, xu = n;
    var o = sl;
    n = Vt;
    var d = 32 - ua(o) - 1;
    o &= ~(1 << d), u += 1;
    var y = 32 - ua(l) + d;
    if (30 < y) {
      var S = d - d % 5;
      y = (o & (1 << S) - 1).toString(32), o >>= S, d -= S, sl = 1 << 32 - ua(l) + d | u << d | o, Vt = y + n;
    } else
      sl = 1 << y | u << d | o, Vt = n;
  }
  function dc(n) {
    n.return !== null && (ft(n, 1), Ls(n, 1, 0));
  }
  function Hl(n) {
    for (; n === Zr; )
      Zr = di[--hi], di[hi] = null, bo = di[--hi], di[hi] = null;
    for (; n === xu; )
      xu = Ga[--ra], Ga[ra] = null, Vt = Ga[--ra], Ga[ra] = null, sl = Ga[--ra], Ga[ra] = null;
  }
  var It = null, mt = null, yt = !1, Va = null, Xa = !1, hc = Error(m(519));
  function Mu(n) {
    var l = Error(m(418, ""));
    throw Eo(Ma(l, n)), hc;
  }
  function kr(n) {
    var l = n.stateNode, u = n.type, o = n.memoizedProps;
    switch (l[mn] = n, l[Jn] = o, u) {
      case "dialog":
        Ke("cancel", l), Ke("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ke("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Hf.length; u++)
          Ke(Hf[u], l);
        break;
      case "source":
        Ke("error", l);
        break;
      case "img":
      case "image":
      case "link":
        Ke("error", l), Ke("load", l);
        break;
      case "details":
        Ke("toggle", l);
        break;
      case "input":
        Ke("invalid", l), Ms(
          l,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), ni(l);
        break;
      case "select":
        Ke("invalid", l);
        break;
      case "textarea":
        Ke("invalid", l), ly(l, o.value, o.defaultValue, o.children), ni(l);
    }
    u = o.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || l.textContent === "" + u || o.suppressHydrationWarning === !0 || Xm(l.textContent, u) ? (o.popover != null && (Ke("beforetoggle", l), Ke("toggle", l)), o.onScroll != null && Ke("scroll", l), o.onScrollEnd != null && Ke("scrollend", l), o.onClick != null && (l.onclick = Wd), l = !0) : l = !1, l || Mu(n);
  }
  function Cy(n) {
    for (It = n.return; It; )
      switch (It.tag) {
        case 5:
        case 13:
          Xa = !1;
          return;
        case 27:
        case 3:
          Xa = !0;
          return;
        default:
          It = It.return;
      }
  }
  function So(n) {
    if (n !== It) return !1;
    if (!yt) return Cy(n), yt = !0, !1;
    var l = n.tag, u;
    if ((u = l !== 3 && l !== 27) && ((u = l === 5) && (u = n.type, u = !(u !== "form" && u !== "button") || Pl(n.type, n.memoizedProps)), u = !u), u && mt && Mu(n), Cy(n), l === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(m(317));
      e: {
        for (n = n.nextSibling, l = 0; n; ) {
          if (n.nodeType === 8)
            if (u = n.data, u === "/$") {
              if (l === 0) {
                mt = vl(n.nextSibling);
                break e;
              }
              l--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || l++;
          n = n.nextSibling;
        }
        mt = null;
      }
    } else
      l === 27 ? (l = mt, Ui(n.type) ? (n = Hi, Hi = null, mt = n) : mt = l) : mt = It ? vl(n.stateNode.nextSibling) : null;
    return !0;
  }
  function To() {
    mt = It = null, yt = !1;
  }
  function Uy() {
    var n = Va;
    return n !== null && (ma === null ? ma = n : ma.push.apply(
      ma,
      n
    ), Va = null), n;
  }
  function Eo(n) {
    Va === null ? Va = [n] : Va.push(n);
  }
  var $r = $(null), Au = null, dl = null;
  function Ru(n, l, u) {
    se($r, l._currentValue), l._currentValue = u;
  }
  function _l(n) {
    n._currentValue = $r.current, le($r);
  }
  function Gs(n, l, u) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & l) !== l ? (n.childLanes |= l, o !== null && (o.childLanes |= l)) : o !== null && (o.childLanes & l) !== l && (o.childLanes |= l), n === u) break;
      n = n.return;
    }
  }
  function Hy(n, l, u, o) {
    var d = n.child;
    for (d !== null && (d.return = n); d !== null; ) {
      var y = d.dependencies;
      if (y !== null) {
        var S = d.child;
        y = y.firstContext;
        e: for (; y !== null; ) {
          var E = y;
          y = d;
          for (var D = 0; D < l.length; D++)
            if (E.context === l[D]) {
              y.lanes |= u, E = y.alternate, E !== null && (E.lanes |= u), Gs(
                y.return,
                u,
                n
              ), o || (S = null);
              break e;
            }
          y = E.next;
        }
      } else if (d.tag === 18) {
        if (S = d.return, S === null) throw Error(m(341));
        S.lanes |= u, y = S.alternate, y !== null && (y.lanes |= u), Gs(S, u, n), S = null;
      } else S = d.child;
      if (S !== null) S.return = d;
      else
        for (S = d; S !== null; ) {
          if (S === n) {
            S = null;
            break;
          }
          if (d = S.sibling, d !== null) {
            d.return = S.return, S = d;
            break;
          }
          S = S.return;
        }
      d = S;
    }
  }
  function xo(n, l, u, o) {
    n = null;
    for (var d = l, y = !1; d !== null; ) {
      if (!y) {
        if ((d.flags & 524288) !== 0) y = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var S = d.alternate;
        if (S === null) throw Error(m(387));
        if (S = S.memoizedProps, S !== null) {
          var E = d.type;
          An(d.pendingProps.value, S.value) || (n !== null ? n.push(E) : n = [E]);
        }
      } else if (d === Xe.current) {
        if (S = d.alternate, S === null) throw Error(m(387));
        S.memoizedState.memoizedState !== d.memoizedState.memoizedState && (n !== null ? n.push(ba) : n = [ba]);
      }
      d = d.return;
    }
    n !== null && Hy(
      l,
      n,
      u,
      o
    ), l.flags |= 262144;
  }
  function Jr(n) {
    for (n = n.firstContext; n !== null; ) {
      if (!An(
        n.context._currentValue,
        n.memoizedValue
      ))
        return !0;
      n = n.next;
    }
    return !1;
  }
  function yi(n) {
    Au = n, dl = null, n = n.dependencies, n !== null && (n.firstContext = null);
  }
  function pn(n) {
    return _y(Au, n);
  }
  function Kr(n, l) {
    return Au === null && yi(n), _y(n, l);
  }
  function _y(n, l) {
    var u = l._currentValue;
    if (l = { context: l, memoizedValue: u, next: null }, dl === null) {
      if (n === null) throw Error(m(308));
      dl = l, n.dependencies = { lanes: 0, firstContext: l }, n.flags |= 524288;
    } else dl = dl.next = l;
    return u;
  }
  var Mo = typeof AbortController < "u" ? AbortController : function() {
    var n = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(u, o) {
        n.push(o);
      }
    };
    this.abort = function() {
      l.aborted = !0, n.forEach(function(u) {
        return u();
      });
    };
  }, Vs = c.unstable_scheduleCallback, H0 = c.unstable_NormalPriority, cn = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ao() {
    return {
      controller: new Mo(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function wl(n) {
    n.refCount--, n.refCount === 0 && Vs(H0, function() {
      n.controller.abort();
    });
  }
  var mi = null, Wr = 0, Qa = 0, on = null;
  function Xs(n, l) {
    if (mi === null) {
      var u = mi = [];
      Wr = 0, Qa = Nc(), on = {
        status: "pending",
        value: void 0,
        then: function(o) {
          u.push(o);
        }
      };
    }
    return Wr++, l.then(Qs, Qs), l;
  }
  function Qs() {
    if (--Wr === 0 && mi !== null) {
      on !== null && (on.status = "fulfilled");
      var n = mi;
      mi = null, Qa = 0, on = null;
      for (var l = 0; l < n.length; l++) (0, n[l])();
    }
  }
  function _0(n, l) {
    var u = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(d) {
        u.push(d);
      }
    };
    return n.then(
      function() {
        o.status = "fulfilled", o.value = l;
        for (var d = 0; d < u.length; d++) (0, u[d])(l);
      },
      function(d) {
        for (o.status = "rejected", o.reason = d, d = 0; d < u.length; d++)
          (0, u[d])(void 0);
      }
    ), o;
  }
  var Zs = C.S;
  C.S = function(n, l) {
    typeof l == "object" && l !== null && typeof l.then == "function" && Xs(n, l), Zs !== null && Zs(n, l);
  };
  var Nl = $(null);
  function Fr() {
    var n = Nl.current;
    return n !== null ? n : Ct.pooledCache;
  }
  function yc(n, l) {
    l === null ? se(Nl, Nl.current) : se(Nl, l.pool);
  }
  function ks() {
    var n = Fr();
    return n === null ? null : { parent: cn._currentValue, pool: n };
  }
  var pi = Error(m(460)), $s = Error(m(474)), Pr = Error(m(542)), Js = { then: function() {
  } };
  function Ks(n) {
    return n = n.status, n === "fulfilled" || n === "rejected";
  }
  function Ir() {
  }
  function wy(n, l, u) {
    switch (u = n[u], u === void 0 ? n.push(l) : u !== l && (l.then(Ir, Ir), l = u), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw n = l.reason, qy(n), n;
      default:
        if (typeof l.status == "string") l.then(Ir, Ir);
        else {
          if (n = Ct, n !== null && 100 < n.shellSuspendCounter)
            throw Error(m(482));
          n = l, n.status = "pending", n.then(
            function(o) {
              if (l.status === "pending") {
                var d = l;
                d.status = "fulfilled", d.value = o;
              }
            },
            function(o) {
              if (l.status === "pending") {
                var d = l;
                d.status = "rejected", d.reason = o;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw n = l.reason, qy(n), n;
        }
        throw mc = l, pi;
    }
  }
  var mc = null;
  function Ny() {
    if (mc === null) throw Error(m(459));
    var n = mc;
    return mc = null, n;
  }
  function qy(n) {
    if (n === pi || n === Pr)
      throw Error(m(483));
  }
  var ql = !1;
  function Ws(n) {
    n.updateQueue = {
      baseState: n.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Fs(n, l) {
    n = n.updateQueue, l.updateQueue === n && (l.updateQueue = {
      baseState: n.baseState,
      firstBaseUpdate: n.firstBaseUpdate,
      lastBaseUpdate: n.lastBaseUpdate,
      shared: n.shared,
      callbacks: null
    });
  }
  function fa(n) {
    return { lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Yl(n, l, u) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (St & 2) !== 0) {
      var d = o.pending;
      return d === null ? l.next = l : (l.next = d.next, d.next = l), o.pending = l, l = Xr(n), po(n, null, u), l;
    }
    return si(n, o, l, u), Xr(n);
  }
  function pc(n, l, u) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (u & 4194048) !== 0)) {
      var o = l.lanes;
      o &= n.pendingLanes, u |= o, l.lanes = u, Ar(n, u);
    }
  }
  function Yy(n, l) {
    var u = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, u === o)) {
      var d = null, y = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var S = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          y === null ? d = y = S : y = y.next = S, u = u.next;
        } while (u !== null);
        y === null ? d = y = l : y = y.next = l;
      } else d = y = l;
      u = {
        baseState: o.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: y,
        shared: o.shared,
        callbacks: o.callbacks
      }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = l : n.next = l, u.lastBaseUpdate = l;
  }
  var jy = !1;
  function Ro() {
    if (jy) {
      var n = on;
      if (n !== null) throw n;
    }
  }
  function Ou(n, l, u, o) {
    jy = !1;
    var d = n.updateQueue;
    ql = !1;
    var y = d.firstBaseUpdate, S = d.lastBaseUpdate, E = d.shared.pending;
    if (E !== null) {
      d.shared.pending = null;
      var D = E, G = D.next;
      D.next = null, S === null ? y = G : S.next = G, S = D;
      var te = n.alternate;
      te !== null && (te = te.updateQueue, E = te.lastBaseUpdate, E !== S && (E === null ? te.firstBaseUpdate = G : E.next = G, te.lastBaseUpdate = D));
    }
    if (y !== null) {
      var ue = d.baseState;
      S = 0, te = G = D = null, E = y;
      do {
        var X = E.lane & -536870913, Z = X !== E.lane;
        if (Z ? (it & X) === X : (o & X) === X) {
          X !== 0 && X === Qa && (jy = !0), te !== null && (te = te.next = {
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: null,
            next: null
          });
          e: {
            var je = n, Be = E;
            X = l;
            var vt = u;
            switch (Be.tag) {
              case 1:
                if (je = Be.payload, typeof je == "function") {
                  ue = je.call(vt, ue, X);
                  break e;
                }
                ue = je;
                break e;
              case 3:
                je.flags = je.flags & -65537 | 128;
              case 0:
                if (je = Be.payload, X = typeof je == "function" ? je.call(vt, ue, X) : je, X == null) break e;
                ue = q({}, ue, X);
                break e;
              case 2:
                ql = !0;
            }
          }
          X = E.callback, X !== null && (n.flags |= 64, Z && (n.flags |= 8192), Z = d.callbacks, Z === null ? d.callbacks = [X] : Z.push(X));
        } else
          Z = {
            lane: X,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          }, te === null ? (G = te = Z, D = ue) : te = te.next = Z, S |= X;
        if (E = E.next, E === null) {
          if (E = d.shared.pending, E === null)
            break;
          Z = E, E = Z.next, Z.next = null, d.lastBaseUpdate = Z, d.shared.pending = null;
        }
      } while (!0);
      te === null && (D = ue), d.baseState = D, d.firstBaseUpdate = G, d.lastBaseUpdate = te, y === null && (d.shared.lanes = 0), wu |= S, n.lanes = S, n.memoizedState = ue;
    }
  }
  function Ps(n, l) {
    if (typeof n != "function")
      throw Error(m(191, n));
    n.call(l);
  }
  function ef(n, l) {
    var u = n.callbacks;
    if (u !== null)
      for (n.callbacks = null, n = 0; n < u.length; n++)
        Ps(u[n], l);
  }
  var vc = $(null), tf = $(0);
  function vn(n, l) {
    n = _u, se(tf, n), se(vc, l), _u = n | l.baseLanes;
  }
  function Oo() {
    se(tf, _u), se(vc, vc.current);
  }
  function Do() {
    _u = tf.current, le(vc), le(tf);
  }
  var Za = 0, Je = null, bt = null, Lt = null, nf = !1, Aa = !1, vi = !1, hl = 0, Ra = 0, Du = null, By = 0;
  function Gt() {
    throw Error(m(321));
  }
  function Is(n, l) {
    if (l === null) return !1;
    for (var u = 0; u < l.length && u < n.length; u++)
      if (!An(n[u], l[u])) return !1;
    return !0;
  }
  function ed(n, l, u, o, d, y) {
    return Za = y, Je = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, C.H = n === null || n.memoizedState === null ? em : tm, vi = !1, y = u(o, d), vi = !1, Aa && (y = Ly(
      l,
      u,
      o,
      d
    )), gi(n), y;
  }
  function gi(n) {
    C.H = vd;
    var l = bt !== null && bt.next !== null;
    if (Za = 0, Lt = bt = Je = null, nf = !1, Ra = 0, Du = null, l) throw Error(m(300));
    n === null || rn || (n = n.dependencies, n !== null && Jr(n) && (rn = !0));
  }
  function Ly(n, l, u, o) {
    Je = n;
    var d = 0;
    do {
      if (Aa && (Du = null), Ra = 0, Aa = !1, 25 <= d) throw Error(m(301));
      if (d += 1, Lt = bt = null, n.updateQueue != null) {
        var y = n.updateQueue;
        y.lastEffect = null, y.events = null, y.stores = null, y.memoCache != null && (y.memoCache.index = 0);
      }
      C.H = zu, y = l(u, o);
    } while (Aa);
    return y;
  }
  function w0() {
    var n = C.H, l = n.useState()[0];
    return l = typeof l.then == "function" ? lf(l) : l, n = n.useState()[0], (bt !== null ? bt.memoizedState : null) !== n && (Je.flags |= 1024), l;
  }
  function td() {
    var n = hl !== 0;
    return hl = 0, n;
  }
  function zo(n, l, u) {
    l.updateQueue = n.updateQueue, l.flags &= -2053, n.lanes &= ~u;
  }
  function nd(n) {
    if (nf) {
      for (n = n.memoizedState; n !== null; ) {
        var l = n.queue;
        l !== null && (l.pending = null), n = n.next;
      }
      nf = !1;
    }
    Za = 0, Lt = bt = Je = null, Aa = !1, Ra = hl = 0, Du = null;
  }
  function Yn() {
    var n = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Lt === null ? Je.memoizedState = Lt = n : Lt = Lt.next = n, Lt;
  }
  function Xt() {
    if (bt === null) {
      var n = Je.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = bt.next;
    var l = Lt === null ? Je.memoizedState : Lt.next;
    if (l !== null)
      Lt = l, bt = n;
    else {
      if (n === null)
        throw Je.alternate === null ? Error(m(467)) : Error(m(310));
      bt = n, n = {
        memoizedState: bt.memoizedState,
        baseState: bt.baseState,
        baseQueue: bt.baseQueue,
        queue: bt.queue,
        next: null
      }, Lt === null ? Je.memoizedState = Lt = n : Lt = Lt.next = n;
    }
    return Lt;
  }
  function af() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function lf(n) {
    var l = Ra;
    return Ra += 1, Du === null && (Du = []), n = wy(Du, n, l), l = Je, (Lt === null ? l.memoizedState : Lt.next) === null && (l = l.alternate, C.H = l === null || l.memoizedState === null ? em : tm), n;
  }
  function tn(n) {
    if (n !== null && typeof n == "object") {
      if (typeof n.then == "function") return lf(n);
      if (n.$$typeof === P) return pn(n);
    }
    throw Error(m(438, String(n)));
  }
  function ad(n) {
    var l = null, u = Je.updateQueue;
    if (u !== null && (l = u.memoCache), l == null) {
      var o = Je.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (l = {
        data: o.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), u === null && (u = af(), Je.updateQueue = u), u.memoCache = l, u = l.data[l.index], u === void 0)
      for (u = l.data[l.index] = Array(n), o = 0; o < n; o++)
        u[o] = Ve;
    return l.index++, u;
  }
  function jl(n, l) {
    return typeof l == "function" ? l(n) : l;
  }
  function uf(n) {
    var l = Xt();
    return ld(l, bt, n);
  }
  function ld(n, l, u) {
    var o = n.queue;
    if (o === null) throw Error(m(311));
    o.lastRenderedReducer = u;
    var d = n.baseQueue, y = o.pending;
    if (y !== null) {
      if (d !== null) {
        var S = d.next;
        d.next = y.next, y.next = S;
      }
      l.baseQueue = d = y, o.pending = null;
    }
    if (y = n.baseState, d === null) n.memoizedState = y;
    else {
      l = d.next;
      var E = S = null, D = null, G = l, te = !1;
      do {
        var ue = G.lane & -536870913;
        if (ue !== G.lane ? (it & ue) === ue : (Za & ue) === ue) {
          var X = G.revertLane;
          if (X === 0)
            D !== null && (D = D.next = {
              lane: 0,
              revertLane: 0,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null
            }), ue === Qa && (te = !0);
          else if ((Za & X) === X) {
            G = G.next, X === Qa && (te = !0);
            continue;
          } else
            ue = {
              lane: 0,
              revertLane: G.revertLane,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null
            }, D === null ? (E = D = ue, S = y) : D = D.next = ue, Je.lanes |= X, wu |= X;
          ue = G.action, vi && u(y, ue), y = G.hasEagerState ? G.eagerState : u(y, ue);
        } else
          X = {
            lane: ue,
            revertLane: G.revertLane,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null
          }, D === null ? (E = D = X, S = y) : D = D.next = X, Je.lanes |= ue, wu |= ue;
        G = G.next;
      } while (G !== null && G !== l);
      if (D === null ? S = y : D.next = E, !An(y, n.memoizedState) && (rn = !0, te && (u = on, u !== null)))
        throw u;
      n.memoizedState = y, n.baseState = S, n.baseQueue = D, o.lastRenderedState = y;
    }
    return d === null && (o.lanes = 0), [n.memoizedState, o.dispatch];
  }
  function ud(n) {
    var l = Xt(), u = l.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = n;
    var o = u.dispatch, d = u.pending, y = l.memoizedState;
    if (d !== null) {
      u.pending = null;
      var S = d = d.next;
      do
        y = n(y, S.action), S = S.next;
      while (S !== d);
      An(y, l.memoizedState) || (rn = !0), l.memoizedState = y, l.baseQueue === null && (l.baseState = y), u.lastRenderedState = y;
    }
    return [y, o];
  }
  function cf(n, l, u) {
    var o = Je, d = Xt(), y = yt;
    if (y) {
      if (u === void 0) throw Error(m(407));
      u = u();
    } else u = l();
    var S = !An(
      (bt || d).memoizedState,
      u
    );
    S && (d.memoizedState = u, rn = !0), d = d.queue;
    var E = Vy.bind(null, o, d, n);
    if (At(2048, 8, E, [n]), d.getSnapshot !== l || S || Lt !== null && Lt.memoizedState.tag & 1) {
      if (o.flags |= 2048, sa(
        9,
        ff(),
        Gy.bind(
          null,
          o,
          d,
          u,
          l
        ),
        null
      ), Ct === null) throw Error(m(349));
      y || (Za & 124) !== 0 || id(o, l, u);
    }
    return u;
  }
  function id(n, l, u) {
    n.flags |= 16384, n = { getSnapshot: l, value: u }, l = Je.updateQueue, l === null ? (l = af(), Je.updateQueue = l, l.stores = [n]) : (u = l.stores, u === null ? l.stores = [n] : u.push(n));
  }
  function Gy(n, l, u, o) {
    l.value = u, l.getSnapshot = o, Xy(l) && cd(n);
  }
  function Vy(n, l, u) {
    return u(function() {
      Xy(l) && cd(n);
    });
  }
  function Xy(n) {
    var l = n.getSnapshot;
    n = n.value;
    try {
      var u = l();
      return !An(n, u);
    } catch {
      return !0;
    }
  }
  function cd(n) {
    var l = Ul(n, 2);
    l !== null && za(l, n, 2);
  }
  function of(n) {
    var l = Yn();
    if (typeof n == "function") {
      var u = n;
      if (n = u(), vi) {
        yu(!0);
        try {
          u();
        } finally {
          yu(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = n, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jl,
      lastRenderedState: n
    }, l;
  }
  function od(n, l, u, o) {
    return n.baseState = u, ld(
      n,
      bt,
      typeof o == "function" ? o : jl
    );
  }
  function N0(n, l, u, o, d) {
    if (Tc(n)) throw Error(m(485));
    if (n = l.action, n !== null) {
      var y = {
        payload: d,
        action: n,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(S) {
          y.listeners.push(S);
        }
      };
      C.T !== null ? u(!0) : y.isTransition = !1, o(y), u = l.pending, u === null ? (y.next = l.pending = y, rd(l, y)) : (y.next = u.next, l.pending = u.next = y);
    }
  }
  function rd(n, l) {
    var u = l.action, o = l.payload, d = n.state;
    if (l.isTransition) {
      var y = C.T, S = {};
      C.T = S;
      try {
        var E = u(d, o), D = C.S;
        D !== null && D(S, E), rf(n, l, E);
      } catch (G) {
        sd(n, l, G);
      } finally {
        C.T = y;
      }
    } else
      try {
        y = u(d, o), rf(n, l, y);
      } catch (G) {
        sd(n, l, G);
      }
  }
  function rf(n, l, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(o) {
        fd(n, l, o);
      },
      function(o) {
        return sd(n, l, o);
      }
    ) : fd(n, l, u);
  }
  function fd(n, l, u) {
    l.status = "fulfilled", l.value = u, Qy(l), n.state = u, l = n.pending, l !== null && (u = l.next, u === l ? n.pending = null : (u = u.next, l.next = u, rd(n, u)));
  }
  function sd(n, l, u) {
    var o = n.pending;
    if (n.pending = null, o !== null) {
      o = o.next;
      do
        l.status = "rejected", l.reason = u, Qy(l), l = l.next;
      while (l !== o);
    }
    n.action = null;
  }
  function Qy(n) {
    n = n.listeners;
    for (var l = 0; l < n.length; l++) (0, n[l])();
  }
  function dd(n, l) {
    return l;
  }
  function Zy(n, l) {
    if (yt) {
      var u = Ct.formState;
      if (u !== null) {
        e: {
          var o = Je;
          if (yt) {
            if (mt) {
              t: {
                for (var d = mt, y = Xa; d.nodeType !== 8; ) {
                  if (!y) {
                    d = null;
                    break t;
                  }
                  if (d = vl(
                    d.nextSibling
                  ), d === null) {
                    d = null;
                    break t;
                  }
                }
                y = d.data, d = y === "F!" || y === "F" ? d : null;
              }
              if (d) {
                mt = vl(
                  d.nextSibling
                ), o = d.data === "F!";
                break e;
              }
            }
            Mu(o);
          }
          o = !1;
        }
        o && (l = u[0]);
      }
    }
    return u = Yn(), u.memoizedState = u.baseState = l, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dd,
      lastRenderedState: l
    }, u.queue = o, u = Py.bind(
      null,
      Je,
      o
    ), o.dispatch = u, o = of(!1), y = hf.bind(
      null,
      Je,
      !1,
      o.queue
    ), o = Yn(), d = {
      state: l,
      dispatch: null,
      action: n,
      pending: null
    }, o.queue = d, u = N0.bind(
      null,
      Je,
      d,
      y,
      u
    ), d.dispatch = u, o.memoizedState = n, [l, u, !1];
  }
  function Bl(n) {
    var l = Xt();
    return hd(l, bt, n);
  }
  function hd(n, l, u) {
    if (l = ld(
      n,
      l,
      dd
    )[0], n = uf(jl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var o = lf(l);
      } catch (S) {
        throw S === pi ? Pr : S;
      }
    else o = l;
    l = Xt();
    var d = l.queue, y = d.dispatch;
    return u !== l.memoizedState && (Je.flags |= 2048, sa(
      9,
      ff(),
      Qg.bind(null, d, u),
      null
    )), [o, y, n];
  }
  function Qg(n, l) {
    n.action = l;
  }
  function yd(n) {
    var l = Xt(), u = bt;
    if (u !== null)
      return hd(l, u, n);
    Xt(), l = l.memoizedState, u = Xt();
    var o = u.queue.dispatch;
    return u.memoizedState = n, [l, o, !1];
  }
  function sa(n, l, u, o) {
    return n = { tag: n, create: u, deps: o, inst: l, next: null }, l = Je.updateQueue, l === null && (l = af(), Je.updateQueue = l), u = l.lastEffect, u === null ? l.lastEffect = n.next = n : (o = u.next, u.next = n, n.next = o, l.lastEffect = n), n;
  }
  function ff() {
    return { destroy: void 0, resource: void 0 };
  }
  function sf() {
    return Xt().memoizedState;
  }
  function bi(n, l, u, o) {
    var d = Yn();
    o = o === void 0 ? null : o, Je.flags |= n, d.memoizedState = sa(
      1 | l,
      ff(),
      u,
      o
    );
  }
  function At(n, l, u, o) {
    var d = Xt();
    o = o === void 0 ? null : o;
    var y = d.memoizedState.inst;
    bt !== null && o !== null && Is(o, bt.memoizedState.deps) ? d.memoizedState = sa(l, y, u, o) : (Je.flags |= n, d.memoizedState = sa(
      1 | l,
      y,
      u,
      o
    ));
  }
  function q0(n, l) {
    bi(8390656, 8, n, l);
  }
  function Y0(n, l) {
    At(2048, 8, n, l);
  }
  function ky(n, l) {
    return At(4, 2, n, l);
  }
  function yl(n, l) {
    return At(4, 4, n, l);
  }
  function $y(n, l) {
    if (typeof l == "function") {
      n = n();
      var u = l(n);
      return function() {
        typeof u == "function" ? u() : l(null);
      };
    }
    if (l != null)
      return n = n(), l.current = n, function() {
        l.current = null;
      };
  }
  function md(n, l, u) {
    u = u != null ? u.concat([n]) : null, At(4, 4, $y.bind(null, l, n), u);
  }
  function gc() {
  }
  function bc(n, l) {
    var u = Xt();
    l = l === void 0 ? null : l;
    var o = u.memoizedState;
    return l !== null && Is(l, o[1]) ? o[0] : (u.memoizedState = [n, l], n);
  }
  function Jy(n, l) {
    var u = Xt();
    l = l === void 0 ? null : l;
    var o = u.memoizedState;
    if (l !== null && Is(l, o[1]))
      return o[0];
    if (o = n(), vi) {
      yu(!0);
      try {
        n();
      } finally {
        yu(!1);
      }
    }
    return u.memoizedState = [o, l], o;
  }
  function df(n, l, u) {
    return u === void 0 || (Za & 1073741824) !== 0 ? n.memoizedState = l : (n.memoizedState = u, n = Cm(), Je.lanes |= n, wu |= n, u);
  }
  function Ky(n, l, u, o) {
    return An(u, l) ? u : vc.current !== null ? (n = df(n, u, o), An(n, l) || (rn = !0), n) : (Za & 42) === 0 ? (rn = !0, n.memoizedState = u) : (n = Cm(), Je.lanes |= n, wu |= n, l);
  }
  function j0(n, l, u, o, d) {
    var y = K.p;
    K.p = y !== 0 && 8 > y ? y : 8;
    var S = C.T, E = {};
    C.T = E, hf(n, !1, l, u);
    try {
      var D = d(), G = C.S;
      if (G !== null && G(E, D), D !== null && typeof D == "object" && typeof D.then == "function") {
        var te = _0(
          D,
          o
        );
        Sc(
          n,
          l,
          te,
          Da(n)
        );
      } else
        Sc(
          n,
          l,
          o,
          Da(n)
        );
    } catch (ue) {
      Sc(
        n,
        l,
        { then: function() {
        }, status: "rejected", reason: ue },
        Da()
      );
    } finally {
      K.p = y, C.T = S;
    }
  }
  function Zg() {
  }
  function pd(n, l, u, o) {
    if (n.tag !== 5) throw Error(m(476));
    var d = B0(n).queue;
    j0(
      n,
      d,
      l,
      oe,
      u === null ? Zg : function() {
        return Co(n), u(o);
      }
    );
  }
  function B0(n) {
    var l = n.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: oe,
      baseState: oe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jl,
        lastRenderedState: oe
      },
      next: null
    };
    var u = {};
    return l.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jl,
        lastRenderedState: u
      },
      next: null
    }, n.memoizedState = l, n = n.alternate, n !== null && (n.memoizedState = l), l;
  }
  function Co(n) {
    var l = B0(n).next.queue;
    Sc(n, l, {}, Da());
  }
  function ka() {
    return pn(ba);
  }
  function Wy() {
    return Xt().memoizedState;
  }
  function L0() {
    return Xt().memoizedState;
  }
  function G0(n) {
    for (var l = n.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var u = Da();
          n = fa(u);
          var o = Yl(l, n, u);
          o !== null && (za(o, l, u), pc(o, l, u)), l = { cache: Ao() }, n.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Fy(n, l, u) {
    var o = Da();
    u = {
      lane: o,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Tc(n) ? V0(l, u) : (u = mo(n, l, u, o), u !== null && (za(u, n, o), Iy(u, l, o)));
  }
  function Py(n, l, u) {
    var o = Da();
    Sc(n, l, u, o);
  }
  function Sc(n, l, u, o) {
    var d = {
      lane: o,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Tc(n)) V0(l, d);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = l.lastRenderedReducer, y !== null))
        try {
          var S = l.lastRenderedState, E = y(S, u);
          if (d.hasEagerState = !0, d.eagerState = E, An(E, S))
            return si(n, l, d, 0), Ct === null && rl(), !1;
        } catch {
        } finally {
        }
      if (u = mo(n, l, d, o), u !== null)
        return za(u, n, o), Iy(u, l, o), !0;
    }
    return !1;
  }
  function hf(n, l, u, o) {
    if (o = {
      lane: 2,
      revertLane: Nc(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Tc(n)) {
      if (l) throw Error(m(479));
    } else
      l = mo(
        n,
        u,
        o,
        2
      ), l !== null && za(l, n, 2);
  }
  function Tc(n) {
    var l = n.alternate;
    return n === Je || l !== null && l === Je;
  }
  function V0(n, l) {
    Aa = nf = !0;
    var u = n.pending;
    u === null ? l.next = l : (l.next = u.next, u.next = l), n.pending = l;
  }
  function Iy(n, l, u) {
    if ((u & 4194048) !== 0) {
      var o = l.lanes;
      o &= n.pendingLanes, u |= o, l.lanes = u, Ar(n, u);
    }
  }
  var vd = {
    readContext: pn,
    use: tn,
    useCallback: Gt,
    useContext: Gt,
    useEffect: Gt,
    useImperativeHandle: Gt,
    useLayoutEffect: Gt,
    useInsertionEffect: Gt,
    useMemo: Gt,
    useReducer: Gt,
    useRef: Gt,
    useState: Gt,
    useDebugValue: Gt,
    useDeferredValue: Gt,
    useTransition: Gt,
    useSyncExternalStore: Gt,
    useId: Gt,
    useHostTransitionStatus: Gt,
    useFormState: Gt,
    useActionState: Gt,
    useOptimistic: Gt,
    useMemoCache: Gt,
    useCacheRefresh: Gt
  }, em = {
    readContext: pn,
    use: tn,
    useCallback: function(n, l) {
      return Yn().memoizedState = [
        n,
        l === void 0 ? null : l
      ], n;
    },
    useContext: pn,
    useEffect: q0,
    useImperativeHandle: function(n, l, u) {
      u = u != null ? u.concat([n]) : null, bi(
        4194308,
        4,
        $y.bind(null, l, n),
        u
      );
    },
    useLayoutEffect: function(n, l) {
      return bi(4194308, 4, n, l);
    },
    useInsertionEffect: function(n, l) {
      bi(4, 2, n, l);
    },
    useMemo: function(n, l) {
      var u = Yn();
      l = l === void 0 ? null : l;
      var o = n();
      if (vi) {
        yu(!0);
        try {
          n();
        } finally {
          yu(!1);
        }
      }
      return u.memoizedState = [o, l], o;
    },
    useReducer: function(n, l, u) {
      var o = Yn();
      if (u !== void 0) {
        var d = u(l);
        if (vi) {
          yu(!0);
          try {
            u(l);
          } finally {
            yu(!1);
          }
        }
      } else d = l;
      return o.memoizedState = o.baseState = d, n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: n,
        lastRenderedState: d
      }, o.queue = n, n = n.dispatch = Fy.bind(
        null,
        Je,
        n
      ), [o.memoizedState, n];
    },
    useRef: function(n) {
      var l = Yn();
      return n = { current: n }, l.memoizedState = n;
    },
    useState: function(n) {
      n = of(n);
      var l = n.queue, u = Py.bind(null, Je, l);
      return l.dispatch = u, [n.memoizedState, u];
    },
    useDebugValue: gc,
    useDeferredValue: function(n, l) {
      var u = Yn();
      return df(u, n, l);
    },
    useTransition: function() {
      var n = of(!1);
      return n = j0.bind(
        null,
        Je,
        n.queue,
        !0,
        !1
      ), Yn().memoizedState = n, [!1, n];
    },
    useSyncExternalStore: function(n, l, u) {
      var o = Je, d = Yn();
      if (yt) {
        if (u === void 0)
          throw Error(m(407));
        u = u();
      } else {
        if (u = l(), Ct === null)
          throw Error(m(349));
        (it & 124) !== 0 || id(o, l, u);
      }
      d.memoizedState = u;
      var y = { value: u, getSnapshot: l };
      return d.queue = y, q0(Vy.bind(null, o, y, n), [
        n
      ]), o.flags |= 2048, sa(
        9,
        ff(),
        Gy.bind(
          null,
          o,
          y,
          u,
          l
        ),
        null
      ), u;
    },
    useId: function() {
      var n = Yn(), l = Ct.identifierPrefix;
      if (yt) {
        var u = Vt, o = sl;
        u = (o & ~(1 << 32 - ua(o) - 1)).toString(32) + u, l = "«" + l + "R" + u, u = hl++, 0 < u && (l += "H" + u.toString(32)), l += "»";
      } else
        u = By++, l = "«" + l + "r" + u.toString(32) + "»";
      return n.memoizedState = l;
    },
    useHostTransitionStatus: ka,
    useFormState: Zy,
    useActionState: Zy,
    useOptimistic: function(n) {
      var l = Yn();
      l.memoizedState = l.baseState = n;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = u, l = hf.bind(
        null,
        Je,
        !0,
        u
      ), u.dispatch = l, [n, l];
    },
    useMemoCache: ad,
    useCacheRefresh: function() {
      return Yn().memoizedState = G0.bind(
        null,
        Je
      );
    }
  }, tm = {
    readContext: pn,
    use: tn,
    useCallback: bc,
    useContext: pn,
    useEffect: Y0,
    useImperativeHandle: md,
    useInsertionEffect: ky,
    useLayoutEffect: yl,
    useMemo: Jy,
    useReducer: uf,
    useRef: sf,
    useState: function() {
      return uf(jl);
    },
    useDebugValue: gc,
    useDeferredValue: function(n, l) {
      var u = Xt();
      return Ky(
        u,
        bt.memoizedState,
        n,
        l
      );
    },
    useTransition: function() {
      var n = uf(jl)[0], l = Xt().memoizedState;
      return [
        typeof n == "boolean" ? n : lf(n),
        l
      ];
    },
    useSyncExternalStore: cf,
    useId: Wy,
    useHostTransitionStatus: ka,
    useFormState: Bl,
    useActionState: Bl,
    useOptimistic: function(n, l) {
      var u = Xt();
      return od(u, bt, n, l);
    },
    useMemoCache: ad,
    useCacheRefresh: L0
  }, zu = {
    readContext: pn,
    use: tn,
    useCallback: bc,
    useContext: pn,
    useEffect: Y0,
    useImperativeHandle: md,
    useInsertionEffect: ky,
    useLayoutEffect: yl,
    useMemo: Jy,
    useReducer: ud,
    useRef: sf,
    useState: function() {
      return ud(jl);
    },
    useDebugValue: gc,
    useDeferredValue: function(n, l) {
      var u = Xt();
      return bt === null ? df(u, n, l) : Ky(
        u,
        bt.memoizedState,
        n,
        l
      );
    },
    useTransition: function() {
      var n = ud(jl)[0], l = Xt().memoizedState;
      return [
        typeof n == "boolean" ? n : lf(n),
        l
      ];
    },
    useSyncExternalStore: cf,
    useId: Wy,
    useHostTransitionStatus: ka,
    useFormState: yd,
    useActionState: yd,
    useOptimistic: function(n, l) {
      var u = Xt();
      return bt !== null ? od(u, bt, n, l) : (u.baseState = n, [n, u.queue.dispatch]);
    },
    useMemoCache: ad,
    useCacheRefresh: L0
  }, Ec = null, Uo = 0;
  function gd(n) {
    var l = Uo;
    return Uo += 1, Ec === null && (Ec = []), wy(Ec, n, l);
  }
  function xc(n, l) {
    l = l.props.ref, n.ref = l !== void 0 ? l : null;
  }
  function jn(n, l) {
    throw l.$$typeof === _ ? Error(m(525)) : (n = Object.prototype.toString.call(l), Error(
      m(
        31,
        n === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : n
      )
    ));
  }
  function nm(n) {
    var l = n._init;
    return l(n._payload);
  }
  function da(n) {
    function l(j, N) {
      if (n) {
        var B = j.deletions;
        B === null ? (j.deletions = [N], j.flags |= 16) : B.push(N);
      }
    }
    function u(j, N) {
      if (!n) return null;
      for (; N !== null; )
        l(j, N), N = N.sibling;
      return null;
    }
    function o(j) {
      for (var N = /* @__PURE__ */ new Map(); j !== null; )
        j.key !== null ? N.set(j.key, j) : N.set(j.index, j), j = j.sibling;
      return N;
    }
    function d(j, N) {
      return j = fl(j, N), j.index = 0, j.sibling = null, j;
    }
    function y(j, N, B) {
      return j.index = B, n ? (B = j.alternate, B !== null ? (B = B.index, B < N ? (j.flags |= 67108866, N) : B) : (j.flags |= 67108866, N)) : (j.flags |= 1048576, N);
    }
    function S(j) {
      return n && j.alternate === null && (j.flags |= 67108866), j;
    }
    function E(j, N, B, ae) {
      return N === null || N.tag !== 6 ? (N = go(B, j.mode, ae), N.return = j, N) : (N = d(N, B), N.return = j, N);
    }
    function D(j, N, B, ae) {
      var Oe = B.type;
      return Oe === pe ? te(
        j,
        N,
        B.props.children,
        ae,
        B.key
      ) : N !== null && (N.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === He && nm(Oe) === N.type) ? (N = d(N, B.props), xc(N, B), N.return = j, N) : (N = he(
        B.type,
        B.key,
        B.props,
        null,
        j.mode,
        ae
      ), xc(N, B), N.return = j, N);
    }
    function G(j, N, B, ae) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== B.containerInfo || N.stateNode.implementation !== B.implementation ? (N = Bt(B, j.mode, ae), N.return = j, N) : (N = d(N, B.children || []), N.return = j, N);
    }
    function te(j, N, B, ae, Oe) {
      return N === null || N.tag !== 7 ? (N = La(
        B,
        j.mode,
        ae,
        Oe
      ), N.return = j, N) : (N = d(N, B), N.return = j, N);
    }
    function ue(j, N, B) {
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return N = go(
          "" + N,
          j.mode,
          B
        ), N.return = j, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Y:
            return B = he(
              N.type,
              N.key,
              N.props,
              null,
              j.mode,
              B
            ), xc(B, N), B.return = j, B;
          case ce:
            return N = Bt(
              N,
              j.mode,
              B
            ), N.return = j, N;
          case He:
            var ae = N._init;
            return N = ae(N._payload), ue(j, N, B);
        }
        if (et(N) || Te(N))
          return N = La(
            N,
            j.mode,
            B,
            null
          ), N.return = j, N;
        if (typeof N.then == "function")
          return ue(j, gd(N), B);
        if (N.$$typeof === P)
          return ue(
            j,
            Kr(j, N),
            B
          );
        jn(j, N);
      }
      return null;
    }
    function X(j, N, B, ae) {
      var Oe = N !== null ? N.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return Oe !== null ? null : E(j, N, "" + B, ae);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Y:
            return B.key === Oe ? D(j, N, B, ae) : null;
          case ce:
            return B.key === Oe ? G(j, N, B, ae) : null;
          case He:
            return Oe = B._init, B = Oe(B._payload), X(j, N, B, ae);
        }
        if (et(B) || Te(B))
          return Oe !== null ? null : te(j, N, B, ae, null);
        if (typeof B.then == "function")
          return X(
            j,
            N,
            gd(B),
            ae
          );
        if (B.$$typeof === P)
          return X(
            j,
            N,
            Kr(j, B),
            ae
          );
        jn(j, B);
      }
      return null;
    }
    function Z(j, N, B, ae, Oe) {
      if (typeof ae == "string" && ae !== "" || typeof ae == "number" || typeof ae == "bigint")
        return j = j.get(B) || null, E(N, j, "" + ae, Oe);
      if (typeof ae == "object" && ae !== null) {
        switch (ae.$$typeof) {
          case Y:
            return j = j.get(
              ae.key === null ? B : ae.key
            ) || null, D(N, j, ae, Oe);
          case ce:
            return j = j.get(
              ae.key === null ? B : ae.key
            ) || null, G(N, j, ae, Oe);
          case He:
            var nt = ae._init;
            return ae = nt(ae._payload), Z(
              j,
              N,
              B,
              ae,
              Oe
            );
        }
        if (et(ae) || Te(ae))
          return j = j.get(B) || null, te(N, j, ae, Oe, null);
        if (typeof ae.then == "function")
          return Z(
            j,
            N,
            B,
            gd(ae),
            Oe
          );
        if (ae.$$typeof === P)
          return Z(
            j,
            N,
            B,
            Kr(N, ae),
            Oe
          );
        jn(N, ae);
      }
      return null;
    }
    function je(j, N, B, ae) {
      for (var Oe = null, nt = null, Ne = N, Ge = N = 0, Sn = null; Ne !== null && Ge < B.length; Ge++) {
        Ne.index > Ge ? (Sn = Ne, Ne = null) : Sn = Ne.sibling;
        var dt = X(
          j,
          Ne,
          B[Ge],
          ae
        );
        if (dt === null) {
          Ne === null && (Ne = Sn);
          break;
        }
        n && Ne && dt.alternate === null && l(j, Ne), N = y(dt, N, Ge), nt === null ? Oe = dt : nt.sibling = dt, nt = dt, Ne = Sn;
      }
      if (Ge === B.length)
        return u(j, Ne), yt && ft(j, Ge), Oe;
      if (Ne === null) {
        for (; Ge < B.length; Ge++)
          Ne = ue(j, B[Ge], ae), Ne !== null && (N = y(
            Ne,
            N,
            Ge
          ), nt === null ? Oe = Ne : nt.sibling = Ne, nt = Ne);
        return yt && ft(j, Ge), Oe;
      }
      for (Ne = o(Ne); Ge < B.length; Ge++)
        Sn = Z(
          Ne,
          j,
          Ge,
          B[Ge],
          ae
        ), Sn !== null && (n && Sn.alternate !== null && Ne.delete(
          Sn.key === null ? Ge : Sn.key
        ), N = y(
          Sn,
          N,
          Ge
        ), nt === null ? Oe = Sn : nt.sibling = Sn, nt = Sn);
      return n && Ne.forEach(function(Yi) {
        return l(j, Yi);
      }), yt && ft(j, Ge), Oe;
    }
    function Be(j, N, B, ae) {
      if (B == null) throw Error(m(151));
      for (var Oe = null, nt = null, Ne = N, Ge = N = 0, Sn = null, dt = B.next(); Ne !== null && !dt.done; Ge++, dt = B.next()) {
        Ne.index > Ge ? (Sn = Ne, Ne = null) : Sn = Ne.sibling;
        var Yi = X(j, Ne, dt.value, ae);
        if (Yi === null) {
          Ne === null && (Ne = Sn);
          break;
        }
        n && Ne && Yi.alternate === null && l(j, Ne), N = y(Yi, N, Ge), nt === null ? Oe = Yi : nt.sibling = Yi, nt = Yi, Ne = Sn;
      }
      if (dt.done)
        return u(j, Ne), yt && ft(j, Ge), Oe;
      if (Ne === null) {
        for (; !dt.done; Ge++, dt = B.next())
          dt = ue(j, dt.value, ae), dt !== null && (N = y(dt, N, Ge), nt === null ? Oe = dt : nt.sibling = dt, nt = dt);
        return yt && ft(j, Ge), Oe;
      }
      for (Ne = o(Ne); !dt.done; Ge++, dt = B.next())
        dt = Z(Ne, j, Ge, dt.value, ae), dt !== null && (n && dt.alternate !== null && Ne.delete(dt.key === null ? Ge : dt.key), N = y(dt, N, Ge), nt === null ? Oe = dt : nt.sibling = dt, nt = dt);
      return n && Ne.forEach(function(a1) {
        return l(j, a1);
      }), yt && ft(j, Ge), Oe;
    }
    function vt(j, N, B, ae) {
      if (typeof B == "object" && B !== null && B.type === pe && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Y:
            e: {
              for (var Oe = B.key; N !== null; ) {
                if (N.key === Oe) {
                  if (Oe = B.type, Oe === pe) {
                    if (N.tag === 7) {
                      u(
                        j,
                        N.sibling
                      ), ae = d(
                        N,
                        B.props.children
                      ), ae.return = j, j = ae;
                      break e;
                    }
                  } else if (N.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === He && nm(Oe) === N.type) {
                    u(
                      j,
                      N.sibling
                    ), ae = d(N, B.props), xc(ae, B), ae.return = j, j = ae;
                    break e;
                  }
                  u(j, N);
                  break;
                } else l(j, N);
                N = N.sibling;
              }
              B.type === pe ? (ae = La(
                B.props.children,
                j.mode,
                ae,
                B.key
              ), ae.return = j, j = ae) : (ae = he(
                B.type,
                B.key,
                B.props,
                null,
                j.mode,
                ae
              ), xc(ae, B), ae.return = j, j = ae);
            }
            return S(j);
          case ce:
            e: {
              for (Oe = B.key; N !== null; ) {
                if (N.key === Oe)
                  if (N.tag === 4 && N.stateNode.containerInfo === B.containerInfo && N.stateNode.implementation === B.implementation) {
                    u(
                      j,
                      N.sibling
                    ), ae = d(N, B.children || []), ae.return = j, j = ae;
                    break e;
                  } else {
                    u(j, N);
                    break;
                  }
                else l(j, N);
                N = N.sibling;
              }
              ae = Bt(B, j.mode, ae), ae.return = j, j = ae;
            }
            return S(j);
          case He:
            return Oe = B._init, B = Oe(B._payload), vt(
              j,
              N,
              B,
              ae
            );
        }
        if (et(B))
          return je(
            j,
            N,
            B,
            ae
          );
        if (Te(B)) {
          if (Oe = Te(B), typeof Oe != "function") throw Error(m(150));
          return B = Oe.call(B), Be(
            j,
            N,
            B,
            ae
          );
        }
        if (typeof B.then == "function")
          return vt(
            j,
            N,
            gd(B),
            ae
          );
        if (B.$$typeof === P)
          return vt(
            j,
            N,
            Kr(j, B),
            ae
          );
        jn(j, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, N !== null && N.tag === 6 ? (u(j, N.sibling), ae = d(N, B), ae.return = j, j = ae) : (u(j, N), ae = go(B, j.mode, ae), ae.return = j, j = ae), S(j)) : u(j, N);
    }
    return function(j, N, B, ae) {
      try {
        Uo = 0;
        var Oe = vt(
          j,
          N,
          B,
          ae
        );
        return Ec = null, Oe;
      } catch (Ne) {
        if (Ne === pi || Ne === Pr) throw Ne;
        var nt = oa(29, Ne, null, j.mode);
        return nt.lanes = ae, nt.return = j, nt;
      } finally {
      }
    };
  }
  var Mc = da(!0), Ll = da(!1), Oa = $(null), Bn = null;
  function Cu(n) {
    var l = n.alternate;
    se(Rt, Rt.current & 1), se(Oa, n), Bn === null && (l === null || vc.current !== null || l.memoizedState !== null) && (Bn = n);
  }
  function Gl(n) {
    if (n.tag === 22) {
      if (se(Rt, Rt.current), se(Oa, n), Bn === null) {
        var l = n.alternate;
        l !== null && l.memoizedState !== null && (Bn = n);
      }
    } else Vl();
  }
  function Vl() {
    se(Rt, Rt.current), se(Oa, Oa.current);
  }
  function ml(n) {
    le(Oa), Bn === n && (Bn = null), le(Rt);
  }
  var Rt = $(0);
  function yf(n) {
    for (var l = n; l !== null; ) {
      if (l.tag === 13) {
        var u = l.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Yf(u)))
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === n) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === n) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  function Si(n, l, u, o) {
    l = n.memoizedState, u = u(o, l), u = u == null ? l : q({}, l, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var bd = {
    enqueueSetState: function(n, l, u) {
      n = n._reactInternals;
      var o = Da(), d = fa(o);
      d.payload = l, u != null && (d.callback = u), l = Yl(n, d, o), l !== null && (za(l, n, o), pc(l, n, o));
    },
    enqueueReplaceState: function(n, l, u) {
      n = n._reactInternals;
      var o = Da(), d = fa(o);
      d.tag = 1, d.payload = l, u != null && (d.callback = u), l = Yl(n, d, o), l !== null && (za(l, n, o), pc(l, n, o));
    },
    enqueueForceUpdate: function(n, l) {
      n = n._reactInternals;
      var u = Da(), o = fa(u);
      o.tag = 2, l != null && (o.callback = l), l = Yl(n, o, u), l !== null && (za(l, n, u), pc(l, n, u));
    }
  };
  function Ho(n, l, u, o, d, y, S) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, y, S) : l.prototype && l.prototype.isPureReactComponent ? !ci(u, o) || !ci(d, y) : !0;
  }
  function Ac(n, l, u, o) {
    n = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(u, o), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(u, o), l.state !== n && bd.enqueueReplaceState(l, l.state, null);
  }
  function Ti(n, l) {
    var u = l;
    if ("ref" in l) {
      u = {};
      for (var o in l)
        o !== "ref" && (u[o] = l[o]);
    }
    if (n = n.defaultProps) {
      u === l && (u = q({}, u));
      for (var d in n)
        u[d] === void 0 && (u[d] = n[d]);
    }
    return u;
  }
  var mf = typeof reportError == "function" ? reportError : function(n) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof n == "object" && n !== null && typeof n.message == "string" ? String(n.message) : String(n),
        error: n
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", n);
      return;
    }
    console.error(n);
  };
  function _o(n) {
    mf(n);
  }
  function am(n) {
    console.error(n);
  }
  function pf(n) {
    mf(n);
  }
  function vf(n, l) {
    try {
      var u = n.onUncaughtError;
      u(l.value, { componentStack: l.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function lm(n, l, u) {
    try {
      var o = n.onCaughtError;
      o(u.value, {
        componentStack: u.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function um(n, l, u) {
    return u = fa(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      vf(n, l);
    }, u;
  }
  function im(n) {
    return n = fa(n), n.tag = 3, n;
  }
  function ha(n, l, u, o) {
    var d = u.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var y = o.value;
      n.payload = function() {
        return d(y);
      }, n.callback = function() {
        lm(l, u, o);
      };
    }
    var S = u.stateNode;
    S !== null && typeof S.componentDidCatch == "function" && (n.callback = function() {
      lm(l, u, o), typeof d != "function" && (Ai === null ? Ai = /* @__PURE__ */ new Set([this]) : Ai.add(this));
      var E = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: E !== null ? E : ""
      });
    });
  }
  function X0(n, l, u, o, d) {
    if (u.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (l = u.alternate, l !== null && xo(
        l,
        u,
        d,
        !0
      ), u = Oa.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Bn === null ? wc() : u.alternate === null && $t === 0 && ($t = 3), u.flags &= -257, u.flags |= 65536, u.lanes = d, o === Js ? u.flags |= 16384 : (l = u.updateQueue, l === null ? u.updateQueue = /* @__PURE__ */ new Set([o]) : l.add(o), Zd(n, o, d)), !1;
          case 22:
            return u.flags |= 65536, o === Js ? u.flags |= 16384 : (l = u.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, u.updateQueue = l) : (u = l.retryQueue, u === null ? l.retryQueue = /* @__PURE__ */ new Set([o]) : u.add(o)), Zd(n, o, d)), !1;
        }
        throw Error(m(435, u.tag));
      }
      return Zd(n, o, d), wc(), !1;
    }
    if (yt)
      return l = Oa.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = d, o !== hc && (n = Error(m(422), { cause: o }), Eo(Ma(n, u)))) : (o !== hc && (l = Error(m(423), {
        cause: o
      }), Eo(
        Ma(l, u)
      )), n = n.current.alternate, n.flags |= 65536, d &= -d, n.lanes |= d, o = Ma(o, u), d = um(
        n.stateNode,
        o,
        d
      ), Yy(n, d), $t !== 4 && ($t = 2)), !1;
    var y = Error(m(520), { cause: o });
    if (y = Ma(y, u), Lo === null ? Lo = [y] : Lo.push(y), $t !== 4 && ($t = 2), l === null) return !0;
    o = Ma(o, u), u = l;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, n = d & -d, u.lanes |= n, n = um(u.stateNode, o, n), Yy(u, n), !1;
        case 1:
          if (l = u.type, y = u.stateNode, (u.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Ai === null || !Ai.has(y))))
            return u.flags |= 65536, d &= -d, u.lanes |= d, d = im(d), ha(
              d,
              n,
              u,
              o
            ), Yy(u, d), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Qt = Error(m(461)), rn = !1;
  function gn(n, l, u, o) {
    l.child = n === null ? Ll(l, null, u, o) : Mc(
      l,
      n.child,
      u,
      o
    );
  }
  function Q0(n, l, u, o, d) {
    u = u.render;
    var y = l.ref;
    if ("ref" in o) {
      var S = {};
      for (var E in o)
        E !== "ref" && (S[E] = o[E]);
    } else S = o;
    return yi(l), o = ed(
      n,
      l,
      u,
      S,
      y,
      d
    ), E = td(), n !== null && !rn ? (zo(n, l, d), Xl(n, l, d)) : (yt && E && dc(l), l.flags |= 1, gn(n, l, o, d), l.child);
  }
  function Uu(n, l, u, o, d) {
    if (n === null) {
      var y = u.type;
      return typeof y == "function" && !Qr(y) && y.defaultProps === void 0 && u.compare === null ? (l.tag = 15, l.type = y, Rc(
        n,
        l,
        y,
        o,
        d
      )) : (n = he(
        u.type,
        null,
        o,
        l,
        l.mode,
        d
      ), n.ref = l.ref, n.return = l, l.child = n);
    }
    if (y = n.child, !zd(n, d)) {
      var S = y.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ci, u(S, o) && n.ref === l.ref)
        return Xl(n, l, d);
    }
    return l.flags |= 1, n = fl(y, o), n.ref = l.ref, n.return = l, l.child = n;
  }
  function Rc(n, l, u, o, d) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (ci(y, o) && n.ref === l.ref)
        if (rn = !1, l.pendingProps = o = y, zd(n, d))
          (n.flags & 131072) !== 0 && (rn = !0);
        else
          return l.lanes = n.lanes, Xl(n, l, d);
    }
    return Td(
      n,
      l,
      u,
      o,
      d
    );
  }
  function Sd(n, l, u) {
    var o = l.pendingProps, d = o.children, y = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (o = y !== null ? y.baseLanes | u : u, n !== null) {
          for (d = l.child = n.child, y = 0; d !== null; )
            y = y | d.lanes | d.childLanes, d = d.sibling;
          l.childLanes = y & ~o;
        } else l.childLanes = 0, l.child = null;
        return Oc(
          n,
          l,
          o,
          u
        );
      }
      if ((u & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, n !== null && yc(
          l,
          y !== null ? y.cachePool : null
        ), y !== null ? vn(l, y) : Oo(), Gl(l);
      else
        return l.lanes = l.childLanes = 536870912, Oc(
          n,
          l,
          y !== null ? y.baseLanes | u : u,
          u
        );
    } else
      y !== null ? (yc(l, y.cachePool), vn(l, y), Vl(), l.memoizedState = null) : (n !== null && yc(l, null), Oo(), Vl());
    return gn(n, l, d, u), l.child;
  }
  function Oc(n, l, u, o) {
    var d = Fr();
    return d = d === null ? null : { parent: cn._currentValue, pool: d }, l.memoizedState = {
      baseLanes: u,
      cachePool: d
    }, n !== null && yc(l, null), Oo(), Gl(l), n !== null && xo(n, l, o, !0), null;
  }
  function gf(n, l) {
    var u = l.ref;
    if (u === null)
      n !== null && n.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(m(284));
      (n === null || n.ref !== u) && (l.flags |= 4194816);
    }
  }
  function Td(n, l, u, o, d) {
    return yi(l), u = ed(
      n,
      l,
      u,
      o,
      void 0,
      d
    ), o = td(), n !== null && !rn ? (zo(n, l, d), Xl(n, l, d)) : (yt && o && dc(l), l.flags |= 1, gn(n, l, u, d), l.child);
  }
  function cm(n, l, u, o, d, y) {
    return yi(l), l.updateQueue = null, u = Ly(
      l,
      o,
      u,
      d
    ), gi(n), o = td(), n !== null && !rn ? (zo(n, l, y), Xl(n, l, y)) : (yt && o && dc(l), l.flags |= 1, gn(n, l, u, y), l.child);
  }
  function Ed(n, l, u, o, d) {
    if (yi(l), l.stateNode === null) {
      var y = vo, S = u.contextType;
      typeof S == "object" && S !== null && (y = pn(S)), y = new u(o, y), l.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, y.updater = bd, l.stateNode = y, y._reactInternals = l, y = l.stateNode, y.props = o, y.state = l.memoizedState, y.refs = {}, Ws(l), S = u.contextType, y.context = typeof S == "object" && S !== null ? pn(S) : vo, y.state = l.memoizedState, S = u.getDerivedStateFromProps, typeof S == "function" && (Si(
        l,
        u,
        S,
        o
      ), y.state = l.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (S = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), S !== y.state && bd.enqueueReplaceState(y, y.state, null), Ou(l, o, y, d), Ro(), y.state = l.memoizedState), typeof y.componentDidMount == "function" && (l.flags |= 4194308), o = !0;
    } else if (n === null) {
      y = l.stateNode;
      var E = l.memoizedProps, D = Ti(u, E);
      y.props = D;
      var G = y.context, te = u.contextType;
      S = vo, typeof te == "object" && te !== null && (S = pn(te));
      var ue = u.getDerivedStateFromProps;
      te = typeof ue == "function" || typeof y.getSnapshotBeforeUpdate == "function", E = l.pendingProps !== E, te || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (E || G !== S) && Ac(
        l,
        y,
        o,
        S
      ), ql = !1;
      var X = l.memoizedState;
      y.state = X, Ou(l, o, y, d), Ro(), G = l.memoizedState, E || X !== G || ql ? (typeof ue == "function" && (Si(
        l,
        u,
        ue,
        o
      ), G = l.memoizedState), (D = ql || Ho(
        l,
        u,
        D,
        o,
        X,
        G,
        S
      )) ? (te || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = o, l.memoizedState = G), y.props = o, y.state = G, y.context = S, o = D) : (typeof y.componentDidMount == "function" && (l.flags |= 4194308), o = !1);
    } else {
      y = l.stateNode, Fs(n, l), S = l.memoizedProps, te = Ti(u, S), y.props = te, ue = l.pendingProps, X = y.context, G = u.contextType, D = vo, typeof G == "object" && G !== null && (D = pn(G)), E = u.getDerivedStateFromProps, (G = typeof E == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (S !== ue || X !== D) && Ac(
        l,
        y,
        o,
        D
      ), ql = !1, X = l.memoizedState, y.state = X, Ou(l, o, y, d), Ro();
      var Z = l.memoizedState;
      S !== ue || X !== Z || ql || n !== null && n.dependencies !== null && Jr(n.dependencies) ? (typeof E == "function" && (Si(
        l,
        u,
        E,
        o
      ), Z = l.memoizedState), (te = ql || Ho(
        l,
        u,
        te,
        o,
        X,
        Z,
        D
      ) || n !== null && n.dependencies !== null && Jr(n.dependencies)) ? (G || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(o, Z, D), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(
        o,
        Z,
        D
      )), typeof y.componentDidUpdate == "function" && (l.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || S === n.memoizedProps && X === n.memoizedState || (l.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && X === n.memoizedState || (l.flags |= 1024), l.memoizedProps = o, l.memoizedState = Z), y.props = o, y.state = Z, y.context = D, o = te) : (typeof y.componentDidUpdate != "function" || S === n.memoizedProps && X === n.memoizedState || (l.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && X === n.memoizedState || (l.flags |= 1024), o = !1);
    }
    return y = o, gf(n, l), o = (l.flags & 128) !== 0, y || o ? (y = l.stateNode, u = o && typeof u.getDerivedStateFromError != "function" ? null : y.render(), l.flags |= 1, n !== null && o ? (l.child = Mc(
      l,
      n.child,
      null,
      d
    ), l.child = Mc(
      l,
      null,
      u,
      d
    )) : gn(n, l, u, d), l.memoizedState = y.state, n = l.child) : n = Xl(
      n,
      l,
      d
    ), n;
  }
  function xd(n, l, u, o) {
    return To(), l.flags |= 256, gn(n, l, u, o), l.child;
  }
  var Md = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function om(n) {
    return { baseLanes: n, cachePool: ks() };
  }
  function rm(n, l, u) {
    return n = n !== null ? n.childLanes & ~u : 0, l && (n |= Ka), n;
  }
  function fm(n, l, u) {
    var o = l.pendingProps, d = !1, y = (l.flags & 128) !== 0, S;
    if ((S = y) || (S = n !== null && n.memoizedState === null ? !1 : (Rt.current & 2) !== 0), S && (d = !0, l.flags &= -129), S = (l.flags & 32) !== 0, l.flags &= -33, n === null) {
      if (yt) {
        if (d ? Cu(l) : Vl(), yt) {
          var E = mt, D;
          if (D = E) {
            e: {
              for (D = E, E = Xa; D.nodeType !== 8; ) {
                if (!E) {
                  E = null;
                  break e;
                }
                if (D = vl(
                  D.nextSibling
                ), D === null) {
                  E = null;
                  break e;
                }
              }
              E = D;
            }
            E !== null ? (l.memoizedState = {
              dehydrated: E,
              treeContext: xu !== null ? { id: sl, overflow: Vt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, D = oa(
              18,
              null,
              null,
              0
            ), D.stateNode = E, D.return = l, l.child = D, It = l, mt = null, D = !0) : D = !1;
          }
          D || Mu(l);
        }
        if (E = l.memoizedState, E !== null && (E = E.dehydrated, E !== null))
          return Yf(E) ? l.lanes = 32 : l.lanes = 536870912, null;
        ml(l);
      }
      return E = o.children, o = o.fallback, d ? (Vl(), d = l.mode, E = Rd(
        { mode: "hidden", children: E },
        d
      ), o = La(
        o,
        d,
        u,
        null
      ), E.return = l, o.return = l, E.sibling = o, l.child = E, d = l.child, d.memoizedState = om(u), d.childLanes = rm(
        n,
        S,
        u
      ), l.memoizedState = Md, o) : (Cu(l), Ad(l, E));
    }
    if (D = n.memoizedState, D !== null && (E = D.dehydrated, E !== null)) {
      if (y)
        l.flags & 256 ? (Cu(l), l.flags &= -257, l = Ei(
          n,
          l,
          u
        )) : l.memoizedState !== null ? (Vl(), l.child = n.child, l.flags |= 128, l = null) : (Vl(), d = o.fallback, E = l.mode, o = Rd(
          { mode: "visible", children: o.children },
          E
        ), d = La(
          d,
          E,
          u,
          null
        ), d.flags |= 2, o.return = l, d.return = l, o.sibling = d, l.child = o, Mc(
          l,
          n.child,
          null,
          u
        ), o = l.child, o.memoizedState = om(u), o.childLanes = rm(
          n,
          S,
          u
        ), l.memoizedState = Md, l = d);
      else if (Cu(l), Yf(E)) {
        if (S = E.nextSibling && E.nextSibling.dataset, S) var G = S.dgst;
        S = G, o = Error(m(419)), o.stack = "", o.digest = S, Eo({ value: o, source: null, stack: null }), l = Ei(
          n,
          l,
          u
        );
      } else if (rn || xo(n, l, u, !1), S = (u & n.childLanes) !== 0, rn || S) {
        if (S = Ct, S !== null && (o = u & -u, o = (o & 42) !== 0 ? 1 : al(o), o = (o & (S.suspendedLanes | u)) !== 0 ? 0 : o, o !== 0 && o !== D.retryLane))
          throw D.retryLane = o, Ul(n, o), za(S, n, o), Qt;
        E.data === "$?" || wc(), l = Ei(
          n,
          l,
          u
        );
      } else
        E.data === "$?" ? (l.flags |= 192, l.child = n.child, l = null) : (n = D.treeContext, mt = vl(
          E.nextSibling
        ), It = l, yt = !0, Va = null, Xa = !1, n !== null && (Ga[ra++] = sl, Ga[ra++] = Vt, Ga[ra++] = xu, sl = n.id, Vt = n.overflow, xu = l), l = Ad(
          l,
          o.children
        ), l.flags |= 4096);
      return l;
    }
    return d ? (Vl(), d = o.fallback, E = l.mode, D = n.child, G = D.sibling, o = fl(D, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = D.subtreeFlags & 65011712, G !== null ? d = fl(G, d) : (d = La(
      d,
      E,
      u,
      null
    ), d.flags |= 2), d.return = l, o.return = l, o.sibling = d, l.child = o, o = d, d = l.child, E = n.child.memoizedState, E === null ? E = om(u) : (D = E.cachePool, D !== null ? (G = cn._currentValue, D = D.parent !== G ? { parent: G, pool: G } : D) : D = ks(), E = {
      baseLanes: E.baseLanes | u,
      cachePool: D
    }), d.memoizedState = E, d.childLanes = rm(
      n,
      S,
      u
    ), l.memoizedState = Md, o) : (Cu(l), u = n.child, n = u.sibling, u = fl(u, {
      mode: "visible",
      children: o.children
    }), u.return = l, u.sibling = null, n !== null && (S = l.deletions, S === null ? (l.deletions = [n], l.flags |= 16) : S.push(n)), l.child = u, l.memoizedState = null, u);
  }
  function Ad(n, l) {
    return l = Rd(
      { mode: "visible", children: l },
      n.mode
    ), l.return = n, n.child = l;
  }
  function Rd(n, l) {
    return n = oa(22, n, null, l), n.lanes = 0, n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, n;
  }
  function Ei(n, l, u) {
    return Mc(l, n.child, null, u), n = Ad(
      l,
      l.pendingProps.children
    ), n.flags |= 2, l.memoizedState = null, n;
  }
  function bf(n, l, u) {
    n.lanes |= l;
    var o = n.alternate;
    o !== null && (o.lanes |= l), Gs(n.return, l, u);
  }
  function Od(n, l, u, o, d) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: u,
      tailMode: d
    } : (y.isBackwards = l, y.rendering = null, y.renderingStartTime = 0, y.last = o, y.tail = u, y.tailMode = d);
  }
  function Dd(n, l, u) {
    var o = l.pendingProps, d = o.revealOrder, y = o.tail;
    if (gn(n, l, o.children, u), o = Rt.current, (o & 2) !== 0)
      o = o & 1 | 2, l.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e: for (n = l.child; n !== null; ) {
          if (n.tag === 13)
            n.memoizedState !== null && bf(n, u, l);
          else if (n.tag === 19)
            bf(n, u, l);
          else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === l) break e;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === l)
              break e;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
      o &= 1;
    }
    switch (se(Rt, o), d) {
      case "forwards":
        for (u = l.child, d = null; u !== null; )
          n = u.alternate, n !== null && yf(n) === null && (d = u), u = u.sibling;
        u = d, u === null ? (d = l.child, l.child = null) : (d = u.sibling, u.sibling = null), Od(
          l,
          !1,
          d,
          u,
          y
        );
        break;
      case "backwards":
        for (u = null, d = l.child, l.child = null; d !== null; ) {
          if (n = d.alternate, n !== null && yf(n) === null) {
            l.child = d;
            break;
          }
          n = d.sibling, d.sibling = u, u = d, d = n;
        }
        Od(
          l,
          !0,
          u,
          null,
          y
        );
        break;
      case "together":
        Od(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Xl(n, l, u) {
    if (n !== null && (l.dependencies = n.dependencies), wu |= l.lanes, (u & l.childLanes) === 0)
      if (n !== null) {
        if (xo(
          n,
          l,
          u,
          !1
        ), (u & l.childLanes) === 0)
          return null;
      } else return null;
    if (n !== null && l.child !== n.child)
      throw Error(m(153));
    if (l.child !== null) {
      for (n = l.child, u = fl(n, n.pendingProps), l.child = u, u.return = l; n.sibling !== null; )
        n = n.sibling, u = u.sibling = fl(n, n.pendingProps), u.return = l;
      u.sibling = null;
    }
    return l.child;
  }
  function zd(n, l) {
    return (n.lanes & l) !== 0 ? !0 : (n = n.dependencies, !!(n !== null && Jr(n)));
  }
  function Z0(n, l, u) {
    switch (l.tag) {
      case 3:
        we(l, l.stateNode.containerInfo), Ru(l, cn, n.memoizedState.cache), To();
        break;
      case 27:
      case 5:
        Ee(l);
        break;
      case 4:
        we(l, l.stateNode.containerInfo);
        break;
      case 10:
        Ru(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 13:
        var o = l.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Cu(l), l.flags |= 128, null) : (u & l.child.childLanes) !== 0 ? fm(n, l, u) : (Cu(l), n = Xl(
            n,
            l,
            u
          ), n !== null ? n.sibling : null);
        Cu(l);
        break;
      case 19:
        var d = (n.flags & 128) !== 0;
        if (o = (u & l.childLanes) !== 0, o || (xo(
          n,
          l,
          u,
          !1
        ), o = (u & l.childLanes) !== 0), d) {
          if (o)
            return Dd(
              n,
              l,
              u
            );
          l.flags |= 128;
        }
        if (d = l.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), se(Rt, Rt.current), o) break;
        return null;
      case 22:
      case 23:
        return l.lanes = 0, Sd(n, l, u);
      case 24:
        Ru(l, cn, n.memoizedState.cache);
    }
    return Xl(n, l, u);
  }
  function k0(n, l, u) {
    if (n !== null)
      if (n.memoizedProps !== l.pendingProps)
        rn = !0;
      else {
        if (!zd(n, u) && (l.flags & 128) === 0)
          return rn = !1, Z0(
            n,
            l,
            u
          );
        rn = (n.flags & 131072) !== 0;
      }
    else
      rn = !1, yt && (l.flags & 1048576) !== 0 && Ls(l, bo, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        e: {
          n = l.pendingProps;
          var o = l.elementType, d = o._init;
          if (o = d(o._payload), l.type = o, typeof o == "function")
            Qr(o) ? (n = Ti(o, n), l.tag = 1, l = Ed(
              null,
              l,
              o,
              n,
              u
            )) : (l.tag = 0, l = Td(
              null,
              l,
              o,
              n,
              u
            ));
          else {
            if (o != null) {
              if (d = o.$$typeof, d === ne) {
                l.tag = 11, l = Q0(
                  null,
                  l,
                  o,
                  n,
                  u
                );
                break e;
              } else if (d === ve) {
                l.tag = 14, l = Uu(
                  null,
                  l,
                  o,
                  n,
                  u
                );
                break e;
              }
            }
            throw l = qe(o) || o, Error(m(306, l, ""));
          }
        }
        return l;
      case 0:
        return Td(
          n,
          l,
          l.type,
          l.pendingProps,
          u
        );
      case 1:
        return o = l.type, d = Ti(
          o,
          l.pendingProps
        ), Ed(
          n,
          l,
          o,
          d,
          u
        );
      case 3:
        e: {
          if (we(
            l,
            l.stateNode.containerInfo
          ), n === null) throw Error(m(387));
          o = l.pendingProps;
          var y = l.memoizedState;
          d = y.element, Fs(n, l), Ou(l, o, null, u);
          var S = l.memoizedState;
          if (o = S.cache, Ru(l, cn, o), o !== y.cache && Hy(
            l,
            [cn],
            u,
            !0
          ), Ro(), o = S.element, y.isDehydrated)
            if (y = {
              element: o,
              isDehydrated: !1,
              cache: S.cache
            }, l.updateQueue.baseState = y, l.memoizedState = y, l.flags & 256) {
              l = xd(
                n,
                l,
                o,
                u
              );
              break e;
            } else if (o !== d) {
              d = Ma(
                Error(m(424)),
                l
              ), Eo(d), l = xd(
                n,
                l,
                o,
                u
              );
              break e;
            } else {
              switch (n = l.stateNode.containerInfo, n.nodeType) {
                case 9:
                  n = n.body;
                  break;
                default:
                  n = n.nodeName === "HTML" ? n.ownerDocument.body : n;
              }
              for (mt = vl(n.firstChild), It = l, yt = !0, Va = null, Xa = !0, u = Ll(
                l,
                null,
                o,
                u
              ), l.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (To(), o === d) {
              l = Xl(
                n,
                l,
                u
              );
              break e;
            }
            gn(
              n,
              l,
              o,
              u
            );
          }
          l = l.child;
        }
        return l;
      case 26:
        return gf(n, l), n === null ? (u = ov(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = u : yt || (u = l.type, n = l.pendingProps, o = Fa(
          Ae.current
        ).createElement(u), o[mn] = l, o[Jn] = n, Qe(o, u, n), un(o), l.stateNode = o) : l.memoizedState = ov(
          l.type,
          n.memoizedProps,
          l.pendingProps,
          n.memoizedState
        ), null;
      case 27:
        return Ee(l), n === null && yt && (o = l.stateNode = Re(
          l.type,
          l.pendingProps,
          Ae.current
        ), It = l, Xa = !0, d = mt, Ui(l.type) ? (Hi = d, mt = vl(
          o.firstChild
        )) : mt = d), gn(
          n,
          l,
          l.pendingProps.children,
          u
        ), gf(n, l), n === null && (l.flags |= 4194304), l.child;
      case 5:
        return n === null && yt && ((d = o = mt) && (o = Po(
          o,
          l.type,
          l.pendingProps,
          Xa
        ), o !== null ? (l.stateNode = o, It = l, mt = vl(
          o.firstChild
        ), Xa = !1, d = !0) : d = !1), d || Mu(l)), Ee(l), d = l.type, y = l.pendingProps, S = n !== null ? n.memoizedProps : null, o = y.children, Pl(d, y) ? o = null : S !== null && Pl(d, S) && (l.flags |= 32), l.memoizedState !== null && (d = ed(
          n,
          l,
          w0,
          null,
          null,
          u
        ), ba._currentValue = d), gf(n, l), gn(n, l, o, u), l.child;
      case 6:
        return n === null && yt && ((n = u = mt) && (u = e1(
          u,
          l.pendingProps,
          Xa
        ), u !== null ? (l.stateNode = u, It = l, mt = null, n = !0) : n = !1), n || Mu(l)), null;
      case 13:
        return fm(n, l, u);
      case 4:
        return we(
          l,
          l.stateNode.containerInfo
        ), o = l.pendingProps, n === null ? l.child = Mc(
          l,
          null,
          o,
          u
        ) : gn(
          n,
          l,
          o,
          u
        ), l.child;
      case 11:
        return Q0(
          n,
          l,
          l.type,
          l.pendingProps,
          u
        );
      case 7:
        return gn(
          n,
          l,
          l.pendingProps,
          u
        ), l.child;
      case 8:
        return gn(
          n,
          l,
          l.pendingProps.children,
          u
        ), l.child;
      case 12:
        return gn(
          n,
          l,
          l.pendingProps.children,
          u
        ), l.child;
      case 10:
        return o = l.pendingProps, Ru(l, l.type, o.value), gn(
          n,
          l,
          o.children,
          u
        ), l.child;
      case 9:
        return d = l.type._context, o = l.pendingProps.children, yi(l), d = pn(d), o = o(d), l.flags |= 1, gn(n, l, o, u), l.child;
      case 14:
        return Uu(
          n,
          l,
          l.type,
          l.pendingProps,
          u
        );
      case 15:
        return Rc(
          n,
          l,
          l.type,
          l.pendingProps,
          u
        );
      case 19:
        return Dd(n, l, u);
      case 31:
        return o = l.pendingProps, u = l.mode, o = {
          mode: o.mode,
          children: o.children
        }, n === null ? (u = Rd(
          o,
          u
        ), u.ref = l.ref, l.child = u, u.return = l, l = u) : (u = fl(n.child, o), u.ref = l.ref, l.child = u, u.return = l, l = u), l;
      case 22:
        return Sd(n, l, u);
      case 24:
        return yi(l), o = pn(cn), n === null ? (d = Fr(), d === null && (d = Ct, y = Ao(), d.pooledCache = y, y.refCount++, y !== null && (d.pooledCacheLanes |= u), d = y), l.memoizedState = {
          parent: o,
          cache: d
        }, Ws(l), Ru(l, cn, d)) : ((n.lanes & u) !== 0 && (Fs(n, l), Ou(l, null, null, u), Ro()), d = n.memoizedState, y = l.memoizedState, d.parent !== o ? (d = { parent: o, cache: o }, l.memoizedState = d, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = d), Ru(l, cn, o)) : (o = y.cache, Ru(l, cn, o), o !== d.cache && Hy(
          l,
          [cn],
          u,
          !0
        ))), gn(
          n,
          l,
          l.pendingProps.children,
          u
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(m(156, l.tag));
  }
  function Ql(n) {
    n.flags |= 4;
  }
  function wo(n, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      n.flags &= -16777217;
    else if (n.flags |= 16777216, !$m(l)) {
      if (l = Oa.current, l !== null && ((it & 4194048) === it ? Bn !== null : (it & 62914560) !== it && (it & 536870912) === 0 || l !== Bn))
        throw mc = Js, $s;
      n.flags |= 8192;
    }
  }
  function Sf(n, l) {
    l !== null && (n.flags |= 4), n.flags & 16384 && (l = n.tag !== 22 ? ki() : 536870912, n.lanes |= l, Bo |= l);
  }
  function No(n, l) {
    if (!yt)
      switch (n.tailMode) {
        case "hidden":
          l = n.tail;
          for (var u = null; l !== null; )
            l.alternate !== null && (u = l), l = l.sibling;
          u === null ? n.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = n.tail;
          for (var o = null; u !== null; )
            u.alternate !== null && (o = u), u = u.sibling;
          o === null ? l || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Le(n) {
    var l = n.alternate !== null && n.alternate.child === n.child, u = 0, o = 0;
    if (l)
      for (var d = n.child; d !== null; )
        u |= d.lanes | d.childLanes, o |= d.subtreeFlags & 65011712, o |= d.flags & 65011712, d.return = n, d = d.sibling;
    else
      for (d = n.child; d !== null; )
        u |= d.lanes | d.childLanes, o |= d.subtreeFlags, o |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= o, n.childLanes = u, l;
  }
  function sm(n, l, u) {
    var o = l.pendingProps;
    switch (Hl(l), l.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Le(l), null;
      case 1:
        return Le(l), null;
      case 3:
        return u = l.stateNode, o = null, n !== null && (o = n.memoizedState.cache), l.memoizedState.cache !== o && (l.flags |= 2048), _l(cn), re(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (So(l) ? Ql(l) : n === null || n.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Uy())), Le(l), null;
      case 26:
        return u = l.memoizedState, n === null ? (Ql(l), u !== null ? (Le(l), wo(l, u)) : (Le(l), l.flags &= -16777217)) : u ? u !== n.memoizedState ? (Ql(l), Le(l), wo(l, u)) : (Le(l), l.flags &= -16777217) : (n.memoizedProps !== o && Ql(l), Le(l), l.flags &= -16777217), null;
      case 27:
        Ye(l), u = Ae.current;
        var d = l.type;
        if (n !== null && l.stateNode != null)
          n.memoizedProps !== o && Ql(l);
        else {
          if (!o) {
            if (l.stateNode === null)
              throw Error(m(166));
            return Le(l), null;
          }
          n = be.current, So(l) ? kr(l) : (n = Re(d, o, u), l.stateNode = n, Ql(l));
        }
        return Le(l), null;
      case 5:
        if (Ye(l), u = l.type, n !== null && l.stateNode != null)
          n.memoizedProps !== o && Ql(l);
        else {
          if (!o) {
            if (l.stateNode === null)
              throw Error(m(166));
            return Le(l), null;
          }
          if (n = be.current, So(l))
            kr(l);
          else {
            switch (d = Fa(
              Ae.current
            ), n) {
              case 1:
                n = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = d.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof o.is == "string" ? d.createElement("select", { is: o.is }) : d.createElement("select"), o.multiple ? n.multiple = !0 : o.size && (n.size = o.size);
                    break;
                  default:
                    n = typeof o.is == "string" ? d.createElement(u, { is: o.is }) : d.createElement(u);
                }
            }
            n[mn] = l, n[Jn] = o;
            e: for (d = l.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                n.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === l) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === l)
                  break e;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            l.stateNode = n;
            e: switch (Qe(n, u, o), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!o.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && Ql(l);
          }
        }
        return Le(l), l.flags &= -16777217, null;
      case 6:
        if (n && l.stateNode != null)
          n.memoizedProps !== o && Ql(l);
        else {
          if (typeof o != "string" && l.stateNode === null)
            throw Error(m(166));
          if (n = Ae.current, So(l)) {
            if (n = l.stateNode, u = l.memoizedProps, o = null, d = It, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  o = d.memoizedProps;
              }
            n[mn] = l, n = !!(n.nodeValue === u || o !== null && o.suppressHydrationWarning === !0 || Xm(n.nodeValue, u)), n || Mu(l);
          } else
            n = Fa(n).createTextNode(
              o
            ), n[mn] = l, l.stateNode = n;
        }
        return Le(l), null;
      case 13:
        if (o = l.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (d = So(l), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(m(318));
              if (d = l.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(m(317));
              d[mn] = l;
            } else
              To(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            Le(l), d = !1;
          } else
            d = Uy(), n !== null && n.memoizedState !== null && (n.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return l.flags & 256 ? (ml(l), l) : (ml(l), null);
        }
        if (ml(l), (l.flags & 128) !== 0)
          return l.lanes = u, l;
        if (u = o !== null, n = n !== null && n.memoizedState !== null, u) {
          o = l.child, d = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (d = o.alternate.memoizedState.cachePool.pool);
          var y = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (y = o.memoizedState.cachePool.pool), y !== d && (o.flags |= 2048);
        }
        return u !== n && u && (l.child.flags |= 8192), Sf(l, l.updateQueue), Le(l), null;
      case 4:
        return re(), n === null && Gm(l.stateNode.containerInfo), Le(l), null;
      case 10:
        return _l(l.type), Le(l), null;
      case 19:
        if (le(Rt), d = l.memoizedState, d === null) return Le(l), null;
        if (o = (l.flags & 128) !== 0, y = d.rendering, y === null)
          if (o) No(d, !1);
          else {
            if ($t !== 0 || n !== null && (n.flags & 128) !== 0)
              for (n = l.child; n !== null; ) {
                if (y = yf(n), y !== null) {
                  for (l.flags |= 128, No(d, !1), n = y.updateQueue, l.updateQueue = n, Sf(l, n), l.subtreeFlags = 0, n = u, u = l.child; u !== null; )
                    tt(u, n), u = u.sibling;
                  return se(
                    Rt,
                    Rt.current & 1 | 2
                  ), l.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Pt() > jd && (l.flags |= 128, o = !0, No(d, !1), l.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = yf(y), n !== null) {
              if (l.flags |= 128, o = !0, n = n.updateQueue, l.updateQueue = n, Sf(l, n), No(d, !0), d.tail === null && d.tailMode === "hidden" && !y.alternate && !yt)
                return Le(l), null;
            } else
              2 * Pt() - d.renderingStartTime > jd && u !== 536870912 && (l.flags |= 128, o = !0, No(d, !1), l.lanes = 4194304);
          d.isBackwards ? (y.sibling = l.child, l.child = y) : (n = d.last, n !== null ? n.sibling = y : l.child = y, d.last = y);
        }
        return d.tail !== null ? (l = d.tail, d.rendering = l, d.tail = l.sibling, d.renderingStartTime = Pt(), l.sibling = null, n = Rt.current, se(Rt, o ? n & 1 | 2 : n & 1), l) : (Le(l), null);
      case 22:
      case 23:
        return ml(l), Do(), o = l.memoizedState !== null, n !== null ? n.memoizedState !== null !== o && (l.flags |= 8192) : o && (l.flags |= 8192), o ? (u & 536870912) !== 0 && (l.flags & 128) === 0 && (Le(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : Le(l), u = l.updateQueue, u !== null && Sf(l, u.retryQueue), u = null, n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), o = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (o = l.memoizedState.cachePool.pool), o !== u && (l.flags |= 2048), n !== null && le(Nl), null;
      case 24:
        return u = null, n !== null && (u = n.memoizedState.cache), l.memoizedState.cache !== u && (l.flags |= 2048), _l(cn), Le(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, l.tag));
  }
  function kg(n, l) {
    switch (Hl(l), l.tag) {
      case 1:
        return n = l.flags, n & 65536 ? (l.flags = n & -65537 | 128, l) : null;
      case 3:
        return _l(cn), re(), n = l.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (l.flags = n & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return Ye(l), null;
      case 13:
        if (ml(l), n = l.memoizedState, n !== null && n.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(m(340));
          To();
        }
        return n = l.flags, n & 65536 ? (l.flags = n & -65537 | 128, l) : null;
      case 19:
        return le(Rt), null;
      case 4:
        return re(), null;
      case 10:
        return _l(l.type), null;
      case 22:
      case 23:
        return ml(l), Do(), n !== null && le(Nl), n = l.flags, n & 65536 ? (l.flags = n & -65537 | 128, l) : null;
      case 24:
        return _l(cn), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function dm(n, l) {
    switch (Hl(l), l.tag) {
      case 3:
        _l(cn), re();
        break;
      case 26:
      case 27:
      case 5:
        Ye(l);
        break;
      case 4:
        re();
        break;
      case 13:
        ml(l);
        break;
      case 19:
        le(Rt);
        break;
      case 10:
        _l(l.type);
        break;
      case 22:
      case 23:
        ml(l), Do(), n !== null && le(Nl);
        break;
      case 24:
        _l(cn);
    }
  }
  function Tf(n, l) {
    try {
      var u = l.updateQueue, o = u !== null ? u.lastEffect : null;
      if (o !== null) {
        var d = o.next;
        u = d;
        do {
          if ((u.tag & n) === n) {
            o = void 0;
            var y = u.create, S = u.inst;
            o = y(), S.destroy = o;
          }
          u = u.next;
        } while (u !== d);
      }
    } catch (E) {
      xt(l, l.return, E);
    }
  }
  function xi(n, l, u) {
    try {
      var o = l.updateQueue, d = o !== null ? o.lastEffect : null;
      if (d !== null) {
        var y = d.next;
        o = y;
        do {
          if ((o.tag & n) === n) {
            var S = o.inst, E = S.destroy;
            if (E !== void 0) {
              S.destroy = void 0, d = l;
              var D = u, G = E;
              try {
                G();
              } catch (te) {
                xt(
                  d,
                  D,
                  te
                );
              }
            }
          }
          o = o.next;
        } while (o !== y);
      }
    } catch (te) {
      xt(l, l.return, te);
    }
  }
  function Cd(n) {
    var l = n.updateQueue;
    if (l !== null) {
      var u = n.stateNode;
      try {
        ef(l, u);
      } catch (o) {
        xt(n, n.return, o);
      }
    }
  }
  function hm(n, l, u) {
    u.props = Ti(
      n.type,
      n.memoizedProps
    ), u.state = n.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (o) {
      xt(n, l, o);
    }
  }
  function qo(n, l) {
    try {
      var u = n.ref;
      if (u !== null) {
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            var o = n.stateNode;
            break;
          case 30:
            o = n.stateNode;
            break;
          default:
            o = n.stateNode;
        }
        typeof u == "function" ? n.refCleanup = u(o) : u.current = o;
      }
    } catch (d) {
      xt(n, l, d);
    }
  }
  function pl(n, l) {
    var u = n.ref, o = n.refCleanup;
    if (u !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (d) {
          xt(n, l, d);
        } finally {
          n.refCleanup = null, n = n.alternate, n != null && (n.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (d) {
          xt(n, l, d);
        }
      else u.current = null;
  }
  function Yo(n) {
    var l = n.type, u = n.memoizedProps, o = n.stateNode;
    try {
      e: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && o.focus();
          break e;
        case "img":
          u.src ? o.src = u.src : u.srcSet && (o.srcset = u.srcSet);
      }
    } catch (d) {
      xt(n, n.return, d);
    }
  }
  function ym(n, l, u) {
    try {
      var o = n.stateNode;
      Fg(o, n.type, u, l), o[Jn] = l;
    } catch (d) {
      xt(n, n.return, d);
    }
  }
  function $0(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 26 || n.tag === 27 && Ui(n.type) || n.tag === 4;
  }
  function $a(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || $0(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.tag === 27 && Ui(n.type) || n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Dc(n, l, u) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, l ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(n, l) : (l = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, l.appendChild(n), u = u._reactRootContainer, u != null || l.onclick !== null || (l.onclick = Wd));
    else if (o !== 4 && (o === 27 && Ui(n.type) && (u = n.stateNode, l = null), n = n.child, n !== null))
      for (Dc(n, l, u), n = n.sibling; n !== null; )
        Dc(n, l, u), n = n.sibling;
  }
  function Ud(n, l, u) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, l ? u.insertBefore(n, l) : u.appendChild(n);
    else if (o !== 4 && (o === 27 && Ui(n.type) && (u = n.stateNode), n = n.child, n !== null))
      for (Ud(n, l, u), n = n.sibling; n !== null; )
        Ud(n, l, u), n = n.sibling;
  }
  function Hd(n) {
    var l = n.stateNode, u = n.memoizedProps;
    try {
      for (var o = n.type, d = l.attributes; d.length; )
        l.removeAttributeNode(d[0]);
      Qe(l, o, u), l[mn] = n, l[Jn] = u;
    } catch (y) {
      xt(n, n.return, y);
    }
  }
  var Zl = !1, Zt = !1, _d = !1, wd = typeof WeakSet == "function" ? WeakSet : Set, fn = null;
  function mm(n, l) {
    if (n = n.containerInfo, wf = Lf, n = My(n), Vr(n)) {
      if ("selectionStart" in n)
        var u = {
          start: n.selectionStart,
          end: n.selectionEnd
        };
      else
        e: {
          u = (u = n.ownerDocument) && u.defaultView || window;
          var o = u.getSelection && u.getSelection();
          if (o && o.rangeCount !== 0) {
            u = o.anchorNode;
            var d = o.anchorOffset, y = o.focusNode;
            o = o.focusOffset;
            try {
              u.nodeType, y.nodeType;
            } catch {
              u = null;
              break e;
            }
            var S = 0, E = -1, D = -1, G = 0, te = 0, ue = n, X = null;
            t: for (; ; ) {
              for (var Z; ue !== u || d !== 0 && ue.nodeType !== 3 || (E = S + d), ue !== y || o !== 0 && ue.nodeType !== 3 || (D = S + o), ue.nodeType === 3 && (S += ue.nodeValue.length), (Z = ue.firstChild) !== null; )
                X = ue, ue = Z;
              for (; ; ) {
                if (ue === n) break t;
                if (X === u && ++G === d && (E = S), X === y && ++te === o && (D = S), (Z = ue.nextSibling) !== null) break;
                ue = X, X = ue.parentNode;
              }
              ue = Z;
            }
            u = E === -1 || D === -1 ? null : { start: E, end: D };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Nf = { focusedElem: n, selectionRange: u }, Lf = !1, fn = l; fn !== null; )
      if (l = fn, n = l.child, (l.subtreeFlags & 1024) !== 0 && n !== null)
        n.return = l, fn = n;
      else
        for (; fn !== null; ) {
          switch (l = fn, y = l.alternate, n = l.flags, l.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((n & 1024) !== 0 && y !== null) {
                n = void 0, u = l, d = y.memoizedProps, y = y.memoizedState, o = u.stateNode;
                try {
                  var je = Ti(
                    u.type,
                    d,
                    u.elementType === u.type
                  );
                  n = o.getSnapshotBeforeUpdate(
                    je,
                    y
                  ), o.__reactInternalSnapshotBeforeUpdate = n;
                } catch (Be) {
                  xt(
                    u,
                    u.return,
                    Be
                  );
                }
              }
              break;
            case 3:
              if ((n & 1024) !== 0) {
                if (n = l.stateNode.containerInfo, u = n.nodeType, u === 9)
                  qf(n);
                else if (u === 1)
                  switch (n.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      qf(n);
                      break;
                    default:
                      n.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((n & 1024) !== 0) throw Error(m(163));
          }
          if (n = l.sibling, n !== null) {
            n.return = l.return, fn = n;
            break;
          }
          fn = l.return;
        }
  }
  function pm(n, l, u) {
    var o = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        $l(n, u), o & 4 && Tf(5, u);
        break;
      case 1:
        if ($l(n, u), o & 4)
          if (n = u.stateNode, l === null)
            try {
              n.componentDidMount();
            } catch (S) {
              xt(u, u.return, S);
            }
          else {
            var d = Ti(
              u.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              n.componentDidUpdate(
                d,
                l,
                n.__reactInternalSnapshotBeforeUpdate
              );
            } catch (S) {
              xt(
                u,
                u.return,
                S
              );
            }
          }
        o & 64 && Cd(u), o & 512 && qo(u, u.return);
        break;
      case 3:
        if ($l(n, u), o & 64 && (n = u.updateQueue, n !== null)) {
          if (l = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                l = u.child.stateNode;
                break;
              case 1:
                l = u.child.stateNode;
            }
          try {
            ef(n, l);
          } catch (S) {
            xt(u, u.return, S);
          }
        }
        break;
      case 27:
        l === null && o & 4 && Hd(u);
      case 26:
      case 5:
        $l(n, u), l === null && o & 4 && Yo(u), o & 512 && qo(u, u.return);
        break;
      case 12:
        $l(n, u);
        break;
      case 13:
        $l(n, u), o & 4 && Nd(n, u), o & 64 && (n = u.memoizedState, n !== null && (n = n.dehydrated, n !== null && (u = $g.bind(
          null,
          u
        ), t1(n, u))));
        break;
      case 22:
        if (o = u.memoizedState !== null || Zl, !o) {
          l = l !== null && l.memoizedState !== null || Zt, d = Zl;
          var y = Zt;
          Zl = o, (Zt = l) && !y ? Mi(
            n,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : $l(n, u), Zl = d, Zt = y;
        }
        break;
      case 30:
        break;
      default:
        $l(n, u);
    }
  }
  function vm(n) {
    var l = n.alternate;
    l !== null && (n.alternate = null, vm(l)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (l = n.stateNode, l !== null && Rr(l)), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  var Nt = null, Rn = !1;
  function kl(n, l, u) {
    for (u = u.child; u !== null; )
      lt(n, l, u), u = u.sibling;
  }
  function lt(n, l, u) {
    if ($n && typeof $n.onCommitFiberUnmount == "function")
      try {
        $n.onCommitFiberUnmount(ao, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Zt || pl(u, l), kl(
          n,
          l,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Zt || pl(u, l);
        var o = Nt, d = Rn;
        Ui(u.type) && (Nt = u.stateNode, Rn = !1), kl(
          n,
          l,
          u
        ), va(u.stateNode), Nt = o, Rn = d;
        break;
      case 5:
        Zt || pl(u, l);
      case 6:
        if (o = Nt, d = Rn, Nt = null, kl(
          n,
          l,
          u
        ), Nt = o, Rn = d, Nt !== null)
          if (Rn)
            try {
              (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(u.stateNode);
            } catch (y) {
              xt(
                u,
                l,
                y
              );
            }
          else
            try {
              Nt.removeChild(u.stateNode);
            } catch (y) {
              xt(
                u,
                l,
                y
              );
            }
        break;
      case 18:
        Nt !== null && (Rn ? (n = Nt, Pd(
          n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
          u.stateNode
        ), tu(n)) : Pd(Nt, u.stateNode));
        break;
      case 4:
        o = Nt, d = Rn, Nt = u.stateNode.containerInfo, Rn = !0, kl(
          n,
          l,
          u
        ), Nt = o, Rn = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Zt || xi(2, u, l), Zt || xi(4, u, l), kl(
          n,
          l,
          u
        );
        break;
      case 1:
        Zt || (pl(u, l), o = u.stateNode, typeof o.componentWillUnmount == "function" && hm(
          u,
          l,
          o
        )), kl(
          n,
          l,
          u
        );
        break;
      case 21:
        kl(
          n,
          l,
          u
        );
        break;
      case 22:
        Zt = (o = Zt) || u.memoizedState !== null, kl(
          n,
          l,
          u
        ), Zt = o;
        break;
      default:
        kl(
          n,
          l,
          u
        );
    }
  }
  function Nd(n, l) {
    if (l.memoizedState === null && (n = l.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null))))
      try {
        tu(n);
      } catch (u) {
        xt(l, l.return, u);
      }
  }
  function gm(n) {
    switch (n.tag) {
      case 13:
      case 19:
        var l = n.stateNode;
        return l === null && (l = n.stateNode = new wd()), l;
      case 22:
        return n = n.stateNode, l = n._retryCache, l === null && (l = n._retryCache = new wd()), l;
      default:
        throw Error(m(435, n.tag));
    }
  }
  function qd(n, l) {
    var u = gm(n);
    l.forEach(function(o) {
      var d = Jg.bind(null, n, o);
      u.has(o) || (u.add(o), o.then(d, d));
    });
  }
  function Fn(n, l) {
    var u = l.deletions;
    if (u !== null)
      for (var o = 0; o < u.length; o++) {
        var d = u[o], y = n, S = l, E = S;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 27:
              if (Ui(E.type)) {
                Nt = E.stateNode, Rn = !1;
                break e;
              }
              break;
            case 5:
              Nt = E.stateNode, Rn = !1;
              break e;
            case 3:
            case 4:
              Nt = E.stateNode.containerInfo, Rn = !0;
              break e;
          }
          E = E.return;
        }
        if (Nt === null) throw Error(m(160));
        lt(y, S, d), Nt = null, Rn = !1, y = d.alternate, y !== null && (y.return = null), d.return = null;
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; )
        Ef(l, n), l = l.sibling;
  }
  var Pn = null;
  function Ef(n, l) {
    var u = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fn(l, n), bn(n), o & 4 && (xi(3, n, n.return), Tf(3, n), xi(5, n, n.return));
        break;
      case 1:
        Fn(l, n), bn(n), o & 512 && (Zt || u === null || pl(u, u.return)), o & 64 && Zl && (n = n.updateQueue, n !== null && (o = n.callbacks, o !== null && (u = n.shared.hiddenCallbacks, n.shared.hiddenCallbacks = u === null ? o : u.concat(o))));
        break;
      case 26:
        var d = Pn;
        if (Fn(l, n), bn(n), o & 512 && (Zt || u === null || pl(u, u.return)), o & 4) {
          var y = u !== null ? u.memoizedState : null;
          if (o = n.memoizedState, u === null)
            if (o === null)
              if (n.stateNode === null) {
                e: {
                  o = n.type, u = n.memoizedProps, d = d.ownerDocument || d;
                  t: switch (o) {
                    case "title":
                      y = d.getElementsByTagName("title")[0], (!y || y[ze] || y[mn] || y.namespaceURI === "http://www.w3.org/2000/svg" || y.hasAttribute("itemprop")) && (y = d.createElement(o), d.head.insertBefore(
                        y,
                        d.querySelector("head > title")
                      )), Qe(y, o, u), y[mn] = n, un(y), o = y;
                      break e;
                    case "link":
                      var S = Zm(
                        "link",
                        "href",
                        d
                      ).get(o + (u.href || ""));
                      if (S) {
                        for (var E = 0; E < S.length; E++)
                          if (y = S[E], y.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && y.getAttribute("rel") === (u.rel == null ? null : u.rel) && y.getAttribute("title") === (u.title == null ? null : u.title) && y.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            S.splice(E, 1);
                            break t;
                          }
                      }
                      y = d.createElement(o), Qe(y, o, u), d.head.appendChild(y);
                      break;
                    case "meta":
                      if (S = Zm(
                        "meta",
                        "content",
                        d
                      ).get(o + (u.content || ""))) {
                        for (E = 0; E < S.length; E++)
                          if (y = S[E], y.getAttribute("content") === (u.content == null ? null : "" + u.content) && y.getAttribute("name") === (u.name == null ? null : u.name) && y.getAttribute("property") === (u.property == null ? null : u.property) && y.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && y.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            S.splice(E, 1);
                            break t;
                          }
                      }
                      y = d.createElement(o), Qe(y, o, u), d.head.appendChild(y);
                      break;
                    default:
                      throw Error(m(468, o));
                  }
                  y[mn] = n, un(y), o = y;
                }
                n.stateNode = o;
              } else
                km(
                  d,
                  n.type,
                  n.stateNode
                );
            else
              n.stateNode = fv(
                d,
                o,
                n.memoizedProps
              );
          else
            y !== o ? (y === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : y.count--, o === null ? km(
              d,
              n.type,
              n.stateNode
            ) : fv(
              d,
              o,
              n.memoizedProps
            )) : o === null && n.stateNode !== null && ym(
              n,
              n.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Fn(l, n), bn(n), o & 512 && (Zt || u === null || pl(u, u.return)), u !== null && o & 4 && ym(
          n,
          n.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Fn(l, n), bn(n), o & 512 && (Zt || u === null || pl(u, u.return)), n.flags & 32) {
          d = n.stateNode;
          try {
            co(d, "");
          } catch (Z) {
            xt(n, n.return, Z);
          }
        }
        o & 4 && n.stateNode != null && (d = n.memoizedProps, ym(
          n,
          d,
          u !== null ? u.memoizedProps : d
        )), o & 1024 && (_d = !0);
        break;
      case 6:
        if (Fn(l, n), bn(n), o & 4) {
          if (n.stateNode === null)
            throw Error(m(162));
          o = n.memoizedProps, u = n.stateNode;
          try {
            u.nodeValue = o;
          } catch (Z) {
            xt(n, n.return, Z);
          }
        }
        break;
      case 3:
        if (Ni = null, d = Pn, Pn = Id(l.containerInfo), Fn(l, n), Pn = d, bn(n), o & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            tu(l.containerInfo);
          } catch (Z) {
            xt(n, n.return, Z);
          }
        _d && (_d = !1, bm(n));
        break;
      case 4:
        o = Pn, Pn = Id(
          n.stateNode.containerInfo
        ), Fn(l, n), bn(n), Pn = o;
        break;
      case 12:
        Fn(l, n), bn(n);
        break;
      case 13:
        Fn(l, n), bn(n), n.child.flags & 8192 && n.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Om = Pt()), o & 4 && (o = n.updateQueue, o !== null && (n.updateQueue = null, qd(n, o)));
        break;
      case 22:
        d = n.memoizedState !== null;
        var D = u !== null && u.memoizedState !== null, G = Zl, te = Zt;
        if (Zl = G || d, Zt = te || D, Fn(l, n), Zt = te, Zl = G, bn(n), o & 8192)
          e: for (l = n.stateNode, l._visibility = d ? l._visibility & -2 : l._visibility | 1, d && (u === null || D || Zl || Zt || qt(n)), u = null, l = n; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (u === null) {
                D = u = l;
                try {
                  if (y = D.stateNode, d)
                    S = y.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none";
                  else {
                    E = D.stateNode;
                    var ue = D.memoizedProps.style, X = ue != null && ue.hasOwnProperty("display") ? ue.display : null;
                    E.style.display = X == null || typeof X == "boolean" ? "" : ("" + X).trim();
                  }
                } catch (Z) {
                  xt(D, D.return, Z);
                }
              }
            } else if (l.tag === 6) {
              if (u === null) {
                D = l;
                try {
                  D.stateNode.nodeValue = d ? "" : D.memoizedProps;
                } catch (Z) {
                  xt(D, D.return, Z);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === n) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === n) break e;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === n) break e;
              u === l && (u = null), l = l.return;
            }
            u === l && (u = null), l.sibling.return = l.return, l = l.sibling;
          }
        o & 4 && (o = n.updateQueue, o !== null && (u = o.retryQueue, u !== null && (o.retryQueue = null, qd(n, u))));
        break;
      case 19:
        Fn(l, n), bn(n), o & 4 && (o = n.updateQueue, o !== null && (n.updateQueue = null, qd(n, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Fn(l, n), bn(n);
    }
  }
  function bn(n) {
    var l = n.flags;
    if (l & 2) {
      try {
        for (var u, o = n.return; o !== null; ) {
          if ($0(o)) {
            u = o;
            break;
          }
          o = o.return;
        }
        if (u == null) throw Error(m(160));
        switch (u.tag) {
          case 27:
            var d = u.stateNode, y = $a(n);
            Ud(n, y, d);
            break;
          case 5:
            var S = u.stateNode;
            u.flags & 32 && (co(S, ""), u.flags &= -33);
            var E = $a(n);
            Ud(n, E, S);
            break;
          case 3:
          case 4:
            var D = u.stateNode.containerInfo, G = $a(n);
            Dc(
              n,
              G,
              D
            );
            break;
          default:
            throw Error(m(161));
        }
      } catch (te) {
        xt(n, n.return, te);
      }
      n.flags &= -3;
    }
    l & 4096 && (n.flags &= -4097);
  }
  function bm(n) {
    if (n.subtreeFlags & 1024)
      for (n = n.child; n !== null; ) {
        var l = n;
        bm(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), n = n.sibling;
      }
  }
  function $l(n, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        pm(n, l.alternate, l), l = l.sibling;
  }
  function qt(n) {
    for (n = n.child; n !== null; ) {
      var l = n;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xi(4, l, l.return), qt(l);
          break;
        case 1:
          pl(l, l.return);
          var u = l.stateNode;
          typeof u.componentWillUnmount == "function" && hm(
            l,
            l.return,
            u
          ), qt(l);
          break;
        case 27:
          va(l.stateNode);
        case 26:
        case 5:
          pl(l, l.return), qt(l);
          break;
        case 22:
          l.memoizedState === null && qt(l);
          break;
        case 30:
          qt(l);
          break;
        default:
          qt(l);
      }
      n = n.sibling;
    }
  }
  function Mi(n, l, u) {
    for (u = u && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var o = l.alternate, d = n, y = l, S = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Mi(
            d,
            y,
            u
          ), Tf(4, y);
          break;
        case 1:
          if (Mi(
            d,
            y,
            u
          ), o = y, d = o.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (G) {
              xt(o, o.return, G);
            }
          if (o = y, d = o.updateQueue, d !== null) {
            var E = o.stateNode;
            try {
              var D = d.shared.hiddenCallbacks;
              if (D !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < D.length; d++)
                  Ps(D[d], E);
            } catch (G) {
              xt(o, o.return, G);
            }
          }
          u && S & 64 && Cd(y), qo(y, y.return);
          break;
        case 27:
          Hd(y);
        case 26:
        case 5:
          Mi(
            d,
            y,
            u
          ), u && o === null && S & 4 && Yo(y), qo(y, y.return);
          break;
        case 12:
          Mi(
            d,
            y,
            u
          );
          break;
        case 13:
          Mi(
            d,
            y,
            u
          ), u && S & 4 && Nd(d, y);
          break;
        case 22:
          y.memoizedState === null && Mi(
            d,
            y,
            u
          ), qo(y, y.return);
          break;
        case 30:
          break;
        default:
          Mi(
            d,
            y,
            u
          );
      }
      l = l.sibling;
    }
  }
  function Ja(n, l) {
    var u = null;
    n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), n = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (n = l.memoizedState.cachePool.pool), n !== u && (n != null && n.refCount++, u != null && wl(u));
  }
  function Yd(n, l) {
    n = null, l.alternate !== null && (n = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== n && (l.refCount++, n != null && wl(n));
  }
  function On(n, l, u, o) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Sm(
          n,
          l,
          u,
          o
        ), l = l.sibling;
  }
  function Sm(n, l, u, o) {
    var d = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        On(
          n,
          l,
          u,
          o
        ), d & 2048 && Tf(9, l);
        break;
      case 1:
        On(
          n,
          l,
          u,
          o
        );
        break;
      case 3:
        On(
          n,
          l,
          u,
          o
        ), d & 2048 && (n = null, l.alternate !== null && (n = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== n && (l.refCount++, n != null && wl(n)));
        break;
      case 12:
        if (d & 2048) {
          On(
            n,
            l,
            u,
            o
          ), n = l.stateNode;
          try {
            var y = l.memoizedProps, S = y.id, E = y.onPostCommit;
            typeof E == "function" && E(
              S,
              l.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (D) {
            xt(l, l.return, D);
          }
        } else
          On(
            n,
            l,
            u,
            o
          );
        break;
      case 13:
        On(
          n,
          l,
          u,
          o
        );
        break;
      case 23:
        break;
      case 22:
        y = l.stateNode, S = l.alternate, l.memoizedState !== null ? y._visibility & 2 ? On(
          n,
          l,
          u,
          o
        ) : pt(n, l) : y._visibility & 2 ? On(
          n,
          l,
          u,
          o
        ) : (y._visibility |= 2, Hu(
          n,
          l,
          u,
          o,
          (l.subtreeFlags & 10256) !== 0
        )), d & 2048 && Ja(S, l);
        break;
      case 24:
        On(
          n,
          l,
          u,
          o
        ), d & 2048 && Yd(l.alternate, l);
        break;
      default:
        On(
          n,
          l,
          u,
          o
        );
    }
  }
  function Hu(n, l, u, o, d) {
    for (d = d && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var y = n, S = l, E = u, D = o, G = S.flags;
      switch (S.tag) {
        case 0:
        case 11:
        case 15:
          Hu(
            y,
            S,
            E,
            D,
            d
          ), Tf(8, S);
          break;
        case 23:
          break;
        case 22:
          var te = S.stateNode;
          S.memoizedState !== null ? te._visibility & 2 ? Hu(
            y,
            S,
            E,
            D,
            d
          ) : pt(
            y,
            S
          ) : (te._visibility |= 2, Hu(
            y,
            S,
            E,
            D,
            d
          )), d && G & 2048 && Ja(
            S.alternate,
            S
          );
          break;
        case 24:
          Hu(
            y,
            S,
            E,
            D,
            d
          ), d && G & 2048 && Yd(S.alternate, S);
          break;
        default:
          Hu(
            y,
            S,
            E,
            D,
            d
          );
      }
      l = l.sibling;
    }
  }
  function pt(n, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var u = n, o = l, d = o.flags;
        switch (o.tag) {
          case 22:
            pt(u, o), d & 2048 && Ja(
              o.alternate,
              o
            );
            break;
          case 24:
            pt(u, o), d & 2048 && Yd(o.alternate, o);
            break;
          default:
            pt(u, o);
        }
        l = l.sibling;
      }
  }
  var zc = 8192;
  function kt(n) {
    if (n.subtreeFlags & zc)
      for (n = n.child; n !== null; )
        J0(n), n = n.sibling;
  }
  function J0(n) {
    switch (n.tag) {
      case 26:
        kt(n), n.flags & zc && n.memoizedState !== null && hv(
          Pn,
          n.memoizedState,
          n.memoizedProps
        );
        break;
      case 5:
        kt(n);
        break;
      case 3:
      case 4:
        var l = Pn;
        Pn = Id(n.stateNode.containerInfo), kt(n), Pn = l;
        break;
      case 22:
        n.memoizedState === null && (l = n.alternate, l !== null && l.memoizedState !== null ? (l = zc, zc = 16777216, kt(n), zc = l) : kt(n));
        break;
      default:
        kt(n);
    }
  }
  function Tm(n) {
    var l = n.alternate;
    if (l !== null && (n = l.child, n !== null)) {
      l.child = null;
      do
        l = n.sibling, n.sibling = null, n = l;
      while (n !== null);
    }
  }
  function Cc(n) {
    var l = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (l !== null)
        for (var u = 0; u < l.length; u++) {
          var o = l[u];
          fn = o, xm(
            o,
            n
          );
        }
      Tm(n);
    }
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Em(n), n = n.sibling;
  }
  function Em(n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Cc(n), n.flags & 2048 && xi(9, n, n.return);
        break;
      case 3:
        Cc(n);
        break;
      case 12:
        Cc(n);
        break;
      case 22:
        var l = n.stateNode;
        n.memoizedState !== null && l._visibility & 2 && (n.return === null || n.return.tag !== 13) ? (l._visibility &= -3, In(n)) : Cc(n);
        break;
      default:
        Cc(n);
    }
  }
  function In(n) {
    var l = n.deletions;
    if ((n.flags & 16) !== 0) {
      if (l !== null)
        for (var u = 0; u < l.length; u++) {
          var o = l[u];
          fn = o, xm(
            o,
            n
          );
        }
      Tm(n);
    }
    for (n = n.child; n !== null; ) {
      switch (l = n, l.tag) {
        case 0:
        case 11:
        case 15:
          xi(8, l, l.return), In(l);
          break;
        case 22:
          u = l.stateNode, u._visibility & 2 && (u._visibility &= -3, In(l));
          break;
        default:
          In(l);
      }
      n = n.sibling;
    }
  }
  function xm(n, l) {
    for (; fn !== null; ) {
      var u = fn;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          xi(8, u, l);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var o = u.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          wl(u.memoizedState.cache);
      }
      if (o = u.child, o !== null) o.return = u, fn = o;
      else
        e: for (u = n; fn !== null; ) {
          o = fn;
          var d = o.sibling, y = o.return;
          if (vm(o), o === u) {
            fn = null;
            break e;
          }
          if (d !== null) {
            d.return = y, fn = d;
            break e;
          }
          fn = y;
        }
    }
  }
  var Mm = {
    getCacheForType: function(n) {
      var l = pn(cn), u = l.data.get(n);
      return u === void 0 && (u = n(), l.data.set(n, u)), u;
    }
  }, K0 = typeof WeakMap == "function" ? WeakMap : Map, St = 0, Ct = null, ut = null, it = 0, Tt = 0, ya = null, Jl = !1, jo = !1, Am = !1, _u = 0, $t = 0, wu = 0, Uc = 0, Kl = 0, Ka = 0, Bo = 0, Lo = null, ma = null, Rm = !1, Om = 0, jd = 1 / 0, Go = null, Ai = null, Dn = 0, Wl = null, Vo = null, zn = 0, Bd = 0, Ld = null, Dm = null, Xo = 0, zm = null;
  function Da() {
    if ((St & 2) !== 0 && it !== 0)
      return it & -it;
    if (C.T !== null) {
      var n = Qa;
      return n !== 0 ? n : Nc();
    }
    return r0();
  }
  function Cm() {
    Ka === 0 && (Ka = (it & 536870912) === 0 || yt ? Fu() : 536870912);
    var n = Oa.current;
    return n !== null && (n.flags |= 32), Ka;
  }
  function za(n, l, u) {
    (n === Ct && (Tt === 2 || Tt === 9) || n.cancelPendingCommit !== null) && (Fl(n, 0), Nu(
      n,
      it,
      Ka,
      !1
    )), $i(n, u), ((St & 2) === 0 || n !== Ct) && (n === Ct && ((St & 2) === 0 && (Uc |= u), $t === 4 && Nu(
      n,
      it,
      Ka,
      !1
    )), pa(n));
  }
  function Qo(n, l, u) {
    if ((St & 6) !== 0) throw Error(m(327));
    var o = !u && (l & 124) === 0 && (l & n.expiredLanes) === 0 || xl(n, l), d = o ? Hm(n, l) : Gd(n, l, !0), y = o;
    do {
      if (d === 0) {
        jo && !o && Nu(n, l, 0, !1);
        break;
      } else {
        if (u = n.current.alternate, y && !W0(u)) {
          d = Gd(n, l, !1), y = !1;
          continue;
        }
        if (d === 2) {
          if (y = l, n.errorRecoveryDisabledLanes & y)
            var S = 0;
          else
            S = n.pendingLanes & -536870913, S = S !== 0 ? S : S & 536870912 ? 536870912 : 0;
          if (S !== 0) {
            l = S;
            e: {
              var E = n;
              d = Lo;
              var D = E.current.memoizedState.isDehydrated;
              if (D && (Fl(E, S).flags |= 256), S = Gd(
                E,
                S,
                !1
              ), S !== 2) {
                if (Am && !D) {
                  E.errorRecoveryDisabledLanes |= y, Uc |= y, d = 4;
                  break e;
                }
                y = ma, ma = d, y !== null && (ma === null ? ma = y : ma.push.apply(
                  ma,
                  y
                ));
              }
              d = S;
            }
            if (y = !1, d !== 2) continue;
          }
        }
        if (d === 1) {
          Fl(n, 0), Nu(n, l, 0, !0);
          break;
        }
        e: {
          switch (o = n, y = d, y) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              Nu(
                o,
                l,
                Ka,
                !Jl
              );
              break e;
            case 2:
              ma = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((l & 62914560) === l && (d = Om + 300 - Pt(), 10 < d)) {
            if (Nu(
              o,
              l,
              Ka,
              !Jl
            ), Wu(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Fd(
              xf.bind(
                null,
                o,
                u,
                ma,
                Go,
                Rm,
                l,
                Ka,
                Uc,
                Bo,
                Jl,
                y,
                2,
                -0,
                0
              ),
              d
            );
            break e;
          }
          xf(
            o,
            u,
            ma,
            Go,
            Rm,
            l,
            Ka,
            Uc,
            Bo,
            Jl,
            y,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    pa(n);
  }
  function xf(n, l, u, o, d, y, S, E, D, G, te, ue, X, Z) {
    if (n.timeoutHandle = -1, ue = l.subtreeFlags, (ue & 8192 || (ue & 16785408) === 16785408) && (nr = { stylesheets: null, count: 0, unsuspend: dv }, J0(l), ue = Jm(), ue !== null)) {
      n.cancelPendingCommit = ue(
        I0.bind(
          null,
          n,
          l,
          y,
          u,
          o,
          d,
          S,
          E,
          D,
          te,
          1,
          X,
          Z
        )
      ), Nu(n, y, S, !G);
      return;
    }
    I0(
      n,
      l,
      y,
      u,
      o,
      d,
      S,
      E,
      D
    );
  }
  function W0(n) {
    for (var l = n; ; ) {
      var u = l.tag;
      if ((u === 0 || u === 11 || u === 15) && l.flags & 16384 && (u = l.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var o = 0; o < u.length; o++) {
          var d = u[o], y = d.getSnapshot;
          d = d.value;
          try {
            if (!An(y(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = l.child, l.subtreeFlags & 16384 && u !== null)
        u.return = l, l = u;
      else {
        if (l === n) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function Nu(n, l, u, o) {
    l &= ~Kl, l &= ~Uc, n.suspendedLanes |= l, n.pingedLanes &= ~l, o && (n.warmLanes |= l), o = n.expirationTimes;
    for (var d = l; 0 < d; ) {
      var y = 31 - ua(d), S = 1 << y;
      o[y] = -1, d &= ~S;
    }
    u !== 0 && Mr(n, u, l);
  }
  function Hc() {
    return (St & 6) === 0 ? (Of(0), !1) : !0;
  }
  function Ri() {
    if (ut !== null) {
      if (Tt === 0)
        var n = ut.return;
      else
        n = ut, dl = Au = null, nd(n), Ec = null, Uo = 0, n = ut;
      for (; n !== null; )
        dm(n.alternate, n), n = n.return;
      ut = null;
    }
  }
  function Fl(n, l) {
    var u = n.timeoutHandle;
    u !== -1 && (n.timeoutHandle = -1, Pg(u)), u = n.cancelPendingCommit, u !== null && (n.cancelPendingCommit = null, u()), Ri(), Ct = n, ut = u = fl(n.current, null), it = l, Tt = 0, ya = null, Jl = !1, jo = xl(n, l), Am = !1, Bo = Ka = Kl = Uc = wu = $t = 0, ma = Lo = null, Rm = !1, (l & 8) !== 0 && (l |= l & 32);
    var o = n.entangledLanes;
    if (o !== 0)
      for (n = n.entanglements, o &= l; 0 < o; ) {
        var d = 31 - ua(o), y = 1 << d;
        l |= n[d], o &= ~y;
      }
    return _u = l, rl(), u;
  }
  function Um(n, l) {
    Je = null, C.H = vd, l === pi || l === Pr ? (l = Ny(), Tt = 3) : l === $s ? (l = Ny(), Tt = 4) : Tt = l === Qt ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, ya = l, ut === null && ($t = 1, vf(
      n,
      Ma(l, n.current)
    ));
  }
  function F0() {
    var n = C.H;
    return C.H = vd, n === null ? vd : n;
  }
  function _c() {
    var n = C.A;
    return C.A = Mm, n;
  }
  function wc() {
    $t = 4, Jl || (it & 4194048) !== it && Oa.current !== null || (jo = !0), (wu & 134217727) === 0 && (Uc & 134217727) === 0 || Ct === null || Nu(
      Ct,
      it,
      Ka,
      !1
    );
  }
  function Gd(n, l, u) {
    var o = St;
    St |= 2;
    var d = F0(), y = _c();
    (Ct !== n || it !== l) && (Go = null, Fl(n, l)), l = !1;
    var S = $t;
    e: do
      try {
        if (Tt !== 0 && ut !== null) {
          var E = ut, D = ya;
          switch (Tt) {
            case 8:
              Ri(), S = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Oa.current === null && (l = !0);
              var G = Tt;
              if (Tt = 0, ya = null, Zo(n, E, D, G), u && jo) {
                S = 0;
                break e;
              }
              break;
            default:
              G = Tt, Tt = 0, ya = null, Zo(n, E, D, G);
          }
        }
        Vd(), S = $t;
        break;
      } catch (te) {
        Um(n, te);
      }
    while (!0);
    return l && n.shellSuspendCounter++, dl = Au = null, St = o, C.H = d, C.A = y, ut === null && (Ct = null, it = 0, rl()), S;
  }
  function Vd() {
    for (; ut !== null; ) wm(ut);
  }
  function Hm(n, l) {
    var u = St;
    St |= 2;
    var o = F0(), d = _c();
    Ct !== n || it !== l ? (Go = null, jd = Pt() + 500, Fl(n, l)) : jo = xl(
      n,
      l
    );
    e: do
      try {
        if (Tt !== 0 && ut !== null) {
          l = ut;
          var y = ya;
          t: switch (Tt) {
            case 1:
              Tt = 0, ya = null, Zo(n, l, y, 1);
              break;
            case 2:
            case 9:
              if (Ks(y)) {
                Tt = 0, ya = null, Nm(l);
                break;
              }
              l = function() {
                Tt !== 2 && Tt !== 9 || Ct !== n || (Tt = 7), pa(n);
              }, y.then(l, l);
              break e;
            case 3:
              Tt = 7;
              break e;
            case 4:
              Tt = 5;
              break e;
            case 7:
              Ks(y) ? (Tt = 0, ya = null, Nm(l)) : (Tt = 0, ya = null, Zo(n, l, y, 7));
              break;
            case 5:
              var S = null;
              switch (ut.tag) {
                case 26:
                  S = ut.memoizedState;
                case 5:
                case 27:
                  var E = ut;
                  if (!S || $m(S)) {
                    Tt = 0, ya = null;
                    var D = E.sibling;
                    if (D !== null) ut = D;
                    else {
                      var G = E.return;
                      G !== null ? (ut = G, Mf(G)) : ut = null;
                    }
                    break t;
                  }
              }
              Tt = 0, ya = null, Zo(n, l, y, 5);
              break;
            case 6:
              Tt = 0, ya = null, Zo(n, l, y, 6);
              break;
            case 8:
              Ri(), $t = 6;
              break e;
            default:
              throw Error(m(462));
          }
        }
        _m();
        break;
      } catch (te) {
        Um(n, te);
      }
    while (!0);
    return dl = Au = null, C.H = o, C.A = d, St = u, ut !== null ? 0 : (Ct = null, it = 0, rl(), $t);
  }
  function _m() {
    for (; ut !== null && !hn(); )
      wm(ut);
  }
  function wm(n) {
    var l = k0(n.alternate, n, _u);
    n.memoizedProps = n.pendingProps, l === null ? Mf(n) : ut = l;
  }
  function Nm(n) {
    var l = n, u = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = cm(
          u,
          l,
          l.pendingProps,
          l.type,
          void 0,
          it
        );
        break;
      case 11:
        l = cm(
          u,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          it
        );
        break;
      case 5:
        nd(l);
      default:
        dm(u, l), l = ut = tt(l, _u), l = k0(u, l, _u);
    }
    n.memoizedProps = n.pendingProps, l === null ? Mf(n) : ut = l;
  }
  function Zo(n, l, u, o) {
    dl = Au = null, nd(l), Ec = null, Uo = 0;
    var d = l.return;
    try {
      if (X0(
        n,
        d,
        l,
        u,
        it
      )) {
        $t = 1, vf(
          n,
          Ma(u, n.current)
        ), ut = null;
        return;
      }
    } catch (y) {
      if (d !== null) throw ut = d, y;
      $t = 1, vf(
        n,
        Ma(u, n.current)
      ), ut = null;
      return;
    }
    l.flags & 32768 ? (yt || o === 1 ? n = !0 : jo || (it & 536870912) !== 0 ? n = !1 : (Jl = n = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Oa.current, o !== null && o.tag === 13 && (o.flags |= 16384))), P0(l, n)) : Mf(l);
  }
  function Mf(n) {
    var l = n;
    do {
      if ((l.flags & 32768) !== 0) {
        P0(
          l,
          Jl
        );
        return;
      }
      n = l.return;
      var u = sm(
        l.alternate,
        l,
        _u
      );
      if (u !== null) {
        ut = u;
        return;
      }
      if (l = l.sibling, l !== null) {
        ut = l;
        return;
      }
      ut = l = n;
    } while (l !== null);
    $t === 0 && ($t = 5);
  }
  function P0(n, l) {
    do {
      var u = kg(n.alternate, n);
      if (u !== null) {
        u.flags &= 32767, ut = u;
        return;
      }
      if (u = n.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !l && (n = n.sibling, n !== null)) {
        ut = n;
        return;
      }
      ut = n = u;
    } while (n !== null);
    $t = 6, ut = null;
  }
  function I0(n, l, u, o, d, y, S, E, D) {
    n.cancelPendingCommit = null;
    do
      Qd();
    while (Dn !== 0);
    if ((St & 6) !== 0) throw Error(m(327));
    if (l !== null) {
      if (l === n.current) throw Error(m(177));
      if (y = l.lanes | l.childLanes, y |= Cl, o0(
        n,
        u,
        y,
        S,
        E,
        D
      ), n === Ct && (ut = Ct = null, it = 0), Vo = l, Wl = n, zn = u, Bd = y, Ld = d, Dm = o, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (n.callbackNode = null, n.callbackPriority = 0, Kg(xr, function() {
        return qm(), null;
      })) : (n.callbackNode = null, n.callbackPriority = 0), o = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || o) {
        o = C.T, C.T = null, d = K.p, K.p = 2, S = St, St |= 4;
        try {
          mm(n, l, u);
        } finally {
          St = S, K.p = d, C.T = o;
        }
      }
      Dn = 1, ev(), Af(), Xd();
    }
  }
  function ev() {
    if (Dn === 1) {
      Dn = 0;
      var n = Wl, l = Vo, u = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || u) {
        u = C.T, C.T = null;
        var o = K.p;
        K.p = 2;
        var d = St;
        St |= 4;
        try {
          Ef(l, n);
          var y = Nf, S = My(n.containerInfo), E = y.focusedElem, D = y.selectionRange;
          if (S !== E && E && E.ownerDocument && Gr(
            E.ownerDocument.documentElement,
            E
          )) {
            if (D !== null && Vr(E)) {
              var G = D.start, te = D.end;
              if (te === void 0 && (te = G), "selectionStart" in E)
                E.selectionStart = G, E.selectionEnd = Math.min(
                  te,
                  E.value.length
                );
              else {
                var ue = E.ownerDocument || document, X = ue && ue.defaultView || window;
                if (X.getSelection) {
                  var Z = X.getSelection(), je = E.textContent.length, Be = Math.min(D.start, je), vt = D.end === void 0 ? Be : Math.min(D.end, je);
                  !Z.extend && Be > vt && (S = vt, vt = Be, Be = S);
                  var j = Ht(
                    E,
                    Be
                  ), N = Ht(
                    E,
                    vt
                  );
                  if (j && N && (Z.rangeCount !== 1 || Z.anchorNode !== j.node || Z.anchorOffset !== j.offset || Z.focusNode !== N.node || Z.focusOffset !== N.offset)) {
                    var B = ue.createRange();
                    B.setStart(j.node, j.offset), Z.removeAllRanges(), Be > vt ? (Z.addRange(B), Z.extend(N.node, N.offset)) : (B.setEnd(N.node, N.offset), Z.addRange(B));
                  }
                }
              }
            }
            for (ue = [], Z = E; Z = Z.parentNode; )
              Z.nodeType === 1 && ue.push({
                element: Z,
                left: Z.scrollLeft,
                top: Z.scrollTop
              });
            for (typeof E.focus == "function" && E.focus(), E = 0; E < ue.length; E++) {
              var ae = ue[E];
              ae.element.scrollLeft = ae.left, ae.element.scrollTop = ae.top;
            }
          }
          Lf = !!wf, Nf = wf = null;
        } finally {
          St = d, K.p = o, C.T = u;
        }
      }
      n.current = l, Dn = 2;
    }
  }
  function Af() {
    if (Dn === 2) {
      Dn = 0;
      var n = Wl, l = Vo, u = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || u) {
        u = C.T, C.T = null;
        var o = K.p;
        K.p = 2;
        var d = St;
        St |= 4;
        try {
          pm(n, l.alternate, l);
        } finally {
          St = d, K.p = o, C.T = u;
        }
      }
      Dn = 3;
    }
  }
  function Xd() {
    if (Dn === 4 || Dn === 3) {
      Dn = 0, Ft();
      var n = Wl, l = Vo, u = zn, o = Dm;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Dn = 5 : (Dn = 0, Vo = Wl = null, tv(n, n.pendingLanes));
      var d = n.pendingLanes;
      if (d === 0 && (Ai = null), gs(u), l = l.stateNode, $n && typeof $n.onCommitFiberRoot == "function")
        try {
          $n.onCommitFiberRoot(
            ao,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        l = C.T, d = K.p, K.p = 2, C.T = null;
        try {
          for (var y = n.onRecoverableError, S = 0; S < o.length; S++) {
            var E = o[S];
            y(E.value, {
              componentStack: E.stack
            });
          }
        } finally {
          C.T = l, K.p = d;
        }
      }
      (zn & 3) !== 0 && Qd(), pa(n), d = n.pendingLanes, (u & 4194090) !== 0 && (d & 42) !== 0 ? n === zm ? Xo++ : (Xo = 0, zm = n) : Xo = 0, Of(0);
    }
  }
  function tv(n, l) {
    (n.pooledCacheLanes &= l) === 0 && (l = n.pooledCache, l != null && (n.pooledCache = null, wl(l)));
  }
  function Qd(n) {
    return ev(), Af(), Xd(), qm();
  }
  function qm() {
    if (Dn !== 5) return !1;
    var n = Wl, l = Bd;
    Bd = 0;
    var u = gs(zn), o = C.T, d = K.p;
    try {
      K.p = 32 > u ? 32 : u, C.T = null, u = Ld, Ld = null;
      var y = Wl, S = zn;
      if (Dn = 0, Vo = Wl = null, zn = 0, (St & 6) !== 0) throw Error(m(331));
      var E = St;
      if (St |= 4, Em(y.current), Sm(
        y,
        y.current,
        S,
        u
      ), St = E, Of(0, !1), $n && typeof $n.onPostCommitFiberRoot == "function")
        try {
          $n.onPostCommitFiberRoot(ao, y);
        } catch {
        }
      return !0;
    } finally {
      K.p = d, C.T = o, tv(n, l);
    }
  }
  function Ym(n, l, u) {
    l = Ma(u, l), l = um(n.stateNode, l, 2), n = Yl(n, l, 2), n !== null && ($i(n, 2), pa(n));
  }
  function xt(n, l, u) {
    if (n.tag === 3)
      Ym(n, n, u);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          Ym(
            l,
            n,
            u
          );
          break;
        } else if (l.tag === 1) {
          var o = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ai === null || !Ai.has(o))) {
            n = Ma(u, n), u = im(2), o = Yl(l, u, 2), o !== null && (ha(
              u,
              o,
              l,
              n
            ), $i(o, 2), pa(o));
            break;
          }
        }
        l = l.return;
      }
  }
  function Zd(n, l, u) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new K0();
      var d = /* @__PURE__ */ new Set();
      o.set(l, d);
    } else
      d = o.get(l), d === void 0 && (d = /* @__PURE__ */ new Set(), o.set(l, d));
    d.has(u) || (Am = !0, d.add(u), n = jm.bind(null, n, l, u), l.then(n, n));
  }
  function jm(n, l, u) {
    var o = n.pingCache;
    o !== null && o.delete(l), n.pingedLanes |= n.suspendedLanes & u, n.warmLanes &= ~u, Ct === n && (it & u) === u && ($t === 4 || $t === 3 && (it & 62914560) === it && 300 > Pt() - Om ? (St & 2) === 0 && Fl(n, 0) : Kl |= u, Bo === it && (Bo = 0)), pa(n);
  }
  function Bm(n, l) {
    l === 0 && (l = ki()), n = Ul(n, l), n !== null && ($i(n, l), pa(n));
  }
  function $g(n) {
    var l = n.memoizedState, u = 0;
    l !== null && (u = l.retryLane), Bm(n, u);
  }
  function Jg(n, l) {
    var u = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, d = n.memoizedState;
        d !== null && (u = d.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      case 22:
        o = n.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    o !== null && o.delete(l), Bm(n, u);
  }
  function Kg(n, l) {
    return ht(n, l);
  }
  var kd = null, Oi = null, Rf = !1, ko = !1, $d = !1, Di = 0;
  function pa(n) {
    n !== Oi && n.next === null && (Oi === null ? kd = Oi = n : Oi = Oi.next = n), ko = !0, Rf || (Rf = !0, lv());
  }
  function Of(n, l) {
    if (!$d && ko) {
      $d = !0;
      do
        for (var u = !1, o = kd; o !== null; ) {
          if (n !== 0) {
            var d = o.pendingLanes;
            if (d === 0) var y = 0;
            else {
              var S = o.suspendedLanes, E = o.pingedLanes;
              y = (1 << 31 - ua(42 | n) + 1) - 1, y &= d & ~(S & ~E), y = y & 201326741 ? y & 201326741 | 1 : y ? y | 2 : 0;
            }
            y !== 0 && (u = !0, zf(o, y));
          } else
            y = it, y = Wu(
              o,
              o === Ct ? y : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (y & 3) === 0 || xl(o, y) || (u = !0, zf(o, y));
          o = o.next;
        }
      while (u);
      $d = !1;
    }
  }
  function nv() {
    Df();
  }
  function Df() {
    ko = Rf = !1;
    var n = 0;
    Di !== 0 && (ju() && (n = Di), Di = 0);
    for (var l = Pt(), u = null, o = kd; o !== null; ) {
      var d = o.next, y = Lm(o, l);
      y === 0 ? (o.next = null, u === null ? kd = d : u.next = d, d === null && (Oi = u)) : (u = o, (n !== 0 || (y & 3) !== 0) && (ko = !0)), o = d;
    }
    Of(n);
  }
  function Lm(n, l) {
    for (var u = n.suspendedLanes, o = n.pingedLanes, d = n.expirationTimes, y = n.pendingLanes & -62914561; 0 < y; ) {
      var S = 31 - ua(y), E = 1 << S, D = d[S];
      D === -1 ? ((E & u) === 0 || (E & o) !== 0) && (d[S] = yn(E, l)) : D <= l && (n.expiredLanes |= E), y &= ~E;
    }
    if (l = Ct, u = it, u = Wu(
      n,
      n === l ? u : 0,
      n.cancelPendingCommit !== null || n.timeoutHandle !== -1
    ), o = n.callbackNode, u === 0 || n === l && (Tt === 2 || Tt === 9) || n.cancelPendingCommit !== null)
      return o !== null && o !== null && rt(o), n.callbackNode = null, n.callbackPriority = 0;
    if ((u & 3) === 0 || xl(n, u)) {
      if (l = u & -u, l === n.callbackPriority) return l;
      switch (o !== null && rt(o), gs(u)) {
        case 2:
        case 8:
          u = Wh;
          break;
        case 32:
          u = xr;
          break;
        case 268435456:
          u = no;
          break;
        default:
          u = xr;
      }
      return o = av.bind(null, n), u = ht(u, o), n.callbackPriority = l, n.callbackNode = u, l;
    }
    return o !== null && o !== null && rt(o), n.callbackPriority = 2, n.callbackNode = null, 2;
  }
  function av(n, l) {
    if (Dn !== 0 && Dn !== 5)
      return n.callbackNode = null, n.callbackPriority = 0, null;
    var u = n.callbackNode;
    if (Qd() && n.callbackNode !== u)
      return null;
    var o = it;
    return o = Wu(
      n,
      n === Ct ? o : 0,
      n.cancelPendingCommit !== null || n.timeoutHandle !== -1
    ), o === 0 ? null : (Qo(n, o, l), Lm(n, Pt()), n.callbackNode != null && n.callbackNode === u ? av.bind(null, n) : null);
  }
  function zf(n, l) {
    if (Qd()) return null;
    Qo(n, l, !0);
  }
  function lv() {
    Ig(function() {
      (St & 6) !== 0 ? ht(
        u0,
        nv
      ) : Df();
    });
  }
  function Nc() {
    return Di === 0 && (Di = Fu()), Di;
  }
  function Jd(n) {
    return n == null || typeof n == "symbol" || typeof n == "boolean" ? null : typeof n == "function" ? n : _r("" + n);
  }
  function Cf(n, l) {
    var u = l.ownerDocument.createElement("input");
    return u.name = l.name, u.value = l.value, n.id && u.setAttribute("form", n.id), l.parentNode.insertBefore(u, l), n = new FormData(n), u.parentNode.removeChild(u), n;
  }
  function uv(n, l, u, o, d) {
    if (l === "submit" && u && u.stateNode === d) {
      var y = Jd(
        (d[Jn] || null).action
      ), S = o.submitter;
      S && (l = (l = S[Jn] || null) ? Jd(l.formAction) : S.getAttribute("formAction"), l !== null && (y = l, S = null));
      var E = new Cs(
        "action",
        "action",
        null,
        o,
        d
      );
      n.push({
        event: E,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (Di !== 0) {
                  var D = S ? Cf(d, S) : new FormData(d);
                  pd(
                    u,
                    {
                      pending: !0,
                      data: D,
                      method: d.method,
                      action: y
                    },
                    null,
                    D
                  );
                }
              } else
                typeof y == "function" && (E.preventDefault(), D = S ? Cf(d, S) : new FormData(d), pd(
                  u,
                  {
                    pending: !0,
                    data: D,
                    method: d.method,
                    action: y
                  },
                  y,
                  D
                ));
            },
            currentTarget: d
          }
        ]
      });
    }
  }
  for (var Jt = 0; Jt < yo.length; Jt++) {
    var Uf = yo[Jt], Wg = Uf.toLowerCase(), Ie = Uf[0].toUpperCase() + Uf.slice(1);
    Ba(
      Wg,
      "on" + Ie
    );
  }
  Ba(D0, "onAnimationEnd"), Ba(Ay, "onAnimationIteration"), Ba(z0, "onAnimationStart"), Ba("dblclick", "onDoubleClick"), Ba("focusin", "onFocus"), Ba("focusout", "onBlur"), Ba(Ry, "onTransitionRun"), Ba(Bs, "onTransitionStart"), Ba(C0, "onTransitionCancel"), Ba(Oy, "onTransitionEnd"), ei("onMouseEnter", ["mouseout", "mouseover"]), ei("onMouseLeave", ["mouseout", "mouseover"]), ei("onPointerEnter", ["pointerout", "pointerover"]), ei("onPointerLeave", ["pointerout", "pointerover"]), Iu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Iu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Iu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Iu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Iu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Iu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Hf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), zi = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hf)
  );
  function qc(n, l) {
    l = (l & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var o = n[u], d = o.event;
      o = o.listeners;
      e: {
        var y = void 0;
        if (l)
          for (var S = o.length - 1; 0 <= S; S--) {
            var E = o[S], D = E.instance, G = E.currentTarget;
            if (E = E.listener, D !== y && d.isPropagationStopped())
              break e;
            y = E, d.currentTarget = G;
            try {
              y(d);
            } catch (te) {
              mf(te);
            }
            d.currentTarget = null, y = D;
          }
        else
          for (S = 0; S < o.length; S++) {
            if (E = o[S], D = E.instance, G = E.currentTarget, E = E.listener, D !== y && d.isPropagationStopped())
              break e;
            y = E, d.currentTarget = G;
            try {
              y(d);
            } catch (te) {
              mf(te);
            }
            d.currentTarget = null, y = D;
          }
      }
    }
  }
  function Ke(n, l) {
    var u = l[bs];
    u === void 0 && (u = l[bs] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    u.has(o) || (Kd(l, n, 2, !1), u.add(o));
  }
  function $o(n, l, u) {
    var o = 0;
    l && (o |= 4), Kd(
      u,
      n,
      o,
      l
    );
  }
  var Jo = "_reactListening" + Math.random().toString(36).slice(2);
  function Gm(n) {
    if (!n[Jo]) {
      n[Jo] = !0, Dr.forEach(function(u) {
        u !== "selectionchange" && (zi.has(u) || $o(u, !1, n), $o(u, !0, n));
      });
      var l = n.nodeType === 9 ? n : n.ownerDocument;
      l === null || l[Jo] || (l[Jo] = !0, $o("selectionchange", !1, l));
    }
  }
  function Kd(n, l, u, o) {
    switch (np(l)) {
      case 2:
        var d = yv;
        break;
      case 8:
        d = mv;
        break;
      default:
        d = ep;
    }
    u = d.bind(
      null,
      l,
      u,
      n
    ), d = void 0, !Os || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (d = !0), o ? d !== void 0 ? n.addEventListener(l, u, {
      capture: !0,
      passive: d
    }) : n.addEventListener(l, u, !0) : d !== void 0 ? n.addEventListener(l, u, {
      passive: d
    }) : n.addEventListener(l, u, !1);
  }
  function Wa(n, l, u, o, d) {
    var y = o;
    if ((l & 1) === 0 && (l & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var S = o.tag;
        if (S === 3 || S === 4) {
          var E = o.stateNode.containerInfo;
          if (E === d) break;
          if (S === 4)
            for (S = o.return; S !== null; ) {
              var D = S.tag;
              if ((D === 3 || D === 4) && S.stateNode.containerInfo === d)
                return;
              S = S.return;
            }
          for (; E !== null; ) {
            if (S = xn(E), S === null) return;
            if (D = S.tag, D === 5 || D === 6 || D === 26 || D === 27) {
              o = y = S;
              continue e;
            }
            E = E.parentNode;
          }
        }
        o = o.return;
      }
    fo(function() {
      var G = y, te = Rs(u), ue = [];
      e: {
        var X = Dy.get(n);
        if (X !== void 0) {
          var Z = Cs, je = n;
          switch (n) {
            case "keypress":
              if (Mn(u) === 0) break e;
            case "keydown":
            case "keyup":
              Z = ll;
              break;
            case "focusin":
              je = "focus", Z = ry;
              break;
            case "focusout":
              je = "blur", Z = ry;
              break;
            case "beforeblur":
            case "afterblur":
              Z = ry;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Z = oy;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = b0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = dy;
              break;
            case D0:
            case Ay:
            case z0:
              Z = Vg;
              break;
            case Oy:
              Z = M0;
              break;
            case "scroll":
            case "scrollend":
              Z = v0;
              break;
            case "wheel":
              Z = uc;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = qr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = Yr;
              break;
            case "toggle":
            case "beforetoggle":
              Z = A0;
          }
          var Be = (l & 4) !== 0, vt = !Be && (n === "scroll" || n === "scrollend"), j = Be ? X !== null ? X + "Capture" : null : X;
          Be = [];
          for (var N = G, B; N !== null; ) {
            var ae = N;
            if (B = ae.stateNode, ae = ae.tag, ae !== 5 && ae !== 26 && ae !== 27 || B === null || j === null || (ae = tc(N, j), ae != null && Be.push(
              qu(N, ae, B)
            )), vt) break;
            N = N.return;
          }
          0 < Be.length && (X = new Z(
            X,
            je,
            null,
            u,
            te
          ), ue.push({ event: X, listeners: Be }));
        }
      }
      if ((l & 7) === 0) {
        e: {
          if (X = n === "mouseover" || n === "pointerover", Z = n === "mouseout" || n === "pointerout", X && u !== ec && (je = u.relatedTarget || u.fromElement) && (xn(je) || je[uo]))
            break e;
          if ((Z || X) && (X = te.window === te ? te : (X = te.ownerDocument) ? X.defaultView || X.parentWindow : window, Z ? (je = u.relatedTarget || u.toElement, Z = G, je = je ? xn(je) : null, je !== null && (vt = v(je), Be = je.tag, je !== vt || Be !== 5 && Be !== 27 && Be !== 6) && (je = null)) : (Z = null, je = G), Z !== je)) {
            if (Be = oy, ae = "onMouseLeave", j = "onMouseEnter", N = "mouse", (n === "pointerout" || n === "pointerover") && (Be = Yr, ae = "onPointerLeave", j = "onPointerEnter", N = "pointer"), vt = Z == null ? X : Or(Z), B = je == null ? X : Or(je), X = new Be(
              ae,
              N + "leave",
              Z,
              u,
              te
            ), X.target = vt, X.relatedTarget = B, ae = null, xn(te) === G && (Be = new Be(
              j,
              N + "enter",
              je,
              u,
              te
            ), Be.target = B, Be.relatedTarget = vt, ae = Be), vt = ae, Z && je)
              t: {
                for (Be = Z, j = je, N = 0, B = Be; B; B = Ci(B))
                  N++;
                for (B = 0, ae = j; ae; ae = Ci(ae))
                  B++;
                for (; 0 < N - B; )
                  Be = Ci(Be), N--;
                for (; 0 < B - N; )
                  j = Ci(j), B--;
                for (; N--; ) {
                  if (Be === j || j !== null && Be === j.alternate)
                    break t;
                  Be = Ci(Be), j = Ci(j);
                }
                Be = null;
              }
            else Be = null;
            Z !== null && _f(
              ue,
              X,
              Z,
              Be,
              !1
            ), je !== null && vt !== null && _f(
              ue,
              vt,
              je,
              Be,
              !0
            );
          }
        }
        e: {
          if (X = G ? Or(G) : window, Z = X.nodeName && X.nodeName.toLowerCase(), Z === "select" || Z === "input" && X.type === "file")
            var Oe = gy;
          else if (Ns(X))
            if (by)
              Oe = Ey;
            else {
              Oe = ii;
              var nt = Ys;
            }
          else
            Z = X.nodeName, !Z || Z.toLowerCase() !== "input" || X.type !== "checkbox" && X.type !== "radio" ? G && Ii(G.elementType) && (Oe = gy) : Oe = Tu;
          if (Oe && (Oe = Oe(n, G))) {
            qs(
              ue,
              Oe,
              u,
              te
            );
            break e;
          }
          nt && nt(n, X, G), n === "focusout" && G && X.type === "number" && G.memoizedProps.value != null && Ur(X, "number", X.value);
        }
        switch (nt = G ? Or(G) : window, n) {
          case "focusin":
            (Ns(nt) || nt.contentEditable === "true") && (Dl = nt, cl = G, ri = null);
            break;
          case "focusout":
            ri = cl = Dl = null;
            break;
          case "mousedown":
            fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fc = !1, js(ue, u, te);
            break;
          case "selectionchange":
            if (rc) break;
          case "keydown":
          case "keyup":
            js(ue, u, te);
        }
        var Ne;
        if (jr)
          e: {
            switch (n) {
              case "compositionstart":
                var Ge = "onCompositionStart";
                break e;
              case "compositionend":
                Ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ge = "onCompositionUpdate";
                break e;
            }
            Ge = void 0;
          }
        else
          ui ? Lr(n, u) && (Ge = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (Ge = "onCompositionStart");
        Ge && (Rl && u.locale !== "ko" && (ui || Ge !== "onCompositionStart" ? Ge === "onCompositionEnd" && ui && (Ne = iy()) : (bu = te, so = "value" in bu ? bu.value : bu.textContent, ui = !0)), nt = Ko(G, Ge), 0 < nt.length && (Ge = new fy(
          Ge,
          n,
          null,
          u,
          te
        ), ue.push({ event: Ge, listeners: nt }), Ne ? Ge.data = Ne : (Ne = li(u), Ne !== null && (Ge.data = Ne)))), (Ne = yy ? py(n, u) : ic(n, u)) && (Ge = Ko(G, "onBeforeInput"), 0 < Ge.length && (nt = new fy(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          te
        ), ue.push({
          event: nt,
          listeners: Ge
        }), nt.data = Ne)), uv(
          ue,
          n,
          G,
          u,
          te
        );
      }
      qc(ue, l);
    });
  }
  function qu(n, l, u) {
    return {
      instance: n,
      listener: l,
      currentTarget: u
    };
  }
  function Ko(n, l) {
    for (var u = l + "Capture", o = []; n !== null; ) {
      var d = n, y = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || y === null || (d = tc(n, u), d != null && o.unshift(
        qu(n, d, y)
      ), d = tc(n, l), d != null && o.push(
        qu(n, d, y)
      )), n.tag === 3) return o;
      n = n.return;
    }
    return [];
  }
  function Ci(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5 && n.tag !== 27);
    return n || null;
  }
  function _f(n, l, u, o, d) {
    for (var y = l._reactName, S = []; u !== null && u !== o; ) {
      var E = u, D = E.alternate, G = E.stateNode;
      if (E = E.tag, D !== null && D === o) break;
      E !== 5 && E !== 26 && E !== 27 || G === null || (D = G, d ? (G = tc(u, y), G != null && S.unshift(
        qu(u, G, D)
      )) : d || (G = tc(u, y), G != null && S.push(
        qu(u, G, D)
      ))), u = u.return;
    }
    S.length !== 0 && n.push({ event: l, listeners: S });
  }
  var Ca = /\r\n?/g, Vm = /\u0000|\uFFFD/g;
  function iv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ca, `
`).replace(Vm, "");
  }
  function Xm(n, l) {
    return l = iv(l), iv(n) === l;
  }
  function Wd() {
  }
  function ke(n, l, u, o, d, y) {
    switch (u) {
      case "children":
        typeof o == "string" ? l === "body" || l === "textarea" && o === "" || co(n, o) : (typeof o == "number" || typeof o == "bigint") && l !== "body" && co(n, "" + o);
        break;
      case "className":
        zr(n, "class", o);
        break;
      case "tabIndex":
        zr(n, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zr(n, u, o);
        break;
      case "style":
        Hr(n, o, y);
        break;
      case "data":
        if (l !== "object") {
          zr(n, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (l !== "a" || u !== "href")) {
          n.removeAttribute(u);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          n.removeAttribute(u);
          break;
        }
        o = _r("" + o), n.setAttribute(u, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          n.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof y == "function" && (u === "formAction" ? (l !== "input" && ke(n, l, "name", d.name, d, null), ke(
            n,
            l,
            "formEncType",
            d.formEncType,
            d,
            null
          ), ke(
            n,
            l,
            "formMethod",
            d.formMethod,
            d,
            null
          ), ke(
            n,
            l,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (ke(n, l, "encType", d.encType, d, null), ke(n, l, "method", d.method, d, null), ke(n, l, "target", d.target, d, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          n.removeAttribute(u);
          break;
        }
        o = _r("" + o), n.setAttribute(u, o);
        break;
      case "onClick":
        o != null && (n.onclick = Wd);
        break;
      case "onScroll":
        o != null && Ke("scroll", n);
        break;
      case "onScrollEnd":
        o != null && Ke("scrollend", n);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(m(61));
          if (u = o.__html, u != null) {
            if (d.children != null) throw Error(m(60));
            n.innerHTML = u;
          }
        }
        break;
      case "multiple":
        n.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        n.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          n.removeAttribute("xlink:href");
          break;
        }
        u = _r("" + o), n.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? n.setAttribute(u, "" + o) : n.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? n.setAttribute(u, "") : n.removeAttribute(u);
        break;
      case "capture":
      case "download":
        o === !0 ? n.setAttribute(u, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? n.setAttribute(u, o) : n.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? n.setAttribute(u, o) : n.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? n.removeAttribute(u) : n.setAttribute(u, o);
        break;
      case "popover":
        Ke("beforetoggle", n), Ke("toggle", n), vu(n, "popover", o);
        break;
      case "xlinkActuate":
        Ml(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        Ml(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        Ml(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        Ml(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        Ml(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        Ml(
          n,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        Ml(
          n,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        Ml(
          n,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        Ml(
          n,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        vu(n, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Bg.get(u) || u, vu(n, u, o));
    }
  }
  function J(n, l, u, o, d, y) {
    switch (u) {
      case "style":
        Hr(n, o, y);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(m(61));
          if (u = o.__html, u != null) {
            if (d.children != null) throw Error(m(60));
            n.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof o == "string" ? co(n, o) : (typeof o == "number" || typeof o == "bigint") && co(n, "" + o);
        break;
      case "onScroll":
        o != null && Ke("scroll", n);
        break;
      case "onScrollEnd":
        o != null && Ke("scrollend", n);
        break;
      case "onClick":
        o != null && (n.onclick = Wd);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ea.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (d = u.endsWith("Capture"), l = u.slice(2, d ? u.length - 7 : void 0), y = n[Jn] || null, y = y != null ? y[u] : null, typeof y == "function" && n.removeEventListener(l, y, d), typeof o == "function")) {
              typeof y != "function" && y !== null && (u in n ? n[u] = null : n.hasAttribute(u) && n.removeAttribute(u)), n.addEventListener(l, o, d);
              break e;
            }
            u in n ? n[u] = o : o === !0 ? n.setAttribute(u, "") : vu(n, u, o);
          }
    }
  }
  function Qe(n, l, u) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ke("error", n), Ke("load", n);
        var o = !1, d = !1, y;
        for (y in u)
          if (u.hasOwnProperty(y)) {
            var S = u[y];
            if (S != null)
              switch (y) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, l));
                default:
                  ke(n, l, y, S, u, null);
              }
          }
        d && ke(n, l, "srcSet", u.srcSet, u, null), o && ke(n, l, "src", u.src, u, null);
        return;
      case "input":
        Ke("invalid", n);
        var E = y = S = d = null, D = null, G = null;
        for (o in u)
          if (u.hasOwnProperty(o)) {
            var te = u[o];
            if (te != null)
              switch (o) {
                case "name":
                  d = te;
                  break;
                case "type":
                  S = te;
                  break;
                case "checked":
                  D = te;
                  break;
                case "defaultChecked":
                  G = te;
                  break;
                case "value":
                  y = te;
                  break;
                case "defaultValue":
                  E = te;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (te != null)
                    throw Error(m(137, l));
                  break;
                default:
                  ke(n, l, o, te, u, null);
              }
          }
        Ms(
          n,
          y,
          E,
          D,
          G,
          S,
          d,
          !1
        ), ni(n);
        return;
      case "select":
        Ke("invalid", n), o = S = y = null;
        for (d in u)
          if (u.hasOwnProperty(d) && (E = u[d], E != null))
            switch (d) {
              case "value":
                y = E;
                break;
              case "defaultValue":
                S = E;
                break;
              case "multiple":
                o = E;
              default:
                ke(n, l, d, E, u, null);
            }
        l = y, u = S, n.multiple = !!o, l != null ? Pi(n, !!o, l, !1) : u != null && Pi(n, !!o, u, !0);
        return;
      case "textarea":
        Ke("invalid", n), y = d = o = null;
        for (S in u)
          if (u.hasOwnProperty(S) && (E = u[S], E != null))
            switch (S) {
              case "value":
                o = E;
                break;
              case "defaultValue":
                d = E;
                break;
              case "children":
                y = E;
                break;
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(m(91));
                break;
              default:
                ke(n, l, S, E, u, null);
            }
        ly(n, o, d, y), ni(n);
        return;
      case "option":
        for (D in u)
          if (u.hasOwnProperty(D) && (o = u[D], o != null))
            switch (D) {
              case "selected":
                n.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                ke(n, l, D, o, u, null);
            }
        return;
      case "dialog":
        Ke("beforetoggle", n), Ke("toggle", n), Ke("cancel", n), Ke("close", n);
        break;
      case "iframe":
      case "object":
        Ke("load", n);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Hf.length; o++)
          Ke(Hf[o], n);
        break;
      case "image":
        Ke("error", n), Ke("load", n);
        break;
      case "details":
        Ke("toggle", n);
        break;
      case "embed":
      case "source":
      case "link":
        Ke("error", n), Ke("load", n);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (G in u)
          if (u.hasOwnProperty(G) && (o = u[G], o != null))
            switch (G) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, l));
              default:
                ke(n, l, G, o, u, null);
            }
        return;
      default:
        if (Ii(l)) {
          for (te in u)
            u.hasOwnProperty(te) && (o = u[te], o !== void 0 && J(
              n,
              l,
              te,
              o,
              u,
              void 0
            ));
          return;
        }
    }
    for (E in u)
      u.hasOwnProperty(E) && (o = u[E], o != null && ke(n, l, E, o, u, null));
  }
  function Fg(n, l, u, o) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var d = null, y = null, S = null, E = null, D = null, G = null, te = null;
        for (Z in u) {
          var ue = u[Z];
          if (u.hasOwnProperty(Z) && ue != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                D = ue;
              default:
                o.hasOwnProperty(Z) || ke(n, l, Z, null, o, ue);
            }
        }
        for (var X in o) {
          var Z = o[X];
          if (ue = u[X], o.hasOwnProperty(X) && (Z != null || ue != null))
            switch (X) {
              case "type":
                y = Z;
                break;
              case "name":
                d = Z;
                break;
              case "checked":
                G = Z;
                break;
              case "defaultChecked":
                te = Z;
                break;
              case "value":
                S = Z;
                break;
              case "defaultValue":
                E = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(m(137, l));
                break;
              default:
                Z !== ue && ke(
                  n,
                  l,
                  X,
                  Z,
                  o,
                  ue
                );
            }
        }
        xs(
          n,
          S,
          E,
          D,
          G,
          te,
          y,
          d
        );
        return;
      case "select":
        Z = S = E = X = null;
        for (y in u)
          if (D = u[y], u.hasOwnProperty(y) && D != null)
            switch (y) {
              case "value":
                break;
              case "multiple":
                Z = D;
              default:
                o.hasOwnProperty(y) || ke(
                  n,
                  l,
                  y,
                  null,
                  o,
                  D
                );
            }
        for (d in o)
          if (y = o[d], D = u[d], o.hasOwnProperty(d) && (y != null || D != null))
            switch (d) {
              case "value":
                X = y;
                break;
              case "defaultValue":
                E = y;
                break;
              case "multiple":
                S = y;
              default:
                y !== D && ke(
                  n,
                  l,
                  d,
                  y,
                  o,
                  D
                );
            }
        l = E, u = S, o = Z, X != null ? Pi(n, !!u, X, !1) : !!o != !!u && (l != null ? Pi(n, !!u, l, !0) : Pi(n, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        Z = X = null;
        for (E in u)
          if (d = u[E], u.hasOwnProperty(E) && d != null && !o.hasOwnProperty(E))
            switch (E) {
              case "value":
                break;
              case "children":
                break;
              default:
                ke(n, l, E, null, o, d);
            }
        for (S in o)
          if (d = o[S], y = u[S], o.hasOwnProperty(S) && (d != null || y != null))
            switch (S) {
              case "value":
                X = d;
                break;
              case "defaultValue":
                Z = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(m(91));
                break;
              default:
                d !== y && ke(n, l, S, d, o, y);
            }
        ay(n, X, Z);
        return;
      case "option":
        for (var je in u)
          if (X = u[je], u.hasOwnProperty(je) && X != null && !o.hasOwnProperty(je))
            switch (je) {
              case "selected":
                n.selected = !1;
                break;
              default:
                ke(
                  n,
                  l,
                  je,
                  null,
                  o,
                  X
                );
            }
        for (D in o)
          if (X = o[D], Z = u[D], o.hasOwnProperty(D) && X !== Z && (X != null || Z != null))
            switch (D) {
              case "selected":
                n.selected = X && typeof X != "function" && typeof X != "symbol";
                break;
              default:
                ke(
                  n,
                  l,
                  D,
                  X,
                  o,
                  Z
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Be in u)
          X = u[Be], u.hasOwnProperty(Be) && X != null && !o.hasOwnProperty(Be) && ke(n, l, Be, null, o, X);
        for (G in o)
          if (X = o[G], Z = u[G], o.hasOwnProperty(G) && X !== Z && (X != null || Z != null))
            switch (G) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (X != null)
                  throw Error(m(137, l));
                break;
              default:
                ke(
                  n,
                  l,
                  G,
                  X,
                  o,
                  Z
                );
            }
        return;
      default:
        if (Ii(l)) {
          for (var vt in u)
            X = u[vt], u.hasOwnProperty(vt) && X !== void 0 && !o.hasOwnProperty(vt) && J(
              n,
              l,
              vt,
              void 0,
              o,
              X
            );
          for (te in o)
            X = o[te], Z = u[te], !o.hasOwnProperty(te) || X === Z || X === void 0 && Z === void 0 || J(
              n,
              l,
              te,
              X,
              o,
              Z
            );
          return;
        }
    }
    for (var j in u)
      X = u[j], u.hasOwnProperty(j) && X != null && !o.hasOwnProperty(j) && ke(n, l, j, null, o, X);
    for (ue in o)
      X = o[ue], Z = u[ue], !o.hasOwnProperty(ue) || X === Z || X == null && Z == null || ke(n, l, ue, X, o, Z);
  }
  var wf = null, Nf = null;
  function Fa(n) {
    return n.nodeType === 9 ? n : n.ownerDocument;
  }
  function Yu(n) {
    switch (n) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wo(n, l) {
    if (n === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return n === 1 && l === "foreignObject" ? 0 : n;
  }
  function Pl(n, l) {
    return n === "textarea" || n === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Fo = null;
  function ju() {
    var n = window.event;
    return n && n.type === "popstate" ? n === Fo ? !1 : (Fo = n, !0) : (Fo = null, !1);
  }
  var Fd = typeof setTimeout == "function" ? setTimeout : void 0, Pg = typeof clearTimeout == "function" ? clearTimeout : void 0, cv = typeof Promise == "function" ? Promise : void 0, Ig = typeof queueMicrotask == "function" ? queueMicrotask : typeof cv < "u" ? function(n) {
    return cv.resolve(null).then(n).catch(Il);
  } : Fd;
  function Il(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ui(n) {
    return n === "head";
  }
  function Pd(n, l) {
    var u = l, o = 0, d = 0;
    do {
      var y = u.nextSibling;
      if (n.removeChild(u), y && y.nodeType === 8)
        if (u = y.data, u === "/$") {
          if (0 < o && 8 > o) {
            u = o;
            var S = n.ownerDocument;
            if (u & 1 && va(S.documentElement), u & 2 && va(S.body), u & 4)
              for (u = S.head, va(u), S = u.firstChild; S; ) {
                var E = S.nextSibling, D = S.nodeName;
                S[ze] || D === "SCRIPT" || D === "STYLE" || D === "LINK" && S.rel.toLowerCase() === "stylesheet" || u.removeChild(S), S = E;
              }
          }
          if (d === 0) {
            n.removeChild(y), tu(l);
            return;
          }
          d--;
        } else
          u === "$" || u === "$?" || u === "$!" ? d++ : o = u.charCodeAt(0) - 48;
      else o = 0;
      u = y;
    } while (u);
    tu(l);
  }
  function qf(n) {
    var l = n.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var u = l;
      switch (l = l.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          qf(u), Rr(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      n.removeChild(u);
    }
  }
  function Po(n, l, u, o) {
    for (; n.nodeType === 1; ) {
      var d = u;
      if (n.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!o && (n.nodeName !== "INPUT" || n.type !== "hidden"))
          break;
      } else if (o) {
        if (!n[ze])
          switch (l) {
            case "meta":
              if (!n.hasAttribute("itemprop")) break;
              return n;
            case "link":
              if (y = n.getAttribute("rel"), y === "stylesheet" && n.hasAttribute("data-precedence"))
                break;
              if (y !== d.rel || n.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || n.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || n.getAttribute("title") !== (d.title == null ? null : d.title))
                break;
              return n;
            case "style":
              if (n.hasAttribute("data-precedence")) break;
              return n;
            case "script":
              if (y = n.getAttribute("src"), (y !== (d.src == null ? null : d.src) || n.getAttribute("type") !== (d.type == null ? null : d.type) || n.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && y && n.hasAttribute("async") && !n.hasAttribute("itemprop"))
                break;
              return n;
            default:
              return n;
          }
      } else if (l === "input" && n.type === "hidden") {
        var y = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && n.getAttribute("name") === y)
          return n;
      } else return n;
      if (n = vl(n.nextSibling), n === null) break;
    }
    return null;
  }
  function e1(n, l, u) {
    if (l === "") return null;
    for (; n.nodeType !== 3; )
      if ((n.nodeType !== 1 || n.nodeName !== "INPUT" || n.type !== "hidden") && !u || (n = vl(n.nextSibling), n === null)) return null;
    return n;
  }
  function Yf(n) {
    return n.data === "$!" || n.data === "$?" && n.ownerDocument.readyState === "complete";
  }
  function t1(n, l) {
    var u = n.ownerDocument;
    if (n.data !== "$?" || u.readyState === "complete")
      l();
    else {
      var o = function() {
        l(), u.removeEventListener("DOMContentLoaded", o);
      };
      u.addEventListener("DOMContentLoaded", o), n._reactRetry = o;
    }
  }
  function vl(n) {
    for (; n != null; n = n.nextSibling) {
      var l = n.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = n.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
          break;
        if (l === "/$") return null;
      }
    }
    return n;
  }
  var Hi = null;
  function Cn(n) {
    n = n.previousSibling;
    for (var l = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (l === 0) return n;
          l--;
        } else u === "/$" && l++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  function Re(n, l, u) {
    switch (l = Fa(u), n) {
      case "html":
        if (n = l.documentElement, !n) throw Error(m(452));
        return n;
      case "head":
        if (n = l.head, !n) throw Error(m(453));
        return n;
      case "body":
        if (n = l.body, !n) throw Error(m(454));
        return n;
      default:
        throw Error(m(451));
    }
  }
  function va(n) {
    for (var l = n.attributes; l.length; )
      n.removeAttributeNode(l[0]);
    Rr(n);
  }
  var Kt = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Set();
  function Id(n) {
    return typeof n.getRootNode == "function" ? n.getRootNode() : n.nodeType === 9 ? n : n.ownerDocument;
  }
  var Bu = K.d;
  K.d = {
    f: eh,
    r: th,
    D: Lu,
    C: nh,
    L: _i,
    m: Gn,
    X: wi,
    S: ga,
    M: Qm
  };
  function eh() {
    var n = Bu.f(), l = Hc();
    return n || l;
  }
  function th(n) {
    var l = Ji(n);
    l !== null && l.tag === 5 && l.type === "form" ? Co(l) : Bu.r(n);
  }
  var Un = typeof document > "u" ? null : document;
  function gl(n, l, u) {
    var o = Un;
    if (o && typeof l == "string" && l) {
      var d = Ya(l);
      d = 'link[rel="' + n + '"][href="' + d + '"]', typeof u == "string" && (d += '[crossorigin="' + u + '"]'), Ln.has(d) || (Ln.add(d), n = { rel: n, crossOrigin: u, href: l }, o.querySelector(d) === null && (l = o.createElement("link"), Qe(l, "link", n), un(l), o.head.appendChild(l)));
    }
  }
  function Lu(n) {
    Bu.D(n), gl("dns-prefetch", n, null);
  }
  function nh(n, l) {
    Bu.C(n, l), gl("preconnect", n, l);
  }
  function _i(n, l, u) {
    Bu.L(n, l, u);
    var o = Un;
    if (o && n && l) {
      var d = 'link[rel="preload"][as="' + Ya(l) + '"]';
      l === "image" && u && u.imageSrcSet ? (d += '[imagesrcset="' + Ya(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (d += '[imagesizes="' + Ya(
        u.imageSizes
      ) + '"]')) : d += '[href="' + Ya(n) + '"]';
      var y = d;
      switch (l) {
        case "style":
          y = Io(n);
          break;
        case "script":
          y = Pa(n);
      }
      Kt.has(y) || (n = q(
        {
          rel: "preload",
          href: l === "image" && u && u.imageSrcSet ? void 0 : n,
          as: l
        },
        u
      ), Kt.set(y, n), o.querySelector(d) !== null || l === "style" && o.querySelector(er(y)) || l === "script" && o.querySelector(Yc(y)) || (l = o.createElement("link"), Qe(l, "link", n), un(l), o.head.appendChild(l)));
    }
  }
  function Gn(n, l) {
    Bu.m(n, l);
    var u = Un;
    if (u && n) {
      var o = l && typeof l.as == "string" ? l.as : "script", d = 'link[rel="modulepreload"][as="' + Ya(o) + '"][href="' + Ya(n) + '"]', y = d;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          y = Pa(n);
      }
      if (!Kt.has(y) && (n = q({ rel: "modulepreload", href: n }, l), Kt.set(y, n), u.querySelector(d) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Yc(y)))
              return;
        }
        o = u.createElement("link"), Qe(o, "link", n), un(o), u.head.appendChild(o);
      }
    }
  }
  function ga(n, l, u) {
    Bu.S(n, l, u);
    var o = Un;
    if (o && n) {
      var d = pu(o).hoistableStyles, y = Io(n);
      l = l || "default";
      var S = d.get(y);
      if (!S) {
        var E = { loading: 0, preload: null };
        if (S = o.querySelector(
          er(y)
        ))
          E.loading = 5;
        else {
          n = q(
            { rel: "stylesheet", href: n, "data-precedence": l },
            u
          ), (u = Kt.get(y)) && lh(n, u);
          var D = S = o.createElement("link");
          un(D), Qe(D, "link", n), D._p = new Promise(function(G, te) {
            D.onload = G, D.onerror = te;
          }), D.addEventListener("load", function() {
            E.loading |= 1;
          }), D.addEventListener("error", function() {
            E.loading |= 2;
          }), E.loading |= 4, ah(S, l, o);
        }
        S = {
          type: "stylesheet",
          instance: S,
          count: 1,
          state: E
        }, d.set(y, S);
      }
    }
  }
  function wi(n, l) {
    Bu.X(n, l);
    var u = Un;
    if (u && n) {
      var o = pu(u).hoistableScripts, d = Pa(n), y = o.get(d);
      y || (y = u.querySelector(Yc(d)), y || (n = q({ src: n, async: !0 }, l), (l = Kt.get(d)) && uh(n, l), y = u.createElement("script"), un(y), Qe(y, "link", n), u.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, o.set(d, y));
    }
  }
  function Qm(n, l) {
    Bu.M(n, l);
    var u = Un;
    if (u && n) {
      var o = pu(u).hoistableScripts, d = Pa(n), y = o.get(d);
      y || (y = u.querySelector(Yc(d)), y || (n = q({ src: n, async: !0, type: "module" }, l), (l = Kt.get(d)) && uh(n, l), y = u.createElement("script"), un(y), Qe(y, "link", n), u.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, o.set(d, y));
    }
  }
  function ov(n, l, u, o) {
    var d = (d = Ae.current) ? Id(d) : null;
    if (!d) throw Error(m(446));
    switch (n) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (l = Io(u.href), u = pu(
          d
        ).hoistableStyles, o = u.get(l), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(l, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          n = Io(u.href);
          var y = pu(
            d
          ).hoistableStyles, S = y.get(n);
          if (S || (d = d.ownerDocument || d, S = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, y.set(n, S), (y = d.querySelector(
            er(n)
          )) && !y._p && (S.instance = y, S.state.loading = 5), Kt.has(n) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Kt.set(n, u), y || rv(
            d,
            n,
            u,
            S.state
          ))), l && o === null)
            throw Error(m(528, ""));
          return S;
        }
        if (l && o !== null)
          throw Error(m(529, ""));
        return null;
      case "script":
        return l = u.async, u = u.src, typeof u == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Pa(u), u = pu(
          d
        ).hoistableScripts, o = u.get(l), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(l, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, n));
    }
  }
  function Io(n) {
    return 'href="' + Ya(n) + '"';
  }
  function er(n) {
    return 'link[rel="stylesheet"][' + n + "]";
  }
  function tr(n) {
    return q({}, n, {
      "data-precedence": n.precedence,
      precedence: null
    });
  }
  function rv(n, l, u, o) {
    n.querySelector('link[rel="preload"][as="style"][' + l + "]") ? o.loading = 1 : (l = n.createElement("link"), o.preload = l, l.addEventListener("load", function() {
      return o.loading |= 1;
    }), l.addEventListener("error", function() {
      return o.loading |= 2;
    }), Qe(l, "link", u), un(l), n.head.appendChild(l));
  }
  function Pa(n) {
    return '[src="' + Ya(n) + '"]';
  }
  function Yc(n) {
    return "script[async]" + n;
  }
  function fv(n, l, u) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var o = n.querySelector(
            'style[data-href~="' + Ya(u.href) + '"]'
          );
          if (o)
            return l.instance = o, un(o), o;
          var d = q({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return o = (n.ownerDocument || n).createElement(
            "style"
          ), un(o), Qe(o, "style", d), ah(o, u.precedence, n), l.instance = o;
        case "stylesheet":
          d = Io(u.href);
          var y = n.querySelector(
            er(d)
          );
          if (y)
            return l.state.loading |= 4, l.instance = y, un(y), y;
          o = tr(u), (d = Kt.get(d)) && lh(o, d), y = (n.ownerDocument || n).createElement("link"), un(y);
          var S = y;
          return S._p = new Promise(function(E, D) {
            S.onload = E, S.onerror = D;
          }), Qe(y, "link", o), l.state.loading |= 4, ah(y, u.precedence, n), l.instance = y;
        case "script":
          return y = Pa(u.src), (d = n.querySelector(
            Yc(y)
          )) ? (l.instance = d, un(d), d) : (o = u, (d = Kt.get(y)) && (o = q({}, u), uh(o, d)), n = n.ownerDocument || n, d = n.createElement("script"), un(d), Qe(d, "link", o), n.head.appendChild(d), l.instance = d);
        case "void":
          return null;
        default:
          throw Error(m(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (o = l.instance, l.state.loading |= 4, ah(o, u.precedence, n));
    return l.instance;
  }
  function ah(n, l, u) {
    for (var o = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = o.length ? o[o.length - 1] : null, y = d, S = 0; S < o.length; S++) {
      var E = o[S];
      if (E.dataset.precedence === l) y = E;
      else if (y !== d) break;
    }
    y ? y.parentNode.insertBefore(n, y.nextSibling) : (l = u.nodeType === 9 ? u.head : u, l.insertBefore(n, l.firstChild));
  }
  function lh(n, l) {
    n.crossOrigin == null && (n.crossOrigin = l.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = l.referrerPolicy), n.title == null && (n.title = l.title);
  }
  function uh(n, l) {
    n.crossOrigin == null && (n.crossOrigin = l.crossOrigin), n.referrerPolicy == null && (n.referrerPolicy = l.referrerPolicy), n.integrity == null && (n.integrity = l.integrity);
  }
  var Ni = null;
  function Zm(n, l, u) {
    if (Ni === null) {
      var o = /* @__PURE__ */ new Map(), d = Ni = /* @__PURE__ */ new Map();
      d.set(u, o);
    } else
      d = Ni, o = d.get(u), o || (o = /* @__PURE__ */ new Map(), d.set(u, o));
    if (o.has(n)) return o;
    for (o.set(n, null), u = u.getElementsByTagName(n), d = 0; d < u.length; d++) {
      var y = u[d];
      if (!(y[ze] || y[mn] || n === "link" && y.getAttribute("rel") === "stylesheet") && y.namespaceURI !== "http://www.w3.org/2000/svg") {
        var S = y.getAttribute(l) || "";
        S = n + S;
        var E = o.get(S);
        E ? E.push(y) : o.set(S, [y]);
      }
    }
    return o;
  }
  function km(n, l, u) {
    n = n.ownerDocument || n, n.head.insertBefore(
      u,
      l === "title" ? n.querySelector("head > title") : null
    );
  }
  function sv(n, l, u) {
    if (u === 1 || l.itemProp != null) return !1;
    switch (n) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        switch (l.rel) {
          case "stylesheet":
            return n = l.disabled, typeof l.precedence == "string" && n == null;
          default:
            return !0;
        }
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function $m(n) {
    return !(n.type === "stylesheet" && (n.state.loading & 3) === 0);
  }
  var nr = null;
  function dv() {
  }
  function hv(n, l, u) {
    if (nr === null) throw Error(m(475));
    var o = nr;
    if (l.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var d = Io(u.href), y = n.querySelector(
          er(d)
        );
        if (y) {
          n = y._p, n !== null && typeof n == "object" && typeof n.then == "function" && (o.count++, o = jf.bind(o), n.then(o, o)), l.state.loading |= 4, l.instance = y, un(y);
          return;
        }
        y = n.ownerDocument || n, u = tr(u), (d = Kt.get(d)) && lh(u, d), y = y.createElement("link"), un(y);
        var S = y;
        S._p = new Promise(function(E, D) {
          S.onload = E, S.onerror = D;
        }), Qe(y, "link", u), l.instance = y;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(l, n), (n = l.state.preload) && (l.state.loading & 3) === 0 && (o.count++, l = jf.bind(o), n.addEventListener("load", l), n.addEventListener("error", l));
    }
  }
  function Jm() {
    if (nr === null) throw Error(m(475));
    var n = nr;
    return n.stylesheets && n.count === 0 && Bf(n, n.stylesheets), 0 < n.count ? function(l) {
      var u = setTimeout(function() {
        if (n.stylesheets && Bf(n, n.stylesheets), n.unsuspend) {
          var o = n.unsuspend;
          n.unsuspend = null, o();
        }
      }, 6e4);
      return n.unsuspend = l, function() {
        n.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function jf() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Bf(this, this.stylesheets);
      else if (this.unsuspend) {
        var n = this.unsuspend;
        this.unsuspend = null, n();
      }
    }
  }
  var ar = null;
  function Bf(n, l) {
    n.stylesheets = null, n.unsuspend !== null && (n.count++, ar = /* @__PURE__ */ new Map(), l.forEach(Ua, n), ar = null, jf.call(n));
  }
  function Ua(n, l) {
    if (!(l.state.loading & 4)) {
      var u = ar.get(n);
      if (u) var o = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), ar.set(n, u);
        for (var d = n.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), y = 0; y < d.length; y++) {
          var S = d[y];
          (S.nodeName === "LINK" || S.getAttribute("media") !== "not all") && (u.set(S.dataset.precedence, S), o = S);
        }
        o && u.set(null, o);
      }
      d = l.instance, S = d.getAttribute("data-precedence"), y = u.get(S) || o, y === o && u.set(null, d), u.set(S, d), this.count++, o = jf.bind(this), d.addEventListener("load", o), d.addEventListener("error", o), y ? y.parentNode.insertBefore(d, y.nextSibling) : (n = n.nodeType === 9 ? n.head : n, n.insertBefore(d, n.firstChild)), l.state.loading |= 4;
    }
  }
  var ba = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: oe,
    _currentValue2: oe,
    _threadCount: 0
  };
  function n1(n, l, u, o, d, y, S, E) {
    this.tag = 1, this.containerInfo = n, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pu(0), this.hiddenUpdates = Pu(null), this.identifierPrefix = o, this.onUncaughtError = d, this.onCaughtError = y, this.onRecoverableError = S, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Km(n, l, u, o, d, y, S, E, D, G, te, ue) {
    return n = new n1(
      n,
      l,
      u,
      S,
      E,
      D,
      G,
      ue
    ), l = 1, y === !0 && (l |= 24), y = oa(3, null, null, l), n.current = y, y.stateNode = n, l = Ao(), l.refCount++, n.pooledCache = l, l.refCount++, y.memoizedState = {
      element: o,
      isDehydrated: u,
      cache: l
    }, Ws(y), n;
  }
  function Wm(n) {
    return n ? (n = vo, n) : vo;
  }
  function Fm(n, l, u, o, d, y) {
    d = Wm(d), o.context === null ? o.context = d : o.pendingContext = d, o = fa(l), o.payload = { element: u }, y = y === void 0 ? null : y, y !== null && (o.callback = y), u = Yl(n, o, l), u !== null && (za(u, n, l), pc(u, n, l));
  }
  function Pm(n, l) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < l ? u : l;
    }
  }
  function ih(n, l) {
    Pm(n, l), (n = n.alternate) && Pm(n, l);
  }
  function Im(n) {
    if (n.tag === 13) {
      var l = Ul(n, 67108864);
      l !== null && za(l, n, 67108864), ih(n, 67108864);
    }
  }
  var Lf = !0;
  function yv(n, l, u, o) {
    var d = C.T;
    C.T = null;
    var y = K.p;
    try {
      K.p = 2, ep(n, l, u, o);
    } finally {
      K.p = y, C.T = d;
    }
  }
  function mv(n, l, u, o) {
    var d = C.T;
    C.T = null;
    var y = K.p;
    try {
      K.p = 8, ep(n, l, u, o);
    } finally {
      K.p = y, C.T = d;
    }
  }
  function ep(n, l, u, o) {
    if (Lf) {
      var d = ch(o);
      if (d === null)
        Wa(
          n,
          l,
          o,
          oh,
          u
        ), jc(n, o);
      else if (vv(
        d,
        n,
        l,
        u,
        o
      ))
        o.stopPropagation();
      else if (jc(n, o), l & 4 && -1 < pv.indexOf(n)) {
        for (; d !== null; ) {
          var y = Ji(d);
          if (y !== null)
            switch (y.tag) {
              case 3:
                if (y = y.stateNode, y.current.memoizedState.isDehydrated) {
                  var S = Ta(y.pendingLanes);
                  if (S !== 0) {
                    var E = y;
                    for (E.pendingLanes |= 2, E.entangledLanes |= 2; S; ) {
                      var D = 1 << 31 - ua(S);
                      E.entanglements[1] |= D, S &= ~D;
                    }
                    pa(y), (St & 6) === 0 && (jd = Pt() + 500, Of(0));
                  }
                }
                break;
              case 13:
                E = Ul(y, 2), E !== null && za(E, y, 2), Hc(), ih(y, 2);
            }
          if (y = ch(o), y === null && Wa(
            n,
            l,
            o,
            oh,
            u
          ), y === d) break;
          d = y;
        }
        d !== null && o.stopPropagation();
      } else
        Wa(
          n,
          l,
          o,
          null,
          u
        );
    }
  }
  function ch(n) {
    return n = Rs(n), tp(n);
  }
  var oh = null;
  function tp(n) {
    if (oh = null, n = xn(n), n !== null) {
      var l = v(n);
      if (l === null) n = null;
      else {
        var u = l.tag;
        if (u === 13) {
          if (n = T(l), n !== null) return n;
          n = null;
        } else if (u === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          n = null;
        } else l !== n && (n = null);
      }
    }
    return oh = n, null;
  }
  function np(n) {
    switch (n) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ku()) {
          case u0:
            return 2;
          case Wh:
            return 8;
          case xr:
          case Fh:
            return 32;
          case no:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lr = !1, eu = null, Gu = null, Vu = null, Gf = /* @__PURE__ */ new Map(), Vf = /* @__PURE__ */ new Map(), qi = [], pv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function jc(n, l) {
    switch (n) {
      case "focusin":
      case "focusout":
        eu = null;
        break;
      case "dragenter":
      case "dragleave":
        Gu = null;
        break;
      case "mouseover":
      case "mouseout":
        Vu = null;
        break;
      case "pointerover":
      case "pointerout":
        Gf.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vf.delete(l.pointerId);
    }
  }
  function Bc(n, l, u, o, d, y) {
    return n === null || n.nativeEvent !== y ? (n = {
      blockedOn: l,
      domEventName: u,
      eventSystemFlags: o,
      nativeEvent: y,
      targetContainers: [d]
    }, l !== null && (l = Ji(l), l !== null && Im(l)), n) : (n.eventSystemFlags |= o, l = n.targetContainers, d !== null && l.indexOf(d) === -1 && l.push(d), n);
  }
  function vv(n, l, u, o, d) {
    switch (l) {
      case "focusin":
        return eu = Bc(
          eu,
          n,
          l,
          u,
          o,
          d
        ), !0;
      case "dragenter":
        return Gu = Bc(
          Gu,
          n,
          l,
          u,
          o,
          d
        ), !0;
      case "mouseover":
        return Vu = Bc(
          Vu,
          n,
          l,
          u,
          o,
          d
        ), !0;
      case "pointerover":
        var y = d.pointerId;
        return Gf.set(
          y,
          Bc(
            Gf.get(y) || null,
            n,
            l,
            u,
            o,
            d
          )
        ), !0;
      case "gotpointercapture":
        return y = d.pointerId, Vf.set(
          y,
          Bc(
            Vf.get(y) || null,
            n,
            l,
            u,
            o,
            d
          )
        ), !0;
    }
    return !1;
  }
  function ap(n) {
    var l = xn(n.target);
    if (l !== null) {
      var u = v(l);
      if (u !== null) {
        if (l = u.tag, l === 13) {
          if (l = T(u), l !== null) {
            n.blockedOn = l, Yg(n.priority, function() {
              if (u.tag === 13) {
                var o = Da();
                o = al(o);
                var d = Ul(u, o);
                d !== null && za(d, u, o), ih(u, o);
              }
            });
            return;
          }
        } else if (l === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Xf(n) {
    if (n.blockedOn !== null) return !1;
    for (var l = n.targetContainers; 0 < l.length; ) {
      var u = ch(n.nativeEvent);
      if (u === null) {
        u = n.nativeEvent;
        var o = new u.constructor(
          u.type,
          u
        );
        ec = o, u.target.dispatchEvent(o), ec = null;
      } else
        return l = Ji(u), l !== null && Im(l), n.blockedOn = u, !1;
      l.shift();
    }
    return !0;
  }
  function Qf(n, l, u) {
    Xf(n) && u.delete(l);
  }
  function ur() {
    lr = !1, eu !== null && Xf(eu) && (eu = null), Gu !== null && Xf(Gu) && (Gu = null), Vu !== null && Xf(Vu) && (Vu = null), Gf.forEach(Qf), Vf.forEach(Qf);
  }
  function rh(n, l) {
    n.blockedOn === l && (n.blockedOn = null, lr || (lr = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      ur
    )));
  }
  var Lc = null;
  function lp(n) {
    Lc !== n && (Lc = n, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Lc === n && (Lc = null);
        for (var l = 0; l < n.length; l += 3) {
          var u = n[l], o = n[l + 1], d = n[l + 2];
          if (typeof o != "function") {
            if (tp(o || u) === null)
              continue;
            break;
          }
          var y = Ji(u);
          y !== null && (n.splice(l, 3), l -= 3, pd(
            y,
            {
              pending: !0,
              data: d,
              method: u.method,
              action: o
            },
            o,
            d
          ));
        }
      }
    ));
  }
  function tu(n) {
    function l(D) {
      return rh(D, n);
    }
    eu !== null && rh(eu, n), Gu !== null && rh(Gu, n), Vu !== null && rh(Vu, n), Gf.forEach(l), Vf.forEach(l);
    for (var u = 0; u < qi.length; u++) {
      var o = qi[u];
      o.blockedOn === n && (o.blockedOn = null);
    }
    for (; 0 < qi.length && (u = qi[0], u.blockedOn === null); )
      ap(u), u.blockedOn === null && qi.shift();
    if (u = (n.ownerDocument || n).$$reactFormReplay, u != null)
      for (o = 0; o < u.length; o += 3) {
        var d = u[o], y = u[o + 1], S = d[Jn] || null;
        if (typeof y == "function")
          S || lp(u);
        else if (S) {
          var E = null;
          if (y && y.hasAttribute("formAction")) {
            if (d = y, S = y[Jn] || null)
              E = S.formAction;
            else if (tp(d) !== null) continue;
          } else E = S.action;
          typeof E == "function" ? u[o + 1] = E : (u.splice(o, 3), o -= 3), lp(u);
        }
      }
  }
  function up(n) {
    this._internalRoot = n;
  }
  fh.prototype.render = up.prototype.render = function(n) {
    var l = this._internalRoot;
    if (l === null) throw Error(m(409));
    var u = l.current, o = Da();
    Fm(u, o, n, l, null, null);
  }, fh.prototype.unmount = up.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var l = n.containerInfo;
      Fm(n.current, 2, null, n, null, null), Hc(), l[uo] = null;
    }
  };
  function fh(n) {
    this._internalRoot = n;
  }
  fh.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var l = r0();
      n = { blockedOn: null, target: n, priority: l };
      for (var u = 0; u < qi.length && l !== 0 && l < qi[u].priority; u++) ;
      qi.splice(u, 0, n), u === 0 && ap(n);
    }
  };
  var ip = s.version;
  if (ip !== "19.1.0")
    throw Error(
      m(
        527,
        ip,
        "19.1.0"
      )
    );
  K.findDOMNode = function(n) {
    var l = n._reactInternals;
    if (l === void 0)
      throw typeof n.render == "function" ? Error(m(188)) : (n = Object.keys(n).join(","), Error(m(268, n)));
    return n = x(l), n = n !== null ? U(n) : null, n = n === null ? null : n.stateNode, n;
  };
  var ea = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zf.isDisabled && Zf.supportsFiber)
      try {
        ao = Zf.inject(
          ea
        ), $n = Zf;
      } catch {
      }
  }
  return Xp.createRoot = function(n, l) {
    if (!g(n)) throw Error(m(299));
    var u = !1, o = "", d = _o, y = am, S = pf, E = null;
    return l != null && (l.unstable_strictMode === !0 && (u = !0), l.identifierPrefix !== void 0 && (o = l.identifierPrefix), l.onUncaughtError !== void 0 && (d = l.onUncaughtError), l.onCaughtError !== void 0 && (y = l.onCaughtError), l.onRecoverableError !== void 0 && (S = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (E = l.unstable_transitionCallbacks)), l = Km(
      n,
      1,
      !1,
      null,
      null,
      u,
      o,
      d,
      y,
      S,
      E,
      null
    ), n[uo] = l.current, Gm(n), new up(l);
  }, Xp.hydrateRoot = function(n, l, u) {
    if (!g(n)) throw Error(m(299));
    var o = !1, d = "", y = _o, S = am, E = pf, D = null, G = null;
    return u != null && (u.unstable_strictMode === !0 && (o = !0), u.identifierPrefix !== void 0 && (d = u.identifierPrefix), u.onUncaughtError !== void 0 && (y = u.onUncaughtError), u.onCaughtError !== void 0 && (S = u.onCaughtError), u.onRecoverableError !== void 0 && (E = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (D = u.unstable_transitionCallbacks), u.formState !== void 0 && (G = u.formState)), l = Km(
      n,
      1,
      !0,
      l,
      u ?? null,
      o,
      d,
      y,
      S,
      E,
      D,
      G
    ), l.context = Wm(null), u = l.current, o = Da(), o = al(o), d = fa(o), d.callback = null, Yl(u, d, o), u = o, l.current.lanes = u, $i(l, u), pa(l), n[uo] = l.current, Gm(n), new fh(l);
  }, Xp.version = "19.1.0", Xp;
}
var Qp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cE;
function eR() {
  return cE || (cE = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function s(e, t, a, i) {
      if (a >= t.length) return i;
      var r = t[a], f = ke(e) ? e.slice() : Ie({}, e);
      return f[r] = s(e[r], t, a + 1, i), f;
    }
    function h(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return m(e, t, a, 0);
      }
    }
    function m(e, t, a, i) {
      var r = t[i], f = ke(e) ? e.slice() : Ie({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[r], ke(f) ? f.splice(r, 1) : delete f[r]) : f[r] = m(
        e[r],
        t,
        a,
        i + 1
      ), f;
    }
    function g(e, t, a) {
      var i = t[a], r = ke(e) ? e.slice() : Ie({}, e);
      return a + 1 === t.length ? (ke(r) ? r.splice(i, 1) : delete r[i], r) : (r[i] = g(e[i], t, a + 1), r);
    }
    function v() {
      return !1;
    }
    function T() {
      return null;
    }
    function A() {
    }
    function x() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function U() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function q() {
    }
    function _(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function Y(e, t, a, i) {
      return new Br(e, t, a, i);
    }
    function ce(e, t) {
      e.context === ir && (xt(e.current, 2, t, e, null, null), Rc());
    }
    function pe(e, t) {
      if (au !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, wo(), jr(
          e.current,
          t,
          a
        ), Rc();
      }
    }
    function ge(e) {
      au = e;
    }
    function ye(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Se(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function me(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function P(e) {
      if (Se(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function ne(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Se(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var r = a.return;
        if (r === null) break;
        var f = r.alternate;
        if (f === null) {
          if (i = r.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (r.child === f.child) {
          for (f = r.child; f; ) {
            if (f === a) return P(r), e;
            if (f === i) return P(r), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = r, i = f;
        else {
          for (var p = !1, b = r.child; b; ) {
            if (b === a) {
              p = !0, a = r, i = f;
              break;
            }
            if (b === i) {
              p = !0, i = r, a = f;
              break;
            }
            b = b.sibling;
          }
          if (!p) {
            for (b = f.child; b; ) {
              if (b === a) {
                p = !0, a = f, i = r;
                break;
              }
              if (b === i) {
                p = !0, i = f, a = r;
                break;
              }
              b = b.sibling;
            }
            if (!p)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function k(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = k(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function ie(e) {
      return e === null || typeof e != "object" ? null : (e = Xm && e[Xm] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function ve(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Wd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ke:
          return "Fragment";
        case Jo:
          return "Profiler";
        case $o:
          return "StrictMode";
        case Ko:
          return "Suspense";
        case Ci:
          return "SuspenseList";
        case Vm:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case qc:
            return "Portal";
          case Wa:
            return (e.displayName || "Context") + ".Provider";
          case Kd:
            return (e._context.displayName || "Context") + ".Consumer";
          case qu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case _f:
            return t = e.displayName || null, t !== null ? t : ve(e.type) || "Memo";
          case Ca:
            t = e._payload, e = e._init;
            try {
              return ve(e(t));
            } catch {
            }
        }
      return null;
    }
    function He(e) {
      return typeof e.tag == "number" ? fe(e) : typeof e.name == "string" ? e.name : null;
    }
    function fe(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return ve(t);
        case 8:
          return t === $o ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return fe(e.return);
      }
      return null;
    }
    function Ve(e) {
      return { current: e };
    }
    function de(e, t) {
      0 > Fa ? console.error("Unexpected pop.") : (t !== Nf[Fa] && console.error("Unexpected Fiber popped."), e.current = wf[Fa], wf[Fa] = null, Nf[Fa] = null, Fa--);
    }
    function Te(e, t, a) {
      Fa++, wf[Fa] = e.current, Nf[Fa] = a, e.current = t;
    }
    function _e(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function qe(e, t) {
      Te(Pl, t, e), Te(Wo, e, e), Te(Yu, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Tt(t) : Kc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = Tt(t), t = ya(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = jh;
                break;
              case "math":
                t = kv;
                break;
              default:
                t = Kc;
            }
      }
      a = a.toLowerCase(), a = ay(null, a), a = {
        context: t,
        ancestorInfo: a
      }, de(Yu, e), Te(Yu, a, e);
    }
    function et(e) {
      de(Yu, e), de(Wo, e), de(Pl, e);
    }
    function C() {
      return _e(Yu.current);
    }
    function K(e) {
      e.memoizedState !== null && Te(Fo, e, e);
      var t = _e(Yu.current), a = e.type, i = ya(t.context, a);
      a = ay(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Te(Wo, e, e), Te(Yu, i, e));
    }
    function oe(e) {
      Wo.current === e && (de(Yu, e), de(Wo, e)), Fo.current === e && (de(Fo, e), jp._currentValue = fs);
    }
    function Me(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function O(e) {
      try {
        return $(e), !1;
      } catch {
        return !0;
      }
    }
    function $(e) {
      return "" + e;
    }
    function le(e, t) {
      if (O(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Me(e)
        ), $(e);
    }
    function se(e, t) {
      if (O(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Me(e)
        ), $(e);
    }
    function be(e) {
      if (O(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Me(e)
        ), $(e);
    }
    function De(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Hi = t.inject(e), Cn = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ae(e) {
      if (typeof t1 == "function" && vl(e), Cn && typeof Cn.setStrictMode == "function")
        try {
          Cn.setStrictMode(Hi, e);
        } catch (t) {
          va || (va = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Xe(e) {
      Re = e;
    }
    function we() {
      Re !== null && typeof Re.markCommitStopped == "function" && Re.markCommitStopped();
    }
    function re(e) {
      Re !== null && typeof Re.markComponentRenderStarted == "function" && Re.markComponentRenderStarted(e);
    }
    function Ee() {
      Re !== null && typeof Re.markComponentRenderStopped == "function" && Re.markComponentRenderStopped();
    }
    function Ye(e) {
      Re !== null && typeof Re.markRenderStarted == "function" && Re.markRenderStarted(e);
    }
    function L() {
      Re !== null && typeof Re.markRenderStopped == "function" && Re.markRenderStopped();
    }
    function ht(e, t) {
      Re !== null && typeof Re.markStateUpdateScheduled == "function" && Re.markStateUpdateScheduled(e, t);
    }
    function rt(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Id(e) / Bu | 0) | 0;
    }
    function hn(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Ft(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function Pt(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var r = 0, f = e.suspendedLanes, p = e.pingedLanes;
      e = e.warmLanes;
      var b = i & 134217727;
      return b !== 0 ? (i = b & ~f, i !== 0 ? r = Ft(i) : (p &= b, p !== 0 ? r = Ft(p) : a || (a = b & ~e, a !== 0 && (r = Ft(a))))) : (b = i & ~f, b !== 0 ? r = Ft(b) : p !== 0 ? r = Ft(p) : a || (a = i & ~e, a !== 0 && (r = Ft(a)))), r === 0 ? 0 : t !== 0 && t !== r && (t & f) === 0 && (f = r & -r, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : r;
    }
    function Ku(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function u0(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Wh() {
      var e = eh;
      return eh <<= 1, (eh & 4194048) === 0 && (eh = 256), e;
    }
    function xr() {
      var e = th;
      return th <<= 1, (th & 62914560) === 0 && (th = 4194304), e;
    }
    function Fh(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function no(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Ng(e, t, a, i, r, f) {
      var p = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var b = e.entanglements, M = e.expirationTimes, R = e.hiddenUpdates;
      for (a = p & ~a; 0 < a; ) {
        var Q = 31 - Ln(a), F = 1 << Q;
        b[Q] = 0, M[Q] = -1;
        var V = R[Q];
        if (V !== null)
          for (R[Q] = null, Q = 0; Q < V.length; Q++) {
            var I = V[Q];
            I !== null && (I.lane &= -536870913);
          }
        a &= ~F;
      }
      i !== 0 && i0(e, i, 0), f !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(p & ~t));
    }
    function i0(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Ln(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function ao(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Ln(a), r = 1 << i;
        r & t | e[i] & t && (e[i] |= t), a &= ~r;
      }
    }
    function $n(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function yu(e, t, a) {
      if (Kt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Ln(a), r = 1 << i;
          e[i].add(t), a &= ~r;
        }
    }
    function ua(e, t) {
      if (Kt)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var r = 31 - Ln(t);
          e = 1 << r, r = a[r], 0 < r.size && (r.forEach(function(f) {
            var p = f.alternate;
            p !== null && i.has(p) || i.add(f);
          }), r.clear()), t &= ~e;
        }
    }
    function Ph(e) {
      return e &= -e, Un < e ? gl < e ? (e & 134217727) !== 0 ? Lu : nh : gl : Un;
    }
    function c0() {
      var e = Qe.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Lu : $d(e.type));
    }
    function qg(e, t) {
      var a = Qe.p;
      try {
        return Qe.p = e, t();
      } finally {
        Qe.p = a;
      }
    }
    function lo(e) {
      delete e[Gn], delete e[ga], delete e[Qm], delete e[ov], delete e[Io];
    }
    function mu(e) {
      var t = e[Gn];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[wi] || a[Gn]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Xo(e); e !== null; ) {
              if (a = e[Gn])
                return a;
              e = Xo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Ta(e) {
      if (e = e[Gn] || e[wi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function Wu(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function xl(e) {
      var t = e[er];
      return t || (t = e[er] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function yn(e) {
      e[tr] = !0;
    }
    function Fu(e, t) {
      ki(e, t), ki(e + "Capture", t);
    }
    function ki(e, t) {
      Pa[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Pa[e] = t;
      var a = e.toLowerCase();
      for (Yc[a] = e, e === "onDoubleClick" && (Yc.ondblclick = e), e = 0; e < t.length; e++)
        rv.add(t[e]);
    }
    function Pu(e, t) {
      fv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function $i(e) {
      return ju.call(uh, e) ? !0 : ju.call(lh, e) ? !1 : ah.test(e) ? uh[e] = !0 : (lh[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function o0(e, t, a) {
      if ($i(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (le(a, t), e === "" + a ? a : e);
      }
    }
    function Mr(e, t, a) {
      if ($i(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          le(a, t), e.setAttribute(t, "" + a);
        }
    }
    function Ar(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        le(a, t), e.setAttribute(t, "" + a);
      }
    }
    function al(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        le(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function gs() {
    }
    function r0() {
      if (Ni === 0) {
        Zm = console.log, km = console.info, sv = console.warn, $m = console.error, nr = console.group, dv = console.groupCollapsed, hv = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: gs,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Ni++;
    }
    function Yg() {
      if (Ni--, Ni === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Ie({}, e, { value: Zm }),
          info: Ie({}, e, { value: km }),
          warn: Ie({}, e, { value: sv }),
          error: Ie({}, e, { value: $m }),
          group: Ie({}, e, { value: nr }),
          groupCollapsed: Ie({}, e, { value: dv }),
          groupEnd: Ie({}, e, { value: hv })
        });
      }
      0 > Ni && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ln(e) {
      if (Jm === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Jm = t && t[1] || "", jf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Jm + e + jf;
    }
    function mn(e, t) {
      if (!e || ar) return "";
      var a = Bf.get(e);
      if (a !== void 0) return a;
      ar = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = J.H, J.H = null, r0();
      try {
        var r = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var V = function() {
                  throw Error();
                };
                if (Object.defineProperty(V.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(V, []);
                  } catch (Ce) {
                    var I = Ce;
                  }
                  Reflect.construct(e, [], V);
                } else {
                  try {
                    V.call();
                  } catch (Ce) {
                    I = Ce;
                  }
                  e.call(V.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Ce) {
                  I = Ce;
                }
                (V = e()) && typeof V.catch == "function" && V.catch(function() {
                });
              }
            } catch (Ce) {
              if (Ce && I && typeof Ce.stack == "string")
                return [Ce.stack, I.stack];
            }
            return [null, null];
          }
        };
        r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          r.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var p = r.DetermineComponentFrameRoot(), b = p[0], M = p[1];
        if (b && M) {
          var R = b.split(`
`), Q = M.split(`
`);
          for (p = f = 0; f < R.length && !R[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; p < Q.length && !Q[p].includes(
            "DetermineComponentFrameRoot"
          ); )
            p++;
          if (f === R.length || p === Q.length)
            for (f = R.length - 1, p = Q.length - 1; 1 <= f && 0 <= p && R[f] !== Q[p]; )
              p--;
          for (; 1 <= f && 0 <= p; f--, p--)
            if (R[f] !== Q[p]) {
              if (f !== 1 || p !== 1)
                do
                  if (f--, p--, 0 > p || R[f] !== Q[p]) {
                    var F = `
` + R[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && Bf.set(e, F), F;
                  }
                while (1 <= f && 0 <= p);
              break;
            }
        }
      } finally {
        ar = !1, J.H = i, Yg(), Error.prepareStackTrace = a;
      }
      return R = (R = e ? e.displayName || e.name : "") ? ln(R) : "", typeof e == "function" && Bf.set(e, R), R;
    }
    function Jn(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function uo(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ln(e.type);
        case 16:
          return ln("Lazy");
        case 13:
          return ln("Suspense");
        case 19:
          return ln("SuspenseList");
        case 0:
        case 15:
          return mn(e.type, !1);
        case 11:
          return mn(e.type.render, !1);
        case 1:
          return mn(e.type, !0);
        case 31:
          return ln("Activity");
        default:
          return "";
      }
    }
    function bs(e) {
      try {
        var t = "";
        do {
          t += uo(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var r = a[i];
              if (typeof r.name == "string") {
                var f = t, p = r.env, b = ln(
                  r.name + (p ? " [" + p + "]" : "")
                );
                t = f + b;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (M) {
        return `
Error generating stack: ` + M.message + `
` + M.stack;
      }
    }
    function f0(e) {
      return (e = e ? e.displayName || e.name : "") ? ln(e) : "";
    }
    function Ss() {
      if (Ua === null) return null;
      var e = Ua._debugOwner;
      return e != null ? He(e) : null;
    }
    function s0() {
      if (Ua === null) return "";
      var e = Ua;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ln(e.type);
            break;
          case 13:
            t += ln("Suspense");
            break;
          case 19:
            t += ln("SuspenseList");
            break;
          case 31:
            t += ln("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += f0(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += f0(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Jn(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var r = e.debugStack;
            (e = e.owner) && r && (t += `
` + Jn(r));
          } else break;
        var f = t;
      } catch (p) {
        f = `
Error generating stack: ` + p.message + `
` + p.stack;
      }
      return f;
    }
    function ze(e, t, a, i, r, f, p) {
      var b = Ua;
      Rr(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, r, f, p)
        ) : t(a, i, r, f, p);
      } finally {
        Rr(b);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Rr(e) {
      J.getCurrentStack = e === null ? null : s0, ba = !1, Ua = e;
    }
    function xn(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return be(e), e;
        default:
          return "";
      }
    }
    function Ji(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Or(e) {
      var t = Ji(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      be(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var r = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return r.call(this);
          },
          set: function(p) {
            be(p), i = "" + p, f.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            be(p), i = "" + p;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function pu(e) {
      e._valueTracker || (e._valueTracker = Or(e));
    }
    function un(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Ji(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function Dr(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Ea(e) {
      return e.replace(
        n1,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Iu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Wm || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ss() || "A component",
        t.type
      ), Wm = !0), t.value === void 0 || t.defaultValue === void 0 || Km || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ss() || "A component",
        t.type
      ), Km = !0);
    }
    function ei(e, t, a, i, r, f, p, b) {
      e.name = "", p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? (le(p, "type"), e.type = p) : e.removeAttribute("type"), t != null ? p === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + xn(t)) : e.value !== "" + xn(t) && (e.value = "" + xn(t)) : p !== "submit" && p !== "reset" || e.removeAttribute("value"), t != null ? Ts(e, p, xn(t)) : a != null ? Ts(e, p, xn(a)) : i != null && e.removeAttribute("value"), r == null && f != null && (e.defaultChecked = !!f), r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? (le(b, "name"), e.name = "" + xn(b)) : e.removeAttribute("name");
    }
    function d0(e, t, a, i, r, f, p, b) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (le(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + xn(a) : "", t = t != null ? "" + xn(t) : a, b || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? r, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = b ? e.checked : !!i, e.defaultChecked = !!i, p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (le(p, "name"), e.name = p);
    }
    function Ts(e, t, a) {
      t === "number" && Dr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Ih(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Uf.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || Pm || (Pm = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || ih || (ih = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Fm || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Fm = !0);
    }
    function h0() {
      var e = Ss();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function vu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var r = 0; r < a.length; r++)
          t["$" + a[r]] = !0;
        for (a = 0; a < e.length; a++)
          r = t.hasOwnProperty("$" + e[a].value), e[a].selected !== r && (e[a].selected = r), r && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + xn(a), t = null, r = 0; r < e.length; r++) {
          if (e[r].value === a) {
            e[r].selected = !0, i && (e[r].defaultSelected = !0);
            return;
          }
          t !== null || e[r].disabled || (t = e[r]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function zr(e, t) {
      for (e = 0; e < Lf.length; e++) {
        var a = Lf[e];
        if (t[a] != null) {
          var i = ke(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            h0()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            h0()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Im || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Im = !0);
    }
    function Ml(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || yv || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ss() || "A component"
      ), yv = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Es(e, t, a) {
      if (t != null && (t = "" + xn(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + xn(a) : "";
    }
    function ey(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (ke(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = xn(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Ki(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Ki(e.children[0], t) : e;
    }
    function Kn(e) {
      return "  " + "  ".repeat(e);
    }
    function ti(e) {
      return "+ " + "  ".repeat(e);
    }
    function Wi(e) {
      return "- " + "  ".repeat(e);
    }
    function ty(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function qn(e, t) {
      return mv.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function Cr(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return ti(a) + qn(e, i) + `
`;
      if (typeof t == "string") {
        for (var r = 0; r < t.length && r < e.length && t.charCodeAt(r) === e.charCodeAt(r); r++) ;
        return r > i - 8 && 10 < r && (e = "..." + e.slice(r - 8), t = "..." + t.slice(r - 8)), ti(a) + qn(e, i) + `
` + Wi(a) + qn(t, i) + `
`;
      }
      return Kn(a) + qn(e, i) + `
`;
    }
    function ny(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function ni(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (ke(e)) return "[...]";
          if (e.$$typeof === zi)
            return (t = ve(e.type)) ? "<" + t + ">" : "<...>";
          var a = ny(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var r = JSON.stringify(i);
                if (r !== '"' + i + '"' && (i = r), t -= i.length - 2, r = ni(
                  e[i],
                  15 > t ? t : 15
                ), t -= r.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + r;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Fi(e, t) {
      return typeof e != "string" || mv.test(e) ? "{" + ni(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function io(e, t, a) {
      var i = 120 - a.length - e.length, r = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var p = Fi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + p.length + 2, r.push(f + "=" + p);
        }
      return r.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + r.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + r.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function jg(e, t, a) {
      var i = "", r = Ie({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete r[f];
          var p = 120 - 2 * a - f.length - 2, b = ni(e[f], p);
          t.hasOwnProperty(f) ? (p = ni(t[f], p), i += ti(a) + f + ": " + b + `
`, i += Wi(a) + f + ": " + p + `
`) : i += ti(a) + f + ": " + b + `
`;
        }
      for (var M in r)
        r.hasOwnProperty(M) && (e = ni(
          r[M],
          120 - 2 * a - M.length - 2
        ), i += Wi(a) + M + ": " + e + `
`);
      return i;
    }
    function Ya(e, t, a, i) {
      var r = "", f = /* @__PURE__ */ new Map();
      for (R in a)
        a.hasOwnProperty(R) && f.set(
          R.toLowerCase(),
          R
        );
      if (f.size === 1 && f.has("children"))
        r += io(
          e,
          t,
          Kn(i)
        );
      else {
        for (var p in t)
          if (t.hasOwnProperty(p) && p !== "children") {
            var b = 120 - 2 * (i + 1) - p.length - 1, M = f.get(p.toLowerCase());
            if (M !== void 0) {
              f.delete(p.toLowerCase());
              var R = t[p];
              M = a[M];
              var Q = Fi(
                R,
                b
              );
              b = Fi(
                M,
                b
              ), typeof R == "object" && R !== null && typeof M == "object" && M !== null && ny(R) === "Object" && ny(M) === "Object" && (2 < Object.keys(R).length || 2 < Object.keys(M).length || -1 < Q.indexOf("...") || -1 < b.indexOf("...")) ? r += Kn(i + 1) + p + `={{
` + jg(
                R,
                M,
                i + 2
              ) + Kn(i + 1) + `}}
` : (r += ti(i + 1) + p + "=" + Q + `
`, r += Wi(i + 1) + p + "=" + b + `
`);
            } else
              r += Kn(i + 1) + p + "=" + Fi(t[p], b) + `
`;
          }
        f.forEach(function(F) {
          if (F !== "children") {
            var V = 120 - 2 * (i + 1) - F.length - 1;
            r += Wi(i + 1) + F + "=" + Fi(a[F], V) + `
`;
          }
        }), r = r === "" ? Kn(i) + "<" + e + `>
` : Kn(i) + "<" + e + `
` + r + Kn(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), r += Cr(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (r = e == null ? r + Cr("" + t, null, i + 1) : r + Cr("" + t, void 0, i + 1)), r;
    }
    function xs(e, t) {
      var a = ty(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += xs(e, t), e = e.sibling;
        return a;
      }
      return Kn(t) + "<" + a + `>
`;
    }
    function Ms(e, t) {
      var a = Ki(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Kn(t) + `...
` + Ms(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var r = 0; r < i.length; r++) {
          var f = i[r].name;
          typeof f == "string" && (a += Kn(t) + "<" + f + `>
`, t++);
        }
      if (i = "", r = e.fiber.pendingProps, e.fiber.tag === 6)
        i = Cr(r, e.serverProps, t), t++;
      else if (f = ty(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var p = 120 - 2 * i - f.length - 2, b = "";
          for (R in r)
            if (r.hasOwnProperty(R) && R !== "children") {
              var M = Fi(r[R], 15);
              if (p -= R.length + M.length + 2, 0 > p) {
                b += " ...";
                break;
              }
              b += " " + R + "=" + M;
            }
          i = Kn(i) + "<" + f + b + `>
`, t++;
        } else
          e.serverProps === null ? (i = io(
            f,
            r,
            ti(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Ya(
            f,
            r,
            e.serverProps,
            t
          ), t++);
      var R = "";
      for (r = e.fiber.child, f = 0; r && f < e.children.length; )
        p = e.children[f], p.fiber === r ? (R += Ms(p, t), f++) : R += xs(r, t), r = r.sibling;
      for (r && 0 < e.children.length && (R += Kn(t) + `...
`), r = e.serverTail, e.serverProps === null && t--, e = 0; e < r.length; e++)
        f = r[e], R = typeof f == "string" ? R + (Wi(t) + qn(f, 120 - 2 * t) + `
`) : R + io(
          f.type,
          f.props,
          Wi(t)
        );
      return a + i + R;
    }
    function Ur(e) {
      try {
        return `

` + Ms(e, 0);
      } catch {
        return "";
      }
    }
    function Pi(e, t, a) {
      for (var i = t, r = null, f = 0; i; )
        i === e && (f = 0), r = {
          fiber: i,
          children: r !== null ? [r] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return r !== null ? Ur(r).replaceAll(/^[+-]/gm, ">") : "";
    }
    function ay(e, t) {
      var a = Ie({}, e || np), i = { tag: t };
      return ch.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), oh.indexOf(t) !== -1 && (a.pTagInButtonScope = null), ep.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function ly(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return tp.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function co(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function y0(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function As(e, t) {
      t = t || np;
      var a = t.current;
      if (t = (a = ly(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : co(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, lr[t]) return !1;
      lr[t] = !0;
      var r = (t = Ua) ? y0(t.return, i) : null, f = t !== null && r !== null ? Pi(r, t, null) : "", p = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        p,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        p,
        i,
        f
      ), t && (e = t.return, r === null || e === null || r === e && e._debugOwner === t._debugOwner || ze(r, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          p
        );
      })), !1;
    }
    function Hr(e, t, a) {
      if (a || ly("#text", t, !1))
        return !0;
      if (a = "#text|" + t, lr[a]) return !1;
      lr[a] = !0;
      var i = (a = Ua) ? y0(a, t) : null;
      return a = a !== null && i !== null ? Pi(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Ii(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Bg(e) {
      return e.replace(qi, function(t, a) {
        return a.toUpperCase();
      });
    }
    function m0(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? jc.hasOwnProperty(t) && jc[t] || (jc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Bg(t.replace(Vf, "ms-"))
      )) : Gf.test(t) ? jc.hasOwnProperty(t) && jc[t] || (jc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !pv.test(a) || Bc.hasOwnProperty(a) && Bc[a] || (Bc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(pv, "")
      )), typeof a == "number" && (isNaN(a) ? vv || (vv = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || ap || (ap = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Xf.has(t) ? t === "float" ? e.cssFloat = a : (se(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function _r(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var r in a)
              if (a.hasOwnProperty(r) && !t.hasOwnProperty(r))
                for (var f = eu[r] || [r], p = 0; p < f.length; p++)
                  i[f[p]] = r;
          }
          for (var b in t)
            if (t.hasOwnProperty(b) && (!a || a[b] !== t[b]))
              for (r = eu[b] || [b], f = 0; f < r.length; f++)
                i[r[f]] = b;
          b = {};
          for (var M in t)
            for (r = eu[M] || [M], f = 0; f < r.length; f++)
              b[r[f]] = M;
          M = {};
          for (var R in i)
            if (r = i[R], (f = b[R]) && r !== f && (p = r + "," + f, !M[p])) {
              M[p] = !0, p = console;
              var Q = t[r];
              p.error.call(
                p,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                Q == null || typeof Q == "boolean" || Q === "" ? "Removing" : "Updating",
                r,
                f
              );
            }
        }
        for (var F in a)
          !a.hasOwnProperty(F) || t != null && t.hasOwnProperty(F) || (F.indexOf("--") === 0 ? e.setProperty(F, "") : F === "float" ? e.cssFloat = "" : e[F] = "");
        for (var V in t)
          R = t[V], t.hasOwnProperty(V) && a[V] !== R && m0(e, V, R);
      } else
        for (i in t)
          t.hasOwnProperty(i) && m0(e, i, t[i]);
    }
    function ec(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Rs(e) {
      return rh.get(e) || e;
    }
    function oo(e, t) {
      if (ju.call(tu, t) && tu[t])
        return !0;
      if (fh.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = lp.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), tu[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), tu[t] = !0;
      }
      if (up.test(t)) {
        if (e = t.toLowerCase(), e = lp.hasOwnProperty(e) ? e : null, e == null) return tu[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), tu[t] = !0);
      }
      return !0;
    }
    function ro(e, t) {
      var a = [], i;
      for (i in t)
        oo(e, i) || a.push(i);
      t = a.map(function(r) {
        return "`" + r + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function p0(e, t, a, i) {
      if (ju.call(ea, t) && ea[t])
        return !0;
      var r = t.toLowerCase();
      if (r === "onfocusin" || r === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), ea[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(r) ? e[r] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), ea[t] = !0;
        if (Zf.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), ea[t] = !0;
      } else if (Zf.test(t))
        return n.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), ea[t] = !0;
      if (l.test(t) || u.test(t)) return !0;
      if (r === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), ea[t] = !0;
      if (r === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), ea[t] = !0;
      if (r === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), ea[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), ea[t] = !0;
      if (Lc.hasOwnProperty(r)) {
        if (r = Lc[r], r !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            r
          ), ea[t] = !0;
      } else if (t !== r)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          r
        ), ea[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return r = t.toLowerCase().slice(0, 5), r === "data-" || r === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), ea[t] = !0);
          }
        case "function":
        case "symbol":
          return ea[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), ea[t] = !0;
          }
      }
      return !0;
    }
    function uy(e, t, a) {
      var i = [], r;
      for (r in t)
        p0(e, r, t[r], a) || i.push(r);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function fo(e) {
      return o.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function tc(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function Al(e) {
      var t = Ta(e);
      if (t && (e = t.stateNode)) {
        var a = e[ga] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (ei(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (le(t, "name"), a = a.querySelectorAll(
                'input[name="' + Ea(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var r = i[ga] || null;
                  if (!r)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  ei(
                    i,
                    r.value,
                    r.defaultValue,
                    r.defaultValue,
                    r.checked,
                    r.defaultChecked,
                    r.type,
                    r.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && un(i);
            }
            break e;
          case "textarea":
            Es(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && vu(e, !!a.multiple, t, !1);
        }
      }
    }
    function Os(e, t, a) {
      if (E) return e(t, a);
      E = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (E = !1, (y !== null || S !== null) && (Rc(), y && (t = y, e = S, S = y = null, Al(t), e)))
          for (t = 0; t < e.length; t++) Al(e[t]);
      }
    }
    function gu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[ga] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function bu() {
      if (Z) return Z;
      var e, t = X, a = t.length, i, r = "value" in ue ? ue.value : ue.textContent, f = r.length;
      for (e = 0; e < a && t[e] === r[e]; e++) ;
      var p = a - e;
      for (i = 1; i <= p && t[a - i] === r[f - i]; i++) ;
      return Z = r.slice(e, 1 < i ? 1 - i : void 0);
    }
    function so(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function nc() {
      return !0;
    }
    function iy() {
      return !1;
    }
    function Mn(e) {
      function t(a, i, r, f, p) {
        this._reactName = a, this._targetInst = r, this.type = i, this.nativeEvent = f, this.target = p, this.currentTarget = null;
        for (var b in e)
          e.hasOwnProperty(b) && (a = e[b], this[b] = a ? a(f) : f[b]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? nc : iy, this.isPropagationStopped = iy, this;
      }
      return Ie(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = nc);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = nc);
        },
        persist: function() {
        },
        isPersistent: nc
      }), t;
    }
    function Ds(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = KM[e]) ? !!t[e] : !1;
    }
    function zs() {
      return Ds;
    }
    function Wn(e, t) {
      switch (e) {
        case "keyup":
          return cA.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== nT;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ai(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Cs(e, t) {
      switch (e) {
        case "compositionend":
          return ai(t);
        case "keypress":
          return t.which !== lT ? null : (iT = !0, uT);
        case "textInput":
          return e = t.data, e === uT && iT ? null : e;
        default:
          return null;
      }
    }
    function wr(e, t) {
      if (sh)
        return e === "compositionend" || !l1 && Wn(e, t) ? (e = bu(), Z = X = ue = null, sh = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return aT && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function v0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!rA[e.type] : t === "textarea";
    }
    function cy(e) {
      if (!D) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Us(e, t, a, i) {
      y ? S ? S.push(i) : S = [i] : y = i, t = Ef(t, "onChange"), 0 < t.length && (a = new Be(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Nr(e) {
      kl(e, 0);
    }
    function ac(e) {
      var t = Wu(e);
      if (un(t)) return e;
    }
    function oy(e, t) {
      if (e === "change") return t;
    }
    function g0() {
      op && (op.detachEvent("onpropertychange", b0), rp = op = null);
    }
    function b0(e) {
      if (e.propertyName === "value" && ac(rp)) {
        var t = [];
        Us(
          t,
          rp,
          e,
          tc(e)
        ), Os(Nr, t);
      }
    }
    function Lg(e, t, a) {
      e === "focusin" ? (g0(), op = t, rp = a, op.attachEvent("onpropertychange", b0)) : e === "focusout" && g0();
    }
    function ry(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ac(rp);
    }
    function Gg(e, t) {
      if (e === "click") return ac(t);
    }
    function Vg(e, t) {
      if (e === "input" || e === "change")
        return ac(t);
    }
    function Xg(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function qr(e, t) {
      if (Ha(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var r = a[i];
        if (!ju.call(t, r) || !Ha(e[r], t[r]))
          return !1;
      }
      return !0;
    }
    function S0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function fy(e, t) {
      var a = S0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = S0(a);
      }
    }
    function T0(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? T0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function E0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Dr(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Dr(e.document);
      }
      return t;
    }
    function sy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function x0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      i1 || dh == null || dh !== Dr(i) || (i = dh, "selectionStart" in i && sy(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), fp && qr(fp, i) || (fp = i, i = Ef(u1, "onSelect"), 0 < i.length && (t = new Be(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = dh)));
    }
    function Su(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function lc(e) {
      if (c1[e]) return c1[e];
      if (!hh[e]) return e;
      var t = hh[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in oT)
          return c1[e] = t[a];
      return e;
    }
    function ll(e, t) {
      hT.set(e, t), Fu(t, [e]);
    }
    function xa(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = r1.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: bs(t)
        }, r1.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: bs(t)
      };
    }
    function Yr() {
      for (var e = yh, t = s1 = yh = 0; t < e; ) {
        var a = nu[t];
        nu[t++] = null;
        var i = nu[t];
        nu[t++] = null;
        var r = nu[t];
        nu[t++] = null;
        var f = nu[t];
        if (nu[t++] = null, i !== null && r !== null) {
          var p = i.pending;
          p === null ? r.next = r : (r.next = p.next, p.next = r), i.pending = r;
        }
        f !== 0 && M0(a, r, f);
      }
    }
    function Hs(e, t, a, i) {
      nu[yh++] = e, nu[yh++] = t, nu[yh++] = a, nu[yh++] = i, s1 |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function dy(e, t, a, i) {
      return Hs(e, t, a, i), _s(e);
    }
    function ia(e, t) {
      return Hs(e, null, null, t), _s(e);
    }
    function M0(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var r = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & f1 || (r = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, r && t !== null && (r = 31 - Ln(a), e = f.hiddenUpdates, i = e[r], i === null ? e[r] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function _s(e) {
      if (Hp > HA)
        throw us = Hp = 0, _p = G1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      us > _A && (us = 0, _p = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && pl(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && pl(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function uc(e) {
      if (au === null) return e;
      var t = au(e);
      return t === void 0 ? e : t.current;
    }
    function hy(e) {
      if (au === null) return e;
      var t = au(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = uc(e.render), e.render !== t) ? (t = { $$typeof: qu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function A0(e, t) {
      if (au === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, r = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || r === Ca) && (i = !0);
          break;
        case 11:
          (r === qu || r === Ca) && (i = !0);
          break;
        case 14:
        case 15:
          (r === _f || r === Ca) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = au(a), e !== void 0 && e === au(t)));
    }
    function R0(e) {
      au !== null && typeof WeakSet == "function" && (mh === null && (mh = /* @__PURE__ */ new WeakSet()), mh.add(e));
    }
    function jr(e, t, a) {
      var i = e.alternate, r = e.child, f = e.sibling, p = e.tag, b = e.type, M = null;
      switch (p) {
        case 0:
        case 15:
        case 1:
          M = b;
          break;
        case 11:
          M = b.render;
      }
      if (au === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var R = !1;
      b = !1, M !== null && (M = au(M), M !== void 0 && (a.has(M) ? b = !0 : t.has(M) && (p === 1 ? b = !0 : R = !0))), mh !== null && (mh.has(e) || i !== null && mh.has(i)) && (b = !0), b && (e._debugNeedsRemount = !0), (b || R) && (i = ia(e, 2), i !== null && Qt(i, e, 2)), r === null || b || jr(
        r,
        t,
        a
      ), f !== null && jr(
        f,
        t,
        a
      );
    }
    function Br(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, mT || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function yy(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Rl(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = Y(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = uc(e.type);
          break;
        case 1:
          a.type = uc(e.type);
          break;
        case 11:
          a.type = hy(e.type);
      }
      return a;
    }
    function my(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function ws(e, t, a, i, r, f) {
      var p = 0, b = e;
      if (typeof e == "function")
        yy(e) && (p = 1), b = uc(b);
      else if (typeof e == "string")
        p = C(), p = Zo(e, a, p) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Vm:
            return t = Y(31, a, t, r), t.elementType = Vm, t.lanes = f, t;
          case Ke:
            return li(
              a.children,
              r,
              f,
              t
            );
          case $o:
            p = 8, r |= Sa, r |= Xu;
            break;
          case Jo:
            return e = a, i = r, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = Y(12, e, t, i | ta), t.elementType = Jo, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Ko:
            return t = Y(13, a, t, r), t.elementType = Ko, t.lanes = f, t;
          case Ci:
            return t = Y(19, a, t, r), t.elementType = Ci, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Gm:
                case Wa:
                  p = 10;
                  break e;
                case Kd:
                  p = 9;
                  break e;
                case qu:
                  p = 11, b = hy(b);
                  break e;
                case _f:
                  p = 14;
                  break e;
                case Ca:
                  p = 16, b = null;
                  break e;
              }
            b = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : ke(e) ? a = "array" : e !== void 0 && e.$$typeof === zi ? (a = "<" + (ve(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (p = i ? He(i) : null) && (b += `

Check the render method of \`` + p + "`."), p = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + b)
            ), b = null;
        }
      return t = Y(p, a, t, r), t.elementType = e, t.type = b, t.lanes = f, t._debugOwner = i, t;
    }
    function Lr(e, t, a) {
      return t = ws(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function li(e, t, a, i) {
      return e = Y(7, e, i, t), e.lanes = a, e;
    }
    function ui(e, t, a) {
      return e = Y(6, e, null, t), e.lanes = a, e;
    }
    function py(e, t, a) {
      return t = Y(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function ic(e, t) {
      ul(), ph[vh++] = bv, ph[vh++] = gv, gv = e, bv = t;
    }
    function O0(e, t, a) {
      ul(), lu[uu++] = Gc, lu[uu++] = Vc, lu[uu++] = $f, $f = e;
      var i = Gc;
      e = Vc;
      var r = 32 - Ln(i) - 1;
      i &= ~(1 << r), a += 1;
      var f = 32 - Ln(t) + r;
      if (30 < f) {
        var p = r - r % 5;
        f = (i & (1 << p) - 1).toString(32), i >>= p, r -= p, Gc = 1 << 32 - Ln(t) + r | a << r | i, Vc = f + e;
      } else
        Gc = 1 << f | a << r | i, Vc = e;
    }
    function Ns(e) {
      ul(), e.return !== null && (ic(e, 1), O0(e, 1, 0));
    }
    function qs(e) {
      for (; e === gv; )
        gv = ph[--vh], ph[vh] = null, bv = ph[--vh], ph[vh] = null;
      for (; e === $f; )
        $f = lu[--uu], lu[uu] = null, Vc = lu[--uu], lu[uu] = null, Gc = lu[--uu], lu[uu] = null;
    }
    function ul() {
      gt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function il(e, t) {
      if (e.return === null) {
        if (iu === null)
          iu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (iu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          iu.distanceFromLeaf > t && (iu.distanceFromLeaf = t);
        }
        return iu;
      }
      var a = il(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function vy(e, t) {
      Xc || (e = il(e, 0), e.serverProps = null, t !== null && (t = Bd(t), e.serverTail.push(t)));
    }
    function Ol(e) {
      var t = "", a = iu;
      throw a !== null && (iu = null, t = Ur(a)), ho(
        xa(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), d1;
    }
    function gy(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Gn] = e, t[ga] = i, $l(a, i), a) {
        case "dialog":
          lt("cancel", t), lt("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          lt("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < wp.length; a++)
            lt(wp[a], t);
          break;
        case "source":
          lt("error", t);
          break;
        case "img":
        case "image":
        case "link":
          lt("error", t), lt("load", t);
          break;
        case "details":
          lt("toggle", t);
          break;
        case "input":
          Pu("input", i), lt("invalid", t), Iu(t, i), d0(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), pu(t);
          break;
        case "option":
          Ih(t, i);
          break;
        case "select":
          Pu("select", i), lt("invalid", t), zr(t, i);
          break;
        case "textarea":
          Pu("textarea", i), lt("invalid", t), Ml(t, i), ey(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), pu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Sm(t.textContent, a) ? (i.popover != null && (lt("beforetoggle", t), lt("toggle", t)), i.onScroll != null && lt("scroll", t), i.onScrollEnd != null && lt("scrollend", t), i.onClick != null && (t.onclick = Hu), t = !0) : t = !1, t || Ol(e);
    }
    function by(e) {
      for (_a = e.return; _a; )
        switch (_a.tag) {
          case 5:
          case 13:
            ji = !1;
            return;
          case 27:
          case 3:
            ji = !0;
            return;
          default:
            _a = _a.return;
        }
    }
    function cc(e) {
      if (e !== _a) return !1;
      if (!gt)
        return by(e), gt = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Jl(e.type, e.memoizedProps)), a = !a), a && nn) {
        for (a = nn; a; ) {
          var i = il(e, 0), r = Bd(a);
          i.serverTail.push(r), a = r.type === "Suspense" ? Dm(a) : zn(a.nextSibling);
        }
        Ol(e);
      }
      if (by(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        nn = Dm(e);
      } else
        t === 27 ? (t = nn, Kl(e.type) ? (e = I1, I1 = null, nn = e) : nn = t) : nn = _a ? zn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function oc() {
      nn = _a = null, Xc = gt = !1;
    }
    function Sy() {
      var e = Jf;
      return e !== null && (qa === null ? qa = e : qa.push.apply(
        qa,
        e
      ), Jf = null), e;
    }
    function ho(e) {
      Jf === null ? Jf = [e] : Jf.push(e);
    }
    function Ty() {
      var e = iu;
      if (e !== null) {
        iu = null;
        for (var t = Ur(e); 0 < e.children.length; )
          e = e.children[0];
        ze(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Ys() {
      gh = Sv = null, bh = !1;
    }
    function ii(e, t, a) {
      Te(h1, t._currentValue, e), t._currentValue = a, Te(y1, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== bT && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = bT;
    }
    function Tu(e, t) {
      e._currentValue = h1.current;
      var a = y1.current;
      de(y1, t), e._currentRenderer = a, de(h1, t);
    }
    function Ey(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function xy(e, t, a, i) {
      var r = e.child;
      for (r !== null && (r.return = e); r !== null; ) {
        var f = r.dependencies;
        if (f !== null) {
          var p = r.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var b = f;
            f = r;
            for (var M = 0; M < t.length; M++)
              if (b.context === t[M]) {
                f.lanes |= a, b = f.alternate, b !== null && (b.lanes |= a), Ey(
                  f.return,
                  a,
                  e
                ), i || (p = null);
                break e;
              }
            f = b.next;
          }
        } else if (r.tag === 18) {
          if (p = r.return, p === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          p.lanes |= a, f = p.alternate, f !== null && (f.lanes |= a), Ey(
            p,
            a,
            e
          ), p = null;
        } else p = r.child;
        if (p !== null) p.return = r;
        else
          for (p = r; p !== null; ) {
            if (p === e) {
              p = null;
              break;
            }
            if (r = p.sibling, r !== null) {
              r.return = p.return, p = r;
              break;
            }
            p = p.return;
          }
        r = p;
      }
    }
    function An(e, t, a, i) {
      e = null;
      for (var r = t, f = !1; r !== null; ) {
        if (!f) {
          if ((r.flags & 524288) !== 0) f = !0;
          else if ((r.flags & 262144) !== 0) break;
        }
        if (r.tag === 10) {
          var p = r.alternate;
          if (p === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (p = p.memoizedProps, p !== null) {
            var b = r.type;
            Ha(r.pendingProps.value, p.value) || (e !== null ? e.push(b) : e = [b]);
          }
        } else if (r === Fo.current) {
          if (p = r.alternate, p === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          p.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(jp) : e = [jp]);
        }
        r = r.return;
      }
      e !== null && xy(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function ci(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Ha(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function oi(e) {
      Sv = e, gh = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Ht(e) {
      return bh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), My(Sv, e);
    }
    function Gr(e, t) {
      return Sv === null && oi(e), My(e, t);
    }
    function My(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, gh === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        gh = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else gh = gh.next = t;
      return a;
    }
    function Vr() {
      return {
        controller: new vA(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function rc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Dl(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && gA(bA, function() {
        e.controller.abort();
      });
    }
    function cl() {
      var e = Kf;
      return Kf = 0, e;
    }
    function ri(e) {
      var t = Kf;
      return Kf = e, t;
    }
    function fc(e) {
      var t = Kf;
      return Kf += e, t;
    }
    function js(e) {
      Ia = Sh(), 0 > e.actualStartTime && (e.actualStartTime = Ia);
    }
    function Eu(e) {
      if (0 <= Ia) {
        var t = Sh() - Ia;
        e.actualDuration += t, e.selfBaseDuration = t, Ia = -1;
      }
    }
    function sc(e) {
      if (0 <= Ia) {
        var t = Sh() - Ia;
        e.actualDuration += t, Ia = -1;
      }
    }
    function ja() {
      if (0 <= Ia) {
        var e = Sh() - Ia;
        Ia = -1, Kf += e;
      }
    }
    function ol() {
      Ia = Sh();
    }
    function zl(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function D0(e, t) {
      if (sp === null) {
        var a = sp = [];
        m1 = 0, Wf = mm(), Th = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return m1++, t.then(Ay, Ay), t;
    }
    function Ay() {
      if (--m1 === 0 && sp !== null) {
        Th !== null && (Th.status = "fulfilled");
        var e = sp;
        sp = null, Wf = 0, Th = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function z0(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(r) {
          a.push(r);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var r = 0; r < a.length; r++) (0, a[r])(t);
        },
        function(r) {
          for (i.status = "rejected", i.reason = r, r = 0; r < a.length; r++)
            (0, a[r])(void 0);
        }
      ), i;
    }
    function Ry() {
      var e = Ff.current;
      return e !== null ? e : _t.pooledCache;
    }
    function Bs(e, t) {
      t === null ? Te(Ff, Ff.current, e) : Te(Ff, t.pool, e);
    }
    function C0() {
      var e = Ry();
      return e === null ? null : { parent: Hn._currentValue, pool: e };
    }
    function Oy() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Dy(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function yo() {
    }
    function Ba(e, t, a) {
      J.actQueue !== null && (J.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(yo, yo), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Ma(e), e;
        default:
          if (typeof t.status == "string")
            t.then(yo, yo);
          else {
            if (e = _t, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(r) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = r;
                }
              },
              function(r) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = r;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ma(e), e;
          }
          throw bp = t, Rv = !0, gp;
      }
    }
    function zy() {
      if (bp === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = bp;
      return bp = null, Rv = !1, e;
    }
    function Ma(e) {
      if (e === gp || e === Av)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function ca(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function fi(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Cl(e) {
      return {
        lane: e,
        tag: MT,
        payload: null,
        callback: null,
        next: null
      };
    }
    function rl(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, g1 === i && !OT) {
        var r = fe(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          r
        ), OT = !0;
      }
      return (Mt & Na) !== bl ? (r = i.pending, r === null ? t.next = t : (t.next = r.next, r.next = t), i.pending = t, t = _s(e), M0(e, null, a), t) : (Hs(e, i, t, a), _s(e));
    }
    function si(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ao(e, a);
      }
    }
    function mo(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var r = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var p = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? r = f = p : f = f.next = p, a = a.next;
          } while (a !== null);
          f === null ? r = f = t : f = f.next = t;
        } else r = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: r,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function Ul() {
      if (b1) {
        var e = Th;
        if (e !== null) throw e;
      }
    }
    function po(e, t, a, i) {
      b1 = !1;
      var r = e.updateQueue;
      cr = !1, g1 = r.shared;
      var f = r.firstBaseUpdate, p = r.lastBaseUpdate, b = r.shared.pending;
      if (b !== null) {
        r.shared.pending = null;
        var M = b, R = M.next;
        M.next = null, p === null ? f = R : p.next = R, p = M;
        var Q = e.alternate;
        Q !== null && (Q = Q.updateQueue, b = Q.lastBaseUpdate, b !== p && (b === null ? Q.firstBaseUpdate = R : b.next = R, Q.lastBaseUpdate = M));
      }
      if (f !== null) {
        var F = r.baseState;
        p = 0, Q = R = M = null, b = f;
        do {
          var V = b.lane & -536870913, I = V !== b.lane;
          if (I ? (ot & V) === V : (i & V) === V) {
            V !== 0 && V === Wf && (b1 = !0), Q !== null && (Q = Q.next = {
              lane: 0,
              tag: b.tag,
              payload: b.payload,
              callback: null,
              next: null
            });
            e: {
              V = e;
              var Ce = b, Ze = t, wt = a;
              switch (Ce.tag) {
                case AT:
                  if (Ce = Ce.payload, typeof Ce == "function") {
                    bh = !0;
                    var st = Ce.call(
                      wt,
                      F,
                      Ze
                    );
                    if (V.mode & Sa) {
                      Ae(!0);
                      try {
                        Ce.call(wt, F, Ze);
                      } finally {
                        Ae(!1);
                      }
                    }
                    bh = !1, F = st;
                    break e;
                  }
                  F = Ce;
                  break e;
                case v1:
                  V.flags = V.flags & -65537 | 128;
                case MT:
                  if (st = Ce.payload, typeof st == "function") {
                    if (bh = !0, Ce = st.call(
                      wt,
                      F,
                      Ze
                    ), V.mode & Sa) {
                      Ae(!0);
                      try {
                        st.call(wt, F, Ze);
                      } finally {
                        Ae(!1);
                      }
                    }
                    bh = !1;
                  } else Ce = st;
                  if (Ce == null) break e;
                  F = Ie({}, F, Ce);
                  break e;
                case RT:
                  cr = !0;
              }
            }
            V = b.callback, V !== null && (e.flags |= 64, I && (e.flags |= 8192), I = r.callbacks, I === null ? r.callbacks = [V] : I.push(V));
          } else
            I = {
              lane: V,
              tag: b.tag,
              payload: b.payload,
              callback: b.callback,
              next: null
            }, Q === null ? (R = Q = I, M = F) : Q = Q.next = I, p |= V;
          if (b = b.next, b === null) {
            if (b = r.shared.pending, b === null)
              break;
            I = b, b = I.next, I.next = null, r.lastBaseUpdate = I, r.shared.pending = null;
          }
        } while (!0);
        Q === null && (M = F), r.baseState = M, r.firstBaseUpdate = R, r.lastBaseUpdate = Q, f === null && (r.shared.lanes = 0), sr |= p, e.lanes = p, e.memoizedState = F;
      }
      g1 = null;
    }
    function Xr(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function vo(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Xr(a[e], t);
    }
    function U0(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Xr(a[e], t);
    }
    function oa(e, t) {
      var a = Gi;
      Te(Ov, a, e), Te(Eh, t, e), Gi = a | t.baseLanes;
    }
    function Qr(e) {
      Te(Ov, Gi, e), Te(
        Eh,
        Eh.current,
        e
      );
    }
    function fl(e) {
      Gi = Ov.current, de(Eh, e), de(Ov, e);
    }
    function tt() {
      var e = W;
      ru === null ? ru = [e] : ru.push(e);
    }
    function he() {
      var e = W;
      if (ru !== null && (Zc++, ru[Zc] !== e)) {
        var t = fe($e);
        if (!DT.has(t) && (DT.add(t), ru !== null)) {
          for (var a = "", i = 0; i <= Zc; i++) {
            var r = ru[i], f = i === Zc ? e : r;
            for (r = i + 1 + ". " + r; 30 > r.length; )
              r += " ";
            r += f + `
`, a += r;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function La(e) {
      e == null || ke(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        W,
        typeof e
      );
    }
    function go() {
      var e = fe($e);
      CT.has(e) || (CT.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function Bt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function di(e, t) {
      if (Tp) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          W
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        W,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ha(e[a], t[a])) return !1;
      return !0;
    }
    function hi(e, t, a, i, r, f) {
      or = f, $e = t, ru = e !== null ? e._debugHookTypes : null, Zc = -1, Tp = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = fe($e), S1.has(f) || (S1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, J.H = e !== null && e.memoizedState !== null ? E1 : ru !== null ? UT : T1, If = f = (t.mode & Sa) !== Yt;
      var p = x1(a, i, r);
      if (If = !1, Mh && (p = bo(
        t,
        a,
        i,
        r
      )), f) {
        Ae(!0);
        try {
          p = bo(
            t,
            a,
            i,
            r
          );
        } finally {
          Ae(!1);
        }
      }
      return Zr(e, t), p;
    }
    function Zr(e, t) {
      t._debugHookTypes = ru, t.dependencies === null ? Qc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Qc
      }) : t.dependencies._debugThenableState = Qc, J.H = Cv;
      var a = Ut !== null && Ut.next !== null;
      if (or = 0, ru = W = Tn = Ut = $e = null, Zc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Dv = !1, Sp = 0, Qc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Vn || (e = e.dependencies, e !== null && ci(e) && (Vn = !0)), Rv ? (Rv = !1, e = !0) : e = !1, e && (t = fe(t) || "Unknown", zT.has(t) || S1.has(t) || (zT.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function bo(e, t, a, i) {
      $e = e;
      var r = 0;
      do {
        if (Mh && (Qc = null), Sp = 0, Mh = !1, r >= TA)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (r += 1, Tp = !1, Tn = Ut = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Zc = -1, J.H = HT, f = x1(t, a, i);
      } while (Mh);
      return f;
    }
    function Ga() {
      var e = J.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? dc(t) : t, e = e.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== e && ($e.flags |= 1024), t;
    }
    function ra() {
      var e = zv !== 0;
      return zv = 0, e;
    }
    function xu(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Xu) !== Yt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function sl(e) {
      if (Dv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Dv = !1;
      }
      or = 0, ru = Tn = Ut = $e = null, Zc = -1, W = null, Mh = !1, Sp = zv = 0, Qc = null;
    }
    function Vt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Tn === null ? $e.memoizedState = Tn = e : Tn = Tn.next = e, Tn;
    }
    function ft() {
      if (Ut === null) {
        var e = $e.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ut.next;
      var t = Tn === null ? $e.memoizedState : Tn.next;
      if (t !== null)
        Tn = t, Ut = e;
      else {
        if (e === null)
          throw $e.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Ut = e, e = {
          memoizedState: Ut.memoizedState,
          baseState: Ut.baseState,
          baseQueue: Ut.baseQueue,
          queue: Ut.queue,
          next: null
        }, Tn === null ? $e.memoizedState = Tn = e : Tn = Tn.next = e;
      }
      return Tn;
    }
    function Ls() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function dc(e) {
      var t = Sp;
      return Sp += 1, Qc === null && (Qc = Oy()), e = Ba(Qc, e, t), t = $e, (Tn === null ? t.memoizedState : Tn.next) === null && (t = t.alternate, J.H = t !== null && t.memoizedState !== null ? E1 : T1), e;
    }
    function Hl(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return dc(e);
        if (e.$$typeof === Wa) return Ht(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function It(e) {
      var t = null, a = $e.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = $e.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(r) {
            return r.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ls(), $e.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Tp)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = iv;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function mt(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function yt(e, t, a) {
      var i = Vt();
      if (a !== void 0) {
        var r = a(t);
        if (If) {
          Ae(!0);
          try {
            a(t);
          } finally {
            Ae(!1);
          }
        }
      } else r = t;
      return i.memoizedState = i.baseState = r, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: r
      }, i.queue = e, e = e.dispatch = jy.bind(
        null,
        $e,
        e
      ), [i.memoizedState, e];
    }
    function Va(e) {
      var t = ft();
      return Xa(t, Ut, e);
    }
    function Xa(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var r = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (r !== null) {
          var p = r.next;
          r.next = f.next, f.next = p;
        }
        t.baseQueue !== r && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = r = f, i.pending = null;
      }
      if (f = e.baseState, r === null) e.memoizedState = f;
      else {
        t = r.next;
        var b = p = null, M = null, R = t, Q = !1;
        do {
          var F = R.lane & -536870913;
          if (F !== R.lane ? (ot & F) === F : (or & F) === F) {
            var V = R.revertLane;
            if (V === 0)
              M !== null && (M = M.next = {
                lane: 0,
                revertLane: 0,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null
              }), F === Wf && (Q = !0);
            else if ((or & V) === V) {
              R = R.next, V === Wf && (Q = !0);
              continue;
            } else
              F = {
                lane: 0,
                revertLane: R.revertLane,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null
              }, M === null ? (b = M = F, p = f) : M = M.next = F, $e.lanes |= V, sr |= V;
            F = R.action, If && a(f, F), f = R.hasEagerState ? R.eagerState : a(f, F);
          } else
            V = {
              lane: F,
              revertLane: R.revertLane,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, M === null ? (b = M = V, p = f) : M = M.next = V, $e.lanes |= F, sr |= F;
          R = R.next;
        } while (R !== null && R !== t);
        if (M === null ? p = f : M.next = b, !Ha(f, e.memoizedState) && (Vn = !0, Q && (a = Th, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = p, e.baseQueue = M, i.lastRenderedState = f;
      }
      return r === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function hc(e) {
      var t = ft(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, r = a.pending, f = t.memoizedState;
      if (r !== null) {
        a.pending = null;
        var p = r = r.next;
        do
          f = e(f, p.action), p = p.next;
        while (p !== r);
        Ha(f, t.memoizedState) || (Vn = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Mu(e, t, a) {
      var i = $e, r = Vt();
      if (gt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        xh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), xh = !0);
      } else {
        if (f = t(), xh || (a = t(), Ha(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), xh = !0)), _t === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (ot & 124) !== 0 || Cy(i, t, f);
      }
      return r.memoizedState = f, a = { value: f, getSnapshot: t }, r.queue = a, Xs(
        To.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, wl(
        ou | _n,
        mi(),
        So.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function kr(e, t, a) {
      var i = $e, r = ft(), f = gt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !xh) {
        var p = t();
        Ha(a, p) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), xh = !0);
      }
      (p = !Ha(
        (Ut || r).memoizedState,
        a
      )) && (r.memoizedState = a, Vn = !0), r = r.queue;
      var b = To.bind(null, i, r, e);
      if (on(2048, _n, b, [e]), r.getSnapshot !== t || p || Tn !== null && Tn.memoizedState.tag & ou) {
        if (i.flags |= 2048, wl(
          ou | _n,
          mi(),
          So.bind(
            null,
            i,
            r,
            a,
            t
          ),
          null
        ), _t === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (or & 124) !== 0 || Cy(i, t, a);
      }
      return a;
    }
    function Cy(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = $e.updateQueue, t === null ? (t = Ls(), $e.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function So(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Uy(t) && Eo(e);
    }
    function To(e, t, a) {
      return a(function() {
        Uy(t) && Eo(e);
      });
    }
    function Uy(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !Ha(e, a);
      } catch {
        return !0;
      }
    }
    function Eo(e) {
      var t = ia(e, 2);
      t !== null && Qt(t, e, 2);
    }
    function $r(e) {
      var t = Vt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), If) {
          Ae(!0);
          try {
            a();
          } finally {
            Ae(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mt,
        lastRenderedState: e
      }, t;
    }
    function Au(e) {
      e = $r(e);
      var t = e.queue, a = Ro.bind(null, $e, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function dl(e) {
      var t = Vt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Ps.bind(
        null,
        $e,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Ru(e, t) {
      var a = ft();
      return _l(a, Ut, e, t);
    }
    function _l(e, t, a, i) {
      return e.baseState = a, Xa(
        e,
        Ut,
        typeof i == "function" ? i : mt
      );
    }
    function Gs(e, t) {
      var a = ft();
      return Ut !== null ? _l(a, Ut, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Hy(e, t, a, i, r) {
      if (ef(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: r,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(p) {
            f.listeners.push(p);
          }
        };
        J.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, xo(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function xo(e, t) {
      var a = t.action, i = t.payload, r = e.state;
      if (t.isTransition) {
        var f = J.T, p = {};
        J.T = p, J.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var b = a(r, i), M = J.S;
          M !== null && M(p, b), Jr(e, t, b);
        } catch (R) {
          pn(e, t, R);
        } finally {
          J.T = f, f === null && p._updatedFibers && (e = p._updatedFibers.size, p._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          p = a(r, i), Jr(e, t, p);
        } catch (R) {
          pn(e, t, R);
        }
    }
    function Jr(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          yi(e, t, i);
        },
        function(i) {
          return pn(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : yi(e, t, a);
    }
    function yi(e, t, a) {
      t.status = "fulfilled", t.value = a, Kr(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, xo(e, a)));
    }
    function pn(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Kr(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Kr(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function _y(e, t) {
      return t;
    }
    function Mo(e, t) {
      if (gt) {
        var a = _t.formState;
        if (a !== null) {
          e: {
            var i = $e;
            if (gt) {
              if (nn) {
                t: {
                  for (var r = nn, f = ji; r.nodeType !== 8; ) {
                    if (!f) {
                      r = null;
                      break t;
                    }
                    if (r = zn(
                      r.nextSibling
                    ), r === null) {
                      r = null;
                      break t;
                    }
                  }
                  f = r.data, r = f === K1 || f === C2 ? r : null;
                }
                if (r) {
                  nn = zn(
                    r.nextSibling
                  ), i = r.data === K1;
                  break e;
                }
              }
              Ol(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Vt(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _y,
        lastRenderedState: t
      }, a.queue = i, a = Ro.bind(
        null,
        $e,
        i
      ), i.dispatch = a, i = $r(!1), f = Ps.bind(
        null,
        $e,
        !1,
        i.queue
      ), i = Vt(), r = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = r, a = Hy.bind(
        null,
        $e,
        r,
        f,
        a
      ), r.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Vs(e) {
      var t = ft();
      return H0(t, Ut, e);
    }
    function H0(e, t, a) {
      if (t = Xa(
        e,
        t,
        _y
      )[0], e = Va(mt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = dc(t);
        } catch (p) {
          throw p === gp ? Av : p;
        }
      else i = t;
      t = ft();
      var r = t.queue, f = r.dispatch;
      return a !== t.memoizedState && ($e.flags |= 2048, wl(
        ou | _n,
        mi(),
        cn.bind(null, r, a),
        null
      )), [i, f, e];
    }
    function cn(e, t) {
      e.action = t;
    }
    function Ao(e) {
      var t = ft(), a = Ut;
      if (a !== null)
        return H0(t, a, e);
      ft(), t = t.memoizedState, a = ft();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function wl(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = $e.updateQueue, t === null && (t = Ls(), $e.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function mi() {
      return { destroy: void 0, resource: void 0 };
    }
    function Wr(e) {
      var t = Vt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Qa(e, t, a, i) {
      var r = Vt();
      i = i === void 0 ? null : i, $e.flags |= e, r.memoizedState = wl(
        ou | t,
        mi(),
        a,
        i
      );
    }
    function on(e, t, a, i) {
      var r = ft();
      i = i === void 0 ? null : i;
      var f = r.memoizedState.inst;
      Ut !== null && i !== null && di(i, Ut.memoizedState.deps) ? r.memoizedState = wl(t, f, a, i) : ($e.flags |= e, r.memoizedState = wl(
        ou | t,
        f,
        a,
        i
      ));
    }
    function Xs(e, t) {
      ($e.mode & Xu) !== Yt && ($e.mode & yT) === Yt ? Qa(276826112, _n, e, t) : Qa(8390656, _n, e, t);
    }
    function Qs(e, t) {
      var a = 4194308;
      return ($e.mode & Xu) !== Yt && (a |= 134217728), Qa(a, na, e, t);
    }
    function _0(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Zs(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      ($e.mode & Xu) !== Yt && (i |= 134217728), Qa(
        i,
        na,
        _0.bind(null, t, e),
        a
      );
    }
    function Nl(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, on(
        4,
        na,
        _0.bind(null, t, e),
        a
      );
    }
    function Fr(e, t) {
      return Vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function yc(e, t) {
      var a = ft();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && di(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function ks(e, t) {
      var a = Vt();
      t = t === void 0 ? null : t;
      var i = e();
      if (If) {
        Ae(!0);
        try {
          e();
        } finally {
          Ae(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function pi(e, t) {
      var a = ft();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && di(t, i[1]))
        return i[0];
      if (i = e(), If) {
        Ae(!0);
        try {
          e();
        } finally {
          Ae(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function $s(e, t) {
      var a = Vt();
      return Ks(a, e, t);
    }
    function Pr(e, t) {
      var a = ft();
      return Ir(
        a,
        Ut.memoizedState,
        e,
        t
      );
    }
    function Js(e, t) {
      var a = ft();
      return Ut === null ? Ks(a, e, t) : Ir(
        a,
        Ut.memoizedState,
        e,
        t
      );
    }
    function Ks(e, t, a) {
      return a === void 0 || (or & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = X0(), $e.lanes |= e, sr |= e, a);
    }
    function Ir(e, t, a, i) {
      return Ha(a, t) ? a : Eh.current !== null ? (e = Ks(e, a, i), Ha(e, t) || (Vn = !0), e) : (or & 42) === 0 ? (Vn = !0, e.memoizedState = a) : (e = X0(), $e.lanes |= e, sr |= e, t);
    }
    function wy(e, t, a, i, r) {
      var f = Qe.p;
      Qe.p = f !== 0 && f < gl ? f : gl;
      var p = J.T, b = {};
      J.T = b, Ps(e, !1, t, a), b._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var M = r(), R = J.S;
        if (R !== null && R(b, M), M !== null && typeof M == "object" && typeof M.then == "function") {
          var Q = z0(
            M,
            i
          );
          Ou(
            e,
            t,
            Q,
            ha(e)
          );
        } else
          Ou(
            e,
            t,
            i,
            ha(e)
          );
      } catch (F) {
        Ou(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: F },
          ha(e)
        );
      } finally {
        Qe.p = f, J.T = p, p === null && b._updatedFibers && (e = b._updatedFibers.size, b._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function mc(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var r = Ny(e).queue;
      wy(
        e,
        r,
        t,
        fs,
        a === null ? q : function() {
          return qy(e), a(i);
        }
      );
    }
    function Ny(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: fs,
        baseState: fs,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: mt,
          lastRenderedState: fs
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: mt,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function qy(e) {
      J.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Ny(e).next.queue;
      Ou(
        e,
        t,
        {},
        ha(e)
      );
    }
    function ql() {
      var e = $r(!1);
      return e = wy.bind(
        null,
        $e,
        e.queue,
        !0,
        !1
      ), Vt().memoizedState = e, [!1, e];
    }
    function Ws() {
      var e = Va(mt)[0], t = ft().memoizedState;
      return [
        typeof e == "boolean" ? e : dc(e),
        t
      ];
    }
    function Fs() {
      var e = hc(mt)[0], t = ft().memoizedState;
      return [
        typeof e == "boolean" ? e : dc(e),
        t
      ];
    }
    function fa() {
      return Ht(jp);
    }
    function Yl() {
      var e = Vt(), t = _t.identifierPrefix;
      if (gt) {
        var a = Vc, i = Gc;
        a = (i & ~(1 << 32 - Ln(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = zv++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = SA++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function pc() {
      return Vt().memoizedState = Yy.bind(
        null,
        $e
      );
    }
    function Yy(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ha(a);
            e = Cl(i);
            var r = rl(a, e, i);
            r !== null && (Qt(r, a, i), si(r, a, i)), a = Vr(), t != null && r !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function jy(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ha(e);
      var r = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      ef(e) ? vc(t, r) : (r = dy(e, t, r, i), r !== null && (Qt(r, e, i), tf(r, t, i))), ht(e, i);
    }
    function Ro(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ha(e), Ou(e, t, a, i), ht(e, i);
    }
    function Ou(e, t, a, i) {
      var r = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ef(e)) vc(t, r);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var p = J.H;
          J.H = Zu;
          try {
            var b = t.lastRenderedState, M = f(b, a);
            if (r.hasEagerState = !0, r.eagerState = M, Ha(M, b))
              return Hs(e, t, r, 0), _t === null && Yr(), !1;
          } catch {
          } finally {
            J.H = p;
          }
        }
        if (a = dy(e, t, r, i), a !== null)
          return Qt(a, e, i), tf(a, t, i), !0;
      }
      return !1;
    }
    function Ps(e, t, a, i) {
      if (J.T === null && Wf === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: mm(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, ef(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = dy(
          e,
          a,
          i,
          2
        ), t !== null && Qt(t, e, 2);
      ht(e, 2);
    }
    function ef(e) {
      var t = e.alternate;
      return e === $e || t !== null && t === $e;
    }
    function vc(e, t) {
      Mh = Dv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function tf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ao(e, a);
      }
    }
    function vn(e) {
      var t = at;
      return e != null && (at = t === null ? e : t.concat(e)), t;
    }
    function Oo(e, t, a) {
      for (var i = Object.keys(e.props), r = 0; r < i.length; r++) {
        var f = i[r];
        if (f !== "children" && f !== "key") {
          t === null && (t = Lr(e, a.mode, 0), t._debugInfo = at, t.return = a), ze(
            t,
            function(p) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                p
              );
            },
            f
          );
          break;
        }
      }
    }
    function Do(e) {
      var t = Ep;
      return Ep += 1, Ah === null && (Ah = Oy()), Ba(Ah, e, t);
    }
    function Za(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Je(e, t) {
      throw t.$$typeof === Hf ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function bt(e, t) {
      var a = fe(e) || "Component";
      $T[a] || ($T[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Lt(e, t) {
      var a = fe(e) || "Component";
      JT[a] || (JT[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function nf(e) {
      function t(z, H) {
        if (e) {
          var w = z.deletions;
          w === null ? (z.deletions = [H], z.flags |= 16) : w.push(H);
        }
      }
      function a(z, H) {
        if (!e) return null;
        for (; H !== null; )
          t(z, H), H = H.sibling;
        return null;
      }
      function i(z) {
        for (var H = /* @__PURE__ */ new Map(); z !== null; )
          z.key !== null ? H.set(z.key, z) : H.set(z.index, z), z = z.sibling;
        return H;
      }
      function r(z, H) {
        return z = Rl(z, H), z.index = 0, z.sibling = null, z;
      }
      function f(z, H, w) {
        return z.index = w, e ? (w = z.alternate, w !== null ? (w = w.index, w < H ? (z.flags |= 67108866, H) : w) : (z.flags |= 67108866, H)) : (z.flags |= 1048576, H);
      }
      function p(z) {
        return e && z.alternate === null && (z.flags |= 67108866), z;
      }
      function b(z, H, w, ee) {
        return H === null || H.tag !== 6 ? (H = ui(
          w,
          z.mode,
          ee
        ), H.return = z, H._debugOwner = z, H._debugTask = z._debugTask, H._debugInfo = at, H) : (H = r(H, w), H.return = z, H._debugInfo = at, H);
      }
      function M(z, H, w, ee) {
        var xe = w.type;
        return xe === Ke ? (H = Q(
          z,
          H,
          w.props.children,
          ee,
          w.key
        ), Oo(w, H, z), H) : H !== null && (H.elementType === xe || A0(H, w) || typeof xe == "object" && xe !== null && xe.$$typeof === Ca && rr(xe) === H.type) ? (H = r(H, w.props), Za(H, w), H.return = z, H._debugOwner = w._owner, H._debugInfo = at, H) : (H = Lr(w, z.mode, ee), Za(H, w), H.return = z, H._debugInfo = at, H);
      }
      function R(z, H, w, ee) {
        return H === null || H.tag !== 4 || H.stateNode.containerInfo !== w.containerInfo || H.stateNode.implementation !== w.implementation ? (H = py(w, z.mode, ee), H.return = z, H._debugInfo = at, H) : (H = r(H, w.children || []), H.return = z, H._debugInfo = at, H);
      }
      function Q(z, H, w, ee, xe) {
        return H === null || H.tag !== 7 ? (H = li(
          w,
          z.mode,
          ee,
          xe
        ), H.return = z, H._debugOwner = z, H._debugTask = z._debugTask, H._debugInfo = at, H) : (H = r(H, w), H.return = z, H._debugInfo = at, H);
      }
      function F(z, H, w) {
        if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
          return H = ui(
            "" + H,
            z.mode,
            w
          ), H.return = z, H._debugOwner = z, H._debugTask = z._debugTask, H._debugInfo = at, H;
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case zi:
              return w = Lr(
                H,
                z.mode,
                w
              ), Za(w, H), w.return = z, z = vn(H._debugInfo), w._debugInfo = at, at = z, w;
            case qc:
              return H = py(
                H,
                z.mode,
                w
              ), H.return = z, H._debugInfo = at, H;
            case Ca:
              var ee = vn(H._debugInfo);
              return H = rr(H), z = F(z, H, w), at = ee, z;
          }
          if (ke(H) || ie(H))
            return w = li(
              H,
              z.mode,
              w,
              null
            ), w.return = z, w._debugOwner = z, w._debugTask = z._debugTask, z = vn(H._debugInfo), w._debugInfo = at, at = z, w;
          if (typeof H.then == "function")
            return ee = vn(H._debugInfo), z = F(
              z,
              Do(H),
              w
            ), at = ee, z;
          if (H.$$typeof === Wa)
            return F(
              z,
              Gr(z, H),
              w
            );
          Je(z, H);
        }
        return typeof H == "function" && bt(z, H), typeof H == "symbol" && Lt(z, H), null;
      }
      function V(z, H, w, ee) {
        var xe = H !== null ? H.key : null;
        if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
          return xe !== null ? null : b(z, H, "" + w, ee);
        if (typeof w == "object" && w !== null) {
          switch (w.$$typeof) {
            case zi:
              return w.key === xe ? (xe = vn(w._debugInfo), z = M(
                z,
                H,
                w,
                ee
              ), at = xe, z) : null;
            case qc:
              return w.key === xe ? R(z, H, w, ee) : null;
            case Ca:
              return xe = vn(w._debugInfo), w = rr(w), z = V(
                z,
                H,
                w,
                ee
              ), at = xe, z;
          }
          if (ke(w) || ie(w))
            return xe !== null ? null : (xe = vn(w._debugInfo), z = Q(
              z,
              H,
              w,
              ee,
              null
            ), at = xe, z);
          if (typeof w.then == "function")
            return xe = vn(w._debugInfo), z = V(
              z,
              H,
              Do(w),
              ee
            ), at = xe, z;
          if (w.$$typeof === Wa)
            return V(
              z,
              H,
              Gr(z, w),
              ee
            );
          Je(z, w);
        }
        return typeof w == "function" && bt(z, w), typeof w == "symbol" && Lt(z, w), null;
      }
      function I(z, H, w, ee, xe) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number" || typeof ee == "bigint")
          return z = z.get(w) || null, b(H, z, "" + ee, xe);
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case zi:
              return w = z.get(
                ee.key === null ? w : ee.key
              ) || null, z = vn(ee._debugInfo), H = M(
                H,
                w,
                ee,
                xe
              ), at = z, H;
            case qc:
              return z = z.get(
                ee.key === null ? w : ee.key
              ) || null, R(H, z, ee, xe);
            case Ca:
              var We = vn(ee._debugInfo);
              return ee = rr(ee), H = I(
                z,
                H,
                w,
                ee,
                xe
              ), at = We, H;
          }
          if (ke(ee) || ie(ee))
            return w = z.get(w) || null, z = vn(ee._debugInfo), H = Q(
              H,
              w,
              ee,
              xe,
              null
            ), at = z, H;
          if (typeof ee.then == "function")
            return We = vn(ee._debugInfo), H = I(
              z,
              H,
              w,
              Do(ee),
              xe
            ), at = We, H;
          if (ee.$$typeof === Wa)
            return I(
              z,
              H,
              w,
              Gr(H, ee),
              xe
            );
          Je(H, ee);
        }
        return typeof ee == "function" && bt(H, ee), typeof ee == "symbol" && Lt(H, ee), null;
      }
      function Ce(z, H, w, ee) {
        if (typeof w != "object" || w === null) return ee;
        switch (w.$$typeof) {
          case zi:
          case qc:
            A(z, H, w);
            var xe = w.key;
            if (typeof xe != "string") break;
            if (ee === null) {
              ee = /* @__PURE__ */ new Set(), ee.add(xe);
              break;
            }
            if (!ee.has(xe)) {
              ee.add(xe);
              break;
            }
            ze(H, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                xe
              );
            });
            break;
          case Ca:
            w = rr(w), Ce(z, H, w, ee);
        }
        return ee;
      }
      function Ze(z, H, w, ee) {
        for (var xe = null, We = null, Ue = null, Fe = H, Pe = H = 0, jt = null; Fe !== null && Pe < w.length; Pe++) {
          Fe.index > Pe ? (jt = Fe, Fe = null) : jt = Fe.sibling;
          var dn = V(
            z,
            Fe,
            w[Pe],
            ee
          );
          if (dn === null) {
            Fe === null && (Fe = jt);
            break;
          }
          xe = Ce(
            z,
            dn,
            w[Pe],
            xe
          ), e && Fe && dn.alternate === null && t(z, Fe), H = f(dn, H, Pe), Ue === null ? We = dn : Ue.sibling = dn, Ue = dn, Fe = jt;
        }
        if (Pe === w.length)
          return a(z, Fe), gt && ic(z, Pe), We;
        if (Fe === null) {
          for (; Pe < w.length; Pe++)
            Fe = F(z, w[Pe], ee), Fe !== null && (xe = Ce(
              z,
              Fe,
              w[Pe],
              xe
            ), H = f(
              Fe,
              H,
              Pe
            ), Ue === null ? We = Fe : Ue.sibling = Fe, Ue = Fe);
          return gt && ic(z, Pe), We;
        }
        for (Fe = i(Fe); Pe < w.length; Pe++)
          jt = I(
            Fe,
            z,
            Pe,
            w[Pe],
            ee
          ), jt !== null && (xe = Ce(
            z,
            jt,
            w[Pe],
            xe
          ), e && jt.alternate !== null && Fe.delete(
            jt.key === null ? Pe : jt.key
          ), H = f(
            jt,
            H,
            Pe
          ), Ue === null ? We = jt : Ue.sibling = jt, Ue = jt);
        return e && Fe.forEach(function(Fc) {
          return t(z, Fc);
        }), gt && ic(z, Pe), We;
      }
      function wt(z, H, w, ee) {
        if (w == null)
          throw Error("An iterable object provided no iterator.");
        for (var xe = null, We = null, Ue = H, Fe = H = 0, Pe = null, jt = null, dn = w.next(); Ue !== null && !dn.done; Fe++, dn = w.next()) {
          Ue.index > Fe ? (Pe = Ue, Ue = null) : Pe = Ue.sibling;
          var Fc = V(z, Ue, dn.value, ee);
          if (Fc === null) {
            Ue === null && (Ue = Pe);
            break;
          }
          jt = Ce(
            z,
            Fc,
            dn.value,
            jt
          ), e && Ue && Fc.alternate === null && t(z, Ue), H = f(Fc, H, Fe), We === null ? xe = Fc : We.sibling = Fc, We = Fc, Ue = Pe;
        }
        if (dn.done)
          return a(z, Ue), gt && ic(z, Fe), xe;
        if (Ue === null) {
          for (; !dn.done; Fe++, dn = w.next())
            Ue = F(z, dn.value, ee), Ue !== null && (jt = Ce(
              z,
              Ue,
              dn.value,
              jt
            ), H = f(
              Ue,
              H,
              Fe
            ), We === null ? xe = Ue : We.sibling = Ue, We = Ue);
          return gt && ic(z, Fe), xe;
        }
        for (Ue = i(Ue); !dn.done; Fe++, dn = w.next())
          Pe = I(
            Ue,
            z,
            Fe,
            dn.value,
            ee
          ), Pe !== null && (jt = Ce(
            z,
            Pe,
            dn.value,
            jt
          ), e && Pe.alternate !== null && Ue.delete(
            Pe.key === null ? Fe : Pe.key
          ), H = f(
            Pe,
            H,
            Fe
          ), We === null ? xe = Pe : We.sibling = Pe, We = Pe);
        return e && Ue.forEach(function($A) {
          return t(z, $A);
        }), gt && ic(z, Fe), xe;
      }
      function st(z, H, w, ee) {
        if (typeof w == "object" && w !== null && w.type === Ke && w.key === null && (Oo(w, null, z), w = w.props.children), typeof w == "object" && w !== null) {
          switch (w.$$typeof) {
            case zi:
              var xe = vn(w._debugInfo);
              e: {
                for (var We = w.key; H !== null; ) {
                  if (H.key === We) {
                    if (We = w.type, We === Ke) {
                      if (H.tag === 7) {
                        a(
                          z,
                          H.sibling
                        ), ee = r(
                          H,
                          w.props.children
                        ), ee.return = z, ee._debugOwner = w._owner, ee._debugInfo = at, Oo(w, ee, z), z = ee;
                        break e;
                      }
                    } else if (H.elementType === We || A0(
                      H,
                      w
                    ) || typeof We == "object" && We !== null && We.$$typeof === Ca && rr(We) === H.type) {
                      a(
                        z,
                        H.sibling
                      ), ee = r(H, w.props), Za(ee, w), ee.return = z, ee._debugOwner = w._owner, ee._debugInfo = at, z = ee;
                      break e;
                    }
                    a(z, H);
                    break;
                  } else t(z, H);
                  H = H.sibling;
                }
                w.type === Ke ? (ee = li(
                  w.props.children,
                  z.mode,
                  ee,
                  w.key
                ), ee.return = z, ee._debugOwner = z, ee._debugTask = z._debugTask, ee._debugInfo = at, Oo(w, ee, z), z = ee) : (ee = Lr(
                  w,
                  z.mode,
                  ee
                ), Za(ee, w), ee.return = z, ee._debugInfo = at, z = ee);
              }
              return z = p(z), at = xe, z;
            case qc:
              e: {
                for (xe = w, w = xe.key; H !== null; ) {
                  if (H.key === w)
                    if (H.tag === 4 && H.stateNode.containerInfo === xe.containerInfo && H.stateNode.implementation === xe.implementation) {
                      a(
                        z,
                        H.sibling
                      ), ee = r(
                        H,
                        xe.children || []
                      ), ee.return = z, z = ee;
                      break e;
                    } else {
                      a(z, H);
                      break;
                    }
                  else t(z, H);
                  H = H.sibling;
                }
                ee = py(
                  xe,
                  z.mode,
                  ee
                ), ee.return = z, z = ee;
              }
              return p(z);
            case Ca:
              return xe = vn(w._debugInfo), w = rr(w), z = st(
                z,
                H,
                w,
                ee
              ), at = xe, z;
          }
          if (ke(w))
            return xe = vn(w._debugInfo), z = Ze(
              z,
              H,
              w,
              ee
            ), at = xe, z;
          if (ie(w)) {
            if (xe = vn(w._debugInfo), We = ie(w), typeof We != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var Ue = We.call(w);
            return Ue === w ? (z.tag !== 0 || Object.prototype.toString.call(z.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(Ue) !== "[object Generator]") && (ZT || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), ZT = !0) : w.entries !== We || A1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), A1 = !0), z = wt(
              z,
              H,
              Ue,
              ee
            ), at = xe, z;
          }
          if (typeof w.then == "function")
            return xe = vn(w._debugInfo), z = st(
              z,
              H,
              Do(w),
              ee
            ), at = xe, z;
          if (w.$$typeof === Wa)
            return st(
              z,
              H,
              Gr(z, w),
              ee
            );
          Je(z, w);
        }
        return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (xe = "" + w, H !== null && H.tag === 6 ? (a(
          z,
          H.sibling
        ), ee = r(H, xe), ee.return = z, z = ee) : (a(z, H), ee = ui(
          xe,
          z.mode,
          ee
        ), ee.return = z, ee._debugOwner = z, ee._debugTask = z._debugTask, ee._debugInfo = at, z = ee), p(z)) : (typeof w == "function" && bt(z, w), typeof w == "symbol" && Lt(z, w), a(z, H));
      }
      return function(z, H, w, ee) {
        var xe = at;
        at = null;
        try {
          Ep = 0;
          var We = st(
            z,
            H,
            w,
            ee
          );
          return Ah = null, We;
        } catch (jt) {
          if (jt === gp || jt === Av) throw jt;
          var Ue = Y(29, jt, null, z.mode);
          Ue.lanes = ee, Ue.return = z;
          var Fe = Ue._debugInfo = at;
          if (Ue._debugOwner = z._debugOwner, Ue._debugTask = z._debugTask, Fe != null) {
            for (var Pe = Fe.length - 1; 0 <= Pe; Pe--)
              if (typeof Fe[Pe].stack == "string") {
                Ue._debugOwner = Fe[Pe], Ue._debugTask = Fe[Pe].debugTask;
                break;
              }
          }
          return Ue;
        } finally {
          at = xe;
        }
      };
    }
    function Aa(e) {
      var t = e.alternate;
      Te(
        wn,
        wn.current & Oh,
        e
      ), Te(fu, e, e), Li === null && (t === null || Eh.current !== null || t.memoizedState !== null) && (Li = e);
    }
    function vi(e) {
      if (e.tag === 22) {
        if (Te(wn, wn.current, e), Te(fu, e, e), Li === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Li = e);
        }
      } else hl(e);
    }
    function hl(e) {
      Te(wn, wn.current, e), Te(
        fu,
        fu.current,
        e
      );
    }
    function Ra(e) {
      de(fu, e), Li === e && (Li = null), de(wn, e);
    }
    function Du(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Jc || Wl(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function By(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        i2.has(t) || (i2.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Gt(e, t, a, i) {
      var r = e.memoizedState, f = a(i, r);
      if (e.mode & Sa) {
        Ae(!0);
        try {
          f = a(i, r);
        } finally {
          Ae(!1);
        }
      }
      f === void 0 && (t = ve(t) || "Component", n2.has(t) || (n2.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), r = f == null ? r : Ie({}, r, f), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
    }
    function Is(e, t, a, i, r, f, p) {
      var b = e.stateNode;
      if (typeof b.shouldComponentUpdate == "function") {
        if (a = b.shouldComponentUpdate(
          i,
          f,
          p
        ), e.mode & Sa) {
          Ae(!0);
          try {
            a = b.shouldComponentUpdate(
              i,
              f,
              p
            );
          } finally {
            Ae(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          ve(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !qr(a, i) || !qr(r, f) : !0;
    }
    function ed(e, t, a, i) {
      var r = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== r && (e = fe(e) || "Component", FT.has(e) || (FT.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), R1.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function gi(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Ie({}, a));
        for (var r in e)
          a[r] === void 0 && (a[r] = e[r]);
      }
      return a;
    }
    function Ly(e) {
      O1(e), console.warn(
        `%s

%s
`,
        Dh ? "An error occurred in the <" + Dh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function w0(e) {
      var t = Dh ? "The above error occurred in the <" + Dh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((D1 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          j2 + e[0],
          B2,
          Kv + i + Kv,
          L2
        ) : e.splice(
          0,
          0,
          j2,
          B2,
          Kv + i + Kv,
          L2
        ), e.unshift(console), i = ZA.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function td(e) {
      O1(e);
    }
    function zo(e, t) {
      try {
        Dh = t.source ? fe(t.source) : null, D1 = null;
        var a = t.value;
        if (J.actQueue !== null)
          J.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (r) {
        setTimeout(function() {
          throw r;
        });
      }
    }
    function nd(e, t, a) {
      try {
        Dh = a.source ? fe(a.source) : null, D1 = fe(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (r) {
        setTimeout(function() {
          throw r;
        });
      }
    }
    function Yn(e, t, a) {
      return a = Cl(a), a.tag = v1, a.payload = { element: null }, a.callback = function() {
        ze(t.source, zo, e, t);
      }, a;
    }
    function Xt(e) {
      return e = Cl(e), e.tag = v1, e;
    }
    function af(e, t, a, i) {
      var r = a.type.getDerivedStateFromError;
      if (typeof r == "function") {
        var f = i.value;
        e.payload = function() {
          return r(f);
        }, e.callback = function() {
          R0(a), ze(
            i.source,
            nd,
            t,
            a,
            i
          );
        };
      }
      var p = a.stateNode;
      p !== null && typeof p.componentDidCatch == "function" && (e.callback = function() {
        R0(a), ze(
          i.source,
          nd,
          t,
          a,
          i
        ), typeof r != "function" && (hr === null ? hr = /* @__PURE__ */ new Set([this]) : hr.add(this)), EA(this, i), typeof r == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          fe(a) || "Unknown"
        );
      });
    }
    function lf(e, t, a, i, r) {
      if (a.flags |= 32768, Kt && Yo(e, r), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && An(
          t,
          a,
          r,
          !0
        ), gt && (Xc = !0), a = fu.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Li === null ? Ed() : a.alternate === null && an === $c && (an = H1), a.flags &= -257, a.flags |= 65536, a.lanes = r, i === p1 ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), sm(e, i, r)), !1;
            case 22:
              return a.flags |= 65536, i === p1 ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), sm(e, i, r)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return sm(e, i, r), Ed(), !1;
      }
      if (gt)
        return Xc = !0, t = fu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = r, i !== d1 && ho(
          xa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== d1 && ho(
          xa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, r &= -r, e.lanes |= r, i = xa(i, a), r = Yn(
          e.stateNode,
          i,
          r
        ), mo(e, r), an !== es && (an = Hh)), !1;
      var f = xa(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (Cp === null ? Cp = [f] : Cp.push(f), an !== es && (an = Hh), t === null) return !0;
      i = xa(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = r & -r, a.lanes |= e, e = Yn(
              a.stateNode,
              i,
              e
            ), mo(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (hr === null || !hr.has(f))))
              return a.flags |= 65536, r &= -r, a.lanes |= r, r = Xt(r), af(
                r,
                e,
                a,
                i
              ), mo(a, r), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function tn(e, t, a, i) {
      t.child = e === null ? KT(t, null, a, i) : Rh(
        t,
        e.child,
        a,
        i
      );
    }
    function ad(e, t, a, i, r) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var p = {};
        for (var b in i)
          b !== "ref" && (p[b] = i[b]);
      } else p = i;
      return oi(t), re(t), i = hi(
        e,
        t,
        a,
        p,
        f,
        r
      ), b = ra(), Ee(), e !== null && !Vn ? (xu(e, t, r), Bl(e, t, r)) : (gt && b && Ns(t), t.flags |= 1, tn(e, t, i, r), t.child);
    }
    function jl(e, t, a, i, r) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !yy(f) && f.defaultProps === void 0 && a.compare === null ? (a = uc(f), t.tag = 15, t.type = a, cd(t, f), uf(
          e,
          t,
          a,
          i,
          r
        )) : (e = ws(
          a.type,
          null,
          i,
          t,
          t.mode,
          r
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !hd(e, r)) {
        var p = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : qr, a(p, i) && e.ref === t.ref)
          return Bl(
            e,
            t,
            r
          );
      }
      return t.flags |= 1, e = Rl(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function uf(e, t, a, i, r) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (qr(f, i) && e.ref === t.ref && t.type === e.type)
          if (Vn = !1, t.pendingProps = i = f, hd(e, r))
            (e.flags & 131072) !== 0 && (Vn = !0);
          else
            return t.lanes = e.lanes, Bl(e, t, r);
      }
      return id(
        e,
        t,
        a,
        i,
        r
      );
    }
    function ld(e, t, a) {
      var i = t.pendingProps, r = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (r = t.child = e.child, f = 0; r !== null; )
              f = f | r.lanes | r.childLanes, r = r.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return ud(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Bs(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? oa(t, f) : Qr(t), vi(t);
        else
          return t.lanes = t.childLanes = 536870912, ud(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (Bs(t, f.cachePool), oa(t, f), hl(t), t.memoizedState = null) : (e !== null && Bs(t, null), Qr(t), hl(t));
      return tn(e, t, r, a), t.child;
    }
    function ud(e, t, a, i) {
      var r = Ry();
      return r = r === null ? null : {
        parent: Hn._currentValue,
        pool: r
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: r
      }, e !== null && Bs(t, null), Qr(t), vi(t), e !== null && An(e, t, i, !0), null;
    }
    function cf(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function id(e, t, a, i, r) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = ve(a) || "Unknown";
        o2[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), o2[f] = !0);
      }
      return t.mode & Sa && Qu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (cd(t, t.type), a.contextTypes && (f = ve(a) || "Unknown", f2[f] || (f2[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), oi(t), re(t), a = hi(
        e,
        t,
        a,
        i,
        void 0,
        r
      ), i = ra(), Ee(), e !== null && !Vn ? (xu(e, t, r), Bl(e, t, r)) : (gt && i && Ns(t), t.flags |= 1, tn(e, t, a, r), t.child);
    }
    function Gy(e, t, a, i, r, f) {
      return oi(t), re(t), Zc = -1, Tp = e !== null && e.type !== t.type, t.updateQueue = null, a = bo(
        t,
        i,
        a,
        r
      ), Zr(e, t), i = ra(), Ee(), e !== null && !Vn ? (xu(e, t, f), Bl(e, t, f)) : (gt && i && Ns(t), t.flags |= 1, tn(e, t, a, f), t.child);
    }
    function Vy(e, t, a, i, r) {
      switch (T(t)) {
        case !1:
          var f = t.stateNode, p = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, p, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var b = r & -r;
          if (t.lanes |= b, p = _t, p === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          b = Xt(b), af(
            b,
            p,
            t,
            xa(f, t)
          ), mo(t, b);
      }
      if (oi(t), t.stateNode === null) {
        if (p = ir, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Wa) && !u2.has(a) && (u2.add(a), b = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Kd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          ve(a) || "Component",
          b
        )), typeof f == "object" && f !== null && (p = Ht(f)), f = new a(i, p), t.mode & Sa) {
          Ae(!0);
          try {
            f = new a(i, p);
          } finally {
            Ae(!1);
          }
        }
        if (p = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = R1, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = WT, typeof a.getDerivedStateFromProps == "function" && p === null && (p = ve(a) || "Component", PT.has(p) || (PT.add(p), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          p,
          f.state === null ? "null" : "undefined",
          p
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var M = b = p = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? p = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (p = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? b = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (b = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? M = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (M = "UNSAFE_componentWillUpdate"), p !== null || b !== null || M !== null) {
            f = ve(a) || "Component";
            var R = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            e2.has(f) || (e2.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              R,
              p !== null ? `
  ` + p : "",
              b !== null ? `
  ` + b : "",
              M !== null ? `
  ` + M : ""
            ));
          }
        }
        f = t.stateNode, p = ve(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          p
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          p
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          p
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          p
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          p
        ), a.childContextTypes && !l2.has(a) && (l2.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          p
        )), a.contextTypes && !a2.has(a) && (a2.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          p
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          p
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          ve(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          p
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          p
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          p
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          p
        ), b = f.props !== i, f.props !== void 0 && b && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          p
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          p,
          p
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || IT.has(a) || (IT.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          ve(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          p
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          p
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          p
        ), (b = f.state) && (typeof b != "object" || ke(b)) && console.error("%s.state: must be set to an object or null", p), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          p
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, ca(t), p = a.contextType, f.context = typeof p == "object" && p !== null ? Ht(p) : ir, f.state === i && (p = ve(a) || "Component", t2.has(p) || (t2.add(p), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          p
        ))), t.mode & Sa && Qu.recordLegacyContextWarning(
          t,
          f
        ), Qu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, p = a.getDerivedStateFromProps, typeof p == "function" && (Gt(
          t,
          a,
          p,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (p = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), p !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          fe(t) || "Component"
        ), R1.enqueueReplaceState(
          f,
          f.state,
          null
        )), po(t, i, f, r), Ul(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Yt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var Q = t.memoizedProps;
        b = gi(a, Q), f.props = b;
        var F = f.context;
        M = a.contextType, p = ir, typeof M == "object" && M !== null && (p = Ht(M)), R = a.getDerivedStateFromProps, M = typeof R == "function" || typeof f.getSnapshotBeforeUpdate == "function", Q = t.pendingProps !== Q, M || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (Q || F !== p) && ed(
          t,
          f,
          i,
          p
        ), cr = !1;
        var V = t.memoizedState;
        f.state = V, po(t, i, f, r), Ul(), F = t.memoizedState, Q || V !== F || cr ? (typeof R == "function" && (Gt(
          t,
          a,
          R,
          i
        ), F = t.memoizedState), (b = cr || Is(
          t,
          a,
          b,
          i,
          V,
          F,
          p
        )) ? (M || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Yt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Yt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = F), f.props = i, f.state = F, f.context = p, f = b) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Yt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, fi(e, t), p = t.memoizedProps, M = gi(a, p), f.props = M, R = t.pendingProps, V = f.context, F = a.contextType, b = ir, typeof F == "object" && F !== null && (b = Ht(F)), Q = a.getDerivedStateFromProps, (F = typeof Q == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p !== R || V !== b) && ed(
          t,
          f,
          i,
          b
        ), cr = !1, V = t.memoizedState, f.state = V, po(t, i, f, r), Ul();
        var I = t.memoizedState;
        p !== R || V !== I || cr || e !== null && e.dependencies !== null && ci(e.dependencies) ? (typeof Q == "function" && (Gt(
          t,
          a,
          Q,
          i
        ), I = t.memoizedState), (M = cr || Is(
          t,
          a,
          M,
          i,
          V,
          I,
          b
        ) || e !== null && e.dependencies !== null && ci(e.dependencies)) ? (F || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, I, b), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          I,
          b
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || p === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = I), f.props = i, f.state = I, f.context = b, f = M) : (typeof f.componentDidUpdate != "function" || p === e.memoizedProps && V === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || p === e.memoizedProps && V === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (b = f, cf(e, t), p = (t.flags & 128) !== 0, b || p) {
        if (b = t.stateNode, Rr(t), p && typeof a.getDerivedStateFromError != "function")
          a = null, Ia = -1;
        else {
          if (re(t), a = NT(b), t.mode & Sa) {
            Ae(!0);
            try {
              NT(b);
            } finally {
              Ae(!1);
            }
          }
          Ee();
        }
        t.flags |= 1, e !== null && p ? (t.child = Rh(
          t,
          e.child,
          null,
          r
        ), t.child = Rh(
          t,
          null,
          a,
          r
        )) : tn(e, t, a, r), t.memoizedState = b.state, e = t.child;
      } else
        e = Bl(
          e,
          t,
          r
        );
      return r = t.stateNode, f && r.props !== i && (zh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        fe(t) || "a component"
      ), zh = !0), e;
    }
    function Xy(e, t, a, i) {
      return oc(), t.flags |= 256, tn(e, t, a, i), t.child;
    }
    function cd(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = ve(t) || "Unknown", s2[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), s2[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = ve(t) || "Unknown", r2[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), r2[t] = !0));
    }
    function of(e) {
      return { baseLanes: e, cachePool: C0() };
    }
    function od(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Tl), e;
    }
    function N0(e, t, a) {
      var i, r = t.pendingProps;
      v(t) && (t.flags |= 128);
      var f = !1, p = (t.flags & 128) !== 0;
      if ((i = p) || (i = e !== null && e.memoizedState === null ? !1 : (wn.current & xp) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (gt) {
          if (f ? Aa(t) : hl(t), gt) {
            var b = nn, M;
            if (!(M = !b)) {
              e: {
                var R = b;
                for (M = ji; R.nodeType !== 8; ) {
                  if (!M) {
                    M = null;
                    break e;
                  }
                  if (R = zn(R.nextSibling), R === null) {
                    M = null;
                    break e;
                  }
                }
                M = R;
              }
              M !== null ? (ul(), t.memoizedState = {
                dehydrated: M,
                treeContext: $f !== null ? { id: Gc, overflow: Vc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, R = Y(18, null, null, Yt), R.stateNode = M, R.return = t, t.child = R, _a = t, nn = null, M = !0) : M = !1, M = !M;
            }
            M && (vy(
              t,
              b
            ), Ol(t));
          }
          if (b = t.memoizedState, b !== null && (b = b.dehydrated, b !== null))
            return Wl(b) ? t.lanes = 32 : t.lanes = 536870912, null;
          Ra(t);
        }
        return b = r.children, r = r.fallback, f ? (hl(t), f = t.mode, b = rf(
          {
            mode: "hidden",
            children: b
          },
          f
        ), r = li(
          r,
          f,
          a,
          null
        ), b.return = t, r.return = t, b.sibling = r, t.child = b, f = t.child, f.memoizedState = of(a), f.childLanes = od(
          e,
          i,
          a
        ), t.memoizedState = C1, r) : (Aa(t), rd(
          t,
          b
        ));
      }
      var Q = e.memoizedState;
      if (Q !== null && (b = Q.dehydrated, b !== null)) {
        if (p)
          t.flags & 256 ? (Aa(t), t.flags &= -257, t = fd(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (hl(t), t.child = e.child, t.flags |= 128, t = null) : (hl(t), f = r.fallback, b = t.mode, r = rf(
            {
              mode: "visible",
              children: r.children
            },
            b
          ), f = li(
            f,
            b,
            a,
            null
          ), f.flags |= 2, r.return = t, f.return = t, r.sibling = f, t.child = r, Rh(
            t,
            e.child,
            null,
            a
          ), r = t.child, r.memoizedState = of(a), r.childLanes = od(
            e,
            i,
            a
          ), t.memoizedState = C1, t = f);
        else if (Aa(t), gt && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Wl(b)) {
          if (i = b.nextSibling && b.nextSibling.dataset, i) {
            M = i.dgst;
            var F = i.msg;
            R = i.stck;
            var V = i.cstck;
          }
          b = F, i = M, r = R, M = f = V, f = Error(b || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = r || "", f.digest = i, i = M === void 0 ? null : M, r = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && r1.set(
            f,
            r
          ), ho(r), t = fd(
            e,
            t,
            a
          );
        } else if (Vn || An(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Vn || i) {
          if (i = _t, i !== null && (r = a & -a, r = (r & 42) !== 0 ? 1 : $n(
            r
          ), r = (r & (i.suspendedLanes | a)) !== 0 ? 0 : r, r !== 0 && r !== Q.retryLane))
            throw Q.retryLane = r, ia(
              e,
              r
            ), Qt(
              i,
              e,
              r
            ), c2;
          b.data === Jc || Ed(), t = fd(
            e,
            t,
            a
          );
        } else
          b.data === Jc ? (t.flags |= 192, t.child = e.child, t = null) : (e = Q.treeContext, nn = zn(
            b.nextSibling
          ), _a = t, gt = !0, Jf = null, Xc = !1, iu = null, ji = !1, e !== null && (ul(), lu[uu++] = Gc, lu[uu++] = Vc, lu[uu++] = $f, Gc = e.id, Vc = e.overflow, $f = t), t = rd(
            t,
            r.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (hl(t), f = r.fallback, b = t.mode, M = e.child, R = M.sibling, r = Rl(
        M,
        {
          mode: "hidden",
          children: r.children
        }
      ), r.subtreeFlags = M.subtreeFlags & 65011712, R !== null ? f = Rl(
        R,
        f
      ) : (f = li(
        f,
        b,
        a,
        null
      ), f.flags |= 2), f.return = t, r.return = t, r.sibling = f, t.child = r, r = f, f = t.child, b = e.child.memoizedState, b === null ? b = of(a) : (M = b.cachePool, M !== null ? (R = Hn._currentValue, M = M.parent !== R ? { parent: R, pool: R } : M) : M = C0(), b = {
        baseLanes: b.baseLanes | a,
        cachePool: M
      }), f.memoizedState = b, f.childLanes = od(
        e,
        i,
        a
      ), t.memoizedState = C1, r) : (Aa(t), a = e.child, e = a.sibling, a = Rl(a, {
        mode: "visible",
        children: r.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function rd(e, t) {
      return t = rf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function rf(e, t) {
      return e = Y(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: f1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function fd(e, t, a) {
      return Rh(t, e.child, null, a), e = rd(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function sd(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Ey(
        e.return,
        t,
        a
      );
    }
    function Qy(e, t) {
      var a = ke(e);
      return e = !a && typeof ie(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function dd(e, t, a, i, r) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: r
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = r);
    }
    function Zy(e, t, a) {
      var i = t.pendingProps, r = i.revealOrder, f = i.tail;
      if (i = i.children, r !== void 0 && r !== "forwards" && r !== "backwards" && r !== "together" && !d2[r])
        if (d2[r] = !0, typeof r == "string")
          switch (r.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                r,
                r.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                r,
                r.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                r
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            r
          );
      f === void 0 || z1[f] || (f !== "collapsed" && f !== "hidden" ? (z1[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : r !== "forwards" && r !== "backwards" && (z1[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((r === "forwards" || r === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (ke(i)) {
          for (var p = 0; p < i.length; p++)
            if (!Qy(i[p], p)) break e;
        } else if (p = ie(i), typeof p == "function") {
          if (p = p.call(i))
            for (var b = p.next(), M = 0; !b.done; b = p.next()) {
              if (!Qy(b.value, M)) break e;
              M++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            r
          );
      if (tn(e, t, i, a), i = wn.current, (i & xp) !== 0)
        i = i & Oh | xp, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && sd(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              sd(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= Oh;
      }
      switch (Te(wn, i, t), r) {
        case "forwards":
          for (a = t.child, r = null; a !== null; )
            e = a.alternate, e !== null && Du(e) === null && (r = a), a = a.sibling;
          a = r, a === null ? (r = t.child, t.child = null) : (r = a.sibling, a.sibling = null), dd(
            t,
            !1,
            r,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, r = t.child, t.child = null; r !== null; ) {
            if (e = r.alternate, e !== null && Du(e) === null) {
              t.child = r;
              break;
            }
            e = r.sibling, r.sibling = a, a = r, r = e;
          }
          dd(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          dd(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Bl(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Ia = -1, sr |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (An(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = Rl(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = Rl(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function hd(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ci(e)));
    }
    function Qg(e, t, a) {
      switch (t.tag) {
        case 3:
          qe(
            t,
            t.stateNode.containerInfo
          ), ii(
            t,
            Hn,
            e.memoizedState.cache
          ), oc();
          break;
        case 27:
        case 5:
          K(t);
          break;
        case 4:
          qe(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          ii(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (Aa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? N0(
              e,
              t,
              a
            ) : (Aa(t), e = Bl(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          Aa(t);
          break;
        case 19:
          var r = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (An(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), r) {
            if (i)
              return Zy(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (r = t.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), Te(
            wn,
            wn.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, ld(e, t, a);
        case 24:
          ii(
            t,
            Hn,
            e.memoizedState.cache
          );
      }
      return Bl(e, t, a);
    }
    function yd(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = ws(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var r = i.child;
          if (r === null)
            throw Error("Expected parent to have a child.");
          for (; r.sibling !== t; )
            if (r = r.sibling, r === null)
              throw Error("Expected to find the previous sibling.");
          r.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Vn = !0;
        else {
          if (!hd(e, a) && (t.flags & 128) === 0)
            return Vn = !1, Qg(
              e,
              t,
              a
            );
          Vn = (e.flags & 131072) !== 0;
        }
      else
        Vn = !1, (i = gt) && (ul(), i = (t.flags & 1048576) !== 0), i && (i = t.index, ul(), O0(t, bv, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = rr(t.elementType), t.type = e, typeof e == "function")
            yy(e) ? (i = gi(
              e,
              i
            ), t.tag = 1, t.type = e = uc(e), t = Vy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, cd(t, e), t.type = e = uc(e), t = id(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (r = e.$$typeof, r === qu) {
                t.tag = 11, t.type = e = hy(e), t = ad(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (r === _f) {
                t.tag = 14, t = jl(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Ca && (t = " Did you wrap a component in React.lazy() more than once?"), e = ve(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return id(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, r = gi(
            i,
            t.pendingProps
          ), Vy(
            e,
            t,
            i,
            r,
            a
          );
        case 3:
          e: {
            if (qe(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            r = f.element, fi(e, t), po(t, i, null, a);
            var p = t.memoizedState;
            if (i = p.cache, ii(t, Hn, i), i !== f.cache && xy(
              t,
              [Hn],
              a,
              !0
            ), Ul(), i = p.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: p.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = Xy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== r) {
                r = xa(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), ho(r), t = Xy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (nn = zn(e.firstChild), _a = t, gt = !0, Jf = null, Xc = !1, iu = null, ji = !0, e = KT(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (oc(), i === r) {
                t = Bl(
                  e,
                  t,
                  a
                );
                break e;
              }
              tn(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return cf(e, t), e === null ? (e = Nu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : gt || (e = t.type, a = t.pendingProps, i = _e(
            Pl.current
          ), i = it(
            i
          ).createElement(e), i[Gn] = t, i[ga] = a, kt(i, e, a), yn(i), t.stateNode = i) : t.memoizedState = Nu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return K(t), e === null && gt && (i = _e(Pl.current), r = C(), i = t.stateNode = Cm(
            t.type,
            t.pendingProps,
            i,
            r,
            !1
          ), Xc || (r = Ct(
            i,
            t.type,
            t.pendingProps,
            r
          ), r !== null && (il(t, 0).serverProps = r)), _a = t, ji = !0, r = nn, Kl(t.type) ? (I1 = r, nn = zn(
            i.firstChild
          )) : nn = r), tn(
            e,
            t,
            t.pendingProps.children,
            a
          ), cf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && gt && (f = C(), i = As(
            t.type,
            f.ancestorInfo
          ), r = nn, (p = !r) || (p = Ai(
            r,
            t.type,
            t.pendingProps,
            ji
          ), p !== null ? (t.stateNode = p, Xc || (f = Ct(
            p,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (il(t, 0).serverProps = f)), _a = t, nn = zn(
            p.firstChild
          ), ji = !1, f = !0) : f = !1, p = !f), p && (i && vy(t, r), Ol(t))), K(t), r = t.type, f = t.pendingProps, p = e !== null ? e.memoizedProps : null, i = f.children, Jl(r, f) ? i = null : p !== null && Jl(r, p) && (t.flags |= 32), t.memoizedState !== null && (r = hi(
            e,
            t,
            Ga,
            null,
            null,
            a
          ), jp._currentValue = r), cf(e, t), tn(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && gt && (e = t.pendingProps, a = C(), i = a.ancestorInfo.current, e = i != null ? Hr(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = nn, (i = !a) || (i = Dn(
            a,
            t.pendingProps,
            ji
          ), i !== null ? (t.stateNode = i, _a = t, nn = null, i = !0) : i = !1, i = !i), i && (e && vy(t, a), Ol(t))), null;
        case 13:
          return N0(e, t, a);
        case 4:
          return qe(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Rh(
            t,
            null,
            i,
            a
          ) : tn(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return ad(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return tn(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return tn(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, tn(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, r = t.pendingProps, f = r.value, "value" in r || h2 || (h2 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), ii(t, i, f), tn(
            e,
            t,
            r.children,
            a
          ), t.child;
        case 9:
          return r = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), oi(t), r = Ht(r), re(t), i = x1(
            i,
            r,
            void 0
          ), Ee(), t.flags |= 1, tn(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return jl(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return uf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return Zy(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = rf(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = Rl(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return ld(e, t, a);
        case 24:
          return oi(t), i = Ht(Hn), e === null ? (r = Ry(), r === null && (r = _t, f = Vr(), r.pooledCache = f, rc(f), f !== null && (r.pooledCacheLanes |= a), r = f), t.memoizedState = {
            parent: i,
            cache: r
          }, ca(t), ii(t, Hn, r)) : ((e.lanes & a) !== 0 && (fi(e, t), po(t, null, null, a), Ul()), r = e.memoizedState, f = t.memoizedState, r.parent !== i ? (r = {
            parent: i,
            cache: i
          }, t.memoizedState = r, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r), ii(t, Hn, i)) : (i = f.cache, ii(t, Hn, i), i !== r.cache && xy(
            t,
            [Hn],
            a,
            !0
          ))), tn(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function sa(e) {
      e.flags |= 4;
    }
    function ff(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & su) !== rs)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Mf(t)) {
        if (t = fu.current, t !== null && ((ot & 4194048) === ot ? Li !== null : (ot & 62914560) !== ot && (ot & 536870912) === 0 || t !== Li))
          throw bp = p1, xT;
        e.flags |= 8192;
      }
    }
    function sf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? xr() : 536870912, e.lanes |= t, as |= t);
    }
    function bi(e, t) {
      if (!gt)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function At(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & ta) !== Yt) {
          for (var r = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, r += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = r;
        } else
          for (r = e.child; r !== null; )
            a |= r.lanes | r.childLanes, i |= r.subtreeFlags & 65011712, i |= r.flags & 65011712, r.return = e, r = r.sibling;
      else if ((e.mode & ta) !== Yt) {
        r = e.actualDuration, f = e.selfBaseDuration;
        for (var p = e.child; p !== null; )
          a |= p.lanes | p.childLanes, i |= p.subtreeFlags, i |= p.flags, r += p.actualDuration, f += p.treeBaseDuration, p = p.sibling;
        e.actualDuration = r, e.treeBaseDuration = f;
      } else
        for (r = e.child; r !== null; )
          a |= r.lanes | r.childLanes, i |= r.subtreeFlags, i |= r.flags, r.return = e, r = r.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function q0(e, t, a) {
      var i = t.pendingProps;
      switch (qs(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return At(t), null;
        case 1:
          return At(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Tu(Hn, t), et(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (cc(t) ? (Ty(), sa(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Sy())), At(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (sa(t), a !== null ? (At(t), ff(
            t,
            a
          )) : (At(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (sa(t), At(t), ff(
            t,
            a
          )) : (At(t), t.flags &= -16777217) : (e.memoizedProps !== i && sa(t), At(t), t.flags &= -16777217), null;
        case 27:
          oe(t), a = _e(Pl.current);
          var r = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && sa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return At(t), null;
            }
            e = C(), cc(t) ? gy(t) : (e = Cm(
              r,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, sa(t));
          }
          return At(t), null;
        case 5:
          if (oe(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && sa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return At(t), null;
            }
            if (r = C(), cc(t))
              gy(t);
            else {
              switch (e = _e(Pl.current), As(a, r.ancestorInfo), r = r.context, e = it(e), r) {
                case jh:
                  e = e.createElementNS(ur, a);
                  break;
                case kv:
                  e = e.createElementNS(
                    Qf,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        ur,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Qf,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || ju.call(
                        H2,
                        a
                      ) || (H2[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Gn] = t, e[ga] = i;
              e: for (r = t.child; r !== null; ) {
                if (r.tag === 5 || r.tag === 6)
                  e.appendChild(r.stateNode);
                else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                  r.child.return = r, r = r.child;
                  continue;
                }
                if (r === t) break e;
                for (; r.sibling === null; ) {
                  if (r.return === null || r.return === t)
                    break e;
                  r = r.return;
                }
                r.sibling.return = r.return, r = r.sibling;
              }
              t.stateNode = e;
              e: switch (kt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && sa(t);
            }
          }
          return At(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && sa(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = _e(Pl.current), a = C(), cc(t)) {
              e = t.stateNode, a = t.memoizedProps, r = !Xc, i = null;
              var f = _a;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    r && (r = Ld(
                      e,
                      a,
                      i
                    ), r !== null && (il(t, 0).serverProps = r));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, r && (r = Ld(
                      e,
                      a,
                      i
                    ), r !== null && (il(
                      t,
                      0
                    ).serverProps = r));
                }
              e[Gn] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Sm(e.nodeValue, a)), e || Ol(t);
            } else
              r = a.ancestorInfo.current, r != null && Hr(
                i,
                r.tag,
                a.ancestorInfo.implicitRootScope
              ), e = it(e).createTextNode(
                i
              ), e[Gn] = t, t.stateNode = e;
          }
          return At(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (r = cc(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!r)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (r = t.memoizedState, r = r !== null ? r.dehydrated : null, !r)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                r[Gn] = t, At(t), (t.mode & ta) !== Yt && i !== null && (r = t.child, r !== null && (t.treeBaseDuration -= r.treeBaseDuration));
              } else
                Ty(), oc(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, At(t), (t.mode & ta) !== Yt && i !== null && (r = t.child, r !== null && (t.treeBaseDuration -= r.treeBaseDuration));
              r = !1;
            } else
              r = Sy(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), r = !0;
            if (!r)
              return t.flags & 256 ? (Ra(t), t) : (Ra(t), null);
          }
          return Ra(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & ta) !== Yt && zl(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, r = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (r = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== r && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), sf(t, t.updateQueue), At(t), (t.mode & ta) !== Yt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return et(t), e === null && gm(
            t.stateNode.containerInfo
          ), At(t), null;
        case 10:
          return Tu(t.type, t), At(t), null;
        case 19:
          if (de(wn, t), r = t.memoizedState, r === null) return At(t), null;
          if (i = (t.flags & 128) !== 0, f = r.rendering, f === null)
            if (i) bi(r, !1);
            else {
              if (an !== $c || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Du(e), f !== null) {
                    for (t.flags |= 128, bi(r, !1), e = f.updateQueue, t.updateQueue = e, sf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      my(a, e), a = a.sibling;
                    return Te(
                      wn,
                      wn.current & Oh | xp,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              r.tail !== null && Il() > wv && (t.flags |= 128, i = !0, bi(r, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Du(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, sf(t, e), bi(r, !0), r.tail === null && r.tailMode === "hidden" && !f.alternate && !gt)
                  return At(t), null;
              } else
                2 * Il() - r.renderingStartTime > wv && a !== 536870912 && (t.flags |= 128, i = !0, bi(r, !1), t.lanes = 4194304);
            r.isBackwards ? (f.sibling = t.child, t.child = f) : (e = r.last, e !== null ? e.sibling = f : t.child = f, r.last = f);
          }
          return r.tail !== null ? (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Il(), e.sibling = null, a = wn.current, a = i ? a & Oh | xp : a & Oh, Te(wn, a, t), e) : (At(t), null);
        case 22:
        case 23:
          return Ra(t), fl(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (At(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : At(t), a = t.updateQueue, a !== null && sf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && de(Ff, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Tu(Hn, t), At(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Y0(e, t) {
      switch (qs(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & ta) !== Yt && zl(t), t) : null;
        case 3:
          return Tu(Hn, t), et(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return oe(t), null;
        case 13:
          if (Ra(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            oc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & ta) !== Yt && zl(t), t) : null;
        case 19:
          return de(wn, t), null;
        case 4:
          return et(t), null;
        case 10:
          return Tu(t.type, t), null;
        case 22:
        case 23:
          return Ra(t), fl(t), e !== null && de(Ff, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & ta) !== Yt && zl(t), t) : null;
        case 24:
          return Tu(Hn, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ky(e, t) {
      switch (qs(t), t.tag) {
        case 3:
          Tu(Hn, t), et(t);
          break;
        case 26:
        case 27:
        case 5:
          oe(t);
          break;
        case 4:
          et(t);
          break;
        case 13:
          Ra(t);
          break;
        case 19:
          de(wn, t);
          break;
        case 10:
          Tu(t.type, t);
          break;
        case 22:
        case 23:
          Ra(t), fl(t), e !== null && de(Ff, t);
          break;
        case 24:
          Tu(Hn, t);
      }
    }
    function yl(e) {
      return (e.mode & ta) !== Yt;
    }
    function $y(e, t) {
      yl(e) ? (ol(), gc(t, e), ja()) : gc(t, e);
    }
    function md(e, t, a) {
      yl(e) ? (ol(), bc(
        a,
        e,
        t
      ), ja()) : bc(
        a,
        e,
        t
      );
    }
    function gc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var r = i.next;
          a = r;
          do {
            if ((a.tag & e) === e && ((e & _n) !== cu ? Re !== null && typeof Re.markComponentPassiveEffectMountStarted == "function" && Re.markComponentPassiveEffectMountStarted(
              t
            ) : (e & na) !== cu && Re !== null && typeof Re.markComponentLayoutEffectMountStarted == "function" && Re.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & wa) !== cu && (qh = !0), i = ze(
              t,
              xA,
              a
            ), (e & wa) !== cu && (qh = !1), (e & _n) !== cu ? Re !== null && typeof Re.markComponentPassiveEffectMountStopped == "function" && Re.markComponentPassiveEffectMountStopped() : (e & na) !== cu && Re !== null && typeof Re.markComponentLayoutEffectMountStopped == "function" && Re.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & na) !== 0 ? "useLayoutEffect" : (a.tag & wa) !== 0 ? "useInsertionEffect" : "useEffect";
              var p = void 0;
              p = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ze(
                t,
                function(b, M) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    b,
                    M
                  );
                },
                f,
                p
              );
            }
            a = a.next;
          } while (a !== r);
        }
      } catch (b) {
        Le(t, t.return, b);
      }
    }
    function bc(e, t, a) {
      try {
        var i = t.updateQueue, r = i !== null ? i.lastEffect : null;
        if (r !== null) {
          var f = r.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var p = i.inst, b = p.destroy;
              b !== void 0 && (p.destroy = void 0, (e & _n) !== cu ? Re !== null && typeof Re.markComponentPassiveEffectUnmountStarted == "function" && Re.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & na) !== cu && Re !== null && typeof Re.markComponentLayoutEffectUnmountStarted == "function" && Re.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & wa) !== cu && (qh = !0), r = t, ze(
                r,
                MA,
                r,
                a,
                b
              ), (e & wa) !== cu && (qh = !1), (e & _n) !== cu ? Re !== null && typeof Re.markComponentPassiveEffectUnmountStopped == "function" && Re.markComponentPassiveEffectUnmountStopped() : (e & na) !== cu && Re !== null && typeof Re.markComponentLayoutEffectUnmountStopped == "function" && Re.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (M) {
        Le(t, t.return, M);
      }
    }
    function Jy(e, t) {
      yl(e) ? (ol(), gc(t, e), ja()) : gc(t, e);
    }
    function df(e, t, a) {
      yl(e) ? (ol(), bc(
        a,
        e,
        t
      ), ja()) : bc(
        a,
        e,
        t
      );
    }
    function Ky(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || zh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          fe(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          fe(e) || "instance"
        ));
        try {
          ze(
            e,
            U0,
            t,
            a
          );
        } catch (i) {
          Le(e, e.return, i);
        }
      }
    }
    function j0(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Zg(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || zh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        fe(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        fe(e) || "instance"
      ));
      try {
        var r = gi(
          e.type,
          a,
          e.elementType === e.type
        ), f = ze(
          e,
          j0,
          t,
          r,
          i
        );
        a = y2, f !== void 0 || a.has(e.type) || (a.add(e.type), ze(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            fe(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (p) {
        Le(e, e.return, p);
      }
    }
    function pd(e, t, a) {
      a.props = gi(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, yl(e) ? (ol(), ze(
        e,
        GT,
        e,
        t,
        a
      ), ja()) : ze(
        e,
        GT,
        e,
        t,
        a
      );
    }
    function B0(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (yl(e))
            try {
              ol(), e.refCleanup = t(a);
            } finally {
              ja();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            fe(e)
          ), t.current = a;
      }
    }
    function Co(e, t) {
      try {
        ze(e, B0, e);
      } catch (a) {
        Le(e, t, a);
      }
    }
    function ka(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (yl(e))
              try {
                ol(), ze(e, i);
              } finally {
                ja(e);
              }
            else ze(e, i);
          } catch (r) {
            Le(e, t, r);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (yl(e))
              try {
                ol(), ze(e, a, null);
              } finally {
                ja(e);
              }
            else ze(e, a, null);
          } catch (r) {
            Le(e, t, r);
          }
        else a.current = null;
    }
    function Wy(e, t, a, i) {
      var r = e.memoizedProps, f = r.id, p = r.onCommit;
      r = r.onRender, t = t === null ? "mount" : "update", Ev && (t = "nested-update"), typeof r == "function" && r(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof p == "function" && p(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function L0(e, t, a, i) {
      var r = e.memoizedProps;
      e = r.id, r = r.onPostCommit, t = t === null ? "mount" : "update", Ev && (t = "nested-update"), typeof r == "function" && r(
        e,
        t,
        i,
        a
      );
    }
    function G0(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ze(
          e,
          _u,
          i,
          t,
          a,
          e
        );
      } catch (r) {
        Le(e, e.return, r);
      }
    }
    function Fy(e, t, a) {
      try {
        ze(
          e,
          $t,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Le(e, e.return, i);
      }
    }
    function Py(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Kl(e.type) || e.tag === 4;
    }
    function Sc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Py(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Kl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function hf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Hu));
      else if (i !== 4 && (i === 27 && Kl(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (hf(e, t, a), e = e.sibling; e !== null; )
          hf(e, t, a), e = e.sibling;
    }
    function Tc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && Kl(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (Tc(e, t, a), e = e.sibling; e !== null; )
          Tc(e, t, a), e = e.sibling;
    }
    function V0(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Py(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = Sc(e), Tc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (wu(a), t.flags &= -33), t = Sc(e), Tc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = Sc(e), hf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Iy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ze(
          e,
          za,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Le(e, e.return, i);
      }
    }
    function vd(e, t) {
      if (e = e.containerInfo, W1 = Wv, e = E0(e), sy(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var r = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var p = 0, b = -1, M = -1, R = 0, Q = 0, F = e, V = null;
              t: for (; ; ) {
                for (var I; F !== a || r !== 0 && F.nodeType !== 3 || (b = p + r), F !== f || i !== 0 && F.nodeType !== 3 || (M = p + i), F.nodeType === 3 && (p += F.nodeValue.length), (I = F.firstChild) !== null; )
                  V = F, F = I;
                for (; ; ) {
                  if (F === e) break t;
                  if (V === a && ++R === r && (b = p), V === f && ++Q === i && (M = p), (I = F.nextSibling) !== null) break;
                  F = V, V = F.parentNode;
                }
                F = I;
              }
              a = b === -1 || M === -1 ? null : { start: b, end: M };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (F1 = {
        focusedElem: e,
        selectionRange: a
      }, Wv = !1, Xn = t; Xn !== null; )
        if (t = Xn, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Xn = e;
        else
          for (; Xn !== null; ) {
            switch (e = t = Xn, a = e.alternate, r = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (r & 1024) !== 0 && a !== null && Zg(e, a);
                break;
              case 3:
                if ((r & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Go(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Go(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((r & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Xn = e;
              break;
            }
            Xn = t.return;
          }
    }
    function em(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ll(e, a), i & 4 && $y(a, na | ou);
          break;
        case 1:
          if (Ll(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || zh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                fe(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                fe(a) || "instance"
              )), yl(a) ? (ol(), ze(
                a,
                M1,
                a,
                e
              ), ja()) : ze(
                a,
                M1,
                a,
                e
              );
            else {
              var r = gi(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || zh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                fe(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                fe(a) || "instance"
              )), yl(a) ? (ol(), ze(
                a,
                jT,
                a,
                e,
                r,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), ja()) : ze(
                a,
                jT,
                a,
                e,
                r,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && Ky(a), i & 512 && Co(a, a.return);
          break;
        case 3:
          if (t = cl(), Ll(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (r = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  r = a.child.stateNode;
                  break;
                case 1:
                  r = a.child.stateNode;
              }
            try {
              ze(
                a,
                U0,
                i,
                r
              );
            } catch (p) {
              Le(a, a.return, p);
            }
          }
          e.effectDuration += ri(t);
          break;
        case 27:
          t === null && i & 4 && Iy(a);
        case 26:
        case 5:
          Ll(e, a), t === null && i & 4 && G0(a), i & 512 && Co(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = cl(), Ll(e, a), e = a.stateNode, e.effectDuration += fc(i);
            try {
              ze(
                a,
                Wy,
                a,
                t,
                Tv,
                e.effectDuration
              );
            } catch (p) {
              Le(a, a.return, p);
            }
          } else Ll(e, a);
          break;
        case 13:
          Ll(e, a), i & 4 && Uo(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Tf.bind(
            null,
            a
          ), Vo(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || kc, !i) {
            t = t !== null && t.memoizedState !== null || sn, r = kc;
            var f = sn;
            kc = i, (sn = t) && !f ? Gl(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Ll(e, a), kc = r, sn = f;
          }
          break;
        case 30:
          break;
        default:
          Ll(e, a);
      }
    }
    function tm(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, tm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && lo(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function zu(e, t, a) {
      for (a = a.child; a !== null; )
        Ec(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function Ec(e, t, a) {
      if (Cn && typeof Cn.onCommitFiberUnmount == "function")
        try {
          Cn.onCommitFiberUnmount(Hi, a);
        } catch (f) {
          va || (va = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          sn || ka(a, t), zu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          sn || ka(a, t);
          var i = En, r = el;
          Kl(a.type) && (En = a.stateNode, el = !1), zu(
            e,
            t,
            a
          ), ze(
            a,
            Qo,
            a.stateNode
          ), En = i, el = r;
          break;
        case 5:
          sn || ka(a, t);
        case 6:
          if (i = En, r = el, En = null, zu(
            e,
            t,
            a
          ), En = i, el = r, En !== null)
            if (el)
              try {
                ze(
                  a,
                  Bo,
                  En,
                  a.stateNode
                );
              } catch (f) {
                Le(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                ze(
                  a,
                  Ka,
                  En,
                  a.stateNode
                );
              } catch (f) {
                Le(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          En !== null && (el ? (e = En, Lo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Nc(e)) : Lo(En, a.stateNode));
          break;
        case 4:
          i = En, r = el, En = a.stateNode.containerInfo, el = !0, zu(
            e,
            t,
            a
          ), En = i, el = r;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          sn || bc(
            wa,
            a,
            t
          ), sn || md(
            a,
            t,
            na
          ), zu(
            e,
            t,
            a
          );
          break;
        case 1:
          sn || (ka(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && pd(
            a,
            t,
            i
          )), zu(
            e,
            t,
            a
          );
          break;
        case 21:
          zu(
            e,
            t,
            a
          );
          break;
        case 22:
          sn = (i = sn) || a.memoizedState !== null, zu(
            e,
            t,
            a
          ), sn = i;
          break;
        default:
          zu(
            e,
            t,
            a
          );
      }
    }
    function Uo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ze(
            t,
            Da,
            e
          );
        } catch (a) {
          Le(t, t.return, a);
        }
    }
    function gd(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new m2()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new m2()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function xc(e, t) {
      var a = gd(e);
      t.forEach(function(i) {
        var r = xi.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Kt)
            if (Ch !== null && Uh !== null)
              Yo(Uh, Ch);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(r, r);
        }
      });
    }
    function jn(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var r = e, f = t, p = a[i], b = f;
          e: for (; b !== null; ) {
            switch (b.tag) {
              case 27:
                if (Kl(b.type)) {
                  En = b.stateNode, el = !1;
                  break e;
                }
                break;
              case 5:
                En = b.stateNode, el = !1;
                break e;
              case 3:
              case 4:
                En = b.stateNode.containerInfo, el = !0;
                break e;
            }
            b = b.return;
          }
          if (En === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Ec(r, f, p), En = null, el = !1, r = p, f = r.alternate, f !== null && (f.return = null), r.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          nm(t, e), t = t.sibling;
    }
    function nm(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jn(t, e), da(e), i & 4 && (bc(
            wa | ou,
            e,
            e.return
          ), gc(wa | ou, e), md(
            e,
            e.return,
            na | ou
          ));
          break;
        case 1:
          jn(t, e), da(e), i & 512 && (sn || a === null || ka(a, a.return)), i & 64 && kc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var r = ku;
          if (jn(t, e), da(e), i & 512 && (sn || a === null || ka(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = r.ownerDocument || r;
                    t: switch (i) {
                      case "title":
                        r = t.getElementsByTagName("title")[0], (!r || r[tr] || r[Gn] || r.namespaceURI === ur || r.hasAttribute("itemprop")) && (r = t.createElement(i), t.head.insertBefore(
                          r,
                          t.querySelector("head > title")
                        )), kt(r, i, a), r[Gn] = e, yn(r), i = r;
                        break e;
                      case "link":
                        var f = wm(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var p = 0; p < f.length; p++)
                            if (r = f[p], r.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && r.getAttribute("rel") === (a.rel == null ? null : a.rel) && r.getAttribute("title") === (a.title == null ? null : a.title) && r.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(p, 1);
                              break t;
                            }
                        }
                        r = t.createElement(i), kt(r, i, a), t.head.appendChild(r);
                        break;
                      case "meta":
                        if (f = wm(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (p = 0; p < f.length; p++)
                            if (r = f[p], le(
                              a.content,
                              "content"
                            ), r.getAttribute("content") === (a.content == null ? null : "" + a.content) && r.getAttribute("name") === (a.name == null ? null : a.name) && r.getAttribute("property") === (a.property == null ? null : a.property) && r.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && r.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(p, 1);
                              break t;
                            }
                        }
                        r = t.createElement(i), kt(r, i, a), t.head.appendChild(r);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    r[Gn] = e, yn(r), i = r;
                  }
                  e.stateNode = i;
                } else
                  Nm(
                    r,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Gd(
                  r,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? Nm(
                r,
                e.type,
                e.stateNode
              ) : Gd(
                r,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Fy(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          jn(t, e), da(e), i & 512 && (sn || a === null || ka(a, a.return)), a !== null && i & 4 && Fy(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (jn(t, e), da(e), i & 512 && (sn || a === null || ka(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              ze(e, wu, t);
            } catch (Q) {
              Le(e, e.return, Q);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Fy(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (U1 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (jn(t, e), da(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              ze(
                e,
                Uc,
                t,
                a,
                i
              );
            } catch (Q) {
              Le(e, e.return, Q);
            }
          }
          break;
        case 3:
          if (r = cl(), $v = null, f = ku, ku = xf(t.containerInfo), jn(t, e), ku = f, da(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              ze(
                e,
                zm,
                t.containerInfo
              );
            } catch (Q) {
              Le(e, e.return, Q);
            }
          U1 && (U1 = !1, Mc(e)), t.effectDuration += ri(r);
          break;
        case 4:
          i = ku, ku = xf(
            e.stateNode.containerInfo
          ), jn(t, e), da(e), ku = i;
          break;
        case 12:
          i = cl(), jn(t, e), da(e), e.stateNode.effectDuration += fc(i);
          break;
        case 13:
          jn(t, e), da(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Y1 = Il()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, xc(e, i)));
          break;
        case 22:
          r = e.memoizedState !== null;
          var b = a !== null && a.memoizedState !== null, M = kc, R = sn;
          if (kc = M || r, sn = R || b, jn(t, e), sn = R, kc = M, da(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = r ? t._visibility & -2 : t._visibility | f1, r && (a === null || b || kc || sn || Bn(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  b = a = t;
                  try {
                    f = b.stateNode, r ? ze(b, ma, f) : ze(
                      b,
                      Om,
                      b.stateNode,
                      b.memoizedProps
                    );
                  } catch (Q) {
                    Le(b, b.return, Q);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  b = t;
                  try {
                    p = b.stateNode, r ? ze(b, Rm, p) : ze(
                      b,
                      jd,
                      p,
                      b.memoizedProps
                    );
                  } catch (Q) {
                    Le(b, b.return, Q);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, xc(e, a))));
          break;
        case 19:
          jn(t, e), da(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, xc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          jn(t, e), da(e);
      }
    }
    function da(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ze(e, V0, e);
        } catch (a) {
          Le(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Mc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          Mc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Ll(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          em(e, t.alternate, t), t = t.sibling;
    }
    function Oa(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          md(
            e,
            e.return,
            na
          ), Bn(e);
          break;
        case 1:
          ka(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && pd(
            e,
            e.return,
            t
          ), Bn(e);
          break;
        case 27:
          ze(
            e,
            Qo,
            e.stateNode
          );
        case 26:
        case 5:
          ka(e, e.return), Bn(e);
          break;
        case 22:
          e.memoizedState === null && Bn(e);
          break;
        case 30:
          Bn(e);
          break;
        default:
          Bn(e);
      }
    }
    function Bn(e) {
      for (e = e.child; e !== null; )
        Oa(e), e = e.sibling;
    }
    function Cu(e, t, a, i) {
      var r = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Gl(
            e,
            a,
            i
          ), $y(a, na);
          break;
        case 1:
          if (Gl(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ze(
            a,
            M1,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ze(
                a,
                vo,
                t,
                e
              );
            } catch (f) {
              Le(a, a.return, f);
            }
          }
          i && r & 64 && Ky(a), Co(a, a.return);
          break;
        case 27:
          Iy(a);
        case 26:
        case 5:
          Gl(
            e,
            a,
            i
          ), i && t === null && r & 4 && G0(a), Co(a, a.return);
          break;
        case 12:
          if (i && r & 4) {
            r = cl(), Gl(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += fc(r);
            try {
              ze(
                a,
                Wy,
                a,
                t,
                Tv,
                i.effectDuration
              );
            } catch (f) {
              Le(a, a.return, f);
            }
          } else
            Gl(
              e,
              a,
              i
            );
          break;
        case 13:
          Gl(
            e,
            a,
            i
          ), i && r & 4 && Uo(e, a);
          break;
        case 22:
          a.memoizedState === null && Gl(
            e,
            a,
            i
          ), Co(a, a.return);
          break;
        case 30:
          break;
        default:
          Gl(
            e,
            a,
            i
          );
      }
    }
    function Gl(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Cu(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Vl(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && rc(e), a != null && Dl(a));
    }
    function ml(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (rc(t), e != null && Dl(e));
    }
    function Rt(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          yf(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function yf(e, t, a, i) {
      var r = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Rt(
            e,
            t,
            a,
            i
          ), r & 2048 && Jy(t, _n | ou);
          break;
        case 1:
          Rt(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = cl();
          Rt(
            e,
            t,
            a,
            i
          ), r & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (rc(t), a != null && Dl(a))), e.passiveEffectDuration += ri(f);
          break;
        case 12:
          if (r & 2048) {
            r = cl(), Rt(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += fc(r);
            try {
              ze(
                t,
                L0,
                t,
                t.alternate,
                Tv,
                e.passiveEffectDuration
              );
            } catch (b) {
              Le(t, t.return, b);
            }
          } else
            Rt(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          Rt(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var p = t.alternate;
          t.memoizedState !== null ? f._visibility & kf ? Rt(
            e,
            t,
            a,
            i
          ) : Ho(
            e,
            t
          ) : f._visibility & kf ? Rt(
            e,
            t,
            a,
            i
          ) : (f._visibility |= kf, Si(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), r & 2048 && Vl(p, t);
          break;
        case 24:
          Rt(
            e,
            t,
            a,
            i
          ), r & 2048 && ml(t.alternate, t);
          break;
        default:
          Rt(
            e,
            t,
            a,
            i
          );
      }
    }
    function Si(e, t, a, i, r) {
      for (r = r && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        bd(
          e,
          t,
          a,
          i,
          r
        ), t = t.sibling;
    }
    function bd(e, t, a, i, r) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Si(
            e,
            t,
            a,
            i,
            r
          ), Jy(t, _n);
          break;
        case 23:
          break;
        case 22:
          var p = t.stateNode;
          t.memoizedState !== null ? p._visibility & kf ? Si(
            e,
            t,
            a,
            i,
            r
          ) : Ho(
            e,
            t
          ) : (p._visibility |= kf, Si(
            e,
            t,
            a,
            i,
            r
          )), r && f & 2048 && Vl(
            t.alternate,
            t
          );
          break;
        case 24:
          Si(
            e,
            t,
            a,
            i,
            r
          ), r && f & 2048 && ml(t.alternate, t);
          break;
        default:
          Si(
            e,
            t,
            a,
            i,
            r
          );
      }
    }
    function Ho(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, r = i.flags;
          switch (i.tag) {
            case 22:
              Ho(
                a,
                i
              ), r & 2048 && Vl(
                i.alternate,
                i
              );
              break;
            case 24:
              Ho(
                a,
                i
              ), r & 2048 && ml(
                i.alternate,
                i
              );
              break;
            default:
              Ho(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function Ac(e) {
      if (e.subtreeFlags & Mp)
        for (e = e.child; e !== null; )
          Ti(e), e = e.sibling;
    }
    function Ti(e) {
      switch (e.tag) {
        case 26:
          Ac(e), e.flags & Mp && e.memoizedState !== null && I0(
            ku,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          Ac(e);
          break;
        case 3:
        case 4:
          var t = ku;
          ku = xf(
            e.stateNode.containerInfo
          ), Ac(e), ku = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Mp, Mp = 16777216, Ac(e), Mp = t) : Ac(e));
          break;
        default:
          Ac(e);
      }
    }
    function mf(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function _o(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Xn = i, lm(
              i,
              e
            );
          }
        mf(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          am(e), e = e.sibling;
    }
    function am(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          _o(e), e.flags & 2048 && df(
            e,
            e.return,
            _n | ou
          );
          break;
        case 3:
          var t = cl();
          _o(e), e.stateNode.passiveEffectDuration += ri(t);
          break;
        case 12:
          t = cl(), _o(e), e.stateNode.passiveEffectDuration += fc(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & kf && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, pf(e)) : _o(e);
          break;
        default:
          _o(e);
      }
    }
    function pf(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Xn = i, lm(
              i,
              e
            );
          }
        mf(e);
      }
      for (e = e.child; e !== null; )
        vf(e), e = e.sibling;
    }
    function vf(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          df(
            e,
            e.return,
            _n
          ), pf(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & kf && (t._visibility &= -3, pf(e));
          break;
        default:
          pf(e);
      }
    }
    function lm(e, t) {
      for (; Xn !== null; ) {
        var a = Xn, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            df(
              i,
              t,
              _n
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && rc(i));
            break;
          case 24:
            Dl(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Xn = i;
        else
          e: for (a = e; Xn !== null; ) {
            i = Xn;
            var r = i.sibling, f = i.return;
            if (tm(i), i === a) {
              Xn = null;
              break e;
            }
            if (r !== null) {
              r.return = f, Xn = r;
              break e;
            }
            Xn = f;
          }
      }
    }
    function um() {
      RA.forEach(function(e) {
        return e();
      });
    }
    function im() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || J.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ha(e) {
      if ((Mt & Na) !== bl && ot !== 0)
        return ot & -ot;
      var t = J.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Wf, e !== 0 ? e : mm()) : c0();
    }
    function X0() {
      Tl === 0 && (Tl = (ot & 536870912) === 0 || gt ? Wh() : 536870912);
      var e = fu.current;
      return e !== null && (e.flags |= 32), Tl;
    }
    function Qt(e, t, a) {
      if (qh && console.error("useInsertionEffect must not schedule updates."), V1 && (Nv = !0), (e === _t && (Ot === ts || Ot === ns) || e.cancelPendingCommit !== null) && (Oc(e, 0), Uu(
        e,
        ot,
        Tl,
        !1
      )), no(e, a), (Mt & Na) !== 0 && e === _t) {
        if (ba)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = ct && fe(ct) || "Unknown", A2.has(e) || (A2.add(e), t = fe(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              M2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), M2 = !0);
          }
      } else
        Kt && yu(e, t, a), $0(t), e === _t && ((Mt & Na) === bl && (dr |= a), an === es && Uu(
          e,
          ot,
          Tl,
          !1
        )), $a(e);
    }
    function rn(e, t, a) {
      if ((Mt & (Na | $u)) !== bl)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Ku(e, t), r = i ? om(e, t) : xd(e, t, !0), f = i;
      do {
        if (r === $c) {
          wh && !i && Uu(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !Q0(a)) {
            r = xd(e, t, !1), f = !1;
            continue;
          }
          if (r === Hh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var p = 0;
            else
              p = e.pendingLanes & -536870913, p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
            if (p !== 0) {
              t = p;
              e: {
                r = e;
                var b = p;
                p = Cp;
                var M = r.current.memoizedState.isDehydrated;
                if (M && (Oc(
                  r,
                  b
                ).flags |= 256), b = xd(
                  r,
                  b,
                  !1
                ), b !== Hh) {
                  if (N1 && !M) {
                    r.errorRecoveryDisabledLanes |= f, dr |= f, r = es;
                    break e;
                  }
                  r = qa, qa = p, r !== null && (qa === null ? qa = r : qa.push.apply(
                    qa,
                    r
                  ));
                }
                r = b;
              }
              if (f = !1, r !== Hh) continue;
            }
          }
          if (r === Rp) {
            Oc(e, 0), Uu(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, r) {
              case $c:
              case Rp:
                throw Error("Root did not complete. This is a bug in React.");
              case es:
                if ((t & 4194048) !== t) break;
              case Hv:
                Uu(
                  i,
                  t,
                  Tl,
                  !fr
                );
                break e;
              case Hh:
                qa = null;
                break;
              case H1:
              case p2:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (J.actQueue !== null)
              Dd(
                i,
                a,
                t,
                qa,
                Up,
                _v,
                Tl,
                dr,
                as
              );
            else {
              if ((t & 62914560) === t && (f = Y1 + g2 - Il(), 10 < f)) {
                if (Uu(
                  i,
                  t,
                  Tl,
                  !fr
                ), Pt(i, 0, !0) !== 0) break e;
                i.timeoutHandle = _2(
                  gn.bind(
                    null,
                    i,
                    a,
                    qa,
                    Up,
                    _v,
                    t,
                    Tl,
                    dr,
                    as,
                    fr,
                    r,
                    CA,
                    ST,
                    0
                  ),
                  f
                );
                break e;
              }
              gn(
                i,
                a,
                qa,
                Up,
                _v,
                t,
                Tl,
                dr,
                as,
                fr,
                r,
                DA,
                ST,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      $a(e);
    }
    function gn(e, t, a, i, r, f, p, b, M, R, Q, F, V, I) {
      if (e.timeoutHandle = os, F = t.subtreeFlags, (F & 8192 || (F & 16785408) === 16785408) && (Yp = { stylesheets: null, count: 0, unsuspend: P0 }, Ti(t), F = ev(), F !== null)) {
        e.cancelPendingCommit = F(
          Dd.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            r,
            p,
            b,
            M,
            Q,
            zA,
            V,
            I
          )
        ), Uu(
          e,
          f,
          p,
          !R
        );
        return;
      }
      Dd(
        e,
        t,
        f,
        a,
        i,
        r,
        p,
        b,
        M
      );
    }
    function Q0(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var r = a[i], f = r.getSnapshot;
            r = r.value;
            try {
              if (!Ha(f(), r)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function Uu(e, t, a, i) {
      t &= ~q1, t &= ~dr, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var r = t; 0 < r; ) {
        var f = 31 - Ln(r), p = 1 << f;
        i[f] = -1, r &= ~p;
      }
      a !== 0 && i0(e, a, t);
    }
    function Rc() {
      return (Mt & (Na | $u)) === bl ? (Dc(0), !1) : !0;
    }
    function Sd() {
      if (ct !== null) {
        if (Ot === tl)
          var e = ct.return;
        else
          e = ct, Ys(), sl(e), Ah = null, Ep = 0, e = ct;
        for (; e !== null; )
          ky(e.alternate, e), e = e.return;
        ct = null;
      }
    }
    function Oc(e, t) {
      var a = e.timeoutHandle;
      a !== os && (e.timeoutHandle = os, XA(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Sd(), _t = e, ct = a = Rl(e.current, null), ot = t, Ot = tl, Sl = null, fr = !1, wh = Ku(e, t), N1 = !1, an = $c, as = Tl = q1 = dr = sr = 0, qa = Cp = null, _v = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var r = 31 - Ln(i), f = 1 << r;
          t |= e[r], i &= ~f;
        }
      return Gi = t, Yr(), t = gT(), 1e3 < t - vT && (J.recentlyCreatedOwnerStacks = 0, vT = t), Qu.discardPendingWarnings(), a;
    }
    function gf(e, t) {
      $e = null, J.H = Cv, J.getCurrentStack = null, ba = !1, Ua = null, t === gp || t === Av ? (t = zy(), Ot = Dp) : t === xT ? (t = zy(), Ot = v2) : Ot = t === c2 ? w1 : t !== null && typeof t == "object" && typeof t.then == "function" ? _h : Op, Sl = t;
      var a = ct;
      if (a === null)
        an = Rp, zo(
          e,
          xa(t, e.current)
        );
      else
        switch (a.mode & ta && Eu(a), Ee(), Ot) {
          case Op:
            Re !== null && typeof Re.markComponentErrored == "function" && Re.markComponentErrored(
              a,
              t,
              ot
            );
            break;
          case ts:
          case ns:
          case Dp:
          case _h:
          case zp:
            Re !== null && typeof Re.markComponentSuspended == "function" && Re.markComponentSuspended(
              a,
              t,
              ot
            );
        }
    }
    function Td() {
      var e = J.H;
      return J.H = Cv, e === null ? Cv : e;
    }
    function cm() {
      var e = J.A;
      return J.A = AA, e;
    }
    function Ed() {
      an = es, fr || (ot & 4194048) !== ot && fu.current !== null || (wh = !0), (sr & 134217727) === 0 && (dr & 134217727) === 0 || _t === null || Uu(
        _t,
        ot,
        Tl,
        !1
      );
    }
    function xd(e, t, a) {
      var i = Mt;
      Mt |= Na;
      var r = Td(), f = cm();
      if (_t !== e || ot !== t) {
        if (Kt) {
          var p = e.memoizedUpdaters;
          0 < p.size && (Yo(e, ot), p.clear()), ua(e, t);
        }
        Up = null, Oc(e, t);
      }
      Ye(t), t = !1, p = an;
      e: do
        try {
          if (Ot !== tl && ct !== null) {
            var b = ct, M = Sl;
            switch (Ot) {
              case w1:
                Sd(), p = Hv;
                break e;
              case Dp:
              case ts:
              case ns:
              case _h:
                fu.current === null && (t = !0);
                var R = Ot;
                if (Ot = tl, Sl = null, Ei(e, b, M, R), a && wh) {
                  p = $c;
                  break e;
                }
                break;
              default:
                R = Ot, Ot = tl, Sl = null, Ei(e, b, M, R);
            }
          }
          Md(), p = an;
          break;
        } catch (Q) {
          gf(e, Q);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Ys(), Mt = i, J.H = r, J.A = f, L(), ct === null && (_t = null, ot = 0, Yr()), p;
    }
    function Md() {
      for (; ct !== null; ) fm(ct);
    }
    function om(e, t) {
      var a = Mt;
      Mt |= Na;
      var i = Td(), r = cm();
      if (_t !== e || ot !== t) {
        if (Kt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Yo(e, ot), f.clear()), ua(e, t);
        }
        Up = null, wv = Il() + b2, Oc(e, t);
      } else
        wh = Ku(
          e,
          t
        );
      Ye(t);
      e: do
        try {
          if (Ot !== tl && ct !== null)
            t: switch (t = ct, f = Sl, Ot) {
              case Op:
                Ot = tl, Sl = null, Ei(
                  e,
                  t,
                  f,
                  Op
                );
                break;
              case ts:
              case ns:
                if (Dy(f)) {
                  Ot = tl, Sl = null, Ad(t);
                  break;
                }
                t = function() {
                  Ot !== ts && Ot !== ns || _t !== e || (Ot = zp), $a(e);
                }, f.then(t, t);
                break e;
              case Dp:
                Ot = zp;
                break e;
              case v2:
                Ot = _1;
                break e;
              case zp:
                Dy(f) ? (Ot = tl, Sl = null, Ad(t)) : (Ot = tl, Sl = null, Ei(
                  e,
                  t,
                  f,
                  zp
                ));
                break;
              case _1:
                var p = null;
                switch (ct.tag) {
                  case 26:
                    p = ct.memoizedState;
                  case 5:
                  case 27:
                    var b = ct;
                    if (!p || Mf(p)) {
                      Ot = tl, Sl = null;
                      var M = b.sibling;
                      if (M !== null) ct = M;
                      else {
                        var R = b.return;
                        R !== null ? (ct = R, bf(R)) : ct = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Ot = tl, Sl = null, Ei(
                  e,
                  t,
                  f,
                  _1
                );
                break;
              case _h:
                Ot = tl, Sl = null, Ei(
                  e,
                  t,
                  f,
                  _h
                );
                break;
              case w1:
                Sd(), an = Hv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          J.actQueue !== null ? Md() : rm();
          break;
        } catch (Q) {
          gf(e, Q);
        }
      while (!0);
      return Ys(), J.H = i, J.A = r, Mt = a, ct !== null ? (Re !== null && typeof Re.markRenderYielded == "function" && Re.markRenderYielded(), $c) : (L(), _t = null, ot = 0, Yr(), an);
    }
    function rm() {
      for (; ct !== null && !cv(); )
        fm(ct);
    }
    function fm(e) {
      var t = e.alternate;
      (e.mode & ta) !== Yt ? (js(e), t = ze(
        e,
        yd,
        t,
        e,
        Gi
      ), Eu(e)) : t = ze(
        e,
        yd,
        t,
        e,
        Gi
      ), e.memoizedProps = e.pendingProps, t === null ? bf(e) : ct = t;
    }
    function Ad(e) {
      var t = ze(e, Rd, e);
      e.memoizedProps = e.pendingProps, t === null ? bf(e) : ct = t;
    }
    function Rd(e) {
      var t = e.alternate, a = (e.mode & ta) !== Yt;
      switch (a && js(e), e.tag) {
        case 15:
        case 0:
          t = Gy(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            ot
          );
          break;
        case 11:
          t = Gy(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            ot
          );
          break;
        case 5:
          sl(e);
        default:
          ky(t, e), e = ct = my(e, Gi), t = yd(t, e, Gi);
      }
      return a && Eu(e), t;
    }
    function Ei(e, t, a, i) {
      Ys(), sl(t), Ah = null, Ep = 0;
      var r = t.return;
      try {
        if (lf(
          e,
          r,
          t,
          a,
          ot
        )) {
          an = Rp, zo(
            e,
            xa(a, e.current)
          ), ct = null;
          return;
        }
      } catch (f) {
        if (r !== null) throw ct = r, f;
        an = Rp, zo(
          e,
          xa(a, e.current)
        ), ct = null;
        return;
      }
      t.flags & 32768 ? (gt || i === Op ? e = !0 : wh || (ot & 536870912) !== 0 ? e = !1 : (fr = e = !0, (i === ts || i === ns || i === Dp || i === _h) && (i = fu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Od(t, e)) : bf(t);
    }
    function bf(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Od(
            t,
            fr
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, js(t), a = ze(
          t,
          q0,
          a,
          t,
          Gi
        ), (t.mode & ta) !== Yt && sc(t), a !== null) {
          ct = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          ct = t;
          return;
        }
        ct = t = e;
      } while (t !== null);
      an === $c && (an = p2);
    }
    function Od(e, t) {
      do {
        var a = Y0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, ct = a;
          return;
        }
        if ((e.mode & ta) !== Yt) {
          sc(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          ct = e;
          return;
        }
        ct = e = a;
      } while (e !== null);
      an = Hv, ct = null;
    }
    function Dd(e, t, a, i, r, f, p, b, M) {
      e.cancelPendingCommit = null;
      do
        wo();
      while (aa !== ls);
      if (Qu.flushLegacyContextWarning(), Qu.flushPendingUnsafeLifecycleWarnings(), (Mt & (Na | $u)) !== bl)
        throw Error("Should not already be working.");
      if (Re !== null && typeof Re.markCommitStarted == "function" && Re.markCommitStarted(a), t === null) we();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= s1, Ng(
          e,
          a,
          f,
          p,
          b,
          M
        ), e === _t && (ct = _t = null, ot = 0), Nh = t, yr = e, mr = a, B1 = f, L1 = r, x2 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ym(Po, function() {
          return Sf(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Tv = Sh(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = J.T, J.T = null, r = Qe.p, Qe.p = Un, p = Mt, Mt |= $u;
          try {
            vd(e, t, a);
          } finally {
            Mt = p, Qe.p = r, J.T = i;
          }
        }
        aa = S2, Xl(), zd(), Z0();
      }
    }
    function Xl() {
      if (aa === S2) {
        aa = ls;
        var e = yr, t = Nh, a = mr, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = J.T, J.T = null;
          var r = Qe.p;
          Qe.p = Un;
          var f = Mt;
          Mt |= $u;
          try {
            Ch = a, Uh = e, nm(t, e), Uh = Ch = null, a = F1;
            var p = E0(e.containerInfo), b = a.focusedElem, M = a.selectionRange;
            if (p !== b && b && b.ownerDocument && T0(
              b.ownerDocument.documentElement,
              b
            )) {
              if (M !== null && sy(b)) {
                var R = M.start, Q = M.end;
                if (Q === void 0 && (Q = R), "selectionStart" in b)
                  b.selectionStart = R, b.selectionEnd = Math.min(
                    Q,
                    b.value.length
                  );
                else {
                  var F = b.ownerDocument || document, V = F && F.defaultView || window;
                  if (V.getSelection) {
                    var I = V.getSelection(), Ce = b.textContent.length, Ze = Math.min(
                      M.start,
                      Ce
                    ), wt = M.end === void 0 ? Ze : Math.min(M.end, Ce);
                    !I.extend && Ze > wt && (p = wt, wt = Ze, Ze = p);
                    var st = fy(
                      b,
                      Ze
                    ), z = fy(
                      b,
                      wt
                    );
                    if (st && z && (I.rangeCount !== 1 || I.anchorNode !== st.node || I.anchorOffset !== st.offset || I.focusNode !== z.node || I.focusOffset !== z.offset)) {
                      var H = F.createRange();
                      H.setStart(st.node, st.offset), I.removeAllRanges(), Ze > wt ? (I.addRange(H), I.extend(z.node, z.offset)) : (H.setEnd(z.node, z.offset), I.addRange(H));
                    }
                  }
                }
              }
              for (F = [], I = b; I = I.parentNode; )
                I.nodeType === 1 && F.push({
                  element: I,
                  left: I.scrollLeft,
                  top: I.scrollTop
                });
              for (typeof b.focus == "function" && b.focus(), b = 0; b < F.length; b++) {
                var w = F[b];
                w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
              }
            }
            Wv = !!W1, F1 = W1 = null;
          } finally {
            Mt = f, Qe.p = r, J.T = i;
          }
        }
        e.current = t, aa = T2;
      }
    }
    function zd() {
      if (aa === T2) {
        aa = ls;
        var e = yr, t = Nh, a = mr, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = J.T, J.T = null;
          var r = Qe.p;
          Qe.p = Un;
          var f = Mt;
          Mt |= $u;
          try {
            Re !== null && typeof Re.markLayoutEffectsStarted == "function" && Re.markLayoutEffectsStarted(a), Ch = a, Uh = e, em(
              e,
              t.alternate,
              t
            ), Uh = Ch = null, Re !== null && typeof Re.markLayoutEffectsStopped == "function" && Re.markLayoutEffectsStopped();
          } finally {
            Mt = f, Qe.p = r, J.T = i;
          }
        }
        aa = E2;
      }
    }
    function Z0() {
      if (aa === UA || aa === E2) {
        aa = ls, Ig();
        var e = yr, t = Nh, a = mr, i = x2, r = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        r ? aa = j1 : (aa = ls, Nh = yr = null, Ql(e, e.pendingLanes), us = 0, _p = null);
        var f = e.pendingLanes;
        if (f === 0 && (hr = null), r || qo(e), r = Ph(a), t = t.stateNode, Cn && typeof Cn.onCommitFiberRoot == "function")
          try {
            var p = (t.current.flags & 128) === 128;
            switch (r) {
              case Un:
                var b = Pd;
                break;
              case gl:
                b = qf;
                break;
              case Lu:
                b = Po;
                break;
              case nh:
                b = Yf;
                break;
              default:
                b = Po;
            }
            Cn.onCommitFiberRoot(
              Hi,
              t,
              b,
              p
            );
          } catch (F) {
            va || (va = !0, console.error(
              "React instrumentation encountered an error: %s",
              F
            ));
          }
        if (Kt && e.memoizedUpdaters.clear(), um(), i !== null) {
          p = J.T, b = Qe.p, Qe.p = Un, J.T = null;
          try {
            var M = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var R = i[t], Q = k0(R.stack);
              ze(
                R.source,
                M,
                R.value,
                Q
              );
            }
          } finally {
            J.T = p, Qe.p = b;
          }
        }
        (mr & 3) !== 0 && wo(), $a(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (xv = !0, e === G1 ? Hp++ : (Hp = 0, G1 = e)) : Hp = 0, Dc(0), we();
      }
    }
    function k0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Ql(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Dl(t)));
    }
    function wo(e) {
      return Xl(), zd(), Z0(), Sf();
    }
    function Sf() {
      if (aa !== j1) return !1;
      var e = yr, t = B1;
      B1 = 0;
      var a = Ph(mr), i = Lu > a ? Lu : a;
      a = J.T;
      var r = Qe.p;
      try {
        Qe.p = i, J.T = null, i = L1, L1 = null;
        var f = yr, p = mr;
        if (aa = ls, Nh = yr = null, mr = 0, (Mt & (Na | $u)) !== bl)
          throw Error("Cannot flush passive effects while already rendering.");
        V1 = !0, Nv = !1, Re !== null && typeof Re.markPassiveEffectsStarted == "function" && Re.markPassiveEffectsStarted(p);
        var b = Mt;
        if (Mt |= $u, am(f.current), yf(
          f,
          f.current,
          p,
          i
        ), Re !== null && typeof Re.markPassiveEffectsStopped == "function" && Re.markPassiveEffectsStopped(), qo(f), Mt = b, Dc(0, !1), Nv ? f === _p ? us++ : (us = 0, _p = f) : us = 0, Nv = V1 = !1, Cn && typeof Cn.onPostCommitFiberRoot == "function")
          try {
            Cn.onPostCommitFiberRoot(Hi, f);
          } catch (R) {
            va || (va = !0, console.error(
              "React instrumentation encountered an error: %s",
              R
            ));
          }
        var M = f.current.stateNode;
        return M.effectDuration = 0, M.passiveEffectDuration = 0, !0;
      } finally {
        Qe.p = r, J.T = a, Ql(e, t);
      }
    }
    function No(e, t, a) {
      t = xa(a, t), t = Yn(e.stateNode, t, 2), e = rl(e, t, 2), e !== null && (no(e, 2), $a(e));
    }
    function Le(e, t, a) {
      if (qh = !1, e.tag === 3)
        No(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            No(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (hr === null || !hr.has(i))) {
              e = xa(a, e), a = Xt(2), i = rl(t, a, 2), i !== null && (af(
                a,
                i,
                t,
                e
              ), no(i, 2), $a(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function sm(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new OA();
        var r = /* @__PURE__ */ new Set();
        i.set(t, r);
      } else
        r = i.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), i.set(t, r));
      r.has(a) || (N1 = !0, r.add(a), i = kg.bind(null, e, t, a), Kt && Yo(e, a), t.then(i, i));
    }
    function kg(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, im() && J.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), _t === e && (ot & a) === a && (an === es || an === H1 && (ot & 62914560) === ot && Il() - Y1 < g2 ? (Mt & Na) === bl && Oc(e, 0) : q1 |= a, as === ot && (as = 0)), $a(e);
    }
    function dm(e, t) {
      t === 0 && (t = xr()), e = ia(e, t), e !== null && (no(e, t), $a(e));
    }
    function Tf(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), dm(e, a);
    }
    function xi(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, r = e.memoizedState;
          r !== null && (a = r.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), dm(e, a);
    }
    function Cd(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, r = t, f = r.type === $o;
          f = a || f, r.tag !== 22 ? r.flags & 67108864 ? f && ze(
            r,
            hm,
            i,
            r,
            (r.mode & yT) === Yt
          ) : Cd(
            i,
            r,
            f
          ) : r.memoizedState === null && (f && r.flags & 8192 ? ze(
            r,
            hm,
            i,
            r
          ) : r.subtreeFlags & 67108864 && ze(
            r,
            Cd,
            i,
            r,
            f
          )), t = t.sibling;
        }
    }
    function hm(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      Ae(!0);
      try {
        Oa(t), a && vf(t), Cu(e, t.alternate, t, !1), a && bd(e, t, 0, null, !1, 0);
      } finally {
        Ae(!1);
      }
    }
    function qo(e) {
      var t = !0;
      e.current.mode & (Sa | Xu) || (t = !1), Cd(
        e,
        e.current,
        t
      );
    }
    function pl(e) {
      if ((Mt & Na) === bl) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = fe(e) || "ReactComponent", qv !== null) {
            if (qv.has(t)) return;
            qv.add(t);
          } else qv = /* @__PURE__ */ new Set([t]);
          ze(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Yo(e, t) {
      Kt && e.memoizedUpdaters.forEach(function(a) {
        yu(e, a, t);
      });
    }
    function ym(e, t) {
      var a = J.actQueue;
      return a !== null ? (a.push(t), wA) : Fd(e, t);
    }
    function $0(e) {
      im() && J.actQueue === null && ze(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          fe(e)
        );
      });
    }
    function $a(e) {
      e !== Yh && e.next === null && (Yh === null ? Yv = Yh = e : Yh = Yh.next = e), jv = !0, J.actQueue !== null ? Q1 || (Q1 = !0, fn()) : X1 || (X1 = !0, fn());
    }
    function Dc(e, t) {
      if (!Z1 && jv) {
        Z1 = !0;
        do
          for (var a = !1, i = Yv; i !== null; ) {
            if (e !== 0) {
              var r = i.pendingLanes;
              if (r === 0) var f = 0;
              else {
                var p = i.suspendedLanes, b = i.pingedLanes;
                f = (1 << 31 - Ln(42 | e) + 1) - 1, f &= r & ~(p & ~b), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, _d(i, f));
            } else
              f = ot, f = Pt(
                i,
                i === _t ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== os
              ), (f & 3) === 0 || Ku(i, f) || (a = !0, _d(i, f));
            i = i.next;
          }
        while (a);
        Z1 = !1;
      }
    }
    function Ud() {
      Hd();
    }
    function Hd() {
      jv = Q1 = X1 = !1;
      var e = 0;
      is !== 0 && (jo() && (e = is), is = 0);
      for (var t = Il(), a = null, i = Yv; i !== null; ) {
        var r = i.next, f = Zl(i, t);
        f === 0 ? (i.next = null, a === null ? Yv = r : a.next = r, r === null && (Yh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (jv = !0)), i = r;
      }
      Dc(e);
    }
    function Zl(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var p = 31 - Ln(f), b = 1 << p, M = r[p];
        M === -1 ? ((b & a) === 0 || (b & i) !== 0) && (r[p] = u0(b, t)) : M <= t && (e.expiredLanes |= b), f &= ~b;
      }
      if (t = _t, a = ot, a = Pt(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== os
      ), i = e.callbackNode, a === 0 || e === t && (Ot === ts || Ot === ns) || e.cancelPendingCommit !== null)
        return i !== null && wd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || Ku(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || J.actQueue !== null && i !== k1)
          wd(i);
        else return t;
        switch (Ph(a)) {
          case Un:
          case gl:
            a = qf;
            break;
          case Lu:
            a = Po;
            break;
          case nh:
            a = Yf;
            break;
          default:
            a = Po;
        }
        return i = Zt.bind(null, e), J.actQueue !== null ? (J.actQueue.push(i), a = k1) : a = Fd(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && wd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Zt(e, t) {
      if (xv = Ev = !1, aa !== ls && aa !== j1)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (wo() && e.callbackNode !== a)
        return null;
      var i = ot;
      return i = Pt(
        e,
        e === _t ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== os
      ), i === 0 ? null : (rn(
        e,
        i,
        t
      ), Zl(e, Il()), e.callbackNode != null && e.callbackNode === a ? Zt.bind(null, e) : null);
    }
    function _d(e, t) {
      if (wo()) return null;
      Ev = xv, xv = !1, rn(e, t, !0);
    }
    function wd(e) {
      e !== k1 && e !== null && Pg(e);
    }
    function fn() {
      J.actQueue !== null && J.actQueue.push(function() {
        return Hd(), null;
      }), QA(function() {
        (Mt & (Na | $u)) !== bl ? Fd(
          Pd,
          Ud
        ) : Hd();
      });
    }
    function mm() {
      return is === 0 && (is = Wh()), is;
    }
    function pm(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (le(e, "action"), fo("" + e));
    }
    function vm(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Nt(e, t, a, i, r) {
      if (t === "submit" && a && a.stateNode === r) {
        var f = pm(
          (r[ga] || null).action
        ), p = i.submitter;
        p && (t = (t = p[ga] || null) ? pm(t.formAction) : p.getAttribute("formAction"), t !== null && (f = t, p = null));
        var b = new Be(
          "action",
          "action",
          null,
          i,
          r
        );
        e.push({
          event: b,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (is !== 0) {
                    var M = p ? vm(
                      r,
                      p
                    ) : new FormData(r), R = {
                      pending: !0,
                      data: M,
                      method: r.method,
                      action: f
                    };
                    Object.freeze(R), mc(
                      a,
                      R,
                      null,
                      M
                    );
                  }
                } else
                  typeof f == "function" && (b.preventDefault(), M = p ? vm(
                    r,
                    p
                  ) : new FormData(r), R = {
                    pending: !0,
                    data: M,
                    method: r.method,
                    action: f
                  }, Object.freeze(R), mc(
                    a,
                    R,
                    f,
                    M
                  ));
              },
              currentTarget: r
            }
          ]
        });
      }
    }
    function Rn(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        O1(i);
      }
      e.currentTarget = null;
    }
    function kl(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var r = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var p = i.length - 1; 0 <= p; p--) {
              var b = i[p], M = b.instance, R = b.currentTarget;
              if (b = b.listener, M !== r && f.isPropagationStopped())
                break e;
              M !== null ? ze(
                M,
                Rn,
                f,
                b,
                R
              ) : Rn(f, b, R), r = M;
            }
          else
            for (p = 0; p < i.length; p++) {
              if (b = i[p], M = b.instance, R = b.currentTarget, b = b.listener, M !== r && f.isPropagationStopped())
                break e;
              M !== null ? ze(
                M,
                Rn,
                f,
                b,
                R
              ) : Rn(f, b, R), r = M;
            }
        }
      }
    }
    function lt(e, t) {
      $1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[Qm];
      a === void 0 && (a = t[Qm] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (qd(t, e, 2, !1), a.add(i));
    }
    function Nd(e, t, a) {
      $1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), qd(
        a,
        e,
        i,
        t
      );
    }
    function gm(e) {
      if (!e[Bv]) {
        e[Bv] = !0, rv.forEach(function(a) {
          a !== "selectionchange" && ($1.has(a) || Nd(a, !1, e), Nd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Bv] || (t[Bv] = !0, Nd("selectionchange", !1, t));
      }
    }
    function qd(e, t, a, i) {
      switch ($d(t)) {
        case Un:
          var r = Kg;
          break;
        case gl:
          r = kd;
          break;
        default:
          r = Oi;
      }
      a = r.bind(
        null,
        t,
        a,
        e
      ), r = void 0, !G || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0), i ? r !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: r
      }) : e.addEventListener(t, a, !0) : r !== void 0 ? e.addEventListener(t, a, {
        passive: r
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Fn(e, t, a, i, r) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var p = i.tag;
          if (p === 3 || p === 4) {
            var b = i.stateNode.containerInfo;
            if (b === r) break;
            if (p === 4)
              for (p = i.return; p !== null; ) {
                var M = p.tag;
                if ((M === 3 || M === 4) && p.stateNode.containerInfo === r)
                  return;
                p = p.return;
              }
            for (; b !== null; ) {
              if (p = mu(b), p === null) return;
              if (M = p.tag, M === 5 || M === 6 || M === 26 || M === 27) {
                i = f = p;
                continue e;
              }
              b = b.parentNode;
            }
          }
          i = i.return;
        }
      Os(function() {
        var R = f, Q = tc(a), F = [];
        e: {
          var V = hT.get(e);
          if (V !== void 0) {
            var I = Be, Ce = e;
            switch (e) {
              case "keypress":
                if (so(a) === 0) break e;
              case "keydown":
              case "keyup":
                I = FM;
                break;
              case "focusin":
                Ce = "focus", I = dt;
                break;
              case "focusout":
                Ce = "blur", I = dt;
                break;
              case "beforeblur":
              case "afterblur":
                I = dt;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                I = nt;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                I = Ge;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                I = eA;
                break;
              case rT:
              case fT:
              case sT:
                I = a1;
                break;
              case dT:
                I = nA;
                break;
              case "scroll":
              case "scrollend":
                I = j;
                break;
              case "wheel":
                I = lA;
                break;
              case "copy":
              case "cut":
              case "paste":
                I = QM;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                I = tT;
                break;
              case "toggle":
              case "beforetoggle":
                I = iA;
            }
            var Ze = (t & 4) !== 0, wt = !Ze && (e === "scroll" || e === "scrollend"), st = Ze ? V !== null ? V + "Capture" : null : V;
            Ze = [];
            for (var z = R, H; z !== null; ) {
              var w = z;
              if (H = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || H === null || st === null || (w = gu(z, st), w != null && Ze.push(
                Pn(
                  z,
                  w,
                  H
                )
              )), wt) break;
              z = z.return;
            }
            0 < Ze.length && (V = new I(
              V,
              Ce,
              null,
              a,
              Q
            ), F.push({
              event: V,
              listeners: Ze
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (V = e === "mouseover" || e === "pointerover", I = e === "mouseout" || e === "pointerout", V && a !== d && (Ce = a.relatedTarget || a.fromElement) && (mu(Ce) || Ce[wi]))
              break e;
            if ((I || V) && (V = Q.window === Q ? Q : (V = Q.ownerDocument) ? V.defaultView || V.parentWindow : window, I ? (Ce = a.relatedTarget || a.toElement, I = R, Ce = Ce ? mu(Ce) : null, Ce !== null && (wt = Se(Ce), Ze = Ce.tag, Ce !== wt || Ze !== 5 && Ze !== 27 && Ze !== 6) && (Ce = null)) : (I = null, Ce = R), I !== Ce)) {
              if (Ze = nt, w = "onMouseLeave", st = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Ze = tT, w = "onPointerLeave", st = "onPointerEnter", z = "pointer"), wt = I == null ? V : Wu(I), H = Ce == null ? V : Wu(Ce), V = new Ze(
                w,
                z + "leave",
                I,
                a,
                Q
              ), V.target = wt, V.relatedTarget = H, w = null, mu(Q) === R && (Ze = new Ze(
                st,
                z + "enter",
                Ce,
                a,
                Q
              ), Ze.target = H, Ze.relatedTarget = wt, w = Ze), wt = w, I && Ce)
                t: {
                  for (Ze = I, st = Ce, z = 0, H = Ze; H; H = bn(H))
                    z++;
                  for (H = 0, w = st; w; w = bn(w))
                    H++;
                  for (; 0 < z - H; )
                    Ze = bn(Ze), z--;
                  for (; 0 < H - z; )
                    st = bn(st), H--;
                  for (; z--; ) {
                    if (Ze === st || st !== null && Ze === st.alternate)
                      break t;
                    Ze = bn(Ze), st = bn(st);
                  }
                  Ze = null;
                }
              else Ze = null;
              I !== null && bm(
                F,
                V,
                I,
                Ze,
                !1
              ), Ce !== null && wt !== null && bm(
                F,
                wt,
                Ce,
                Ze,
                !0
              );
            }
          }
          e: {
            if (V = R ? Wu(R) : window, I = V.nodeName && V.nodeName.toLowerCase(), I === "select" || I === "input" && V.type === "file")
              var ee = oy;
            else if (v0(V))
              if (cT)
                ee = Vg;
              else {
                ee = ry;
                var xe = Lg;
              }
            else
              I = V.nodeName, !I || I.toLowerCase() !== "input" || V.type !== "checkbox" && V.type !== "radio" ? R && ec(R.elementType) && (ee = oy) : ee = Gg;
            if (ee && (ee = ee(e, R))) {
              Us(
                F,
                ee,
                a,
                Q
              );
              break e;
            }
            xe && xe(e, V, R), e === "focusout" && R && V.type === "number" && R.memoizedProps.value != null && Ts(V, "number", V.value);
          }
          switch (xe = R ? Wu(R) : window, e) {
            case "focusin":
              (v0(xe) || xe.contentEditable === "true") && (dh = xe, u1 = R, fp = null);
              break;
            case "focusout":
              fp = u1 = dh = null;
              break;
            case "mousedown":
              i1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              i1 = !1, x0(
                F,
                a,
                Q
              );
              break;
            case "selectionchange":
              if (fA) break;
            case "keydown":
            case "keyup":
              x0(
                F,
                a,
                Q
              );
          }
          var We;
          if (l1)
            e: {
              switch (e) {
                case "compositionstart":
                  var Ue = "onCompositionStart";
                  break e;
                case "compositionend":
                  Ue = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Ue = "onCompositionUpdate";
                  break e;
              }
              Ue = void 0;
            }
          else
            sh ? Wn(e, a) && (Ue = "onCompositionEnd") : e === "keydown" && a.keyCode === nT && (Ue = "onCompositionStart");
          Ue && (aT && a.locale !== "ko" && (sh || Ue !== "onCompositionStart" ? Ue === "onCompositionEnd" && sh && (We = bu()) : (ue = Q, X = "value" in ue ? ue.value : ue.textContent, sh = !0)), xe = Ef(
            R,
            Ue
          ), 0 < xe.length && (Ue = new eT(
            Ue,
            e,
            null,
            a,
            Q
          ), F.push({
            event: Ue,
            listeners: xe
          }), We ? Ue.data = We : (We = ai(a), We !== null && (Ue.data = We)))), (We = oA ? Cs(e, a) : wr(e, a)) && (Ue = Ef(
            R,
            "onBeforeInput"
          ), 0 < Ue.length && (xe = new kM(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            Q
          ), F.push({
            event: xe,
            listeners: Ue
          }), xe.data = We)), Nt(
            F,
            e,
            R,
            a,
            Q
          );
        }
        kl(F, t);
      });
    }
    function Pn(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Ef(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var r = e, f = r.stateNode;
        if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || f === null || (r = gu(e, a), r != null && i.unshift(
          Pn(e, r, f)
        ), r = gu(e, t), r != null && i.push(
          Pn(e, r, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function bn(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function bm(e, t, a, i, r) {
      for (var f = t._reactName, p = []; a !== null && a !== i; ) {
        var b = a, M = b.alternate, R = b.stateNode;
        if (b = b.tag, M !== null && M === i) break;
        b !== 5 && b !== 26 && b !== 27 || R === null || (M = R, r ? (R = gu(a, f), R != null && p.unshift(
          Pn(a, R, M)
        )) : r || (R = gu(a, f), R != null && p.push(
          Pn(a, R, M)
        ))), a = a.return;
      }
      p.length !== 0 && e.push({ event: t, listeners: p });
    }
    function $l(e, t) {
      ro(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || ip || (ip = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Pa,
        possibleRegistrationNames: Yc
      };
      ec(e) || typeof t.is == "string" || uy(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function qt(e, t, a, i) {
      t !== a && (a = On(a), On(t) !== a && (i[e] = t));
    }
    function Mi(e, t, a) {
      t.forEach(function(i) {
        a[Tm(i)] = i === "style" ? Cc(e) : e.getAttribute(i);
      });
    }
    function Ja(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function Yd(e, t) {
      return e = e.namespaceURI === Qf || e.namespaceURI === ur ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function On(e) {
      return O(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Me(e)
      ), $(e)), (typeof e == "string" ? e : "" + e).replace(NA, `
`).replace(qA, "");
    }
    function Sm(e, t) {
      return t = On(t), On(e) === t;
    }
    function Hu() {
    }
    function pt(e, t, a, i, r, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Hr(i, t, !1), t === "body" || t === "textarea" && i === "" || Ii(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Hr("" + i, t, !1), t !== "body" && Ii(e, "" + i));
          break;
        case "className":
          Ar(e, "class", i);
          break;
        case "tabIndex":
          Ar(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ar(e, a, i);
          break;
        case "style":
          _r(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            Ar(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          le(i, a), i = fo("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (r.encType == null && r.method == null || Vv || (Vv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), r.target == null || Gv || (Gv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || r.type === "submit" || r.type === "image" || Lv ? t !== "button" || r.type == null || r.type === "submit" || Lv ? typeof i == "function" && (r.name == null || D2 || (D2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), r.formEncType == null && r.formMethod == null || Vv || (Vv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), r.formTarget == null || Gv || (Gv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Lv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Lv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && pt(e, t, "name", r.name, r, null), pt(
              e,
              t,
              "formEncType",
              r.formEncType,
              r,
              null
            ), pt(
              e,
              t,
              "formMethod",
              r.formMethod,
              r,
              null
            ), pt(
              e,
              t,
              "formTarget",
              r.formTarget,
              r,
              null
            )) : (pt(
              e,
              t,
              "encType",
              r.encType,
              r,
              null
            ), pt(e, t, "method", r.method, r, null), pt(
              e,
              t,
              "target",
              r.target,
              r,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          le(i, a), i = fo("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ja(a, i), e.onclick = Hu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ja(a, i), lt("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ja(a, i), lt("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (r.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          le(i, a), a = fo("" + i), e.setAttributeNS(cs, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (le(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Xv[a] || (Xv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (le(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (le(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (le(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          lt("beforetoggle", e), lt("toggle", e), Mr(e, "popover", i);
          break;
        case "xlinkActuate":
          al(
            e,
            cs,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          al(
            e,
            cs,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          al(
            e,
            cs,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          al(
            e,
            cs,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          al(
            e,
            cs,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          al(
            e,
            cs,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          al(
            e,
            J1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          al(
            e,
            J1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          al(
            e,
            J1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Mr(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          z2 || i == null || typeof i != "object" || (z2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Rs(a), Mr(e, a, i)) : Pa.hasOwnProperty(a) && i != null && typeof i != "function" && Ja(a, i);
      }
    }
    function zc(e, t, a, i, r, f) {
      switch (a) {
        case "style":
          _r(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (r.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Ii(e, i) : (typeof i == "number" || typeof i == "bigint") && Ii(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ja(a, i), lt("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ja(a, i), lt("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ja(a, i), e.onclick = Hu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Pa.hasOwnProperty(a))
            i != null && typeof i != "function" && Ja(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (r = a.endsWith("Capture"), t = a.slice(2, r ? a.length - 7 : void 0), f = e[ga] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, r), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, r);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Mr(e, a, i);
            }
      }
    }
    function kt(e, t, a) {
      switch ($l(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          lt("error", e), lt("load", e);
          var i = !1, r = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var p = a[f];
              if (p != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    r = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    pt(e, t, f, p, a, null);
                }
            }
          r && pt(e, t, "srcSet", a.srcSet, a, null), i && pt(e, t, "src", a.src, a, null);
          return;
        case "input":
          Pu("input", a), lt("invalid", e);
          var b = f = p = r = null, M = null, R = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var Q = a[i];
              if (Q != null)
                switch (i) {
                  case "name":
                    r = Q;
                    break;
                  case "type":
                    p = Q;
                    break;
                  case "checked":
                    M = Q;
                    break;
                  case "defaultChecked":
                    R = Q;
                    break;
                  case "value":
                    f = Q;
                    break;
                  case "defaultValue":
                    b = Q;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (Q != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    pt(e, t, i, Q, a, null);
                }
            }
          Iu(e, a), d0(
            e,
            f,
            b,
            M,
            R,
            p,
            r,
            !1
          ), pu(e);
          return;
        case "select":
          Pu("select", a), lt("invalid", e), i = p = f = null;
          for (r in a)
            if (a.hasOwnProperty(r) && (b = a[r], b != null))
              switch (r) {
                case "value":
                  f = b;
                  break;
                case "defaultValue":
                  p = b;
                  break;
                case "multiple":
                  i = b;
                default:
                  pt(
                    e,
                    t,
                    r,
                    b,
                    a,
                    null
                  );
              }
          zr(e, a), t = f, a = p, e.multiple = !!i, t != null ? vu(e, !!i, t, !1) : a != null && vu(e, !!i, a, !0);
          return;
        case "textarea":
          Pu("textarea", a), lt("invalid", e), f = r = i = null;
          for (p in a)
            if (a.hasOwnProperty(p) && (b = a[p], b != null))
              switch (p) {
                case "value":
                  i = b;
                  break;
                case "defaultValue":
                  r = b;
                  break;
                case "children":
                  f = b;
                  break;
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  pt(
                    e,
                    t,
                    p,
                    b,
                    a,
                    null
                  );
              }
          Ml(e, a), ey(e, i, r, f), pu(e);
          return;
        case "option":
          Ih(e, a);
          for (M in a)
            if (a.hasOwnProperty(M) && (i = a[M], i != null))
              switch (M) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  pt(e, t, M, i, a, null);
              }
          return;
        case "dialog":
          lt("beforetoggle", e), lt("toggle", e), lt("cancel", e), lt("close", e);
          break;
        case "iframe":
        case "object":
          lt("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < wp.length; i++)
            lt(wp[i], e);
          break;
        case "image":
          lt("error", e), lt("load", e);
          break;
        case "details":
          lt("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          lt("error", e), lt("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (R in a)
            if (a.hasOwnProperty(R) && (i = a[R], i != null))
              switch (R) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  pt(e, t, R, i, a, null);
              }
          return;
        default:
          if (ec(t)) {
            for (Q in a)
              a.hasOwnProperty(Q) && (i = a[Q], i !== void 0 && zc(
                e,
                t,
                Q,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (b in a)
        a.hasOwnProperty(b) && (i = a[b], i != null && pt(e, t, b, i, a, null));
    }
    function J0(e, t, a, i) {
      switch ($l(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var r = null, f = null, p = null, b = null, M = null, R = null, Q = null;
          for (I in a) {
            var F = a[I];
            if (a.hasOwnProperty(I) && F != null)
              switch (I) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  M = F;
                default:
                  i.hasOwnProperty(I) || pt(
                    e,
                    t,
                    I,
                    null,
                    i,
                    F
                  );
              }
          }
          for (var V in i) {
            var I = i[V];
            if (F = a[V], i.hasOwnProperty(V) && (I != null || F != null))
              switch (V) {
                case "type":
                  f = I;
                  break;
                case "name":
                  r = I;
                  break;
                case "checked":
                  R = I;
                  break;
                case "defaultChecked":
                  Q = I;
                  break;
                case "value":
                  p = I;
                  break;
                case "defaultValue":
                  b = I;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (I != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  I !== F && pt(
                    e,
                    t,
                    V,
                    I,
                    i,
                    F
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || O2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), O2 = !0), !t || i || R2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), R2 = !0), ei(
            e,
            p,
            b,
            M,
            R,
            Q,
            f,
            r
          );
          return;
        case "select":
          I = p = b = V = null;
          for (f in a)
            if (M = a[f], a.hasOwnProperty(f) && M != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  I = M;
                default:
                  i.hasOwnProperty(f) || pt(
                    e,
                    t,
                    f,
                    null,
                    i,
                    M
                  );
              }
          for (r in i)
            if (f = i[r], M = a[r], i.hasOwnProperty(r) && (f != null || M != null))
              switch (r) {
                case "value":
                  V = f;
                  break;
                case "defaultValue":
                  b = f;
                  break;
                case "multiple":
                  p = f;
                default:
                  f !== M && pt(
                    e,
                    t,
                    r,
                    f,
                    i,
                    M
                  );
              }
          i = b, t = p, a = I, V != null ? vu(e, !!t, V, !1) : !!a != !!t && (i != null ? vu(e, !!t, i, !0) : vu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          I = V = null;
          for (b in a)
            if (r = a[b], a.hasOwnProperty(b) && r != null && !i.hasOwnProperty(b))
              switch (b) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  pt(e, t, b, null, i, r);
              }
          for (p in i)
            if (r = i[p], f = a[p], i.hasOwnProperty(p) && (r != null || f != null))
              switch (p) {
                case "value":
                  V = r;
                  break;
                case "defaultValue":
                  I = r;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (r != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  r !== f && pt(e, t, p, r, i, f);
              }
          Es(e, V, I);
          return;
        case "option":
          for (var Ce in a)
            if (V = a[Ce], a.hasOwnProperty(Ce) && V != null && !i.hasOwnProperty(Ce))
              switch (Ce) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  pt(
                    e,
                    t,
                    Ce,
                    null,
                    i,
                    V
                  );
              }
          for (M in i)
            if (V = i[M], I = a[M], i.hasOwnProperty(M) && V !== I && (V != null || I != null))
              switch (M) {
                case "selected":
                  e.selected = V && typeof V != "function" && typeof V != "symbol";
                  break;
                default:
                  pt(
                    e,
                    t,
                    M,
                    V,
                    i,
                    I
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var Ze in a)
            V = a[Ze], a.hasOwnProperty(Ze) && V != null && !i.hasOwnProperty(Ze) && pt(
              e,
              t,
              Ze,
              null,
              i,
              V
            );
          for (R in i)
            if (V = i[R], I = a[R], i.hasOwnProperty(R) && V !== I && (V != null || I != null))
              switch (R) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  pt(
                    e,
                    t,
                    R,
                    V,
                    i,
                    I
                  );
              }
          return;
        default:
          if (ec(t)) {
            for (var wt in a)
              V = a[wt], a.hasOwnProperty(wt) && V !== void 0 && !i.hasOwnProperty(wt) && zc(
                e,
                t,
                wt,
                void 0,
                i,
                V
              );
            for (Q in i)
              V = i[Q], I = a[Q], !i.hasOwnProperty(Q) || V === I || V === void 0 && I === void 0 || zc(
                e,
                t,
                Q,
                V,
                i,
                I
              );
            return;
          }
      }
      for (var st in a)
        V = a[st], a.hasOwnProperty(st) && V != null && !i.hasOwnProperty(st) && pt(e, t, st, null, i, V);
      for (F in i)
        V = i[F], I = a[F], !i.hasOwnProperty(F) || V === I || V == null && I == null || pt(e, t, F, V, i, I);
    }
    function Tm(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Cc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Em(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, r = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var p = t[f];
            p != null && typeof p != "boolean" && p !== "" && (f.indexOf("--") === 0 ? (se(p, f), i += r + f + ":" + ("" + p).trim()) : typeof p != "number" || p === 0 || Xf.has(f) ? (se(p, f), i += r + f.replace(Gu, "-$1").toLowerCase().replace(Vu, "-ms-") + ":" + ("" + p).trim()) : i += r + f.replace(Gu, "-$1").toLowerCase().replace(Vu, "-ms-") + ":" + p + "px", r = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = On(i), On(t) !== i && (a.style = Cc(e)));
      }
    }
    function In(e, t, a, i, r, f) {
      if (r.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (le(i, t), e === "" + i)
              return;
        }
      qt(t, e, i, f);
    }
    function xm(e, t, a, i, r, f) {
      if (r.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      qt(t, e, i, f);
    }
    function Mm(e, t, a, i, r, f) {
      if (r.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (le(i, a), e === "" + i)
              return;
        }
      qt(t, e, i, f);
    }
    function K0(e, t, a, i, r, f) {
      if (r.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (le(i, t), e === "" + i))
              return;
        }
      qt(t, e, i, f);
    }
    function St(e, t, a, i, r, f) {
      if (r.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (le(i, t), a = fo("" + i), e === a)
              return;
        }
      qt(t, e, i, f);
    }
    function Ct(e, t, a, i) {
      for (var r = {}, f = /* @__PURE__ */ new Set(), p = e.attributes, b = 0; b < p.length; b++)
        switch (p[b].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(p[b].name);
        }
      if (ec(t)) {
        for (var M in a)
          if (a.hasOwnProperty(M)) {
            var R = a[M];
            if (R != null) {
              if (Pa.hasOwnProperty(M))
                typeof R != "function" && Ja(M, R);
              else if (a.suppressHydrationWarning !== !0)
                switch (M) {
                  case "children":
                    typeof R != "string" && typeof R != "number" || qt(
                      "children",
                      e.textContent,
                      R,
                      r
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    p = e.innerHTML, R = R ? R.__html : void 0, R != null && (R = Yd(e, R), qt(
                      M,
                      p,
                      R,
                      r
                    ));
                    continue;
                  case "style":
                    f.delete(M), Em(e, R, r);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(M.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      M
                    );
                    continue;
                  case "className":
                    f.delete("class"), p = o0(
                      e,
                      "class",
                      R
                    ), qt(
                      "className",
                      p,
                      R,
                      r
                    );
                    continue;
                  default:
                    i.context === Kc && t !== "svg" && t !== "math" ? f.delete(M.toLowerCase()) : f.delete(M), p = o0(
                      e,
                      M,
                      R
                    ), qt(
                      M,
                      p,
                      R,
                      r
                    );
                }
            }
          }
      } else
        for (R in a)
          if (a.hasOwnProperty(R) && (M = a[R], M != null)) {
            if (Pa.hasOwnProperty(R))
              typeof M != "function" && Ja(R, M);
            else if (a.suppressHydrationWarning !== !0)
              switch (R) {
                case "children":
                  typeof M != "string" && typeof M != "number" || qt(
                    "children",
                    e.textContent,
                    M,
                    r
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  p = e.innerHTML, M = M ? M.__html : void 0, M != null && (M = Yd(e, M), p !== M && (r[R] = { __html: p }));
                  continue;
                case "className":
                  In(
                    e,
                    R,
                    "class",
                    M,
                    f,
                    r
                  );
                  continue;
                case "tabIndex":
                  In(
                    e,
                    R,
                    "tabindex",
                    M,
                    f,
                    r
                  );
                  continue;
                case "style":
                  f.delete(R), Em(e, M, r);
                  continue;
                case "multiple":
                  f.delete(R), qt(
                    R,
                    e.multiple,
                    M,
                    r
                  );
                  continue;
                case "muted":
                  f.delete(R), qt(
                    R,
                    e.muted,
                    M,
                    r
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), qt(
                    R,
                    e.autofocus,
                    M,
                    r
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(R), p = e.getAttribute("data"), qt(
                      R,
                      p,
                      M,
                      r
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(M !== "" || t === "a" && R === "href" || t === "object" && R === "data")) {
                    console.error(
                      R === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      R,
                      R
                    );
                    continue;
                  }
                  St(
                    e,
                    R,
                    R,
                    M,
                    f,
                    r
                  );
                  continue;
                case "action":
                case "formAction":
                  if (p = e.getAttribute(R), typeof M == "function") {
                    f.delete(R.toLowerCase()), R === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (p === YA) {
                    f.delete(R.toLowerCase()), qt(
                      R,
                      "function",
                      M,
                      r
                    );
                    continue;
                  }
                  St(
                    e,
                    R,
                    R.toLowerCase(),
                    M,
                    f,
                    r
                  );
                  continue;
                case "xlinkHref":
                  St(
                    e,
                    R,
                    "xlink:href",
                    M,
                    f,
                    r
                  );
                  continue;
                case "contentEditable":
                  Mm(
                    e,
                    R,
                    "contenteditable",
                    M,
                    f,
                    r
                  );
                  continue;
                case "spellCheck":
                  Mm(
                    e,
                    R,
                    "spellcheck",
                    M,
                    f,
                    r
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Mm(
                    e,
                    R,
                    R,
                    M,
                    f,
                    r
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  xm(
                    e,
                    R,
                    R.toLowerCase(),
                    M,
                    f,
                    r
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    b = e;
                    var Q = p = R, F = r;
                    if (f.delete(Q), b = b.getAttribute(Q), b === null)
                      switch (typeof M) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (M === !1) break e;
                      }
                    else if (M != null)
                      switch (typeof M) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (M === !0 && b === "") break e;
                          break;
                        default:
                          if (le(M, p), b === "" + M)
                            break e;
                      }
                    qt(
                      p,
                      b,
                      M,
                      F
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (b = e, Q = p = R, F = r, f.delete(Q), b = b.getAttribute(Q), b === null)
                      switch (typeof M) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(M) || 1 > M) break e;
                      }
                    else if (M != null)
                      switch (typeof M) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(M) || 1 > M) && (le(M, p), b === "" + M))
                            break e;
                      }
                    qt(
                      p,
                      b,
                      M,
                      F
                    );
                  }
                  continue;
                case "rowSpan":
                  K0(
                    e,
                    R,
                    "rowspan",
                    M,
                    f,
                    r
                  );
                  continue;
                case "start":
                  K0(
                    e,
                    R,
                    R,
                    M,
                    f,
                    r
                  );
                  continue;
                case "xHeight":
                  In(
                    e,
                    R,
                    "x-height",
                    M,
                    f,
                    r
                  );
                  continue;
                case "xlinkActuate":
                  In(
                    e,
                    R,
                    "xlink:actuate",
                    M,
                    f,
                    r
                  );
                  continue;
                case "xlinkArcrole":
                  In(
                    e,
                    R,
                    "xlink:arcrole",
                    M,
                    f,
                    r
                  );
                  continue;
                case "xlinkRole":
                  In(
                    e,
                    R,
                    "xlink:role",
                    M,
                    f,
                    r
                  );
                  continue;
                case "xlinkShow":
                  In(
                    e,
                    R,
                    "xlink:show",
                    M,
                    f,
                    r
                  );
                  continue;
                case "xlinkTitle":
                  In(
                    e,
                    R,
                    "xlink:title",
                    M,
                    f,
                    r
                  );
                  continue;
                case "xlinkType":
                  In(
                    e,
                    R,
                    "xlink:type",
                    M,
                    f,
                    r
                  );
                  continue;
                case "xmlBase":
                  In(
                    e,
                    R,
                    "xml:base",
                    M,
                    f,
                    r
                  );
                  continue;
                case "xmlLang":
                  In(
                    e,
                    R,
                    "xml:lang",
                    M,
                    f,
                    r
                  );
                  continue;
                case "xmlSpace":
                  In(
                    e,
                    R,
                    "xml:space",
                    M,
                    f,
                    r
                  );
                  continue;
                case "inert":
                  M !== "" || Xv[R] || (Xv[R] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    R
                  )), xm(
                    e,
                    R,
                    R,
                    M,
                    f,
                    r
                  );
                  continue;
                default:
                  if (!(2 < R.length) || R[0] !== "o" && R[0] !== "O" || R[1] !== "n" && R[1] !== "N") {
                    b = Rs(R), p = !1, i.context === Kc && t !== "svg" && t !== "math" ? f.delete(b.toLowerCase()) : (Q = R.toLowerCase(), Q = Lc.hasOwnProperty(
                      Q
                    ) && Lc[Q] || null, Q !== null && Q !== R && (p = !0, f.delete(Q)), f.delete(b));
                    e: if (Q = e, F = b, b = M, $i(F))
                      if (Q.hasAttribute(F))
                        Q = Q.getAttribute(
                          F
                        ), le(
                          b,
                          F
                        ), b = Q === "" + b ? b : Q;
                      else {
                        switch (typeof b) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (Q = F.toLowerCase().slice(0, 5), Q !== "data-" && Q !== "aria-")
                              break e;
                        }
                        b = b === void 0 ? void 0 : null;
                      }
                    else b = void 0;
                    p || qt(
                      R,
                      b,
                      M,
                      r
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Mi(e, f, r), Object.keys(r).length === 0 ? null : r;
    }
    function ut(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function it(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Tt(e) {
      switch (e) {
        case ur:
          return jh;
        case Qf:
          return kv;
        default:
          return Kc;
      }
    }
    function ya(e, t) {
      if (e === Kc)
        switch (t) {
          case "svg":
            return jh;
          case "math":
            return kv;
          default:
            return Kc;
        }
      return e === jh && t === "foreignObject" ? Kc : e;
    }
    function Jl(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function jo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === P1 ? !1 : (P1 = e, !0) : (P1 = null, !1);
    }
    function Am(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function _u(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function $t(e, t, a, i) {
      J0(e, t, a, i), e[ga] = i;
    }
    function wu(e) {
      Ii(e, "");
    }
    function Uc(e, t, a) {
      e.nodeValue = a;
    }
    function Kl(e) {
      return e === "head";
    }
    function Ka(e, t) {
      e.removeChild(t);
    }
    function Bo(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Lo(e, t) {
      var a = t, i = 0, r = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === Zv) {
            if (0 < i && 8 > i) {
              a = i;
              var p = e.ownerDocument;
              if (a & BA && Qo(p.documentElement), a & LA && Qo(p.body), a & GA)
                for (a = p.head, Qo(a), p = a.firstChild; p; ) {
                  var b = p.nextSibling, M = p.nodeName;
                  p[tr] || M === "SCRIPT" || M === "STYLE" || M === "LINK" && p.rel.toLowerCase() === "stylesheet" || a.removeChild(p), p = b;
                }
            }
            if (r === 0) {
              e.removeChild(f), Nc(t);
              return;
            }
            r--;
          } else
            a === Qv || a === Jc || a === Np ? r++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      Nc(t);
    }
    function ma(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Rm(e) {
      e.nodeValue = "";
    }
    function Om(e, t) {
      t = t[VA], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function jd(e, t) {
      e.nodeValue = t;
    }
    function Go(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Go(a), lo(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Ai(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var r = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[tr])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== r.rel || e.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || e.getAttribute("title") !== (r.title == null ? null : r.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (r.src == null ? null : r.src) || e.getAttribute("type") !== (r.type == null ? null : r.type) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          le(r.name, "name");
          var f = r.name == null ? null : "" + r.name;
          if (r.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = zn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Dn(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = zn(e.nextSibling), e === null)) return null;
      return e;
    }
    function Wl(e) {
      return e.data === Np || e.data === Jc && e.ownerDocument.readyState === U2;
    }
    function Vo(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Jc || a.readyState === U2)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function zn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Qv || t === Np || t === Jc || t === K1 || t === C2)
            break;
          if (t === Zv) return null;
        }
      }
      return e;
    }
    function Bd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, r = 0; r < i.length; r++) {
          var f = i[r];
          a[Tm(f.name)] = f.name.toLowerCase() === "style" ? Cc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Ld(e, t, a) {
      return a === null || a[jA] !== !0 ? (e.nodeValue === t ? e = null : (t = On(t), e = On(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Dm(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Zv) {
            if (t === 0)
              return zn(e.nextSibling);
            t--;
          } else
            a !== Qv && a !== Np && a !== Jc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Xo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Qv || a === Np || a === Jc) {
            if (t === 0) return e;
            t--;
          } else a === Zv && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function zm(e) {
      Nc(e);
    }
    function Da(e) {
      Nc(e);
    }
    function Cm(e, t, a, i, r) {
      switch (r && As(e, i.ancestorInfo), t = it(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function za(e, t, a, i) {
      if (!a[wi] && Ta(a)) {
        var r = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          r,
          r,
          r
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (r = a.attributes; r.length; )
        a.removeAttributeNode(r[0]);
      kt(a, e, t), a[Gn] = i, a[ga] = t;
    }
    function Qo(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      lo(e);
    }
    function xf(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function W0(e, t, a) {
      var i = Bh;
      if (i && typeof t == "string" && t) {
        var r = Ea(t);
        r = 'link[rel="' + e + '"][href="' + r + '"]', typeof a == "string" && (r += '[crossorigin="' + a + '"]'), Y2.has(r) || (Y2.add(r), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(r) === null && (t = i.createElement("link"), kt(t, "link", e), yn(t), i.head.appendChild(t)));
      }
    }
    function Nu(e, t, a, i) {
      var r = (r = Pl.current) ? xf(r) : null;
      if (!r)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Ri(a.href), t = xl(r).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Ri(a.href);
            var f = xl(r).hoistableStyles, p = f.get(e);
            if (!p && (r = r.ownerDocument || r, p = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: rs, preload: null }
            }, f.set(e, p), (f = r.querySelector(
              Fl(e)
            )) && !f._p && (p.instance = f, p.state.loading = qp | su), !du.has(e))) {
              var b = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              du.set(e, b), f || F0(
                r,
                e,
                b,
                p.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Hc(t) + `
  + ` + Hc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return p;
          }
          if (t && i !== null)
            throw a = `

  - ` + Hc(t) + `
  + ` + Hc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = _c(a), t = xl(r).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Hc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : ju.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : ju.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : ju.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Ri(e) {
      return 'href="' + Ea(e) + '"';
    }
    function Fl(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Um(e) {
      return Ie({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function F0(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = qp : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= qp;
      }), t.addEventListener("error", function() {
        return i.loading |= N2;
      }), kt(t, "link", a), yn(t), e.head.appendChild(t));
    }
    function _c(e) {
      return '[src="' + Ea(e) + '"]';
    }
    function wc(e) {
      return "script[async]" + e;
    }
    function Gd(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Ea(a.href) + '"]'
            );
            if (i)
              return t.instance = i, yn(i), i;
            var r = Ie({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), yn(i), kt(i, "style", r), Vd(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            r = Ri(a.href);
            var f = e.querySelector(
              Fl(r)
            );
            if (f)
              return t.state.loading |= su, t.instance = f, yn(f), f;
            i = Um(a), (r = du.get(r)) && Hm(i, r), f = (e.ownerDocument || e).createElement("link"), yn(f);
            var p = f;
            return p._p = new Promise(function(b, M) {
              p.onload = b, p.onerror = M;
            }), kt(f, "link", i), t.state.loading |= su, Vd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = _c(a.src), (r = e.querySelector(
              wc(f)
            )) ? (t.instance = r, yn(r), r) : (i = a, (r = du.get(f)) && (i = Ie({}, a), _m(i, r)), e = e.ownerDocument || e, r = e.createElement("script"), yn(r), kt(r, "link", i), e.head.appendChild(r), t.instance = r);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & su) === rs && (i = t.instance, t.state.loading |= su, Vd(i, a.precedence, e));
      return t.instance;
    }
    function Vd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), r = i.length ? i[i.length - 1] : null, f = r, p = 0; p < i.length; p++) {
        var b = i[p];
        if (b.dataset.precedence === t) f = b;
        else if (f !== r) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function Hm(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function _m(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function wm(e, t, a) {
      if ($v === null) {
        var i = /* @__PURE__ */ new Map(), r = $v = /* @__PURE__ */ new Map();
        r.set(a, i);
      } else
        r = $v, i = r.get(a), i || (i = /* @__PURE__ */ new Map(), r.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), r = 0; r < a.length; r++) {
        var f = a[r];
        if (!(f[tr] || f[Gn] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== ur) {
          var p = f.getAttribute(t) || "";
          p = e + p;
          var b = i.get(p);
          b ? b.push(f) : i.set(p, [f]);
        }
      }
      return i;
    }
    function Nm(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Zo(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === jh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var r = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), r && a.push("`onError`"), f != null && a.push("`disabled`"), r = ut(a, "and"), r += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + r : "the " + r, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                r
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function Mf(e) {
      return !(e.type === "stylesheet" && (e.state.loading & q2) === rs);
    }
    function P0() {
    }
    function I0(e, t, a) {
      if (Yp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = Yp;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & su) === rs) {
        if (t.instance === null) {
          var r = Ri(a.href), f = e.querySelector(
            Fl(r)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = Af.bind(i), e.then(i, i)), t.state.loading |= su, t.instance = f, yn(f);
            return;
          }
          f = e.ownerDocument || e, a = Um(a), (r = du.get(r)) && Hm(a, r), f = f.createElement("link"), yn(f);
          var p = f;
          p._p = new Promise(function(b, M) {
            p.onload = b, p.onerror = M;
          }), kt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & q2) === rs && (i.count++, t = Af.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function ev() {
      if (Yp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = Yp;
      return e.stylesheets && e.count === 0 && Xd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Xd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function Af() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Xd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Xd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Jv = /* @__PURE__ */ new Map(), t.forEach(tv, e), Jv = null, Af.call(e));
    }
    function tv(e, t) {
      if (!(t.state.loading & su)) {
        var a = Jv.get(e);
        if (a) var i = a.get(eb);
        else {
          a = /* @__PURE__ */ new Map(), Jv.set(e, a);
          for (var r = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < r.length; f++) {
            var p = r[f];
            (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (a.set(p.dataset.precedence, p), i = p);
          }
          i && a.set(eb, i);
        }
        r = t.instance, p = r.getAttribute("data-precedence"), f = a.get(p) || i, f === i && a.set(eb, r), a.set(p, r), this.count++, i = Af.bind(this), r.addEventListener("load", i), r.addEventListener("error", i), f ? f.parentNode.insertBefore(r, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(r, e.firstChild)), t.state.loading |= su;
      }
    }
    function Qd(e, t, a, i, r, f, p, b) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = os, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fh(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fh(0), this.hiddenUpdates = Fh(null), this.identifierPrefix = i, this.onUncaughtError = r, this.onCaughtError = f, this.onRecoverableError = p, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function qm(e, t, a, i, r, f, p, b, M, R, Q, F) {
      return e = new Qd(
        e,
        t,
        a,
        p,
        b,
        M,
        R,
        F
      ), t = yA, f === !0 && (t |= Sa | Xu), Kt && (t |= ta), f = Y(3, null, null, t), e.current = f, f.stateNode = e, t = Vr(), rc(t), e.pooledCache = t, rc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, ca(f), e;
    }
    function Ym(e) {
      return e ? (e = ir, e) : ir;
    }
    function xt(e, t, a, i, r, f) {
      if (Cn && typeof Cn.onScheduleFiberRoot == "function")
        try {
          Cn.onScheduleFiberRoot(Hi, i, a);
        } catch (p) {
          va || (va = !0, console.error(
            "React instrumentation encountered an error: %s",
            p
          ));
        }
      Re !== null && typeof Re.markRenderScheduled == "function" && Re.markRenderScheduled(t), r = Ym(r), i.context === null ? i.context = r : i.pendingContext = r, ba && Ua !== null && !G2 && (G2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        fe(Ua) || "Unknown"
      )), i = Cl(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = rl(e, i, t), a !== null && (Qt(a, e, t), si(a, e, t));
    }
    function Zd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function jm(e, t) {
      Zd(e, t), (e = e.alternate) && Zd(e, t);
    }
    function Bm(e) {
      if (e.tag === 13) {
        var t = ia(e, 67108864);
        t !== null && Qt(t, e, 67108864), jm(e, 67108864);
      }
    }
    function $g() {
      return Ua;
    }
    function Jg() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = hn(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function Kg(e, t, a, i) {
      var r = J.T;
      J.T = null;
      var f = Qe.p;
      try {
        Qe.p = Un, Oi(e, t, a, i);
      } finally {
        Qe.p = f, J.T = r;
      }
    }
    function kd(e, t, a, i) {
      var r = J.T;
      J.T = null;
      var f = Qe.p;
      try {
        Qe.p = gl, Oi(e, t, a, i);
      } finally {
        Qe.p = f, J.T = r;
      }
    }
    function Oi(e, t, a, i) {
      if (Wv) {
        var r = Rf(i);
        if (r === null)
          Fn(
            e,
            t,
            i,
            Fv,
            a
          ), Di(e, i);
        else if (Of(
          r,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Di(e, i), t & 4 && -1 < kA.indexOf(e)) {
          for (; r !== null; ) {
            var f = Ta(r);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var p = Ft(f.pendingLanes);
                    if (p !== 0) {
                      var b = f;
                      for (b.pendingLanes |= 2, b.entangledLanes |= 2; p; ) {
                        var M = 1 << 31 - Ln(p);
                        b.entanglements[1] |= M, p &= ~M;
                      }
                      $a(f), (Mt & (Na | $u)) === bl && (wv = Il() + b2, Dc(0));
                    }
                  }
                  break;
                case 13:
                  b = ia(f, 2), b !== null && Qt(b, f, 2), Rc(), jm(f, 2);
              }
            if (f = Rf(i), f === null && Fn(
              e,
              t,
              i,
              Fv,
              a
            ), f === r) break;
            r = f;
          }
          r !== null && i.stopPropagation();
        } else
          Fn(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function Rf(e) {
      return e = tc(e), ko(e);
    }
    function ko(e) {
      if (Fv = null, e = mu(e), e !== null) {
        var t = Se(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = me(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Fv = e, null;
    }
    function $d(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Un;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return gl;
        case "message":
          switch (Ui()) {
            case Pd:
              return Un;
            case qf:
              return gl;
            case Po:
            case e1:
              return Lu;
            case Yf:
              return nh;
            default:
              return Lu;
          }
        default:
          return Lu;
      }
    }
    function Di(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          pr = null;
          break;
        case "dragenter":
        case "dragleave":
          vr = null;
          break;
        case "mouseover":
        case "mouseout":
          gr = null;
          break;
        case "pointerover":
        case "pointerout":
          Bp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Lp.delete(t.pointerId);
      }
    }
    function pa(e, t, a, i, r, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [r]
      }, t !== null && (t = Ta(t), t !== null && Bm(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, r !== null && t.indexOf(r) === -1 && t.push(r), e);
    }
    function Of(e, t, a, i, r) {
      switch (t) {
        case "focusin":
          return pr = pa(
            pr,
            e,
            t,
            a,
            i,
            r
          ), !0;
        case "dragenter":
          return vr = pa(
            vr,
            e,
            t,
            a,
            i,
            r
          ), !0;
        case "mouseover":
          return gr = pa(
            gr,
            e,
            t,
            a,
            i,
            r
          ), !0;
        case "pointerover":
          var f = r.pointerId;
          return Bp.set(
            f,
            pa(
              Bp.get(f) || null,
              e,
              t,
              a,
              i,
              r
            )
          ), !0;
        case "gotpointercapture":
          return f = r.pointerId, Lp.set(
            f,
            pa(
              Lp.get(f) || null,
              e,
              t,
              a,
              i,
              r
            )
          ), !0;
      }
      return !1;
    }
    function nv(e) {
      var t = mu(e.target);
      if (t !== null) {
        var a = Se(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = me(a), t !== null) {
              e.blockedOn = t, qg(e.priority, function() {
                if (a.tag === 13) {
                  var i = ha(a);
                  i = $n(i);
                  var r = ia(
                    a,
                    i
                  );
                  r !== null && Qt(r, a, i), jm(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Df(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Rf(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), r = i;
          d !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), d = r, a.target.dispatchEvent(i), d === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), d = null;
        } else
          return t = Ta(a), t !== null && Bm(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Lm(e, t, a) {
      Df(e) && a.delete(t);
    }
    function av() {
      tb = !1, pr !== null && Df(pr) && (pr = null), vr !== null && Df(vr) && (vr = null), gr !== null && Df(gr) && (gr = null), Bp.forEach(Lm), Lp.forEach(Lm);
    }
    function zf(e, t) {
      e.blockedOn === t && (e.blockedOn = null, tb || (tb = !0, Jt.unstable_scheduleCallback(
        Jt.unstable_NormalPriority,
        av
      )));
    }
    function lv(e) {
      Pv !== e && (Pv = e, Jt.unstable_scheduleCallback(
        Jt.unstable_NormalPriority,
        function() {
          Pv === e && (Pv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], r = e[t + 2];
            if (typeof i != "function") {
              if (ko(i || a) === null)
                continue;
              break;
            }
            var f = Ta(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: r,
              method: a.method,
              action: i
            }, Object.freeze(a), mc(
              f,
              a,
              i,
              r
            ));
          }
        }
      ));
    }
    function Nc(e) {
      function t(M) {
        return zf(M, e);
      }
      pr !== null && zf(pr, e), vr !== null && zf(vr, e), gr !== null && zf(gr, e), Bp.forEach(t), Lp.forEach(t);
      for (var a = 0; a < br.length; a++) {
        var i = br[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < br.length && (a = br[0], a.blockedOn === null); )
        nv(a), a.blockedOn === null && br.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var r = a[i], f = a[i + 1], p = r[ga] || null;
          if (typeof f == "function")
            p || lv(a);
          else if (p) {
            var b = null;
            if (f && f.hasAttribute("formAction")) {
              if (r = f, p = f[ga] || null)
                b = p.formAction;
              else if (ko(r) !== null) continue;
            } else b = p.action;
            typeof b == "function" ? a[i + 1] = b : (a.splice(i, 3), i -= 3), lv(a);
          }
        }
    }
    function Jd(e) {
      this._internalRoot = e;
    }
    function Cf(e) {
      this._internalRoot = e;
    }
    function uv(e) {
      e[wi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Jt = Fx(), Uf = Wt, Wg = Wx, Ie = Object.assign, Hf = Symbol.for("react.element"), zi = Symbol.for("react.transitional.element"), qc = Symbol.for("react.portal"), Ke = Symbol.for("react.fragment"), $o = Symbol.for("react.strict_mode"), Jo = Symbol.for("react.profiler"), Gm = Symbol.for("react.provider"), Kd = Symbol.for("react.consumer"), Wa = Symbol.for("react.context"), qu = Symbol.for("react.forward_ref"), Ko = Symbol.for("react.suspense"), Ci = Symbol.for("react.suspense_list"), _f = Symbol.for("react.memo"), Ca = Symbol.for("react.lazy"), Vm = Symbol.for("react.activity"), iv = Symbol.for("react.memo_cache_sentinel"), Xm = Symbol.iterator, Wd = Symbol.for("react.client.reference"), ke = Array.isArray, J = Uf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Qe = Wg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Fg = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), wf = [], Nf = [], Fa = -1, Yu = Ve(null), Wo = Ve(null), Pl = Ve(null), Fo = Ve(null), ju = Object.prototype.hasOwnProperty, Fd = Jt.unstable_scheduleCallback, Pg = Jt.unstable_cancelCallback, cv = Jt.unstable_shouldYield, Ig = Jt.unstable_requestPaint, Il = Jt.unstable_now, Ui = Jt.unstable_getCurrentPriorityLevel, Pd = Jt.unstable_ImmediatePriority, qf = Jt.unstable_UserBlockingPriority, Po = Jt.unstable_NormalPriority, e1 = Jt.unstable_LowPriority, Yf = Jt.unstable_IdlePriority, t1 = Jt.log, vl = Jt.unstable_setDisableYieldValue, Hi = null, Cn = null, Re = null, va = !1, Kt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Ln = Math.clz32 ? Math.clz32 : rt, Id = Math.log, Bu = Math.LN2, eh = 256, th = 4194304, Un = 2, gl = 8, Lu = 32, nh = 268435456, _i = Math.random().toString(36).slice(2), Gn = "__reactFiber$" + _i, ga = "__reactProps$" + _i, wi = "__reactContainer$" + _i, Qm = "__reactEvents$" + _i, ov = "__reactListeners$" + _i, Io = "__reactHandles$" + _i, er = "__reactResources$" + _i, tr = "__reactMarker$" + _i, rv = /* @__PURE__ */ new Set(), Pa = {}, Yc = {}, fv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, ah = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), lh = {}, uh = {}, Ni = 0, Zm, km, sv, $m, nr, dv, hv;
    gs.__reactDisabledLog = !0;
    var Jm, jf, ar = !1, Bf = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ua = null, ba = !1, n1 = /[\n"\\]/g, Km = !1, Wm = !1, Fm = !1, Pm = !1, ih = !1, Im = !1, Lf = ["value", "defaultValue"], yv = !1, mv = /["'&<>\n\t]|^\s|\s$/, ep = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), ch = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), oh = ch.concat(["button"]), tp = "dd dt li option optgroup p rp rt".split(" "), np = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, lr = {}, eu = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Gu = /([A-Z])/g, Vu = /^ms-/, Gf = /^(?:webkit|moz|o)[A-Z]/, Vf = /^-ms-/, qi = /-(.)/g, pv = /;\s*$/, jc = {}, Bc = {}, vv = !1, ap = !1, Xf = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Qf = "http://www.w3.org/1998/Math/MathML", ur = "http://www.w3.org/2000/svg", rh = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Lc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, lp = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, tu = {}, up = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), fh = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), ip = !1, ea = {}, Zf = /^on./, n = /^on[^A-Z]/, l = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), o = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, d = null, y = null, S = null, E = !1, D = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), G = !1;
    if (D)
      try {
        var te = {};
        Object.defineProperty(te, "passive", {
          get: function() {
            G = !0;
          }
        }), window.addEventListener("test", te, te), window.removeEventListener("test", te, te);
      } catch {
        G = !1;
      }
    var ue = null, X = null, Z = null, je = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Be = Mn(je), vt = Ie({}, je, { view: 0, detail: 0 }), j = Mn(vt), N, B, ae, Oe = Ie({}, vt, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zs,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== ae && (ae && e.type === "mousemove" ? (N = e.screenX - ae.screenX, B = e.screenY - ae.screenY) : B = N = 0, ae = e), N);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : B;
      }
    }), nt = Mn(Oe), Ne = Ie({}, Oe, { dataTransfer: 0 }), Ge = Mn(Ne), Sn = Ie({}, vt, { relatedTarget: 0 }), dt = Mn(Sn), Yi = Ie({}, je, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), a1 = Mn(Yi), XM = Ie({}, je, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), QM = Mn(XM), ZM = Ie({}, je, { data: 0 }), eT = Mn(
      ZM
    ), kM = eT, $M = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, JM = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, KM = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, WM = Ie({}, vt, {
      key: function(e) {
        if (e.key) {
          var t = $M[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = so(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? JM[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zs,
      charCode: function(e) {
        return e.type === "keypress" ? so(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? so(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), FM = Mn(WM), PM = Ie({}, Oe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), tT = Mn(PM), IM = Ie({}, vt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zs
    }), eA = Mn(IM), tA = Ie({}, je, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), nA = Mn(tA), aA = Ie({}, Oe, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), lA = Mn(aA), uA = Ie({}, je, {
      newState: 0,
      oldState: 0
    }), iA = Mn(uA), cA = [9, 13, 27, 32], nT = 229, l1 = D && "CompositionEvent" in window, cp = null;
    D && "documentMode" in document && (cp = document.documentMode);
    var oA = D && "TextEvent" in window && !cp, aT = D && (!l1 || cp && 8 < cp && 11 >= cp), lT = 32, uT = String.fromCharCode(lT), iT = !1, sh = !1, rA = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, op = null, rp = null, cT = !1;
    D && (cT = cy("input") && (!document.documentMode || 9 < document.documentMode));
    var Ha = typeof Object.is == "function" ? Object.is : Xg, fA = D && "documentMode" in document && 11 >= document.documentMode, dh = null, u1 = null, fp = null, i1 = !1, hh = {
      animationend: Su("Animation", "AnimationEnd"),
      animationiteration: Su("Animation", "AnimationIteration"),
      animationstart: Su("Animation", "AnimationStart"),
      transitionrun: Su("Transition", "TransitionRun"),
      transitionstart: Su("Transition", "TransitionStart"),
      transitioncancel: Su("Transition", "TransitionCancel"),
      transitionend: Su("Transition", "TransitionEnd")
    }, c1 = {}, oT = {};
    D && (oT = document.createElement("div").style, "AnimationEvent" in window || (delete hh.animationend.animation, delete hh.animationiteration.animation, delete hh.animationstart.animation), "TransitionEvent" in window || delete hh.transitionend.transition);
    var rT = lc("animationend"), fT = lc("animationiteration"), sT = lc("animationstart"), sA = lc("transitionrun"), dA = lc("transitionstart"), hA = lc("transitioncancel"), dT = lc("transitionend"), hT = /* @__PURE__ */ new Map(), o1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    o1.push("scrollEnd");
    var r1 = /* @__PURE__ */ new WeakMap(), f1 = 1, kf = 2, nu = [], yh = 0, s1 = 0, ir = {};
    Object.freeze(ir);
    var au = null, mh = null, Yt = 0, yA = 1, ta = 2, Sa = 8, Xu = 16, yT = 64, mT = !1;
    try {
      var pT = Object.preventExtensions({});
    } catch {
      mT = !0;
    }
    var ph = [], vh = 0, gv = null, bv = 0, lu = [], uu = 0, $f = null, Gc = 1, Vc = "", _a = null, nn = null, gt = !1, Xc = !1, iu = null, Jf = null, ji = !1, d1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), vT = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var mA = performance, gT = function() {
        return mA.now();
      };
    else {
      var pA = Date;
      gT = function() {
        return pA.now();
      };
    }
    var h1 = Ve(null), y1 = Ve(null), bT = {}, Sv = null, gh = null, bh = !1, vA = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, gA = Jt.unstable_scheduleCallback, bA = Jt.unstable_NormalPriority, Hn = {
      $$typeof: Wa,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Sh = Jt.unstable_now, ST = -0, Tv = -0, Ia = -1.1, Kf = -0, Ev = !1, xv = !1, sp = null, m1 = 0, Wf = 0, Th = null, TT = J.S;
    J.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && D0(e, t), TT !== null && TT(e, t);
    };
    var Ff = Ve(null), Qu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, dp = [], hp = [], yp = [], mp = [], pp = [], vp = [], Pf = /* @__PURE__ */ new Set();
    Qu.recordUnsafeLifecycleWarnings = function(e, t) {
      Pf.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & Sa && typeof t.UNSAFE_componentWillMount == "function" && hp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & Sa && typeof t.UNSAFE_componentWillReceiveProps == "function" && mp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & Sa && typeof t.UNSAFE_componentWillUpdate == "function" && vp.push(e));
    }, Qu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < dp.length && (dp.forEach(function(b) {
        e.add(
          fe(b) || "Component"
        ), Pf.add(b.type);
      }), dp = []);
      var t = /* @__PURE__ */ new Set();
      0 < hp.length && (hp.forEach(function(b) {
        t.add(
          fe(b) || "Component"
        ), Pf.add(b.type);
      }), hp = []);
      var a = /* @__PURE__ */ new Set();
      0 < yp.length && (yp.forEach(function(b) {
        a.add(
          fe(b) || "Component"
        ), Pf.add(b.type);
      }), yp = []);
      var i = /* @__PURE__ */ new Set();
      0 < mp.length && (mp.forEach(
        function(b) {
          i.add(
            fe(b) || "Component"
          ), Pf.add(b.type);
        }
      ), mp = []);
      var r = /* @__PURE__ */ new Set();
      0 < pp.length && (pp.forEach(function(b) {
        r.add(
          fe(b) || "Component"
        ), Pf.add(b.type);
      }), pp = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < vp.length && (vp.forEach(function(b) {
        f.add(
          fe(b) || "Component"
        ), Pf.add(b.type);
      }), vp = []), 0 < t.size) {
        var p = _(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          p
        );
      }
      0 < i.size && (p = _(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        p
      )), 0 < f.size && (p = _(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        p
      )), 0 < e.size && (p = _(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        p
      )), 0 < a.size && (p = _(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        p
      )), 0 < r.size && (p = _(r), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        p
      ));
    };
    var Mv = /* @__PURE__ */ new Map(), ET = /* @__PURE__ */ new Set();
    Qu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Sa && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !ET.has(e.type) && (i = Mv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Mv.set(a, i)), i.push(e));
    }, Qu.flushLegacyContextWarning = function() {
      Mv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(r) {
            a.add(fe(r) || "Component"), ET.add(r.type);
          });
          var i = _(a);
          ze(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Qu.discardPendingWarnings = function() {
      dp = [], hp = [], yp = [], mp = [], pp = [], vp = [], Mv = /* @__PURE__ */ new Map();
    };
    var gp = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), xT = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Av = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), p1 = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, bp = null, Rv = !1, cu = 0, ou = 1, wa = 2, na = 4, _n = 8, MT = 0, AT = 1, RT = 2, v1 = 3, cr = !1, OT = !1, g1 = null, b1 = !1, Eh = Ve(null), Ov = Ve(0), xh, DT = /* @__PURE__ */ new Set(), zT = /* @__PURE__ */ new Set(), S1 = /* @__PURE__ */ new Set(), CT = /* @__PURE__ */ new Set(), or = 0, $e = null, Ut = null, Tn = null, Dv = !1, Mh = !1, If = !1, zv = 0, Sp = 0, Qc = null, SA = 0, TA = 25, W = null, ru = null, Zc = -1, Tp = !1, Cv = {
      readContext: Ht,
      use: Hl,
      useCallback: Bt,
      useContext: Bt,
      useEffect: Bt,
      useImperativeHandle: Bt,
      useLayoutEffect: Bt,
      useInsertionEffect: Bt,
      useMemo: Bt,
      useReducer: Bt,
      useRef: Bt,
      useState: Bt,
      useDebugValue: Bt,
      useDeferredValue: Bt,
      useTransition: Bt,
      useSyncExternalStore: Bt,
      useId: Bt,
      useHostTransitionStatus: Bt,
      useFormState: Bt,
      useActionState: Bt,
      useOptimistic: Bt,
      useMemoCache: Bt,
      useCacheRefresh: Bt
    }, T1 = null, UT = null, E1 = null, HT = null, Bi = null, Zu = null, Uv = null;
    T1 = {
      readContext: function(e) {
        return Ht(e);
      },
      use: Hl,
      useCallback: function(e, t) {
        return W = "useCallback", tt(), La(t), Fr(e, t);
      },
      useContext: function(e) {
        return W = "useContext", tt(), Ht(e);
      },
      useEffect: function(e, t) {
        return W = "useEffect", tt(), La(t), Xs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return W = "useImperativeHandle", tt(), La(a), Zs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        W = "useInsertionEffect", tt(), La(t), Qa(4, wa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", tt(), La(t), Qs(e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", tt(), La(t);
        var a = J.H;
        J.H = Bi;
        try {
          return ks(e, t);
        } finally {
          J.H = a;
        }
      },
      useReducer: function(e, t, a) {
        W = "useReducer", tt();
        var i = J.H;
        J.H = Bi;
        try {
          return yt(e, t, a);
        } finally {
          J.H = i;
        }
      },
      useRef: function(e) {
        return W = "useRef", tt(), Wr(e);
      },
      useState: function(e) {
        W = "useState", tt();
        var t = J.H;
        J.H = Bi;
        try {
          return Au(e);
        } finally {
          J.H = t;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", tt();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", tt(), $s(e, t);
      },
      useTransition: function() {
        return W = "useTransition", tt(), ql();
      },
      useSyncExternalStore: function(e, t, a) {
        return W = "useSyncExternalStore", tt(), Mu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return W = "useId", tt(), Yl();
      },
      useFormState: function(e, t) {
        return W = "useFormState", tt(), go(), Mo(e, t);
      },
      useActionState: function(e, t) {
        return W = "useActionState", tt(), Mo(e, t);
      },
      useOptimistic: function(e) {
        return W = "useOptimistic", tt(), dl(e);
      },
      useHostTransitionStatus: fa,
      useMemoCache: It,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", tt(), pc();
      }
    }, UT = {
      readContext: function(e) {
        return Ht(e);
      },
      use: Hl,
      useCallback: function(e, t) {
        return W = "useCallback", he(), Fr(e, t);
      },
      useContext: function(e) {
        return W = "useContext", he(), Ht(e);
      },
      useEffect: function(e, t) {
        return W = "useEffect", he(), Xs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return W = "useImperativeHandle", he(), Zs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        W = "useInsertionEffect", he(), Qa(4, wa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", he(), Qs(e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", he();
        var a = J.H;
        J.H = Bi;
        try {
          return ks(e, t);
        } finally {
          J.H = a;
        }
      },
      useReducer: function(e, t, a) {
        W = "useReducer", he();
        var i = J.H;
        J.H = Bi;
        try {
          return yt(e, t, a);
        } finally {
          J.H = i;
        }
      },
      useRef: function(e) {
        return W = "useRef", he(), Wr(e);
      },
      useState: function(e) {
        W = "useState", he();
        var t = J.H;
        J.H = Bi;
        try {
          return Au(e);
        } finally {
          J.H = t;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", he();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", he(), $s(e, t);
      },
      useTransition: function() {
        return W = "useTransition", he(), ql();
      },
      useSyncExternalStore: function(e, t, a) {
        return W = "useSyncExternalStore", he(), Mu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return W = "useId", he(), Yl();
      },
      useActionState: function(e, t) {
        return W = "useActionState", he(), Mo(e, t);
      },
      useFormState: function(e, t) {
        return W = "useFormState", he(), go(), Mo(e, t);
      },
      useOptimistic: function(e) {
        return W = "useOptimistic", he(), dl(e);
      },
      useHostTransitionStatus: fa,
      useMemoCache: It,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", he(), pc();
      }
    }, E1 = {
      readContext: function(e) {
        return Ht(e);
      },
      use: Hl,
      useCallback: function(e, t) {
        return W = "useCallback", he(), yc(e, t);
      },
      useContext: function(e) {
        return W = "useContext", he(), Ht(e);
      },
      useEffect: function(e, t) {
        W = "useEffect", he(), on(2048, _n, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return W = "useImperativeHandle", he(), Nl(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return W = "useInsertionEffect", he(), on(4, wa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", he(), on(4, na, e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", he();
        var a = J.H;
        J.H = Zu;
        try {
          return pi(e, t);
        } finally {
          J.H = a;
        }
      },
      useReducer: function(e, t, a) {
        W = "useReducer", he();
        var i = J.H;
        J.H = Zu;
        try {
          return Va(e, t, a);
        } finally {
          J.H = i;
        }
      },
      useRef: function() {
        return W = "useRef", he(), ft().memoizedState;
      },
      useState: function() {
        W = "useState", he();
        var e = J.H;
        J.H = Zu;
        try {
          return Va(mt);
        } finally {
          J.H = e;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", he();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", he(), Pr(e, t);
      },
      useTransition: function() {
        return W = "useTransition", he(), Ws();
      },
      useSyncExternalStore: function(e, t, a) {
        return W = "useSyncExternalStore", he(), kr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return W = "useId", he(), ft().memoizedState;
      },
      useFormState: function(e) {
        return W = "useFormState", he(), go(), Vs(e);
      },
      useActionState: function(e) {
        return W = "useActionState", he(), Vs(e);
      },
      useOptimistic: function(e, t) {
        return W = "useOptimistic", he(), Ru(e, t);
      },
      useHostTransitionStatus: fa,
      useMemoCache: It,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", he(), ft().memoizedState;
      }
    }, HT = {
      readContext: function(e) {
        return Ht(e);
      },
      use: Hl,
      useCallback: function(e, t) {
        return W = "useCallback", he(), yc(e, t);
      },
      useContext: function(e) {
        return W = "useContext", he(), Ht(e);
      },
      useEffect: function(e, t) {
        W = "useEffect", he(), on(2048, _n, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return W = "useImperativeHandle", he(), Nl(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return W = "useInsertionEffect", he(), on(4, wa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", he(), on(4, na, e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", he();
        var a = J.H;
        J.H = Uv;
        try {
          return pi(e, t);
        } finally {
          J.H = a;
        }
      },
      useReducer: function(e, t, a) {
        W = "useReducer", he();
        var i = J.H;
        J.H = Uv;
        try {
          return hc(e, t, a);
        } finally {
          J.H = i;
        }
      },
      useRef: function() {
        return W = "useRef", he(), ft().memoizedState;
      },
      useState: function() {
        W = "useState", he();
        var e = J.H;
        J.H = Uv;
        try {
          return hc(mt);
        } finally {
          J.H = e;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", he();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", he(), Js(e, t);
      },
      useTransition: function() {
        return W = "useTransition", he(), Fs();
      },
      useSyncExternalStore: function(e, t, a) {
        return W = "useSyncExternalStore", he(), kr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return W = "useId", he(), ft().memoizedState;
      },
      useFormState: function(e) {
        return W = "useFormState", he(), go(), Ao(e);
      },
      useActionState: function(e) {
        return W = "useActionState", he(), Ao(e);
      },
      useOptimistic: function(e, t) {
        return W = "useOptimistic", he(), Gs(e, t);
      },
      useHostTransitionStatus: fa,
      useMemoCache: It,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", he(), ft().memoizedState;
      }
    }, Bi = {
      readContext: function(e) {
        return U(), Ht(e);
      },
      use: function(e) {
        return x(), Hl(e);
      },
      useCallback: function(e, t) {
        return W = "useCallback", x(), tt(), Fr(e, t);
      },
      useContext: function(e) {
        return W = "useContext", x(), tt(), Ht(e);
      },
      useEffect: function(e, t) {
        return W = "useEffect", x(), tt(), Xs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return W = "useImperativeHandle", x(), tt(), Zs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        W = "useInsertionEffect", x(), tt(), Qa(4, wa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", x(), tt(), Qs(e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", x(), tt();
        var a = J.H;
        J.H = Bi;
        try {
          return ks(e, t);
        } finally {
          J.H = a;
        }
      },
      useReducer: function(e, t, a) {
        W = "useReducer", x(), tt();
        var i = J.H;
        J.H = Bi;
        try {
          return yt(e, t, a);
        } finally {
          J.H = i;
        }
      },
      useRef: function(e) {
        return W = "useRef", x(), tt(), Wr(e);
      },
      useState: function(e) {
        W = "useState", x(), tt();
        var t = J.H;
        J.H = Bi;
        try {
          return Au(e);
        } finally {
          J.H = t;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", x(), tt();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", x(), tt(), $s(e, t);
      },
      useTransition: function() {
        return W = "useTransition", x(), tt(), ql();
      },
      useSyncExternalStore: function(e, t, a) {
        return W = "useSyncExternalStore", x(), tt(), Mu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return W = "useId", x(), tt(), Yl();
      },
      useFormState: function(e, t) {
        return W = "useFormState", x(), tt(), Mo(e, t);
      },
      useActionState: function(e, t) {
        return W = "useActionState", x(), tt(), Mo(e, t);
      },
      useOptimistic: function(e) {
        return W = "useOptimistic", x(), tt(), dl(e);
      },
      useMemoCache: function(e) {
        return x(), It(e);
      },
      useHostTransitionStatus: fa,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", tt(), pc();
      }
    }, Zu = {
      readContext: function(e) {
        return U(), Ht(e);
      },
      use: function(e) {
        return x(), Hl(e);
      },
      useCallback: function(e, t) {
        return W = "useCallback", x(), he(), yc(e, t);
      },
      useContext: function(e) {
        return W = "useContext", x(), he(), Ht(e);
      },
      useEffect: function(e, t) {
        W = "useEffect", x(), he(), on(2048, _n, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return W = "useImperativeHandle", x(), he(), Nl(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return W = "useInsertionEffect", x(), he(), on(4, wa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", x(), he(), on(4, na, e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", x(), he();
        var a = J.H;
        J.H = Zu;
        try {
          return pi(e, t);
        } finally {
          J.H = a;
        }
      },
      useReducer: function(e, t, a) {
        W = "useReducer", x(), he();
        var i = J.H;
        J.H = Zu;
        try {
          return Va(e, t, a);
        } finally {
          J.H = i;
        }
      },
      useRef: function() {
        return W = "useRef", x(), he(), ft().memoizedState;
      },
      useState: function() {
        W = "useState", x(), he();
        var e = J.H;
        J.H = Zu;
        try {
          return Va(mt);
        } finally {
          J.H = e;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", x(), he();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", x(), he(), Pr(e, t);
      },
      useTransition: function() {
        return W = "useTransition", x(), he(), Ws();
      },
      useSyncExternalStore: function(e, t, a) {
        return W = "useSyncExternalStore", x(), he(), kr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return W = "useId", x(), he(), ft().memoizedState;
      },
      useFormState: function(e) {
        return W = "useFormState", x(), he(), Vs(e);
      },
      useActionState: function(e) {
        return W = "useActionState", x(), he(), Vs(e);
      },
      useOptimistic: function(e, t) {
        return W = "useOptimistic", x(), he(), Ru(e, t);
      },
      useMemoCache: function(e) {
        return x(), It(e);
      },
      useHostTransitionStatus: fa,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", he(), ft().memoizedState;
      }
    }, Uv = {
      readContext: function(e) {
        return U(), Ht(e);
      },
      use: function(e) {
        return x(), Hl(e);
      },
      useCallback: function(e, t) {
        return W = "useCallback", x(), he(), yc(e, t);
      },
      useContext: function(e) {
        return W = "useContext", x(), he(), Ht(e);
      },
      useEffect: function(e, t) {
        W = "useEffect", x(), he(), on(2048, _n, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return W = "useImperativeHandle", x(), he(), Nl(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return W = "useInsertionEffect", x(), he(), on(4, wa, e, t);
      },
      useLayoutEffect: function(e, t) {
        return W = "useLayoutEffect", x(), he(), on(4, na, e, t);
      },
      useMemo: function(e, t) {
        W = "useMemo", x(), he();
        var a = J.H;
        J.H = Zu;
        try {
          return pi(e, t);
        } finally {
          J.H = a;
        }
      },
      useReducer: function(e, t, a) {
        W = "useReducer", x(), he();
        var i = J.H;
        J.H = Zu;
        try {
          return hc(e, t, a);
        } finally {
          J.H = i;
        }
      },
      useRef: function() {
        return W = "useRef", x(), he(), ft().memoizedState;
      },
      useState: function() {
        W = "useState", x(), he();
        var e = J.H;
        J.H = Zu;
        try {
          return hc(mt);
        } finally {
          J.H = e;
        }
      },
      useDebugValue: function() {
        W = "useDebugValue", x(), he();
      },
      useDeferredValue: function(e, t) {
        return W = "useDeferredValue", x(), he(), Js(e, t);
      },
      useTransition: function() {
        return W = "useTransition", x(), he(), Fs();
      },
      useSyncExternalStore: function(e, t, a) {
        return W = "useSyncExternalStore", x(), he(), kr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return W = "useId", x(), he(), ft().memoizedState;
      },
      useFormState: function(e) {
        return W = "useFormState", x(), he(), Ao(e);
      },
      useActionState: function(e) {
        return W = "useActionState", x(), he(), Ao(e);
      },
      useOptimistic: function(e, t) {
        return W = "useOptimistic", x(), he(), Gs(e, t);
      },
      useMemoCache: function(e) {
        return x(), It(e);
      },
      useHostTransitionStatus: fa,
      useCacheRefresh: function() {
        return W = "useCacheRefresh", he(), ft().memoizedState;
      }
    };
    var _T = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = ba;
        ba = !0;
        try {
          return e(t, a);
        } finally {
          ba = i;
        }
      }
    }, x1 = _T["react-stack-bottom-frame"].bind(_T), wT = {
      "react-stack-bottom-frame": function(e) {
        var t = ba;
        ba = !0;
        try {
          return e.render();
        } finally {
          ba = t;
        }
      }
    }, NT = wT["react-stack-bottom-frame"].bind(wT), qT = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Le(e, e.return, a);
        }
      }
    }, M1 = qT["react-stack-bottom-frame"].bind(qT), YT = {
      "react-stack-bottom-frame": function(e, t, a, i, r) {
        try {
          t.componentDidUpdate(a, i, r);
        } catch (f) {
          Le(e, e.return, f);
        }
      }
    }, jT = YT["react-stack-bottom-frame"].bind(YT), BT = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, EA = BT["react-stack-bottom-frame"].bind(BT), LT = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Le(e, t, i);
        }
      }
    }, GT = LT["react-stack-bottom-frame"].bind(LT), VT = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, xA = VT["react-stack-bottom-frame"].bind(VT), XT = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          Le(e, t, i);
        }
      }
    }, MA = XT["react-stack-bottom-frame"].bind(XT), QT = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, rr = QT["react-stack-bottom-frame"].bind(QT), Ah = null, Ep = 0, at = null, A1, ZT = A1 = !1, kT = {}, $T = {}, JT = {};
    A = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = fe(e), r = i || "null";
        if (!kT[r]) {
          kT[r] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (r = fe(e)) && (f = `

Check the render method of \`` + r + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var p = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = fe(a) : typeof a.name == "string" && (i = a.name), i && (p = " It was passed a child from " + i + ".")), ze(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              p
            );
          });
        }
      }
    };
    var Rh = nf(!0), KT = nf(!1), fu = Ve(null), Li = null, Oh = 1, xp = 2, wn = Ve(0), WT = {}, FT = /* @__PURE__ */ new Set(), PT = /* @__PURE__ */ new Set(), IT = /* @__PURE__ */ new Set(), e2 = /* @__PURE__ */ new Set(), t2 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set(), a2 = /* @__PURE__ */ new Set(), l2 = /* @__PURE__ */ new Set(), u2 = /* @__PURE__ */ new Set(), i2 = /* @__PURE__ */ new Set();
    Object.freeze(WT);
    var R1 = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ha(e), r = Cl(i);
        r.payload = t, a != null && (By(a), r.callback = a), t = rl(e, r, i), t !== null && (Qt(t, e, i), si(t, e, i)), ht(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ha(e), r = Cl(i);
        r.tag = AT, r.payload = t, a != null && (By(a), r.callback = a), t = rl(e, r, i), t !== null && (Qt(t, e, i), si(t, e, i)), ht(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ha(e), i = Cl(a);
        i.tag = RT, t != null && (By(t), i.callback = t), t = rl(e, i, a), t !== null && (Qt(t, e, a), si(t, e, a)), Re !== null && typeof Re.markForceUpdateScheduled == "function" && Re.markForceUpdateScheduled(e, a);
      }
    }, O1 = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, Dh = null, D1 = null, c2 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Vn = !1, o2 = {}, r2 = {}, f2 = {}, s2 = {}, zh = !1, d2 = {}, z1 = {}, C1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, h2 = !1, y2 = null;
    y2 = /* @__PURE__ */ new Set();
    var kc = !1, sn = !1, U1 = !1, m2 = typeof WeakSet == "function" ? WeakSet : Set, Xn = null, Ch = null, Uh = null, En = null, el = !1, ku = null, Mp = 8192, AA = {
      getCacheForType: function(e) {
        var t = Ht(Hn), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return Ua;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var Ap = Symbol.for;
      Ap("selector.component"), Ap("selector.has_pseudo_class"), Ap("selector.role"), Ap("selector.test_id"), Ap("selector.text");
    }
    var RA = [], OA = typeof WeakMap == "function" ? WeakMap : Map, bl = 0, Na = 2, $u = 4, $c = 0, Rp = 1, Hh = 2, H1 = 3, es = 4, Hv = 6, p2 = 5, Mt = bl, _t = null, ct = null, ot = 0, tl = 0, Op = 1, ts = 2, Dp = 3, v2 = 4, _1 = 5, _h = 6, zp = 7, w1 = 8, ns = 9, Ot = tl, Sl = null, fr = !1, wh = !1, N1 = !1, Gi = 0, an = $c, sr = 0, dr = 0, q1 = 0, Tl = 0, as = 0, Cp = null, qa = null, _v = !1, Y1 = 0, g2 = 300, wv = 1 / 0, b2 = 500, Up = null, hr = null, DA = 0, zA = 1, CA = 2, ls = 0, S2 = 1, T2 = 2, E2 = 3, UA = 4, j1 = 5, aa = 0, yr = null, Nh = null, mr = 0, B1 = 0, L1 = null, x2 = null, HA = 50, Hp = 0, G1 = null, V1 = !1, Nv = !1, _A = 50, us = 0, _p = null, qh = !1, qv = null, M2 = !1, A2 = /* @__PURE__ */ new Set(), wA = {}, Yv = null, Yh = null, X1 = !1, Q1 = !1, jv = !1, Z1 = !1, is = 0, k1 = {};
    (function() {
      for (var e = 0; e < o1.length; e++) {
        var t = o1[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), ll(a, "on" + t);
      }
      ll(rT, "onAnimationEnd"), ll(fT, "onAnimationIteration"), ll(sT, "onAnimationStart"), ll("dblclick", "onDoubleClick"), ll("focusin", "onFocus"), ll("focusout", "onBlur"), ll(sA, "onTransitionRun"), ll(dA, "onTransitionStart"), ll(hA, "onTransitionCancel"), ll(dT, "onTransitionEnd");
    })(), ki("onMouseEnter", ["mouseout", "mouseover"]), ki("onMouseLeave", ["mouseout", "mouseover"]), ki("onPointerEnter", ["pointerout", "pointerover"]), ki("onPointerLeave", ["pointerout", "pointerover"]), Fu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Fu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Fu("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Fu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Fu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Fu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var wp = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), $1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wp)
    ), Bv = "_reactListening" + Math.random().toString(36).slice(2), R2 = !1, O2 = !1, Lv = !1, D2 = !1, Gv = !1, Vv = !1, z2 = !1, Xv = {}, NA = /\r\n?/g, qA = /\u0000|\uFFFD/g, cs = "http://www.w3.org/1999/xlink", J1 = "http://www.w3.org/XML/1998/namespace", YA = "javascript:throw new Error('React form unexpectedly submitted.')", jA = "suppressHydrationWarning", Qv = "$", Zv = "/$", Jc = "$?", Np = "$!", BA = 1, LA = 2, GA = 4, K1 = "F!", C2 = "F", U2 = "complete", VA = "style", Kc = 0, jh = 1, kv = 2, W1 = null, F1 = null, H2 = { dialog: !0, webview: !0 }, P1 = null, _2 = typeof setTimeout == "function" ? setTimeout : void 0, XA = typeof clearTimeout == "function" ? clearTimeout : void 0, os = -1, w2 = typeof Promise == "function" ? Promise : void 0, QA = typeof queueMicrotask == "function" ? queueMicrotask : typeof w2 < "u" ? function(e) {
      return w2.resolve(null).then(e).catch(Am);
    } : _2, I1 = null, rs = 0, qp = 1, N2 = 2, q2 = 3, su = 4, du = /* @__PURE__ */ new Map(), Y2 = /* @__PURE__ */ new Set(), Wc = Qe.d;
    Qe.d = {
      f: function() {
        var e = Wc.f(), t = Rc();
        return e || t;
      },
      r: function(e) {
        var t = Ta(e);
        t !== null && t.tag === 5 && t.type === "form" ? qy(t) : Wc.r(e);
      },
      D: function(e) {
        Wc.D(e), W0("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Wc.C(e, t), W0("preconnect", e, t);
      },
      L: function(e, t, a) {
        Wc.L(e, t, a);
        var i = Bh;
        if (i && e && t) {
          var r = 'link[rel="preload"][as="' + Ea(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (r += '[imagesrcset="' + Ea(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (r += '[imagesizes="' + Ea(
            a.imageSizes
          ) + '"]')) : r += '[href="' + Ea(e) + '"]';
          var f = r;
          switch (t) {
            case "style":
              f = Ri(e);
              break;
            case "script":
              f = _c(e);
          }
          du.has(f) || (e = Ie(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), du.set(f, e), i.querySelector(r) !== null || t === "style" && i.querySelector(
            Fl(f)
          ) || t === "script" && i.querySelector(wc(f)) || (t = i.createElement("link"), kt(t, "link", e), yn(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Wc.m(e, t);
        var a = Bh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", r = 'link[rel="modulepreload"][as="' + Ea(i) + '"][href="' + Ea(e) + '"]', f = r;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = _c(e);
          }
          if (!du.has(f) && (e = Ie({ rel: "modulepreload", href: e }, t), du.set(f, e), a.querySelector(r) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(wc(f)))
                  return;
            }
            i = a.createElement("link"), kt(i, "link", e), yn(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Wc.X(e, t);
        var a = Bh;
        if (a && e) {
          var i = xl(a).hoistableScripts, r = _c(e), f = i.get(r);
          f || (f = a.querySelector(
            wc(r)
          ), f || (e = Ie({ src: e, async: !0 }, t), (t = du.get(r)) && _m(e, t), f = a.createElement("script"), yn(f), kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(r, f));
        }
      },
      S: function(e, t, a) {
        Wc.S(e, t, a);
        var i = Bh;
        if (i && e) {
          var r = xl(i).hoistableStyles, f = Ri(e);
          t = t || "default";
          var p = r.get(f);
          if (!p) {
            var b = { loading: rs, preload: null };
            if (p = i.querySelector(
              Fl(f)
            ))
              b.loading = qp | su;
            else {
              e = Ie(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = du.get(f)) && Hm(e, a);
              var M = p = i.createElement("link");
              yn(M), kt(M, "link", e), M._p = new Promise(function(R, Q) {
                M.onload = R, M.onerror = Q;
              }), M.addEventListener("load", function() {
                b.loading |= qp;
              }), M.addEventListener("error", function() {
                b.loading |= N2;
              }), b.loading |= su, Vd(p, t, i);
            }
            p = {
              type: "stylesheet",
              instance: p,
              count: 1,
              state: b
            }, r.set(f, p);
          }
        }
      },
      M: function(e, t) {
        Wc.M(e, t);
        var a = Bh;
        if (a && e) {
          var i = xl(a).hoistableScripts, r = _c(e), f = i.get(r);
          f || (f = a.querySelector(
            wc(r)
          ), f || (e = Ie({ src: e, async: !0, type: "module" }, t), (t = du.get(r)) && _m(e, t), f = a.createElement("script"), yn(f), kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(r, f));
        }
      }
    };
    var Bh = typeof document > "u" ? null : document, $v = null, Yp = null, eb = null, Jv = null, fs = Fg, jp = {
      $$typeof: Wa,
      Provider: null,
      Consumer: null,
      _currentValue: fs,
      _currentValue2: fs,
      _threadCount: 0
    }, j2 = "%c%s%c ", B2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", L2 = "", Kv = " ", ZA = Function.prototype.bind, G2 = !1, V2 = null, X2 = null, Q2 = null, Z2 = null, k2 = null, $2 = null, J2 = null, K2 = null, W2 = null;
    V2 = function(e, t, a, i) {
      t = c(e, t), t !== null && (a = s(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ie({}, e.memoizedProps), a = ia(e, 2), a !== null && Qt(a, e, 2));
    }, X2 = function(e, t, a) {
      t = c(e, t), t !== null && (a = g(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ie({}, e.memoizedProps), a = ia(e, 2), a !== null && Qt(a, e, 2));
    }, Q2 = function(e, t, a, i) {
      t = c(e, t), t !== null && (a = h(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Ie({}, e.memoizedProps), a = ia(e, 2), a !== null && Qt(a, e, 2));
    }, Z2 = function(e, t, a) {
      e.pendingProps = s(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ia(e, 2), t !== null && Qt(t, e, 2);
    }, k2 = function(e, t) {
      e.pendingProps = g(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ia(e, 2), t !== null && Qt(t, e, 2);
    }, $2 = function(e, t, a) {
      e.pendingProps = h(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ia(e, 2), t !== null && Qt(t, e, 2);
    }, J2 = function(e) {
      var t = ia(e, 2);
      t !== null && Qt(t, e, 2);
    }, K2 = function(e) {
      T = e;
    }, W2 = function(e) {
      v = e;
    };
    var Wv = !0, Fv = null, tb = !1, pr = null, vr = null, gr = null, Bp = /* @__PURE__ */ new Map(), Lp = /* @__PURE__ */ new Map(), br = [], kA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Pv = null;
    if (Cf.prototype.render = Jd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ye(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, r = ha(i);
      xt(i, r, a, t, null, null);
    }, Cf.prototype.unmount = Jd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (Mt & (Na | $u)) !== bl && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), xt(e.current, 2, null, e, null, null), Rc(), t[wi] = null;
      }
    }, Cf.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = c0();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < br.length && t !== 0 && t < br[a].priority; a++) ;
        br.splice(a, 0, e), a === 0 && nv(e);
      }
    }, function() {
      var e = Uf.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Qe.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = ne(t), e = e !== null ? k(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: J,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = V2, e.overrideHookStateDeletePath = X2, e.overrideHookStateRenamePath = Q2, e.overrideProps = Z2, e.overridePropsDeletePath = k2, e.overridePropsRenamePath = $2, e.scheduleUpdate = J2, e.setErrorHandler = K2, e.setSuspenseHandler = W2, e.scheduleRefresh = pe, e.scheduleRoot = ce, e.setRefreshHandler = ge, e.getCurrentFiber = $g, e.getLaneLabelMap = Jg, e.injectProfilingHooks = Xe, De(e);
    }() && D && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var F2 = window.location.protocol;
      /^(https?|file):$/.test(F2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (F2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    Qp.createRoot = function(e, t) {
      if (!ye(e))
        throw Error("Target container is not a DOM element.");
      uv(e);
      var a = !1, i = "", r = Ly, f = w0, p = td, b = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === zi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (r = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (p = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (b = t.unstable_transitionCallbacks)), t = qm(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        r,
        f,
        p,
        b,
        null
      ), e[wi] = t.current, gm(e), new Jd(t);
    }, Qp.hydrateRoot = function(e, t, a) {
      if (!ye(e))
        throw Error("Target container is not a DOM element.");
      uv(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, r = "", f = Ly, p = w0, b = td, M = null, R = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (r = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (p = a.onCaughtError), a.onRecoverableError !== void 0 && (b = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (M = a.unstable_transitionCallbacks), a.formState !== void 0 && (R = a.formState)), t = qm(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        r,
        f,
        p,
        b,
        M,
        R
      ), t.context = Ym(null), a = t.current, i = ha(a), i = $n(i), r = Cl(i), r.callback = null, rl(a, r, i), a = i, t.current.lanes = a, no(t, a), $a(t), e[wi] = t.current, gm(e), new Cf(t);
    }, Qp.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Qp;
}
var oE;
function tR() {
  if (oE) return ng.exports;
  oE = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (c(), ng.exports = IA()) : ng.exports = eR(), ng.exports;
}
var nR = tR();
const aR = /* @__PURE__ */ n0(nR);
function sg(c, s) {
  return c == null || s == null ? NaN : c < s ? -1 : c > s ? 1 : c >= s ? 0 : NaN;
}
function lR(c, s) {
  return c == null || s == null ? NaN : s < c ? -1 : s > c ? 1 : s >= c ? 0 : NaN;
}
function Mg(c) {
  let s, h, m;
  c.length !== 2 ? (s = sg, h = (A, x) => sg(c(A), x), m = (A, x) => c(A) - x) : (s = c === sg || c === lR ? c : uR, h = c, m = c);
  function g(A, x, U = 0, q = A.length) {
    if (U < q) {
      if (s(x, x) !== 0) return q;
      do {
        const _ = U + q >>> 1;
        h(A[_], x) < 0 ? U = _ + 1 : q = _;
      } while (U < q);
    }
    return U;
  }
  function v(A, x, U = 0, q = A.length) {
    if (U < q) {
      if (s(x, x) !== 0) return q;
      do {
        const _ = U + q >>> 1;
        h(A[_], x) <= 0 ? U = _ + 1 : q = _;
      } while (U < q);
    }
    return U;
  }
  function T(A, x, U = 0, q = A.length) {
    const _ = g(A, x, U, q - 1);
    return _ > U && m(A[_ - 1], x) > -m(A[_], x) ? _ - 1 : _;
  }
  return { left: g, center: T, right: v };
}
function uR() {
  return 0;
}
function iR(c) {
  return c === null ? NaN : +c;
}
const cR = Mg(sg), oR = cR.right;
Mg(iR).center;
var TS = Math.sqrt(50), ES = Math.sqrt(10), xS = Math.sqrt(2);
function rR(c, s, h) {
  var m, g = -1, v, T, A;
  if (s = +s, c = +c, h = +h, c === s && h > 0) return [c];
  if ((m = s < c) && (v = c, c = s, s = v), (A = Px(c, s, h)) === 0 || !isFinite(A)) return [];
  if (A > 0) {
    let x = Math.round(c / A), U = Math.round(s / A);
    for (x * A < c && ++x, U * A > s && --U, T = new Array(v = U - x + 1); ++g < v; ) T[g] = (x + g) * A;
  } else {
    A = -A;
    let x = Math.round(c * A), U = Math.round(s * A);
    for (x / A < c && ++x, U / A > s && --U, T = new Array(v = U - x + 1); ++g < v; ) T[g] = (x + g) / A;
  }
  return m && T.reverse(), T;
}
function Px(c, s, h) {
  var m = (s - c) / Math.max(0, h), g = Math.floor(Math.log(m) / Math.LN10), v = m / Math.pow(10, g);
  return g >= 0 ? (v >= TS ? 10 : v >= ES ? 5 : v >= xS ? 2 : 1) * Math.pow(10, g) : -Math.pow(10, -g) / (v >= TS ? 10 : v >= ES ? 5 : v >= xS ? 2 : 1);
}
function MS(c, s, h) {
  var m = Math.abs(s - c) / Math.max(0, h), g = Math.pow(10, Math.floor(Math.log(m) / Math.LN10)), v = m / g;
  return v >= TS ? g *= 10 : v >= ES ? g *= 5 : v >= xS && (g *= 2), s < c ? -g : g;
}
function Ix(c, s) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(c);
      break;
    default:
      this.range(s).domain(c);
      break;
  }
  return this;
}
function Jh(c, s, h) {
  c.prototype = s.prototype = h, h.constructor = c;
}
function a0(c, s) {
  var h = Object.create(c.prototype);
  for (var m in s) h[m] = s[m];
  return h;
}
function Er() {
}
var ms = 0.7, Qh = 1 / ms, Vh = "\\s*([+-]?\\d+)\\s*", Ip = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Vi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", fR = /^#([0-9a-f]{3,8})$/, sR = new RegExp(`^rgb\\(${Vh},${Vh},${Vh}\\)$`), dR = new RegExp(`^rgb\\(${Vi},${Vi},${Vi}\\)$`), hR = new RegExp(`^rgba\\(${Vh},${Vh},${Vh},${Ip}\\)$`), yR = new RegExp(`^rgba\\(${Vi},${Vi},${Vi},${Ip}\\)$`), mR = new RegExp(`^hsl\\(${Ip},${Vi},${Vi}\\)$`), pR = new RegExp(`^hsla\\(${Ip},${Vi},${Vi},${Ip}\\)$`), rE = {
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
Jh(Er, e0, {
  copy(c) {
    return Object.assign(new this.constructor(), this, c);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: fE,
  // Deprecated! Use color.formatHex.
  formatHex: fE,
  formatHex8: vR,
  formatHsl: gR,
  formatRgb: sE,
  toString: sE
});
function fE() {
  return this.rgb().formatHex();
}
function vR() {
  return this.rgb().formatHex8();
}
function gR() {
  return eM(this).formatHsl();
}
function sE() {
  return this.rgb().formatRgb();
}
function e0(c) {
  var s, h;
  return c = (c + "").trim().toLowerCase(), (s = fR.exec(c)) ? (h = s[1].length, s = parseInt(s[1], 16), h === 6 ? dE(s) : h === 3 ? new Qn(s >> 8 & 15 | s >> 4 & 240, s >> 4 & 15 | s & 240, (s & 15) << 4 | s & 15, 1) : h === 8 ? lg(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, (s & 255) / 255) : h === 4 ? lg(s >> 12 & 15 | s >> 8 & 240, s >> 8 & 15 | s >> 4 & 240, s >> 4 & 15 | s & 240, ((s & 15) << 4 | s & 15) / 255) : null) : (s = sR.exec(c)) ? new Qn(s[1], s[2], s[3], 1) : (s = dR.exec(c)) ? new Qn(s[1] * 255 / 100, s[2] * 255 / 100, s[3] * 255 / 100, 1) : (s = hR.exec(c)) ? lg(s[1], s[2], s[3], s[4]) : (s = yR.exec(c)) ? lg(s[1] * 255 / 100, s[2] * 255 / 100, s[3] * 255 / 100, s[4]) : (s = mR.exec(c)) ? mE(s[1], s[2] / 100, s[3] / 100, 1) : (s = pR.exec(c)) ? mE(s[1], s[2] / 100, s[3] / 100, s[4]) : rE.hasOwnProperty(c) ? dE(rE[c]) : c === "transparent" ? new Qn(NaN, NaN, NaN, 0) : null;
}
function dE(c) {
  return new Qn(c >> 16 & 255, c >> 8 & 255, c & 255, 1);
}
function lg(c, s, h, m) {
  return m <= 0 && (c = s = h = NaN), new Qn(c, s, h, m);
}
function XS(c) {
  return c instanceof Er || (c = e0(c)), c ? (c = c.rgb(), new Qn(c.r, c.g, c.b, c.opacity)) : new Qn();
}
function AS(c, s, h, m) {
  return arguments.length === 1 ? XS(c) : new Qn(c, s, h, m ?? 1);
}
function Qn(c, s, h, m) {
  this.r = +c, this.g = +s, this.b = +h, this.opacity = +m;
}
Jh(Qn, AS, a0(Er, {
  brighter(c) {
    return c = c == null ? Qh : Math.pow(Qh, c), new Qn(this.r * c, this.g * c, this.b * c, this.opacity);
  },
  darker(c) {
    return c = c == null ? ms : Math.pow(ms, c), new Qn(this.r * c, this.g * c, this.b * c, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Qn(hs(this.r), hs(this.g), hs(this.b), dg(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: hE,
  // Deprecated! Use color.formatHex.
  formatHex: hE,
  formatHex8: bR,
  formatRgb: yE,
  toString: yE
}));
function hE() {
  return `#${ds(this.r)}${ds(this.g)}${ds(this.b)}`;
}
function bR() {
  return `#${ds(this.r)}${ds(this.g)}${ds(this.b)}${ds((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function yE() {
  const c = dg(this.opacity);
  return `${c === 1 ? "rgb(" : "rgba("}${hs(this.r)}, ${hs(this.g)}, ${hs(this.b)}${c === 1 ? ")" : `, ${c})`}`;
}
function dg(c) {
  return isNaN(c) ? 1 : Math.max(0, Math.min(1, c));
}
function hs(c) {
  return Math.max(0, Math.min(255, Math.round(c) || 0));
}
function ds(c) {
  return c = hs(c), (c < 16 ? "0" : "") + c.toString(16);
}
function mE(c, s, h, m) {
  return m <= 0 ? c = s = h = NaN : h <= 0 || h >= 1 ? c = s = NaN : s <= 0 && (c = NaN), new Ju(c, s, h, m);
}
function eM(c) {
  if (c instanceof Ju) return new Ju(c.h, c.s, c.l, c.opacity);
  if (c instanceof Er || (c = e0(c)), !c) return new Ju();
  if (c instanceof Ju) return c;
  c = c.rgb();
  var s = c.r / 255, h = c.g / 255, m = c.b / 255, g = Math.min(s, h, m), v = Math.max(s, h, m), T = NaN, A = v - g, x = (v + g) / 2;
  return A ? (s === v ? T = (h - m) / A + (h < m) * 6 : h === v ? T = (m - s) / A + 2 : T = (s - h) / A + 4, A /= x < 0.5 ? v + g : 2 - v - g, T *= 60) : A = x > 0 && x < 1 ? 0 : T, new Ju(T, A, x, c.opacity);
}
function RS(c, s, h, m) {
  return arguments.length === 1 ? eM(c) : new Ju(c, s, h, m ?? 1);
}
function Ju(c, s, h, m) {
  this.h = +c, this.s = +s, this.l = +h, this.opacity = +m;
}
Jh(Ju, RS, a0(Er, {
  brighter(c) {
    return c = c == null ? Qh : Math.pow(Qh, c), new Ju(this.h, this.s, this.l * c, this.opacity);
  },
  darker(c) {
    return c = c == null ? ms : Math.pow(ms, c), new Ju(this.h, this.s, this.l * c, this.opacity);
  },
  rgb() {
    var c = this.h % 360 + (this.h < 0) * 360, s = isNaN(c) || isNaN(this.s) ? 0 : this.s, h = this.l, m = h + (h < 0.5 ? h : 1 - h) * s, g = 2 * h - m;
    return new Qn(
      lb(c >= 240 ? c - 240 : c + 120, g, m),
      lb(c, g, m),
      lb(c < 120 ? c + 240 : c - 120, g, m),
      this.opacity
    );
  },
  clamp() {
    return new Ju(pE(this.h), ug(this.s), ug(this.l), dg(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const c = dg(this.opacity);
    return `${c === 1 ? "hsl(" : "hsla("}${pE(this.h)}, ${ug(this.s) * 100}%, ${ug(this.l) * 100}%${c === 1 ? ")" : `, ${c})`}`;
  }
}));
function pE(c) {
  return c = (c || 0) % 360, c < 0 ? c + 360 : c;
}
function ug(c) {
  return Math.max(0, Math.min(1, c || 0));
}
function lb(c, s, h) {
  return (c < 60 ? s + (h - s) * c / 60 : c < 180 ? h : c < 240 ? s + (h - s) * (240 - c) / 60 : s) * 255;
}
const tM = Math.PI / 180, nM = 180 / Math.PI, hg = 18, aM = 0.96422, lM = 1, uM = 0.82521, iM = 4 / 29, Xh = 6 / 29, cM = 3 * Xh * Xh, SR = Xh * Xh * Xh;
function oM(c) {
  if (c instanceof Xi) return new Xi(c.l, c.a, c.b, c.opacity);
  if (c instanceof Pc) return rM(c);
  c instanceof Qn || (c = XS(c));
  var s = ob(c.r), h = ob(c.g), m = ob(c.b), g = ub((0.2225045 * s + 0.7168786 * h + 0.0606169 * m) / lM), v, T;
  return s === h && h === m ? v = T = g : (v = ub((0.4360747 * s + 0.3850649 * h + 0.1430804 * m) / aM), T = ub((0.0139322 * s + 0.0971045 * h + 0.7141733 * m) / uM)), new Xi(116 * g - 16, 500 * (v - g), 200 * (g - T), c.opacity);
}
function OS(c, s, h, m) {
  return arguments.length === 1 ? oM(c) : new Xi(c, s, h, m ?? 1);
}
function Xi(c, s, h, m) {
  this.l = +c, this.a = +s, this.b = +h, this.opacity = +m;
}
Jh(Xi, OS, a0(Er, {
  brighter(c) {
    return new Xi(this.l + hg * (c ?? 1), this.a, this.b, this.opacity);
  },
  darker(c) {
    return new Xi(this.l - hg * (c ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var c = (this.l + 16) / 116, s = isNaN(this.a) ? c : c + this.a / 500, h = isNaN(this.b) ? c : c - this.b / 200;
    return s = aM * ib(s), c = lM * ib(c), h = uM * ib(h), new Qn(
      cb(3.1338561 * s - 1.6168667 * c - 0.4906146 * h),
      cb(-0.9787684 * s + 1.9161415 * c + 0.033454 * h),
      cb(0.0719453 * s - 0.2289914 * c + 1.4052427 * h),
      this.opacity
    );
  }
}));
function ub(c) {
  return c > SR ? Math.pow(c, 1 / 3) : c / cM + iM;
}
function ib(c) {
  return c > Xh ? c * c * c : cM * (c - iM);
}
function cb(c) {
  return 255 * (c <= 31308e-7 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);
}
function ob(c) {
  return (c /= 255) <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
function TR(c) {
  if (c instanceof Pc) return new Pc(c.h, c.c, c.l, c.opacity);
  if (c instanceof Xi || (c = oM(c)), c.a === 0 && c.b === 0) return new Pc(NaN, 0 < c.l && c.l < 100 ? 0 : NaN, c.l, c.opacity);
  var s = Math.atan2(c.b, c.a) * nM;
  return new Pc(s < 0 ? s + 360 : s, Math.sqrt(c.a * c.a + c.b * c.b), c.l, c.opacity);
}
function DS(c, s, h, m) {
  return arguments.length === 1 ? TR(c) : new Pc(c, s, h, m ?? 1);
}
function Pc(c, s, h, m) {
  this.h = +c, this.c = +s, this.l = +h, this.opacity = +m;
}
function rM(c) {
  if (isNaN(c.h)) return new Xi(c.l, 0, 0, c.opacity);
  var s = c.h * tM;
  return new Xi(c.l, Math.cos(s) * c.c, Math.sin(s) * c.c, c.opacity);
}
Jh(Pc, DS, a0(Er, {
  brighter(c) {
    return new Pc(this.h, this.c, this.l + hg * (c ?? 1), this.opacity);
  },
  darker(c) {
    return new Pc(this.h, this.c, this.l - hg * (c ?? 1), this.opacity);
  },
  rgb() {
    return rM(this).rgb();
  }
}));
var fM = -0.14861, QS = 1.78277, ZS = -0.29227, Ag = -0.90649, t0 = 1.97294, vE = t0 * Ag, gE = t0 * QS, bE = QS * ZS - Ag * fM;
function ER(c) {
  if (c instanceof ys) return new ys(c.h, c.s, c.l, c.opacity);
  c instanceof Qn || (c = XS(c));
  var s = c.r / 255, h = c.g / 255, m = c.b / 255, g = (bE * m + vE * s - gE * h) / (bE + vE - gE), v = m - g, T = (t0 * (h - g) - ZS * v) / Ag, A = Math.sqrt(T * T + v * v) / (t0 * g * (1 - g)), x = A ? Math.atan2(T, v) * nM - 120 : NaN;
  return new ys(x < 0 ? x + 360 : x, A, g, c.opacity);
}
function zS(c, s, h, m) {
  return arguments.length === 1 ? ER(c) : new ys(c, s, h, m ?? 1);
}
function ys(c, s, h, m) {
  this.h = +c, this.s = +s, this.l = +h, this.opacity = +m;
}
Jh(ys, zS, a0(Er, {
  brighter(c) {
    return c = c == null ? Qh : Math.pow(Qh, c), new ys(this.h, this.s, this.l * c, this.opacity);
  },
  darker(c) {
    return c = c == null ? ms : Math.pow(ms, c), new ys(this.h, this.s, this.l * c, this.opacity);
  },
  rgb() {
    var c = isNaN(this.h) ? 0 : (this.h + 120) * tM, s = +this.l, h = isNaN(this.s) ? 0 : this.s * s * (1 - s), m = Math.cos(c), g = Math.sin(c);
    return new Qn(
      255 * (s + h * (fM * m + QS * g)),
      255 * (s + h * (ZS * m + Ag * g)),
      255 * (s + h * (t0 * m)),
      this.opacity
    );
  }
}));
const Rg = (c) => () => c;
function sM(c, s) {
  return function(h) {
    return c + h * s;
  };
}
function xR(c, s, h) {
  return c = Math.pow(c, h), s = Math.pow(s, h) - c, h = 1 / h, function(m) {
    return Math.pow(c + m * s, h);
  };
}
function kS(c, s) {
  var h = s - c;
  return h ? sM(c, h > 180 || h < -180 ? h - 360 * Math.round(h / 360) : h) : Rg(isNaN(c) ? s : c);
}
function MR(c) {
  return (c = +c) == 1 ? Zn : function(s, h) {
    return h - s ? xR(s, h, c) : Rg(isNaN(s) ? h : s);
  };
}
function Zn(c, s) {
  var h = s - c;
  return h ? sM(c, h) : Rg(isNaN(c) ? s : c);
}
const CS = function c(s) {
  var h = MR(s);
  function m(g, v) {
    var T = h((g = AS(g)).r, (v = AS(v)).r), A = h(g.g, v.g), x = h(g.b, v.b), U = Zn(g.opacity, v.opacity);
    return function(q) {
      return g.r = T(q), g.g = A(q), g.b = x(q), g.opacity = U(q), g + "";
    };
  }
  return m.gamma = c, m;
}(1);
function AR(c, s) {
  s || (s = []);
  var h = c ? Math.min(s.length, c.length) : 0, m = s.slice(), g;
  return function(v) {
    for (g = 0; g < h; ++g) m[g] = c[g] * (1 - v) + s[g] * v;
    return m;
  };
}
function RR(c) {
  return ArrayBuffer.isView(c) && !(c instanceof DataView);
}
function OR(c, s) {
  var h = s ? s.length : 0, m = c ? Math.min(h, c.length) : 0, g = new Array(m), v = new Array(h), T;
  for (T = 0; T < m; ++T) g[T] = $S(c[T], s[T]);
  for (; T < h; ++T) v[T] = s[T];
  return function(A) {
    for (T = 0; T < m; ++T) v[T] = g[T](A);
    return v;
  };
}
function DR(c, s) {
  var h = /* @__PURE__ */ new Date();
  return c = +c, s = +s, function(m) {
    return h.setTime(c * (1 - m) + s * m), h;
  };
}
function yg(c, s) {
  return c = +c, s = +s, function(h) {
    return c * (1 - h) + s * h;
  };
}
function zR(c, s) {
  var h = {}, m = {}, g;
  (c === null || typeof c != "object") && (c = {}), (s === null || typeof s != "object") && (s = {});
  for (g in s)
    g in c ? h[g] = $S(c[g], s[g]) : m[g] = s[g];
  return function(v) {
    for (g in h) m[g] = h[g](v);
    return m;
  };
}
var US = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, rb = new RegExp(US.source, "g");
function CR(c) {
  return function() {
    return c;
  };
}
function UR(c) {
  return function(s) {
    return c(s) + "";
  };
}
function HR(c, s) {
  var h = US.lastIndex = rb.lastIndex = 0, m, g, v, T = -1, A = [], x = [];
  for (c = c + "", s = s + ""; (m = US.exec(c)) && (g = rb.exec(s)); )
    (v = g.index) > h && (v = s.slice(h, v), A[T] ? A[T] += v : A[++T] = v), (m = m[0]) === (g = g[0]) ? A[T] ? A[T] += g : A[++T] = g : (A[++T] = null, x.push({ i: T, x: yg(m, g) })), h = rb.lastIndex;
  return h < s.length && (v = s.slice(h), A[T] ? A[T] += v : A[++T] = v), A.length < 2 ? x[0] ? UR(x[0].x) : CR(s) : (s = x.length, function(U) {
    for (var q = 0, _; q < s; ++q) A[(_ = x[q]).i] = _.x(U);
    return A.join("");
  });
}
function $S(c, s) {
  var h = typeof s, m;
  return s == null || h === "boolean" ? Rg(s) : (h === "number" ? yg : h === "string" ? (m = e0(s)) ? (s = m, CS) : HR : s instanceof e0 ? CS : s instanceof Date ? DR : RR(s) ? AR : Array.isArray(s) ? OR : typeof s.valueOf != "function" && typeof s.toString != "function" || isNaN(s) ? zR : yg)(c, s);
}
function dM(c, s) {
  return c = +c, s = +s, function(h) {
    return Math.round(c * (1 - h) + s * h);
  };
}
function hM(c) {
  return function(s, h) {
    var m = c((s = RS(s)).h, (h = RS(h)).h), g = Zn(s.s, h.s), v = Zn(s.l, h.l), T = Zn(s.opacity, h.opacity);
    return function(A) {
      return s.h = m(A), s.s = g(A), s.l = v(A), s.opacity = T(A), s + "";
    };
  };
}
const _R = hM(kS);
var wR = hM(Zn);
function NR(c, s) {
  var h = Zn((c = OS(c)).l, (s = OS(s)).l), m = Zn(c.a, s.a), g = Zn(c.b, s.b), v = Zn(c.opacity, s.opacity);
  return function(T) {
    return c.l = h(T), c.a = m(T), c.b = g(T), c.opacity = v(T), c + "";
  };
}
function yM(c) {
  return function(s, h) {
    var m = c((s = DS(s)).h, (h = DS(h)).h), g = Zn(s.c, h.c), v = Zn(s.l, h.l), T = Zn(s.opacity, h.opacity);
    return function(A) {
      return s.h = m(A), s.c = g(A), s.l = v(A), s.opacity = T(A), s + "";
    };
  };
}
const qR = yM(kS);
var YR = yM(Zn);
function mM(c) {
  return function s(h) {
    h = +h;
    function m(g, v) {
      var T = c((g = zS(g)).h, (v = zS(v)).h), A = Zn(g.s, v.s), x = Zn(g.l, v.l), U = Zn(g.opacity, v.opacity);
      return function(q) {
        return g.h = T(q), g.s = A(q), g.l = x(Math.pow(q, h)), g.opacity = U(q), g + "";
      };
    }
    return m.gamma = s, m;
  }(1);
}
const jR = mM(kS);
var BR = mM(Zn);
function LR(c) {
  return function() {
    return c;
  };
}
function GR(c) {
  return +c;
}
var SE = [0, 1];
function Gh(c) {
  return c;
}
function HS(c, s) {
  return (s -= c = +c) ? function(h) {
    return (h - c) / s;
  } : LR(isNaN(s) ? NaN : 0.5);
}
function VR(c, s) {
  var h;
  return c > s && (h = c, c = s, s = h), function(m) {
    return Math.max(c, Math.min(s, m));
  };
}
function XR(c, s, h) {
  var m = c[0], g = c[1], v = s[0], T = s[1];
  return g < m ? (m = HS(g, m), v = h(T, v)) : (m = HS(m, g), v = h(v, T)), function(A) {
    return v(m(A));
  };
}
function QR(c, s, h) {
  var m = Math.min(c.length, s.length) - 1, g = new Array(m), v = new Array(m), T = -1;
  for (c[m] < c[0] && (c = c.slice().reverse(), s = s.slice().reverse()); ++T < m; )
    g[T] = HS(c[T], c[T + 1]), v[T] = h(s[T], s[T + 1]);
  return function(A) {
    var x = oR(c, A, 1, m) - 1;
    return v[x](g[x](A));
  };
}
function pM(c, s) {
  return s.domain(c.domain()).range(c.range()).interpolate(c.interpolate()).clamp(c.clamp()).unknown(c.unknown());
}
function ZR() {
  var c = SE, s = SE, h = $S, m, g, v, T = Gh, A, x, U;
  function q() {
    var Y = Math.min(c.length, s.length);
    return T !== Gh && (T = VR(c[0], c[Y - 1])), A = Y > 2 ? QR : XR, x = U = null, _;
  }
  function _(Y) {
    return Y == null || isNaN(Y = +Y) ? v : (x || (x = A(c.map(m), s, h)))(m(T(Y)));
  }
  return _.invert = function(Y) {
    return T(g((U || (U = A(s, c.map(m), yg)))(Y)));
  }, _.domain = function(Y) {
    return arguments.length ? (c = Array.from(Y, GR), q()) : c.slice();
  }, _.range = function(Y) {
    return arguments.length ? (s = Array.from(Y), q()) : s.slice();
  }, _.rangeRound = function(Y) {
    return s = Array.from(Y), h = dM, q();
  }, _.clamp = function(Y) {
    return arguments.length ? (T = Y ? !0 : Gh, q()) : T !== Gh;
  }, _.interpolate = function(Y) {
    return arguments.length ? (h = Y, q()) : h;
  }, _.unknown = function(Y) {
    return arguments.length ? (v = Y, _) : v;
  }, function(Y, ce) {
    return m = Y, g = ce, q();
  };
}
function vM() {
  return ZR()(Gh, Gh);
}
function kR(c) {
  return Math.abs(c = Math.round(c)) >= 1e21 ? c.toLocaleString("en").replace(/,/g, "") : c.toString(10);
}
function mg(c, s) {
  if ((h = (c = s ? c.toExponential(s - 1) : c.toExponential()).indexOf("e")) < 0) return null;
  var h, m = c.slice(0, h);
  return [
    m.length > 1 ? m[0] + m.slice(2) : m,
    +c.slice(h + 1)
  ];
}
function Zh(c) {
  return c = mg(Math.abs(c)), c ? c[1] : NaN;
}
function $R(c, s) {
  return function(h, m) {
    for (var g = h.length, v = [], T = 0, A = c[0], x = 0; g > 0 && A > 0 && (x + A + 1 > m && (A = Math.max(1, m - x)), v.push(h.substring(g -= A, g + A)), !((x += A + 1) > m)); )
      A = c[T = (T + 1) % c.length];
    return v.reverse().join(s);
  };
}
function JR(c) {
  return function(s) {
    return s.replace(/[0-9]/g, function(h) {
      return c[+h];
    });
  };
}
var KR = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function pg(c) {
  if (!(s = KR.exec(c))) throw new Error("invalid format: " + c);
  var s;
  return new JS({
    fill: s[1],
    align: s[2],
    sign: s[3],
    symbol: s[4],
    zero: s[5],
    width: s[6],
    comma: s[7],
    precision: s[8] && s[8].slice(1),
    trim: s[9],
    type: s[10]
  });
}
pg.prototype = JS.prototype;
function JS(c) {
  this.fill = c.fill === void 0 ? " " : c.fill + "", this.align = c.align === void 0 ? ">" : c.align + "", this.sign = c.sign === void 0 ? "-" : c.sign + "", this.symbol = c.symbol === void 0 ? "" : c.symbol + "", this.zero = !!c.zero, this.width = c.width === void 0 ? void 0 : +c.width, this.comma = !!c.comma, this.precision = c.precision === void 0 ? void 0 : +c.precision, this.trim = !!c.trim, this.type = c.type === void 0 ? "" : c.type + "";
}
JS.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function WR(c) {
  e: for (var s = c.length, h = 1, m = -1, g; h < s; ++h)
    switch (c[h]) {
      case ".":
        m = g = h;
        break;
      case "0":
        m === 0 && (m = h), g = h;
        break;
      default:
        if (!+c[h]) break e;
        m > 0 && (m = 0);
        break;
    }
  return m > 0 ? c.slice(0, m) + c.slice(g + 1) : c;
}
var gM;
function FR(c, s) {
  var h = mg(c, s);
  if (!h) return c + "";
  var m = h[0], g = h[1], v = g - (gM = Math.max(-8, Math.min(8, Math.floor(g / 3))) * 3) + 1, T = m.length;
  return v === T ? m : v > T ? m + new Array(v - T + 1).join("0") : v > 0 ? m.slice(0, v) + "." + m.slice(v) : "0." + new Array(1 - v).join("0") + mg(c, Math.max(0, s + v - 1))[0];
}
function TE(c, s) {
  var h = mg(c, s);
  if (!h) return c + "";
  var m = h[0], g = h[1];
  return g < 0 ? "0." + new Array(-g).join("0") + m : m.length > g + 1 ? m.slice(0, g + 1) + "." + m.slice(g + 1) : m + new Array(g - m.length + 2).join("0");
}
const EE = {
  "%": (c, s) => (c * 100).toFixed(s),
  b: (c) => Math.round(c).toString(2),
  c: (c) => c + "",
  d: kR,
  e: (c, s) => c.toExponential(s),
  f: (c, s) => c.toFixed(s),
  g: (c, s) => c.toPrecision(s),
  o: (c) => Math.round(c).toString(8),
  p: (c, s) => TE(c * 100, s),
  r: TE,
  s: FR,
  X: (c) => Math.round(c).toString(16).toUpperCase(),
  x: (c) => Math.round(c).toString(16)
};
function xE(c) {
  return c;
}
var ME = Array.prototype.map, AE = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function PR(c) {
  var s = c.grouping === void 0 || c.thousands === void 0 ? xE : $R(ME.call(c.grouping, Number), c.thousands + ""), h = c.currency === void 0 ? "" : c.currency[0] + "", m = c.currency === void 0 ? "" : c.currency[1] + "", g = c.decimal === void 0 ? "." : c.decimal + "", v = c.numerals === void 0 ? xE : JR(ME.call(c.numerals, String)), T = c.percent === void 0 ? "%" : c.percent + "", A = c.minus === void 0 ? "−" : c.minus + "", x = c.nan === void 0 ? "NaN" : c.nan + "";
  function U(_) {
    _ = pg(_);
    var Y = _.fill, ce = _.align, pe = _.sign, ge = _.symbol, ye = _.zero, Se = _.width, me = _.comma, P = _.precision, ne = _.trim, k = _.type;
    k === "n" ? (me = !0, k = "g") : EE[k] || (P === void 0 && (P = 12), ne = !0, k = "g"), (ye || Y === "0" && ce === "=") && (ye = !0, Y = "0", ce = "=");
    var ie = ge === "$" ? h : ge === "#" && /[boxX]/.test(k) ? "0" + k.toLowerCase() : "", ve = ge === "$" ? m : /[%p]/.test(k) ? T : "", He = EE[k], fe = /[defgprs%]/.test(k);
    P = P === void 0 ? 6 : /[gprs]/.test(k) ? Math.max(1, Math.min(21, P)) : Math.max(0, Math.min(20, P));
    function Ve(de) {
      var Te = ie, _e = ve, qe, et, C;
      if (k === "c")
        _e = He(de) + _e, de = "";
      else {
        de = +de;
        var K = de < 0 || 1 / de < 0;
        if (de = isNaN(de) ? x : He(Math.abs(de), P), ne && (de = WR(de)), K && +de == 0 && pe !== "+" && (K = !1), Te = (K ? pe === "(" ? pe : A : pe === "-" || pe === "(" ? "" : pe) + Te, _e = (k === "s" ? AE[8 + gM / 3] : "") + _e + (K && pe === "(" ? ")" : ""), fe) {
          for (qe = -1, et = de.length; ++qe < et; )
            if (C = de.charCodeAt(qe), 48 > C || C > 57) {
              _e = (C === 46 ? g + de.slice(qe + 1) : de.slice(qe)) + _e, de = de.slice(0, qe);
              break;
            }
        }
      }
      me && !ye && (de = s(de, 1 / 0));
      var oe = Te.length + de.length + _e.length, Me = oe < Se ? new Array(Se - oe + 1).join(Y) : "";
      switch (me && ye && (de = s(Me + de, Me.length ? Se - _e.length : 1 / 0), Me = ""), ce) {
        case "<":
          de = Te + de + _e + Me;
          break;
        case "=":
          de = Te + Me + de + _e;
          break;
        case "^":
          de = Me.slice(0, oe = Me.length >> 1) + Te + de + _e + Me.slice(oe);
          break;
        default:
          de = Me + Te + de + _e;
          break;
      }
      return v(de);
    }
    return Ve.toString = function() {
      return _ + "";
    }, Ve;
  }
  function q(_, Y) {
    var ce = U((_ = pg(_), _.type = "f", _)), pe = Math.max(-8, Math.min(8, Math.floor(Zh(Y) / 3))) * 3, ge = Math.pow(10, -pe), ye = AE[8 + pe / 3];
    return function(Se) {
      return ce(ge * Se) + ye;
    };
  }
  return {
    format: U,
    formatPrefix: q
  };
}
var ig, bM, SM;
IR({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function IR(c) {
  return ig = PR(c), bM = ig.format, SM = ig.formatPrefix, ig;
}
function eO(c) {
  return Math.max(0, -Zh(Math.abs(c)));
}
function tO(c, s) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Zh(s) / 3))) * 3 - Zh(Math.abs(c)));
}
function nO(c, s) {
  return c = Math.abs(c), s = Math.abs(s) - c, Math.max(0, Zh(s) - Zh(c)) + 1;
}
function aO(c, s, h, m) {
  var g = MS(c, s, h), v;
  switch (m = pg(m ?? ",f"), m.type) {
    case "s": {
      var T = Math.max(Math.abs(c), Math.abs(s));
      return m.precision == null && !isNaN(v = tO(g, T)) && (m.precision = v), SM(m, T);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      m.precision == null && !isNaN(v = nO(g, Math.max(Math.abs(c), Math.abs(s)))) && (m.precision = v - (m.type === "e"));
      break;
    }
    case "f":
    case "%": {
      m.precision == null && !isNaN(v = eO(g)) && (m.precision = v - (m.type === "%") * 2);
      break;
    }
  }
  return bM(m);
}
function lO(c) {
  var s = c.domain;
  return c.ticks = function(h) {
    var m = s();
    return rR(m[0], m[m.length - 1], h ?? 10);
  }, c.tickFormat = function(h, m) {
    var g = s();
    return aO(g[0], g[g.length - 1], h ?? 10, m);
  }, c.nice = function(h) {
    h == null && (h = 10);
    var m = s(), g = 0, v = m.length - 1, T = m[g], A = m[v], x, U, q = 10;
    for (A < T && (U = T, T = A, A = U, U = g, g = v, v = U); q-- > 0; ) {
      if (U = Px(T, A, h), U === x)
        return m[g] = T, m[v] = A, s(m);
      if (U > 0)
        T = Math.floor(T / U) * U, A = Math.ceil(A / U) * U;
      else if (U < 0)
        T = Math.ceil(T * U) / U, A = Math.floor(A * U) / U;
      else
        break;
      x = U;
    }
    return c;
  }, c;
}
function TM() {
  var c = vM();
  return c.copy = function() {
    return pM(c, TM());
  }, Ix.apply(c, arguments), lO(c);
}
function uO(c, s) {
  c = c.slice();
  var h = 0, m = c.length - 1, g = c[h], v = c[m], T;
  return v < g && (T = h, h = m, m = T, T = g, g = v, v = T), c[h] = s.floor(g), c[m] = s.ceil(v), c;
}
const fb = /* @__PURE__ */ new Date(), sb = /* @__PURE__ */ new Date();
function Nn(c, s, h, m) {
  function g(v) {
    return c(v = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+v)), v;
  }
  return g.floor = (v) => (c(v = /* @__PURE__ */ new Date(+v)), v), g.ceil = (v) => (c(v = new Date(v - 1)), s(v, 1), c(v), v), g.round = (v) => {
    const T = g(v), A = g.ceil(v);
    return v - T < A - v ? T : A;
  }, g.offset = (v, T) => (s(v = /* @__PURE__ */ new Date(+v), T == null ? 1 : Math.floor(T)), v), g.range = (v, T, A) => {
    const x = [];
    if (v = g.ceil(v), A = A == null ? 1 : Math.floor(A), !(v < T) || !(A > 0)) return x;
    let U;
    do
      x.push(U = /* @__PURE__ */ new Date(+v)), s(v, A), c(v);
    while (U < v && v < T);
    return x;
  }, g.filter = (v) => Nn((T) => {
    if (T >= T) for (; c(T), !v(T); ) T.setTime(T - 1);
  }, (T, A) => {
    if (T >= T)
      if (A < 0) for (; ++A <= 0; )
        for (; s(T, -1), !v(T); )
          ;
      else for (; --A >= 0; )
        for (; s(T, 1), !v(T); )
          ;
  }), h && (g.count = (v, T) => (fb.setTime(+v), sb.setTime(+T), c(fb), c(sb), Math.floor(h(fb, sb))), g.every = (v) => (v = Math.floor(v), !isFinite(v) || !(v > 0) ? null : v > 1 ? g.filter(m ? (T) => m(T) % v === 0 : (T) => g.count(0, T) % v === 0) : g)), g;
}
const vg = Nn(() => {
}, (c, s) => {
  c.setTime(+c + s);
}, (c, s) => s - c);
vg.every = (c) => (c = Math.floor(c), !isFinite(c) || !(c > 0) ? null : c > 1 ? Nn((s) => {
  s.setTime(Math.floor(s / c) * c);
}, (s, h) => {
  s.setTime(+s + h * c);
}, (s, h) => (h - s) / c) : vg);
vg.range;
const Ic = 1e3, hu = Ic * 60, eo = hu * 60, to = eo * 24, KS = to * 7, RE = to * 30, db = to * 365, Sr = Nn((c) => {
  c.setTime(c - c.getMilliseconds());
}, (c, s) => {
  c.setTime(+c + s * Ic);
}, (c, s) => (s - c) / Ic, (c) => c.getUTCSeconds());
Sr.range;
const Og = Nn((c) => {
  c.setTime(c - c.getMilliseconds() - c.getSeconds() * Ic);
}, (c, s) => {
  c.setTime(+c + s * hu);
}, (c, s) => (s - c) / hu, (c) => c.getMinutes());
Og.range;
const EM = Nn((c) => {
  c.setUTCSeconds(0, 0);
}, (c, s) => {
  c.setTime(+c + s * hu);
}, (c, s) => (s - c) / hu, (c) => c.getUTCMinutes());
EM.range;
const Dg = Nn((c) => {
  c.setTime(c - c.getMilliseconds() - c.getSeconds() * Ic - c.getMinutes() * hu);
}, (c, s) => {
  c.setTime(+c + s * eo);
}, (c, s) => (s - c) / eo, (c) => c.getHours());
Dg.range;
const xM = Nn((c) => {
  c.setUTCMinutes(0, 0, 0);
}, (c, s) => {
  c.setTime(+c + s * eo);
}, (c, s) => (s - c) / eo, (c) => c.getUTCHours());
xM.range;
const Kh = Nn(
  (c) => c.setHours(0, 0, 0, 0),
  (c, s) => c.setDate(c.getDate() + s),
  (c, s) => (s - c - (s.getTimezoneOffset() - c.getTimezoneOffset()) * hu) / to,
  (c) => c.getDate() - 1
);
Kh.range;
const zg = Nn((c) => {
  c.setUTCHours(0, 0, 0, 0);
}, (c, s) => {
  c.setUTCDate(c.getUTCDate() + s);
}, (c, s) => (s - c) / to, (c) => c.getUTCDate() - 1);
zg.range;
const iO = Nn((c) => {
  c.setUTCHours(0, 0, 0, 0);
}, (c, s) => {
  c.setUTCDate(c.getUTCDate() + s);
}, (c, s) => (s - c) / to, (c) => Math.floor(c / to));
iO.range;
function ps(c) {
  return Nn((s) => {
    s.setDate(s.getDate() - (s.getDay() + 7 - c) % 7), s.setHours(0, 0, 0, 0);
  }, (s, h) => {
    s.setDate(s.getDate() + h * 7);
  }, (s, h) => (h - s - (h.getTimezoneOffset() - s.getTimezoneOffset()) * hu) / KS);
}
const l0 = ps(0), gg = ps(1), cO = ps(2), oO = ps(3), kh = ps(4), rO = ps(5), fO = ps(6);
l0.range;
gg.range;
cO.range;
oO.range;
kh.range;
rO.range;
fO.range;
function vs(c) {
  return Nn((s) => {
    s.setUTCDate(s.getUTCDate() - (s.getUTCDay() + 7 - c) % 7), s.setUTCHours(0, 0, 0, 0);
  }, (s, h) => {
    s.setUTCDate(s.getUTCDate() + h * 7);
  }, (s, h) => (h - s) / KS);
}
const WS = vs(0), bg = vs(1), sO = vs(2), dO = vs(3), $h = vs(4), hO = vs(5), yO = vs(6);
WS.range;
bg.range;
sO.range;
dO.range;
$h.range;
hO.range;
yO.range;
const Cg = Nn((c) => {
  c.setDate(1), c.setHours(0, 0, 0, 0);
}, (c, s) => {
  c.setMonth(c.getMonth() + s);
}, (c, s) => s.getMonth() - c.getMonth() + (s.getFullYear() - c.getFullYear()) * 12, (c) => c.getMonth());
Cg.range;
const MM = Nn((c) => {
  c.setUTCDate(1), c.setUTCHours(0, 0, 0, 0);
}, (c, s) => {
  c.setUTCMonth(c.getUTCMonth() + s);
}, (c, s) => s.getUTCMonth() - c.getUTCMonth() + (s.getUTCFullYear() - c.getUTCFullYear()) * 12, (c) => c.getUTCMonth());
MM.range;
const Qi = Nn((c) => {
  c.setMonth(0, 1), c.setHours(0, 0, 0, 0);
}, (c, s) => {
  c.setFullYear(c.getFullYear() + s);
}, (c, s) => s.getFullYear() - c.getFullYear(), (c) => c.getFullYear());
Qi.every = (c) => !isFinite(c = Math.floor(c)) || !(c > 0) ? null : Nn((s) => {
  s.setFullYear(Math.floor(s.getFullYear() / c) * c), s.setMonth(0, 1), s.setHours(0, 0, 0, 0);
}, (s, h) => {
  s.setFullYear(s.getFullYear() + h * c);
});
Qi.range;
const Tr = Nn((c) => {
  c.setUTCMonth(0, 1), c.setUTCHours(0, 0, 0, 0);
}, (c, s) => {
  c.setUTCFullYear(c.getUTCFullYear() + s);
}, (c, s) => s.getUTCFullYear() - c.getUTCFullYear(), (c) => c.getUTCFullYear());
Tr.every = (c) => !isFinite(c = Math.floor(c)) || !(c > 0) ? null : Nn((s) => {
  s.setUTCFullYear(Math.floor(s.getUTCFullYear() / c) * c), s.setUTCMonth(0, 1), s.setUTCHours(0, 0, 0, 0);
}, (s, h) => {
  s.setUTCFullYear(s.getUTCFullYear() + h * c);
});
Tr.range;
function mO(c, s, h, m, g, v) {
  const T = [
    [Sr, 1, Ic],
    [Sr, 5, 5 * Ic],
    [Sr, 15, 15 * Ic],
    [Sr, 30, 30 * Ic],
    [v, 1, hu],
    [v, 5, 5 * hu],
    [v, 15, 15 * hu],
    [v, 30, 30 * hu],
    [g, 1, eo],
    [g, 3, 3 * eo],
    [g, 6, 6 * eo],
    [g, 12, 12 * eo],
    [m, 1, to],
    [m, 2, 2 * to],
    [h, 1, KS],
    [s, 1, RE],
    [s, 3, 3 * RE],
    [c, 1, db]
  ];
  function A(U, q, _) {
    const Y = q < U;
    Y && ([U, q] = [q, U]);
    const ce = _ && typeof _.range == "function" ? _ : x(U, q, _), pe = ce ? ce.range(U, +q + 1) : [];
    return Y ? pe.reverse() : pe;
  }
  function x(U, q, _) {
    const Y = Math.abs(q - U) / _, ce = Mg(([, , ye]) => ye).right(T, Y);
    if (ce === T.length) return c.every(MS(U / db, q / db, _));
    if (ce === 0) return vg.every(Math.max(MS(U, q, _), 1));
    const [pe, ge] = T[Y / T[ce - 1][2] < T[ce][2] / Y ? ce - 1 : ce];
    return pe.every(ge);
  }
  return [A, x];
}
const [pO, vO] = mO(Qi, Cg, l0, Kh, Dg, Og);
function hb(c) {
  if (0 <= c.y && c.y < 100) {
    var s = new Date(-1, c.m, c.d, c.H, c.M, c.S, c.L);
    return s.setFullYear(c.y), s;
  }
  return new Date(c.y, c.m, c.d, c.H, c.M, c.S, c.L);
}
function yb(c) {
  if (0 <= c.y && c.y < 100) {
    var s = new Date(Date.UTC(-1, c.m, c.d, c.H, c.M, c.S, c.L));
    return s.setUTCFullYear(c.y), s;
  }
  return new Date(Date.UTC(c.y, c.m, c.d, c.H, c.M, c.S, c.L));
}
function Zp(c, s, h) {
  return { y: c, m: s, d: h, H: 0, M: 0, S: 0, L: 0 };
}
function gO(c) {
  var s = c.dateTime, h = c.date, m = c.time, g = c.periods, v = c.days, T = c.shortDays, A = c.months, x = c.shortMonths, U = kp(g), q = $p(g), _ = kp(v), Y = $p(v), ce = kp(T), pe = $p(T), ge = kp(A), ye = $p(A), Se = kp(x), me = $p(x), P = {
    a: K,
    A: oe,
    b: Me,
    B: O,
    c: null,
    d: HE,
    e: HE,
    f: GO,
    g: FO,
    G: IO,
    H: jO,
    I: BO,
    j: LO,
    L: AM,
    m: VO,
    M: XO,
    p: $,
    q: le,
    Q: NE,
    s: qE,
    S: QO,
    u: ZO,
    U: kO,
    V: $O,
    w: JO,
    W: KO,
    x: null,
    X: null,
    y: WO,
    Y: PO,
    Z: e3,
    "%": wE
  }, ne = {
    a: se,
    A: be,
    b: De,
    B: Ae,
    c: null,
    d: _E,
    e: _E,
    f: l3,
    g: y3,
    G: p3,
    H: t3,
    I: n3,
    j: a3,
    L: OM,
    m: u3,
    M: i3,
    p: Xe,
    q: we,
    Q: NE,
    s: qE,
    S: c3,
    u: o3,
    U: r3,
    V: f3,
    w: s3,
    W: d3,
    x: null,
    X: null,
    y: h3,
    Y: m3,
    Z: v3,
    "%": wE
  }, k = {
    a: Ve,
    A: de,
    b: Te,
    B: _e,
    c: qe,
    d: CE,
    e: CE,
    f: wO,
    g: zE,
    G: DE,
    H: UE,
    I: UE,
    j: CO,
    L: _O,
    m: zO,
    M: UO,
    p: fe,
    q: DO,
    Q: qO,
    s: YO,
    S: HO,
    u: xO,
    U: MO,
    V: AO,
    w: EO,
    W: RO,
    x: et,
    X: C,
    y: zE,
    Y: DE,
    Z: OO,
    "%": NO
  };
  P.x = ie(h, P), P.X = ie(m, P), P.c = ie(s, P), ne.x = ie(h, ne), ne.X = ie(m, ne), ne.c = ie(s, ne);
  function ie(re, Ee) {
    return function(Ye) {
      var L = [], ht = -1, rt = 0, hn = re.length, Ft, Pt, Ku;
      for (Ye instanceof Date || (Ye = /* @__PURE__ */ new Date(+Ye)); ++ht < hn; )
        re.charCodeAt(ht) === 37 && (L.push(re.slice(rt, ht)), (Pt = OE[Ft = re.charAt(++ht)]) != null ? Ft = re.charAt(++ht) : Pt = Ft === "e" ? " " : "0", (Ku = Ee[Ft]) && (Ft = Ku(Ye, Pt)), L.push(Ft), rt = ht + 1);
      return L.push(re.slice(rt, ht)), L.join("");
    };
  }
  function ve(re, Ee) {
    return function(Ye) {
      var L = Zp(1900, void 0, 1), ht = He(L, re, Ye += "", 0), rt, hn;
      if (ht != Ye.length) return null;
      if ("Q" in L) return new Date(L.Q);
      if ("s" in L) return new Date(L.s * 1e3 + ("L" in L ? L.L : 0));
      if (Ee && !("Z" in L) && (L.Z = 0), "p" in L && (L.H = L.H % 12 + L.p * 12), L.m === void 0 && (L.m = "q" in L ? L.q : 0), "V" in L) {
        if (L.V < 1 || L.V > 53) return null;
        "w" in L || (L.w = 1), "Z" in L ? (rt = yb(Zp(L.y, 0, 1)), hn = rt.getUTCDay(), rt = hn > 4 || hn === 0 ? bg.ceil(rt) : bg(rt), rt = zg.offset(rt, (L.V - 1) * 7), L.y = rt.getUTCFullYear(), L.m = rt.getUTCMonth(), L.d = rt.getUTCDate() + (L.w + 6) % 7) : (rt = hb(Zp(L.y, 0, 1)), hn = rt.getDay(), rt = hn > 4 || hn === 0 ? gg.ceil(rt) : gg(rt), rt = Kh.offset(rt, (L.V - 1) * 7), L.y = rt.getFullYear(), L.m = rt.getMonth(), L.d = rt.getDate() + (L.w + 6) % 7);
      } else ("W" in L || "U" in L) && ("w" in L || (L.w = "u" in L ? L.u % 7 : "W" in L ? 1 : 0), hn = "Z" in L ? yb(Zp(L.y, 0, 1)).getUTCDay() : hb(Zp(L.y, 0, 1)).getDay(), L.m = 0, L.d = "W" in L ? (L.w + 6) % 7 + L.W * 7 - (hn + 5) % 7 : L.w + L.U * 7 - (hn + 6) % 7);
      return "Z" in L ? (L.H += L.Z / 100 | 0, L.M += L.Z % 100, yb(L)) : hb(L);
    };
  }
  function He(re, Ee, Ye, L) {
    for (var ht = 0, rt = Ee.length, hn = Ye.length, Ft, Pt; ht < rt; ) {
      if (L >= hn) return -1;
      if (Ft = Ee.charCodeAt(ht++), Ft === 37) {
        if (Ft = Ee.charAt(ht++), Pt = k[Ft in OE ? Ee.charAt(ht++) : Ft], !Pt || (L = Pt(re, Ye, L)) < 0) return -1;
      } else if (Ft != Ye.charCodeAt(L++))
        return -1;
    }
    return L;
  }
  function fe(re, Ee, Ye) {
    var L = U.exec(Ee.slice(Ye));
    return L ? (re.p = q.get(L[0].toLowerCase()), Ye + L[0].length) : -1;
  }
  function Ve(re, Ee, Ye) {
    var L = ce.exec(Ee.slice(Ye));
    return L ? (re.w = pe.get(L[0].toLowerCase()), Ye + L[0].length) : -1;
  }
  function de(re, Ee, Ye) {
    var L = _.exec(Ee.slice(Ye));
    return L ? (re.w = Y.get(L[0].toLowerCase()), Ye + L[0].length) : -1;
  }
  function Te(re, Ee, Ye) {
    var L = Se.exec(Ee.slice(Ye));
    return L ? (re.m = me.get(L[0].toLowerCase()), Ye + L[0].length) : -1;
  }
  function _e(re, Ee, Ye) {
    var L = ge.exec(Ee.slice(Ye));
    return L ? (re.m = ye.get(L[0].toLowerCase()), Ye + L[0].length) : -1;
  }
  function qe(re, Ee, Ye) {
    return He(re, s, Ee, Ye);
  }
  function et(re, Ee, Ye) {
    return He(re, h, Ee, Ye);
  }
  function C(re, Ee, Ye) {
    return He(re, m, Ee, Ye);
  }
  function K(re) {
    return T[re.getDay()];
  }
  function oe(re) {
    return v[re.getDay()];
  }
  function Me(re) {
    return x[re.getMonth()];
  }
  function O(re) {
    return A[re.getMonth()];
  }
  function $(re) {
    return g[+(re.getHours() >= 12)];
  }
  function le(re) {
    return 1 + ~~(re.getMonth() / 3);
  }
  function se(re) {
    return T[re.getUTCDay()];
  }
  function be(re) {
    return v[re.getUTCDay()];
  }
  function De(re) {
    return x[re.getUTCMonth()];
  }
  function Ae(re) {
    return A[re.getUTCMonth()];
  }
  function Xe(re) {
    return g[+(re.getUTCHours() >= 12)];
  }
  function we(re) {
    return 1 + ~~(re.getUTCMonth() / 3);
  }
  return {
    format: function(re) {
      var Ee = ie(re += "", P);
      return Ee.toString = function() {
        return re;
      }, Ee;
    },
    parse: function(re) {
      var Ee = ve(re += "", !1);
      return Ee.toString = function() {
        return re;
      }, Ee;
    },
    utcFormat: function(re) {
      var Ee = ie(re += "", ne);
      return Ee.toString = function() {
        return re;
      }, Ee;
    },
    utcParse: function(re) {
      var Ee = ve(re += "", !0);
      return Ee.toString = function() {
        return re;
      }, Ee;
    }
  };
}
var OE = { "-": "", _: " ", 0: "0" }, kn = /^\s*\d+/, bO = /^%/, SO = /[\\^$*+?|[\]().{}]/g;
function Et(c, s, h) {
  var m = c < 0 ? "-" : "", g = (m ? -c : c) + "", v = g.length;
  return m + (v < h ? new Array(h - v + 1).join(s) + g : g);
}
function TO(c) {
  return c.replace(SO, "\\$&");
}
function kp(c) {
  return new RegExp("^(?:" + c.map(TO).join("|") + ")", "i");
}
function $p(c) {
  return new Map(c.map((s, h) => [s.toLowerCase(), h]));
}
function EO(c, s, h) {
  var m = kn.exec(s.slice(h, h + 1));
  return m ? (c.w = +m[0], h + m[0].length) : -1;
}
function xO(c, s, h) {
  var m = kn.exec(s.slice(h, h + 1));
  return m ? (c.u = +m[0], h + m[0].length) : -1;
}
function MO(c, s, h) {
  var m = kn.exec(s.slice(h, h + 2));
  return m ? (c.U = +m[0], h + m[0].length) : -1;
}
function AO(c, s, h) {
  var m = kn.exec(s.slice(h, h + 2));
  return m ? (c.V = +m[0], h + m[0].length) : -1;
}
function RO(c, s, h) {
  var m = kn.exec(s.slice(h, h + 2));
  return m ? (c.W = +m[0], h + m[0].length) : -1;
}
function DE(c, s, h) {
  var m = kn.exec(s.slice(h, h + 4));
  return m ? (c.y = +m[0], h + m[0].length) : -1;
}
function zE(c, s, h) {
  var m = kn.exec(s.slice(h, h + 2));
  return m ? (c.y = +m[0] + (+m[0] > 68 ? 1900 : 2e3), h + m[0].length) : -1;
}
function OO(c, s, h) {
  var m = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(s.slice(h, h + 6));
  return m ? (c.Z = m[1] ? 0 : -(m[2] + (m[3] || "00")), h + m[0].length) : -1;
}
function DO(c, s, h) {
  var m = kn.exec(s.slice(h, h + 1));
  return m ? (c.q = m[0] * 3 - 3, h + m[0].length) : -1;
}
function zO(c, s, h) {
  var m = kn.exec(s.slice(h, h + 2));
  return m ? (c.m = m[0] - 1, h + m[0].length) : -1;
}
function CE(c, s, h) {
  var m = kn.exec(s.slice(h, h + 2));
  return m ? (c.d = +m[0], h + m[0].length) : -1;
}
function CO(c, s, h) {
  var m = kn.exec(s.slice(h, h + 3));
  return m ? (c.m = 0, c.d = +m[0], h + m[0].length) : -1;
}
function UE(c, s, h) {
  var m = kn.exec(s.slice(h, h + 2));
  return m ? (c.H = +m[0], h + m[0].length) : -1;
}
function UO(c, s, h) {
  var m = kn.exec(s.slice(h, h + 2));
  return m ? (c.M = +m[0], h + m[0].length) : -1;
}
function HO(c, s, h) {
  var m = kn.exec(s.slice(h, h + 2));
  return m ? (c.S = +m[0], h + m[0].length) : -1;
}
function _O(c, s, h) {
  var m = kn.exec(s.slice(h, h + 3));
  return m ? (c.L = +m[0], h + m[0].length) : -1;
}
function wO(c, s, h) {
  var m = kn.exec(s.slice(h, h + 6));
  return m ? (c.L = Math.floor(m[0] / 1e3), h + m[0].length) : -1;
}
function NO(c, s, h) {
  var m = bO.exec(s.slice(h, h + 1));
  return m ? h + m[0].length : -1;
}
function qO(c, s, h) {
  var m = kn.exec(s.slice(h));
  return m ? (c.Q = +m[0], h + m[0].length) : -1;
}
function YO(c, s, h) {
  var m = kn.exec(s.slice(h));
  return m ? (c.s = +m[0], h + m[0].length) : -1;
}
function HE(c, s) {
  return Et(c.getDate(), s, 2);
}
function jO(c, s) {
  return Et(c.getHours(), s, 2);
}
function BO(c, s) {
  return Et(c.getHours() % 12 || 12, s, 2);
}
function LO(c, s) {
  return Et(1 + Kh.count(Qi(c), c), s, 3);
}
function AM(c, s) {
  return Et(c.getMilliseconds(), s, 3);
}
function GO(c, s) {
  return AM(c, s) + "000";
}
function VO(c, s) {
  return Et(c.getMonth() + 1, s, 2);
}
function XO(c, s) {
  return Et(c.getMinutes(), s, 2);
}
function QO(c, s) {
  return Et(c.getSeconds(), s, 2);
}
function ZO(c) {
  var s = c.getDay();
  return s === 0 ? 7 : s;
}
function kO(c, s) {
  return Et(l0.count(Qi(c) - 1, c), s, 2);
}
function RM(c) {
  var s = c.getDay();
  return s >= 4 || s === 0 ? kh(c) : kh.ceil(c);
}
function $O(c, s) {
  return c = RM(c), Et(kh.count(Qi(c), c) + (Qi(c).getDay() === 4), s, 2);
}
function JO(c) {
  return c.getDay();
}
function KO(c, s) {
  return Et(gg.count(Qi(c) - 1, c), s, 2);
}
function WO(c, s) {
  return Et(c.getFullYear() % 100, s, 2);
}
function FO(c, s) {
  return c = RM(c), Et(c.getFullYear() % 100, s, 2);
}
function PO(c, s) {
  return Et(c.getFullYear() % 1e4, s, 4);
}
function IO(c, s) {
  var h = c.getDay();
  return c = h >= 4 || h === 0 ? kh(c) : kh.ceil(c), Et(c.getFullYear() % 1e4, s, 4);
}
function e3(c) {
  var s = c.getTimezoneOffset();
  return (s > 0 ? "-" : (s *= -1, "+")) + Et(s / 60 | 0, "0", 2) + Et(s % 60, "0", 2);
}
function _E(c, s) {
  return Et(c.getUTCDate(), s, 2);
}
function t3(c, s) {
  return Et(c.getUTCHours(), s, 2);
}
function n3(c, s) {
  return Et(c.getUTCHours() % 12 || 12, s, 2);
}
function a3(c, s) {
  return Et(1 + zg.count(Tr(c), c), s, 3);
}
function OM(c, s) {
  return Et(c.getUTCMilliseconds(), s, 3);
}
function l3(c, s) {
  return OM(c, s) + "000";
}
function u3(c, s) {
  return Et(c.getUTCMonth() + 1, s, 2);
}
function i3(c, s) {
  return Et(c.getUTCMinutes(), s, 2);
}
function c3(c, s) {
  return Et(c.getUTCSeconds(), s, 2);
}
function o3(c) {
  var s = c.getUTCDay();
  return s === 0 ? 7 : s;
}
function r3(c, s) {
  return Et(WS.count(Tr(c) - 1, c), s, 2);
}
function DM(c) {
  var s = c.getUTCDay();
  return s >= 4 || s === 0 ? $h(c) : $h.ceil(c);
}
function f3(c, s) {
  return c = DM(c), Et($h.count(Tr(c), c) + (Tr(c).getUTCDay() === 4), s, 2);
}
function s3(c) {
  return c.getUTCDay();
}
function d3(c, s) {
  return Et(bg.count(Tr(c) - 1, c), s, 2);
}
function h3(c, s) {
  return Et(c.getUTCFullYear() % 100, s, 2);
}
function y3(c, s) {
  return c = DM(c), Et(c.getUTCFullYear() % 100, s, 2);
}
function m3(c, s) {
  return Et(c.getUTCFullYear() % 1e4, s, 4);
}
function p3(c, s) {
  var h = c.getUTCDay();
  return c = h >= 4 || h === 0 ? $h(c) : $h.ceil(c), Et(c.getUTCFullYear() % 1e4, s, 4);
}
function v3() {
  return "+0000";
}
function wE() {
  return "%";
}
function NE(c) {
  return +c;
}
function qE(c) {
  return Math.floor(+c / 1e3);
}
var Lh, zM;
g3({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function g3(c) {
  return Lh = gO(c), zM = Lh.format, Lh.parse, Lh.utcFormat, Lh.utcParse, Lh;
}
function b3(c) {
  return new Date(c);
}
function S3(c) {
  return c instanceof Date ? +c : +/* @__PURE__ */ new Date(+c);
}
function CM(c, s, h, m, g, v, T, A, x, U) {
  var q = vM(), _ = q.invert, Y = q.domain, ce = U(".%L"), pe = U(":%S"), ge = U("%I:%M"), ye = U("%I %p"), Se = U("%a %d"), me = U("%b %d"), P = U("%B"), ne = U("%Y");
  function k(ie) {
    return (x(ie) < ie ? ce : A(ie) < ie ? pe : T(ie) < ie ? ge : v(ie) < ie ? ye : m(ie) < ie ? g(ie) < ie ? Se : me : h(ie) < ie ? P : ne)(ie);
  }
  return q.invert = function(ie) {
    return new Date(_(ie));
  }, q.domain = function(ie) {
    return arguments.length ? Y(Array.from(ie, S3)) : Y().map(b3);
  }, q.ticks = function(ie) {
    var ve = Y();
    return c(ve[0], ve[ve.length - 1], ie ?? 10);
  }, q.tickFormat = function(ie, ve) {
    return ve == null ? k : U(ve);
  }, q.nice = function(ie) {
    var ve = Y();
    return (!ie || typeof ie.range != "function") && (ie = s(ve[0], ve[ve.length - 1], ie ?? 10)), ie ? Y(uO(ve, ie)) : q;
  }, q.copy = function() {
    return pM(q, CM(c, s, h, m, g, v, T, A, x, U));
  }, q;
}
function T3() {
  return Ix.apply(CM(pO, vO, Qi, Cg, l0, Kh, Dg, Og, Sr, zM).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function E3(c, s) {
  s.domain && ("nice" in c || "quantiles" in c || "padding" in c, c.domain(s.domain));
}
function x3(c, s) {
  s.range && ("padding" in c, c.range(s.range));
}
function M3(c, s) {
  "align" in c && "align" in s && typeof s.align < "u" && c.align(s.align);
}
function A3(c, s) {
  "base" in c && "base" in s && typeof s.base < "u" && c.base(s.base);
}
function R3(c, s) {
  "clamp" in c && "clamp" in s && typeof s.clamp < "u" && c.clamp(s.clamp);
}
function O3(c, s) {
  "constant" in c && "constant" in s && typeof s.constant < "u" && c.constant(s.constant);
}
function D3(c, s) {
  "exponent" in c && "exponent" in s && typeof s.exponent < "u" && c.exponent(s.exponent);
}
var YE = {
  lab: NR,
  hcl: qR,
  "hcl-long": YR,
  hsl: _R,
  "hsl-long": wR,
  cubehelix: jR,
  "cubehelix-long": BR,
  rgb: CS
};
function z3(c) {
  switch (c) {
    case "lab":
    case "hcl":
    case "hcl-long":
    case "hsl":
    case "hsl-long":
    case "cubehelix":
    case "cubehelix-long":
    case "rgb":
      return YE[c];
  }
  var s = c.type, h = c.gamma, m = YE[s];
  return typeof h > "u" ? m : m.gamma(h);
}
function C3(c, s) {
  if ("interpolate" in s && "interpolate" in c && typeof s.interpolate < "u") {
    var h = z3(s.interpolate);
    c.interpolate(h);
  }
}
var U3 = new Date(Date.UTC(2020, 1, 2, 3, 4, 5)), H3 = "%Y-%m-%d %H:%M";
function _3(c) {
  var s = c.tickFormat(1, H3)(U3);
  return s === "2020-02-02 03:04";
}
var jE = {
  day: Kh,
  hour: Dg,
  minute: Og,
  month: Cg,
  second: Sr,
  week: l0,
  year: Qi
}, BE = {
  day: zg,
  hour: xM,
  minute: EM,
  month: MM,
  second: Sr,
  week: WS,
  year: Tr
};
function w3(c, s) {
  if ("nice" in s && typeof s.nice < "u" && "nice" in c) {
    var h = s.nice;
    if (typeof h == "boolean")
      h && c.nice();
    else if (typeof h == "number")
      c.nice(h);
    else {
      var m = c, g = _3(m);
      if (typeof h == "string")
        m.nice(g ? BE[h] : jE[h]);
      else {
        var v = h.interval, T = h.step, A = (g ? BE[v] : jE[v]).every(T);
        A != null && m.nice(A);
      }
    }
  }
}
function N3(c, s) {
  "padding" in c && "padding" in s && typeof s.padding < "u" && c.padding(s.padding), "paddingInner" in c && "paddingInner" in s && typeof s.paddingInner < "u" && c.paddingInner(s.paddingInner), "paddingOuter" in c && "paddingOuter" in s && typeof s.paddingOuter < "u" && c.paddingOuter(s.paddingOuter);
}
function q3(c, s) {
  if (s.reverse) {
    var h = c.range().slice().reverse();
    "padding" in c, c.range(h);
  }
}
function Y3(c, s) {
  "round" in s && typeof s.round < "u" && (s.round && "interpolate" in s && typeof s.interpolate < "u" ? console.warn("[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:", s) : "round" in c ? c.round(s.round) : "interpolate" in c && s.round && c.interpolate(dM));
}
function j3(c, s) {
  "unknown" in c && "unknown" in s && typeof s.unknown < "u" && c.unknown(s.unknown);
}
function B3(c, s) {
  if ("zero" in s && s.zero === !0) {
    var h = c.domain(), m = h[0], g = h[1], v = g < m, T = v ? [g, m] : [m, g], A = T[0], x = T[1], U = [Math.min(0, A), Math.max(0, x)];
    c.domain(v ? U.reverse() : U);
  }
}
var L3 = [
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
], G3 = {
  domain: E3,
  nice: w3,
  zero: B3,
  interpolate: C3,
  round: Y3,
  align: M3,
  base: A3,
  clamp: R3,
  constant: O3,
  exponent: D3,
  padding: N3,
  range: x3,
  reverse: q3,
  unknown: j3
};
function UM() {
  for (var c = arguments.length, s = new Array(c), h = 0; h < c; h++)
    s[h] = arguments[h];
  var m = new Set(s), g = L3.filter(function(v) {
    return m.has(v);
  });
  return function(T, A) {
    return typeof A < "u" && g.forEach(function(x) {
      G3[x](T, A);
    }), T;
  };
}
var V3 = UM("domain", "range", "reverse", "clamp", "interpolate", "nice", "round", "zero");
function X3(c) {
  return V3(TM(), c);
}
var Q3 = UM("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function Z3(c) {
  return Q3(T3(), c);
}
function k3(c) {
  if ((typeof c == "function" || typeof c == "object" && c) && "valueOf" in c) {
    var s = c.valueOf();
    if (typeof s == "number") return s;
  }
  return c;
}
function $3(c, s) {
  var h = c;
  return "ticks" in h ? h.ticks(s) : h.domain().filter(function(m, g, v) {
    return s == null || v.length <= s || g % Math.round((v.length - 1) / s) === 0;
  });
}
function J3(c) {
  return c == null ? void 0 : c.toString();
}
var mb = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var LE;
function K3() {
  return LE || (LE = 1, function(c) {
    (function() {
      var s = {}.hasOwnProperty;
      function h() {
        for (var v = "", T = 0; T < arguments.length; T++) {
          var A = arguments[T];
          A && (v = g(v, m(A)));
        }
        return v;
      }
      function m(v) {
        if (typeof v == "string" || typeof v == "number")
          return v;
        if (typeof v != "object")
          return "";
        if (Array.isArray(v))
          return h.apply(null, v);
        if (v.toString !== Object.prototype.toString && !v.toString.toString().includes("[native code]"))
          return v.toString();
        var T = "";
        for (var A in v)
          s.call(v, A) && v[A] && (T = g(T, A));
        return T;
      }
      function g(v, T) {
        return T ? v ? v + " " + T : v + T : v;
      }
      c.exports ? (h.default = h, c.exports = h) : window.classNames = h;
    })();
  }(mb)), mb.exports;
}
var W3 = K3();
const Zi = /* @__PURE__ */ n0(W3);
var _S = Math.PI, wS = 2 * _S, ss = 1e-6, F3 = wS - ss;
function NS() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null, this._ = "";
}
function HM() {
  return new NS();
}
NS.prototype = HM.prototype = {
  constructor: NS,
  moveTo: function(c, s) {
    this._ += "M" + (this._x0 = this._x1 = +c) + "," + (this._y0 = this._y1 = +s);
  },
  closePath: function() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
  },
  lineTo: function(c, s) {
    this._ += "L" + (this._x1 = +c) + "," + (this._y1 = +s);
  },
  quadraticCurveTo: function(c, s, h, m) {
    this._ += "Q" + +c + "," + +s + "," + (this._x1 = +h) + "," + (this._y1 = +m);
  },
  bezierCurveTo: function(c, s, h, m, g, v) {
    this._ += "C" + +c + "," + +s + "," + +h + "," + +m + "," + (this._x1 = +g) + "," + (this._y1 = +v);
  },
  arcTo: function(c, s, h, m, g) {
    c = +c, s = +s, h = +h, m = +m, g = +g;
    var v = this._x1, T = this._y1, A = h - c, x = m - s, U = v - c, q = T - s, _ = U * U + q * q;
    if (g < 0) throw new Error("negative radius: " + g);
    if (this._x1 === null)
      this._ += "M" + (this._x1 = c) + "," + (this._y1 = s);
    else if (_ > ss) if (!(Math.abs(q * A - x * U) > ss) || !g)
      this._ += "L" + (this._x1 = c) + "," + (this._y1 = s);
    else {
      var Y = h - v, ce = m - T, pe = A * A + x * x, ge = Y * Y + ce * ce, ye = Math.sqrt(pe), Se = Math.sqrt(_), me = g * Math.tan((_S - Math.acos((pe + _ - ge) / (2 * ye * Se))) / 2), P = me / Se, ne = me / ye;
      Math.abs(P - 1) > ss && (this._ += "L" + (c + P * U) + "," + (s + P * q)), this._ += "A" + g + "," + g + ",0,0," + +(q * Y > U * ce) + "," + (this._x1 = c + ne * A) + "," + (this._y1 = s + ne * x);
    }
  },
  arc: function(c, s, h, m, g, v) {
    c = +c, s = +s, h = +h, v = !!v;
    var T = h * Math.cos(m), A = h * Math.sin(m), x = c + T, U = s + A, q = 1 ^ v, _ = v ? m - g : g - m;
    if (h < 0) throw new Error("negative radius: " + h);
    this._x1 === null ? this._ += "M" + x + "," + U : (Math.abs(this._x1 - x) > ss || Math.abs(this._y1 - U) > ss) && (this._ += "L" + x + "," + U), h && (_ < 0 && (_ = _ % wS + wS), _ > F3 ? this._ += "A" + h + "," + h + ",0,1," + q + "," + (c - T) + "," + (s - A) + "A" + h + "," + h + ",0,1," + q + "," + (this._x1 = x) + "," + (this._y1 = U) : _ > ss && (this._ += "A" + h + "," + h + ",0," + +(_ >= _S) + "," + q + "," + (this._x1 = c + h * Math.cos(g)) + "," + (this._y1 = s + h * Math.sin(g))));
  },
  rect: function(c, s, h, m) {
    this._ += "M" + (this._x0 = this._x1 = +c) + "," + (this._y0 = this._y1 = +s) + "h" + +h + "v" + +m + "h" + -h + "Z";
  },
  toString: function() {
    return this._;
  }
};
function cg(c) {
  return function() {
    return c;
  };
}
function _M(c) {
  this._context = c;
}
_M.prototype = {
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
  point: function(c, s) {
    switch (c = +c, s = +s, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(c, s) : this._context.moveTo(c, s);
        break;
      case 1:
        this._point = 2;
      // proceed
      default:
        this._context.lineTo(c, s);
        break;
    }
  }
};
function P3(c) {
  return new _M(c);
}
function I3(c) {
  return c[0];
}
function eD(c) {
  return c[1];
}
function tD() {
  var c = I3, s = eD, h = cg(!0), m = null, g = P3, v = null;
  function T(A) {
    var x, U = A.length, q, _ = !1, Y;
    for (m == null && (v = g(Y = HM())), x = 0; x <= U; ++x)
      !(x < U && h(q = A[x], x, A)) === _ && ((_ = !_) ? v.lineStart() : v.lineEnd()), _ && v.point(+c(q, x, A), +s(q, x, A));
    if (Y) return v = null, Y + "" || null;
  }
  return T.x = function(A) {
    return arguments.length ? (c = typeof A == "function" ? A : cg(+A), T) : c;
  }, T.y = function(A) {
    return arguments.length ? (s = typeof A == "function" ? A : cg(+A), T) : s;
  }, T.defined = function(A) {
    return arguments.length ? (h = typeof A == "function" ? A : cg(!!A), T) : h;
  }, T.curve = function(A) {
    return arguments.length ? (g = A, m != null && (v = g(m)), T) : g;
  }, T.context = function(A) {
    return arguments.length ? (A == null ? m = v = null : v = g(m = A), T) : m;
  }, T;
}
function GE(c, s) {
  c(s);
}
function nD(c) {
  var s = c === void 0 ? {} : c, h = s.x, m = s.y, g = s.defined, v = s.curve, T = tD();
  return h && GE(T.x, h), m && GE(T.y, m), g && T.defined(g), v && T.curve(v), T;
}
var og = { exports: {} }, rg = { exports: {} }, Dt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VE;
function aD() {
  if (VE) return Dt;
  VE = 1;
  var c = typeof Symbol == "function" && Symbol.for, s = c ? Symbol.for("react.element") : 60103, h = c ? Symbol.for("react.portal") : 60106, m = c ? Symbol.for("react.fragment") : 60107, g = c ? Symbol.for("react.strict_mode") : 60108, v = c ? Symbol.for("react.profiler") : 60114, T = c ? Symbol.for("react.provider") : 60109, A = c ? Symbol.for("react.context") : 60110, x = c ? Symbol.for("react.async_mode") : 60111, U = c ? Symbol.for("react.concurrent_mode") : 60111, q = c ? Symbol.for("react.forward_ref") : 60112, _ = c ? Symbol.for("react.suspense") : 60113, Y = c ? Symbol.for("react.suspense_list") : 60120, ce = c ? Symbol.for("react.memo") : 60115, pe = c ? Symbol.for("react.lazy") : 60116, ge = c ? Symbol.for("react.block") : 60121, ye = c ? Symbol.for("react.fundamental") : 60117, Se = c ? Symbol.for("react.responder") : 60118, me = c ? Symbol.for("react.scope") : 60119;
  function P(k) {
    if (typeof k == "object" && k !== null) {
      var ie = k.$$typeof;
      switch (ie) {
        case s:
          switch (k = k.type, k) {
            case x:
            case U:
            case m:
            case v:
            case g:
            case _:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case A:
                case q:
                case pe:
                case ce:
                case T:
                  return k;
                default:
                  return ie;
              }
          }
        case h:
          return ie;
      }
    }
  }
  function ne(k) {
    return P(k) === U;
  }
  return Dt.AsyncMode = x, Dt.ConcurrentMode = U, Dt.ContextConsumer = A, Dt.ContextProvider = T, Dt.Element = s, Dt.ForwardRef = q, Dt.Fragment = m, Dt.Lazy = pe, Dt.Memo = ce, Dt.Portal = h, Dt.Profiler = v, Dt.StrictMode = g, Dt.Suspense = _, Dt.isAsyncMode = function(k) {
    return ne(k) || P(k) === x;
  }, Dt.isConcurrentMode = ne, Dt.isContextConsumer = function(k) {
    return P(k) === A;
  }, Dt.isContextProvider = function(k) {
    return P(k) === T;
  }, Dt.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === s;
  }, Dt.isForwardRef = function(k) {
    return P(k) === q;
  }, Dt.isFragment = function(k) {
    return P(k) === m;
  }, Dt.isLazy = function(k) {
    return P(k) === pe;
  }, Dt.isMemo = function(k) {
    return P(k) === ce;
  }, Dt.isPortal = function(k) {
    return P(k) === h;
  }, Dt.isProfiler = function(k) {
    return P(k) === v;
  }, Dt.isStrictMode = function(k) {
    return P(k) === g;
  }, Dt.isSuspense = function(k) {
    return P(k) === _;
  }, Dt.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === m || k === U || k === v || k === g || k === _ || k === Y || typeof k == "object" && k !== null && (k.$$typeof === pe || k.$$typeof === ce || k.$$typeof === T || k.$$typeof === A || k.$$typeof === q || k.$$typeof === ye || k.$$typeof === Se || k.$$typeof === me || k.$$typeof === ge);
  }, Dt.typeOf = P, Dt;
}
var zt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XE;
function lD() {
  return XE || (XE = 1, process.env.NODE_ENV !== "production" && function() {
    var c = typeof Symbol == "function" && Symbol.for, s = c ? Symbol.for("react.element") : 60103, h = c ? Symbol.for("react.portal") : 60106, m = c ? Symbol.for("react.fragment") : 60107, g = c ? Symbol.for("react.strict_mode") : 60108, v = c ? Symbol.for("react.profiler") : 60114, T = c ? Symbol.for("react.provider") : 60109, A = c ? Symbol.for("react.context") : 60110, x = c ? Symbol.for("react.async_mode") : 60111, U = c ? Symbol.for("react.concurrent_mode") : 60111, q = c ? Symbol.for("react.forward_ref") : 60112, _ = c ? Symbol.for("react.suspense") : 60113, Y = c ? Symbol.for("react.suspense_list") : 60120, ce = c ? Symbol.for("react.memo") : 60115, pe = c ? Symbol.for("react.lazy") : 60116, ge = c ? Symbol.for("react.block") : 60121, ye = c ? Symbol.for("react.fundamental") : 60117, Se = c ? Symbol.for("react.responder") : 60118, me = c ? Symbol.for("react.scope") : 60119;
    function P(L) {
      return typeof L == "string" || typeof L == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      L === m || L === U || L === v || L === g || L === _ || L === Y || typeof L == "object" && L !== null && (L.$$typeof === pe || L.$$typeof === ce || L.$$typeof === T || L.$$typeof === A || L.$$typeof === q || L.$$typeof === ye || L.$$typeof === Se || L.$$typeof === me || L.$$typeof === ge);
    }
    function ne(L) {
      if (typeof L == "object" && L !== null) {
        var ht = L.$$typeof;
        switch (ht) {
          case s:
            var rt = L.type;
            switch (rt) {
              case x:
              case U:
              case m:
              case v:
              case g:
              case _:
                return rt;
              default:
                var hn = rt && rt.$$typeof;
                switch (hn) {
                  case A:
                  case q:
                  case pe:
                  case ce:
                  case T:
                    return hn;
                  default:
                    return ht;
                }
            }
          case h:
            return ht;
        }
      }
    }
    var k = x, ie = U, ve = A, He = T, fe = s, Ve = q, de = m, Te = pe, _e = ce, qe = h, et = v, C = g, K = _, oe = !1;
    function Me(L) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(L) || ne(L) === x;
    }
    function O(L) {
      return ne(L) === U;
    }
    function $(L) {
      return ne(L) === A;
    }
    function le(L) {
      return ne(L) === T;
    }
    function se(L) {
      return typeof L == "object" && L !== null && L.$$typeof === s;
    }
    function be(L) {
      return ne(L) === q;
    }
    function De(L) {
      return ne(L) === m;
    }
    function Ae(L) {
      return ne(L) === pe;
    }
    function Xe(L) {
      return ne(L) === ce;
    }
    function we(L) {
      return ne(L) === h;
    }
    function re(L) {
      return ne(L) === v;
    }
    function Ee(L) {
      return ne(L) === g;
    }
    function Ye(L) {
      return ne(L) === _;
    }
    zt.AsyncMode = k, zt.ConcurrentMode = ie, zt.ContextConsumer = ve, zt.ContextProvider = He, zt.Element = fe, zt.ForwardRef = Ve, zt.Fragment = de, zt.Lazy = Te, zt.Memo = _e, zt.Portal = qe, zt.Profiler = et, zt.StrictMode = C, zt.Suspense = K, zt.isAsyncMode = Me, zt.isConcurrentMode = O, zt.isContextConsumer = $, zt.isContextProvider = le, zt.isElement = se, zt.isForwardRef = be, zt.isFragment = De, zt.isLazy = Ae, zt.isMemo = Xe, zt.isPortal = we, zt.isProfiler = re, zt.isStrictMode = Ee, zt.isSuspense = Ye, zt.isValidElementType = P, zt.typeOf = ne;
  }()), zt;
}
var QE;
function wM() {
  return QE || (QE = 1, process.env.NODE_ENV === "production" ? rg.exports = aD() : rg.exports = lD()), rg.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pb, ZE;
function uD() {
  if (ZE) return pb;
  ZE = 1;
  var c = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
  function m(v) {
    if (v == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(v);
  }
  function g() {
    try {
      if (!Object.assign)
        return !1;
      var v = new String("abc");
      if (v[5] = "de", Object.getOwnPropertyNames(v)[0] === "5")
        return !1;
      for (var T = {}, A = 0; A < 10; A++)
        T["_" + String.fromCharCode(A)] = A;
      var x = Object.getOwnPropertyNames(T).map(function(q) {
        return T[q];
      });
      if (x.join("") !== "0123456789")
        return !1;
      var U = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(q) {
        U[q] = q;
      }), Object.keys(Object.assign({}, U)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return pb = g() ? Object.assign : function(v, T) {
    for (var A, x = m(v), U, q = 1; q < arguments.length; q++) {
      A = Object(arguments[q]);
      for (var _ in A)
        s.call(A, _) && (x[_] = A[_]);
      if (c) {
        U = c(A);
        for (var Y = 0; Y < U.length; Y++)
          h.call(A, U[Y]) && (x[U[Y]] = A[U[Y]]);
      }
    }
    return x;
  }, pb;
}
var vb, kE;
function FS() {
  if (kE) return vb;
  kE = 1;
  var c = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return vb = c, vb;
}
var gb, $E;
function NM() {
  return $E || ($E = 1, gb = Function.call.bind(Object.prototype.hasOwnProperty)), gb;
}
var bb, JE;
function iD() {
  if (JE) return bb;
  JE = 1;
  var c = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = /* @__PURE__ */ FS(), h = {}, m = /* @__PURE__ */ NM();
    c = function(v) {
      var T = "Warning: " + v;
      typeof console < "u" && console.error(T);
      try {
        throw new Error(T);
      } catch {
      }
    };
  }
  function g(v, T, A, x, U) {
    if (process.env.NODE_ENV !== "production") {
      for (var q in v)
        if (m(v, q)) {
          var _;
          try {
            if (typeof v[q] != "function") {
              var Y = Error(
                (x || "React class") + ": " + A + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof v[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw Y.name = "Invariant Violation", Y;
            }
            _ = v[q](T, q, x, A, null, s);
          } catch (pe) {
            _ = pe;
          }
          if (_ && !(_ instanceof Error) && c(
            (x || "React class") + ": type specification of " + A + " `" + q + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in h)) {
            h[_.message] = !0;
            var ce = U ? U() : "";
            c(
              "Failed " + A + " type: " + _.message + (ce ?? "")
            );
          }
        }
    }
  }
  return g.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (h = {});
  }, bb = g, bb;
}
var Sb, KE;
function cD() {
  if (KE) return Sb;
  KE = 1;
  var c = wM(), s = uD(), h = /* @__PURE__ */ FS(), m = /* @__PURE__ */ NM(), g = /* @__PURE__ */ iD(), v = function() {
  };
  process.env.NODE_ENV !== "production" && (v = function(A) {
    var x = "Warning: " + A;
    typeof console < "u" && console.error(x);
    try {
      throw new Error(x);
    } catch {
    }
  });
  function T() {
    return null;
  }
  return Sb = function(A, x) {
    var U = typeof Symbol == "function" && Symbol.iterator, q = "@@iterator";
    function _(O) {
      var $ = O && (U && O[U] || O[q]);
      if (typeof $ == "function")
        return $;
    }
    var Y = "<<anonymous>>", ce = {
      array: Se("array"),
      bigint: Se("bigint"),
      bool: Se("boolean"),
      func: Se("function"),
      number: Se("number"),
      object: Se("object"),
      string: Se("string"),
      symbol: Se("symbol"),
      any: me(),
      arrayOf: P,
      element: ne(),
      elementType: k(),
      instanceOf: ie,
      node: Ve(),
      objectOf: He,
      oneOf: ve,
      oneOfType: fe,
      shape: Te,
      exact: _e
    };
    function pe(O, $) {
      return O === $ ? O !== 0 || 1 / O === 1 / $ : O !== O && $ !== $;
    }
    function ge(O, $) {
      this.message = O, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    ge.prototype = Error.prototype;
    function ye(O) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, le = 0;
      function se(De, Ae, Xe, we, re, Ee, Ye) {
        if (we = we || Y, Ee = Ee || Xe, Ye !== h) {
          if (x) {
            var L = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw L.name = "Invariant Violation", L;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ht = we + ":" + Xe;
            !$[ht] && // Avoid spamming the console because they are often not actionable except for lib authors
            le < 3 && (v(
              "You are manually calling a React.PropTypes validation function for the `" + Ee + "` prop on `" + we + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[ht] = !0, le++);
          }
        }
        return Ae[Xe] == null ? De ? Ae[Xe] === null ? new ge("The " + re + " `" + Ee + "` is marked as required " + ("in `" + we + "`, but its value is `null`.")) : new ge("The " + re + " `" + Ee + "` is marked as required in " + ("`" + we + "`, but its value is `undefined`.")) : null : O(Ae, Xe, we, re, Ee);
      }
      var be = se.bind(null, !1);
      return be.isRequired = se.bind(null, !0), be;
    }
    function Se(O) {
      function $(le, se, be, De, Ae, Xe) {
        var we = le[se], re = C(we);
        if (re !== O) {
          var Ee = K(we);
          return new ge(
            "Invalid " + De + " `" + Ae + "` of type " + ("`" + Ee + "` supplied to `" + be + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return ye($);
    }
    function me() {
      return ye(T);
    }
    function P(O) {
      function $(le, se, be, De, Ae) {
        if (typeof O != "function")
          return new ge("Property `" + Ae + "` of component `" + be + "` has invalid PropType notation inside arrayOf.");
        var Xe = le[se];
        if (!Array.isArray(Xe)) {
          var we = C(Xe);
          return new ge("Invalid " + De + " `" + Ae + "` of type " + ("`" + we + "` supplied to `" + be + "`, expected an array."));
        }
        for (var re = 0; re < Xe.length; re++) {
          var Ee = O(Xe, re, be, De, Ae + "[" + re + "]", h);
          if (Ee instanceof Error)
            return Ee;
        }
        return null;
      }
      return ye($);
    }
    function ne() {
      function O($, le, se, be, De) {
        var Ae = $[le];
        if (!A(Ae)) {
          var Xe = C(Ae);
          return new ge("Invalid " + be + " `" + De + "` of type " + ("`" + Xe + "` supplied to `" + se + "`, expected a single ReactElement."));
        }
        return null;
      }
      return ye(O);
    }
    function k() {
      function O($, le, se, be, De) {
        var Ae = $[le];
        if (!c.isValidElementType(Ae)) {
          var Xe = C(Ae);
          return new ge("Invalid " + be + " `" + De + "` of type " + ("`" + Xe + "` supplied to `" + se + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return ye(O);
    }
    function ie(O) {
      function $(le, se, be, De, Ae) {
        if (!(le[se] instanceof O)) {
          var Xe = O.name || Y, we = Me(le[se]);
          return new ge("Invalid " + De + " `" + Ae + "` of type " + ("`" + we + "` supplied to `" + be + "`, expected ") + ("instance of `" + Xe + "`."));
        }
        return null;
      }
      return ye($);
    }
    function ve(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? v(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : v("Invalid argument supplied to oneOf, expected an array.")), T;
      function $(le, se, be, De, Ae) {
        for (var Xe = le[se], we = 0; we < O.length; we++)
          if (pe(Xe, O[we]))
            return null;
        var re = JSON.stringify(O, function(Ye, L) {
          var ht = K(L);
          return ht === "symbol" ? String(L) : L;
        });
        return new ge("Invalid " + De + " `" + Ae + "` of value `" + String(Xe) + "` " + ("supplied to `" + be + "`, expected one of " + re + "."));
      }
      return ye($);
    }
    function He(O) {
      function $(le, se, be, De, Ae) {
        if (typeof O != "function")
          return new ge("Property `" + Ae + "` of component `" + be + "` has invalid PropType notation inside objectOf.");
        var Xe = le[se], we = C(Xe);
        if (we !== "object")
          return new ge("Invalid " + De + " `" + Ae + "` of type " + ("`" + we + "` supplied to `" + be + "`, expected an object."));
        for (var re in Xe)
          if (m(Xe, re)) {
            var Ee = O(Xe, re, be, De, Ae + "." + re, h);
            if (Ee instanceof Error)
              return Ee;
          }
        return null;
      }
      return ye($);
    }
    function fe(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && v("Invalid argument supplied to oneOfType, expected an instance of array."), T;
      for (var $ = 0; $ < O.length; $++) {
        var le = O[$];
        if (typeof le != "function")
          return v(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(le) + " at index " + $ + "."
          ), T;
      }
      function se(be, De, Ae, Xe, we) {
        for (var re = [], Ee = 0; Ee < O.length; Ee++) {
          var Ye = O[Ee], L = Ye(be, De, Ae, Xe, we, h);
          if (L == null)
            return null;
          L.data && m(L.data, "expectedType") && re.push(L.data.expectedType);
        }
        var ht = re.length > 0 ? ", expected one of type [" + re.join(", ") + "]" : "";
        return new ge("Invalid " + Xe + " `" + we + "` supplied to " + ("`" + Ae + "`" + ht + "."));
      }
      return ye(se);
    }
    function Ve() {
      function O($, le, se, be, De) {
        return qe($[le]) ? null : new ge("Invalid " + be + " `" + De + "` supplied to " + ("`" + se + "`, expected a ReactNode."));
      }
      return ye(O);
    }
    function de(O, $, le, se, be) {
      return new ge(
        (O || "React class") + ": " + $ + " type `" + le + "." + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + be + "`."
      );
    }
    function Te(O) {
      function $(le, se, be, De, Ae) {
        var Xe = le[se], we = C(Xe);
        if (we !== "object")
          return new ge("Invalid " + De + " `" + Ae + "` of type `" + we + "` " + ("supplied to `" + be + "`, expected `object`."));
        for (var re in O) {
          var Ee = O[re];
          if (typeof Ee != "function")
            return de(be, De, Ae, re, K(Ee));
          var Ye = Ee(Xe, re, be, De, Ae + "." + re, h);
          if (Ye)
            return Ye;
        }
        return null;
      }
      return ye($);
    }
    function _e(O) {
      function $(le, se, be, De, Ae) {
        var Xe = le[se], we = C(Xe);
        if (we !== "object")
          return new ge("Invalid " + De + " `" + Ae + "` of type `" + we + "` " + ("supplied to `" + be + "`, expected `object`."));
        var re = s({}, le[se], O);
        for (var Ee in re) {
          var Ye = O[Ee];
          if (m(O, Ee) && typeof Ye != "function")
            return de(be, De, Ae, Ee, K(Ye));
          if (!Ye)
            return new ge(
              "Invalid " + De + " `" + Ae + "` key `" + Ee + "` supplied to `" + be + "`.\nBad object: " + JSON.stringify(le[se], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var L = Ye(Xe, Ee, be, De, Ae + "." + Ee, h);
          if (L)
            return L;
        }
        return null;
      }
      return ye($);
    }
    function qe(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(qe);
          if (O === null || A(O))
            return !0;
          var $ = _(O);
          if ($) {
            var le = $.call(O), se;
            if ($ !== O.entries) {
              for (; !(se = le.next()).done; )
                if (!qe(se.value))
                  return !1;
            } else
              for (; !(se = le.next()).done; ) {
                var be = se.value;
                if (be && !qe(be[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function et(O, $) {
      return O === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function C(O) {
      var $ = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : et($, O) ? "symbol" : $;
    }
    function K(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var $ = C(O);
      if ($ === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function oe(O) {
      var $ = K(O);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function Me(O) {
      return !O.constructor || !O.constructor.name ? Y : O.constructor.name;
    }
    return ce.checkPropTypes = g, ce.resetWarningCache = g.resetWarningCache, ce.PropTypes = ce, ce;
  }, Sb;
}
var Tb, WE;
function oD() {
  if (WE) return Tb;
  WE = 1;
  var c = /* @__PURE__ */ FS();
  function s() {
  }
  function h() {
  }
  return h.resetWarningCache = s, Tb = function() {
    function m(T, A, x, U, q, _) {
      if (_ !== c) {
        var Y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw Y.name = "Invariant Violation", Y;
      }
    }
    m.isRequired = m;
    function g() {
      return m;
    }
    var v = {
      array: m,
      bigint: m,
      bool: m,
      func: m,
      number: m,
      object: m,
      string: m,
      symbol: m,
      any: m,
      arrayOf: g,
      element: m,
      elementType: m,
      instanceOf: g,
      node: m,
      objectOf: g,
      oneOf: g,
      oneOfType: g,
      shape: g,
      exact: g,
      checkPropTypes: h,
      resetWarningCache: s
    };
    return v.PropTypes = v, v;
  }, Tb;
}
var FE;
function rD() {
  if (FE) return og.exports;
  if (FE = 1, process.env.NODE_ENV !== "production") {
    var c = wM(), s = !0;
    og.exports = /* @__PURE__ */ cD()(c.isElement, s);
  } else
    og.exports = /* @__PURE__ */ oD()();
  return og.exports;
}
var fD = /* @__PURE__ */ rD();
const la = /* @__PURE__ */ n0(fD);
var sD = ["top", "left", "transform", "className", "children", "innerRef"];
function qS() {
  return qS = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, qS.apply(this, arguments);
}
function dD(c, s) {
  if (c == null) return {};
  var h = {}, m = Object.keys(c), g, v;
  for (v = 0; v < m.length; v++)
    g = m[v], !(s.indexOf(g) >= 0) && (h[g] = c[g]);
  return h;
}
function Ug(c) {
  var s = c.top, h = s === void 0 ? 0 : s, m = c.left, g = m === void 0 ? 0 : m, v = c.transform, T = c.className, A = c.children, x = c.innerRef, U = dD(c, sD);
  return /* @__PURE__ */ Wt.createElement("g", qS({
    ref: x,
    className: Zi("visx-group", T),
    transform: v || "translate(" + g + ", " + h + ")"
  }, U), A);
}
Ug.propTypes = {
  top: la.number,
  left: la.number,
  transform: la.string,
  className: la.string,
  children: la.node,
  innerRef: la.oneOfType([la.string, la.func, la.object])
};
var hD = ["from", "to", "fill", "className", "innerRef"];
function YS() {
  return YS = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, YS.apply(this, arguments);
}
function yD(c, s) {
  if (c == null) return {};
  var h = {}, m = Object.keys(c), g, v;
  for (v = 0; v < m.length; v++)
    g = m[v], !(s.indexOf(g) >= 0) && (h[g] = c[g]);
  return h;
}
function qM(c) {
  var s = c.from, h = s === void 0 ? {
    x: 0,
    y: 0
  } : s, m = c.to, g = m === void 0 ? {
    x: 1,
    y: 1
  } : m, v = c.fill, T = v === void 0 ? "transparent" : v, A = c.className, x = c.innerRef, U = yD(c, hD), q = h.x === g.x || h.y === g.y;
  return /* @__PURE__ */ Wt.createElement("line", YS({
    ref: x,
    className: Zi("visx-line", A),
    x1: h.x,
    y1: h.y,
    x2: g.x,
    y2: g.y,
    fill: T,
    shapeRendering: q ? "crispEdges" : "auto"
  }, U));
}
var mD = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function jS() {
  return jS = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, jS.apply(this, arguments);
}
function pD(c, s) {
  if (c == null) return {};
  var h = {}, m = Object.keys(c), g, v;
  for (v = 0; v < m.length; v++)
    g = m[v], !(s.indexOf(g) >= 0) && (h[g] = c[g]);
  return h;
}
function vD(c) {
  var s = c.children, h = c.data, m = h === void 0 ? [] : h, g = c.x, v = c.y, T = c.fill, A = T === void 0 ? "transparent" : T, x = c.className, U = c.curve, q = c.innerRef, _ = c.defined, Y = _ === void 0 ? function() {
    return !0;
  } : _, ce = pD(c, mD), pe = nD({
    x: g,
    y: v,
    defined: Y,
    curve: U
  });
  return s ? /* @__PURE__ */ Wt.createElement(Wt.Fragment, null, s({
    path: pe
  })) : /* @__PURE__ */ Wt.createElement("path", jS({
    ref: q,
    className: Zi("visx-linepath", x),
    d: pe(m) || "",
    fill: A,
    strokeLinecap: "round"
  }, ce));
}
var Eb, PE;
function gD() {
  if (PE) return Eb;
  PE = 1, Eb = c;
  function c(m, g, v) {
    m instanceof RegExp && (m = s(m, v)), g instanceof RegExp && (g = s(g, v));
    var T = h(m, g, v);
    return T && {
      start: T[0],
      end: T[1],
      pre: v.slice(0, T[0]),
      body: v.slice(T[0] + m.length, T[1]),
      post: v.slice(T[1] + g.length)
    };
  }
  function s(m, g) {
    var v = g.match(m);
    return v ? v[0] : null;
  }
  c.range = h;
  function h(m, g, v) {
    var T, A, x, U, q, _ = v.indexOf(m), Y = v.indexOf(g, _ + 1), ce = _;
    if (_ >= 0 && Y > 0) {
      for (T = [], x = v.length; ce >= 0 && !q; )
        ce == _ ? (T.push(ce), _ = v.indexOf(m, ce + 1)) : T.length == 1 ? q = [T.pop(), Y] : (A = T.pop(), A < x && (x = A, U = Y), Y = v.indexOf(g, ce + 1)), ce = _ < Y && _ >= 0 ? _ : Y;
      T.length && (q = [x, U]);
    }
    return q;
  }
  return Eb;
}
var xb, IE;
function bD() {
  if (IE) return xb;
  IE = 1, xb = c;
  function c(m, g, v) {
    m instanceof RegExp && (m = s(m, v)), g instanceof RegExp && (g = s(g, v));
    var T = h(m, g, v);
    return T && {
      start: T[0],
      end: T[1],
      pre: v.slice(0, T[0]),
      body: v.slice(T[0] + m.length, T[1]),
      post: v.slice(T[1] + g.length)
    };
  }
  function s(m, g) {
    var v = g.match(m);
    return v ? v[0] : null;
  }
  c.range = h;
  function h(m, g, v) {
    var T, A, x, U, q, _ = v.indexOf(m), Y = v.indexOf(g, _ + 1), ce = _;
    if (_ >= 0 && Y > 0) {
      if (m === g)
        return [_, Y];
      for (T = [], x = v.length; ce >= 0 && !q; )
        ce == _ ? (T.push(ce), _ = v.indexOf(m, ce + 1)) : T.length == 1 ? q = [T.pop(), Y] : (A = T.pop(), A < x && (x = A, U = Y), Y = v.indexOf(g, ce + 1)), ce = _ < Y && _ >= 0 ? _ : Y;
      T.length && (q = [x, U]);
    }
    return q;
  }
  return xb;
}
var Mb, ex;
function SD() {
  if (ex) return Mb;
  ex = 1;
  var c = bD();
  Mb = s;
  function s(g, v, T) {
    var A = g;
    return h(g, v).reduce(function(x, U) {
      return x.replace(U.functionIdentifier + "(" + U.matches.body + ")", m(U.matches.body, U.functionIdentifier, T, A, v));
    }, g);
  }
  function h(g, v) {
    var T = [], A = typeof v == "string" ? new RegExp("\\b(" + v + ")\\(") : v;
    do {
      var x = A.exec(g);
      if (!x)
        return T;
      if (x[1] === void 0)
        throw new Error("Missing the first couple of parenthesis to get the function identifier in " + v);
      var U = x[1], q = x.index, _ = c("(", ")", g.substring(q));
      if (!_ || _.start !== x[0].length - 1)
        throw new SyntaxError(U + "(): missing closing ')' in the value '" + g + "'");
      T.push({ matches: _, functionIdentifier: U }), g = _.post;
    } while (A.test(g));
    return T;
  }
  function m(g, v, T, A, x) {
    return T(s(g, x, T), v, A);
  }
  return Mb;
}
var Ab, tx;
function TD() {
  if (tx) return Ab;
  tx = 1;
  var c = function(s) {
    this.value = s;
  };
  return c.math = {
    isDegree: !0,
    // mode of calculator
    acos: function(s) {
      return c.math.isDegree ? 180 / Math.PI * Math.acos(s) : Math.acos(s);
    },
    add: function(s, h) {
      return s + h;
    },
    asin: function(s) {
      return c.math.isDegree ? 180 / Math.PI * Math.asin(s) : Math.asin(s);
    },
    atan: function(s) {
      return c.math.isDegree ? 180 / Math.PI * Math.atan(s) : Math.atan(s);
    },
    acosh: function(s) {
      return Math.log(s + Math.sqrt(s * s - 1));
    },
    asinh: function(s) {
      return Math.log(s + Math.sqrt(s * s + 1));
    },
    atanh: function(s) {
      return Math.log((1 + s) / (1 - s));
    },
    C: function(s, h) {
      var m = 1, g = s - h, v = h;
      v < g && (v = g, g = h);
      for (var T = v + 1; T <= s; T++)
        m *= T;
      return m / c.math.fact(g);
    },
    changeSign: function(s) {
      return -s;
    },
    cos: function(s) {
      return c.math.isDegree && (s = c.math.toRadian(s)), Math.cos(s);
    },
    cosh: function(s) {
      return (Math.pow(Math.E, s) + Math.pow(Math.E, -1 * s)) / 2;
    },
    div: function(s, h) {
      return s / h;
    },
    fact: function(s) {
      if (s % 1 !== 0) return "NaN";
      for (var h = 1, m = 2; m <= s; m++)
        h *= m;
      return h;
    },
    inverse: function(s) {
      return 1 / s;
    },
    log: function(s) {
      return Math.log(s) / Math.log(10);
    },
    mod: function(s, h) {
      return s % h;
    },
    mul: function(s, h) {
      return s * h;
    },
    P: function(s, h) {
      for (var m = 1, g = Math.floor(s) - Math.floor(h) + 1; g <= Math.floor(s); g++)
        m *= g;
      return m;
    },
    Pi: function(s, h, m) {
      for (var g = 1, v = s; v <= h; v++)
        g *= Number(m.postfixEval({
          n: v
        }));
      return g;
    },
    pow10x: function(s) {
      for (var h = 1; s--; )
        h *= 10;
      return h;
    },
    sigma: function(s, h, m) {
      for (var g = 0, v = s; v <= h; v++)
        g += Number(m.postfixEval({
          n: v
        }));
      return g;
    },
    sin: function(s) {
      return c.math.isDegree && (s = c.math.toRadian(s)), Math.sin(s);
    },
    sinh: function(s) {
      return (Math.pow(Math.E, s) - Math.pow(Math.E, -1 * s)) / 2;
    },
    sub: function(s, h) {
      return s - h;
    },
    tan: function(s) {
      return c.math.isDegree && (s = c.math.toRadian(s)), Math.tan(s);
    },
    tanh: function(s) {
      return c.sinha(s) / c.cosha(s);
    },
    toRadian: function(s) {
      return s * Math.PI / 180;
    },
    and: function(s, h) {
      return s & h;
    }
  }, c.Exception = function(s) {
    this.message = s;
  }, Ab = c, Ab;
}
var Rb, nx;
function ED() {
  if (nx) return Rb;
  nx = 1;
  var c = TD();
  function s(me, P) {
    for (var ne = 0; ne < me.length; ne++)
      me[ne] += P;
    return me;
  }
  for (var h = [
    { token: "sin", show: "sin", type: 0, value: c.math.sin },
    { token: "cos", show: "cos", type: 0, value: c.math.cos },
    { token: "tan", show: "tan", type: 0, value: c.math.tan },
    { token: "pi", show: "&pi;", type: 3, value: "PI" },
    { token: "(", show: "(", type: 4, value: "(" },
    { token: ")", show: ")", type: 5, value: ")" },
    { token: "P", show: "P", type: 10, value: c.math.P },
    { token: "C", show: "C", type: 10, value: c.math.C },
    { token: " ", show: " ", type: 14, value: " ".anchor },
    { token: "asin", show: "asin", type: 0, value: c.math.asin },
    { token: "acos", show: "acos", type: 0, value: c.math.acos },
    { token: "atan", show: "atan", type: 0, value: c.math.atan },
    { token: "7", show: "7", type: 1, value: "7" },
    { token: "8", show: "8", type: 1, value: "8" },
    { token: "9", show: "9", type: 1, value: "9" },
    { token: "int", show: "Int", type: 0, value: Math.floor },
    { token: "cosh", show: "cosh", type: 0, value: c.math.cosh },
    { token: "acosh", show: "acosh", type: 0, value: c.math.acosh },
    { token: "ln", show: " ln", type: 0, value: Math.log },
    { token: "^", show: "^", type: 10, value: Math.pow },
    { token: "root", show: "root", type: 0, value: Math.sqrt },
    { token: "4", show: "4", type: 1, value: "4" },
    { token: "5", show: "5", type: 1, value: "5" },
    { token: "6", show: "6", type: 1, value: "6" },
    { token: "/", show: "&divide;", type: 2, value: c.math.div },
    { token: "!", show: "!", type: 7, value: c.math.fact },
    { token: "tanh", show: "tanh", type: 0, value: c.math.tanh },
    { token: "atanh", show: "atanh", type: 0, value: c.math.atanh },
    { token: "Mod", show: " Mod ", type: 2, value: c.math.mod },
    { token: "1", show: "1", type: 1, value: "1" },
    { token: "2", show: "2", type: 1, value: "2" },
    { token: "3", show: "3", type: 1, value: "3" },
    { token: "*", show: "&times;", type: 2, value: c.math.mul },
    { token: "sinh", show: "sinh", type: 0, value: c.math.sinh },
    { token: "asinh", show: "asinh", type: 0, value: c.math.asinh },
    { token: "e", show: "e", type: 3, value: "E" },
    { token: "log", show: " log", type: 0, value: c.math.log },
    { token: "0", show: "0", type: 1, value: "0" },
    { token: ".", show: ".", type: 6, value: "." },
    { token: "+", show: "+", type: 9, value: c.math.add },
    { token: "-", show: "-", type: 9, value: c.math.sub },
    { token: ",", show: ",", type: 11, value: "," },
    { token: "Sigma", show: "&Sigma;", type: 12, value: c.math.sigma },
    { token: "n", show: "n", type: 13, value: "n" },
    { token: "Pi", show: "&Pi;", type: 12, value: c.math.Pi },
    { token: "pow", show: "pow", type: 8, value: Math.pow, numberOfArguments: 2 },
    { token: "&", show: "&", type: 9, value: c.math.and }
  ], m = {
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
  }, g = 0; g < h.length; g++)
    h[g].precedence = m[h[g].type];
  var v = {
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
  }, T = {
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
  }, A = {
    0: !0,
    3: !0,
    4: !0,
    8: !0,
    12: !0,
    13: !0,
    15: !0
  }, x = {}, U = {
    0: !0,
    1: !0,
    3: !0,
    4: !0,
    6: !0,
    8: !0,
    12: !0,
    13: !0,
    15: !0
  }, q = {
    1: !0
  }, _ = [
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
  function Y(me, P, ne, k) {
    for (var ie = 0; ie < k; ie++)
      if (me[ne + ie] !== P[ie])
        return !1;
    return !0;
  }
  c.tokenTypes = {
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
  }, c.addToken = function(me) {
    for (var P = 0; P < me.length; P++) {
      var ne = me[P].token.length, k = -1;
      me[P].type === c.tokenTypes.FUNCTION_WITH_N_ARGS && me[P].numberOfArguments === void 0 && (me[P].numberOfArguments = 2), _[ne] = _[ne] || [];
      for (var ie = 0; ie < _[ne].length; ie++)
        if (me[P].token === _[ne][ie]) {
          k = ce(_[ne][ie], h);
          break;
        }
      k === -1 ? (h.push(me[P]), me[P].precedence = m[me[P].type], _.length <= me[P].token.length && (_[me[P].token.length] = []), _[me[P].token.length].push(me[P].token)) : (h[k] = me[P], me[P].precedence = m[me[P].type]);
    }
  };
  function ce(me, P) {
    for (var ne = 0; ne < P.length; ne++)
      if (P[ne].token === me) return ne;
    return -1;
  }
  function pe(me) {
    for (var P = [], ne = me.length, k, ie, ve, He = 0; He < ne; He++)
      if (!(He < ne - 1 && me[He] === " " && me[He + 1] === " ")) {
        for (k = "", ie = me.length - He > _.length - 2 ? _.length - 1 : me.length - He; ie > 0; ie--)
          if (_[ie] !== void 0)
            for (ve = 0; ve < _[ie].length; ve++)
              Y(me, _[ie][ve], He, ie) && (k = _[ie][ve], ve = _[ie].length, ie = 0);
        if (He += k.length - 1, k === "")
          throw new c.Exception("Can't understand after " + me.slice(He));
        P.push(h[ce(k, h)]);
      }
    return P;
  }
  var ge = {
    value: c.math.changeSign,
    type: 0,
    pre: 21,
    show: "-"
  }, ye = {
    value: ")",
    show: ")",
    type: 5,
    pre: 0
  }, Se = {
    value: "(",
    type: 4,
    pre: 0,
    show: "("
  };
  return c.lex = function(me, P) {
    var ne = [Se], k = [], ie = me, ve = v, He = 0, fe = x, Ve = "", de;
    typeof P < "u" && c.addToken(P);
    var Te = {}, _e = pe(ie);
    for (de = 0; de < _e.length; de++) {
      var qe = _e[de];
      if (qe.type === 14) {
        if (de > 0 && de < _e.length - 1 && _e[de + 1].type === 1 && (_e[de - 1].type === 1 || _e[de - 1].type === 6))
          throw new c.Exception("Unexpected Space");
        continue;
      }
      var et = qe.token, C = qe.type, K = qe.value, oe = qe.precedence, Me = qe.show, O = ne[ne.length - 1], $;
      for ($ = k.length; $-- && k[$] === 0; )
        if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(C) !== -1) {
          if (ve[C] !== !0)
            throw new c.Exception(et + " is not allowed after " + Ve);
          ne.push(ye), ve = T, fe = U, k.pop();
        }
      if (ve[C] !== !0)
        throw new c.Exception(et + " is not allowed after " + Ve);
      if (fe[C] === !0 && (C = 2, K = c.math.mul, Me = "&times;", oe = 3, de = de - 1), Te = {
        value: K,
        type: C,
        pre: oe,
        show: Me,
        numberOfArguments: qe.numberOfArguments
      }, C === 0)
        ve = v, fe = x, s(k, 2), ne.push(Te), _e[de + 1].type !== 4 && (ne.push(Se), k.push(2));
      else if (C === 1)
        O.type === 1 ? (O.value += K, s(k, 1)) : ne.push(Te), ve = T, fe = A;
      else if (C === 2)
        ve = v, fe = x, s(k, 2), ne.push(Te);
      else if (C === 3)
        ne.push(Te), ve = T, fe = U;
      else if (C === 4)
        s(k, 1), He++, ve = v, fe = x, ne.push(Te);
      else if (C === 5) {
        if (!He)
          throw new c.Exception("Closing parenthesis are more than opening one, wait What!!!");
        He--, ve = T, fe = U, ne.push(Te), s(k, 1);
      } else if (C === 6) {
        if (O.hasDec)
          throw new c.Exception("Two decimals are not allowed in one number");
        O.type !== 1 && (O = {
          value: 0,
          type: 1,
          pre: 0
        }, ne.push(O)), ve = q, s(k, 1), fe = x, O.value += K, O.hasDec = !0;
      } else C === 7 && (ve = T, fe = U, s(k, 1), ne.push(Te));
      C === 8 ? (ve = v, fe = x, s(k, qe.numberOfArguments + 2), ne.push(Te), _e[de + 1].type !== 4 && (ne.push(Se), k.push(qe.numberOfArguments + 2))) : C === 9 ? (O.type === 9 ? O.value === c.math.add ? (O.value = K, O.show = Me, s(k, 1)) : O.value === c.math.sub && Me === "-" && (O.value = c.math.add, O.show = "+", s(k, 1)) : O.type !== 5 && O.type !== 7 && O.type !== 1 && O.type !== 3 && O.type !== 13 ? et === "-" && (ve = v, fe = x, s(k, 2).push(2), ne.push(ge), ne.push(Se)) : (ne.push(Te), s(k, 2)), ve = v, fe = x) : C === 10 ? (ve = v, fe = x, s(k, 2), ne.push(Te)) : C === 11 ? (ve = v, fe = x, ne.push(Te)) : C === 12 ? (ve = v, fe = x, s(k, 6), ne.push(Te), _e[de + 1].type !== 4 && (ne.push(Se), k.push(6))) : C === 13 && (ve = T, fe = U, ne.push(Te)), s(k, -1), Ve = et;
    }
    for ($ = k.length; $--; )
      ne.push(ye);
    if (ve[5] !== !0)
      throw new c.Exception("complete the expression");
    for (; He--; )
      ne.push(ye);
    return ne.push(ye), new c(ne);
  }, Rb = c, Rb;
}
var Ob, ax;
function xD() {
  if (ax) return Ob;
  ax = 1;
  var c = ED();
  return c.prototype.toPostfix = function() {
    for (var s = [], h, m, g, v, T, A = [{ value: "(", type: 4, pre: 0 }], x = this.value, U = 1; U < x.length; U++)
      if (x[U].type === 1 || x[U].type === 3 || x[U].type === 13)
        x[U].type === 1 && (x[U].value = Number(x[U].value)), s.push(x[U]);
      else if (x[U].type === 4)
        A.push(x[U]);
      else if (x[U].type === 5)
        for (; (m = A.pop()).type !== 4; )
          s.push(m);
      else if (x[U].type === 11) {
        for (; (m = A.pop()).type !== 4; )
          s.push(m);
        A.push(m);
      } else {
        h = x[U], v = h.pre, T = A[A.length - 1], g = T.pre;
        var q = T.value == "Math.pow" && h.value == "Math.pow";
        if (v > g) A.push(h);
        else {
          for (; g >= v && !q || q && v < g; )
            m = A.pop(), T = A[A.length - 1], s.push(m), g = T.pre, q = h.value == "Math.pow" && T.value == "Math.pow";
          A.push(h);
        }
      }
    return new c(s);
  }, Ob = c, Ob;
}
var Db, lx;
function MD() {
  if (lx) return Db;
  lx = 1;
  var c = xD();
  return c.prototype.postfixEval = function(s) {
    s = s || {}, s.PI = Math.PI, s.E = Math.E;
    for (var h = [], m, g, v, T = this.value, A = typeof s.n < "u", x = 0; x < T.length; x++)
      if (T[x].type === 1)
        h.push({ value: T[x].value, type: 1 });
      else if (T[x].type === 3)
        h.push({ value: s[T[x].value], type: 1 });
      else if (T[x].type === 0)
        typeof h[h.length - 1].type > "u" ? h[h.length - 1].value.push(T[x]) : h[h.length - 1].value = T[x].value(h[h.length - 1].value);
      else if (T[x].type === 7)
        typeof h[h.length - 1].type > "u" ? h[h.length - 1].value.push(T[x]) : h[h.length - 1].value = T[x].value(h[h.length - 1].value);
      else if (T[x].type === 8) {
        for (var U = [], q = 0; q < T[x].numberOfArguments; q++)
          U.push(h.pop().value);
        h.push({ type: 1, value: T[x].value.apply(T[x], U.reverse()) });
      } else T[x].type === 10 ? (m = h.pop(), g = h.pop(), typeof g.type > "u" ? (g.value = g.concat(m), g.value.push(T[x]), h.push(g)) : typeof m.type > "u" ? (m.unshift(g), m.push(T[x]), h.push(m)) : h.push({ type: 1, value: T[x].value(g.value, m.value) })) : T[x].type === 2 || T[x].type === 9 ? (m = h.pop(), g = h.pop(), typeof g.type > "u" ? (g = g.concat(m), g.push(T[x]), h.push(g)) : typeof m.type > "u" ? (m.unshift(g), m.push(T[x]), h.push(m)) : h.push({ type: 1, value: T[x].value(g.value, m.value) })) : T[x].type === 12 ? (m = h.pop(), typeof m.type < "u" && (m = [m]), g = h.pop(), v = h.pop(), h.push({ type: 1, value: T[x].value(v.value, g.value, new c(m)) })) : T[x].type === 13 && (A ? h.push({ value: s[T[x].value], type: 3 }) : h.push([T[x]]));
    if (h.length > 1)
      throw new c.Exception("Uncaught Syntax error");
    return h[0].value > 1e15 ? "Infinity" : parseFloat(h[0].value.toFixed(15));
  }, c.eval = function(s, h, m) {
    return typeof h > "u" ? this.lex(s).toPostfix().postfixEval() : typeof m > "u" ? typeof h.length < "u" ? this.lex(s, h).toPostfix().postfixEval() : this.lex(s).toPostfix().postfixEval(h) : this.lex(s, h).toPostfix().postfixEval(m);
  }, Db = c, Db;
}
var zb, ux;
function AD() {
  if (ux) return zb;
  ux = 1;
  var c = MD();
  return c.prototype.formulaEval = function() {
    for (var s, h, m, g = [], v = this.value, T = 0; T < v.length; T++)
      v[T].type === 1 || v[T].type === 3 ? g.push({ value: v[T].type === 3 ? v[T].show : v[T].value, type: 1 }) : v[T].type === 13 ? g.push({ value: v[T].show, type: 1 }) : v[T].type === 0 ? g[g.length - 1] = { value: v[T].show + (v[T].show != "-" ? "(" : "") + g[g.length - 1].value + (v[T].show != "-" ? ")" : ""), type: 0 } : v[T].type === 7 ? g[g.length - 1] = { value: (g[g.length - 1].type != 1 ? "(" : "") + g[g.length - 1].value + (g[g.length - 1].type != 1 ? ")" : "") + v[T].show, type: 7 } : v[T].type === 10 ? (s = g.pop(), h = g.pop(), v[T].show === "P" || v[T].show === "C" ? g.push({ value: "<sup>" + h.value + "</sup>" + v[T].show + "<sub>" + s.value + "</sub>", type: 10 }) : g.push({ value: (h.type != 1 ? "(" : "") + h.value + (h.type != 1 ? ")" : "") + "<sup>" + s.value + "</sup>", type: 1 })) : v[T].type === 2 || v[T].type === 9 ? (s = g.pop(), h = g.pop(), g.push({ value: (h.type != 1 ? "(" : "") + h.value + (h.type != 1 ? ")" : "") + v[T].show + (s.type != 1 ? "(" : "") + s.value + (s.type != 1 ? ")" : ""), type: v[T].type })) : v[T].type === 12 && (s = g.pop(), h = g.pop(), m = g.pop(), g.push({ value: v[T].show + "(" + m.value + "," + h.value + "," + s.value + ")", type: 12 }));
    return g[0].value;
  }, zb = c, zb;
}
var Cb, ix;
function RD() {
  if (ix) return Cb;
  ix = 1;
  var c = gD(), s = SD(), h = AD(), m = 100, g = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g, v;
  Cb = T;
  function T(x, U) {
    v = 0, U = Math.pow(10, U === void 0 ? 5 : U), x = x.replace(/\n+/g, " ");
    function q(Y, ce, pe) {
      if (v++ > m)
        throw v = 0, new Error("Call stack overflow for " + pe);
      if (Y === "")
        throw new Error(ce + "(): '" + pe + "' must contain a non-whitespace string");
      Y = _(Y, pe);
      var ge = A(Y);
      if (ge.length > 1 || Y.indexOf("var(") > -1)
        return ce + "(" + Y + ")";
      var ye = ge[0] || "";
      ye === "%" && (Y = Y.replace(/\b[0-9\.]+%/g, function(P) {
        return parseFloat(P.slice(0, -1)) * 0.01;
      }));
      var Se = Y.replace(new RegExp(ye, "gi"), ""), me;
      try {
        me = h.eval(Se);
      } catch {
        return ce + "(" + Y + ")";
      }
      return ye === "%" && (me *= 100), (ce.length || ye === "%") && (me = Math.round(me * U) / U), me += ye, me;
    }
    function _(Y, ce) {
      Y = Y.replace(/((?:\-[a-z]+\-)?calc)/g, "");
      for (var pe = "", ge = Y, ye; ye = g.exec(ge); ) {
        ye[0].index > 0 && (pe += ge.substring(0, ye[0].index));
        var Se = c("(", ")", ge.substring([0].index));
        if (Se.body === "")
          throw new Error("'" + Y + "' must contain a non-whitespace string");
        var me = q(Se.body, "", ce);
        pe += Se.pre + me, ge = Se.post;
      }
      return pe + ge;
    }
    return s(x, /((?:\-[a-z]+\-)?calc)\(/, q);
  }
  function A(x) {
    for (var U = [], q = [], _ = /[\.0-9]([%a-z]+)/gi, Y = _.exec(x); Y; )
      !Y || !Y[1] || (q.indexOf(Y[1].toLowerCase()) === -1 && (U.push(Y[1]), q.push(Y[1].toLowerCase())), Y = _.exec(x));
    return U;
  }
  return Cb;
}
var OD = RD();
const Ub = /* @__PURE__ */ n0(OD);
var Hb, cx;
function DD() {
  if (cx) return Hb;
  cx = 1;
  var c = typeof eg == "object" && eg && eg.Object === Object && eg;
  return Hb = c, Hb;
}
var _b, ox;
function PS() {
  if (ox) return _b;
  ox = 1;
  var c = DD(), s = typeof self == "object" && self && self.Object === Object && self, h = c || s || Function("return this")();
  return _b = h, _b;
}
var wb, rx;
function YM() {
  if (rx) return wb;
  rx = 1;
  var c = PS(), s = c.Symbol;
  return wb = s, wb;
}
var Nb, fx;
function zD() {
  if (fx) return Nb;
  fx = 1;
  var c = YM(), s = Object.prototype, h = s.hasOwnProperty, m = s.toString, g = c ? c.toStringTag : void 0;
  function v(T) {
    var A = h.call(T, g), x = T[g];
    try {
      T[g] = void 0;
      var U = !0;
    } catch {
    }
    var q = m.call(T);
    return U && (A ? T[g] = x : delete T[g]), q;
  }
  return Nb = v, Nb;
}
var qb, sx;
function CD() {
  if (sx) return qb;
  sx = 1;
  var c = Object.prototype, s = c.toString;
  function h(m) {
    return s.call(m);
  }
  return qb = h, qb;
}
var Yb, dx;
function UD() {
  if (dx) return Yb;
  dx = 1;
  var c = YM(), s = zD(), h = CD(), m = "[object Null]", g = "[object Undefined]", v = c ? c.toStringTag : void 0;
  function T(A) {
    return A == null ? A === void 0 ? g : m : v && v in Object(A) ? s(A) : h(A);
  }
  return Yb = T, Yb;
}
var jb, hx;
function jM() {
  if (hx) return jb;
  hx = 1;
  function c(s) {
    var h = typeof s;
    return s != null && (h == "object" || h == "function");
  }
  return jb = c, jb;
}
var Bb, yx;
function HD() {
  if (yx) return Bb;
  yx = 1;
  var c = UD(), s = jM(), h = "[object AsyncFunction]", m = "[object Function]", g = "[object GeneratorFunction]", v = "[object Proxy]";
  function T(A) {
    if (!s(A))
      return !1;
    var x = c(A);
    return x == m || x == g || x == h || x == v;
  }
  return Bb = T, Bb;
}
var Lb, mx;
function _D() {
  if (mx) return Lb;
  mx = 1;
  var c = PS(), s = c["__core-js_shared__"];
  return Lb = s, Lb;
}
var Gb, px;
function wD() {
  if (px) return Gb;
  px = 1;
  var c = _D(), s = function() {
    var m = /[^.]+$/.exec(c && c.keys && c.keys.IE_PROTO || "");
    return m ? "Symbol(src)_1." + m : "";
  }();
  function h(m) {
    return !!s && s in m;
  }
  return Gb = h, Gb;
}
var Vb, vx;
function ND() {
  if (vx) return Vb;
  vx = 1;
  var c = Function.prototype, s = c.toString;
  function h(m) {
    if (m != null) {
      try {
        return s.call(m);
      } catch {
      }
      try {
        return m + "";
      } catch {
      }
    }
    return "";
  }
  return Vb = h, Vb;
}
var Xb, gx;
function qD() {
  if (gx) return Xb;
  gx = 1;
  var c = HD(), s = wD(), h = jM(), m = ND(), g = /[\\^$.*+?()[\]{}|]/g, v = /^\[object .+?Constructor\]$/, T = Function.prototype, A = Object.prototype, x = T.toString, U = A.hasOwnProperty, q = RegExp(
    "^" + x.call(U).replace(g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function _(Y) {
    if (!h(Y) || s(Y))
      return !1;
    var ce = c(Y) ? q : v;
    return ce.test(m(Y));
  }
  return Xb = _, Xb;
}
var Qb, bx;
function YD() {
  if (bx) return Qb;
  bx = 1;
  function c(s, h) {
    return s == null ? void 0 : s[h];
  }
  return Qb = c, Qb;
}
var Zb, Sx;
function BM() {
  if (Sx) return Zb;
  Sx = 1;
  var c = qD(), s = YD();
  function h(m, g) {
    var v = s(m, g);
    return c(v) ? v : void 0;
  }
  return Zb = h, Zb;
}
var kb, Tx;
function Hg() {
  if (Tx) return kb;
  Tx = 1;
  var c = BM(), s = c(Object, "create");
  return kb = s, kb;
}
var $b, Ex;
function jD() {
  if (Ex) return $b;
  Ex = 1;
  var c = Hg();
  function s() {
    this.__data__ = c ? c(null) : {}, this.size = 0;
  }
  return $b = s, $b;
}
var Jb, xx;
function BD() {
  if (xx) return Jb;
  xx = 1;
  function c(s) {
    var h = this.has(s) && delete this.__data__[s];
    return this.size -= h ? 1 : 0, h;
  }
  return Jb = c, Jb;
}
var Kb, Mx;
function LD() {
  if (Mx) return Kb;
  Mx = 1;
  var c = Hg(), s = "__lodash_hash_undefined__", h = Object.prototype, m = h.hasOwnProperty;
  function g(v) {
    var T = this.__data__;
    if (c) {
      var A = T[v];
      return A === s ? void 0 : A;
    }
    return m.call(T, v) ? T[v] : void 0;
  }
  return Kb = g, Kb;
}
var Wb, Ax;
function GD() {
  if (Ax) return Wb;
  Ax = 1;
  var c = Hg(), s = Object.prototype, h = s.hasOwnProperty;
  function m(g) {
    var v = this.__data__;
    return c ? v[g] !== void 0 : h.call(v, g);
  }
  return Wb = m, Wb;
}
var Fb, Rx;
function VD() {
  if (Rx) return Fb;
  Rx = 1;
  var c = Hg(), s = "__lodash_hash_undefined__";
  function h(m, g) {
    var v = this.__data__;
    return this.size += this.has(m) ? 0 : 1, v[m] = c && g === void 0 ? s : g, this;
  }
  return Fb = h, Fb;
}
var Pb, Ox;
function XD() {
  if (Ox) return Pb;
  Ox = 1;
  var c = jD(), s = BD(), h = LD(), m = GD(), g = VD();
  function v(T) {
    var A = -1, x = T == null ? 0 : T.length;
    for (this.clear(); ++A < x; ) {
      var U = T[A];
      this.set(U[0], U[1]);
    }
  }
  return v.prototype.clear = c, v.prototype.delete = s, v.prototype.get = h, v.prototype.has = m, v.prototype.set = g, Pb = v, Pb;
}
var Ib, Dx;
function QD() {
  if (Dx) return Ib;
  Dx = 1;
  function c() {
    this.__data__ = [], this.size = 0;
  }
  return Ib = c, Ib;
}
var eS, zx;
function ZD() {
  if (zx) return eS;
  zx = 1;
  function c(s, h) {
    return s === h || s !== s && h !== h;
  }
  return eS = c, eS;
}
var tS, Cx;
function _g() {
  if (Cx) return tS;
  Cx = 1;
  var c = ZD();
  function s(h, m) {
    for (var g = h.length; g--; )
      if (c(h[g][0], m))
        return g;
    return -1;
  }
  return tS = s, tS;
}
var nS, Ux;
function kD() {
  if (Ux) return nS;
  Ux = 1;
  var c = _g(), s = Array.prototype, h = s.splice;
  function m(g) {
    var v = this.__data__, T = c(v, g);
    if (T < 0)
      return !1;
    var A = v.length - 1;
    return T == A ? v.pop() : h.call(v, T, 1), --this.size, !0;
  }
  return nS = m, nS;
}
var aS, Hx;
function $D() {
  if (Hx) return aS;
  Hx = 1;
  var c = _g();
  function s(h) {
    var m = this.__data__, g = c(m, h);
    return g < 0 ? void 0 : m[g][1];
  }
  return aS = s, aS;
}
var lS, _x;
function JD() {
  if (_x) return lS;
  _x = 1;
  var c = _g();
  function s(h) {
    return c(this.__data__, h) > -1;
  }
  return lS = s, lS;
}
var uS, wx;
function KD() {
  if (wx) return uS;
  wx = 1;
  var c = _g();
  function s(h, m) {
    var g = this.__data__, v = c(g, h);
    return v < 0 ? (++this.size, g.push([h, m])) : g[v][1] = m, this;
  }
  return uS = s, uS;
}
var iS, Nx;
function WD() {
  if (Nx) return iS;
  Nx = 1;
  var c = QD(), s = kD(), h = $D(), m = JD(), g = KD();
  function v(T) {
    var A = -1, x = T == null ? 0 : T.length;
    for (this.clear(); ++A < x; ) {
      var U = T[A];
      this.set(U[0], U[1]);
    }
  }
  return v.prototype.clear = c, v.prototype.delete = s, v.prototype.get = h, v.prototype.has = m, v.prototype.set = g, iS = v, iS;
}
var cS, qx;
function FD() {
  if (qx) return cS;
  qx = 1;
  var c = BM(), s = PS(), h = c(s, "Map");
  return cS = h, cS;
}
var oS, Yx;
function PD() {
  if (Yx) return oS;
  Yx = 1;
  var c = XD(), s = WD(), h = FD();
  function m() {
    this.size = 0, this.__data__ = {
      hash: new c(),
      map: new (h || s)(),
      string: new c()
    };
  }
  return oS = m, oS;
}
var rS, jx;
function ID() {
  if (jx) return rS;
  jx = 1;
  function c(s) {
    var h = typeof s;
    return h == "string" || h == "number" || h == "symbol" || h == "boolean" ? s !== "__proto__" : s === null;
  }
  return rS = c, rS;
}
var fS, Bx;
function wg() {
  if (Bx) return fS;
  Bx = 1;
  var c = ID();
  function s(h, m) {
    var g = h.__data__;
    return c(m) ? g[typeof m == "string" ? "string" : "hash"] : g.map;
  }
  return fS = s, fS;
}
var sS, Lx;
function e4() {
  if (Lx) return sS;
  Lx = 1;
  var c = wg();
  function s(h) {
    var m = c(this, h).delete(h);
    return this.size -= m ? 1 : 0, m;
  }
  return sS = s, sS;
}
var dS, Gx;
function t4() {
  if (Gx) return dS;
  Gx = 1;
  var c = wg();
  function s(h) {
    return c(this, h).get(h);
  }
  return dS = s, dS;
}
var hS, Vx;
function n4() {
  if (Vx) return hS;
  Vx = 1;
  var c = wg();
  function s(h) {
    return c(this, h).has(h);
  }
  return hS = s, hS;
}
var yS, Xx;
function a4() {
  if (Xx) return yS;
  Xx = 1;
  var c = wg();
  function s(h, m) {
    var g = c(this, h), v = g.size;
    return g.set(h, m), this.size += g.size == v ? 0 : 1, this;
  }
  return yS = s, yS;
}
var mS, Qx;
function l4() {
  if (Qx) return mS;
  Qx = 1;
  var c = PD(), s = e4(), h = t4(), m = n4(), g = a4();
  function v(T) {
    var A = -1, x = T == null ? 0 : T.length;
    for (this.clear(); ++A < x; ) {
      var U = T[A];
      this.set(U[0], U[1]);
    }
  }
  return v.prototype.clear = c, v.prototype.delete = s, v.prototype.get = h, v.prototype.has = m, v.prototype.set = g, mS = v, mS;
}
var pS, Zx;
function u4() {
  if (Zx) return pS;
  Zx = 1;
  var c = l4(), s = "Expected a function";
  function h(m, g) {
    if (typeof m != "function" || g != null && typeof g != "function")
      throw new TypeError(s);
    var v = function() {
      var T = arguments, A = g ? g.apply(this, T) : T[0], x = v.cache;
      if (x.has(A))
        return x.get(A);
      var U = m.apply(this, T);
      return v.cache = x.set(A, U) || x, U;
    };
    return v.cache = new (h.Cache || c)(), v;
  }
  return h.Cache = c, pS = h, pS;
}
var i4 = u4();
const c4 = /* @__PURE__ */ n0(i4);
var kx = "__react_svg_text_measurement_id";
function o4(c, s) {
  try {
    var h = document.getElementById(kx);
    if (!h) {
      var m = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      m.setAttribute("aria-hidden", "true"), m.style.width = "0", m.style.height = "0", m.style.position = "absolute", m.style.top = "-100%", m.style.left = "-100%", h = document.createElementNS("http://www.w3.org/2000/svg", "text"), h.setAttribute("id", kx), m.appendChild(h), document.body.appendChild(m);
    }
    return Object.assign(h.style, s), h.textContent = c, h.getComputedTextLength();
  } catch {
    return null;
  }
}
const $x = c4(o4, function(c, s) {
  return c + "_" + JSON.stringify(s);
});
var r4 = ["verticalAnchor", "scaleToFit", "angle", "width", "lineHeight", "capHeight", "children", "style"];
function f4(c, s) {
  if (c == null) return {};
  var h = {}, m = Object.keys(c), g, v;
  for (v = 0; v < m.length; v++)
    g = m[v], !(s.indexOf(g) >= 0) && (h[g] = c[g]);
  return h;
}
function vS(c) {
  return typeof c == "number";
}
function Jx(c) {
  return (
    // number that is not NaN or Infinity
    typeof c == "number" && Number.isFinite(c) || // for percentage
    typeof c == "string"
  );
}
function s4(c) {
  var s = c.verticalAnchor, h = s === void 0 ? "end" : s, m = c.scaleToFit, g = m === void 0 ? !1 : m, v = c.angle, T = c.width, A = c.lineHeight, x = A === void 0 ? "1em" : A, U = c.capHeight, q = U === void 0 ? "0.71em" : U, _ = c.children, Y = c.style, ce = f4(c, r4), pe = ce.x, ge = pe === void 0 ? 0 : pe, ye = ce.y, Se = ye === void 0 ? 0 : ye, me = !Jx(ge) || !Jx(Se), P = Iv(function() {
    var fe = _ == null ? [] : _.toString().split(/(?:(?!\u00A0+)\s+)/);
    return {
      wordsWithWidth: fe.map(function(Ve) {
        return {
          word: Ve,
          wordWidth: $x(Ve, Y) || 0
        };
      }),
      spaceWidth: $x(" ", Y) || 0
    };
  }, [_, Y]), ne = P.wordsWithWidth, k = P.spaceWidth, ie = Iv(function() {
    return me ? [] : T || g ? ne.reduce(function(fe, Ve) {
      var de = Ve.word, Te = Ve.wordWidth, _e = fe[fe.length - 1];
      if (_e && (T == null || g || (_e.width || 0) + Te + k < T))
        _e.words.push(de), _e.width = _e.width || 0, _e.width += Te + k;
      else {
        var qe = {
          words: [de],
          width: Te
        };
        fe.push(qe);
      }
      return fe;
    }, []) : [{
      words: _ == null ? [] : _.toString().split(/(?:(?!\u00A0+)\s+)/)
    }];
  }, [me, T, g, _, ne, k]), ve = Iv(function() {
    var fe = me ? "" : Ub(h === "start" ? "calc(" + q + ")" : h === "middle" ? "calc(" + (ie.length - 1) / 2 + " * -" + x + " + (" + q + " / 2))" : "calc(" + (ie.length - 1) + " * -" + x + ")");
    return fe;
  }, [me, h, q, ie.length, x]), He = Iv(function() {
    var fe = [];
    if (me)
      return "";
    if (vS(ge) && vS(Se) && vS(T) && g && ie.length > 0) {
      var Ve = ie[0].width || 1, de = g === "shrink-only" ? Math.min(T / Ve, 1) : T / Ve, Te = de, _e = ge - de * ge, qe = Se - Te * Se;
      fe.push("matrix(" + de + ", 0, 0, " + Te + ", " + _e + ", " + qe + ")");
    }
    return v && fe.push("rotate(" + v + ", " + ge + ", " + Se + ")"), fe.length > 0 ? fe.join(" ") : "";
  }, [me, ge, Se, T, g, ie, v]);
  return {
    wordsByLines: ie,
    startDy: ve,
    transform: He
  };
}
var d4 = ["dx", "dy", "textAnchor", "innerRef", "innerTextRef", "verticalAnchor", "angle", "lineHeight", "scaleToFit", "capHeight", "width"];
function BS() {
  return BS = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, BS.apply(this, arguments);
}
function h4(c, s) {
  if (c == null) return {};
  var h = {}, m = Object.keys(c), g, v;
  for (v = 0; v < m.length; v++)
    g = m[v], !(s.indexOf(g) >= 0) && (h[g] = c[g]);
  return h;
}
var y4 = {
  overflow: "visible"
};
function LM(c) {
  var s = c.dx, h = s === void 0 ? 0 : s, m = c.dy, g = m === void 0 ? 0 : m, v = c.textAnchor, T = v === void 0 ? "start" : v, A = c.innerRef, x = c.innerTextRef;
  c.verticalAnchor, c.angle;
  var U = c.lineHeight, q = U === void 0 ? "1em" : U;
  c.scaleToFit, c.capHeight, c.width;
  var _ = h4(c, d4), Y = _.x, ce = Y === void 0 ? 0 : Y, pe = _.fontSize, ge = s4(c), ye = ge.wordsByLines, Se = ge.startDy, me = ge.transform;
  return /* @__PURE__ */ Wt.createElement("svg", {
    ref: A,
    x: h,
    y: g,
    fontSize: pe,
    style: y4
  }, ye.length > 0 ? /* @__PURE__ */ Wt.createElement("text", BS({
    ref: x,
    transform: me
  }, _, {
    textAnchor: T
  }), ye.map(function(P, ne) {
    return /* @__PURE__ */ Wt.createElement("tspan", {
      key: ne,
      x: ce,
      dy: ne === 0 ? Se : q
    }, P.words.join(" "));
  })) : null);
}
var El = {
  top: "top",
  left: "left",
  bottom: "bottom"
};
function m4(c) {
  var s = c.labelOffset, h = c.labelProps, m = c.orientation, g = c.range, v = c.tickLabelFontSize, T = c.tickLength, A = m === El.left || m === El.top ? -1 : 1, x, U, q;
  if (m === El.top || m === El.bottom) {
    var _ = m === El.bottom && typeof h.fontSize == "number" ? h.fontSize : 0;
    x = (Number(g[0]) + Number(g[g.length - 1])) / 2, U = A * (T + s + v + _);
  } else
    x = A * ((Number(g[0]) + Number(g[g.length - 1])) / 2), U = -(T + s), q = "rotate(" + A * 90 + ")";
  return {
    x,
    y: U,
    transform: q
  };
}
function Wp() {
  return Wp = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, Wp.apply(this, arguments);
}
function p4(c) {
  var s = c.hideTicks, h = c.horizontal, m = c.orientation, g = c.tickClassName, v = c.tickComponent, T = c.tickLabelProps, A = c.tickStroke, x = A === void 0 ? "#222" : A, U = c.tickTransform, q = c.ticks, _ = c.strokeWidth, Y = c.tickLineProps;
  return q.map(function(ce) {
    var pe, ge = ce.value, ye = ce.index, Se = ce.from, me = ce.to, P = ce.formattedValue, ne = (pe = T[ye]) != null ? pe : {}, k = Math.max(10, typeof ne.fontSize == "number" && ne.fontSize || 0), ie = me.y + (h && m !== El.top ? k : 0);
    return /* @__PURE__ */ Wt.createElement(Ug, {
      key: "visx-tick-" + ge + "-" + ye,
      className: Zi("visx-axis-tick", g),
      transform: U
    }, !s && /* @__PURE__ */ Wt.createElement(qM, Wp({
      from: Se,
      to: me,
      stroke: x,
      strokeWidth: _,
      strokeLinecap: "square"
    }, Y)), v ? v(Wp({}, ne, {
      x: me.x,
      y: ie,
      formattedValue: P
    })) : /* @__PURE__ */ Wt.createElement(LM, Wp({
      x: me.x,
      y: ie
    }, ne), P));
  });
}
function Fp() {
  return Fp = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, Fp.apply(this, arguments);
}
var Kx = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function v4(c) {
  var s = c.axisFromPoint, h = c.axisLineClassName, m = c.axisToPoint, g = c.hideAxisLine, v = c.hideTicks, T = c.horizontal, A = c.label, x = A === void 0 ? "" : A, U = c.labelClassName, q = c.labelOffset, _ = q === void 0 ? 14 : q, Y = c.labelProps, ce = c.orientation, pe = ce === void 0 ? El.bottom : ce, ge = c.scale, ye = c.stroke, Se = ye === void 0 ? "#222" : ye, me = c.strokeDasharray, P = c.strokeWidth, ne = P === void 0 ? 1 : P, k = c.tickClassName, ie = c.tickComponent, ve = c.tickLineProps, He = c.tickLabelProps, fe = c.tickLength, Ve = fe === void 0 ? 8 : fe, de = c.tickStroke, Te = de === void 0 ? "#222" : de, _e = c.tickTransform, qe = c.ticks, et = c.ticksComponent, C = et === void 0 ? p4 : et, K = Fp({}, Kx, Y), oe = Fp({}, Kx, typeof He == "object" ? He : null), Me = qe.map(function($) {
    var le = $.value, se = $.index;
    return typeof He == "function" ? He(le, se, qe) : oe;
  }), O = Math.max.apply(Math, [10].concat(Me.map(function($) {
    return typeof $.fontSize == "number" ? $.fontSize : 0;
  })));
  return /* @__PURE__ */ Wt.createElement(Wt.Fragment, null, C({
    hideTicks: v,
    horizontal: T,
    orientation: pe,
    scale: ge,
    tickClassName: k,
    tickComponent: ie,
    tickLabelProps: Me,
    tickStroke: Te,
    tickTransform: _e,
    ticks: qe,
    strokeWidth: ne,
    tickLineProps: ve
  }), !g && /* @__PURE__ */ Wt.createElement(qM, {
    className: Zi("visx-axis-line", h),
    from: s,
    to: m,
    stroke: Se,
    strokeWidth: ne,
    strokeDasharray: me
  }), x && /* @__PURE__ */ Wt.createElement(LM, Fp({
    className: Zi("visx-axis-label", U)
  }, m4({
    labelOffset: _,
    labelProps: K,
    orientation: pe,
    range: ge.range(),
    tickLabelFontSize: O,
    tickLength: Ve
  }), K), x));
}
function g4(c, s) {
  s === void 0 && (s = "center");
  var h = c;
  if (s !== "start" && "bandwidth" in h) {
    var m = h.bandwidth();
    return s === "center" && (m /= 2), h.round() && (m = Math.round(m)), function(g) {
      var v = h(g);
      return typeof v == "number" ? v + m : v;
    };
  }
  return c;
}
function b4(c) {
  var s = c;
  return "tickFormat" in s ? s.tickFormat() : J3;
}
var LS = /* @__PURE__ */ function() {
  function c(h) {
    var m = h.x, g = m === void 0 ? 0 : m, v = h.y, T = v === void 0 ? 0 : v;
    this.x = 0, this.y = 0, this.x = g, this.y = T;
  }
  var s = c.prototype;
  return s.value = function() {
    return {
      x: this.x,
      y: this.y
    };
  }, s.toArray = function() {
    return [this.x, this.y];
  }, c;
}();
function fg(c, s) {
  var h = c.x, m = c.y;
  return new LS(s ? {
    x: h,
    y: m
  } : {
    x: m,
    y: h
  });
}
function GS() {
  return GS = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, GS.apply(this, arguments);
}
var gS = 0;
function S4(c) {
  return c === void 0 && (c = gS), typeof c == "number" ? {
    start: c,
    end: c
  } : GS({
    start: gS,
    end: gS
  }, c);
}
var T4 = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function VS() {
  return VS = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, VS.apply(this, arguments);
}
function E4(c, s) {
  if (c == null) return {};
  var h = {}, m = Object.keys(c), g, v;
  for (v = 0; v < m.length; v++)
    g = m[v], !(s.indexOf(g) >= 0) && (h[g] = c[g]);
  return h;
}
function GM(c) {
  var s = c.children, h = s === void 0 ? v4 : s, m = c.axisClassName, g = c.hideAxisLine, v = g === void 0 ? !1 : g, T = c.hideTicks, A = T === void 0 ? !1 : T, x = c.hideZero, U = x === void 0 ? !1 : x, q = c.innerRef, _ = c.left, Y = _ === void 0 ? 0 : _, ce = c.numTicks, pe = ce === void 0 ? 10 : ce, ge = c.orientation, ye = ge === void 0 ? El.bottom : ge, Se = c.rangePadding, me = Se === void 0 ? 0 : Se, P = c.scale, ne = c.tickFormat, k = c.tickLength, ie = k === void 0 ? 8 : k, ve = c.tickValues, He = c.top, fe = He === void 0 ? 0 : He, Ve = E4(c, T4), de = ne ?? b4(P), Te = ye === El.left, _e = ye === El.top, qe = _e || ye === El.bottom, et = g4(P), C = Te || _e ? -1 : 1, K = P.range(), oe = S4(me), Me = fg({
    x: Number(K[0]) + 0.5 - oe.start,
    y: 0
  }, qe), O = fg({
    x: Number(K[K.length - 1]) + 0.5 + oe.end,
    y: 0
  }, qe), $ = (ve ?? $3(P, pe)).filter(function(se) {
    return !U || se !== 0 && se !== "0";
  }).map(function(se, be) {
    return {
      value: se,
      index: be
    };
  }), le = $.map(function(se) {
    var be = se.value, De = se.index, Ae = k3(et(be));
    return {
      value: be,
      index: De,
      from: fg({
        x: Ae,
        y: 0
      }, qe),
      to: fg({
        x: Ae,
        y: ie * C
      }, qe),
      formattedValue: de(be, De, $)
    };
  });
  return /* @__PURE__ */ Wt.createElement(Ug, {
    className: Zi("visx-axis", m),
    innerRef: q,
    top: fe,
    left: Y
  }, h(VS({}, Ve, {
    axisFromPoint: Me,
    axisToPoint: O,
    hideAxisLine: v,
    hideTicks: A,
    hideZero: U,
    horizontal: qe,
    numTicks: pe,
    orientation: ye,
    rangePadding: me,
    scale: P,
    tickFormat: de,
    tickLength: ie,
    tickPosition: et,
    tickSign: C,
    ticks: le
  })));
}
var x4 = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function Sg() {
  return Sg = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, Sg.apply(this, arguments);
}
function M4(c, s) {
  if (c == null) return {};
  var h = {}, m = Object.keys(c), g, v;
  for (v = 0; v < m.length; v++)
    g = m[v], !(s.indexOf(g) >= 0) && (h[g] = c[g]);
  return h;
}
var A4 = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function R4(c) {
  var s = c.axisClassName, h = c.labelOffset, m = h === void 0 ? 36 : h, g = c.tickLength, v = g === void 0 ? 8 : g, T = c.tickLabelProps, A = M4(c, x4), x = typeof T == "function" ? T : Sg({}, A4, T);
  return /* @__PURE__ */ Wt.createElement(GM, Sg({
    axisClassName: Zi("visx-axis-left", s),
    labelOffset: m,
    orientation: El.left,
    tickLabelProps: x,
    tickLength: v
  }, A));
}
var O4 = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function Tg() {
  return Tg = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, Tg.apply(this, arguments);
}
function D4(c, s) {
  if (c == null) return {};
  var h = {}, m = Object.keys(c), g, v;
  for (v = 0; v < m.length; v++)
    g = m[v], !(s.indexOf(g) >= 0) && (h[g] = c[g]);
  return h;
}
var z4 = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function C4(c) {
  var s = c.axisClassName, h = c.labelOffset, m = h === void 0 ? 8 : h, g = c.tickLength, v = g === void 0 ? 8 : g, T = c.tickLabelProps, A = D4(c, O4), x = typeof T == "function" ? T : Tg({}, z4, T);
  return /* @__PURE__ */ Wt.createElement(GM, Tg({
    axisClassName: Zi("visx-axis-bottom", s),
    labelOffset: m,
    orientation: El.bottom,
    tickLabelProps: x,
    tickLength: v
  }, A));
}
var U4 = ["tooltipOpen"];
function H4(c, s) {
  if (c == null) return {};
  var h = {}, m = Object.keys(c), g, v;
  for (v = 0; v < m.length; v++)
    g = m[v], !(s.indexOf(g) >= 0) && (h[g] = c[g]);
  return h;
}
function Eg() {
  return Eg = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, Eg.apply(this, arguments);
}
function _4(c) {
  var s = Kp(Eg({
    tooltipOpen: !1
  }, c)), h = s[0], m = s[1], g = P2(function(T) {
    return m(typeof T == "function" ? function(A) {
      A.tooltipOpen;
      var x = H4(A, U4);
      return Eg({}, T(x), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: T.tooltipLeft,
      tooltipTop: T.tooltipTop,
      tooltipData: T.tooltipData
    });
  }, [m]), v = P2(function() {
    return m({
      tooltipOpen: !1,
      tooltipLeft: void 0,
      tooltipTop: void 0,
      tooltipData: void 0
    });
  }, [m]);
  return {
    tooltipOpen: h.tooltipOpen,
    tooltipLeft: h.tooltipLeft,
    tooltipTop: h.tooltipTop,
    tooltipData: h.tooltipData,
    updateTooltip: m,
    showTooltip: g,
    hideTooltip: v
  };
}
var w4 = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function xg() {
  return xg = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, xg.apply(this, arguments);
}
function N4(c, s) {
  if (c == null) return {};
  var h = {}, m = Object.keys(c), g, v;
  for (v = 0; v < m.length; v++)
    g = m[v], !(s.indexOf(g) >= 0) && (h[g] = c[g]);
  return h;
}
var VM = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, IS = /* @__PURE__ */ Wt.forwardRef(function(c, s) {
  var h = c.className, m = c.top, g = c.left, v = c.offsetLeft, T = v === void 0 ? 10 : v, A = c.offsetTop, x = A === void 0 ? 10 : A, U = c.style, q = U === void 0 ? VM : U, _ = c.children, Y = c.unstyled, ce = Y === void 0 ? !1 : Y, pe = c.applyPositionStyle, ge = pe === void 0 ? !1 : pe, ye = N4(c, w4);
  return /* @__PURE__ */ Wt.createElement("div", xg({
    ref: s,
    className: Zi("visx-tooltip", h),
    style: xg({
      top: m == null || x == null ? m : m + x,
      left: g == null || T == null ? g : g + T
    }, ge && {
      position: "absolute"
    }, !ce && q)
  }, ye), _);
});
IS.propTypes = {
  children: la.node,
  className: la.string,
  left: la.number,
  offsetLeft: la.number,
  offsetTop: la.number,
  top: la.number,
  applyPositionStyle: la.bool,
  unstyled: la.bool
};
IS.displayName = "Tooltip";
function q4(c) {
  return !!c && (c instanceof SVGElement || "ownerSVGElement" in c);
}
function Y4(c) {
  return !!c && "createSVGPoint" in c;
}
function j4(c) {
  return !!c && "getScreenCTM" in c;
}
function B4(c) {
  return !!c && "changedTouches" in c;
}
function L4(c) {
  return !!c && "clientX" in c;
}
function G4(c) {
  return !!c && (c instanceof Event || "nativeEvent" in c && c.nativeEvent instanceof Event);
}
function Pp() {
  return Pp = Object.assign ? Object.assign.bind() : function(c) {
    for (var s = 1; s < arguments.length; s++) {
      var h = arguments[s];
      for (var m in h)
        Object.prototype.hasOwnProperty.call(h, m) && (c[m] = h[m]);
    }
    return c;
  }, Pp.apply(this, arguments);
}
var bS = {
  x: 0,
  y: 0
};
function V4(c) {
  if (!c) return Pp({}, bS);
  if (B4(c))
    return c.changedTouches.length > 0 ? {
      x: c.changedTouches[0].clientX,
      y: c.changedTouches[0].clientY
    } : Pp({}, bS);
  if (L4(c))
    return {
      x: c.clientX,
      y: c.clientY
    };
  var s = c == null ? void 0 : c.target, h = s && "getBoundingClientRect" in s ? s.getBoundingClientRect() : null;
  return h ? {
    x: h.x + h.width / 2,
    y: h.y + h.height / 2
  } : Pp({}, bS);
}
function X4(c, s) {
  if (!c || !s) return null;
  var h = V4(s), m = q4(c) ? c.ownerSVGElement : c, g = j4(m) ? m.getScreenCTM() : null;
  if (Y4(m) && g) {
    var v = m.createSVGPoint();
    return v.x = h.x, v.y = h.y, v = v.matrixTransform(g.inverse()), new LS({
      x: v.x,
      y: v.y
    });
  }
  var T = c.getBoundingClientRect();
  return new LS({
    x: h.x - T.left - c.clientLeft,
    y: h.y - T.top - c.clientTop
  });
}
function Q4(c, s) {
  if (G4(c)) {
    var h = c, m = h.target;
    if (m) return X4(m, h);
  }
  return null;
}
const SS = 800, Jp = 400, nl = { top: 20, right: 30, bottom: 50, left: 60 }, Z4 = () => {
  const [c, s] = Kp([]), [h, m] = Kp(!1), [g, v] = Kp(!1), [T, A] = Kp(0), {
    showTooltip: x,
    hideTooltip: U,
    tooltipData: q,
    tooltipLeft: _ = 0,
    tooltipTop: Y = 0
  } = _4(), ce = async () => {
    v(!0);
    try {
      const P = "MH2ZSQHGFWEVXGXZ", ne = "AAPL", ie = await (await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ne}&apikey=${P}`
      )).json();
      if (ie["Error Message"] || !ie["Time Series (Daily)"])
        throw new Error("Alpha Vantage API error");
      const ve = Object.entries(
        ie["Time Series (Daily)"]
      ).map(([He, fe]) => ({
        date: new Date(He),
        price: parseFloat(fe["4. close"])
      })).sort((He, fe) => He.date.getTime() - fe.date.getTime());
      s(ve), m(!1);
    } catch (P) {
      console.error("Fetch failed:", P);
    } finally {
      v(!1);
    }
  };
  I2(() => {
    ce();
  }, []), I2(() => {
    if (T === 0) return;
    const P = setInterval(() => {
      A((ne) => Math.max(ne - 1, 0));
    }, 1e3);
    return () => clearInterval(P);
  }, [T]);
  const pe = () => {
    T > 0 || g || (ce(), A(60));
  };
  if (!c.length) return /* @__PURE__ */ en.jsx("p", { children: "Loading chart..." });
  const ge = Z3({
    domain: [
      Math.min(...c.map((P) => P.date.getTime())),
      Math.max(...c.map((P) => P.date.getTime()))
    ],
    range: [nl.left, SS - nl.right]
  }), ye = X3({
    domain: [
      Math.min(...c.map((P) => P.price)) - 10,
      Math.max(...c.map((P) => P.price)) + 10
    ],
    range: [Jp - nl.bottom, nl.top]
  }), Se = Mg((P) => P.date).left, me = (P) => {
    const { x: ne } = Q4(P) || { x: 0 }, k = ge.invert(ne), ie = Se(c, k, 1), ve = c[ie - 1], He = c[ie], fe = k.getTime() - ve.date.getTime() > He.date.getTime() - k.getTime() ? He : ve;
    x({
      tooltipData: fe,
      tooltipLeft: ge(fe.date),
      tooltipTop: ye(fe.price)
    });
  };
  return /* @__PURE__ */ en.jsxs("div", { children: [
    h && /* @__PURE__ */ en.jsx(
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
    /* @__PURE__ */ en.jsx("div", { style: { marginBottom: "1rem" }, children: /* @__PURE__ */ en.jsx(
      "button",
      {
        onClick: pe,
        disabled: T > 0 || g,
        style: {
          padding: "8px 16px",
          fontSize: "14px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: T > 0 || g ? "not-allowed" : "pointer",
          opacity: T > 0 || g ? 0.6 : 1
        },
        children: g ? "Loading..." : T > 0 ? `Cooldown: ${T}s` : "Refresh Data"
      }
    ) }),
    /* @__PURE__ */ en.jsxs("svg", { width: SS, height: Jp, children: [
      /* @__PURE__ */ en.jsxs(Ug, { children: [
        /* @__PURE__ */ en.jsx(
          vD,
          {
            data: c,
            x: (P) => ge(P.date),
            y: (P) => ye(P.price),
            stroke: "#007bff",
            strokeWidth: 2
          }
        ),
        /* @__PURE__ */ en.jsx(C4, { top: Jp - nl.bottom, scale: ge }),
        /* @__PURE__ */ en.jsx(R4, { left: nl.left, scale: ye }),
        /* @__PURE__ */ en.jsx(
          "rect",
          {
            x: nl.left,
            y: nl.top,
            width: SS - nl.left - nl.right,
            height: Jp - nl.top - nl.bottom,
            fill: "transparent",
            onMouseMove: me,
            onMouseLeave: U
          }
        ),
        q && /* @__PURE__ */ en.jsxs(en.Fragment, { children: [
          /* @__PURE__ */ en.jsx(
            "line",
            {
              x1: _,
              x2: _,
              y1: nl.top,
              y2: Jp - nl.bottom,
              stroke: "gray",
              strokeDasharray: "4"
            }
          ),
          /* @__PURE__ */ en.jsx(
            "circle",
            {
              cx: _,
              cy: Y,
              r: 4,
              fill: "#007bff",
              stroke: "white"
            }
          )
        ] })
      ] }),
      q && /* @__PURE__ */ en.jsxs(
        IS,
        {
          top: Y - 10,
          left: _ + 10,
          style: VM,
          children: [
            /* @__PURE__ */ en.jsx("div", { children: /* @__PURE__ */ en.jsx("strong", { children: q.date.toDateString() }) }),
            /* @__PURE__ */ en.jsxs("div", { children: [
              "Price: $",
              q.price.toFixed(2)
            ] })
          ]
        }
      )
    ] })
  ] });
};
function k4() {
  return /* @__PURE__ */ en.jsx(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        background: "#f9f9f9"
      },
      children: /* @__PURE__ */ en.jsx(Z4, {})
    }
  );
}
aR.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ en.jsx(Wt.StrictMode, { children: /* @__PURE__ */ en.jsx(k4, {}) })
);
