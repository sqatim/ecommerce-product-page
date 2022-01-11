// const btn = document.querySelector('.btn_menu');

const btn_menu = document.querySelector(".btn_menu");
const btn_wish = document.querySelector(".wish__list");
const logo = document.querySelector(".logo");
const list = document.querySelector("ul");

let nav = false;
let wish = false;
function displayList() {
  // let intViewportWidth = window.innerWidth;
  btn_menu.style["background-image"] = 'url("./images/icon-close.svg")';
  btn_menu.style["width"] = "15px";
  btn_menu.style["height"] = "70%";
  logo.style["display"] = "none";
  list.style.display = "flex";
  list.style["flex-direction"] = "column";
  return true;
}

function hideList() {
  logo.style["display"] = "block";
  btn_menu.style["background-image"] = 'url("./images/icon-menu.svg")';
  btn_menu.style["width"] = "25px";
  btn_menu.style["height"] = "100%";
  list.style["display"] = "none";

  return false;
}

btn_menu.addEventListener("click", (e) => {
    if (nav === false) nav = displayList();
    else nav = hideList();
});

function displayWish() {
    console.log("1:true");
    return true;
  };

  function hideWish() {
    console.log("2:false");
    return false;
  };

btn_wish.addEventListener("click", (e) => {
  if (wish === false) 
    wish = displayWish();
  else 
    wish = hideWish();
});
