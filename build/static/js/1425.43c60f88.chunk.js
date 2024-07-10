"use strict";
(self.webpackChunkmatx_react = self.webpackChunkmatx_react || []).push([
  [1425],
  {
    1425: (e, n, t) => {
      t.r(n), t.d(n, { default: () => u });
      var c = t(5043),
        a = t(9650),
        r = t(3336),
        s = t(1806),
        i = t(4882),
        d = t(8076),
        o = t(2420),
        l = t(3460),
        h = t(3404),
        p = t(8911),
        x = t(3691),
        g = t(5475),
        j = t(6213),
        A = t(579);
      const u = function () {
        const [e, n] = (0, c.useState)([]),
          [t, u] = (0, c.useState)(0),
          [m, f] = (0, c.useState)(0);
        return (
          (0, c.useEffect)(() => {
            (async () => {
              try {
                const e = (
                  await j.A.get(
                    "https://api-neiko.site/api/products?page=".concat(t + 1)
                  )
                ).data;
                n(e.products), f(e.totalPages);
              } catch (e) {
                console.error("Error fetching data:", e);
              }
            })();
          }, [t]),
          (0, A.jsxs)(A.Fragment, {
            children: [
              (0, A.jsx)("div", {
                className: "main-btn-add",
                children: (0, A.jsx)(g.N_, {
                  className: "btn-add-product",
                  to: "/dashboard/add-product",
                  children: "Th\xeam s\u1ea3n ph\u1ea9m",
                }),
              }),
              (0, A.jsx)(a.A, {
                component: r.A,
                children: (0, A.jsxs)(s.A, {
                  "aria-label": "simple table",
                  children: [
                    (0, A.jsx)(i.A, {
                      children: (0, A.jsxs)(d.A, {
                        children: [
                          (0, A.jsx)(o.A, {
                            align: "center",
                            children: "T\xean s\u1ea3n ph\u1ea9m",
                          }),
                          (0, A.jsx)(o.A, {
                            align: "center",
                            children: "\u1ea2nh s\u1ea3n ph\u1ea9m",
                          }),
                          (0, A.jsx)(o.A, {
                            align: "center",
                            children: "Ng\xe0y T\u1ea1o",
                          }),
                          (0, A.jsx)(o.A, {
                            align: "center",
                            children: "H\xe0nh \u0111\u1ed9ng",
                          }),
                        ],
                      }),
                    }),
                    (0, A.jsx)(l.A, {
                      children: e.map((t) =>
                        (0, A.jsxs)(
                          d.A,
                          {
                            children: [
                              (0, A.jsx)(o.A, {
                                align: "center",
                                component: "th",
                                scope: "row",
                                children: t.name,
                              }),
                              (0, A.jsx)(o.A, {
                                align: "center",
                                children: (0, A.jsx)("img", {
                                  src: "https://api-neiko.site/".concat(
                                    t.image
                                  ),
                                  width: "70px",
                                  alt: "",
                                }),
                              }),
                              (0, A.jsx)(o.A, {
                                align: "center",
                                component: "th",
                                scope: "row",
                                children: new Date(
                                  t.createdAt
                                ).toLocaleDateString(),
                              }),
                              (0, A.jsxs)(o.A, {
                                align: "center",
                                children: [
                                  (0, A.jsx)(g.N_, {
                                    to: "/dashboard/edit-product/".concat(
                                      t._id
                                    ),
                                    children: "S\u1eeda",
                                  }),
                                  (0, A.jsx)(h.A, {
                                    onClick: () =>
                                      (async (t) => {
                                        try {
                                          await j.A.delete(
                                            "https://api-neiko.site/api/products/".concat(
                                              t
                                            )
                                          ),
                                            n(e.filter((e) => e._id !== t));
                                        } catch (c) {
                                          console.error(
                                            "Error deleting product:",
                                            c
                                          );
                                        }
                                      })(t._id),
                                    color: "secondary",
                                    children: "Xo\xe1",
                                  }),
                                ],
                              }),
                            ],
                          },
                          t._id
                        )
                      ),
                    }),
                  ],
                }),
              }),
              (0, A.jsx)(p.A, {
                sx: {
                  paddingTop: "15px",
                  display: "flex",
                  justifyContent: "end",
                },
                spacing: 2,
                children: (0, A.jsx)(x.A, {
                  count: m,
                  page: t + 1,
                  color: "primary",
                  onChange: (e, n) => {
                    u(n - 1);
                  },
                }),
              }),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=1425.43c60f88.chunk.js.map
