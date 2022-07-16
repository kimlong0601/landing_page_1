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



//scroll to elements
const links = document.querySelectorAll('.menu-link');
links.forEach((item) =>{
    item.addEventListener("click", () => {
        let el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block: "start"});
    })
})


//scroll top button
var Button  = document.getElementById('scrollTop_btn');
window.onscroll = function() {scrollFunction()};
//display button
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        Button.style.display = "block";
    }else{
        Button.style.display = "none";
    }
}
//scroll top
function Topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
