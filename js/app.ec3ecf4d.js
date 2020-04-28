(function(e) {
  function n(n) {
    for (
      var a, s, i = n[0], l = n[1], c = n[2], _ = 0, d = [];
      _ < i.length;
      _++
    )
      (s = i[_]),
        Object.prototype.hasOwnProperty.call(o, s) && o[s] && d.push(o[s][0]),
        (o[s] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    u && u(n);
    while (d.length) d.shift()();
    return r.push.apply(r, c || []), t();
  }
  function t() {
    for (var e, n = 0; n < r.length; n++) {
      for (var t = r[n], a = !0, i = 1; i < t.length; i++) {
        var l = t[i];
        0 !== o[l] && (a = !1);
      }
      a && (r.splice(n--, 1), (e = s((s.s = t[0]))));
    }
    return e;
  }
  var a = {},
    o = { app: 0 },
    r = [];
  function s(n) {
    if (a[n]) return a[n].exports;
    var t = (a[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, s), (t.l = !0), t.exports;
  }
  (s.m = e),
    (s.c = a),
    (s.d = function(e, n, t) {
      s.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (s.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function(e, n) {
      if ((1 & n && (e = s(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (s.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var a in e)
          s.d(
            t,
            a,
            function(n) {
              return e[n];
            }.bind(null, a)
          );
      return t;
    }),
    (s.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return s.d(n, "a", n), n;
    }),
    (s.o = function(e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (s.p = "/ScreenIndiaV2/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = i.push.bind(i);
  (i.push = n), (i = i.slice());
  for (var c = 0; c < i.length; c++) n(i[c]);
  var u = l;
  r.push([0, "chunk-vendors"]), t();
})({
  0: function(e, n, t) {
    e.exports = t("56d7");
  },
  "0f9f": function(e, n, t) {
    e.exports = {
      "o-container": "aboutUs_o-container_1jQcp",
      oContainer: "aboutUs_oContainer_2Xr7w",
      "o-preheader": "aboutUs_o-preheader_3Zk0r",
      oPreheader: "aboutUs_oPreheader_1HpQT",
      oSliceSpacing: "aboutUs_oSliceSpacing_3v5DP",
      __hasInner: "aboutUs___hasInner_YYF-N",
      __noBottomLast: "aboutUs___noBottomLast_6ps6g",
      __noTopFirst: "aboutUs___noTopFirst_1ONxq",
      fullHeight: "aboutUs_fullHeight_3oTh9",
      para: "aboutUs_para_y3RTj",
      smallText: "aboutUs_smallText_YAMEA",
      splitScreen: "aboutUs_splitScreen_1G9Q2",
      content: "aboutUs_content_1jFcn",
      imageContent: "aboutUs_imageContent_2XHu2",
      detail: "aboutUs_detail_1i9-F",
      description: "aboutUs_description_3IL5C",
      dummmyDiv: "aboutUs_dummmyDiv_2nLeq",
      imageContainer: "aboutUs_imageContainer_32iw5",
      mainContainer: "aboutUs_mainContainer_1orht"
    };
  },
  "495c": function(e, n, t) {
    "use strict";
    var a = t("c4ce"),
      o = t.n(a);
    n["default"] = o.a;
  },
  "56d7": function(e, n, t) {
    "use strict";
    t.r(n);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var a = t("2b0e"),
      o = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t(
          "div",
          { attrs: { id: "app" } },
          [
            t("Landing"),
            t("Products"),
            t("AboutUs"),
            t("Clients"),
            t("ContactUs"),
            t("HelloWorld", { attrs: { msg: "Welcome to Your Vue.js App" } })
          ],
          1
        );
      },
      r = [],
      s = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t("div", { staticClass: "hello o-container oSliceSpacing" }, [
          t("h1", [e._v(e._s(e.msg))])
        ]);
      },
      i = [],
      l = { name: "HelloWorld", props: { msg: String } },
      c = l,
      u = (t("79d7"), t("2877")),
      _ = Object(u["a"])(c, s, i, !1, null, "2d46dbd3", null),
      d = _.exports,
      p = function() {
        var e = this,
          n = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      f = [
        function() {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n;
          return t("div", { staticClass: "o-container oSliceSpacing" }, [
            t("p", { staticClass: "o-preheader" }, [e._v("Products")])
          ]);
        }
      ],
      v = { name: "Products" },
      m = v,
      h = Object(u["a"])(m, p, f, !1, null, null, null),
      g = h.exports,
      b = function() {
        var e = this,
          n = e.$createElement,
          a = e._self._c || n;
        return a("div", { class: e.$style.mainContainer }, [
          a("div", { staticClass: "oSliceSpacing o-container" }, [
            a("div", { class: e.$style.splitScreen }, [
              a("div", { class: e.$style.content }, [e._m(0)]),
              a("div", { class: e.$style.imageContent }, [
                a("div", { class: e.$style.dummmyDiv }),
                a("div", { class: e.$style.imageContainer }, [
                  a("img", { attrs: { alt: "Vue logo", src: t("b5e0") } })
                ])
              ])
            ]),
            a("div", { class: e.$style.description }, [
              e._v(
                " We are proud of our signs, and place great importance on working closely with the end user, in partnership with architects and designers, or through building contractors and property agents.Our document only gives a modest indication of the vast range of signing schemes undertaken by Screen India. In this regard we are able to take carry out both large and small projects using our range of modular signing systems and will be happy to work with you to bring your plans to fruition. "
              )
            ])
          ])
        ]);
      },
      y = [
        function() {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n;
          return t("div", [
            t("h1", [e._v("About Us")]),
            t("div", { staticClass: "para" }, [
              e._v(
                " For the last two decades, Screen India has earned its reputation for its design lead solution and providing high quality signage on time. "
              )
            ])
          ]);
        }
      ],
      C = { name: "About Us" },
      B = C,
      S = t("e1a1");
    function x(e) {
      this["$style"] = S["default"].locals || S["default"];
    }
    var $ = Object(u["a"])(B, b, y, !1, x, null, null),
      w = $.exports,
      T = function() {
        var e = this,
          n = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      U = [
        function() {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n;
          return t("div", { staticClass: "o-container oSliceSpacing" }, [
            t("h1", [e._v("Clients")])
          ]);
        }
      ],
      I = { name: "Clients" },
      O = I,
      j = Object(u["a"])(O, T, U, !1, null, null, null),
      P = j.exports,
      F = function() {
        var e = this,
          n = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      H = [
        function() {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n;
          return t("div", { staticClass: "o-container oSliceSpacing" }, [
            t("h1", [e._v("Contact Us")])
          ]);
        }
      ],
      L = { name: "Constact Us" },
      k = L,
      E = Object(u["a"])(k, F, H, !1, null, null, null),
      N = E.exports,
      A = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t(
          "section",
          [
            t("NavBar"),
            t("div", { staticClass: "o-container" }, [
              t("div", { class: e.$style.fullHeight }, [
                t("div", { class: e.$style.heroFlex }, [
                  t("div", { class: e.$style.heroText }, [
                    t("div", { class: e.$style.heroContent }, [
                      t("h1", [e._v("Welcome To Screen India")]),
                      t("div", { staticClass: "para" }, [
                        e._v(" Secondary Text to DEscribe SOme Data in here ")
                      ]),
                      t("span", { staticClass: "smallText" }, [
                        e._v("Caption Text Smaller Text")
                      ])
                    ])
                  ]),
                  t("div", { class: e.$style.heroImage })
                ])
              ])
            ])
          ],
          1
        );
      },
      q = [],
      V = function() {
        var e,
          n,
          a = this,
          o = a.$createElement,
          r = a._self._c || o;
        return r(
          "section",
          { class: a.$style.navSection },
          [
            r(
              "nav",
              {
                class: [
                  a.$style.mobNov,
                  ((e = {}), (e[a.$style.openNav] = a.open), e)
                ],
                attrs: { role: "navigation" }
              },
              [
                r(
                  "div",
                  {
                    class: [
                      a.$style.menu,
                      a.$style.btn2,
                      ((n = {}), (n[a.$style.open] = a.open), n)
                    ],
                    attrs: { "data-menu": "2" },
                    on: {
                      click: function(e) {
                        return a.toggle();
                      }
                    }
                  },
                  [r("div", { class: a.$style.icon })]
                ),
                a.open
                  ? r(
                      "ul",
                      { class: a.$style.menuSection },
                      a._l(a.menus, function(e) {
                        return r("li", { key: e, class: a.$style.menus }, [
                          r(
                            "a",
                            { class: a.$style.menuItem, attrs: { href: "#" } },
                            [a._v(a._s(e))]
                          )
                        ]);
                      }),
                      0
                    )
                  : a._e()
              ]
            ),
            r("transition", { attrs: { name: "fade" } }, [
              r("header", { class: a.$style.navHolder }, [
                r("div", [
                  r("img", {
                    staticStyle: { "max-width": "150px" },
                    attrs: { alt: "Vue logo", src: t("cf05") }
                  })
                ]),
                r("nav", { class: a.$style.navContainer }, [
                  r("div", [
                    r(
                      "ul",
                      { class: a.$style.menuSection },
                      a._l(a.menus, function(e) {
                        return r("li", { key: e, class: a.$style.menus }, [
                          r(
                            "a",
                            { class: a.$style.menuItem, attrs: { href: "#" } },
                            [a._v(a._s(e))]
                          )
                        ]);
                      }),
                      0
                    )
                  ])
                ])
              ])
            ])
          ],
          1
        );
      },
      J = [],
      M = {
        name: "NavBar",
        data: function() {
          return {
            menus: ["Our Products", "About", "Clients", "Contact Us"],
            open: !1
          };
        },
        methods: {
          toggle: function() {
            this.open = !this.open;
          }
        }
      },
      D = M,
      Y = t("78fe");
    function R(e) {
      this["$style"] = Y["default"].locals || Y["default"];
    }
    var W = Object(u["a"])(D, V, J, !1, R, null, null),
      Z = W.exports,
      G = { name: "Landing", components: { NavBar: Z } },
      Q = G,
      z = t("495c");
    function K(e) {
      this["$style"] = z["default"].locals || z["default"];
    }
    var X = Object(u["a"])(Q, A, q, !1, K, null, null),
      ee = X.exports,
      ne = {
        name: "App",
        components: {
          HelloWorld: d,
          Products: g,
          AboutUs: w,
          Clients: P,
          ContactUs: N,
          Landing: ee
        }
      },
      te = ne,
      ae = (t("5c0b"), Object(u["a"])(te, o, r, !1, null, null, null)),
      oe = ae.exports,
      re = t("9483");
    Object(re["a"])("".concat("/ScreenIndiaV2/", "service-worker.js"), {
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
    t("4de4"), t("b0c0"), t("b64b");
    var se = function() {
        var e = this,
          n = e.$createElement,
          t = e._self._c || n;
        return t(
          "div",
          { class: e.$style.buttonContainer },
          [e._t("default"), e._v(" Hi ")],
          2
        );
      },
      ie = [],
      le = { name: "CButton" },
      ce = le,
      ue = t("f18d");
    function _e(e) {
      this["$style"] = ue["default"].locals || ue["default"];
    }
    var de = Object(u["a"])(ce, se, ie, !1, _e, null, null),
      pe = de.exports,
      fe = { CButton: pe },
      ve = {
        install: function(e) {
          Object.keys(fe).filter(function(n) {
            e.component(fe[n].name, fe[n]);
          });
        }
      },
      me = ve;
    (a["a"].config.productionTip = !1),
      a["a"].use(me),
      new a["a"]({
        render: function(e) {
          return e(oe);
        }
      }).$mount("#app");
  },
  "5c0b": function(e, n, t) {
    "use strict";
    var a = t("9c0c"),
      o = t.n(a);
    o.a;
  },
  "626e": function(e, n, t) {
    e.exports = {
      "o-container": "CButton_o-container_3ILCt",
      oContainer: "CButton_oContainer_3cD6a",
      "o-preheader": "CButton_o-preheader_AkKmM",
      oPreheader: "CButton_oPreheader_V1OJM",
      oSliceSpacing: "CButton_oSliceSpacing_3p10v",
      __hasInner: "CButton___hasInner_ecq_5",
      __noBottomLast: "CButton___noBottomLast_2AI1r",
      __noTopFirst: "CButton___noTopFirst_JxIYH",
      fullHeight: "CButton_fullHeight_1UBsO",
      para: "CButton_para_n0p3-",
      smallText: "CButton_smallText_2d7Nq",
      buttonContainer: "CButton_buttonContainer_3TI14"
    };
  },
  "78fe": function(e, n, t) {
    "use strict";
    var a = t("c830"),
      o = t.n(a);
    n["default"] = o.a;
  },
  "79d7": function(e, n, t) {
    "use strict";
    var a = t("8881"),
      o = t.n(a);
    o.a;
  },
  8881: function(e, n, t) {},
  "9c0c": function(e, n, t) {},
  b5e0: function(e, n, t) {
    e.exports = t.p + "img/hero.ee1507b6.png";
  },
  c4ce: function(e, n, t) {
    e.exports = {
      "o-container": "landing_o-container_1TQmv",
      oContainer: "landing_oContainer_2VV6R",
      "o-preheader": "landing_o-preheader_1qm3Z",
      oPreheader: "landing_oPreheader_31Cp0",
      oSliceSpacing: "landing_oSliceSpacing_2UeLq",
      __hasInner: "landing___hasInner_1UJGn",
      __noBottomLast: "landing___noBottomLast_Y3SbD",
      __noTopFirst: "landing___noTopFirst_1JCwv",
      fullHeight: "landing_fullHeight_SqJeE",
      para: "landing_para_2ns6J",
      smallText: "landing_smallText_Cyw7L",
      heroText: "landing_heroText_2GPBn",
      heroImage: "landing_heroImage_2cmM9",
      heroFlex: "landing_heroFlex_3A8vy",
      heroContent: "landing_heroContent_2ZtuS"
    };
  },
  c830: function(e, n, t) {
    e.exports = {
      "o-container": "navBar_o-container_1kgFo",
      oContainer: "navBar_oContainer_1qAbw",
      "o-preheader": "navBar_o-preheader_3LK4m",
      oPreheader: "navBar_oPreheader_1LxL4",
      oSliceSpacing: "navBar_oSliceSpacing_35Gjx",
      __hasInner: "navBar___hasInner_SZRv1",
      __noBottomLast: "navBar___noBottomLast_39v0n",
      __noTopFirst: "navBar___noTopFirst_3ERMv",
      fullHeight: "navBar_fullHeight_3FL2e",
      para: "navBar_para_1zpBc",
      smallText: "navBar_smallText_h_NQV",
      navContainer: "navBar_navContainer_xTmZl",
      menuSection: "navBar_menuSection_3YdBH",
      menus: "navBar_menus_2BIZo",
      navHolder: "navBar_navHolder_1xSfa",
      menuItem: "navBar_menuItem_6zIz_",
      btn2: "navBar_btn2_11H83",
      icon: "navBar_icon_1Pxi_",
      open: "navBar_open_KFN0v",
      mobNov: "navBar_mobNov_2jt7w",
      openNav: "navBar_openNav_fOG9L",
      navSection: "navBar_navSection_2d9Fa",
      "fade-enter-active": "navBar_fade-enter-active_3RH4n",
      "fade-leave-active": "navBar_fade-leave-active_yRXVq",
      "fade-enter": "navBar_fade-enter_4UrVI",
      "fade-leave-to": "navBar_fade-leave-to_3J7Fe"
    };
  },
  cf05: function(e, n, t) {
    e.exports = t.p + "img/logo.99ccce59.png";
  },
  e1a1: function(e, n, t) {
    "use strict";
    var a = t("0f9f"),
      o = t.n(a);
    n["default"] = o.a;
  },
  f18d: function(e, n, t) {
    "use strict";
    var a = t("626e"),
      o = t.n(a);
    n["default"] = o.a;
  }
});
//# sourceMappingURL=app.ec3ecf4d.js.map
