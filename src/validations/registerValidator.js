const {body} = require('express-validator')

module.exports = [
    body('name')
        .notEmpty().withMessage('No puede estar vacío').bail(),
    body('surname')
        .notEmpty().withMessage('No puede estar vacío').bail(),
    body('email')
        .notEmpty().withMessage('No puede estar vacío').bail()
        .isEmail().withMessage('debe ser un email válido'),
        
    body('password')
        .notEmpty().withMessage('No puede estar vacío').bail(),
    body('password2')
        .notEmpty().withMessage('No puede estar vacío').bail()
        .custom((value,{req})=> {
            if(value !== req.body.password){
                return false
            }
            return true
        }).withMessage('las contraseñas no coinciden'),
    body('checkbox')
        .isString().withMessage('acepta terminos y condiciones')

]