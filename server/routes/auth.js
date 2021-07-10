const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../model/userSchema")

router.get("/", (req, res) => {
    res.send("Hello World auth .js");

});
 
// Using promises
// router.post('/register', (req, res) => {

//     const { name, email, phone, work, password, cpassword} = req.body;
    
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Plz filled the field properly" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already Exist" });
//             }
            
//             const user = new User({ name, email, phone, work, password, cpassword });

//             user.save().then(() => {
//                 res.status(201).json({ message: "user registered successfuly" });
//             }).catch((err) => res.status(500).json({ error: "Failed to registered" }));
            
//         }).catch(err => { console.log(err); });

// });


// USing async await
 router.post('/register', async(req, res) => {

   try {
    const { name, email, phone, work, password, cpassword} = req.body;
    
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled the field properly" });
    }

        
       const userExist =  await User.findOne({ email: email })
        
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }else if(password!=password){
             return res.status(422).json({ error: "Password didn't matched" });
        }else{
               
        const user = new User({
          name,
          email,
          phone,
          work,
          password,
          cpassword,
        });

        // there is  a middeleware
        const userRegister = await user.save();
        res.status(201).json({ message: "user registered successfuly" });
        }
       
    } catch (err) {
        console.log(err);
    }

});

router.post("/signin",async (req,res) => {
  let token;
    try {
      const { email, password } = req.body;
      //    const hashPassword = await bcrypt.hash(password,10);
      if (!email || !password) {
        return res.status(400).json({ error: "Pls filled the field properly" });
      }

      const userLogin = await User.findOne({ email: email });

      if(userLogin){
              const matched = await bcrypt.compare(password, userLogin.password);

               token = await userLogin.generateAuthToken();
               console.log(token);

               res.cookie("jwtoken",token,{
                 expires:new Date(Date.now() + 25920000000),
                 httpOnly:true
               });
              //  console.log(userLogin);
              if (!matched) {
                 res.status(201).json({ error: "Invalid Credentials pass" });
              }
              res.status(200).json({ message: "User loged in successfully" });
      }else {
          res.status(400).json({error:"Invalid Credentials"});
      }
      
    } catch (err) {
      console.log(err);
    }

});

module.exports = router;