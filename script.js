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
function betterFormatting() {
    let inputhere = input.value;
    if (!inputhere) {
        error("Please Enter Some text")
        return;
    }
    output.innerHTML = `<span style="text-transform:capitalize">${inputhere}</span>`
}
function printCities() {
    output.innerHTML = "";
    for (i = 0; i < cities.length; i++) {
        output.innerHTML += cities[i] + "<br>"
    }
}
function addCity() {
    output.innerHTML = "";
    let inputhere = input.value.toLowerCase();
    if (!inputhere) {
        error("Please Type some city name")
        return;
    }
    let index = cities.indexOf(inputhere)
    if (index !== -1) {
        error("This City is already on list")
        return;
    }
    cities.push(inputhere)
    error("City is added Successfuly")
}
function checkCity() {
    let inputhere = input.value.toLowerCase();
    let index = cities.indexOf(inputhere)
    if (!inputhere) {
        error("Enter some text")
        return;
    }
    if (index !== -1) {
        let i = `<span> The ${inputhere} is in the list and the index of ${inputhere} is ${index}`
        output.innerHTML = i
        return;
    }
    else {
        let i = `The city ${inputhere} is not in list`
        output.innerHTML = i
    }

}








