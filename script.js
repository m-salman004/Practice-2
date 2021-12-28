// Golbal variables
const input = document.getElementById("input"),
    output = document.getElementById("output"),
    originalString = document.getElementById("originalString");
let cities = ["Faisalabad", "Lahore", "Islamabad", "Karachi"]
// Golbal Functions
function clearInput() {
    input.value = "";
}
function clearOutput() {
    output.innerHTML = "";
}
function error(innertext) {
    Toastify({
        text: innertext,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #c92f3c, #b32935)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
function showOutput(result) {
    output.innerHTML = result;
}
// Other functions
function lowercase() {
    let lowerCase = originalString.innerHTML.toLowerCase();
    showOutput(lowerCase)
}
function upperCase() {
    let uppercase = originalString.innerHTML.toUpperCase();
    showOutput(uppercase)
}
function capitalize() {
    let capitalize = originalString.innerHTML;
    let output = `<span style="text-transform:capitalize">${capitalize}</span>`
    showOutput(output)
}