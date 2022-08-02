
const form = document.querySelector(".form");
let inputs = form.querySelectorAll("input");
const submitBtn = form.querySelector(".form__submit-btn")
let modal = document.querySelector(".window-background");
const modalOk = document.querySelector(".btn--modal")



// let count = 0;
// count++;
// let ending = count.toString()[count.toString().length - 1];
// if (count > 10 && count < 15) {
//   msg = ""
// } else {
//   switch (parseInt(ending)) {
//     case 2:
//     case 3:
//     case 4:
//       msg = "а"
//       break;
//   }
// }

//   console.log(`Кнопку нажали ${count} раз${msg}`)

submitBtn.addEventListener("click", function (e) {
  let custom = document.querySelector(".js-custom-name");
  e.preventDefault();
  inputs.forEach(function (item) {
    if (item.name === "name") {
      custom.textContent = item.value;
    }
  })
  showModal()
})

modalOk.addEventListener("click" || "touch", function (e){
e.preventDefault();
modal.classList.remove("window-background--show")
})
