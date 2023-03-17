const mongoose = require("mongoose");

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)
                .then((res) => {console.log("Connected!");})
                .catch((err) => {console.error(err)});

}

module.exports = connectDB;