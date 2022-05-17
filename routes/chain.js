const routerx = require("express-promise-router");
const chain = require("../controller/chain");
// Instance
const router = routerx();

router.get("/test", chain.getInfo);

module.exports = router;