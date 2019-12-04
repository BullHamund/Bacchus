const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

router.use("/main", apiRoutes);

module.exports = router;
