(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["menuContent"],
  {
    2532: function(t, e, a) {
      "use strict";
      var i = a("23e7"),
        c = a("5a34"),
        r = a("1d80"),
        s = a("ab13");
      i(
        { target: "String", proto: !0, forced: !s("includes") },
        {
          includes: function(t) {
            return !!~String(r(this)).indexOf(
              c(t),
              arguments.length > 1 ? arguments[1] : void 0
            );
          }
        }
      );
    },
    5240: function(t, e, a) {
      "use strict";
      var i = a("8d30"),
        c = a.n(i);
      c.a;
    },
    "5a34": function(t, e, a) {
      var i = a("44e7");
      t.exports = function(t) {
        if (i(t)) {
          throw TypeError("The method doesn't accept regular expressions");
        }
        return t;
      };
    },
    "66d1": function(t, e, a) {},
    "827b": function(t, e, a) {
      "use strict";
      a.r(e);
      var i = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "weui-tab" },
            [
              a(
                "div",
                { staticClass: "weui-tab__panel" },
                [a("router-view")],
                1
              ),
              a("tabbar")
            ],
            1
          );
        },
        c = [],
        r = a("9f12"),
        s = a("8b83"),
        n = a("c65a"),
        o = a("c03e"),
        u = a("9ab4"),
        b = a("2b0e"),
        l = a("2fe1"),
        d = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "weui-tabbar" }, [
            a(
              "a",
              {
                staticClass: "weui-tabbar__item weui",
                class: "timeSelect" === t.mode ? "tab-active" : "",
                on: {
                  click: function(e) {
                    return t.switchTab("timeSelect");
                  }
                }
              },
              [
                a("i", { staticClass: "icon1 weui-tabbar__icon" }),
                a("p", { staticClass: "weui-tabbar__label" }, [t._v("订餐")])
              ]
            ),
            a(
              "a",
              {
                staticClass: "weui-tabbar__item",
                class: "cart" === t.mode ? "tab-active" : "",
                on: {
                  click: function(e) {
                    return t.switchTab("cart");
                  }
                }
              },
              [
                a(
                  "span",
                  {
                    staticStyle: {
                      display: "inline-block",
                      position: "relative"
                    }
                  },
                  [
                    a("i", { staticClass: "icon2 weui-tabbar__icon" }),
                    a(
                      "span",
                      {
                        ref: "badge",
                        staticClass: "weui-badge",
                        class: t.cartLen ? "" : "brageHide",
                        staticStyle: {
                          position: "absolute",
                          top: "-4px",
                          right: "-13px"
                        }
                      },
                      [t._v(t._s(t.cartLen))]
                    )
                  ]
                ),
                a("p", { staticClass: "weui-tabbar__label" }, [t._v("购物车")])
              ]
            ),
            a(
              "a",
              {
                staticClass: "weui-tabbar__item",
                class: "orderInfo" === t.mode ? "tab-active" : "",
                on: {
                  click: function(e) {
                    return t.switchTab("orderInfo");
                  }
                }
              },
              [
                a("i", { staticClass: "icon3 weui-tabbar__icon" }),
                a("p", { staticClass: "weui-tabbar__label" }, [t._v("订单")])
              ]
            )
          ]);
        },
        h = [],
        C = (a("caad"), a("b0c0"), a("2532"), a("53fe")),
        f = a("4bb5"),
        p = b["a"].extend({ components: {} }),
        v = (function(t) {
          function e(t) {
            var a;
            return (
              Object(r["a"])(this, e),
              (a = Object(s["a"])(this, Object(n["a"])(e).call(this, t))),
              (a.mode = "timeSelect"),
              a
            );
          }
          return (
            Object(o["a"])(e, t),
            Object(C["a"])(e, [
              {
                key: "switchTab",
                value: function(t) {
                  var e = this.$route,
                    a = e.path,
                    i = e.name;
                  switch (t) {
                    case "timeSelect":
                      (this.mode = "timeSelect"),
                        this.setShowCart(!1),
                        a.includes("timeSelect") ||
                          this.$router.push("/menuContent/timeSelect");
                      break;
                    case "cart":
                      "mealMenu" === i
                        ? (this.setShowCart(!this.isShowCart),
                          (this.mode = this.isShowCart ? "cart" : "timeSelect"))
                        : this.setShowCart(!1);
                      break;
                    case "orderInfo":
                      (this.mode = "orderInfo"),
                        this.setShowCart(!1),
                        this.$router.push("/menuContent/orderMap");
                      break;
                  }
                }
              },
              {
                key: "mounted",
                value: function() {
                  var t = this;
                  this.createCartCloseSubject(),
                    setTimeout(function() {
                      return t.listenCartClose();
                    });
                  var e = this.$refs.badge;
                  setTimeout(function() {
                    var a = e.getBoundingClientRect(),
                      i = a.x,
                      c = a.y;
                    t.setCartDir({ x: i, y: c });
                  }, 500);
                }
              },
              {
                key: "destroyed",
                value: function() {
                  this.cartClsSubject.subject.complete();
                }
              },
              {
                key: "listenCartClose",
                value: function() {
                  var t = this;
                  this.cartClsSubject.listener.subscribe(function(e) {
                    (t.mode = e ? "orderInfo" : "timeSelect"),
                      t.setShowCart(!1);
                  });
                }
              }
            ]),
            e
          );
        })(p);
      u["a"](
        [Object(f["b"])("SET_SHOW_CART")],
        v.prototype,
        "setShowCart",
        void 0
      ),
        u["a"](
          [Object(f["a"])("isShowCart")],
          v.prototype,
          "isShowCart",
          void 0
        ),
        u["a"](
          [Object(f["b"])("CREATE_CART_CLOSE_SUBJECT")],
          v.prototype,
          "createCartCloseSubject",
          void 0
        ),
        u["a"](
          [Object(f["a"])("cartClsSubject")],
          v.prototype,
          "cartClsSubject",
          void 0
        ),
        u["a"](
          [Object(f["b"])("SET_CART_DIR")],
          v.prototype,
          "setCartDir",
          void 0
        ),
        u["a"]([Object(f["a"])("cartLen")], v.prototype, "cartLen", void 0),
        (v = u["a"]([Object(l["b"])({ watch: {} })], v));
      var w = v,
        _ = w,
        m = (a("5240"), a("2877")),
        S = Object(m["a"])(_, d, h, !1, null, "4cb20614", null),
        j = S.exports,
        O = b["a"].extend({ components: { Tabbar: j } }),
        y = (function(t) {
          function e(t) {
            return (
              Object(r["a"])(this, e),
              Object(s["a"])(this, Object(n["a"])(e).call(this, t))
            );
          }
          return Object(o["a"])(e, t), e;
        })(O);
      y = u["a"]([Object(l["b"])({ watch: {} })], y);
      var T = y,
        g = T,
        k = (a("dee3"), Object(m["a"])(g, i, c, !1, null, "be023816", null));
      e["default"] = k.exports;
    },
    "8d30": function(t, e, a) {},
    ab13: function(t, e, a) {
      var i = a("b622"),
        c = i("match");
      t.exports = function(t) {
        var e = /./;
        try {
          "/./"[t](e);
        } catch (a) {
          try {
            return (e[c] = !1), "/./"[t](e);
          } catch (i) {}
        }
        return !1;
      };
    },
    caad: function(t, e, a) {
      "use strict";
      var i = a("23e7"),
        c = a("4d64").includes,
        r = a("44d2");
      i(
        { target: "Array", proto: !0 },
        {
          includes: function(t) {
            return c(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      ),
        r("includes");
    },
    dee3: function(t, e, a) {
      "use strict";
      var i = a("66d1"),
        c = a.n(i);
      c.a;
    }
  }
]);
//# sourceMappingURL=menuContent.294eca27.js.map
