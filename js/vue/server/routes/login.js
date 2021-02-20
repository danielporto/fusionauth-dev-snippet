const express = require('express');
const router = express.Router();
const pkceChallenge = require('pkce-challenge');

router.get('/', (req, res) => {
  //generate the pkce challenge/verifier dict
  pkce_pair = pkceChallenge();
  // Store the PKCE verifier in session
  req.session.verifier = pkce_pair['code_verifier']
  const stateValue = Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
  req.session.stateValue = stateValue
  // the redirect url must be created in fusionauth otherwise it will fail.
  res.redirect(`${process.env.AUTH_SERVICE_URI}/oauth2/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.JS_BACKEND_SERVER_URI}/oauth-callback&state=${stateValue}&code_challenge=${pkce_pair['code_challenge']}&code_challenge_method=S256`);
});

module.exports = router;