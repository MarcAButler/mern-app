const express = require("express")
const recordRoutes = express.Router()
// const dbo = require("../db/conn")
// const ObjectId = require("mongodb").ObjectId

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(async function (req, res) {
    // const db_connect = dbo.getDb()
    try {
        // const result = await db_connect.collection("records").find({}).toArray()
        res.status(200).json("HELLO WORLD")
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

module.exports = recordRoutes
