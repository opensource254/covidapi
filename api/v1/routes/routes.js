const router = require('express').Router()

// Define the routes here
router.get('/', (req, res, next) => {
    res.json('Api V1 Working 🚀')
})

module.exports = router