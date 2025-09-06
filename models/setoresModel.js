   const setores =  [
    { "id": 1, "nome": "Financeiro", "descricao": "Gestão financeira e contábil","imagem":"https://www.positivoservers.com.br/wp-content/uploads/2018/01/tendencias-de-ti-que-voce-deve-ficar-de-olho.jpg" },
    { "id": 2, "nome": "TI", "descricao": "Tecnologia da Informação e Suporte","imagem":"https://contasonline.blob.core.windows.net/arquivos/postagens/c-194-uib.jpg" }
  ]

  module.exports = {
    listarSetores(){

      return setores;
    }
  }