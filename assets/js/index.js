function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function handleClick(myRadio) {
    document.getElementById("optionImage").src = `./assets/images/features/banking${myRadio.value}.png`
}