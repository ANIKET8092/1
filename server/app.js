const express =  require("express" );
const dotenv = require("dotenv")
const mongoose =  require("mongoose" );

const app = express();

dotenv.config({ path : './config.env'});
require("./db/conn");

app.use(express.json());
// const user = require("./model/userSchema");


// routes linkage
const auth = require("./routes/auth");
app.use("/",auth);

const PORT= process.env.PORT;




// const middleware = (req,res,next) => {
//         console.log("hello");
//         next();
// }



// app.get("/", (req,res) =>{
// res.send("Hello world app js !")
// })

app.get("/about", (req,res) =>{
res.send("Hello world to about !")
})
app.get("/contact", (req,res) =>{
res.send("Hello world to contact !")
})

app.get("/signin", (req,res) =>{
res.send("Hello world to signin !")
})

app.get("/signup", (req,res) =>{
res.send("Hello world to signup !")
})

app.listen(PORT, () =>{
    console.log(`Server is started at port ${PORT}`);
})



// "mongodb://localhost:27017/mernstack";
