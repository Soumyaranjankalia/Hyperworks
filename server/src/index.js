const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const connect=require("./config/db");
app.use(express.json())
const port=process.env.PORT || 5100;
const dotenv = require('dotenv');
dotenv.config();
const { register, login, newToken, getUser } = require('./controller/auth.controller.js')
const userController= require('./controller/user.controller')



app.get('/user', getUser);
app.post("/register", register);
app.post("/login", login);

app.use('/users', userController);


app.listen(port,async()=>{
    try
        {
            await connect();
        }
    catch(err)
        {
            console.log({err:err.message})
        }

    console.log(`listening on port ${port}`)

})


module.exports = app;