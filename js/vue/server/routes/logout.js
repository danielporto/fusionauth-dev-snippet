const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // delete the session
  req.session.destroy();

  // end FusionAuth session
  res.redirect(`${process.env.AUTH_SERVICE_URI}/oauth2/logout?client_id=${process.env.CLIENT_ID}`);
});

module.exports = router;
