module.exports = function (app) {
  app.use(function (_, res, next) {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    next();
  });
};
