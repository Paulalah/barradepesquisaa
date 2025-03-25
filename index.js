const products = [
    { name: "Máscara para sombrancelha", price: "R$ 39,99", img: "img//mascaraa.jpg" },
    { name: "Corretivo Tarte", price: "R$ 129,99", img: "img//Corretivo.jpg" },
    { name: "Bronze Benefit", price: "R$ 149,99", img: "img//Bronze.jpg" },
    { name: "Blush Benefit", price: "R$ 169,99", img: "img//Blush.jpg" },
    { name: "Gloss Sheglan", price: "R$ 17,69", img: "img//Gloss.jpg" },
    { name: "Contorno Facial Payot", price: "R$ 79,99", img: "img//Contorno.jpg" },
    { name: "Gloss Rhode", price: "R$ 149,89", img: "img//Glosr 2.jpg" },
    { name: "Paleta de sombra Mousée Beauty", price: "R$ 199,79", img: "img//vangogh.jpg" },
    { name: "Paleta de sombra Kylie", price: "R$ 399,89", img: "img//kylie.jpg" },
    { name: "Base Líquida matte Bruna Tavares", price: "R$ 49,99", img: "img//Base b.jpg" },
    { name: "Base matte Poweder Una", price: "R$ 599", img: "img//Una.jpg" },
    { name: "Pó Solto Givenchy", price: "R$ 499,90", img: "img//Poo.jpg" },
    { name: "Pó Solto Nina Secrets", price: "R$ 54,99", img: "img//Pó.jpg" },
    { name: "KIt Pincéis Real Techniques", price: "R$ 107,69", img: "img//Pincel.jpg" },
    { name: "Hydra Zen Lancôme", price: "R$ 358,90", img: "img//hydra.jpg" }
];

// Função para mostrar os produtos
function displayProducts(productsToDisplay) {
    const container = document.getElementById("products-container");
    container.innerHTML = "";
    if (productsToDisplay.length === 0) {
        container.innerHTML = "<p>Nenhum produto encontrado!</p>";
    } else {
        productsToDisplay.forEach(product => {
            container.innerHTML += `
                <div class="product">
                    <img src="${product.img}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>Preço: ${product.price}</p>
                </div>
            `;
        });
    }
}

// Função de busca
function searchProduct() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    if (query === "") {
        alert("Por favor, digite algo para buscar!");
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    displayProducts(filteredProducts);
}

// Mostrar todos os produtos ao carregar a página
window.onload = () => displayProducts(products);
