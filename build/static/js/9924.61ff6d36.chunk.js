"use strict";
(self.webpackChunkmatx_react = self.webpackChunkmatx_react || []).push([
  [9924],
  {
    9924: (e, t, a) => {
      a.r(t), a.d(t, { default: () => I });
      var n = a(5043),
        i = a(9650),
        s = a(3336),
        r = a(1806),
        o = a(4882),
        c = a(8076),
        l = a(2420),
        d = a(3460),
        p = a(3404),
        u = a(8911),
        m = a(3691),
        h = a(4982),
        g = a(6946),
        v = a(5865),
        A = a(3193),
        x = a(8356),
        b = a(2221),
        y = a(2143),
        j = a(2788),
        f = a(2555),
        C = a(7254),
        k = a(6213),
        S = a(579);
      const w = {
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
        I = () => {
          const [e, t] = (0, n.useState)([]),
            [a, I] = (0, n.useState)(1),
            [M, O] = (0, n.useState)(0),
            [T, H] = (0, n.useState)(!1),
            [L, G] = (0, n.useState)(null),
            [V, N] = (0, n.useState)({
              level: "",
              commission: "",
              balance: "",
            }),
            [R, _] = (0, n.useState)(!1),
            [B, F] = (0, n.useState)(""),
            [U, X] = (0, n.useState)("success"),
            W = async () => {
              try {
                const e = (
                  await k.A.get("https://api-neiko.site/api/users", {
                    params: { page: a, limit: 10 },
                  })
                ).data;
                t(e.users), O(e.totalPages);
              } catch (e) {
                console.error("Error fetching users:", e);
              }
            };
          (0, n.useEffect)(() => {
            W();
          }, [a]);
          const D = () => {
              H(!1);
            },
            P = (e) => {
              N({ ...V, [e.target.name]: e.target.value });
            };
          return (0, S.jsxs)(S.Fragment, {
            children: [
              (0, S.jsx)(i.A, {
                component: s.A,
                children: (0, S.jsxs)(r.A, {
                  "aria-label": "simple table",
                  children: [
                    (0, S.jsx)(o.A, {
                      children: (0, S.jsxs)(c.A, {
                        children: [
                          (0, S.jsx)(l.A, {
                            align: "center",
                            children: "T\xean t\xe0i kho\u1ea3n",
                          }),
                          (0, S.jsx)(l.A, {
                            align: "center",
                            children: "H\u1ecd t\xean",
                          }),
                          (0, S.jsx)(l.A, {
                            align: "center",
                            children: "S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",
                          }),
                          (0, S.jsx)(l.A, {
                            align: "center",
                            children: "M\xe3 gi\u1edbi thi\u1ec7u",
                          }),
                          (0, S.jsx)(l.A, {
                            align: "center",
                            children: "C\u1ea5p \u0111\u1ed9",
                          }),
                          (0, S.jsx)(l.A, {
                            align: "center",
                            children: "Hoa h\u1ed3ng",
                          }),
                          (0, S.jsx)(l.A, {
                            align: "center",
                            children: "S\u1ed1 d\u01b0",
                          }),
                          (0, S.jsx)(l.A, {
                            align: "center",
                            children: "H\xe0nh \u0111\u1ed9ng",
                          }),
                        ],
                      }),
                    }),
                    (0, S.jsx)(d.A, {
                      children: e.map((e) =>
                        (0, S.jsxs)(
                          c.A,
                          {
                            children: [
                              (0, S.jsx)(l.A, {
                                align: "center",
                                component: "th",
                                scope: "row",
                                children: e.username,
                              }),
                              (0, S.jsx)(l.A, {
                                align: "center",
                                children: e.name,
                              }),
                              (0, S.jsx)(l.A, {
                                align: "center",
                                children: e.phone,
                              }),
                              (0, S.jsx)(l.A, {
                                align: "center",
                                children: e.code,
                              }),
                              (0, S.jsx)(l.A, {
                                align: "center",
                                children:
                                  "client" === e.level
                                    ? "Kh\xe1ch h\xe0ng"
                                    : "\u0110\u1ea1i l\xfd",
                              }),
                              (0, S.jsxs)(l.A, {
                                align: "center",
                                children: [e.commission, "%"],
                              }),
                              (0, S.jsx)(l.A, {
                                align: "center",
                                children: e.balance.toLocaleString(),
                              }),
                              (0, S.jsxs)(l.A, {
                                align: "center",
                                children: [
                                  (0, S.jsx)(p.A, {
                                    color: "primary",
                                    onClick: () =>
                                      (function () {
                                        let e =
                                          arguments.length > 0 &&
                                          void 0 !== arguments[0]
                                            ? arguments[0]
                                            : null;
                                        G(e),
                                          N(
                                            e
                                              ? {
                                                  level: e.level,
                                                  commission:
                                                    e.commission || "",
                                                  balance: e.balance,
                                                }
                                              : {
                                                  level: "",
                                                  commission: "",
                                                  balance: "",
                                                }
                                          ),
                                          H(!0);
                                      })(e),
                                    children: "S\u1eeda",
                                  }),
                                  (0, S.jsx)(p.A, {
                                    color: "secondary",
                                    onClick: () =>
                                      (async (e) => {
                                        try {
                                          await k.A.delete(
                                            "https://api-neiko.site/api/users/".concat(
                                              e
                                            )
                                          ),
                                            X("success"),
                                            F(
                                              "User \u0111\xe3 \u0111\u01b0\u1ee3c x\xf3a"
                                            ),
                                            _(!0),
                                            W();
                                        } catch (n) {
                                          var t, a;
                                          X("error"),
                                            F(
                                              (null === (t = n.response) ||
                                              void 0 === t ||
                                              null === (a = t.data) ||
                                              void 0 === a
                                                ? void 0
                                                : a.message) ||
                                                "C\xf3 l\u1ed7i x\u1ea3y ra"
                                            ),
                                            _(!0);
                                        }
                                      })(e._id),
                                    children: "Xo\xe1",
                                  }),
                                  (0, S.jsx)(p.A, {
                                    color: "secondary",
                                    onClick: () =>
                                      (async (e) => {
                                        try {
                                          await k.A.put(
                                            "https://api-neiko.site/api/users/reset-balance/".concat(
                                              e,
                                              "/"
                                            )
                                          ),
                                            X("success"),
                                            F(
                                              "S\u1ed1 d\u01b0 \u0111\xe3 \u0111\u01b0\u1ee3c reset"
                                            ),
                                            _(!0),
                                            W();
                                        } catch (n) {
                                          var t, a;
                                          X("error"),
                                            F(
                                              (null === (t = n.response) ||
                                              void 0 === t ||
                                              null === (a = t.data) ||
                                              void 0 === a
                                                ? void 0
                                                : a.message) ||
                                                "C\xf3 l\u1ed7i x\u1ea3y ra"
                                            ),
                                            _(!0);
                                        }
                                      })(e._id),
                                    children: "Reset s\u1ed1 d\u01b0",
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
              (0, S.jsx)(u.A, {
                sx: {
                  paddingTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                },
                spacing: 2,
                children: (0, S.jsx)(m.A, {
                  count: M,
                  page: a,
                  color: "primary",
                  onChange: (e, t) => {
                    I(t);
                  },
                }),
              }),
              (0, S.jsx)(h.A, {
                open: T,
                onClose: D,
                children: (0, S.jsxs)(g.A, {
                  sx: w,
                  children: [
                    (0, S.jsx)(v.A, {
                      variant: "h6",
                      component: "h2",
                      children: L ? "S\u1eeda User" : "Th\xeam User",
                    }),
                    (0, S.jsxs)(A.A, {
                      fullWidth: !0,
                      margin: "normal",
                      children: [
                        (0, S.jsx)(x.A, {
                          id: "level-label",
                          children: "C\u1ea5p \u0111\u1ed9",
                        }),
                        (0, S.jsxs)(b.A, {
                          labelId: "level-label",
                          name: "level",
                          value: V.level,
                          onChange: P,
                          children: [
                            (0, S.jsx)(y.A, {
                              value: "client",
                              children: "Kh\xe1ch h\xe0ng",
                            }),
                            (0, S.jsx)(y.A, {
                              value: "agency",
                              children: "\u0110\u1ea1i l\xfd",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, S.jsx)(j.A, {
                      fullWidth: !0,
                      margin: "normal",
                      label: "Hoa h\u1ed3ng",
                      name: "commission",
                      value: V.commission,
                      onChange: P,
                    }),
                    (0, S.jsx)(j.A, {
                      fullWidth: !0,
                      margin: "normal",
                      label: "S\u1ed1 d\u01b0",
                      name: "balance",
                      value: V.balance,
                      onChange: P,
                    }),
                    (0, S.jsx)(p.A, {
                      variant: "contained",
                      color: "primary",
                      onClick: async () => {
                        try {
                          L
                            ? await k.A.put(
                                "https://api-neiko.site/api/users/".concat(
                                  L._id
                                ),
                                V
                              )
                            : await k.A.post(
                                "https://api-neiko.site/api/users",
                                V
                              ),
                            X("success"),
                            F(
                              L
                                ? "User \u0111\xe3 \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt"
                                : "User \u0111\xe3 \u0111\u01b0\u1ee3c th\xeam"
                            ),
                            _(!0),
                            W(),
                            D();
                        } catch (a) {
                          var e, t;
                          X("error"),
                            F(
                              (null === (e = a.response) ||
                              void 0 === e ||
                              null === (t = e.data) ||
                              void 0 === t
                                ? void 0
                                : t.message) || "C\xf3 l\u1ed7i x\u1ea3y ra"
                            ),
                            _(!0);
                        }
                      },
                      sx: { mt: 2 },
                      children: L ? "C\u1eadp nh\u1eadt" : "Th\xeam",
                    }),
                  ],
                }),
              }),
              (0, S.jsx)(f.A, {
                open: R,
                autoHideDuration: 6e3,
                onClose: () => _(!1),
                children: (0, S.jsx)(C.A, {
                  onClose: () => _(!1),
                  severity: U,
                  children: B,
                }),
              }),
            ],
          });
        };
    },
    1424: (e, t, a) => {
      a.d(t, { A: () => r, f: () => s });
      var n = a(7056),
        i = a(2400);
      function s(e) {
        return (0, i.Ay)("MuiListItemIcon", e);
      }
      const r = (0, n.A)("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
    },
    8052: (e, t, a) => {
      a.d(t, { A: () => r, b: () => s });
      var n = a(7056),
        i = a(2400);
      function s(e) {
        return (0, i.Ay)("MuiListItemText", e);
      }
      const r = (0, n.A)("MuiListItemText", [
        "root",
        "multiline",
        "dense",
        "inset",
        "primary",
        "secondary",
      ]);
    },
    2143: (e, t, a) => {
      a.d(t, { A: () => S });
      var n = a(8587),
        i = a(8168),
        s = a(5043),
        r = a(8795),
        o = a(8606),
        c = a(3650),
        l = a(4535),
        d = a(2876),
        p = a(1347),
        u = a(5429),
        m = a(5013),
        h = a(5849),
        g = a(5658),
        v = a(1424),
        A = a(8052),
        x = a(7056),
        b = a(2400);
      function y(e) {
        return (0, b.Ay)("MuiMenuItem", e);
      }
      const j = (0, x.A)("MuiMenuItem", [
        "root",
        "focusVisible",
        "dense",
        "disabled",
        "divider",
        "gutters",
        "selected",
      ]);
      var f = a(579);
      const C = [
          "autoFocus",
          "component",
          "dense",
          "divider",
          "disableGutters",
          "focusVisibleClassName",
          "role",
          "tabIndex",
          "className",
        ],
        k = (0, l.Ay)(u.A, {
          shouldForwardProp: (e) => (0, l.ep)(e) || "classes" === e,
          name: "MuiMenuItem",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: a } = e;
            return [
              t.root,
              a.dense && t.dense,
              a.divider && t.divider,
              !a.disableGutters && t.gutters,
            ];
          },
        })((e) => {
          let { theme: t, ownerState: a } = e;
          return (0, i.A)(
            {},
            t.typography.body1,
            {
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
              textDecoration: "none",
              minHeight: 48,
              paddingTop: 6,
              paddingBottom: 6,
              boxSizing: "border-box",
              whiteSpace: "nowrap",
            },
            !a.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            a.divider && {
              borderBottom: "1px solid ".concat((t.vars || t).palette.divider),
              backgroundClip: "padding-box",
            },
            {
              "&:hover": {
                textDecoration: "none",
                backgroundColor: (t.vars || t).palette.action.hover,
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              ["&.".concat(j.selected)]: {
                backgroundColor: t.vars
                  ? "rgba("
                      .concat(t.vars.palette.primary.mainChannel, " / ")
                      .concat(t.vars.palette.action.selectedOpacity, ")")
                  : (0, c.X4)(
                      t.palette.primary.main,
                      t.palette.action.selectedOpacity
                    ),
                ["&.".concat(j.focusVisible)]: {
                  backgroundColor: t.vars
                    ? "rgba("
                        .concat(t.vars.palette.primary.mainChannel, " / calc(")
                        .concat(t.vars.palette.action.selectedOpacity, " + ")
                        .concat(t.vars.palette.action.focusOpacity, "))")
                    : (0, c.X4)(
                        t.palette.primary.main,
                        t.palette.action.selectedOpacity +
                          t.palette.action.focusOpacity
                      ),
                },
              },
              ["&.".concat(j.selected, ":hover")]: {
                backgroundColor: t.vars
                  ? "rgba("
                      .concat(t.vars.palette.primary.mainChannel, " / calc(")
                      .concat(t.vars.palette.action.selectedOpacity, " + ")
                      .concat(t.vars.palette.action.hoverOpacity, "))")
                  : (0, c.X4)(
                      t.palette.primary.main,
                      t.palette.action.selectedOpacity +
                        t.palette.action.hoverOpacity
                    ),
                "@media (hover: none)": {
                  backgroundColor: t.vars
                    ? "rgba("
                        .concat(t.vars.palette.primary.mainChannel, " / ")
                        .concat(t.vars.palette.action.selectedOpacity, ")")
                    : (0, c.X4)(
                        t.palette.primary.main,
                        t.palette.action.selectedOpacity
                      ),
                },
              },
              ["&.".concat(j.focusVisible)]: {
                backgroundColor: (t.vars || t).palette.action.focus,
              },
              ["&.".concat(j.disabled)]: {
                opacity: (t.vars || t).palette.action.disabledOpacity,
              },
              ["& + .".concat(g.A.root)]: {
                marginTop: t.spacing(1),
                marginBottom: t.spacing(1),
              },
              ["& + .".concat(g.A.inset)]: { marginLeft: 52 },
              ["& .".concat(A.A.root)]: { marginTop: 0, marginBottom: 0 },
              ["& .".concat(A.A.inset)]: { paddingLeft: 36 },
              ["& .".concat(v.A.root)]: { minWidth: 36 },
            },
            !a.dense && { [t.breakpoints.up("sm")]: { minHeight: "auto" } },
            a.dense &&
              (0, i.A)(
                { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
                t.typography.body2,
                { ["& .".concat(v.A.root, " svg")]: { fontSize: "1.25rem" } }
              )
          );
        }),
        S = s.forwardRef(function (e, t) {
          const a = (0, d.A)({ props: e, name: "MuiMenuItem" }),
            {
              autoFocus: c = !1,
              component: l = "li",
              dense: u = !1,
              divider: g = !1,
              disableGutters: v = !1,
              focusVisibleClassName: A,
              role: x = "menuitem",
              tabIndex: b,
              className: j,
            } = a,
            S = (0, n.A)(a, C),
            w = s.useContext(p.A),
            I = s.useMemo(
              () => ({ dense: u || w.dense || !1, disableGutters: v }),
              [w.dense, u, v]
            ),
            M = s.useRef(null);
          (0, m.A)(() => {
            c && M.current && M.current.focus();
          }, [c]);
          const O = (0, i.A)({}, a, {
              dense: I.dense,
              divider: g,
              disableGutters: v,
            }),
            T = ((e) => {
              const {
                  disabled: t,
                  dense: a,
                  divider: n,
                  disableGutters: s,
                  selected: r,
                  classes: c,
                } = e,
                l = {
                  root: [
                    "root",
                    a && "dense",
                    t && "disabled",
                    !s && "gutters",
                    n && "divider",
                    r && "selected",
                  ],
                },
                d = (0, o.A)(l, y, c);
              return (0, i.A)({}, c, d);
            })(a),
            H = (0, h.A)(M, t);
          let L;
          return (
            a.disabled || (L = void 0 !== b ? b : -1),
            (0, f.jsx)(p.A.Provider, {
              value: I,
              children: (0, f.jsx)(
                k,
                (0, i.A)(
                  {
                    ref: H,
                    role: x,
                    tabIndex: L,
                    component: l,
                    focusVisibleClassName: (0, r.A)(T.focusVisible, A),
                    className: (0, r.A)(T.root, j),
                  },
                  S,
                  { ownerState: O, classes: T }
                )
              ),
            })
          );
        });
    },
  },
]);
//# sourceMappingURL=9924.61ff6d36.chunk.js.map
