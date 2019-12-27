(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["mealMenu"],
  {
    "13d5": function(t, e, i) {
      "use strict";
      var n = i("23e7"),
        a = i("d58f").left,
        r = i("b301");
      n(
        { target: "Array", proto: !0, forced: r("reduce") },
        {
          reduce: function(t) {
            return a(
              this,
              t,
              arguments.length,
              arguments.length > 1 ? arguments[1] : void 0
            );
          }
        }
      );
    },
    "26a1": function(t, e, i) {
      "use strict";
      i.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.menuTypeList &&
            t.menuItemList &&
            t.menuTypeList.length &&
            t.menuItemList.length
            ? i(
                "div",
                { staticClass: "mealMenu" },
                [
                  i(
                    "div",
                    {
                      ref: "menuWrap",
                      staticClass: "menuType",
                      class: t.extendType ? "menuType_active" : ""
                    },
                    [
                      i("scroll", { ref: "menuType" }, [
                        i(
                          "ul",
                          t._l(t.menuTypeList, function(e) {
                            return i(
                              "li",
                              {
                                key: e.tid,
                                ref: "menuGroup",
                                refInFor: !0,
                                class:
                                  e.tid === t.menuType ? "left_active" : "",
                                on: {
                                  click: function(i) {
                                    return t.switchType(e.tid);
                                  }
                                }
                              },
                              [
                                i("i", { staticClass: "icon_sjx" }),
                                i("span", [t._v(t._s(e.name))])
                              ]
                            );
                          }),
                          0
                        )
                      ])
                    ],
                    1
                  ),
                  i(
                    "div",
                    {
                      staticClass: "menuItem",
                      class: t.extendMenu ? "menuItem_active" : ""
                    },
                    [
                      i(
                        "scroll",
                        {
                          ref: "menuItem",
                          attrs: { listenScroll: !0, data: t.scrollData },
                          on: { scroll: t.scroll }
                        },
                        [
                          i(
                            "ul",
                            {
                              staticClass: "chioce_rall",
                              on: {
                                click: function(e) {
                                  return t.extendTheMenu();
                                }
                              }
                            },
                            t._l(t.menuItemList, function(e) {
                              return i(
                                "li",
                                { key: e.tid, ref: "listGroup", refInFor: !0 },
                                [
                                  i("h5", [t._v(t._s(e.title))]),
                                  t._l(e.item, function(e) {
                                    return i("dl", { key: e.tid + e.fid }, [
                                      i("dt", [
                                        i("img", { attrs: { src: e.img } })
                                      ]),
                                      i("dd", [
                                        i("h6", [
                                          t._v(t._s(e.name)),
                                          i("br"),
                                          i("b", [
                                            t._v("¥ "),
                                            i("span", [t._v(t._s(e.price))])
                                          ])
                                        ]),
                                        i("p", [
                                          e.quantity
                                            ? i("i", {
                                                staticClass:
                                                  "icons icon_reduce",
                                                on: {
                                                  click: function(i) {
                                                    return t.reduceItem(
                                                      e.tid,
                                                      e.fid
                                                    );
                                                  }
                                                }
                                              })
                                            : t._e(),
                                          t._v(t._s(e.quantity)),
                                          i("i", {
                                            staticClass: "icons icon_plus",
                                            on: {
                                              click: function(i) {
                                                return t.addItem(
                                                  i,
                                                  e.tid,
                                                  e.fid
                                                );
                                              }
                                            }
                                          })
                                        ])
                                      ])
                                    ]);
                                  })
                                ],
                                2
                              );
                            }),
                            0
                          )
                        ]
                      ),
                      i("h5", { ref: "fixeTop", staticClass: "fixed" }, [
                        t._v(t._s(t.fixedTitle))
                      ])
                    ],
                    1
                  ),
                  i("cart", {
                    attrs: { cartData: t.cartData },
                    on: {
                      increase: t.increase,
                      decrease: t.decrease,
                      clearCart: t.clearHandle
                    }
                  })
                ],
                1
              )
            : t._e();
        },
        a = [],
        r =
          (i("4de4"),
          i("7db0"),
          i("c740"),
          i("4160"),
          i("13d5"),
          i("0d03"),
          i("b64b"),
          i("159b"),
          i("96cf"),
          i("89ba")),
        s = i("9f12"),
        c = i("53fe"),
        o = i("8b83"),
        u = i("c65a"),
        l = i("9aa6"),
        h = i("c03e"),
        f = i("9ab4"),
        d = i("2b0e"),
        m = i("2fe1"),
        y = i("4bb5"),
        p = i("ef39"),
        v = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("transition", { attrs: { name: "slide" } }, [
            t.isShowCart
              ? i(
                  "div",
                  {
                    staticClass: "mask",
                    on: {
                      click: function(e) {
                        return t.closeCart();
                      }
                    }
                  },
                  [
                    t.isShowCart
                      ? i(
                          "div",
                          {
                            staticClass: "cart",
                            on: {
                              click: function(t) {
                                t.stopPropagation();
                              }
                            }
                          },
                          [
                            i("div", { staticClass: "cart_tit" }, [
                              i("p", [t._v("购物车")]),
                              i(
                                "em",
                                {
                                  on: {
                                    click: function(e) {
                                      return t.cleanHandle();
                                    }
                                  }
                                },
                                [
                                  i("i", { staticClass: "icon_lj" }),
                                  i("span", [t._v("清空")])
                                ]
                              )
                            ]),
                            t.cartData
                              ? i(
                                  "ul",
                                  t._l(t.cartData, function(e, n) {
                                    return i("li", { key: n }, [
                                      i("h6", [t._v(t._s(e.name))]),
                                      i("b", [t._v("￥" + t._s(e.price))]),
                                      i("p", [
                                        e.quantity
                                          ? i("i", {
                                              staticClass: "icons icon_reduce",
                                              on: {
                                                click: function(i) {
                                                  return t.decrease(e);
                                                }
                                              }
                                            })
                                          : t._e(),
                                        i("em", [t._v(t._s(e.quantity))]),
                                        i("i", {
                                          staticClass: "icons icon_plus",
                                          on: {
                                            click: function(i) {
                                              return t.increase(e);
                                            }
                                          }
                                        })
                                      ])
                                    ]);
                                  }),
                                  0
                                )
                              : t._e(),
                            i("div", { staticClass: "shop_sum" }, [
                              i("b", [t._v("￥" + t._s(t.amount))]),
                              i(
                                "a",
                                {
                                  attrs: { href: "javascript:void(0)" },
                                  on: {
                                    click: function(e) {
                                      return t.payMent();
                                    }
                                  }
                                },
                                [t._v("去结算 ")]
                              )
                            ])
                          ]
                        )
                      : t._e()
                  ]
                )
              : t._e()
          ]);
        },
        b = [],
        g = (i("a4d3"), i("e439"), i("dbb4"), i("2fa7")),
        k = i("60a3"),
        I = i("e85b");
      function O(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, n);
        }
        return i;
      }
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? O(i, !0).forEach(function(e) {
                Object(g["a"])(t, e, i[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : O(i).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(i, e)
                );
              });
        }
        return t;
      }
      var T = d["a"].extend({ components: {} }),
        j = (function(t) {
          function e(t) {
            return (
              Object(s["a"])(this, e),
              Object(o["a"])(this, Object(u["a"])(e).call(this, t))
            );
          }
          return (
            Object(h["a"])(e, t),
            Object(c["a"])(e, [
              {
                key: "closeCart",
                value: function() {
                  this.cartClsSubject.subject.next();
                }
              },
              {
                key: "increase",
                value: function(t) {
                  this.$emit("increase", { tid: t.tid, fid: t.fid });
                }
              },
              {
                key: "decrease",
                value: function(t) {
                  this.$emit("decrease", { tid: t.tid, fid: t.fid });
                }
              },
              {
                key: "payMent",
                value: function() {
                  if (0 !== this.amount) {
                    var t = this.sickInfo,
                      e = t.sickNo,
                      i = t.tel,
                      n = t.fullName,
                      a = t.location;
                    this.setOrderInfo(
                      D(
                        { sickNo: e, phone: i, fullName: n, location: a },
                        this.mealInfo,
                        { amount: this.amount, cartData: this.cartData }
                      )
                    ),
                      this.closeCart(),
                      this.$router.push("/menuContent/timeSelect/mealPay");
                  }
                }
              },
              {
                key: "cleanHandle",
                value: function() {
                  this.$emit("clearCart");
                }
              },
              {
                key: "amount",
                get: function() {
                  return (this.cartData || []).reduce(function(t, e) {
                    var i = Object(I["e"])(+e.quantity, +e.price);
                    return Object(I["f"])(t, i);
                  }, 0);
                }
              }
            ]),
            e
          );
        })(T);
      f["a"]([Object(y["a"])("isShowCart")], j.prototype, "isShowCart", void 0),
        f["a"](
          [Object(y["a"])("cartClsSubject")],
          j.prototype,
          "cartClsSubject",
          void 0
        ),
        f["a"]([Object(y["a"])("sickInfo")], j.prototype, "sickInfo", void 0),
        f["a"]([Object(y["a"])("mealInfo")], j.prototype, "mealInfo", void 0),
        f["a"](
          [Object(y["b"])("SET_ORDER_INFO")],
          j.prototype,
          "setOrderInfo",
          void 0
        ),
        f["a"](
          [Object(y["b"])("SET_SHOW_CART")],
          j.prototype,
          "setShowCart",
          void 0
        ),
        f["a"]([Object(k["a"])()], j.prototype, "cartData", void 0),
        f["a"]([Object(k["a"])()], j.prototype, "len", void 0),
        (j = f["a"]([Object(m["b"])({ watch: {} })], j));
      var x = j,
        _ = x,
        w = (i("9835"), i("2877")),
        C = Object(w["a"])(_, v, b, !1, null, "5d1ca276", null),
        L = C.exports,
        S = i("6c41");
      i("d81d"), i("b0c0");
      function H(t, e) {
        var i = [];
        return (
          (i = t.map(function(t) {
            var i = e.filter(function(e) {
              return e.tid === t.tid;
            });
            return { title: t.name, tid: t.tid, item: i };
          })),
          i
        );
      }
      function q(t, e) {
        var i = {};
        return (i[t.day] = {}), (i[t.day][e.sickNo] = {}), i;
      }
      i("99af");
      var N = (function() {
        function t(e, i, n) {
          Object(s["a"])(this, t),
            (this.startDir = { x: 0, y: 0 }),
            (this.endDir = { x: 0, y: 0 }),
            (this.velocity = { x: 0, y: -10 }),
            (this.gravity = 0.98),
            (this.color = "#00B1B5"),
            (this.startDir = e),
            (this.endDir = i),
            (this.radius = n),
            this.initDom();
        }
        return (
          Object(c["a"])(t, [
            {
              key: "initDom",
              value: function() {
                var t = document.createElement("span"),
                  e = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "".concat(this.radius, "rem"),
                    height: "".concat(this.radius, "rem"),
                    backgroundColor: this.color,
                    zIndex: 999,
                    borderRadius: "50%",
                    transform: "translate3d("
                      .concat(this.startDir.x, "px, ")
                      .concat(this.startDir.y, "px, 0)"),
                    webkitTransform: "translate3d("
                      .concat(this.startDir.x, "px, ")
                      .concat(this.startDir.y, "px, 0)")
                  };
                Object.assign(t.style, e),
                  (this.target = t),
                  document.body.append(this.target),
                  this.getTime();
              }
            },
            {
              key: "running",
              value: function() {
                var t = {
                  transform: "translate3d("
                    .concat(this.startDir.x, "px, ")
                    .concat(this.startDir.y, "px, 0)"),
                  webkitTransform: "translate3d("
                    .concat(this.startDir.x, "px, ")
                    .concat(this.startDir.y, "px, 0)")
                };
                Object.assign(this.target.style, t);
              }
            },
            {
              key: "destory",
              value: function() {
                this.target.remove();
              }
            },
            {
              key: "throwDown",
              value: function(t) {
                (this.startDir.x += this.velocity.x),
                  (this.velocity.y += this.gravity),
                  (this.startDir.y += this.velocity.y),
                  this.startDir.y >= this.endDir.y &&
                    ((this.velocity.y = 0),
                    (this.velocity.x = 0),
                    (this.startDir.x = this.endDir.x),
                    (this.startDir.y = this.endDir.y),
                    window.cancelAnimationFrame(this.timer),
                    this.destory(),
                    t()),
                  this.running();
              }
            },
            {
              key: "getTime",
              value: function() {
                var t = 0,
                  e = this.velocity.y,
                  i = this.gravity,
                  n = this.startDir.y;
                while (n < this.endDir.y) {
                  (e += i), (n += e), t++;
                }
                var a = this.endDir.x - this.startDir.x;
                this.velocity.x = a / t;
              }
            }
          ]),
          t
        );
      })();
      function E(t, e, i, n) {
        var a = new N(t, e, i),
          r = function t() {
            (a.timer = window.requestAnimationFrame(t)), a.throwDown(n);
          };
        r();
      }
      var M = i("1e6e"),
        $ = d["a"].extend({ components: { Scroll: p["a"], Cart: L } }),
        R = (function(t) {
          function e(t) {
            var i;
            return (
              Object(s["a"])(this, e),
              (i = Object(o["a"])(this, Object(u["a"])(e).call(this, t))),
              (i.menuTypeList = []),
              (i.cartData = []),
              (i.menuItemList = []),
              (i.scrollData = { click: !0, probeType: 3 }),
              (i.extendType = !1),
              (i.extendMenu = !0),
              (i.menuType = "0"),
              (i.scrollY = 0),
              (i.listHeight = []),
              (i.menuHeight = []),
              (i.diff = 0),
              (i.titleHeight = 0),
              (i.menuSubject = new M["b"]()),
              Object(I["a"])(function() {
                window["thisMealMenu"] = Object(l["a"])(i);
              }),
              i
            );
          }
          return (
            Object(h["a"])(e, t),
            Object(c["a"])(e, [
              {
                key: "switchType",
                value: function(t) {
                  if (!this.extendType) {
                    return (this.extendType = !0), void (this.extendMenu = !1);
                  }
                  (this.menuType = t), this.menuItemScroll(+t);
                }
              },
              {
                key: "extendTheMenu",
                value: function() {
                  (this.extendType = !1), (this.extendMenu = !0);
                }
              },
              {
                key: "scroll",
                value: function(t) {
                  this.scrollY = t.y;
                }
              },
              {
                key: "calculateHeigh",
                value: function() {
                  (this.listHeight = []), (this.menuHeight = []);
                  var t = this.$refs.listGroup,
                    e = this.$refs.menuGroup,
                    i = 0,
                    n = 0,
                    a = this.$refs.menuWrap;
                  this.wrapHieght = a.clientHeight;
                  for (var r = 0; r < t.length; r++) {
                    var s = t[r];
                    (i += s.clientHeight), this.listHeight.push(i);
                  }
                  for (var c = 0; c < e.length; c++) {
                    var o = e[c];
                    (n += o.clientHeight), this.menuHeight.push(n);
                  }
                }
              },
              {
                key: "menuTypeScroll",
                value: function(t) {
                  if (t || 0 === t) {
                    var e = this.menuHeight[0],
                      i = this.menuHeight[this.menuHeight.length - 1];
                    t < 0 ? (t = 0) : i - t * e < this.wrapHieght && t--;
                    var n = this.$refs.menuType;
                    n.scrollToElement(this.$refs.menuGroup[t], 300);
                  }
                }
              },
              {
                key: "menuItemScroll",
                value: function(t) {
                  var e = this.listHeight[this.listHeight.length - 1],
                    i = e - this.wrapHieght,
                    n = this.listHeight[t - 1] > i,
                    a = this.$refs.menuItem;
                  if (t < 0) {
                    t = 0;
                  } else if (n) {
                    return void a.scrollTo(0, -i, 300);
                  }
                  a.scrollToElement(this.$refs.listGroup[t], 300);
                }
              },
              {
                key: "addItem",
                value: function(t, e, i) {
                  var n = this,
                    a = this.menuItemList.findIndex(function(t) {
                      return t.tid === e;
                    }),
                    r = this.menuItemList[a].item.find(function(t) {
                      return t.fid === i;
                    });
                  r.quantity ? r.quantity++ : (r.quantity = 1),
                    this.$set(this.menuItemList, a, this.menuItemList[a]);
                  var s = Object.assign(
                    { mealType: this.mealInfo.mealType },
                    r
                  );
                  delete s.img;
                  var c = this.cartData.find(function(t) {
                    return t.tid === e && t.fid === i;
                  });
                  c ? (c.quantity = s.quantity) : this.cartData.push(s);
                  var o = JSON.stringify(this.cartData),
                    u = function() {
                      var t = JSON.parse(o);
                      n.getTotal(t);
                    };
                  if (t) {
                    var l = t.target.getBoundingClientRect(),
                      h = l.x,
                      f = l.y;
                    E({ x: h, y: f }, this.cartDir, 0.34, u);
                  } else {
                    u();
                  }
                  this.saveCart();
                }
              },
              {
                key: "reduceItem",
                value: function(t, e) {
                  var i = this.menuItemList.findIndex(function(e) {
                      return e.tid === t;
                    }),
                    n = this.menuItemList[i].item.find(function(t) {
                      return t.fid === e;
                    });
                  (n.quantity = n.quantity > 0 ? n.quantity - 1 : 0),
                    0 === n.quantity && delete n.quantity,
                    this.$set(this.menuItemList, i, this.menuItemList[i]);
                  var a = Object.assign(
                    { mealType: this.mealInfo.mealType },
                    n
                  );
                  delete a.img;
                  var r = this.cartData.find(function(i) {
                    return i.tid === t && i.fid === e;
                  });
                  (r.quantity = a.quantity),
                    (this.cartData = this.cartData.filter(function(t) {
                      return t.quantity;
                    })),
                    this.getTotal(this.cartData),
                    this.saveCart();
                }
              },
              {
                key: "increase",
                value: function(t) {
                  this.addItem(null, t.tid, t.fid);
                }
              },
              {
                key: "decrease",
                value: function(t) {
                  this.reduceItem(t.tid, t.fid);
                }
              },
              {
                key: "beforeCreate",
                value: function() {
                  var t = I["h"].get("orderMeal:cartList"),
                    e = Object(I["c"])(new Date());
                  t &&
                    (Object.keys(t).forEach(function(i) {
                      new Date(i).getTime() < new Date(e).getTime() &&
                        delete t[i];
                    }),
                    I["h"].set("orderMeal:cartList", t));
                }
              },
              {
                key: "created",
                value: (function() {
                  var t = Object(r["a"])(
                    regeneratorRuntime.mark(function t() {
                      var e,
                        i,
                        n,
                        a,
                        r,
                        s,
                        c = this;
                      return regeneratorRuntime.wrap(
                        function(t) {
                          while (1) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  this.setloading(!0),
                                  (t.next = 3),
                                  Object(S["a"])("getMenuKind").toPromise()
                                );
                              case 3:
                                if (((e = t.sent), !e.code)) {
                                  t.next = 9;
                                  break;
                                }
                                return (
                                  this.setloading(!1),
                                  this.confirmRef.show({
                                    title: "获取菜单错误",
                                    msg: e.msg,
                                    isShowCancel: !1
                                  }),
                                  this.menuSubject.next(!1),
                                  t.abrupt("return")
                                );
                              case 9:
                                return (
                                  (this.menuTypeList = e.menuKind),
                                  (t.next = 12),
                                  Object(S["a"])("getMenuItem").toPromise()
                                );
                              case 12:
                                if (((i = t.sent), !e.code)) {
                                  t.next = 18;
                                  break;
                                }
                                return (
                                  this.setloading(!1),
                                  this.confirmRef.show({
                                    title: "获取菜品错误",
                                    msg: i.msg,
                                    isShowCancel: !1
                                  }),
                                  this.menuSubject.next(!1),
                                  t.abrupt("return")
                                );
                              case 18:
                                this.menuSubject.next(!0),
                                  this.setloading(!1),
                                  (this.menuItemList = H(
                                    this.menuTypeList,
                                    i.menuItem
                                  )),
                                  (this.cartList = I["h"].get(
                                    "orderMeal:cartList"
                                  )),
                                  (n = this.mealInfo),
                                  (a = n.day),
                                  (r = n.mealType),
                                  this.cartList &&
                                    this.cartList[a] &&
                                    ((s =
                                      this.cartList[a][this.sickInfo.sickNo] ||
                                      []),
                                    (this.cartData = s[r]),
                                    this.cartData && this.cartData.length
                                      ? (this.cartData.forEach(function(t) {
                                          var e = c.menuItemList.findIndex(
                                              function(e) {
                                                return e.tid === t.tid;
                                              }
                                            ),
                                            i = c.menuItemList[e].item.find(
                                              function(e) {
                                                return e.fid === t.fid;
                                              }
                                            );
                                          i.quantity = t.quantity;
                                        }),
                                        this.getTotal(this.cartData))
                                      : (this.cartData = []));
                              case 24:
                              case "end":
                                return t.stop();
                            }
                          }
                        },
                        t,
                        this
                      );
                    })
                  );
                  function e() {
                    return t.apply(this, arguments);
                  }
                  return e;
                })()
              },
              {
                key: "mounted",
                value: function() {
                  var t = this;
                  this.menuSubject.asObservable().subscribe(function(e) {
                    e &&
                      setTimeout(function() {
                        var e = t.$refs.fixeTop;
                        t.titleHeight = e.offsetHeight;
                      }, 100),
                      t.menuSubject.complete();
                  });
                }
              },
              {
                key: "destroyed",
                value: function() {
                  this.setCartLen(0);
                }
              },
              {
                key: "saveCart",
                value: function() {
                  var t = this.mealInfo,
                    e = t.day,
                    i = t.mealType;
                  if (this.cartList) {
                    var n = this.cartList[e];
                    if (n) {
                      if (n[this.sickInfo.sickNo]) {
                        var a = n[this.sickInfo.sickNo];
                        a[i] = this.cartData;
                      } else {
                        var r = q(this.mealInfo, this.sickInfo);
                        (r[e][this.sickInfo.sickNo][i] = this.cartData),
                          (n[this.sickInfo.sickNo] =
                            r[e][this.sickInfo.sickNo]);
                      }
                    } else {
                      var s = q(this.mealInfo, this.sickInfo);
                      (s[e][this.sickInfo.sickNo][i] = this.cartData),
                        Object.assign(this.cartList, s);
                    }
                  } else {
                    var c = q(this.mealInfo, this.sickInfo);
                    (c[e][this.sickInfo.sickNo][i] = this.cartData),
                      (this.cartList = c);
                  }
                  I["h"].set("orderMeal:cartList", this.cartList);
                }
              },
              {
                key: "getTotal",
                value: function(t) {
                  (this.len = t.reduce(function(t, e) {
                    return t + e.quantity;
                  }, 0)),
                    this.setCartLen(this.len);
                }
              },
              {
                key: "clearHandle",
                value: function() {
                  var t = this,
                    e = this.sickInfo.sickNo,
                    i = this.mealInfo,
                    n = i.day,
                    a = i.mealType,
                    r = [];
                  this.cartData.forEach(function(t) {
                    r.push({ tid: t.tid, fid: t.fid, quantity: t.quantity });
                  }),
                    r.forEach(function(e) {
                      for (var i = 0, n = +e.quantity; i < n; i++) {
                        t.reduceItem(e.tid, e.fid);
                      }
                    }),
                    Object(I["b"])({ sickNo: e, day: n, mealType: a });
                }
              },
              {
                key: "fixedTitle",
                get: function() {
                  return this.scrollY > 0
                    ? ""
                    : this.menuType
                    ? this.menuItemList[this.menuType].title
                    : "";
                }
              }
            ]),
            e
          );
        })($);
      f["a"]([Object(y["a"])("confirmRef")], R.prototype, "confirmRef", void 0),
        f["a"]([Object(y["a"])("mealInfo")], R.prototype, "mealInfo", void 0),
        f["a"]([Object(y["a"])("sickInfo")], R.prototype, "sickInfo", void 0),
        f["a"]([Object(y["a"])("cartDir")], R.prototype, "cartDir", void 0),
        f["a"](
          [Object(y["b"])("SET_LOADING")],
          R.prototype,
          "setloading",
          void 0
        ),
        f["a"](
          [Object(y["b"])("SET_CART_LEN")],
          R.prototype,
          "setCartLen",
          void 0
        ),
        (R = f["a"](
          [
            Object(m["b"])({
              watch: {
                scrollY: function(t) {
                  var e = this;
                  if (t > 0) {
                    return (
                      (e.menuType = e.menuItemList[0].tid),
                      void e.menuTypeScroll(+e.menuType)
                    );
                  }
                  for (
                    var i = e.listHeight, n = (e.titleHeight, 0);
                    n < i.length;
                    n++
                  ) {
                    var a = i[n - 1] || 0,
                      r = i[n];
                    if (-t >= a && -t < r) {
                      (e.menuType = e.menuItemList[n].tid), (e.diff = t + r);
                      break;
                    }
                  }
                  e.menuTypeScroll(+e.menuType);
                },
                menuItemList: function() {
                  var t = this;
                  setTimeout(function() {
                    var e = t;
                    e.calculateHeigh();
                  }, 20);
                },
                diff: function(t) {
                  var e = this,
                    i = e.titleHeight,
                    n = t > 0 && t < i ? t - i : 0;
                  if (e.fixedTop !== n) {
                    e.fixedTop = n;
                    var a = this.$refs.fixeTop;
                    a.style.transform = "translate3d(0,".concat(n, "px,0)");
                  }
                }
              }
            })
          ],
          R
        ));
      var P = R,
        A = P,
        G = (i("2960"), Object(w["a"])(A, n, a, !1, null, "e182fa18", null));
      e["default"] = G.exports;
    },
    2960: function(t, e, i) {
      "use strict";
      var n = i("5234"),
        a = i.n(n);
      a.a;
    },
    5234: function(t, e, i) {},
    9835: function(t, e, i) {
      "use strict";
      var n = i("efa3"),
        a = i.n(n);
      a.a;
    },
    c740: function(t, e, i) {
      "use strict";
      var n = i("23e7"),
        a = i("b727").findIndex,
        r = i("44d2"),
        s = "findIndex",
        c = !0;
      s in [] &&
        Array(1)[s](function() {
          c = !1;
        }),
        n(
          { target: "Array", proto: !0, forced: c },
          {
            findIndex: function(t) {
              return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
          }
        ),
        r(s);
    },
    d58f: function(t, e, i) {
      var n = i("1c0b"),
        a = i("7b0b"),
        r = i("44ad"),
        s = i("50c4"),
        c = function(t) {
          return function(e, i, c, o) {
            n(i);
            var u = a(e),
              l = r(u),
              h = s(u.length),
              f = t ? h - 1 : 0,
              d = t ? -1 : 1;
            if (c < 2) {
              while (1) {
                if (f in l) {
                  (o = l[f]), (f += d);
                  break;
                }
                if (((f += d), t ? f < 0 : h <= f)) {
                  throw TypeError(
                    "Reduce of empty array with no initial value"
                  );
                }
              }
            }
            for (; t ? f >= 0 : h > f; f += d) {
              f in l && (o = i(o, l[f], f, u));
            }
            return o;
          };
        };
      t.exports = { left: c(!1), right: c(!0) };
    },
    efa3: function(t, e, i) {}
  }
]);
//# sourceMappingURL=mealMenu.ca531377.js.map
