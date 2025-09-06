const usuario = require("../models/usuarioModel");


module.exports = {
     login(req,res){
        let email = req.body.email;
        let senha = req.body.senha;

        const userId = usuario.login(email,senha)
        
        if(userId ==false){
            console.log("usuario não existe ou senha e email incorreto")
            return res.render("login",{erro:"Email ou senha inválidos"});
        }

        req.session.userId = userId;
        return res.redirect("/home");
    },

    paginaLogin(req,res){
        return res.render("login");
        
    }



}