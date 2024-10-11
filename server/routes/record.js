const express = require("express")
const recordRoutes = express.Router()

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(async function (req, res) {
    try {
        res.status(200).json("HELLO WORLD")
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

module.exports = recordRoutes
