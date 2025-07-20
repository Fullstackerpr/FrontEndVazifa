// DOM

// BOM
// localStorage.setItem("text", "lorem ipsum")
// localStorage.setItem("name", "John")

const text = localStorage.getItem("name"); // string | null

// localStorage.removeItem("name")

console.log(text);

// sessionStorage.setItem("age", "32")

const mainEl = document.querySelector(".main");
const sidebarEl = document.querySelector(".sidebar");
const inpEl = document.querySelector(".inp");

// Event

// for all elements
// click
// dblclick
// mouseenter
// mouseleave
// mousemove

const callback = (event) => {
  console.log(event.target);
};

// mainEl.addEventListener("click", callback)

mainEl.addEventListener("dblclick", (event) => {
  console.log("dblclick");
});

mainEl.addEventListener("mouseenter", (event) => {
  console.log("mouseenter");
  sidebarEl.style.right = 0;
});
mainEl.addEventListener("mouseleave", (event) => {
  console.log("mouseleave");
  sidebarEl.style.right = "-300px";
});
mainEl.addEventListener("mousemove", (event) => {
  console.log("mousemove");
});


// for only input
// focus
// blur
// keyup


inpEl.addEventListener("focus", (event)=>{
    console.log("focus");
     sidebarEl.style.right = 0;
})
inpEl.addEventListener("blur", (event)=>{
    console.log("blur");
    sidebarEl.style.right = "-300px";
})
inpEl.addEventListener("keyup", (event)=>{
    console.log("keyup");
    console.log(event.target.value);
})


// for only form
// submit
