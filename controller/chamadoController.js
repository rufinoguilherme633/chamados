const chamadoModel = require("../models/chamadoModel");

const usuarioModel = require("../models/usuarioModel");
const chamadosModel = require("../models/chamadoModel")

const statusMap = {
    "aberto": 1,
    "andamento": 2,
    "fechado": 3
};

module.exports = {

    paginaChamado(req,res){

        res.render("paginaChamado");
    },

    fazerChamado(req,res){

        if (!req.session.userId) {
            console.log("não logado")
            return
        }   
        let usuario = usuarioModel.dadosUsuario(req.session.userId)
        let data = new Date();
        let chamado = {
            "titulo": req.body.titulo,
            "descricao_problema": req.body.descricao_problema,
            "foto":req.body.foto || null,
            "status_id": 1,
            "prioridade_id": 1,
            "usuario_abertura_id": usuario.id,
            "usuario_responsavel_id": null,
            "setor_id": 1,
            "data_abertura": data,
            "data_fechamento": null
        }
        const fazerChamado = chamadoModel.fazerChamado(chamado)
        if(fazerChamado){
            console.log("deu certo")
        }else{
            console.log("não deu");
        }

        res.redirect("home");
        return fazerChamado.id
    },

        paginaMeusChamado(req, res) {
        const statusParam = req.params.status_id;
        const status_id = statusMap[statusParam] || parseInt(statusParam);
        const userId = parseInt(req.session.userId);

        const lista = chamadoModel.listaChamadosPorStatus(status_id, userId);
        res.render("paginaMeusChamado", { chamados: lista });
    },

      acaoChamado(req, res) {
        const id = req.body.id;
        const acao = req.body.acao; // "editar" ou "cancelar"
        const userId = req.session.userId;

        // Pega dados do chamado antes de alterar
        const chamado = chamadoModel.dadosChamado(id);
        const status_id = chamado.status_id;

        if (acao === "cancelar") {
            chamadoModel.cancelarMeuChamado(id, userId);
        } else if (acao === "editar") {
            const dados = {
                titulo: req.body.titulo,
                descricao_problema: req.body.descricao_problema
            };
            chamadoModel.editarChamado(id, userId, dados);
        }

        // Renderiza a lista do mesmo status
        const lista = chamadoModel.listaChamadosPorStatus(status_id, userId);
        res.render("paginaMeusChamado", { chamados: lista });
    },
    aberto(req,res){

        res.render("paginaMeusChamado",{chamados:chamadoModel.listaChamadosPorStatus(1,req.session.userId)});
    },

    cancelarMeuChamado(req,res){
        let chamado = chamadoModel.dadosChamado(req.params.id)
        chamadoModel.cancelarMeuChamado(req.params.id,req.session.userId);

        res.render("paginaMeusChamado",{chamados:chamadoModel.listaChamadosPorStatus(chamado.status_id,req.session.userId)});
    },
    editarChamado(req,res){

        let dados = {

          titulo : req.body.titulo,
          descricao_problema : req.body.descricao_problema
        }

        chamadoModel.editarChamado(
            req.params.id,
            req.session.userId,
            dados
            
        );
        
        res.render("paginaMeusChamado",{chamados:chamadoModel.listaChamadosPorStatus(1,req.session.userId)});
    }

  
}