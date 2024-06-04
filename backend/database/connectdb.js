const mongoose = require("mongoose")

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "reservation-details"
        });
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log(`Database error occurs: ${error}`)
        process.exit(1)
    }
}

module.exports = connectdb