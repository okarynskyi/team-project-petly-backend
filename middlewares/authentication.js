const jwt = require('jsonwebtoken');
const {User} = require('../models')
const { HttpError} = require('../helpers');

const { JWT_SECRET } = process.env;

const authentication = async (req, res, next) => {
    const {authorization = ""} = req.headers;
    const [bearer, token] = authorization.split(' ');

    if (!token || bearer !== "Bearer") {
        next(HttpError(401));
    }

    try {
        const { id } = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(id);

        if(!user || !user.token) {
            next(HttpError(401))
        }

        req.user = user;
        next();
    }
    catch (error) {
        next(HttpError(401, "Not authorized"));
    }
}

module.exports = authentication