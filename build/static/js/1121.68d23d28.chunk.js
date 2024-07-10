"use strict";
(self.webpackChunkmatx_react = self.webpackChunkmatx_react || []).push([
  [1121],
  {
    1121: (e, t, a) => {
      a.r(t), a.d(t, { default: () => x });
      var n = a(5043),
        i = a(9252),
        s = a(5865),
        r = a(2788),
        o = a(6946),
        l = a(3404),
        c = a(1637),
        d = a(2555),
        u = a(7254),
        m = a(3216),
        h = a(6213),
        p = a(579);
      const x = () => {
        const { id: e } = (0, m.g)(),
          t = (0, m.Zp)(),
          [a, x] = (0, n.useState)(""),
          [g, b] = (0, n.useState)(""),
          [v, A] = (0, n.useState)([
            { size: "", retailPrice: "", wholesalePrice: "" },
          ]),
          [f, j] = (0, n.useState)([""]),
          [C, k] = (0, n.useState)(null),
          [y, S] = (0, n.useState)(""),
          [w, W] = (0, n.useState)(!1),
          [G, P] = (0, n.useState)(!1),
          [R, M] = (0, n.useState)(""),
          [z, T] = (0, n.useState)("success");
        (0, n.useEffect)(() => {
          N();
        }, []);
        const N = async () => {
            try {
              const t = (
                await h.A.get("https://api-neiko.site/api/products/".concat(e))
              ).data.product;
              x(t.name),
                b(t.description),
                A(t.sizeInfo),
                j(t.colorInfo.map((e) => e.color)),
                S("https://api-neiko.site/".concat(t.image));
            } catch (n) {
              var t, a;
              T("error"),
                M(
                  (null === (t = n.response) ||
                  void 0 === t ||
                  null === (a = t.data) ||
                  void 0 === a
                    ? void 0
                    : a.message) ||
                    "C\xf3 l\u1ed7i x\u1ea3y ra khi l\u1ea5y th\xf4ng tin s\u1ea3n ph\u1ea9m"
                ),
                P(!0);
            }
          },
          q = (e, t) => {
            const { name: a, value: n } = t.target,
              i = v.map((t, i) => (i === e ? { ...t, [a]: n } : t));
            A(i);
          },
          L = () => {
            P(!1);
          };
        return (0, p.jsxs)(i.A, {
          children: [
            (0, p.jsx)(s.A, {
              variant: "h4",
              component: "h1",
              gutterBottom: !0,
              children: "Ch\u1ec9nh s\u1eeda s\u1ea3n ph\u1ea9m",
            }),
            (0, p.jsxs)("form", {
              onSubmit: async (n) => {
                n.preventDefault(), W(!0);
                const i = new FormData();
                i.append("name", a),
                  i.append("description", g),
                  i.append("sizes", JSON.stringify(v)),
                  i.append("colors", JSON.stringify(f)),
                  C && i.append("image", C);
                try {
                  const a = await h.A.put(
                    "https://api-neiko.site/api/products/".concat(e),
                    i,
                    { headers: { "Content-Type": "multipart/form-data" } }
                  );
                  T("success"),
                    M(a.data.message),
                    P(!0),
                    t("/dashboard/products");
                } catch (o) {
                  var s, r;
                  T("error"),
                    M(
                      (null === (s = o.response) ||
                      void 0 === s ||
                      null === (r = s.data) ||
                      void 0 === r
                        ? void 0
                        : r.message) ||
                        "C\xf3 l\u1ed7i x\u1ea3y ra khi c\u1eadp nh\u1eadt s\u1ea3n ph\u1ea9m"
                    ),
                    P(!0);
                } finally {
                  W(!1);
                }
              },
              children: [
                (0, p.jsx)(r.A, {
                  label: "T\xean s\u1ea3n ph\u1ea9m",
                  fullWidth: !0,
                  margin: "normal",
                  value: a,
                  onChange: (e) => x(e.target.value),
                  required: !0,
                }),
                (0, p.jsx)(r.A, {
                  label: "M\xf4 t\u1ea3",
                  fullWidth: !0,
                  margin: "normal",
                  multiline: !0,
                  rows: 4,
                  value: g,
                  onChange: (e) => b(e.target.value),
                }),
                (0, p.jsx)(s.A, {
                  variant: "h6",
                  component: "h2",
                  gutterBottom: !0,
                  children: "K\xedch th\u01b0\u1edbc v\xe0 Gi\xe1",
                }),
                v.map((e, t) =>
                  (0, p.jsxs)(
                    o.A,
                    {
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      children: [
                        (0, p.jsx)(r.A, {
                          label: "K\xedch th\u01b0\u1edbc",
                          name: "size",
                          margin: "normal",
                          value: e.size,
                          onChange: (e) => q(t, e),
                          required: !0,
                        }),
                        (0, p.jsx)(r.A, {
                          label: "Gi\xe1 b\xe1n l\u1ebb",
                          name: "retailPrice",
                          margin: "normal",
                          value: e.retailPrice,
                          onChange: (e) => q(t, e),
                          required: !0,
                        }),
                        (0, p.jsx)(r.A, {
                          label: "Gi\xe1 b\xe1n s\u1ec9",
                          name: "wholesalePrice",
                          margin: "normal",
                          value: e.wholesalePrice,
                          onChange: (e) => q(t, e),
                          required: !0,
                        }),
                        (0, p.jsx)(l.A, {
                          onClick: () =>
                            ((e) => {
                              const t = v.filter((t, a) => a !== e);
                              A(t);
                            })(t),
                          children: "X\xf3a",
                        }),
                      ],
                    },
                    t
                  )
                ),
                (0, p.jsx)(l.A, {
                  onClick: () => {
                    A([
                      ...v,
                      { size: "", retailPrice: "", wholesalePrice: "" },
                    ]);
                  },
                  variant: "outlined",
                  sx: { mb: 2 },
                  children: "Th\xeam k\xedch th\u01b0\u1edbc",
                }),
                (0, p.jsx)(s.A, {
                  variant: "h6",
                  component: "h2",
                  gutterBottom: !0,
                  children: "M\xe0u s\u1eafc",
                }),
                f.map((e, t) =>
                  (0, p.jsxs)(
                    o.A,
                    {
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      children: [
                        (0, p.jsx)(r.A, {
                          label: "M\xe0u s\u1eafc",
                          margin: "normal",
                          value: e,
                          onChange: (e) =>
                            ((e, t) => {
                              const a = f.map((a, n) =>
                                n === e ? t.target.value : a
                              );
                              j(a);
                            })(t, e),
                          required: !0,
                        }),
                        (0, p.jsx)(l.A, {
                          onClick: () =>
                            ((e) => {
                              const t = f.filter((t, a) => a !== e);
                              j(t);
                            })(t),
                          children: "X\xf3a",
                        }),
                      ],
                    },
                    t
                  )
                ),
                (0, p.jsx)(l.A, {
                  onClick: () => {
                    j([...f, ""]);
                  },
                  variant: "outlined",
                  sx: { mb: 2 },
                  children: "Th\xeam m\xe0u s\u1eafc",
                }),
                (0, p.jsx)(s.A, {
                  variant: "h6",
                  component: "h2",
                  gutterBottom: !0,
                  children: "H\xecnh \u1ea3nh",
                }),
                (0, p.jsx)("input", {
                  type: "file",
                  onChange: (e) => {
                    const t = e.target.files[0];
                    k(t), S(URL.createObjectURL(t));
                  },
                }),
                y &&
                  (0, p.jsxs)(o.A, {
                    mt: 2,
                    children: [
                      (0, p.jsx)(s.A, {
                        variant: "body1",
                        children: "\u1ea2nh xem tr\u01b0\u1edbc:",
                      }),
                      (0, p.jsx)("img", {
                        src: y,
                        alt: "Preview",
                        width: "100px",
                      }),
                    ],
                  }),
                (0, p.jsx)(l.A, {
                  type: "submit",
                  variant: "contained",
                  color: "primary",
                  fullWidth: !0,
                  sx: { mt: 3 },
                  disabled: w,
                  children: w
                    ? (0, p.jsx)(c.A, { size: 24 })
                    : "C\u1eadp nh\u1eadt s\u1ea3n ph\u1ea9m",
                }),
              ],
            }),
            (0, p.jsx)(d.A, {
              open: G,
              autoHideDuration: 6e3,
              onClose: L,
              children: (0, p.jsx)(u.A, {
                onClose: L,
                severity: z,
                children: R,
              }),
            }),
          ],
        });
      };
    },
    9252: (e, t, a) => {
      a.d(t, { A: () => C });
      var n = a(8587),
        i = a(8168),
        s = a(5043),
        r = a(8387),
        o = a(2400),
        l = a(8606),
        c = a(410),
        d = a(2900),
        u = a(9644),
        m = a(7322),
        h = a(579);
      const p = [
          "className",
          "component",
          "disableGutters",
          "fixed",
          "maxWidth",
          "classes",
        ],
        x = (0, m.A)(),
        g = (0, u.A)("div", {
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
      var v = a(6803),
        A = a(4535),
        f = a(2876);
      const j = (function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const {
              createStyledComponent: t = g,
              useThemeProps: a = b,
              componentName: d = "MuiContainer",
            } = e,
            u = t(
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
            m = s.forwardRef(function (e, t) {
              const s = a(e),
                {
                  className: m,
                  component: x = "div",
                  disableGutters: g = !1,
                  fixed: b = !1,
                  maxWidth: v = "lg",
                } = s,
                A = (0, n.A)(s, p),
                f = (0, i.A)({}, s, {
                  component: x,
                  disableGutters: g,
                  fixed: b,
                  maxWidth: v,
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
              h.jsx)(u, (0, i.A)({ as: x, ownerState: f, className: (0, r.A)(j.root, m), ref: t }, A));
            });
          return m;
        })({
          createStyledComponent: (0, A.Ay)("div", {
            name: "MuiContainer",
            slot: "Root",
            overridesResolver: (e, t) => {
              const { ownerState: a } = e;
              return [
                t.root,
                t["maxWidth".concat((0, v.A)(String(a.maxWidth)))],
                a.fixed && t.fixed,
                a.disableGutters && t.disableGutters,
              ];
            },
          }),
          useThemeProps: (e) => (0, f.A)({ props: e, name: "MuiContainer" }),
        }),
        C = j;
    },
    9644: (e, t, a) => {
      a.d(t, { A: () => n });
      const n = (0, a(920).Ay)();
    },
  },
]);
//# sourceMappingURL=1121.68d23d28.chunk.js.map
