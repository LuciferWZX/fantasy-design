import * as r from "react";
import u, { useContext as C } from "react";
const v = r.createContext(void 0), g = ({ size: t, children: e }) => r.createElement(v.Consumer, null, (n) => (console.log("sizes:", t, n), r.createElement(v.Provider, { value: t || n }, e))), x = r.createContext(!1), F = ({ disabled: t, children: e }) => {
  const n = r.useContext(x);
  return r.createElement(x.Provider, { value: t || n }, e);
}, z = (t, e) => t ? `${e != null ? e : "fantasy"}-${t}` : "fantasy", b = r.createContext({
  prefixCls: "fantasy",
  getPrefixCls: z
}), H = ({ children: t, config: e }) => {
  const n = () => {
    let s = t;
    return e != null && e.size && (s = r.createElement(g, { size: e.size }, s)), (e == null ? void 0 : e.disabled) !== void 0 && (s = r.createElement(F, { disabled: e.disabled }, s)), s;
  };
  return r.createElement(b.Consumer, null, (s) => (e && (e.getPrefixCls = z), r.createElement(b.Provider, { value: e || s }, n())));
};
var D = { exports: {} };
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
})(D);
const G = D.exports;
function I(t) {
  return t === "text" || t === "link";
}
function L(t) {
  return t === "link";
}
const M = (t, e) => {
  const { type: n = "default", shape: s = "default", prefixCls: i, size: l, disabled: d, block: c, href: a, ghost: w, danger: B, className: R, style: p, children: h } = t, $ = e || u.createRef(), { getPrefixCls: S, prefixCls: j } = C(b), O = C(v), f = C(x), A = f && d, _ = { large: "lg", small: "sm", middle: void 0 }, N = l || O, P = N && _[N] || "", o = S("btn", i || j), y = G(o, {
    [`${o}-${s}`]: s !== "default" && s,
    [`${o}-${n}`]: n,
    [`${o}-${P}`]: P,
    [`${o}-block`]: c,
    [`${o}-background-ghost`]: w && !I(n),
    [`${o}-dangerous`]: !!B,
    [`${o}-disabled`]: A && a !== void 0
  }, R), E = (k) => {
    const { onClick: m } = t;
    if (f) {
      k.preventDefault();
      return;
    }
    m == null || m(k);
  };
  return L(n) ? u.createElement("a", { className: y, style: p, href: a, onClick: E, ref: $ }, h) : u.createElement("button", { onClick: E, disabled: f, className: y, style: p, ref: $ }, h);
}, J = u.forwardRef(M);
export {
  J as Button,
  b as ConfigContext,
  H as ConfigProvider
};
