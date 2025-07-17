const formEl = document.querySelector(".inp");
const nameInput = document.querySelector(".names");
const emailInput = document.querySelector(".email");
const telInput = document.querySelector(".tel");
const textInput = document.querySelector(".text");
const tbodyEl = document.querySelector(".table tbody");

const data = [];

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = {
    name: nameInput.value,
    email: emailInput.value,
    tel: telInput.value,
    text: textInput.value,
  };

  data.push(user);
  createTableRow(data);

  nameInput.value = "";
  emailInput.value = "";
  telInput.value = "";
  textInput.value = "";
});

function createTableRow(data) {
  tbodyEl.innerHTML = ""; 

  data.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.tel}</td>
      <td>${item.text}</td>
    `;
    tbodyEl.appendChild(tr);
  });
}
