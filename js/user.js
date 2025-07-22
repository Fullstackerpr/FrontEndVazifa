const BASE_URL = "https://dummyjson.com";
const userWrapper = document.querySelector(".users");

function createUsers(data) {
  const fragment = document.createDocumentFragment();
  data.users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${user.image}" alt="${user.firstName}">
      <h3>${user.firstName} ${user.lastName}</h3>
      <p>Email: ${user.email}</p>
    `;
    fragment.appendChild(card);
  });
  userWrapper.appendChild(fragment);
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

// ✅ Faqat userlar chiqariladi
fetchData("users", createUsers);
