(function(e) {
  function t(t) {
    for (
      var i, r, s = t[0], o = t[1], u = t[2], l = 0, f = [];
      l < s.length;
      l++
    ) {
      (r = s[l]),
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && f.push(a[r][0]),
        (a[r] = 0);
    }
    for (i in o) {
      Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    d && d(t);
    while (f.length) {
      f.shift()();
    }
    return c.push.apply(c, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], i = !0, r = 1; r < n.length; r++) {
        var s = n[r];
        0 !== a[s] && (i = !1);
      }
      i && (c.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var i = {},
    r = { app: 0 },
    a = { app: 0 },
    c = [];
  function s(e) {
    return (
      o.p +
      "js/" +
      ({
        mealMenu: "mealMenu",
        mealPay: "mealPay",
        mealTime: "mealTime",
        menuContent: "menuContent",
        orderInfo: "orderInfo",
        orderList: "orderList",
        timeSelect: "timeSelect"
      }[e] || e) +
      "." +
      {
        mealMenu: "ca531377",
        mealPay: "a14f2ab6",
        mealTime: "4431c6b4",
        menuContent: "294eca27",
        orderInfo: "bceda811",
        orderList: "e69a872b",
        timeSelect: "d67034e1"
      }[e] +
      ".js"
    );
  }
  function o(t) {
    if (i[t]) {
      return i[t].exports;
    }
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.e = function(e) {
    var t = [],
      n = {
        mealMenu: 1,
        mealPay: 1,
        mealTime: 1,
        menuContent: 1,
        orderInfo: 1,
        orderList: 1,
        timeSelect: 1
      };
    r[e]
      ? t.push(r[e])
      : 0 !== r[e] &&
        n[e] &&
        t.push(
          (r[e] = new Promise(function(t, n) {
            for (
              var i =
                  "css/" +
                  ({
                    mealMenu: "mealMenu",
                    mealPay: "mealPay",
                    mealTime: "mealTime",
                    menuContent: "menuContent",
                    orderInfo: "orderInfo",
                    orderList: "orderList",
                    timeSelect: "timeSelect"
                  }[e] || e) +
                  "." +
                  {
                    mealMenu: "69b80baf",
                    mealPay: "358045be",
                    mealTime: "b054fee5",
                    menuContent: "237f11a6",
                    orderInfo: "5bbe87b1",
                    orderList: "5cf132ad",
                    timeSelect: "1041ba0a"
                  }[e] +
                  ".css",
                a = o.p + i,
                c = document.getElementsByTagName("link"),
                s = 0;
              s < c.length;
              s++
            ) {
              var u = c[s],
                l = u.getAttribute("data-href") || u.getAttribute("href");
              if ("stylesheet" === u.rel && (l === i || l === a)) {
                return t();
              }
            }
            var f = document.getElementsByTagName("style");
            for (s = 0; s < f.length; s++) {
              (u = f[s]), (l = u.getAttribute("data-href"));
              if (l === i || l === a) {
                return t();
              }
            }
            var d = document.createElement("link");
            (d.rel = "stylesheet"),
              (d.type = "text/css"),
              (d.onload = t),
              (d.onerror = function(t) {
                var i = (t && t.target && t.target.src) || a,
                  c = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + i + ")"
                  );
                (c.code = "CSS_CHUNK_LOAD_FAILED"),
                  (c.request = i),
                  delete r[e],
                  d.parentNode.removeChild(d),
                  n(c);
              }),
              (d.href = a);
            var m = document.getElementsByTagName("head")[0];
            m.appendChild(d);
          }).then(function() {
            r[e] = 0;
          }))
        );
    var i = a[e];
    if (0 !== i) {
      if (i) {
        t.push(i[2]);
      } else {
        var c = new Promise(function(t, n) {
          i = a[e] = [t, n];
        });
        t.push((i[2] = c));
        var u,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          o.nc && l.setAttribute("nonce", o.nc),
          (l.src = s(e));
        var f = new Error();
        u = function(t) {
          (l.onerror = l.onload = null), clearTimeout(d);
          var n = a[e];
          if (0 !== n) {
            if (n) {
              var i = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src;
              (f.message =
                "Loading chunk " + e + " failed.\n(" + i + ": " + r + ")"),
                (f.name = "ChunkLoadError"),
                (f.type = i),
                (f.request = r),
                n[1](f);
            }
            a[e] = void 0;
          }
        };
        var d = setTimeout(function() {
          u({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = u), document.head.appendChild(l);
      }
    }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = i),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function(e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) {
        return e;
      }
      if (4 & t && "object" === typeof e && e && e.__esModule) {
        return e;
      }
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" !== typeof e)
      ) {
        for (var i in e) {
          o.d(
            n,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
        }
      }
      return n;
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/"),
    (o.oe = function(e) {
      throw (console.error(e), e);
    });
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var f = 0; f < u.length; f++) {
    t(u[f]);
  }
  var d = l;
  c.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("cd49");
  },
  "00fe": function(e, t) {
    e.exports =
      "data:image/png;base64,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";
  },
  1716: function(e, t, n) {
    "use strict";
    var i = n("6475"),
      r = n.n(i);
    r.a;
  },
  "1e6e": function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    }),
      n.d(t, "b", function() {
        return c;
      });
    n("4160"), n("d3b7"), n("159b");
    var i = n("9f12"),
      r = n("53fe"),
      a = (function() {
        function e(t) {
          var n = this;
          if ((Object(i["a"])(this, e), (this.taskList = []), t)) {
            var r = {
              next: function(e) {
                n.taskList.forEach(function(t) {
                  try {
                    t(e);
                  } catch (n) {
                    console.warn(n);
                  }
                });
              },
              complete: function() {
                n.taskList.length = 0;
              }
            };
            try {
              t(r);
            } catch (a) {
              console.warn(a);
            }
          }
        }
        return (
          Object(r["a"])(e, [
            {
              key: "subscribe",
              value: function(e) {
                var t =
                  "function" === typeof e
                    ? e
                    : function(e) {
                        return e;
                      };
                this.taskList.push(t);
              }
            },
            {
              key: "toPromise",
              value: function() {
                var e = this;
                return new Promise(function(t, n) {
                  e.subscribe(function(e) {
                    t(e);
                  });
                });
              }
            }
          ]),
          e
        );
      })(),
      c = (function() {
        function e() {
          Object(i["a"])(this, e), (this.observerList = []);
        }
        return (
          Object(r["a"])(e, [
            {
              key: "next",
              value: function() {
                for (
                  var e = this, t = arguments.length, n = new Array(t), i = 0;
                  i < t;
                  i++
                ) {
                  n[i] = arguments[i];
                }
                this.observerList.forEach(function(t) {
                  t.taskList.forEach(function(t) {
                    try {
                      t.apply(e, n);
                    } catch (i) {
                      console.warn(i);
                    }
                  });
                });
              }
            },
            {
              key: "asObservable",
              value: function() {
                var e = new a();
                return this.observerList.push(e), e;
              }
            },
            {
              key: "complete",
              value: function() {
                this.observerList.forEach(function(e) {
                  e.taskList.length = 0;
                }),
                  (this.observerList.length = 0);
              }
            }
          ]),
          e
        );
      })();
  },
  2395: function(e, t, n) {},
  3251: function(e, t, n) {
    "use strict";
    var i = n("abb5"),
      r = n.n(i);
    r.a;
  },
  "3a37": function(e, t, n) {},
  6475: function(e, t, n) {},
  "6c41": function(e, t, n) {
    "use strict";
    n("99af"), n("c975");
    var i = {
        checkSickInfo: { method: "get", url: "/sickList/checkSickInfo" },
        getPrepay: { method: "get", url: "/sickList/getPrepay" },
        sysDate: { method: "get", url: "/sysConfig/sysDate" },
        getMenuKind: { method: "get", url: "/menuKind/getMenuKind" },
        getMenuItem: { method: "get", url: "/menuKind/getMenuItem" },
        addOrder: {
          method: "post",
          url: "/orderInfo/addOrder",
          paramType: "raw"
        },
        getOrder: { method: "get", url: "/orderInfo/getOrder" },
        getOrderList: { method: "get", url: "/orderInfo/getOrderList" }
      },
      r = n("1e6e");
    function a(e, t, n) {
      var a = i[e],
        c = new XMLHttpRequest(),
        s = a.url;
      switch (a.method) {
        case "get":
          return o();
        case "delete":
          return u("delete");
        case "post":
        default:
          return u();
      }
      function o() {
        return new r["a"](function(e) {
          t && (s += (s.indexOf("?") < 0 ? "?" : "&") + l(t)),
            c.open("get", s),
            c.setRequestHeader("Cache-Control", "no-cache"),
            c.setRequestHeader("Pragma", "no-cache"),
            c.send(),
            (c.onreadystatechange = function() {
              4 === c.readyState &&
                (200 === c.status
                  ? (e.next(JSON.parse(c.response)), e.complete())
                  : (e.next({
                      code: -1,
                      msg: "".concat(c.status, " ").concat(c.statusText)
                    }),
                    e.complete()));
            }),
            (c.onerror = function(t) {
              e.next({ code: 1, err: t }), e.complete();
            });
        });
      }
      function u(e) {
        return new r["a"](function(i) {
          var r, o;
          switch (
            (n &&
              n.extraParamsForUrl &&
              (s += (s.indexOf("?") < 0 ? "?" : "&") + l(n.extraParamsForUrl)),
            c.open(e || "post", s),
            a.paramType)
          ) {
            case "form-data":
              o = t;
              break;
            case "raw":
              (r = "application/json"),
                (o = JSON.stringify(t, null, 2)),
                c.setRequestHeader(
                  "Accept",
                  "application/json, text/plain, */*"
                );
              break;
            case "json":
            default:
              (r = "application/x-www-form-urlencoded"), (o = l(t));
          }
          r && c.setRequestHeader("Content-Type", r),
            o ? c.send(o) : c.send(),
            (c.onreadystatechange = function() {
              4 === c.readyState &&
                (200 === c.status
                  ? (i.next(JSON.parse(c.response)), i.complete())
                  : (i.next({
                      code: -1,
                      msg: "".concat(c.status, " ").concat(c.statusText)
                    }),
                    i.complete()));
            }),
            (c.onerror = function(e) {
              i.next({ code: 1, err: e }), i.complete();
            });
        });
      }
      function l(e) {
        var t = "";
        for (var n in e) {
          var i = void 0 !== e[n] ? e[n] : "";
          t += "&" + n + "=" + encodeURIComponent(i);
        }
        return t ? t.substring(1) : "";
      }
    }
    n.d(t, "a", function() {
      return a;
    });
  },
  "7c55": function(e, t, n) {
    "use strict";
    var i = n("2395"),
      r = n.n(i);
    r.a;
  },
  "87b4": function(e, t, n) {},
  abb5: function(e, t, n) {},
  b0c3: function(e, t, n) {
    "use strict";
    var i = n("87b4"),
      r = n.n(i);
    r.a;
  },
  bd92: function(e, t, n) {
    "use strict";
    var i = n("eb75"),
      r = n.n(i);
    r.a;
  },
  c194: function(e, t, n) {
    "use strict";
    var i = n("3a37"),
      r = n.n(i);
    r.a;
  },
  cd49: function(e, t, n) {
    "use strict";
    n.r(t);
    var i = {};
    n.r(i),
      n.d(i, "isSuccess", function() {
        return ye;
      }),
      n.d(i, "isLoading", function() {
        return _e;
      }),
      n.d(i, "confirmRef", function() {
        return Le;
      }),
      n.d(i, "sickInfo", function() {
        return Ie;
      }),
      n.d(i, "mealInfo", function() {
        return Ee;
      }),
      n.d(i, "isShowCart", function() {
        return De;
      }),
      n.d(i, "cartClsSubject", function() {
        return Ne;
      }),
      n.d(i, "cartDir", function() {
        return xe;
      }),
      n.d(i, "cartLen", function() {
        return Me;
      }),
      n.d(i, "orderInfo", function() {
        return Te;
      });
    var r = {};
    n.r(r),
      n.d(r, "toggleSuccess", function() {
        return Pe;
      }),
      n.d(r, "toggleLoading", function() {
        return Re;
      });
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var a = n("2b0e"),
      c = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n(
              "transition",
              { attrs: { name: "slide", mode: "out-in" } },
              [n("router-view")],
              1
            ),
            n("toast"),
            n("confirm", { ref: "confirmRef" })
          ],
          1
        );
      },
      s = [],
      o =
        (n("a4d3"),
        n("4de4"),
        n("4160"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("159b"),
        n("2fa7")),
      u = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "toast" }, [
          e.isLoading
            ? n("div", [
                n("div", { staticClass: "weui-mask_transparent" }),
                e._m(0)
              ])
            : e._e(),
          e.isSuccess
            ? n("div", [
                n("div", { staticClass: "weui-mask_transparent" }),
                e._m(1)
              ])
            : e._e()
        ]);
      },
      l = [
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "weui-toast" }, [
            n("i", { staticClass: "weui-loading weui-icon_toast" }),
            n("p", { staticClass: "weui-toast__content" }, [e._v("数据加载中")])
          ]);
        },
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "weui-toast" }, [
            n("div", {
              staticClass: "weui-icon-success-no-circle weui-icon_toast"
            }),
            n("p", { staticClass: "weui-toast__content" }, [e._v("已完成")])
          ]);
        }
      ],
      f = n("9f12"),
      d = n("8b83"),
      m = n("c65a"),
      h = n("c03e"),
      p = n("9ab4"),
      b = n("2fe1"),
      v = n("4bb5"),
      g = a["a"].extend({ components: {} }),
      w = (function(e) {
        function t(e) {
          return (
            Object(f["a"])(this, t),
            Object(d["a"])(this, Object(m["a"])(t).call(this, e))
          );
        }
        return Object(h["a"])(t, e), t;
      })(g);
    p["a"]([Object(v["a"])("isSuccess")], w.prototype, "isSuccess", void 0),
      p["a"]([Object(v["a"])("isLoading")], w.prototype, "isLoading", void 0),
      (w = p["a"]([Object(b["b"])({ watch: {} })], w));
    var O = w,
      C = O,
      j = n("2877"),
      k = Object(j["a"])(C, u, l, !1, null, null, null),
      S = k.exports,
      y = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return e.isShow
          ? n("div", { staticClass: "js_dialog" }, [
              n("div", { staticClass: "weui-mask" }),
              n("div", { staticClass: "weui-dialog" }, [
                n("div", { staticClass: "weui-dialog__hd" }, [
                  n("strong", { staticClass: "weui-dialog__title" }, [
                    e._v(e._s(e.confirmData.title))
                  ])
                ]),
                n("div", { staticClass: "weui-dialog__bd" }, [
                  e._v(e._s(e.confirmData.msg))
                ]),
                n("div", { staticClass: "weui-dialog__ft" }, [
                  e.confirmData.isShowCancel
                    ? n(
                        "a",
                        {
                          staticClass:
                            "weui-dialog__btn weui-dialog__btn_default",
                          attrs: { href: "javascript:;" },
                          on: {
                            click: function(t) {
                              return e.onCancelHandle();
                            }
                          }
                        },
                        [e._v(e._s(e.confirmData.cancelText))]
                      )
                    : e._e(),
                  e.confirmData.isShowConfirm
                    ? n(
                        "a",
                        {
                          staticClass:
                            "weui-dialog__btn weui-dialog__btn_primary",
                          attrs: { href: "javascript:;" },
                          on: {
                            click: function(t) {
                              return e.confirmHandle();
                            }
                          }
                        },
                        [e._v(e._s(e.confirmData.confirmText))]
                      )
                    : e._e()
                ])
              ])
            ])
          : e._e();
      },
      _ = [],
      L = n("53fe"),
      I = a["a"].extend({ components: {} }),
      E = (function(e) {
        function t(e) {
          var n;
          return (
            Object(f["a"])(this, t),
            (n = Object(d["a"])(this, Object(m["a"])(t).call(this, e))),
            (n.isShow = !1),
            (n.confirmData = {}),
            n
          );
        }
        return (
          Object(h["a"])(t, e),
          Object(L["a"])(t, [
            {
              key: "mounted",
              value: function() {
                this.initData();
              }
            },
            {
              key: "initData",
              value: function() {
                (this.defaultData = {
                  title: "提示",
                  msg: "",
                  isShowConfirm: !0,
                  isShowCancel: !0,
                  confirmText: "确定",
                  cancelText: "取消",
                  onConfirm: function() {},
                  onCancle: function() {}
                }),
                  (this.confirmData = Object.assign({}, this.defaultData));
              }
            },
            {
              key: "confirmHandle",
              value: function() {
                (this.isShow = !1), this.confirmData.onConfirm();
              }
            },
            {
              key: "onCancelHandle",
              value: function() {
                (this.isShow = !1), this.confirmData.onCancle();
              }
            },
            {
              key: "show",
              value: function(e) {
                (this.confirmData = Object.assign({}, this.defaultData, e)),
                  (this.isShow = !0);
              }
            }
          ]),
          t
        );
      })(I);
    E = p["a"]([Object(b["b"])({ watch: {} })], E);
    var D = E,
      N = D,
      x = (n("1716"), Object(j["a"])(N, y, _, !1, null, "571660c8", null)),
      M = x.exports,
      T = n("2f62");
    function P(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function R(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? P(n, !0).forEach(function(t) {
              Object(o["a"])(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : P(n).forEach(function(t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var A = a["a"].extend({
        components: { Toast: S, Confirm: M },
        methods: R({}, Object(T["d"])({ saveConfirm: "SAVE_CONFIRM" })),
        mounted: function() {
          this.saveConfirm(this.$refs.confirmRef);
        }
      }),
      Y = A,
      F = (n("7c55"), Object(j["a"])(Y, c, s, !1, null, null, null)),
      z = F.exports,
      B = n("9483");
    Object(B["a"])("".concat("/", "service-worker.js"), {
      ready: function() {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function() {
        console.log("Service worker has been registered.");
      },
      cached: function() {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function() {
        console.log("New content is downloading.");
      },
      updated: function() {
        console.log("New content is available; please refresh.");
      },
      offline: function() {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function(e) {
        console.error("Error during service worker registration:", e);
      }
    });
    n("d3b7");
    var Q = n("8c4f"),
      U = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "cardList" },
          [
            e._l(e.sickList, function(t) {
              return n("ul", { key: t.sickNo, staticClass: "weui-cells" }, [
                n(
                  "li",
                  {
                    directives: [
                      {
                        name: "swiper",
                        rawName: "v-swiper",
                        value: t,
                        expression: "item"
                      }
                    ],
                    staticClass: "weui-cell weui-cell_swiped",
                    on: {
                      click: function(n) {
                        return e.enterOrder(t);
                      }
                    }
                  },
                  [
                    n("div", { staticClass: "weui-cell__bd" }, [
                      n("div", { staticClass: "weui-cell weui-cell_access" }, [
                        n("div", { staticClass: "weui-cell__bd" }, [
                          n("p", [e._v(e._s(t.fullName))]),
                          n("p", [e._v(e._s(t.sickNo))])
                        ]),
                        n("div", { staticClass: "weui-cell__ft" }, [
                          e._v(e._s(t.isDefault ? "默认" : ""))
                        ])
                      ])
                    ]),
                    n("div", { staticClass: "weui-cell__ft delBtn" }, [
                      n(
                        "a",
                        {
                          staticClass: "weui-swiped-btn weui-swiped-btn_warn",
                          attrs: { href: "javascript:" },
                          on: {
                            click: function(n) {
                              return n.stopPropagation(), e.deleteHandle(t);
                            }
                          }
                        },
                        [e._v("删除")]
                      )
                    ]),
                    n("div", { staticClass: "blcok" })
                  ]
                )
              ]);
            }),
            n(
              "div",
              { staticClass: "weui-cells" },
              [
                n(
                  "router-link",
                  {
                    staticClass: "weui-cell weui-cell_access weui-cell_example",
                    attrs: { to: "/bind" }
                  },
                  [
                    n("div", { staticClass: "weui-cell__hd" }, [
                      n("i", { staticClass: "icon-person" })
                    ]),
                    n("div", { staticClass: "weui-cell__bd" }, [
                      n("p", [e._v("添加就诊人")])
                    ]),
                    n("div", { staticClass: "weui-cell__ft" }, [
                      e._v("还可以绑定" + e._s(5 - e.sickList.length) + "人")
                    ])
                  ]
                )
              ],
              1
            )
          ],
          2
        );
      },
      H = [],
      V = (n("d81d"), n("4e82"), n("9aa6")),
      J = n("ef39"),
      G = {
        inserted: function(e, t) {
          var n,
            i,
            r,
            a,
            c = 0,
            s = 0,
            o = -136,
            u = function(e) {
              r && cancelAnimationFrame(r),
                (a = void 0),
                (s = s || 0),
                (n = e.touches[0].pageX),
                (i = e.touches[0].pageY),
                document.removeEventListener("touchmove", d);
            },
            l = function(e) {
              t.value.isOpen = !0;
              var r = e.touches[0].pageX,
                u = e.touches[0].pageY,
                l = r - n,
                f = u - i;
              if (
                ("undefined" === typeof a &&
                  (a = !!(Math.abs(f) >= Math.abs(l))),
                !a)
              ) {
                e.stopPropagation();
                var d = r - n + s;
                if ((d > 0 && (d = 0), d < o / 2)) {
                  var h = Math.floor(d - o / 2) / 4;
                  (d = o / 2 + h), d < o && (d = o);
                }
                (c = d), m(c);
              }
            },
            f = function(e) {
              (s = c),
                s > o / 2 || void 0 === s
                  ? ((t.value.isOpen = !1), h(0))
                  : ((t.value.isOpen = !0), h(o / 2)),
                document.removeEventListener("touchmove", d);
            };
          function d(e) {
            e.preventDefault();
          }
          function m(t) {
            (e.style.transform = "translate3d(".concat(t, "px, 0, 0)")),
              (e.style.webkitTransform = "translate3d(".concat(t, "px, 0, 0)"));
          }
          function h(e) {
            var t = e - c,
              n = 17,
              i = 0,
              a = function e() {
                if (((r = window.requestAnimationFrame(e)), i++, i > n)) {
                  return (i = n), window.cancelAnimationFrame(r), void (c = s);
                }
                var a = c + (t * i) / n;
                (s = a), m(a);
              };
            a();
          }
          e.addEventListener("touchstart", u),
            e.addEventListener("touchmove", l),
            e.addEventListener("touchend", f);
        }
      },
      K = n("e85b"),
      q = a["a"].extend({
        components: { Scroll: J["a"] },
        directives: { swiper: G },
        data: function() {
          return { sickList: [] };
        },
        mounted: function() {
          var e = K["h"].get("orderMeal:sickList");
          e && e.length && (this.sickList = e);
        }
      }),
      W = (function(e) {
        function t(e) {
          var n;
          return (
            Object(f["a"])(this, t),
            (n = Object(d["a"])(this, Object(m["a"])(t).call(this, e))),
            Object(K["a"])(function() {
              window["thisCardSelect"] = Object(V["a"])(n);
            }),
            n
          );
        }
        return (
          Object(h["a"])(t, e),
          Object(L["a"])(t, [
            {
              key: "enterOrder",
              value: function(e) {
                if (!e.isOpen) {
                  this.sickList.forEach(function(t) {
                    t.sickNo === e.sickNo
                      ? (t.isDefault = 1)
                      : (t.isDefault = 0);
                  });
                  var t = this.getSickList();
                  K["h"].set("orderMeal:sickList", t),
                    this.saveSickInfo(e),
                    this.$router.push("/menuContent");
                }
              }
            },
            {
              key: "deleteHandle",
              value: function(e) {
                var t = this;
                this.confirmRef.show({
                  title: "删除",
                  msg: "请确认是否删除当前就诊卡号?",
                  onConfirm: function() {
                    return t.deleteSickNo(e);
                  }
                });
              }
            },
            {
              key: "deleteSickNo",
              value: function(e) {
                this.sickList = this.sickList.filter(function(t) {
                  return t.sickNo !== e.sickNo;
                });
                var t = this.getSickList();
                K["h"].set("orderMeal:sickList", t);
              }
            },
            {
              key: "getSickList",
              value: function() {
                var e = this.sickList
                  .map(function(e) {
                    return {
                      sickNo: e.sickNo,
                      tel: e.tel,
                      fullName: e.fullName,
                      isDefault: e.isDefault,
                      location: e.location,
                      prePay: e.prePay
                    };
                  })
                  .sort(function(e, t) {
                    return t.isDefault - e.isDefault;
                  });
                return e;
              }
            }
          ]),
          t
        );
      })(q);
    p["a"]([Object(v["a"])("confirmRef")], W.prototype, "confirmRef", void 0),
      p["a"](
        [Object(v["b"])("SAVE_SICK_INFO")],
        W.prototype,
        "saveSickInfo",
        void 0
      ),
      (W = p["a"]([Object(b["b"])({ watch: {} })], W));
    var X = W,
      Z = X,
      $ = (n("bd92"), Object(j["a"])(Z, U, H, !1, null, "41296fba", null)),
      ee = $.exports,
      te = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("section", [
          n("div", { staticClass: "weui-form__control-area" }, [
            n(
              "div",
              { staticClass: "weui-cells__group weui-cells__group_form" },
              [
                n("div", { staticClass: "weui-cells__title" }, [
                  e._v("绑定就诊卡")
                ]),
                n("div", { staticClass: "weui-cells weui-cells_form" }, [
                  n("div", { staticClass: "weui-cell" }, [
                    e._m(0),
                    n("div", { staticClass: "weui-cell__bd" }, [
                      n("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.fullName,
                            expression: "fullName"
                          }
                        ],
                        staticClass: "weui-input",
                        attrs: { placeholder: "填写姓名" },
                        domProps: { value: e.fullName },
                        on: {
                          input: function(t) {
                            t.target.composing || (e.fullName = t.target.value);
                          }
                        }
                      })
                    ])
                  ]),
                  n("div", { staticClass: "weui-cell" }, [
                    e._m(1),
                    n("div", { staticClass: "weui-cell__bd" }, [
                      n("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.sickNo,
                            expression: "sickNo"
                          }
                        ],
                        staticClass: "weui-input",
                        attrs: { placeholder: "填写就诊卡号" },
                        domProps: { value: e.sickNo },
                        on: {
                          input: function(t) {
                            t.target.composing || (e.sickNo = t.target.value);
                          }
                        }
                      })
                    ])
                  ]),
                  n("div", { staticClass: "weui-cell" }, [
                    e._m(2),
                    n("div", { staticClass: "weui-cell__bd" }, [
                      n("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.tel,
                            expression: "tel"
                          }
                        ],
                        staticClass: "weui-input",
                        attrs: {
                          placeholder: "填写绑定的电话号码",
                          type: "number",
                          pattern: "[0-9]*"
                        },
                        domProps: { value: e.tel },
                        on: {
                          input: function(t) {
                            t.target.composing || (e.tel = t.target.value);
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]
            )
          ]),
          n("div", { staticClass: "weui-form__tips-area" }, [
            n("div", { staticClass: "weui-form__tips i-errors" }, [
              e._v(e._s(e.msg))
            ])
          ]),
          n("div", { staticClass: "weui-form__opr-area" }, [
            n(
              "a",
              {
                staticClass: "weui-btn weui-btn_primary",
                class: e.isDisable ? "weui-btn_disabled" : "",
                attrs: { href: "javascript:" },
                on: {
                  click: function(t) {
                    return e.submit();
                  }
                }
              },
              [e._v("确定")]
            )
          ])
        ]);
      },
      ne = [
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "weui-cell__hd" }, [
            n("label", { staticClass: "weui-label" }, [e._v("姓名")])
          ]);
        },
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "weui-cell__hd" }, [
            n("label", { staticClass: "weui-label" }, [e._v("就诊卡")])
          ]);
        },
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "weui-cell__hd" }, [
            n("label", { staticClass: "weui-label" }, [e._v("联系电话")])
          ]);
        }
      ],
      ie = (n("7db0"), n("96cf"), n("89ba")),
      re = n("6c41"),
      ae = a["a"].extend({
        components: {},
        data: function() {
          return {
            sickNo: "1034567892",
            fullName: "胡莹",
            tel: "15918611293",
            msg: ""
          };
        }
      }),
      ce = (function(e) {
        function t() {
          var e;
          return (
            Object(f["a"])(this, t),
            (e = Object(d["a"])(this, Object(m["a"])(t).call(this))),
            Object(K["a"])(function() {
              window["thisCardBind"] = Object(V["a"])(e);
            }),
            e
          );
        }
        return (
          Object(h["a"])(t, e),
          Object(L["a"])(t, [
            {
              key: "submit",
              value: (function() {
                var e = Object(ie["a"])(
                  regeneratorRuntime.mark(function e() {
                    var t,
                      n,
                      i,
                      r,
                      a,
                      c,
                      s = this;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        while (1) {
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this.isDisable) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              if (((t = this.regCheck()), !0 === t)) {
                                e.next = 6;
                                break;
                              }
                              return (this.msg = t), e.abrupt("return");
                            case 6:
                              return (
                                (this.msg = ""),
                                (n = {
                                  sickNo: this.sickNo,
                                  fullName: this.fullName,
                                  tel: this.tel
                                }),
                                this.setloading(!0),
                                (e.next = 11),
                                Object(re["a"])("checkSickInfo", n).toPromise()
                              );
                            case 11:
                              if (
                                ((i = e.sent), this.setloading(!1), !i.code)
                              ) {
                                e.next = 16;
                                break;
                              }
                              return (this.msg = i.msg), e.abrupt("return");
                            case 16:
                              if (
                                ((n.isDefault = 0),
                                (n.prePay = i.sick[0].prePay),
                                (n.location = i.sick[0].location),
                                (r = K["h"].get("orderMeal:sickList")),
                                !r || !r.length)
                              ) {
                                e.next = 33;
                                break;
                              }
                              if (
                                ((a = r.find(function(e) {
                                  return e.sickNo === n.sickNo;
                                })),
                                !a)
                              ) {
                                e.next = 25;
                                break;
                              }
                              return (
                                (this.msg =
                                  "当前就诊卡号已存在列表中，不需新增"),
                                e.abrupt("return")
                              );
                            case 25:
                              if (5 !== r.length) {
                                e.next = 28;
                                break;
                              }
                              return (
                                (this.msg = "当前就诊卡号列表最多绑定5人"),
                                e.abrupt("return")
                              );
                            case 28:
                              r.push(n),
                                (r = r.sort(function(e, t) {
                                  return t.isDefault - e.isDefault;
                                })),
                                K["h"].set("orderMeal:sickList", r),
                                (e.next = 35);
                              break;
                            case 33:
                              (c = [n]), K["h"].set("orderMeal:sickList", c);
                            case 35:
                              this.setSuccess(!0),
                                setTimeout(function() {
                                  s.setSuccess(!1), s.$router.push("/enter");
                                }, 1e3);
                            case 37:
                            case "end":
                              return e.stop();
                          }
                        }
                      },
                      e,
                      this
                    );
                  })
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })()
            },
            {
              key: "regCheck",
              value: function() {
                var e = Object(K["g"])([
                  { name: "姓名", key: "fullName", value: this.fullName },
                  { name: "就诊卡", key: "sickNo", value: this.sickNo },
                  { name: "联系电话", key: "tel", value: this.tel }
                ]);
                return e;
              }
            },
            {
              key: "isDisable",
              get: function() {
                return !this.sickNo || !this.fullName || !this.tel;
              }
            }
          ]),
          t
        );
      })(ae);
    p["a"]([Object(v["b"])("SET_LOADING")], ce.prototype, "setloading", void 0),
      p["a"](
        [Object(v["b"])("SET_SUCCESS")],
        ce.prototype,
        "setSuccess",
        void 0
      ),
      (ce = p["a"]([Object(b["b"])({ watch: {} })], ce));
    var se = ce,
      oe = se,
      ue = (n("c194"), Object(j["a"])(oe, te, ne, !1, null, "76a1dae4", null)),
      le = ue.exports,
      fe = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "noResult" },
          [
            e._m(0),
            n("h4", { staticClass: "page__title" }, [e._v("404")]),
            n("p", { staticClass: "page__desc" }, [
              e._v("抱歉，你访问的页面不存在")
            ]),
            n(
              "router-link",
              {
                staticClass: "weui-btn weui-btn_primary",
                attrs: { tag: "a", to: "/enter" }
              },
              [e._v("返回选择就诊卡")]
            )
          ],
          1
        );
      },
      de = [
        function() {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "imgWrap" }, [
            i("img", { attrs: { src: n("00fe") } })
          ]);
        }
      ],
      me = a["a"].extend({ components: {} }),
      he = (function(e) {
        function t(e) {
          return (
            Object(f["a"])(this, t),
            Object(d["a"])(this, Object(m["a"])(t).call(this, e))
          );
        }
        return Object(h["a"])(t, e), t;
      })(me);
    he = p["a"]([Object(b["b"])({ watch: {} })], he);
    var pe = he,
      be = pe,
      ve = (n("3251"), Object(j["a"])(be, fe, de, !1, null, "6d92db2c", null)),
      ge = ve.exports;
    a["a"].use(Q["a"]);
    var we,
      Oe = [
        { path: "/", redirect: "/enter" },
        { path: "/enter", name: "enter", component: ee },
        { path: "/bind", name: "bind", component: le },
        {
          path: "/menuContent",
          component: function() {
            return n.e("menuContent").then(n.bind(null, "827b"));
          },
          beforeEnter: function(e, t, n) {
            try {
              var i = Ce.app.$store.state;
              if (i && i.sickInfo) {
                return void n();
              }
              Ce.push("/enter");
            } catch (r) {
              Ce.push("/enter");
            }
          },
          children: [
            { path: "/", redirect: "/menuContent/timeSelect" },
            {
              path: "/menuContent/timeSelect",
              component: function() {
                return n.e("timeSelect").then(n.bind(null, "eb95"));
              },
              children: [
                { path: "/", redirect: "/menuContent/timeSelect/mealTime" },
                {
                  path: "/menuContent/timeSelect/mealTime",
                  name: "mealTime",
                  component: function() {
                    return n.e("mealTime").then(n.bind(null, "c711"));
                  }
                },
                {
                  path: "/menuContent/timeSelect/mealMenu",
                  name: "mealMenu",
                  component: function() {
                    return n.e("mealMenu").then(n.bind(null, "26a1"));
                  }
                },
                {
                  path: "/menuContent/timeSelect/mealPay",
                  name: "mealPay",
                  component: function() {
                    return n.e("mealPay").then(n.bind(null, "a156"));
                  }
                }
              ]
            },
            {
              path: "/menuContent/orderMap",
              component: function() {
                return n.e("orderInfo").then(n.bind(null, "c8b7"));
              },
              children: [
                { path: "/", redirect: "/menuContent/orderMap/orderList" },
                {
                  path: "/menuContent/orderMap/orderList",
                  name: "orderList",
                  component: function() {
                    return n.e("orderList").then(n.bind(null, "cb84"));
                  }
                },
                {
                  path: "/menuContent/orderMap/orderDetail/:orderNo",
                  name: "orderDetail",
                  component: function() {
                    return n.e("orderList").then(n.bind(null, "b065"));
                  }
                }
              ]
            }
          ]
        },
        { path: "*", name: "404", component: ge }
      ],
      Ce = new Q["a"]({ mode: "history", base: "/", routes: Oe }),
      je = Ce,
      ke = {
        isLoading: !1,
        isSuccess: !1,
        confirmRef: null,
        sickInfo: null,
        mealInfo: null,
        isShowCart: !1,
        cartClsSubject: null,
        cartDir: null,
        cartLen: 0,
        orderInfo: null
      },
      Se = ke,
      ye = function(e) {
        return e.isSuccess;
      },
      _e = function(e) {
        return e.isLoading;
      },
      Le = function(e) {
        return e.confirmRef;
      },
      Ie = function(e) {
        return e.sickInfo;
      },
      Ee = function(e) {
        return e.mealInfo;
      },
      De = function(e) {
        return e.isShowCart;
      },
      Ne = function(e) {
        return e.cartClsSubject;
      },
      xe = function(e) {
        return e.cartDir;
      },
      Me = function(e) {
        return e.cartLen;
      },
      Te = function(e) {
        return e.orderInfo;
      },
      Pe = function(e, t) {
        var n = e.state;
        n.isSuccess = t;
      },
      Re = function(e, t) {
        var n = e.state;
        n.isLoading = t;
      },
      Ae = "SET_SUCCESS",
      Ye = "SET_LOADING",
      Fe = "SAVE_CONFIRM",
      ze = "SAVE_SICK_INFO",
      Be = "SAVE_MEAL_INFO",
      Qe = "SET_SHOW_CART",
      Ue = "CREATE_CART_CLOSE_SUBJECT",
      He = "SET_CART_DIR",
      Ve = "SET_CART_LEN",
      Je = "SET_ORDER_INFO",
      Ge = n("1e6e"),
      Ke =
        ((we = {}),
        Object(o["a"])(we, Ae, function(e, t) {
          e.isSuccess = t;
        }),
        Object(o["a"])(we, Ye, function(e, t) {
          e.isLoading = t;
        }),
        Object(o["a"])(we, Fe, function(e, t) {
          e.confirmRef = t;
        }),
        Object(o["a"])(we, ze, function(e, t) {
          e.sickInfo = t;
        }),
        Object(o["a"])(we, Be, function(e, t) {
          e.mealInfo = t;
        }),
        Object(o["a"])(we, Qe, function(e, t) {
          e.isShowCart = t;
        }),
        Object(o["a"])(we, Ue, function(e) {
          var t = new Ge["b"]();
          e.cartClsSubject = { subject: t, listener: t.asObservable() };
        }),
        Object(o["a"])(we, He, function(e, t) {
          e.cartDir = t;
        }),
        Object(o["a"])(we, Ve, function(e, t) {
          e.cartLen = t;
        }),
        Object(o["a"])(we, Je, function(e, t) {
          e.orderInfo = t;
        }),
        we),
      qe = Ke;
    a["a"].use(T["a"]);
    var We = new T["a"].Store({
      state: Se,
      mutations: qe,
      actions: r,
      getters: i
    });
    (a["a"].config.productionTip = !1),
      new a["a"]({
        router: je,
        store: We,
        render: function(e) {
          return e(z);
        }
      }).$mount("#app");
  },
  e85b: function(e, t, n) {
    "use strict";
    n("45fc"),
      n("0d03"),
      n("b0c0"),
      n("a9e3"),
      n("b64b"),
      n("d3b7"),
      n("ac1f"),
      n("25f0"),
      n("5319"),
      n("1276");
    var i = n("bf2d"),
      r = n("3022"),
      a = function(e) {
        return "【 ".concat(e, " 】");
      },
      c = {
        fullName: {
          reg: /^.{2,}$/,
          regFailMsg: function(e) {
            return a(e) + "至少为2个字符!";
          }
        },
        tel: {
          reg: /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/,
          regFailMsg: function(e) {
            return a(e) + "格式不正确!";
          }
        },
        sickNo: {
          reg: /^\d{10}$/i,
          regFailMsg: function(e) {
            return a(e) + "格式不正确!";
          }
        }
      };
    function s(e) {
      var t;
      if (Object(r["isArray"])(e)) {
        var n = e.some(function(e) {
          var n = c[e.key];
          return (
            !!n && (!n.reg.test(e.value) && ((t = n.regFailMsg(e.name)), !0))
          );
        });
        return !n || t;
      }
      e = e;
      var i = c[e.key];
      return !!i && (!!i.reg.test(e.value) || ((t = i.regFailMsg(e.name)), t));
    }
    n.d(t, "g", function() {
      return s;
    }),
      n.d(t, "h", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return u;
      }),
      n.d(t, "d", function() {
        return l;
      }),
      n.d(t, "e", function() {
        return d;
      }),
      n.d(t, "f", function() {
        return m;
      }),
      n.d(t, "b", function() {
        return h;
      }),
      n.d(t, "a", function() {
        return p;
      });
    var o = {
      get: function(e) {
        var t = localStorage.getItem(e);
        return t ? JSON.parse(t) : null;
      },
      set: function(e, t) {
        "object" === Object(i["a"])(t) && t
          ? localStorage.setItem(e, JSON.stringify(t))
          : localStorage.setItem(e, t);
      }
    };
    function u(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
        n = e.getFullYear(),
        i = e.getMonth() + 1,
        r = e.getDate(),
        a = function(e) {
          return e >= 10 ? e : "0".concat(e);
        };
      return n + t + a(i) + t + a(r);
    }
    function l(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "YYYY-MM-DD",
        n = e.getFullYear(),
        i = e.getMonth() + 1,
        r = e.getDate(),
        a = function(e) {
          return e >= 10 ? e : "0".concat(e);
        };
      switch (t) {
        case "MM-DD":
          return a(i) + "月" + a(r) + "日";
        case "DD":
          return a(r) + "日";
        case "YYYY-MM":
          return n + "年" + a(i) + "月";
        case "YYYY-MM-DD":
        default:
          return n + "年" + a(i) + "月" + a(r) + "日";
      }
    }
    function f(e) {
      return new Number(e).toString().split(".")[1]
        ? new Number(e).toString().split(".")[1].length
        : 0;
    }
    function d(e, t) {
      var n = f(e) + f(t),
        i = Math.pow(10, n),
        r = +e.toString().replace(".", ""),
        a = +t.toString().replace(".", "");
      return (r * a) / i;
    }
    function m(e, t) {
      var n = Math.max(f(e), f(t)),
        i = Math.pow(10, n);
      return (d(e, i) + d(t, i)) / i;
    }
    function h(e) {
      var t = o.get("orderMeal:cartList"),
        n = t[e.day],
        i = n[e.sickNo];
      delete i[e.mealType],
        Object.keys(i).length ||
          (delete n[e.sickNo], Object.keys(n).length || delete t[e.day]),
        o.set("orderMeal:cartList", t);
    }
    function p(e) {
      0;
    }
  },
  eb75: function(e, t, n) {},
  ef39: function(e, t, n) {
    "use strict";
    var i = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { ref: "wrapper", staticClass: "wrapper" }, [
          n("div", [e._t("default")], 2)
        ]);
      },
      r = [],
      a = n("9f12"),
      c = n("53fe"),
      s = n("8b83"),
      o = n("c65a"),
      u = n("9aa6"),
      l = n("c03e"),
      f = n("9ab4"),
      d = n("2b0e"),
      m = n("2fe1"),
      h = n("60a3"),
      p = n("e85b"),
      b = d["a"].extend({ components: {} }),
      v = (function(e) {
        function t(e) {
          var n;
          return (
            Object(a["a"])(this, t),
            (n = Object(s["a"])(this, Object(o["a"])(t).call(this, e))),
            (n.scroll = null),
            Object(p["a"])(function() {
              window["thisScroll"] = Object(u["a"])(n);
            }),
            n
          );
        }
        return (
          Object(l["a"])(t, e),
          Object(c["a"])(t, [
            {
              key: "mounted",
              value: function() {
                var e = this;
                setTimeout(function() {
                  e.initData();
                }, 20);
              }
            },
            {
              key: "scrollTo",
              value: function() {
                this.scroll &&
                  this.scroll.scrollTo.apply(this.scroll, arguments);
              }
            },
            {
              key: "scrollToElement",
              value: function() {
                this.scroll &&
                  this.scroll.scrollToElement.apply(this.scroll, arguments);
              }
            },
            {
              key: "initData",
              value: function() {
                (this.deafultData = {
                  probeType: 1,
                  click: !0,
                  listenScroll: !1
                }),
                  (this.scrollData = Object.assign(
                    {},
                    this.deafultData,
                    this.data
                  ));
                var e = this.$refs.wrapper;
                if (e) {
                  var t = window.BScroll;
                  if (
                    ((this.scroll = new t(e, this.scrollData)),
                    this.listenScroll)
                  ) {
                    var n = this;
                    this.scroll.on("scroll", function(e) {
                      n.$emit("scroll", e);
                    });
                  }
                }
              }
            }
          ]),
          t
        );
      })(b);
    f["a"]([Object(h["a"])()], v.prototype, "data", void 0),
      f["a"]([Object(h["a"])()], v.prototype, "listenScroll", void 0),
      (v = f["a"]([m["b"]], v));
    var g = v,
      w = g,
      O = (n("b0c3"), n("2877")),
      C = Object(O["a"])(w, i, r, !1, null, "63cdeaaa", null);
    t["a"] = C.exports;
  }
});
//# sourceMappingURL=app.c55b643e.js.map
