const db = require("../routes/db-config");
const bcrypt = require("bcryptjs")

const index1 = async(req,res)=>{
    const{username , email , password:Npassword}=req.body
    if(!username||!email || !Npassword)return res.json({status:"error",error:"Please enter your name email and password"});
    else{
        console.log(email);
        db.query('SELECT username FROM users WHERE username = ?',[username],async(err,result)=>{
            if(err) throw err;
            if(result[0])return res.json({status:"error",error:"Email has already been registered"})
            else{
        const password = bcrypt.hash(Npassword,8)};
        console.log(password);
        db.query('INSERT INTO users SET ?',{username:username,email:email,password:password},(error,results)=>{
            if(error)throw error;
            return res.json({status:"success",success:"user has been registered"})
        })
        })
    }
} 
module.exports = index1;