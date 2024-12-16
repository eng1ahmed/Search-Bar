const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("all");

const products = [
  {
    name: "Product 1",
    description: "Description 1",
    img: "https://placeholder.com/200/200",
  },
  {
    name: "Product 2",
    description: "Description 2",
    img: "https://placeholder.com/200/200",
  },
  {
    name: "Product 3",
    description: "Description 3",
    img: "https://placeholder.com/200/200",
  },
  {
    name: "Product 4",
    description: "Description 4",
    img: "https://placeholder.com/200/200",
  },
  {
    name: "Product 5",
    description: "Description 5",
    img: "https://placeholder.com/200/200",
  },
  {
    name: "Product 6",
    description: "Description 6",
    img: "https://placeholder.com/200/200",
  },
  {
    name: "Product 7",
    description: "Description 7",
    img: "https://placeholder.com/200/200",
  },
];

function create(name, description) {
  let all = document.getElementById("all");
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  all.appendChild(div);
  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(p);
  img.src = "https://placeholder.com/200/200";
  h2.innerText = name;
  p.innerText = description;
}
if (searchInput.value === "") {
  for (let i = 0; i < products.length; i++) {
    create(products[i].name, products[i].description);
  }
}



function filterProducts(searchTerm) {
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return filteredProducts;
}



searchInput.addEventListener("input", () => {


  const searchTerm = searchInput.value;
  const filteredProducts = filterProducts(searchTerm);

  searchResults.innerHTML = "";

  if (filteredProducts.length === 0) {
    searchResults.innerHTML = "No products found.";
  } 
  
  else {
    filteredProducts.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
      `;
      searchResults.appendChild(productElement);
    });
  }


});
