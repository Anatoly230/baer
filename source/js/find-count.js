
let rootElement = document.querySelector(".advantages")
let styles = getComputedStyle(rootElement);
let counter = styles.getPropertyValue("--counter");

let childrens = rootElement.childElementCount;
let count;
if(childrens % 2 !== 0 ){
  count = Math.ceil(childrens / 2)
}else{
  count = childrens / 2;
}

rootElement.style.setProperty("--counter" , count);
