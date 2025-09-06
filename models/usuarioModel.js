const usuarios = [
    {
      "id": 1,
      "nome": "João Silva",
      "foto":"https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583035_1280.jpg",
      "email": "joao.silva@empresa.com",
      "senha": "123456",
      "cargo_id": 1,
      "setor_id": 1,
      "tipo_usuario_id": 1
    },
    {
      "id": 2,
      "nome": "Maria Oliveira",
      "foto":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fpt-br%2Fprocurar%2Fmulheres%2F&psig=AOvVaw0cHf7eekpUd3-Dm_hYOXhd&ust=1757158873139000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDapIXFwY8DFQAAAAAdAAAAABAE",
      "email": "maria.oliveira@empresa.com",
      "senha": "abcdef",
      "cargo_id": 2,
      "setor_id": 2,
      "tipo_usuario_id": 2
    }
  ]


module.exports = {

    login(email,senha){
        let usuario = usuarios.find(user => user.email === email && user.senha ===senha);

        if(!usuario){
            console.log("usuario não existe ou senha e email incorreto")
            return false
        }

        return usuario.id
    },

    dadosUsuario(id){
       let usuario = usuarios.find(user => user.id === id );

        if(!usuario){
            console.log("usuario não existe ou senha e email incorreto")
            return false
        }

        return usuario
    }


}