function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function handleBankingClick(myRadio) {
    document.getElementById("optionImage").src = `./assets/images/features/banking${myRadio.value}.png`;
}

// Slider
const ELS = (sel, par) => (par || document).querySelectorAll(sel);
const EL = (sel, par) => (par || document).querySelector(sel);
const mod = (n, m) => (n % m + m) % m;

ELS(".slider-wrapper").forEach(EL_par => {
  const EL_slider = EL(".slider", EL_par);
  const ELS_items = ELS(".item", EL_par);
  const sub = +EL_par.dataset.items ?? 1;
  const tot = Math.ceil(ELS_items.length / sub);
  let c = 0;
  
  const anim = () => EL_slider.style.transform = `translateX(-${c*100}%)`;
  const prev = () => (c = mod(c-1, tot), anim());
  const next = () => (c = mod(c+1, tot), anim());
  
  EL(".prev", EL_par).addEventListener("click", prev);
  EL(".next", EL_par).addEventListener("click", next);
});


function handleServiceClick(elem) {
    const target = elem.parentElement.querySelector("p");
    target.style.display = target.style.display === "block" ? "none" : "block";
}