function abrirModalEditar(id, titulo, descricao) {
    const modal = document.getElementById("modal-editar");
    const formEditar = document.getElementById("form-editar");

    document.getElementById("editar-id").value = id;
    document.getElementById("editar-titulo").value = titulo;
    document.getElementById("editar-descricao").value = descricao;

    formEditar.action = `/acaoChamado/${id}`; // envia para o mesmo endpoint
    modal.style.display = "flex"; // ou "block"
}

// Abrir modal de deletar
function abrirModalDeletar(id) {
    const modal = document.getElementById("modal-cancelar");
    document.getElementById("cancelar-id").value = id;
    document.getElementById("form-cancelar").action = `/acaoChamado/${id}`;
    modal.style.display = "flex";
}

// Fechar modal de deletar
function fecharModalCancelar() {
    document.getElementById("modal-cancelar").style.display = "none";
}





function fecharModalEditar() {
    document.getElementById("modal-editar").style.display = "none";
}
