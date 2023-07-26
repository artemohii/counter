const wrapper = document.querySelector(".wrapper");
const number = document.querySelector(".number");
const buttons = document.querySelectorAll("button");

// let count = 0;/* 3 */

wrapper.addEventListener("click", (e) => {
  // let num = +number.textContent /* 2 */

  if (e.target.classList.contains("increase")) {
    number.textContent++;

    // number.textContent = ++num;/* 2 */

    // number.textContent = ++count;/* 3 */
  }
  if (e.target.classList.contains("decrease")) {
    number.textContent--;

    // number.textContent = --num;/* 2 */

    // number.textContent = --count;/* 3 */
  }
  if (e.target.classList.contains("reset")) {
    

    number.textContent = 0;

    // num = 0
    // number.textContent = num;/* 2 */

    // count = 0;
    // number.textContent = count;/* 3 */
  }

  if (/* num */number.textContent > 0) {
    number.style.color = "green";
  } else if (/* num */number.textContent < 0) {
    number.style.color = "red";
  } else /* if( num === 0) */ {
    number.style.color = "black";
  }

  // console.log(num);

  // console.log(number.textContent);
});
