function abrirModalLogaut(){
    let modal_logaut = document.getElementById('modal-logaut');
    modal_logaut.style.display = "flex";
    console.log("console.log aqui")

}


function fecharModalLogaut(){
    let modal_logaut = document.getElementById('modal-logaut');
    modal_logaut.style.display = "none";
    
}


function definirCoresHomeContainerSetor(){
const cores = ["#D7413F","#3EC3AC","#3398D9","#1A73E8"];
const setoresDivs = document.querySelectorAll(".home-container-setor");

setoresDivs.forEach((div, i) => {
    div.style.backgroundColor = cores[i % cores.length];
})
}



function cancelarChamado(id, paginaVoltar) {
    fetch(`/cancelar/${id}`, {
        method: 'GET' // ou 'POST' se você mudar a rota
    })
    .then(response => {
        if (response.ok) {
            // Redireciona ou recarrega a página
            window.location.href = paginaVoltar; 
            // ou para apenas recarregar a página atual: window.location.reload();
        } else {
            alert("Erro ao cancelar o chamado");
        }
    })
    .catch(err => {
        console.error(err);
        alert("Erro ao conectar com o servidor");
    });
}



window.addEventListener('DOMContentLoaded', () => {
    definirCoresHomeContainerSetor();
});



