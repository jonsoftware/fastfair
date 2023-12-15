// inicio do codigo de transição dos slides

let count = 1;
const totalImages = 4; // Atualize este valor conforme o número total de imagens

document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if (count > totalImages) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

/* fim do codigo de transição dos slides */


/* buscador de itens do site */


function pesquisarProduto() {
    // Obter o valor de pesquisa
    var termoPesquisa = document.getElementById('searchInput').value;

    // Verificar se o termo de pesquisa não está vazio
    if (termoPesquisa.trim() !== '') {
        // Substitua esta linha pela lógica real de pesquisa e redirecionamento
        // Aqui, você pode implementar a lógica para encontrar o produto com base no termo de pesquisa.

        // Vamos simular um redirecionamento para uma página de exemplo com o termo de pesquisa na URL
        var urlProduto = 'produto.html?pesquisa=' + encodeURIComponent(termoPesquisa);
        window.location.href = urlProduto;
    }
}

