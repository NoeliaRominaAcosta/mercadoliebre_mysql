module.exports = (req,res,next) => {
  /* Checking if the user is logged in. */
    if(req.session.userLogueado){
        next()
    }else{
        res.redirect('/users/login')
    }
}