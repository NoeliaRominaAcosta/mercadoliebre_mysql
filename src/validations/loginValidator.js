const {body} = require('express-validator')
const users = require('../data/usersDb.json')
const bcrypt = require('bcryptjs')
const bcryptjs = require('bcryptjs')
module.exports = [
  
    body('email')
        .notEmpty().withMessage('No puede estar vacío').bail(),
    body('password')
        .notEmpty().withMessage('No puede estar vacío').bail()
        .custom((value, {req})=>{
           const user = users.find(user => user.email === req.body.email)
           if(!user){
               return false
           }else{
               if(!bcryptjs.compareSync(value, user.password)){
                   return false
               }
           }
              return true
        }).withMessage('No coinciden'),
    

]