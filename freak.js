let home = document.getElementById("home");
let contact = document.getElementById("contact");
let guid = document.getElementById("guid");
let whole = document.getElementById("whole");
let right = document.getElementById("right")
let Rhome = document.getElementById("Rhome");
let Rcontact = document.getElementById("Rcontact");
let Rguid = document.getElementById("Rguid");

home.addEventListener("click", () => {

    Rhome.style.display = "block"
    Rcontact.style.display = "none"
    Rguid.style.display = "none"
});

contact.addEventListener("click", () => {

    Rhome.style.display = "none"
    Rcontact.style.display = "block"
    Rguid.style.display = "none"
});

guid.addEventListener("click", () => {

    Rhome.style.display = "none"
    Rcontact.style.display = "none"
    Rguid.style.display = "flex"
});

whole.addEventListener("click", () => {

    Rhome.style.display = "block"
    Rcontact.style.display = "block"
    Rguid.style.display = "none"
});
