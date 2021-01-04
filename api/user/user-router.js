const express = require('express')
const User = require('./user-modal')
const router = express.Router()
const restrict = require('../auth/restricted-middleware')

router.get("/users", restrict, (req, res) => {
    User.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => res.send(err))
})
