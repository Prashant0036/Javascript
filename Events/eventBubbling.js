document.querySelector(".container").addEventListener("click", () => {
  document.querySelector(".container").style.backgroundColor = "red";
});
document.querySelector(".childContainer").addEventListener("click", () => {
  document.querySelector(".childContainer").style.backgroundColor = "red";
});
document.querySelector(".child").addEventListener("click", (e) => {
e.stopPropagation(); // to stop event propagation in parent nodes
// e is event object 
  document.querySelector(".child").style.backgroundColor = "red";
});


