const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");
const { result } = require("lodash");

const index2 = async(req,res)=>{
    const {email,password} = req.body;
    if(!emmail || !password)return res.json({ status : "error" , error: "Please enter your email and password" });
    else{
        db.query('SELECT email FROM users WHERE email = ?' , [email], async (err,result)=>{
            if(err)throw err;
            if(!result[0]|| !await bcrypt.compare(password,result[0].password))return res.json({ status:"error",error:"Incorrect Email or password"})
            else{
               const token = jwt.sign(result[0].id, process.env.JWT_SECRET,{
                expiresIn: process.env.JWT_EXPIRES,
                httpOnly: true
               })
               const cookieOptions={
                expiresIn: new Date(Date.now()+process.env.COOKIE_EXPIRES *24 * 60 * 60 *1000),
                httpOnly:true
               }
               res.cookie("userRegistered",token, cookieOptions);
               return res.json({ status:"success", success: "user has been logged IN"});
         

            }
        })
    }
}
module.exports = index2;