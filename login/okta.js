const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');

app.use(session({
  secret: 'this should be secure',
  resave: true,
  saveUninitialized: false
}));

const oidc = new ExpressOIDC({
  issuer: 'https://dev-635962.oktapreview.com/oauth2/default',
  client_id: '{clientId}',
  client_secret: '{clientSecret}',
  redirect_uri: 'http://localhost:3000/authorization-code/callback',
  scope: 'openid profile'
});

app.use(oidc.router);

token
00H_Y366EQwID0mtO5SpIBuGBRggek0TkbGbnjqwLC

cryptotoken
006FGI5KnfoFs690pBd-xaLO_DReEHPe1CjiEzvtgj
