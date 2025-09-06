const status_solicitacao =  [
    { "id": 1, "status": "Aberto", "descricao": "Chamado criado, aguardando atendimento" },
    { "id": 2, "status": "Andamento", "descricao": "Chamado sendo tratado" },
    { "id": 3, "status": "Fechado", "descricao": "Chamado resolvido" },
    { "id": 4, "status": "Cancelado", "descricao": "Chamado cancelado pelo usuário" }
  ]


  module.exports = {
      listarStatusSolicitacao(){
        return  status_solicitacao.map(status =>( 
            {
              id:status.id,
              status: status.status

            }));
      }
  }
  