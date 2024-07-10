"use strict";
(self.webpackChunkmatx_react = self.webpackChunkmatx_react || []).push([
  [7768],
  {
    7768: (e, t, a) => {
      a.r(t), a.d(t, { default: () => p });
      var n = a(5043),
        i = a(9252),
        s = a(5865),
        r = a(2788),
        o = a(6946),
        l = a(3404),
        c = a(1637),
        d = a(2555),
        m = a(7254),
        u = a(6213),
        h = a(579);
      const p = () => {
        const [e, t] = (0, n.useState)(""),
          [a, p] = (0, n.useState)(""),
          [x, g] = (0, n.useState)([
            { size: "", retailPrice: "", wholesalePrice: "" },
          ]),
          [b, A] = (0, n.useState)([""]),
          [v, f] = (0, n.useState)(null),
          [j, S] = (0, n.useState)(""),
          [C, k] = (0, n.useState)(!1),
          [y, w] = (0, n.useState)(!1),
          [W, G] = (0, n.useState)(""),
          [P, R] = (0, n.useState)("success"),
          M = (e, t) => {
            const { name: a, value: n } = t.target,
              i = x.map((t, i) => (i === e ? { ...t, [a]: n } : t));
            g(i);
          },
          T = () => {
            w(!1);
          };
        return (0, h.jsxs)(i.A, {
          children: [
            (0, h.jsx)(s.A, {
              variant: "h4",
              component: "h1",
              gutterBottom: !0,
              children: "Th\xeam s\u1ea3n ph\u1ea9m",
            }),
            (0, h.jsxs)("form", {
              onSubmit: async (n) => {
                n.preventDefault(), k(!0);
                const i = new FormData();
                i.append("name", e),
                  i.append("description", a),
                  i.append("sizes", JSON.stringify(x)),
                  i.append("colors", JSON.stringify(b)),
                  v && i.append("image", v);
                try {
                  const e = await u.A.post(
                    "https://api-neiko.site/api/products/create",
                    i,
                    { headers: { "Content-Type": "multipart/form-data" } }
                  );
                  R("success"),
                    G(e.data.message),
                    w(!0),
                    t(""),
                    p(""),
                    g([{ size: "", retailPrice: "", wholesalePrice: "" }]),
                    A([""]),
                    f(null),
                    S("");
                } catch (o) {
                  var s, r;
                  R("error"),
                    G(
                      (null === (s = o.response) ||
                      void 0 === s ||
                      null === (r = s.data) ||
                      void 0 === r
                        ? void 0
                        : r.message) ||
                        "C\xf3 l\u1ed7i x\u1ea3y ra khi t\u1ea1o s\u1ea3n ph\u1ea9m"
                    ),
                    w(!0);
                } finally {
                  k(!1);
                }
              },
              children: [
                (0, h.jsx)(r.A, {
                  label: "T\xean s\u1ea3n ph\u1ea9m",
                  fullWidth: !0,
                  margin: "normal",
                  value: e,
                  onChange: (e) => t(e.target.value),
                  required: !0,
                }),
                (0, h.jsx)(r.A, {
                  label: "M\xf4 t\u1ea3",
                  fullWidth: !0,
                  margin: "normal",
                  multiline: !0,
                  rows: 4,
                  value: a,
                  onChange: (e) => p(e.target.value),
                }),
                (0, h.jsx)(s.A, {
                  variant: "h6",
                  component: "h2",
                  gutterBottom: !0,
                  children: "K\xedch th\u01b0\u1edbc v\xe0 Gi\xe1",
                }),
                x.map((e, t) =>
                  (0, h.jsxs)(
                    o.A,
                    {
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      children: [
                        (0, h.jsx)(r.A, {
                          label: "K\xedch th\u01b0\u1edbc",
                          name: "size",
                          margin: "normal",
                          value: e.size,
                          onChange: (e) => M(t, e),
                          required: !0,
                        }),
                        (0, h.jsx)(r.A, {
                          label: "Gi\xe1 b\xe1n l\u1ebb",
                          name: "retailPrice",
                          margin: "normal",
                          value: e.retailPrice,
                          onChange: (e) => M(t, e),
                          required: !0,
                        }),
                        (0, h.jsx)(r.A, {
                          label: "Gi\xe1 b\xe1n s\u1ec9",
                          name: "wholesalePrice",
                          margin: "normal",
                          value: e.wholesalePrice,
                          onChange: (e) => M(t, e),
                          required: !0,
                        }),
                        (0, h.jsx)(l.A, {
                          onClick: () =>
                            ((e) => {
                              const t = x.filter((t, a) => a !== e);
                              g(t);
                            })(t),
                          children: "X\xf3a",
                        }),
                      ],
                    },
                    t
                  )
                ),
                (0, h.jsx)(l.A, {
                  onClick: () => {
                    g([
                      ...x,
                      { size: "", retailPrice: "", wholesalePrice: "" },
                    ]);
                  },
                  variant: "outlined",
                  sx: { mb: 2 },
                  children: "Th\xeam k\xedch th\u01b0\u1edbc",
                }),
                (0, h.jsx)(s.A, {
                  variant: "h6",
                  component: "h2",
                  gutterBottom: !0,
                  children: "M\xe0u s\u1eafc",
                }),
                b.map((e, t) =>
                  (0, h.jsxs)(
                    o.A,
                    {
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      children: [
                        (0, h.jsx)(r.A, {
                          label: "M\xe0u s\u1eafc",
                          margin: "normal",
                          value: e,
                          onChange: (e) =>
                            ((e, t) => {
                              const a = b.map((a, n) =>
                                n === e ? t.target.value : a
                              );
                              A(a);
                            })(t, e),
                          required: !0,
                        }),
                        (0, h.jsx)(l.A, {
                          onClick: () =>
                            ((e) => {
                              const t = b.filter((t, a) => a !== e);
                              A(t);
                            })(t),
                          children: "X\xf3a",
                        }),
                      ],
                    },
                    t
                  )
                ),
                (0, h.jsx)(l.A, {
                  onClick: () => {
                    A([...b, ""]);
                  },
                  variant: "outlined",
                  sx: { mb: 2 },
                  children: "Th\xeam m\xe0u s\u1eafc",
                }),
                (0, h.jsx)(s.A, {
                  variant: "h6",
                  component: "h2",
                  gutterBottom: !0,
                  children: "H\xecnh \u1ea3nh",
                }),
                (0, h.jsx)("input", {
                  type: "file",
                  onChange: (e) => {
                    const t = e.target.files[0];
                    f(t), S(URL.createObjectURL(t));
                  },
                }),
                j &&
                  (0, h.jsxs)(o.A, {
                    mt: 2,
                    children: [
                      (0, h.jsx)(s.A, {
                        variant: "body1",
                        children: "\u1ea2nh xem tr\u01b0\u1edbc:",
                      }),
                      (0, h.jsx)("img", {
                        src: j,
                        alt: "Preview",
                        width: "100px",
                      }),
                    ],
                  }),
                (0, h.jsx)(l.A, {
                  type: "submit",
                  variant: "contained",
                  color: "primary",
                  fullWidth: !0,
                  sx: { mt: 3 },
                  disabled: C,
                  children: C
                    ? (0, h.jsx)(c.A, { size: 24 })
                    : "Th\xeam s\u1ea3n ph\u1ea9m",
                }),
              ],
            }),
            (0, h.jsx)(d.A, {
              open: y,
              autoHideDuration: 6e3,
              onClose: T,
              children: (0, h.jsx)(m.A, {
                onClose: T,
                severity: P,
                children: W,
              }),
            }),
          ],
        });
      };
    },
    9252: (e, t, a) => {
      a.d(t, { A: () => S });
      var n = a(8587),
        i = a(8168),
        s = a(5043),
        r = a(8387),
        o = a(2400),
        l = a(8606),
        c = a(410),
        d = a(2900),
        m = a(9644),
        u = a(7322),
        h = a(579);
      const p = [
          "className",
          "component",
          "disableGutters",
          "fixed",
          "maxWidth",
          "classes",
        ],
        x = (0, u.A)(),
        g = (0, m.A)("div", {
          name: "MuiContainer",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: a } = e;
            return [
              t.root,
              t["maxWidth".concat((0, c.A)(String(a.maxWidth)))],
              a.fixed && t.fixed,
              a.disableGutters && t.disableGutters,
            ];
          },
        }),
        b = (e) =>
          (0, d.A)({ props: e, name: "MuiContainer", defaultTheme: x });
      var A = a(6803),
        v = a(4535),
        f = a(2876);
      const j = (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const {
              createStyledComponent: t = g,
              useThemeProps: a = b,
              componentName: d = "MuiContainer",
            } = e,
            m = t(
              (e) => {
                let { theme: t, ownerState: a } = e;
                return (0, i.A)(
                  {
                    width: "100%",
                    marginLeft: "auto",
                    boxSizing: "border-box",
                    marginRight: "auto",
                    display: "block",
                  },
                  !a.disableGutters && {
                    paddingLeft: t.spacing(2),
                    paddingRight: t.spacing(2),
                    [t.breakpoints.up("sm")]: {
                      paddingLeft: t.spacing(3),
                      paddingRight: t.spacing(3),
                    },
                  }
                );
              },
              (e) => {
                let { theme: t, ownerState: a } = e;
                return (
                  a.fixed &&
                  Object.keys(t.breakpoints.values).reduce((e, a) => {
                    const n = a,
                      i = t.breakpoints.values[n];
                    return (
                      0 !== i &&
                        (e[t.breakpoints.up(n)] = {
                          maxWidth: "".concat(i).concat(t.breakpoints.unit),
                        }),
                      e
                    );
                  }, {})
                );
              },
              (e) => {
                let { theme: t, ownerState: a } = e;
                return (0, i.A)(
                  {},
                  "xs" === a.maxWidth && {
                    [t.breakpoints.up("xs")]: {
                      maxWidth: Math.max(t.breakpoints.values.xs, 444),
                    },
                  },
                  a.maxWidth &&
                    "xs" !== a.maxWidth && {
                      [t.breakpoints.up(a.maxWidth)]: {
                        maxWidth: ""
                          .concat(t.breakpoints.values[a.maxWidth])
                          .concat(t.breakpoints.unit),
                      },
                    }
                );
              }
            ),
            u = s.forwardRef(function (e, t) {
              const s = a(e),
                {
                  className: u,
                  component: x = "div",
                  disableGutters: g = !1,
                  fixed: b = !1,
                  maxWidth: A = "lg",
                } = s,
                v = (0, n.A)(s, p),
                f = (0, i.A)({}, s, {
                  component: x,
                  disableGutters: g,
                  fixed: b,
                  maxWidth: A,
                }),
                j = ((e, t) => {
                  const {
                      classes: a,
                      fixed: n,
                      disableGutters: i,
                      maxWidth: s,
                    } = e,
                    r = {
                      root: [
                        "root",
                        s && "maxWidth".concat((0, c.A)(String(s))),
                        n && "fixed",
                        i && "disableGutters",
                      ],
                    };
                  return (0, l.A)(r, (e) => (0, o.Ay)(t, e), a);
                })(f, d);
              return (0,
              h.jsx)(m, (0, i.A)({ as: x, ownerState: f, className: (0, r.A)(j.root, u), ref: t }, v));
            });
          return u;
        })({
          createStyledComponent: (0, v.Ay)("div", {
            name: "MuiContainer",
            slot: "Root",
            overridesResolver: (e, t) => {
              const { ownerState: a } = e;
              return [
                t.root,
                t["maxWidth".concat((0, A.A)(String(a.maxWidth)))],
                a.fixed && t.fixed,
                a.disableGutters && t.disableGutters,
              ];
            },
          }),
          useThemeProps: (e) => (0, f.A)({ props: e, name: "MuiContainer" }),
        }),
        S = j;
    },
    9644: (e, t, a) => {
      a.d(t, { A: () => n });
      const n = (0, a(920).Ay)();
    },
  },
]);
//# sourceMappingURL=7768.99da5f00.chunk.js.map
