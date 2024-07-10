"use strict";
(self.webpackChunkmatx_react = self.webpackChunkmatx_react || []).push([
  [2625],
  {
    2625: (e, t, a) => {
      a.r(t), a.d(t, { default: () => j });
      var r = a(5043),
        o = a(9650),
        n = a(3336),
        c = a(1806),
        i = a(4882),
        l = a(8076),
        s = a(2420),
        d = a(3460),
        h = a(3404),
        u = a(8911),
        p = a(3691),
        m = a(4982),
        g = a(6946),
        b = a(5865),
        A = a(4605),
        v = a(4598),
        x = a(2555),
        y = a(7254),
        k = a(6213),
        f = a(579);
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
        j = () => {
          const [e, t] = (0, r.useState)([]),
            [a, j] = (0, r.useState)(1),
            [S, C] = (0, r.useState)(0),
            [R, P] = (0, r.useState)(null),
            [F, z] = (0, r.useState)(!1),
            [B, N] = (0, r.useState)(""),
            [T, D] = (0, r.useState)("success"),
            L = async () => {
              try {
                const e = (
                  await k.A.get("https://api-neiko.site/api/orders", {
                    params: { page: a, limit: 10 },
                  })
                ).data;
                t(e.orders), C(e.totalPages);
              } catch (e) {
                console.error("Error fetching orders:", e);
              }
            };
          (0, r.useEffect)(() => {
            L();
          }, [a]);
          const M = () => {
              P(null);
            },
            I = () => {
              z(!1);
            };
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(o.A, {
                component: n.A,
                children: (0, f.jsxs)(c.A, {
                  "aria-label": "simple table",
                  children: [
                    (0, f.jsx)(i.A, {
                      children: (0, f.jsxs)(l.A, {
                        children: [
                          (0, f.jsx)(s.A, {
                            align: "center",
                            children: "T\xean kh\xe1ch h\xe0ng",
                          }),
                          (0, f.jsx)(s.A, {
                            align: "center",
                            children: "\u0110i\u1ec7n tho\u1ea1i",
                          }),
                          (0, f.jsx)(s.A, {
                            align: "center",
                            children: "\u0110\u1ecba ch\u1ec9",
                          }),
                          (0, f.jsx)(s.A, {
                            align: "center",
                            children: "T\u1ed5ng gi\xe1 tr\u1ecb",
                          }),
                          (0, f.jsx)(s.A, {
                            align: "center",
                            children: "Tr\u1ea1ng th\xe1i",
                          }),
                          (0, f.jsx)(s.A, {
                            align: "center",
                            children: "Ng\xe0y t\u1ea1o",
                          }),
                          (0, f.jsx)(s.A, {
                            align: "center",
                            children: "H\xe0nh \u0111\u1ed9ng",
                          }),
                        ],
                      }),
                    }),
                    (0, f.jsx)(d.A, {
                      children: e.map((e) =>
                        (0, f.jsxs)(
                          l.A,
                          {
                            children: [
                              (0, f.jsx)(s.A, {
                                align: "center",
                                children: e.user.name,
                              }),
                              (0, f.jsx)(s.A, {
                                align: "center",
                                children: e.phone,
                              }),
                              (0, f.jsx)(s.A, {
                                align: "center",
                                children: e.shippingAddress,
                              }),
                              (0, f.jsxs)(s.A, {
                                align: "center",
                                children: [
                                  e.totalPrice.toLocaleString(),
                                  " \u0111",
                                ],
                              }),
                              (0, f.jsx)(s.A, {
                                align: "center",
                                children: e.isDelivered
                                  ? "\u0110\xe3 giao"
                                  : "\u0110ang x\u1eed l\xfd",
                              }),
                              (0, f.jsx)(s.A, {
                                align: "center",
                                children: new Date(
                                  e.createdAt
                                ).toLocaleDateString(),
                              }),
                              (0, f.jsxs)(s.A, {
                                align: "center",
                                children: [
                                  (0, f.jsx)(h.A, {
                                    color: "primary",
                                    onClick: () =>
                                      ((e) => {
                                        P(e);
                                      })(e),
                                    children: "Xem",
                                  }),
                                  (0, f.jsx)(h.A, {
                                    color: "secondary",
                                    onClick: () =>
                                      (async (e) => {
                                        try {
                                          await k.A.delete(
                                            "https://api-neiko.site/api/orders/".concat(
                                              e
                                            )
                                          ),
                                            D("success"),
                                            N("Order deleted successfully"),
                                            z(!0),
                                            L();
                                        } catch (r) {
                                          var t, a;
                                          D("error"),
                                            N(
                                              (null === (t = r.response) ||
                                              void 0 === t ||
                                              null === (a = t.data) ||
                                              void 0 === a
                                                ? void 0
                                                : a.message) ||
                                                "Error deleting order"
                                            ),
                                            z(!0);
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
              (0, f.jsx)(u.A, {
                sx: {
                  paddingTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                },
                spacing: 2,
                children: (0, f.jsx)(p.A, {
                  count: S,
                  page: a,
                  color: "primary",
                  onChange: (e, t) => {
                    j(t);
                  },
                }),
              }),
              (0, f.jsx)(m.A, {
                open: !!R,
                onClose: M,
                children: (0, f.jsxs)(g.A, {
                  sx: w,
                  children: [
                    R &&
                      (0, f.jsxs)(f.Fragment, {
                        children: [
                          (0, f.jsx)(b.A, {
                            variant: "h6",
                            component: "h2",
                            children: "Chi ti\u1ebft \u0111\u01a1n h\xe0ng",
                          }),
                          (0, f.jsxs)(b.A, {
                            variant: "body1",
                            children: [
                              "T\xean kh\xe1ch h\xe0ng: ",
                              R.user.name,
                            ],
                          }),
                          (0, f.jsxs)(b.A, {
                            variant: "body1",
                            children: ["\u0110i\u1ec7n tho\u1ea1i: ", R.phone],
                          }),
                          (0, f.jsxs)(b.A, {
                            variant: "body1",
                            children: [
                              "\u0110\u1ecba ch\u1ec9: ",
                              R.shippingAddress,
                            ],
                          }),
                          (0, f.jsxs)(b.A, {
                            variant: "body1",
                            children: [
                              "T\u1ed5ng gi\xe1 tr\u1ecb: ",
                              R.totalPrice.toLocaleString(),
                              " \u0111",
                            ],
                          }),
                          (0, f.jsxs)(b.A, {
                            variant: "body1",
                            children: [
                              "Tr\u1ea1ng th\xe1i:",
                              " ",
                              R.isDelivered
                                ? "\u0110\xe3 giao"
                                : "\u0110ang x\u1eed l\xfd",
                            ],
                          }),
                          (0, f.jsx)(A.A, {
                            control: (0, f.jsx)(v.A, {
                              checked: R.isDelivered,
                              onChange: (e) =>
                                (async (e, t) => {
                                  try {
                                    const a = await k.A.put(
                                      "https://api-neiko.site/api/orders/".concat(
                                        e
                                      ),
                                      { isDelivered: t }
                                    );
                                    D("success"),
                                      N("Order status updated successfully"),
                                      z(!0),
                                      P(a.data),
                                      L();
                                  } catch (o) {
                                    var a, r;
                                    D("error"),
                                      N(
                                        (null === (a = o.response) ||
                                        void 0 === a ||
                                        null === (r = a.data) ||
                                        void 0 === r
                                          ? void 0
                                          : r.message) ||
                                          "Error updating order status"
                                      ),
                                      z(!0);
                                  }
                                })(R._id, e.target.checked),
                              color: "primary",
                            }),
                            label: "\u0110\xe3 giao",
                          }),
                          (0, f.jsxs)(b.A, {
                            variant: "body1",
                            children: [
                              "Ng\xe0y t\u1ea1o:",
                              " ",
                              new Date(R.createdAt).toLocaleDateString(),
                            ],
                          }),
                          (0, f.jsx)(b.A, {
                            variant: "body1",
                            children: "S\u1ea3n ph\u1ea9m:",
                          }),
                          R.orderItems.map((e) =>
                            (0, f.jsxs)(
                              g.A,
                              {
                                mb: 2,
                                children: [
                                  (0, f.jsxs)(b.A, {
                                    variant: "body2",
                                    children: [
                                      "T\xean s\u1ea3n ph\u1ea9m: ",
                                      e.product.name,
                                    ],
                                  }),
                                  (0, f.jsxs)(b.A, {
                                    variant: "body2",
                                    children: [
                                      "S\u1ed1 l\u01b0\u1ee3ng: ",
                                      e.qty,
                                    ],
                                  }),
                                  (0, f.jsxs)(b.A, {
                                    variant: "body2",
                                    children: [
                                      "K\xedch th\u01b0\u1edbc: ",
                                      e.size,
                                    ],
                                  }),
                                  (0, f.jsxs)(b.A, {
                                    variant: "body2",
                                    children: ["M\xe0u s\u1eafc: ", e.color],
                                  }),
                                ],
                              },
                              e._id
                            )
                          ),
                        ],
                      }),
                    (0, f.jsx)(h.A, {
                      onClick: M,
                      sx: { mt: 2 },
                      children: "\u0110\xf3ng",
                    }),
                  ],
                }),
              }),
              (0, f.jsx)(x.A, {
                open: F,
                autoHideDuration: 6e3,
                onClose: I,
                children: (0, f.jsx)(y.A, {
                  onClose: I,
                  severity: T,
                  children: B,
                }),
              }),
            ],
          });
        };
    },
    4605: (e, t, a) => {
      a.d(t, { A: () => f });
      var r = a(8587),
        o = a(8168),
        n = a(5043),
        c = a(8795),
        i = a(8606),
        l = a(5213),
        s = a(5865),
        d = a(6803),
        h = a(4535),
        u = a(2876),
        p = a(7056),
        m = a(2400);
      function g(e) {
        return (0, m.Ay)("MuiFormControlLabel", e);
      }
      const b = (0, p.A)("MuiFormControlLabel", [
        "root",
        "labelPlacementStart",
        "labelPlacementTop",
        "labelPlacementBottom",
        "disabled",
        "label",
        "error",
        "required",
        "asterisk",
      ]);
      var A = a(4827),
        v = a(579);
      const x = [
          "checked",
          "className",
          "componentsProps",
          "control",
          "disabled",
          "disableTypography",
          "inputRef",
          "label",
          "labelPlacement",
          "name",
          "onChange",
          "required",
          "slotProps",
          "value",
        ],
        y = (0, h.Ay)("label", {
          name: "MuiFormControlLabel",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: a } = e;
            return [
              { ["& .".concat(b.label)]: t.label },
              t.root,
              t["labelPlacement".concat((0, d.A)(a.labelPlacement))],
            ];
          },
        })((e) => {
          let { theme: t, ownerState: a } = e;
          return (0, o.A)(
            {
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              verticalAlign: "middle",
              WebkitTapHighlightColor: "transparent",
              marginLeft: -11,
              marginRight: 16,
              ["&.".concat(b.disabled)]: { cursor: "default" },
            },
            "start" === a.labelPlacement && {
              flexDirection: "row-reverse",
              marginLeft: 16,
              marginRight: -11,
            },
            "top" === a.labelPlacement && {
              flexDirection: "column-reverse",
              marginLeft: 16,
            },
            "bottom" === a.labelPlacement && {
              flexDirection: "column",
              marginLeft: 16,
            },
            {
              ["& .".concat(b.label)]: {
                ["&.".concat(b.disabled)]: {
                  color: (t.vars || t).palette.text.disabled,
                },
              },
            }
          );
        }),
        k = (0, h.Ay)("span", {
          name: "MuiFormControlLabel",
          slot: "Asterisk",
          overridesResolver: (e, t) => t.asterisk,
        })((e) => {
          let { theme: t } = e;
          return {
            ["&.".concat(b.error)]: { color: (t.vars || t).palette.error.main },
          };
        }),
        f = n.forwardRef(function (e, t) {
          var a, h;
          const p = (0, u.A)({ props: e, name: "MuiFormControlLabel" }),
            {
              className: m,
              componentsProps: b = {},
              control: f,
              disabled: w,
              disableTypography: j,
              label: S,
              labelPlacement: C = "end",
              required: R,
              slotProps: P = {},
            } = p,
            F = (0, r.A)(p, x),
            z = (0, l.A)(),
            B =
              null != (a = null != w ? w : f.props.disabled)
                ? a
                : null == z
                ? void 0
                : z.disabled,
            N = null != R ? R : f.props.required,
            T = { disabled: B, required: N };
          ["checked", "name", "onChange", "value", "inputRef"].forEach((e) => {
            "undefined" === typeof f.props[e] &&
              "undefined" !== typeof p[e] &&
              (T[e] = p[e]);
          });
          const D = (0, A.A)({
              props: p,
              muiFormControl: z,
              states: ["error"],
            }),
            L = (0, o.A)({}, p, {
              disabled: B,
              labelPlacement: C,
              required: N,
              error: D.error,
            }),
            M = ((e) => {
              const {
                  classes: t,
                  disabled: a,
                  labelPlacement: r,
                  error: o,
                  required: n,
                } = e,
                c = {
                  root: [
                    "root",
                    a && "disabled",
                    "labelPlacement".concat((0, d.A)(r)),
                    o && "error",
                    n && "required",
                  ],
                  label: ["label", a && "disabled"],
                  asterisk: ["asterisk", o && "error"],
                };
              return (0, i.A)(c, g, t);
            })(L),
            I = null != (h = P.typography) ? h : b.typography;
          let q = S;
          return (
            null == q ||
              q.type === s.A ||
              j ||
              (q = (0, v.jsx)(
                s.A,
                (0, o.A)({ component: "span" }, I, {
                  className: (0, c.A)(
                    M.label,
                    null == I ? void 0 : I.className
                  ),
                  children: q,
                })
              )),
            (0, v.jsxs)(
              y,
              (0, o.A)(
                { className: (0, c.A)(M.root, m), ownerState: L, ref: t },
                F,
                {
                  children: [
                    n.cloneElement(f, T),
                    q,
                    N &&
                      (0, v.jsxs)(k, {
                        ownerState: L,
                        "aria-hidden": !0,
                        className: M.asterisk,
                        children: ["\u2009", "*"],
                      }),
                  ],
                }
              )
            )
          );
        });
    },
    4598: (e, t, a) => {
      a.d(t, { A: () => w });
      var r = a(8587),
        o = a(8168),
        n = a(5043),
        c = a(8795),
        i = a(8606),
        l = a(3650),
        s = a(6803),
        d = a(3064),
        h = a(2876),
        u = a(4535),
        p = a(7056),
        m = a(2400);
      function g(e) {
        return (0, m.Ay)("MuiSwitch", e);
      }
      const b = (0, p.A)("MuiSwitch", [
        "root",
        "edgeStart",
        "edgeEnd",
        "switchBase",
        "colorPrimary",
        "colorSecondary",
        "sizeSmall",
        "sizeMedium",
        "checked",
        "disabled",
        "input",
        "thumb",
        "track",
      ]);
      var A = a(579);
      const v = ["className", "color", "edge", "size", "sx"],
        x = (0, u.Ay)("span", {
          name: "MuiSwitch",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: a } = e;
            return [
              t.root,
              a.edge && t["edge".concat((0, s.A)(a.edge))],
              t["size".concat((0, s.A)(a.size))],
            ];
          },
        })((e) => {
          let { ownerState: t } = e;
          return (0, o.A)(
            {
              display: "inline-flex",
              width: 58,
              height: 38,
              overflow: "hidden",
              padding: 12,
              boxSizing: "border-box",
              position: "relative",
              flexShrink: 0,
              zIndex: 0,
              verticalAlign: "middle",
              "@media print": { colorAdjust: "exact" },
            },
            "start" === t.edge && { marginLeft: -8 },
            "end" === t.edge && { marginRight: -8 },
            "small" === t.size && {
              width: 40,
              height: 24,
              padding: 7,
              ["& .".concat(b.thumb)]: { width: 16, height: 16 },
              ["& .".concat(b.switchBase)]: {
                padding: 4,
                ["&.".concat(b.checked)]: { transform: "translateX(16px)" },
              },
            }
          );
        }),
        y = (0, u.Ay)(d.A, {
          name: "MuiSwitch",
          slot: "SwitchBase",
          overridesResolver: (e, t) => {
            const { ownerState: a } = e;
            return [
              t.switchBase,
              { ["& .".concat(b.input)]: t.input },
              "default" !== a.color && t["color".concat((0, s.A)(a.color))],
            ];
          },
        })(
          (e) => {
            let { theme: t } = e;
            return {
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              color: t.vars
                ? t.vars.palette.Switch.defaultColor
                : "".concat(
                    "light" === t.palette.mode
                      ? t.palette.common.white
                      : t.palette.grey[300]
                  ),
              transition: t.transitions.create(["left", "transform"], {
                duration: t.transitions.duration.shortest,
              }),
              ["&.".concat(b.checked)]: { transform: "translateX(20px)" },
              ["&.".concat(b.disabled)]: {
                color: t.vars
                  ? t.vars.palette.Switch.defaultDisabledColor
                  : "".concat(
                      "light" === t.palette.mode
                        ? t.palette.grey[100]
                        : t.palette.grey[600]
                    ),
              },
              ["&.".concat(b.checked, " + .").concat(b.track)]: {
                opacity: 0.5,
              },
              ["&.".concat(b.disabled, " + .").concat(b.track)]: {
                opacity: t.vars
                  ? t.vars.opacity.switchTrackDisabled
                  : "".concat("light" === t.palette.mode ? 0.12 : 0.2),
              },
              ["& .".concat(b.input)]: { left: "-100%", width: "300%" },
            };
          },
          (e) => {
            let { theme: t, ownerState: a } = e;
            return (0, o.A)(
              {
                "&:hover": {
                  backgroundColor: t.vars
                    ? "rgba("
                        .concat(t.vars.palette.action.activeChannel, " / ")
                        .concat(t.vars.palette.action.hoverOpacity, ")")
                    : (0, l.X4)(
                        t.palette.action.active,
                        t.palette.action.hoverOpacity
                      ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              "default" !== a.color && {
                ["&.".concat(b.checked)]: {
                  color: (t.vars || t).palette[a.color].main,
                  "&:hover": {
                    backgroundColor: t.vars
                      ? "rgba("
                          .concat(t.vars.palette[a.color].mainChannel, " / ")
                          .concat(t.vars.palette.action.hoverOpacity, ")")
                      : (0, l.X4)(
                          t.palette[a.color].main,
                          t.palette.action.hoverOpacity
                        ),
                    "@media (hover: none)": { backgroundColor: "transparent" },
                  },
                  ["&.".concat(b.disabled)]: {
                    color: t.vars
                      ? t.vars.palette.Switch[
                          "".concat(a.color, "DisabledColor")
                        ]
                      : "".concat(
                          "light" === t.palette.mode
                            ? (0, l.a)(t.palette[a.color].main, 0.62)
                            : (0, l.e$)(t.palette[a.color].main, 0.55)
                        ),
                  },
                },
                ["&.".concat(b.checked, " + .").concat(b.track)]: {
                  backgroundColor: (t.vars || t).palette[a.color].main,
                },
              }
            );
          }
        ),
        k = (0, u.Ay)("span", {
          name: "MuiSwitch",
          slot: "Track",
          overridesResolver: (e, t) => t.track,
        })((e) => {
          let { theme: t } = e;
          return {
            height: "100%",
            width: "100%",
            borderRadius: 7,
            zIndex: -1,
            transition: t.transitions.create(["opacity", "background-color"], {
              duration: t.transitions.duration.shortest,
            }),
            backgroundColor: t.vars
              ? t.vars.palette.common.onBackground
              : "".concat(
                  "light" === t.palette.mode
                    ? t.palette.common.black
                    : t.palette.common.white
                ),
            opacity: t.vars
              ? t.vars.opacity.switchTrack
              : "".concat("light" === t.palette.mode ? 0.38 : 0.3),
          };
        }),
        f = (0, u.Ay)("span", {
          name: "MuiSwitch",
          slot: "Thumb",
          overridesResolver: (e, t) => t.thumb,
        })((e) => {
          let { theme: t } = e;
          return {
            boxShadow: (t.vars || t).shadows[1],
            backgroundColor: "currentColor",
            width: 20,
            height: 20,
            borderRadius: "50%",
          };
        }),
        w = n.forwardRef(function (e, t) {
          const a = (0, h.A)({ props: e, name: "MuiSwitch" }),
            {
              className: n,
              color: l = "primary",
              edge: d = !1,
              size: u = "medium",
              sx: p,
            } = a,
            m = (0, r.A)(a, v),
            b = (0, o.A)({}, a, { color: l, edge: d, size: u }),
            w = ((e) => {
              const {
                  classes: t,
                  edge: a,
                  size: r,
                  color: n,
                  checked: c,
                  disabled: l,
                } = e,
                d = {
                  root: [
                    "root",
                    a && "edge".concat((0, s.A)(a)),
                    "size".concat((0, s.A)(r)),
                  ],
                  switchBase: [
                    "switchBase",
                    "color".concat((0, s.A)(n)),
                    c && "checked",
                    l && "disabled",
                  ],
                  thumb: ["thumb"],
                  track: ["track"],
                  input: ["input"],
                },
                h = (0, i.A)(d, g, t);
              return (0, o.A)({}, t, h);
            })(b),
            j = (0, A.jsx)(f, { className: w.thumb, ownerState: b });
          return (0,
          A.jsxs)(x, { className: (0, c.A)(w.root, n), sx: p, ownerState: b, children: [(0, A.jsx)(y, (0, o.A)({ type: "checkbox", icon: j, checkedIcon: j, ref: t, ownerState: b }, m, { classes: (0, o.A)({}, w, { root: w.switchBase }) })), (0, A.jsx)(k, { className: w.track, ownerState: b })] });
        });
    },
    3064: (e, t, a) => {
      a.d(t, { A: () => y });
      var r = a(8587),
        o = a(8168),
        n = a(5043),
        c = a(8795),
        i = a(8606),
        l = a(6803),
        s = a(4535),
        d = a(4516),
        h = a(5213),
        u = a(5429),
        p = a(7056),
        m = a(2400);
      function g(e) {
        return (0, m.Ay)("PrivateSwitchBase", e);
      }
      (0, p.A)("PrivateSwitchBase", [
        "root",
        "checked",
        "disabled",
        "input",
        "edgeStart",
        "edgeEnd",
      ]);
      var b = a(579);
      const A = [
          "autoFocus",
          "checked",
          "checkedIcon",
          "className",
          "defaultChecked",
          "disabled",
          "disableFocusRipple",
          "edge",
          "icon",
          "id",
          "inputProps",
          "inputRef",
          "name",
          "onBlur",
          "onChange",
          "onFocus",
          "readOnly",
          "required",
          "tabIndex",
          "type",
          "value",
        ],
        v = (0, s.Ay)(u.A)((e) => {
          let { ownerState: t } = e;
          return (0, o.A)(
            { padding: 9, borderRadius: "50%" },
            "start" === t.edge && { marginLeft: "small" === t.size ? -3 : -12 },
            "end" === t.edge && { marginRight: "small" === t.size ? -3 : -12 }
          );
        }),
        x = (0, s.Ay)("input")({
          cursor: "inherit",
          position: "absolute",
          opacity: 0,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1,
        }),
        y = n.forwardRef(function (e, t) {
          const {
              autoFocus: a,
              checked: n,
              checkedIcon: s,
              className: u,
              defaultChecked: p,
              disabled: m,
              disableFocusRipple: y = !1,
              edge: k = !1,
              icon: f,
              id: w,
              inputProps: j,
              inputRef: S,
              name: C,
              onBlur: R,
              onChange: P,
              onFocus: F,
              readOnly: z,
              required: B = !1,
              tabIndex: N,
              type: T,
              value: D,
            } = e,
            L = (0, r.A)(e, A),
            [M, I] = (0, d.A)({
              controlled: n,
              default: Boolean(p),
              name: "SwitchBase",
              state: "checked",
            }),
            q = (0, h.A)();
          let E = m;
          q && "undefined" === typeof E && (E = q.disabled);
          const O = "checkbox" === T || "radio" === T,
            X = (0, o.A)({}, e, {
              checked: M,
              disabled: E,
              disableFocusRipple: y,
              edge: k,
            }),
            _ = ((e) => {
              const { classes: t, checked: a, disabled: r, edge: o } = e,
                n = {
                  root: [
                    "root",
                    a && "checked",
                    r && "disabled",
                    o && "edge".concat((0, l.A)(o)),
                  ],
                  input: ["input"],
                };
              return (0, i.A)(n, g, t);
            })(X);
          return (0, b.jsxs)(
            v,
            (0, o.A)(
              {
                component: "span",
                className: (0, c.A)(_.root, u),
                centerRipple: !0,
                focusRipple: !y,
                disabled: E,
                tabIndex: null,
                role: void 0,
                onFocus: (e) => {
                  F && F(e), q && q.onFocus && q.onFocus(e);
                },
                onBlur: (e) => {
                  R && R(e), q && q.onBlur && q.onBlur(e);
                },
                ownerState: X,
                ref: t,
              },
              L,
              {
                children: [
                  (0, b.jsx)(
                    x,
                    (0, o.A)(
                      {
                        autoFocus: a,
                        checked: n,
                        defaultChecked: p,
                        className: _.input,
                        disabled: E,
                        id: O ? w : void 0,
                        name: C,
                        onChange: (e) => {
                          if (e.nativeEvent.defaultPrevented) return;
                          const t = e.target.checked;
                          I(t), P && P(e, t);
                        },
                        readOnly: z,
                        ref: S,
                        required: B,
                        ownerState: X,
                        tabIndex: N,
                        type: T,
                      },
                      "checkbox" === T && void 0 === D ? {} : { value: D },
                      j
                    )
                  ),
                  M ? s : f,
                ],
              }
            )
          );
        });
    },
  },
]);
//# sourceMappingURL=2625.9c874936.chunk.js.map
