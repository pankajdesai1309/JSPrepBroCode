const countLabel = document.getElementById("countLabel");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

increaseBtn.onclick = function () {
    document.getElementById("errorMessage").textContent = '';
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    document.getElementById("errorMessage").textContent = '';
    count = 0;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function () {
    if (count > 0) {
        count--;
        countLabel.textContent = count;
    } else {
        document.getElementById("errorMessage").textContent = 'Count can not be negative !';
    }
}