import { DATA } from "./data.js";

const contentEl = document.querySelector(".content");
const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");

const getTimeFormat = () => {
  let date = new Date();
  return `${date.getHours()}:${date.getMinutes()}`;
};

const randomMessage = () => {
  let index = Math.floor(Math.random() * DATA.length);
  const divEl = document.createElement("div");
  divEl.className = "msg";

  divEl.innerHTML = `
    <p>${DATA[index]}</p>
    <span>${getTimeFormat()}</span>
  `;

  contentEl.appendChild(divEl);
};

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = inputEl.value;

  if (!value.trim()) return null;

  const divEl = document.createElement("div");
  divEl.className = "msg me"
  divEl.innerHTML = `
  <p>${value}</p>
  <span>${getTimeFormat()}</span>
  `;

  contentEl.appendChild(divEl)
  inputEl.value = "";
  setTimeout(()=>{
    randomMessage();

  },2000)
})