const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://soban:XJvR1XEkAUQr4UOT@cluster0.aobwbkk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log(`Successfully Connected to Mongodb`);
    }).catch((e) => {
        console.log("Unable to Connect to Mongodb ", e);
    })

