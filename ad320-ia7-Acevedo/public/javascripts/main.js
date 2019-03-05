let div = document.getElementById("color");

div.addEventListener("click", function () {
    var color = div.css.background;

    console.log("testing");
    if(color === 'red'){
        div.css.background = 'blue';
    } else {
        div.css.background = 'red';
    }
});