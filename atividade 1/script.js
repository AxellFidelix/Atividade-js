function adicionarItem() {
    // Pegar o valor do input
    const input = document.getElementById("item");
    const valor = input.value.trim();

    // Verificar se o campo não está vazio
    if (valor === "") {
        alert("Digite um item antes de adicionar.");
        return;
    }

    // Criar um novo item de lista (li)
    const lista = document.getElementById("lista");
    const novoItem = document.createElement("li");
    novoItem.textContent = valor;

    // Adicionar uma classe de animação ou estilo
    novoItem.classList.add("adicionado");

    // Adicionar um botão para remover o item
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.onclick = () => lista.removeChild(novoItem);

    // Adicionar o botão ao item
    novoItem.appendChild(botaoRemover);

    // Adicionar o item à lista
    lista.appendChild(novoItem);

    // Limpar o campo de input
    input.value = "";

    // Remover a classe "adicionado" após alguns segundos (opcional)
    setTimeout(() => novoItem.classList.remove("adicionado"), 2000);
}
