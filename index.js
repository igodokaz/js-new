// const title = document.getElementById("title");
// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// // console.log(title);
// // console.dir(title);
// // console.dir(document);
// document.title = "I own you";

// const title = document.querySelector("#title");
// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "I own you";

// const title = document.querySelector("#title");
// function handleResize(event) {
//   //상세내용 호출
//   console.log(event); //상세내용 호출
// }

// window.addEventListener("resize", handleResize);

const title = document.querySelector("#title");
function handleClick() {
  title.style.color = "blue";
}

window.addEventListener("click", handleClick);
