module.exports = (req,res,next) =>{
   /* Checking if the user is logged in. */
    if(req.session.userLogueado){
        res.locals.userLogueado = req.session.userLogueado
    }
    next()
}