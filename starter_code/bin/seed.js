require("dotenv").config();

const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const salt = bcrypt.genSaltSync(bcryptSalt);

const dbURL = process.env.DBURL;

const users = [{
    name: "Kike",
    email: "Pesadico@gmail.com",
    password: bcrypt.hashSync("1234", salt)
},
{
    name: "Diego",
    email: "Barbas@gmail.com",
    password: bcrypt.hashSync("2222", salt)
}]

mongoose.connect(dbURL, {
    useMongoClient: true
})
    .then(()=>{
        console.log("connect to database")
        User.create(users)
        .then(()=>{
            mongoose.disconnect();
        })
    })