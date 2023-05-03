const btn = document.getElementById("button");

let index = 0;

const colors = ["red", "yellow", "green"];

btn.addEventListener("click", function onClick() {
    btn.style.backgroundColor = colors[index];
    btn.style.color = "red";

    index = index >= colors.length - 1 ? 0 : index + 1;
});
