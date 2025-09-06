const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const usuarioController = require("./controller/usuarioController");
const setoresController = require("./controller/setoresController")
const chamadoController = require("./controller/chamadoController")
const session = require("express-session");




const app = express();



app.engine("handlebars", handlebars.engine({
    defaultLayout:"main",
    layoutsDir:__dirname +"/views/"

}))

app.set("view engine","handlebars");
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("public"));
app.use(session({
    secret: "uma_chave_secreta_aqui", // importante para segurança
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 } // 1 hora
}));

app.get("/paginaLogin",usuarioController.paginaLogin);

app.post("/login",usuarioController.login);


app.get("/home",setoresController.listarSetores);

app.get("/paginaChamado",chamadoController.paginaChamado);
app.post("/fazerChamado", chamadoController.fazerChamado)



// Um único endpoint para ações de chamados
app.post("/acaoChamado/:id", chamadoController.acaoChamado);

// Rota para exibir chamados por status
app.get("/paginaMeusChamados/:status_id", chamadoController.paginaMeusChamado);

app.get("/paginaMeusChamados/aberto",chamadoController.aberto);



app.delete("/cancelar/:id",chamadoController.cancelarMeuChamado);

app.post("/editarChamado/:id",chamadoController.editarChamado)
const port = 8080
app.listen(port,()=>{
    console.log("servidor Rodando na porta", port)
})