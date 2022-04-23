let dayNumber = document.querySelector("#day-number");
let dayText = document.querySelector("#day-text");
let dayListItem = document.querySelector(".day-list-item");
let numberItem = document.querySelectorAll(".number-item");

function test() {
  result = "0";
  numberItem.textContent = result;
  console.log(result);
}

// numberItem.addEventListener("click", () => {
//   test();
// });

numberItem.forEach((i) => {
  i.addEventListener("click", showNumber);

  function showNumber() {
    dayNumber.innerHTML = this.textContent;
    // dayText.innerHTML = this.className;
    // dayNameResult.style.consol.log(this.className);
  }
});
