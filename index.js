// console.log("linked")

document.getElementById("sumDigits").onsubmit = function(event) {
    event.preventDefault();
    console.log("form submitted");
}

document.getElementById("submit").onclick = function() {
    // take the numbers from text and display then in our display area
    var input = document.getElementById("input").value;
    // console.log(input)
    
document.getElementById("display").innerHTML = input;
}