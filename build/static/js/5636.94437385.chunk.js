"use strict";
(self.webpackChunkmatx_react = self.webpackChunkmatx_react || []).push([
  [5636],
  {
    8493: (e, a, n) => {
      n.r(a), n.d(a, { default: () => k });
      var s = n(5043),
        t = n(3404),
        i = n(9650),
        r = n(3336),
        o = n(1806),
        l = n(4882),
        c = n(8076),
        d = n(2420),
        h = n(3460),
        m = n(8911),
        p = n(3691),
        u = n(4982),
        x = n(6946),
        A = n(5865),
        g = n(2788),
        j = n(2555),
        v = n(7254),
        C = n(6213),
        y = n(579);
      const f = {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        },
        k = () => {
          const [e, a] = (0, s.useState)([]),
            [n, k] = (0, s.useState)(1),
            [S, b] = (0, s.useState)(0),
            [w, T] = (0, s.useState)(!1),
            [_, V] = (0, s.useState)(null),
            [E, H] = (0, s.useState)({ name: "", commission: "" }),
            [W, D] = (0, s.useState)(!1),
            [F, P] = (0, s.useState)(""),
            [X, q] = (0, s.useState)("success"),
            z = async () => {
              try {
                const e = (
                  await C.A.get("https://api-neiko.site/api/roles", {
                    params: { page: n, limit: 10 },
                  })
                ).data;
                a(e.roles), b(e.totalPages);
              } catch (e) {
                console.error("Error fetching roles:", e);
              }
            };
          (0, s.useEffect)(() => {
            z();
          }, [n]);
          const B = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              V(e), H(e || { name: "", commission: "" }), T(!0);
            },
            G = () => {
              T(!1);
            },
            I = (e) => {
              H({ ...E, [e.target.name]: e.target.value });
            },
            J = () => {
              D(!1);
            };
          return (0, y.jsxs)(y.Fragment, {
            children: [
              (0, y.jsx)(t.A, {
                variant: "contained",
                color: "primary",
                onClick: () => B(),
                children: "Th\xeam vai tr\xf2",
              }),
              (0, y.jsx)(i.A, {
                component: r.A,
                children: (0, y.jsxs)(o.A, {
                  "aria-label": "simple table",
                  children: [
                    (0, y.jsx)(l.A, {
                      children: (0, y.jsxs)(c.A, {
                        children: [
                          (0, y.jsx)(d.A, {
                            align: "center",
                            children: "T\xean vai tr\xf2",
                          }),
                          (0, y.jsx)(d.A, {
                            align: "center",
                            children: "Commission",
                          }),
                          (0, y.jsx)(d.A, {
                            align: "center",
                            children: "H\xe0nh \u0111\u1ed9ng",
                          }),
                        ],
                      }),
                    }),
                    (0, y.jsx)(h.A, {
                      children: e.map((e) =>
                        (0, y.jsxs)(
                          c.A,
                          {
                            children: [
                              (0, y.jsx)(d.A, {
                                align: "center",
                                component: "th",
                                scope: "row",
                                children: e.name,
                              }),
                              (0, y.jsxs)(d.A, {
                                align: "center",
                                children: [e.commission, "%"],
                              }),
                              (0, y.jsxs)(d.A, {
                                align: "center",
                                children: [
                                  (0, y.jsx)(t.A, {
                                    color: "primary",
                                    onClick: () => B(e),
                                    children: "S\u1eeda",
                                  }),
                                  (0, y.jsx)(t.A, {
                                    color: "secondary",
                                    onClick: () =>
                                      (async (e) => {
                                        try {
                                          await C.A.delete(
                                            "https://api-neiko.site/api/roles/".concat(
                                              e
                                            )
                                          ),
                                            q("success"),
                                            P(
                                              "Vai tr\xf2 \u0111\xe3 \u0111\u01b0\u1ee3c x\xf3a"
                                            ),
                                            D(!0),
                                            z();
                                        } catch (s) {
                                          var a, n;
                                          q("error"),
                                            P(
                                              (null === (a = s.response) ||
                                              void 0 === a ||
                                              null === (n = a.data) ||
                                              void 0 === n
                                                ? void 0
                                                : n.message) ||
                                                "C\xf3 l\u1ed7i x\u1ea3y ra"
                                            ),
                                            D(!0);
                                        }
                                      })(e._id),
                                    children: "Xo\xe1",
                                  }),
                                ],
                              }),
                            ],
                          },
                          e._id
                        )
                      ),
                    }),
                  ],
                }),
              }),
              (0, y.jsx)(m.A, {
                sx: {
                  paddingTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                },
                spacing: 2,
                children: (0, y.jsx)(p.A, {
                  count: S,
                  page: n,
                  color: "primary",
                  onChange: (e, a) => {
                    k(a);
                  },
                }),
              }),
              (0, y.jsx)(u.A, {
                open: w,
                onClose: G,
                children: (0, y.jsxs)(x.A, {
                  sx: f,
                  children: [
                    (0, y.jsx)(A.A, {
                      variant: "h6",
                      component: "h2",
                      children: _
                        ? "S\u1eeda vai tr\xf2"
                        : "Th\xeam vai tr\xf2",
                    }),
                    (0, y.jsx)(g.A, {
                      fullWidth: !0,
                      margin: "normal",
                      label: "T\xean vai tr\xf2",
                      name: "name",
                      value: E.name,
                      onChange: I,
                    }),
                    (0, y.jsx)(g.A, {
                      fullWidth: !0,
                      margin: "normal",
                      label: "Commission",
                      name: "commission",
                      value: E.commission,
                      onChange: I,
                    }),
                    (0, y.jsx)(t.A, {
                      variant: "contained",
                      color: "primary",
                      onClick: async () => {
                        try {
                          _
                            ? await C.A.put(
                                "https://api-neiko.site/api/roles/".concat(
                                  _._id
                                ),
                                E
                              )
                            : await C.A.post(
                                "https://api-neiko.site/api/roles/create",
                                E
                              ),
                            q("success"),
                            P(
                              _
                                ? "Vai tr\xf2 \u0111\xe3 \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt"
                                : "Vai tr\xf2 \u0111\xe3 \u0111\u01b0\u1ee3c th\xeam"
                            ),
                            D(!0),
                            z(),
                            G();
                        } catch (n) {
                          var e, a;
                          q("error"),
                            P(
                              (null === (e = n.response) ||
                              void 0 === e ||
                              null === (a = e.data) ||
                              void 0 === a
                                ? void 0
                                : a.message) || "C\xf3 l\u1ed7i x\u1ea3y ra"
                            ),
                            D(!0);
                        }
                      },
                      sx: { mt: 2 },
                      children: _ ? "C\u1eadp nh\u1eadt" : "Th\xeam",
                    }),
                  ],
                }),
              }),
              (0, y.jsx)(j.A, {
                open: W,
                autoHideDuration: 6e3,
                onClose: J,
                children: (0, y.jsx)(v.A, {
                  onClose: J,
                  severity: X,
                  children: F,
                }),
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=5636.94437385.chunk.js.map
