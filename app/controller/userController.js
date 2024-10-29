const Users = require('../model/Users')
class UserController{
    async guardar(req, res) {
        try {
            const body = req.body;
    
            // Validación de datos de entrada
            if (!body.email || !body.name || !body.password) {
                return res.status(400).json({
                    exito: false,
                    estado: 400,
                    mensaje: 'Faltan datos requeridos: email, name y password son obligatorios.'
                });
            }
    
            // Si se desea, puedes agregar más validaciones aquí, como formato de email, longitud de la contraseña, etc.
    
            const users = new Users(body.email, body.name, body.password);
            const resgGuardar = await users.guardar();
            
            if (!resgGuardar.exito) {
                return res.status(resgGuardar.estado).json(resgGuardar);
            }
            
            res.status(201).json(resgGuardar); // 201 Created
        } catch (error) {
            res.status(500).json({
                exito: false,
                estado: 500,
                mensaje: 'Error al guardar el usuario: ' + error.message
            });
        }
    }

    async listar(req, res){
        res.json({
            success: true,
            message: 'exito',
            result: [
                {
                    email: 'micha@gmail.com',
                    name: 'micha',
                    password: '123456789'

                }
            ]
            });
    }
}

module.exports = new UserController;