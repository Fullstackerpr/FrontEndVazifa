const BASE_URL = "https://dummyjson.com";
const wrapperEl = document.querySelector(".wrapper");

function createProducts(data) {
  const fragment = document.createDocumentFragment();
  data.products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
    `;
    fragment.appendChild(card);
  });
  wrapperEl.appendChild(fragment);
}

function fetchData(endpoint, callback) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    })
    .then(data => callback(data))
    .catch(err => console.error(err));
}

fetchData("products", createProducts);
