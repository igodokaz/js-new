const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "red";
function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  // 어플리케이션 초기화
  title.style.color = BASE_COLOR;
  //   title.addEventListener("click", handleClick);
  title.addEventListener("mouseenter", handleClick);
}

init();

// function handleOffLine() {
//   console.log("gaga");
// }
// function handleOnLine() {
//   console.log("byebyt");
// }
// window.addEventListener("offline", handleOffLine);
// window.addEventListener("online", handleOnLine);
