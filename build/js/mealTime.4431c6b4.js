(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["mealTime"],
  {
    "3e3d": function(e, t, i) {
      "use strict";
      var a = i("993c"),
        n = i.n(a);
      n.a;
    },
    "993c": function(e, t, i) {},
    c711: function(e, t, i) {
      "use strict";
      i.r(t);
      var a = function() {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("div", { staticClass: "mealTime" }, [
            i("div", { staticClass: "order_time" }, [
              e._m(0),
              i("div", { staticClass: "choice_time" }, [
                i("ul", [
                  i(
                    "li",
                    {
                      class: "0" === e.dayMode ? "choice_active" : "",
                      on: {
                        click: function(t) {
                          return e.choiceDay("0");
                        }
                      }
                    },
                    [e._v("今天")]
                  ),
                  i(
                    "li",
                    {
                      class: "1" === e.dayMode ? "choice_active" : "",
                      on: {
                        click: function(t) {
                          return e.choiceDay("1");
                        }
                      }
                    },
                    [e._v("明天")]
                  ),
                  i(
                    "li",
                    {
                      class: "2" === e.dayMode ? "choice_active" : "",
                      on: {
                        click: function(t) {
                          return e.choiceDay("2");
                        }
                      }
                    },
                    [e._v("后天")]
                  ),
                  i(
                    "li",
                    {
                      class: "3" === e.dayMode ? "choice_active" : "",
                      on: {
                        click: function(t) {
                          return e.choiceDay("3");
                        }
                      }
                    },
                    [e._v("更多时间")]
                  )
                ]),
                i("div", { staticClass: "times" }, [e._v(e._s(e.day))])
              ])
            ]),
            i("div", { staticClass: "order_food" }, [
              e._m(1),
              i("div", { staticClass: "choice_food" }, [
                i("ul", [
                  i(
                    "li",
                    {
                      class: "0" === e.meal ? "choice_actives" : "",
                      on: {
                        click: function(t) {
                          return e.choiceMeal("0");
                        }
                      }
                    },
                    [i("span", [e._v("早餐")])]
                  ),
                  i(
                    "li",
                    {
                      class: "1" === e.meal ? "choice_actives" : "",
                      on: {
                        click: function(t) {
                          return e.choiceMeal("1");
                        }
                      }
                    },
                    [i("span", [e._v("午餐")])]
                  ),
                  i(
                    "li",
                    {
                      class: "2" === e.meal ? "choice_actives" : "",
                      on: {
                        click: function(t) {
                          return e.choiceMeal("2");
                        }
                      }
                    },
                    [i("span", [e._v("晚餐")])]
                  )
                ])
              ])
            ]),
            i("div", { staticClass: "time_sumb" }, [
              i(
                "a",
                {
                  staticClass: "weui-btn weui-btn_primary",
                  on: {
                    click: function(t) {
                      return e.submit();
                    }
                  }
                },
                [e._v("下一步 选择菜式")]
              )
            ])
          ]);
        },
        n = [
          function() {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "time_tit" }, [
              i("i", { staticClass: "icons icon_time" }),
              i("h5", [e._v("时间")])
            ]);
          },
          function() {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "time_tit" }, [
              i("i", { staticClass: "icons icon_food" }),
              i("h5", [e._v("餐次")])
            ]);
          }
        ],
        c = (i("d81d"), i("0d03"), i("96cf"), i("89ba")),
        s = i("9f12"),
        r = i("53fe"),
        o = i("8b83"),
        u = i("c65a"),
        l = i("9aa6"),
        h = i("c03e"),
        f = i("9ab4"),
        m = i("2b0e"),
        d = i("2fe1"),
        v = i("4bb5"),
        y = i("e85b"),
        b = i("6c41"),
        w = m["a"].extend({ components: {} }),
        _ = (function(e) {
          function t(e) {
            var i;
            return (
              Object(s["a"])(this, t),
              (i = Object(o["a"])(this, Object(u["a"])(t).call(this, e))),
              (i.dayMode = "0"),
              (i.day = Object(y["c"])(new Date())),
              (i.initTime = new Date()),
              (i.dateArr = []),
              (i.meal = ""),
              Object(y["a"])(function() {
                window["thisMealTime"] = Object(l["a"])(i);
              }),
              i
            );
          }
          return (
            Object(h["a"])(t, e),
            Object(r["a"])(t, [
              {
                key: "choiceDay",
                value: (function() {
                  var e = Object(c["a"])(
                    regeneratorRuntime.mark(function e(t) {
                      var i, a, n;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          while (1) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                (this.dayMode = t),
                                  (e.t0 = t),
                                  (e.next =
                                    "0" === e.t0 ? 4 : "3" === e.t0 ? 8 : 10);
                                break;
                              case 4:
                                return (e.next = 6), this.getSysDate();
                              case 6:
                                return (
                                  (this.day = e.sent), e.abrupt("break", 14)
                                );
                              case 8:
                                return this.showPicker(), e.abrupt("break", 14);
                              case 10:
                                (i = 864e5),
                                  (a = this.initTime.getTime()),
                                  (n = new Date(a + +t * i)),
                                  (this.day = Object(y["c"])(n));
                              case 14:
                                this.meal = this.getMeal();
                              case 15:
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
                  function t(t) {
                    return e.apply(this, arguments);
                  }
                  return t;
                })()
              },
              {
                key: "choiceMeal",
                value: function(e) {
                  this.meal = e;
                }
              },
              {
                key: "initData",
                value: (function() {
                  var e = Object(c["a"])(
                    regeneratorRuntime.mark(function e() {
                      var t = this;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          while (1) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this.dateArr = [3, 4, 5, 6].map(function(e) {
                                    var i = 864e5,
                                      a = new Date(t.day).getTime(),
                                      n = new Date(a + e * i);
                                    return {
                                      label: Object(y["d"])(n),
                                      value: Object(y["c"])(n)
                                    };
                                  })),
                                  (e.next = 3),
                                  this.getSysDate()
                                );
                              case 3:
                                (this.day = e.sent),
                                  (this.meal = this.getMeal());
                              case 5:
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
                key: "getMeal",
                value: function() {
                  switch (this.dayMode) {
                    case "0":
                      var e = this.initTime,
                        t = e.getHours();
                      return t < 7 ? "0" : t < 11 ? "1" : t < 17 ? "2" : "";
                    default:
                      return "0";
                  }
                }
              },
              {
                key: "getSysDate",
                value: (function() {
                  var e = Object(c["a"])(
                    regeneratorRuntime.mark(function e() {
                      var t;
                      return regeneratorRuntime.wrap(
                        function(e) {
                          while (1) {
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  Object(b["a"])("sysDate").toPromise()
                                );
                              case 2:
                                return (
                                  (t = e.sent),
                                  (this.initTime = new Date(t.date)),
                                  e.abrupt(
                                    "return",
                                    Object(y["c"])(new Date(t.date))
                                  )
                                );
                              case 5:
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
                key: "showPicker",
                value: function() {
                  var e = this;
                  window.weui.picker(this.dateArr, {
                    onConfirm: function(t) {
                      e.day = t[0].value;
                    },
                    onClose: function() {
                      var t = e.initTime.getDay(),
                        i = new Date(e.day).getDay();
                      i - t <= 2 && e.choiceDay(String(i - t));
                    },
                    title: "更多日期"
                  });
                }
              },
              {
                key: "submit",
                value: function() {
                  if (this.day) {
                    if (this.meal) {
                      if ("0" === this.dayMode) {
                        var e = this.initTime,
                          t = e.getHours();
                        switch (this.meal) {
                          case "0":
                            if (!(t < 7))
                              {return void this.confirmRef.show({
                                title: "提示",
                                msg: "早餐的订餐时段在7点以前",
                                isShowCancel: !1
                              });}
                            break;
                          case "1":
                            if (!(t < 11))
                              {return void this.confirmRef.show({
                                title: "提示",
                                msg: "午餐的订餐时段在11点以前",
                                isShowCancel: !1
                              });}
                          case "2":
                            if (!(t < 17))
                              {return void this.confirmRef.show({
                                title: "提示",
                                msg: "晚餐的订餐时段在17点以前",
                                isShowCancel: !1
                              });}
                        }
                      }
                      this.saveMealInfo({ day: this.day, mealType: this.meal }),
                        this.$router.push("/menuContent/timeSelect/mealMenu");
                    } else
                      {this.confirmRef.show({
                        title: "提示",
                        msg: "请选择对应的餐次",
                        isShowCancel: !1
                      });}}
                  } else {
                    this.confirmRef.show({
                      title: "提示",
                      msg: "请选择就餐日期",
                      isShowCancel: !1
                    });
                  }
                }
              },
              {
                key: "mounted",
                value: function() {
                  this.initData();
                }
              }
            ]),
            t
          );
        })(w);
      f["a"]([Object(v["a"])("confirmRef")], _.prototype, "confirmRef", void 0),
        f["a"](
          [Object(v["b"])("SAVE_MEAL_INFO")],
          _.prototype,
          "saveMealInfo",
          void 0
        ),
        (_ = f["a"]([Object(d["b"])({ watch: {} })], _));
      var p = _,
        k = p,
        g = (i("3e3d"), i("2877")),
        D = Object(g["a"])(k, a, n, !1, null, "563e514b", null);
      t["default"] = D.exports;
    }
  }
]);
//# sourceMappingURL=mealTime.4431c6b4.js.map
