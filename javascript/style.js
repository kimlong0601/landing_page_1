const menuToggle = document.querySelector('.menu_toggle');
const nav = document.querySelector('.menu');

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
})

const menuClose = document.querySelector('.menu_close');

menuClose.addEventListener("click",() => {
    menuToggle.classList.remove("active");
    nav.classList.remove("active");
} )

//dropdownPhone - heroBanner
function show(anything){
    document.querySelector('.textBox').value = anything;
}

const dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}



//carousel-button

