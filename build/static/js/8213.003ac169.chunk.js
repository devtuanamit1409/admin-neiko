"use strict";
(self.webpackChunkmatx_react = self.webpackChunkmatx_react || []).push([
  [8213],
  {
    8213: (e, t, a) => {
      a.r(t), a.d(t, { default: () => M });
      var n = a(5043),
        s = a(6946),
        r = a(2788),
        l = a(3404),
        i = a(9650),
        c = a(3336),
        d = a(1806),
        o = a(4882),
        h = a(8076),
        u = a(2420),
        x = a(3460),
        y = a(8911),
        p = a(3691),
        A = a(2555),
        j = a(7254),
        g = a(6213),
        m = a(8390),
        C = a(3306),
        b = a(9854),
        f = a(1230),
        v = a(9525),
        S = a(579);
      const M = () => {
        const [e, t] = (0, n.useState)([]),
          [a, M] = (0, n.useState)(1),
          [k, w] = (0, n.useState)(0),
          [D, T] = (0, n.useState)(new Date()),
          [F, I] = (0, n.useState)(new Date()),
          [L, N] = (0, n.useState)(!1),
          [_, E] = (0, n.useState)(""),
          [H, P] = (0, n.useState)("success"),
          $ = async () => {
            try {
              const e = (
                await g.A.get("https://api-neiko.site/api/users/with-balance", {
                  params: {
                    page: a,
                    limit: 10,
                    startDate: (0, v.A)(D, "dd/MM/yyyy"),
                    endDate: (0, v.A)(F, "dd/MM/yyyy"),
                  },
                })
              ).data;
              t(e.users), w(e.totalPages);
            } catch (s) {
              var e, n;
              P("error"),
                E(
                  (null === (e = s.response) ||
                  void 0 === e ||
                  null === (n = e.data) ||
                  void 0 === n
                    ? void 0
                    : n.message) || "C\xf3 l\u1ed7i x\u1ea3y ra"
                ),
                N(!0);
            }
          };
        (0, n.useEffect)(() => {
          $();
        }, [a, D, F]);
        return (0, S.jsxs)(s.A, {
          children: [
            (0, S.jsxs)(s.A, {
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              children: [
                (0, S.jsxs)(m.$, {
                  dateAdapter: b.h,
                  locale: f.A,
                  children: [
                    (0, S.jsx)(C.l, {
                      label: "Ng\xe0y b\u1eaft \u0111\u1ea7u",
                      value: D,
                      onChange: (e) => T(e),
                      renderInput: (e) => (0, S.jsx)(r.A, { ...e }),
                      inputFormat: "dd/MM/yyyy",
                    }),
                    (0, S.jsx)(C.l, {
                      label: "Ng\xe0y k\u1ebft th\xfac",
                      value: F,
                      onChange: (e) => I(e),
                      renderInput: (e) => (0, S.jsx)(r.A, { ...e }),
                      inputFormat: "dd/MM/yyyy",
                    }),
                  ],
                }),
                (0, S.jsx)(l.A, {
                  variant: "contained",
                  color: "primary",
                  onClick: $,
                  children: "L\u1ea5y danh s\xe1ch",
                }),
              ],
            }),
            (0, S.jsx)(i.A, {
              component: c.A,
              children: (0, S.jsxs)(d.A, {
                "aria-label": "simple table",
                children: [
                  (0, S.jsx)(o.A, {
                    children: (0, S.jsxs)(h.A, {
                      children: [
                        (0, S.jsx)(u.A, {
                          align: "center",
                          children: "T\xean ng\u01b0\u1eddi d\xf9ng",
                        }),
                        (0, S.jsx)(u.A, {
                          align: "center",
                          children: "T\u1ed5ng hoa h\u1ed3ng",
                        }),
                      ],
                    }),
                  }),
                  (0, S.jsx)(x.A, {
                    children: e.map((e) =>
                      (0, S.jsxs)(
                        h.A,
                        {
                          children: [
                            (0, S.jsx)(u.A, {
                              align: "center",
                              children: e.name,
                            }),
                            (0, S.jsx)(u.A, {
                              align: "center",
                              children: e.totalCommission.toLocaleString(),
                            }),
                          ],
                        },
                        e.name
                      )
                    ),
                  }),
                ],
              }),
            }),
            (0, S.jsx)(y.A, {
              sx: {
                paddingTop: "15px",
                display: "flex",
                justifyContent: "center",
              },
              spacing: 2,
              children: (0, S.jsx)(p.A, {
                count: k,
                page: a,
                color: "primary",
                onChange: (e, t) => {
                  M(t);
                },
              }),
            }),
            (0, S.jsx)(A.A, {
              open: L,
              autoHideDuration: 6e3,
              onClose: () => N(!1),
              children: (0, S.jsx)(j.A, {
                onClose: () => N(!1),
                severity: H,
                children: _,
              }),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=8213.003ac169.chunk.js.map
