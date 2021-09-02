const router = require('express').Router();
const apiRoutes = require('./api');

// api/apiRoutes
router.use('/api', apiRoutes)

router.use((req, res) => {
  res.status(404).send('404 Error!');
});

module.exports = router;
