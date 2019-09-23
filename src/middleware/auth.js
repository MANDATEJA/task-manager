const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'keytosigntoken')
        const user = await User.findOne( { _id: decoded._id, 'tokens.token': token }) // find a user with the ID and token passed
        
        if(!user) {
            throw new Error()
        }

        req.token = token
        req.user = user // gives route handler access to the user that we fetched from the database so thre is no need for the route handler to fetch the user again
        next()
    } catch(e) {
        res.status(401).send({ error: 'Please authrnticate' })
    }
}

module.exports = auth