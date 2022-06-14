const {validationResult} = require('express-validator')
const users = require('../data/usersDb.json')
const bcryptjs = require('bcryptjs')
const fs = require('fs')
const path = require('path')
module.exports = {
    register : (req,res) => {
        return res.render('register')
    },
    processRegister : (req,res)=>{
        const errors = validationResult(req);
        if(errors.isEmpty()){
            //guardar
           // let lastId = users[users.length - 1].id   la ultima posicion
           let {name, surname, email, password} = req.body
           let lastId = users.length !== 0 ? users[users.length - 1].id : 0;
           let user = {
                id  : lastId +1,
                name : name.trim(),
                surname : surname.trim(),
                email :email.trim(),
                password : bcryptjs.hashSync(password, 10), //encriptado
                avatar : "default.img", //default image
                rol : "user" //default rol
            }
            users.push(user)
            fs.writeFileSync(path.resolve(__dirname,".", "data", "usersDb.json", JSON.stringify(users, null, 3),'utf-8'))
           
        
        //levantar sesion
            const {id, rol} = user
            req.session.userLogueado = {
                id, 
                name :name.trim(), 
                rol
            }
        //redireccionar 

        return res.redirect('/')
        }else{
            return res.render('register', {
                old : req.body,
                errors : errors.mapped()
            })
        }
    },
    login : (req,res) => {
        return res.render('login')
    },
    processLogin : (req,res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            const {id, name, rol} = users.find(user => user.email === req.body.email)

            req.session.userLogueado = {
                id,
                name,
                avatar,
                rol
            }

            return res.redirect("/");
        }else{
            return res.render('login', {
                old : req.body,
                errors : errors.mapped()
            })
        }
    },
    profile: (req, res) => {
        return res.render("profile");
      },

}