const UserCredentials = require('../../models/Users/UserCredentialsModel')

async function logIn(req, res) {
    const body = req.body;
    const credential = await UserCredentials.findOne({where: {email: body['email']}});
    if (!credential) {
        return res.status(404).json({error: "User not found"});
    }
    if (UserCredentials.validatePassword(body['password'], credential.password_salt, credential.password_hash)) {
        return res.status(200).json({
            email: credential.email,
            token: credential.generateJWT(credential)
        }); // JWT
    } else {
        return res.status(400).json({mensaje: "Password Incorrecto"});
    }
}

module.exports = logIn;