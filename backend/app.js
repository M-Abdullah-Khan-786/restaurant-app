const express = require('express')
const app = express()
const dotenv = require("dotenv")
dotenv.config({ path: "./config/.env" })
const morgan = require("morgan")
const bodyparser = require("body-parser")
const cors = require("cors")


const connectdb = require("./database/connectdb")
const { errorMiddleware } = require('./middleware/errorMiddleware')
const reservationRouter = require("./routers/reservationRouter")

const corsOptions = {
    origin: process.env.FRONTEND_URI,
    methods: ["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus: 200
}

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(cors(corsOptions))

app.use("/api/v1/reservation", reservationRouter)

connectdb()

app.use(errorMiddleware)

module.exports = app