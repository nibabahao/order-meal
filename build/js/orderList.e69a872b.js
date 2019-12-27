(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["orderList"],
  {
    "719c": function(t, e, r) {
      "use strict";
      var a = r("8d3a"),
        i = r.n(a);
      i.a;
    },
    "8d3a": function(t, e, r) {},
    "9d74": function(t, e, r) {},
    b065: function(t, e, r) {
      "use strict";
      r.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return t.orderDetail
            ? r("div", { staticClass: "orderDetail" }, [
                r("div", { staticClass: "suc_tit" }, [t._v("订单完成")]),
                r("div", { staticClass: "pay_add" }, [
                  r("dl", [
                    r("dt", [t._v("送餐位置")]),
                    r("dd", [
                      r("p", [
                        t._v(
                          " " +
                            t._s(t.orderDetail.fullName) +
                            " " +
                            t._s(t.orderDetail.tel)
                        ),
                        r("br"),
                        t._v(t._s(t.orderDetail.location))
                      ])
                    ])
                  ]),
                  r("dl", [
                    r("dt", [t._v("用餐时间")]),
                    r("dd", [
                      r("p", [
                        t._v(
                          t._s(t.orderDetail.day) +
                            " " +
                            t._s(
                              ["早餐", "午餐", "晚餐"][t.orderDetail.mealType]
                            )
                        )
                      ])
                    ])
                  ]),
                  r("div", { staticClass: "pay_list" }, [
                    r(
                      "ul",
                      t._l(t.orderDetail.cartData, function(e) {
                        return r("li", { key: e.tid + e.fid }, [
                          r("b", [t._v(t._s(e.name))]),
                          r("em", [t._v("x" + t._s(e.quantity))]),
                          r("span", [t._v("￥ " + t._s(e.price))])
                        ]);
                      }),
                      0
                    ),
                    r("div", { staticClass: "pay_sum" }, [
                      r("b", [t._v("合计")]),
                      r("span", [t._v("￥ " + t._s(t.orderDetail.amount))])
                    ])
                  ])
                ]),
                r(
                  "div",
                  { staticClass: "time_sumb" },
                  [
                    r(
                      "router-link",
                      {
                        staticClass: "weui-btn weui-btn_primary",
                        attrs: { tag: "a", to: "/menuContent/orderMap" }
                      },
                      [t._v("返回订单列表")]
                    )
                  ],
                  1
                )
              ])
            : t._e();
        },
        i = [],
        n = (r("96cf"), r("89ba")),
        s = r("9f12"),
        o = r("53fe"),
        c = r("8b83"),
        d = r("c65a"),
        u = r("c03e"),
        l = r("9ab4"),
        f = r("2b0e"),
        b = r("2fe1"),
        v = r("4bb5"),
        _ = r("6c41"),
        p = f["a"].extend({ components: {} }),
        m = (function(t) {
          function e(t) {
            var r;
            return (
              Object(s["a"])(this, e),
              (r = Object(c["a"])(this, Object(d["a"])(e).call(this, t))),
              (r.orderDetail = null),
              r
            );
          }
          return (
            Object(u["a"])(e, t),
            Object(o["a"])(e, [
              {
                key: "created",
                value: (function() {
                  var t = Object(n["a"])(
                    regeneratorRuntime.mark(function t() {
                      var e, r;
                      return regeneratorRuntime.wrap(
                        function(t) {
                          while (1) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e = this.$route.params.orderNo),
                                  this.setloading(!0),
                                  (t.next = 4),
                                  Object(_["a"])("getOrder", {
                                    orderNo: e
                                  }).toPromise()
                                );
                              case 4:
                                (r = t.sent),
                                  this.setloading(!1),
                                  r.code &&
                                    this.confirmRef.show({
                                      title: "获取订单信息失败",
                                      msg: r.msg,
                                      isShowCancel: !1
                                    }),
                                  (this.orderDetail = r.data);
                              case 8:
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
              }
            ]),
            e
          );
        })(p);
      l["a"](
        [Object(v["b"])("SET_LOADING")],
        m.prototype,
        "setloading",
        void 0
      ),
        l["a"](
          [Object(v["a"])("confirmRef")],
          m.prototype,
          "confirmRef",
          void 0
        ),
        (m = l["a"]([Object(b["b"])({ watch: {} })], m));
      var h = m,
        O = h,
        w = (r("bfd0"), r("2877")),
        j = Object(w["a"])(O, a, i, !1, null, "d686a29e", null);
      e["default"] = j.exports;
    },
    bfd0: function(t, e, r) {
      "use strict";
      var a = r("9d74"),
        i = r.n(a);
      i.a;
    },
    cb84: function(t, e, r) {
      "use strict";
      r.r(e);
      var a = function() {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            { staticClass: "orderList" },
            [
              t._l(t.orderList, function(e) {
                return t.orderList && t.orderList.length
                  ? r("div", { key: e.orderNo, staticClass: "list_li" }, [
                      r(
                        "dl",
                        {
                          on: {
                            click: function(r) {
                              return t.toOrderDetail(e.orderNo);
                            }
                          }
                        },
                        [
                          r("dt", [
                            r("p", [
                              r("b", [t._v("用餐时间")]),
                              r("span", [
                                t._v(
                                  t._s(e.day) +
                                    " " +
                                    t._s(["早餐", "午餐", "晚餐"][e.mealType])
                                )
                              ])
                            ]),
                            r("p", [
                              r("b", [t._v("总价：")]),
                              r("span", [t._v("￥ " + t._s(e.amount))])
                            ]),
                            r(
                              "em",
                              { class: "1" === e.status ? "complete" : "" },
                              [t._v(t._s(["未送餐", "已送餐"][e.status]))]
                            )
                          ]),
                          r("dd", [t._v("下单时间：" + t._s(e.orderTime))])
                        ]
                      )
                    ])
                  : t._e();
              }),
              t.orderList && t.orderList.length
                ? t._e()
                : r(
                    "div",
                    { staticClass: "weui-loadmore weui-loadmore_line" },
                    [
                      r("span", { staticClass: "weui-loadmore__tips" }, [
                        t._v("暂无订单")
                      ])
                    ]
                  )
            ],
            2
          );
        },
        i = [],
        n = (r("4160"), r("0d03"), r("159b"), r("96cf"), r("89ba")),
        s = r("9f12"),
        o = r("53fe"),
        c = r("8b83"),
        d = r("c65a"),
        u = r("9aa6"),
        l = r("c03e"),
        f = r("9ab4"),
        b = r("2b0e"),
        v = r("2fe1"),
        _ = r("4bb5"),
        p = r("6c41"),
        m = r("e85b"),
        h = b["a"].extend({ components: {} }),
        O = (function(t) {
          function e(t) {
            var r;
            return (
              Object(s["a"])(this, e),
              (r = Object(c["a"])(this, Object(d["a"])(e).call(this, t))),
              (r.orderList = []),
              (window["orderList"] = Object(u["a"])(r)),
              r
            );
          }
          return (
            Object(l["a"])(e, t),
            Object(o["a"])(e, [
              {
                key: "created",
                value: (function() {
                  var t = Object(n["a"])(
                    regeneratorRuntime.mark(function t() {
                      var e,
                        r,
                        a = this;
                      return regeneratorRuntime.wrap(
                        function(t) {
                          while (1) {
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e = this.sickInfo.sickNo),
                                  this.setloading(!0),
                                  (t.next = 4),
                                  Object(p["a"])("getOrderList", {
                                    sickNo: e
                                  }).toPromise()
                                );
                              case 4:
                                if (
                                  ((r = t.sent), this.setloading(!1), !r.code)
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                return (
                                  this.confirmRef.show({
                                    title: "订单列表",
                                    msg: r.msg,
                                    isShowCancel: !1
                                  }),
                                  t.abrupt("return")
                                );
                              case 9:
                                r.data.forEach(function(t) {
                                  return (t.orderTime = a.formaterDate(
                                    t.orderTime
                                  ));
                                }),
                                  (this.orderList = r.data);
                              case 11:
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
                key: "formaterDate",
                value: function(t) {
                  var e = new Date(+t),
                    r = Object(m["c"])(e),
                    a = function(t) {
                      return t > 0 ? t : "0".concat(t);
                    },
                    i = a(e.getHours()),
                    n = a(e.getMinutes());
                  return (r = r + " " + i + ":" + n), r;
                }
              },
              {
                key: "toOrderDetail",
                value: function(t) {
                  this.$router.push(
                    "/menuContent/orderMap/orderDetail/".concat(t)
                  );
                }
              }
            ]),
            e
          );
        })(h);
      f["a"]([Object(_["a"])("sickInfo")], O.prototype, "sickInfo", void 0),
        f["a"](
          [Object(_["b"])("SET_LOADING")],
          O.prototype,
          "setloading",
          void 0
        ),
        f["a"](
          [Object(_["a"])("confirmRef")],
          O.prototype,
          "confirmRef",
          void 0
        ),
        (O = f["a"]([Object(v["b"])({ watch: {} })], O));
      var w = O,
        j = w,
        y = (r("719c"), r("2877")),
        g = Object(y["a"])(j, a, i, !1, null, "18970e21", null);
      e["default"] = g.exports;
    }
  }
]);
//# sourceMappingURL=orderList.e69a872b.js.map
