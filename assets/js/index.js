const isMobile = window.innerWidth < 600;

if (isMobile) {
    document.getElementsByClassName("plans__container_desktop")[0].remove();
    document.querySelector(".client-reviews .slider-wrapper").setAttribute("data-items", "1");
    document.querySelector(".client-reviews .slider-wrapper").setAttribute("data-step", "100");
} else {
    document.getElementsByClassName("plans__container_mobile")[0].remove();
}

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
  const step = +EL_par.dataset.step || 100;
  const tot = Math.ceil(ELS_items.length / sub) + (step == 50 ? 1 : 0);
  let c = 0;
  
  const anim = () => EL_slider.style.transform = `translateX(-${c*step}%)`;
  const prev = () => (c = mod(c-1, tot), anim());
  const next = () => (c = mod(c+1, tot), anim());
  
  EL(".prev", EL_par).addEventListener("click", prev);
  EL(".next", EL_par).addEventListener("click", next);
});


function handleServiceClick(elem) {
    const target = elem.parentElement.querySelector("p");
    const switcher = elem.querySelector(".services-list__description-swicher");
    target.style.display = target.style.display === "block" ? "none" : "block";
    switcher.style.transform = switcher.style.transform === "rotate(45deg)" ? "rotate(0deg)" : "rotate(45deg)"; 
}

function choosePlanHendler(id, taxId = "") {
    const planIds = ["standart", "pro", "e-commerce"];
    taxId = taxId === "" ? `tax-${id}` : taxId;
    let plan = document.getElementById(id);
    let tax = document.getElementById(taxId);
    if (!isMobile) {
        tax.classList.add("tax-types__item_active");
    } else {
        document.querySelector("#selected span").innerHTML = tax.innerHTML;
        document.querySelectorAll(".select-tax__item:not(#selected)").forEach(item => {
            item.classList.remove("select-tax__item_show"); 
        });
        document.querySelector(".plans__container_mobile .slider")
            .style.transform = `translateX(-${tax.dataset.slideNumber*100}%)`;    
        const svg = document.querySelector("#selected svg");
        svg.style.transform = svg.style.transform === "rotate(180deg)" ? "rotate(0)" : "rotate(180deg)";
    }
    plan.classList.add("plans-card_active");
    plan.querySelector(".plans-card__button").classList.add("plans-card__button_active");

    planIds.forEach(element => {
        if (element !== id) {
            plan = document.getElementById(element);
            tax = document.getElementById(`tax-${element}`);
            plan.classList.remove("plans-card_active");
            plan.querySelector(".plans-card__button").classList.remove("plans-card__button_active");
            if (!isMobile) {
                tax.classList.remove("tax-types__item_active");
                if (taxId !== "tax-idk" && taxId !== "") {
                    tax = document.getElementById('tax-idk');
                    tax.classList.remove("tax-types__item_active");
                }
            } else {
                // todo
            }
        }
    });
}

function handleDocumentsClick(elem, subs) {
    if (elem.classList.contains("subscription-duration__item_active")) return;
    elem.classList.add("subscription-duration__item_active");
    if (subs === "yearly") {
        document.getElementById("monthly").classList.remove("subscription-duration__item_active");
    } else if (subs === "monthly") {
        document.getElementById("yearly").classList.remove("subscription-duration__item_active");
    }
    if (subs === "yearly2") {
        document.getElementById("monthly2").classList.remove("subscription-duration__item_active");
    } else if (subs === "monthly2") {
        document.getElementById("yearly2").classList.remove("subscription-duration__item_active");
    }

    document.querySelectorAll(".documents-info__count").forEach(item => {
        item.classList.toggle("documents-info__count_active");
    });
}

function handleSelectClick() {
    document.querySelectorAll(".select-tax__item:not(#selected)").forEach(item => {
        item.classList.toggle("select-tax__item_show"); 
    });
    const svg = document.querySelector("#selected svg");
    svg.style.transform = svg.style.transform === "rotate(180deg)" ? "rotate(0)" : "rotate(180deg)";
}

function handleQuestionClick(elem) {
    const target = elem.parentElement.getElementsByClassName("questions__answer")[0];
    const switcher = elem.querySelector(".questions__switcher img");
    target.style.display = target.style.display === "block" ? "none" : "block";
    switcher.src =  switcher.src.includes("show") ? "./assets/images/questions/hide.png" : "./assets/images/questions/show.png"; 
}