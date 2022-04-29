const router = require("express").Router();
const homeRouters = require("./home-routers.js");
const dashboardRouters = require("./dashboard-routes");
const apiRoutes = require("./api");

router.use("/", homeRouters);
router.use("/api", apiRoutes);
router.use("/api", dashboardRouters);

module.exports = router;
