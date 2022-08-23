let c;
function t(e) {
  if (typeof e != "object" || e === null)
    return e;
  if (c.cached || (c.cached = /* @__PURE__ */ new WeakMap()), c.cached.has(e))
    return t(c.cached.get(e));
  if (e instanceof Map) {
    let n = /* @__PURE__ */ new Map();
    for (let [f, o] of e)
      n.set(t(f), t(o));
    return c.cached.set(e, n), n;
  }
  if (e instanceof Set) {
    let n = /* @__PURE__ */ new Set();
    for (let f of e)
      n.add(t(f));
    return c.cached.set(e, n), n;
  }
  if (e instanceof RegExp) {
    let n = new RegExp(e);
    return c.cached.set(e, n), n;
  }
  let r = new e.constructor();
  for (let n in e)
    r[n] = t(e[n]);
  return c.cached.set(e, r), r;
}
export {
  t as deepClone
};
