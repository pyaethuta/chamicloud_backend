const User = require('../models/user');
// const bcrypt = require('bcrypt');
const argon2 = require('argon2');

// Sign Up 
exports.SignUp = (req, res) => {
    User.findOne({ email: req.body.email })
    .exec(async (error, user) => {

        // email chk
        if(user) return res.status(400).json({ 
            message: 'This email already has an account'
        }); 

        // email not exist => data get from body
        const { firstname, lastname, email, password } = req.body;

        // encrypt 
        const argon2 = require('argon2');
        try {
          const hash_password = await argon2.hash(String(password));
          
          if(hash_password){
              // use insert 
        const user2 = new User({
            firstname, lastname, email, hash_password
        });

        user2.save((err, data) =>{

            if(err){
                return res.status(400).json({
                    message: 'Something went wrong'
                });
                }
        
                if(data){
                return res.status(201).json({
                message: 'User created Successfully...!'
                });
                }
            });
          }
        } catch (err) {
            console.log(err);
        }

        

        


    })
}