let f = document.querySelector("#filtro-da-foto");

f.addEventListener("change", function(e) {
    let ft = e.currentTarget;
    let pic = document.querySelector(".foto-anotada > img");
    pic.style.filter = ft.value;
});

