const form = document.querySelector(".form");
let inputs = form.querySelectorAll("input");
const submitBtn = form.querySelector(".form__submit-btn")
let modal = document.querySelector(".window-background");
const modalOk = document.querySelector(".btn--modal")

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
