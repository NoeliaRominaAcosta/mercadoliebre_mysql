module.exports = (req,res,next) => {
   /* Checking if the user is logged in and if the user is an admin. */
    if(req.session.userLogueado && req.session.userLogueado.rol === "admin"){
        next()
    }else{
        res.redirect('/')
    }
}