const routerx = require('express-promise-router');
// Routers
const chainRouter = require('./chain');
// Instances
const router = routerx();

router.use('/chain', chainRouter);

module.exports = router;