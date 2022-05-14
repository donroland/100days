const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");

// add.addEventListener("click", () => {
//     count.innerHTML++;
// })

// sub.addEventListener("click", () => {
//     count.innerHTML--;
// })

// resetCount.addEventListener("click", () => {
//     count.innerHTML = 0;
// })

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        console.log("Add");
    }
    if (e.target.classList.contains("subtract")) {
        console.log("Subtract");
    }
    if (e.target.classList.contains("reset")) {
        console.log("Reset");
    }
})

