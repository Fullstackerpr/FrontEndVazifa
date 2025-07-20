import { DATA } from "./data.js";
const contentE1 = document.querySelector(".content");
const inputE1 = document.querySelector(".input");
const formE1 = document.querySelector(".form");

formE1.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = inputE1.value;

  if(!value.trim()) return null;

  const div1 = document.createElement("div");
  div1.className = "msg me";

  div1.innerHTML = `
            <p>${value}</p>
            <span>9:54</span>
        `;

  contentE1.appendChild(div1);
  inputE1.value = "";
});
