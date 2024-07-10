"use strict";
(self.webpackChunkmatx_react = self.webpackChunkmatx_react || []).push([
  [2679],
  {
    2679: (e, a, s) => {
      s.r(a), s.d(a, { default: () => w });
      var r = s(5043),
        n = s(3216),
        i = s(4535),
        t = s(6946),
        l = s(6240),
        d = s(2110),
        o = s(8903),
        u = s(2788),
        m = s(2812),
        c = s(1135),
        h = s(899),
        p = s(6213),
        x = s(579);
      const g = (0, i.Ay)(t.A)(() => ({ display: "flex" })),
        y = (0, i.Ay)("div")(() => ({
          height: "100%",
          padding: "32px",
          position: "relative",
          background: "rgba(0, 0, 0, 0.01)",
        })),
        j = (0, i.Ay)("div")(() => ({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A2038",
          minHeight: "100% !important",
          "& .card": {
            maxWidth: 800,
            minHeight: 400,
            margin: "1rem",
            display: "flex",
            borderRadius: 12,
            alignItems: "center",
          },
          ".img-wrapper": {
            height: "100%",
            minWidth: 320,
            display: "flex",
            padding: "2rem",
            alignItems: "center",
            justifyContent: "center",
          },
        })),
        v = h.Ik().shape({
          password: h
            .Yj()
            .min(6, "Password must be 6 character length")
            .required("Password is required!"),
          username: h.Yj().required("Username is required!"),
        });
      function w() {
        (0, l.A)();
        const e = (0, n.Zp)(),
          [a, s] = (0, r.useState)(!1),
          [i, t] = (0, r.useState)("");
        return (0, x.jsx)(j, {
          children: (0, x.jsx)(d.A, {
            className: "card",
            children: (0, x.jsxs)(o.Ay, {
              container: !0,
              children: [
                (0, x.jsx)(o.Ay, {
                  item: !0,
                  sm: 6,
                  xs: 12,
                  children: (0, x.jsx)("div", {
                    className: "img-wrapper",
                    children: (0, x.jsx)("h1", { children: "NEIKO" }),
                  }),
                }),
                (0, x.jsx)(o.Ay, {
                  item: !0,
                  sm: 6,
                  xs: 12,
                  children: (0, x.jsx)(y, {
                    children: (0, x.jsx)(c.l1, {
                      initialValues: { username: "", password: "" },
                      validationSchema: v,
                      onSubmit: async (a) => {
                        s(!0), t("");
                        try {
                          const s = await p.A.post(
                              "https://api-neiko.site/api/users/login",
                              a
                            ),
                            { user: r } = s.data;
                          r.isAdmin
                            ? (localStorage.setItem("userId", r._id),
                              e("/dashboard/default"))
                            : t(
                                "B\u1ea1n kh\xf4ng c\xf3 quy\u1ec1n truy c\u1eadp v\xe0o trang qu\u1ea3n tr\u1ecb."
                              );
                        } catch (i) {
                          var r, n;
                          t(
                            (null === (r = i.response) ||
                            void 0 === r ||
                            null === (n = r.data) ||
                            void 0 === n
                              ? void 0
                              : n.message) ||
                              "C\xf3 l\u1ed7i x\u1ea3y ra khi \u0111\u0103ng nh\u1eadp."
                          );
                        } finally {
                          s(!1);
                        }
                      },
                      children: (e) => {
                        let {
                          values: s,
                          errors: r,
                          touched: n,
                          handleChange: t,
                          handleBlur: l,
                          handleSubmit: d,
                        } = e;
                        return (0, x.jsxs)("form", {
                          onSubmit: d,
                          children: [
                            (0, x.jsx)(u.A, {
                              fullWidth: !0,
                              size: "small",
                              type: "text",
                              name: "username",
                              label: "Username",
                              variant: "outlined",
                              onChange: t,
                              onBlur: l,
                              value: s.username,
                              error: n.username && Boolean(r.username),
                              helperText: n.username && r.username,
                              sx: { mb: 3 },
                            }),
                            (0, x.jsx)(u.A, {
                              fullWidth: !0,
                              size: "small",
                              name: "password",
                              type: "password",
                              label: "Password",
                              variant: "outlined",
                              onChange: t,
                              onBlur: l,
                              value: s.password,
                              error: n.password && Boolean(r.password),
                              helperText: n.password && r.password,
                              sx: { mb: 1.5 },
                            }),
                            (0, x.jsx)(g, {
                              justifyContent: "space-between",
                              children: (0, x.jsx)(g, { gap: 1 }),
                            }),
                            (0, x.jsx)(m.A, {
                              fullWidth: !0,
                              type: "submit",
                              color: "primary",
                              loading: a,
                              variant: "contained",
                              sx: { my: 2 },
                              children: "\u0110\u0103ng nh\u1eadp",
                            }),
                            i &&
                              (0, x.jsx)("div", {
                                style: { color: "red", marginTop: 10 },
                                children: i,
                              }),
                          ],
                        });
                      },
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
  },
]);
//# sourceMappingURL=2679.c11b17a4.chunk.js.map
