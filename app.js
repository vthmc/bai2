const output = document.querySelector(".output");
console.log(output)
let num;

do {
    num = prompt("Nhap vao gia tri so nguyen tu 1 - 10: ");
} while (num > 10 || num < 0 || !Number.isInteger(+num));

numberOneTriangle(num);

function numberOneTriangle(num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= i; j++) {
            output.innerHTML += "*";
        }
        output.innerHTML += "</br>";
    }
}