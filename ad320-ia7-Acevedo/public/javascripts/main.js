let div = document.getElementById("color");
div.style.backgroundColor = "red";

div.addEventListener("click", function () {
    var color = div.style.backgroundColor;

    console.log("testing");
    if(color === "red"){
        div.style.backgroundColor = "blue";
    } else {
        div.style.backgroundColor = "red";
    }
});