import * as o from "react";
import u, { useContext as C } from "react";
const v = o.createContext(void 0), _ = ({ size: t, children: e }) => o.createElement(v.Consumer, null, (n) => (console.log("sizes:", t, n), o.createElement(v.Provider, { value: t || n }, e))), x = o.createContext(!1), F = ({ disabled: t, children: e }) => {
  const n = o.useContext(x);
  return o.createElement(x.Provider, { value: t || n }, e);
}, D = (t, e) => t ? `${e != null ? e : "fantasy"}-${t}` : "fantasy", b = o.createContext({
  prefixCls: "fantasy",
  getPrefixCls: D
}), H = ({ children: t, config: e }) => {
  const n = () => {
    let s = t;
    return e != null && e.size && (s = o.createElement(_, { size: e.size }, s)), (e == null ? void 0 : e.disabled) !== void 0 && (s = o.createElement(F, { disabled: e.disabled }, s)), s;
  };
  return o.createElement(b.Consumer, null, (s) => (e && (e.getPrefixCls = D), o.createElement(b.Provider, { value: e || s }, n())));
};
var w = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function n() {
      for (var s = [], i = 0; i < arguments.length; i++) {
        var l = arguments[i];
        if (!!l) {
          var d = typeof l;
          if (d === "string" || d === "number")
            s.push(l);
          else if (Array.isArray(l)) {
            if (l.length) {
              var c = n.apply(null, l);
              c && s.push(c);
            }
          } else if (d === "object")
            if (l.toString === Object.prototype.toString)
              for (var a in l)
                e.call(l, a) && l[a] && s.push(a);
            else
              s.push(l.toString());
        }
      }
      return s.join(" ");
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(w);
const G = w.exports;
function I(t) {
  return t === "text" || t === "link";
}
function L(t) {
  return t === "link";
}
const M = (t, e) => {
  const { type: n = "default", shape: s = "default", prefixCls: i, size: l, disabled: d, block: c, href: a, ghost: B, danger: R, className: S, style: p, children: h } = t, $ = e || u.createRef(), { getPrefixCls: j, prefixCls: N } = C(b), O = C(v), f = C(x), g = f && d, A = { large: "lg", small: "sm", middle: void 0 }, P = l || O, y = P && A[P] || "", r = j("btn", i || N);
  console.log(1111, N);
  const E = G(r, {
    [`${r}-${s}`]: s !== "default" && s,
    [`${r}-${n}`]: n,
    [`${r}-${y}`]: y,
    [`${r}-block`]: c,
    [`${r}-background-ghost`]: B && !I(n),
    [`${r}-dangerous`]: !!R,
    [`${r}-disabled`]: g && a !== void 0
  }, S), k = (z) => {
    const { onClick: m } = t;
    if (f) {
      z.preventDefault();
      return;
    }
    m == null || m(z);
  };
  return L(n) ? u.createElement("a", { className: E, style: p, href: a, onClick: k, ref: $ }, h) : u.createElement("button", { onClick: k, disabled: f, className: E, style: p, ref: $ }, h);
}, J = u.forwardRef(M);
export {
  J as Button,
  b as ConfigContext,
  H as ConfigProvider
};
