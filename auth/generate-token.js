const jwt = require('jsonwebtoken');

function genToken(user) {
    const jwtSecret = process.env.JWT_SECRET || 'bluegreencyan';

    const payload = {
        id: user.id,
        username: user.username
    };

    const options = { expiresIn: '8h' };

    const signedToken = jwt.sign(payload, jwtSecret, options);

    return signedToken;
};

module.exports = genToken;