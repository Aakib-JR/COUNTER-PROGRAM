const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const display = document.getElementById("display")


let count = 0;

decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        display.innerText = count;
    }
    else {
        count = 0;
        display.innerText = count;
    }
})

resetBtn.addEventListener("click", () => {
    count = 0;
    display.innerText = count;
})

increaseBtn.addEventListener("click", () => {
    count++;
    display.innerText = count;
})