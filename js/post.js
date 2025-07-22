const BASE_URL = "https://dummyjson.com";
const postsWrapper = document.querySelector(".posts");

function createPosts(data) {
  const fragment = document.createDocumentFragment();
  data.posts.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("post");
    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
    fragment.appendChild(card);
  });
  postsWrapper.appendChild(fragment);
}

function fetchData(endpoint, callback) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch posts");
      return res.json();
    })
    .then(data => callback(data))
    .catch(err => console.error(err));
}

fetchData("posts", createPosts);
