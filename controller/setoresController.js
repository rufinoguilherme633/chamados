const setores = require("../models/setoresModel");
const status_solicitacao = require("../models/statusSolicitacaoModel")

const user = require('../models/usuarioModel')
module.exports = {
   listarSetores(req,res){

    let listarSetores = setores.listarSetores();
    let listaStatus = status_solicitacao.listarStatusSolicitacao()
    let dadosusuario = user.dadosUsuario(req.session.userId)
   console.log(req.session.userId)
    res.render("home",{
        setores:listarSetores,
        status_solicitacao:listaStatus ,
        user: dadosusuario
    })
   } 
}