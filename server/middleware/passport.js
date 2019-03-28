const models = require('../models');

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

module.exports = passport => { 
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        models.user.findOne({where: {email: jwt_payload.email}})
        .then(res =>   done(null, res))
        .catch(err =>  done(err, false))
    }));
};
