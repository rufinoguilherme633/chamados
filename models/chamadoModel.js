let chamados =  [
    {
      "id": 101,
      "titulo": "Erro no sistema de relatórios",
      "descricao_problema": "Não consigo gerar relatório mensal, aparece erro de banco de dados.",
      "foto": "erro_relatorio.png",
      "status_id": 1,
      "prioridade_id": 3,
      "usuario_abertura_id": 1,
      "usuario_responsavel_id": 2,
      "setor_id": 2,
      "data_abertura": "2025-09-04T09:00:00",
      "data_fechamento": null
    },
    {
      "id": 102,
      "titulo": "Solicitação de acesso ao sistema contábil",
      "descricao_problema": "Preciso de acesso ao sistema contábil para lançar notas fiscais.",
      "foto": null,
      "status_id": 2,
      "prioridade_id": 2,
      "usuario_abertura_id": 2,
      "usuario_responsavel_id": 2,
      "setor_id": 2,
      "data_abertura": "2025-09-03T15:30:00",
      "data_fechamento": null
    }
  ]



  module.exports = {

    fazerChamado(chamado){

      chamado.id = chamados.length+1;

      chamados.push(chamado);
      const ultimoChamado = chamados[chamados.length - 1];

      console.log(ultimoChamado);
      return chamado.id ;

    },

listaChamadosPorStatus(status_id, id_usuario){


  id_usuario = parseInt(id_usuario);
console.log("CAi aqui "+ "user " + id_usuario+ " status"+ status_id)
  let lista = chamados.filter(chamado => 
  (chamado.status_id == status_id && chamado.usuario_abertura_id == id_usuario)
  );

  console.log(lista)
  if(!lista){
    console.log("nada encontrado")
    return
  }
  return lista;
},

dadosChamado(id){
  let chamado = chamados.find(chamado => chamado.id == id)
  return chamado
},


    cancelarMeuChamado(id,id_usuario){
      try{
        chamados = chamados.filter(chamado =>!(chamado.id == id && chamado.usuario_abertura_id == id_usuario))
        console.log("camado cancelado com sucesso")
      }catch(error){
         console.log("erro ao cancelar> " + error )
      }
       
    },

editarChamado(id, id_usuario, dados) {
    let chamado = chamados.find(c => c.id == id && c.usuario_abertura_id == id_usuario);

    if (!chamado) {
        console.log("Chamado não encontrado!");
        return null;
    }

    chamado.titulo = dados.titulo;
    chamado.descricao_problema = dados.descricao_problema;

    console.log("Chamado atualizado:", chamado);
    return chamado; // retorna para pegar o status_id
}


  }