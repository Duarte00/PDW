const navSlide = () => {

    console.log("oi")
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            }
            else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`; 
            }
        });

        burger.classList.toggle('toggle');
    });
    
}

let pos=1;
function carouselFunction(){
    document.getElementById("carousel-image").style.backgroundImage="url(../img/"+pos+".png)";
    document.getElementById("text-carousel-block").getElementsByTagName("h1")[0].innerHTML="Titulo "+pos;
    if(pos==3){
        pos=0;
    }
    pos++;
    setTimeout(carouselFunction, 3000);
}

document.getElementById("carousel-image").onclick = function () {
    location.href = "./research.html";
};
carouselFunction();

function myFunction(pos) {
    document.getElementById("image").style.backgroundImage =
        "url(../../img/" + pos + ".png)";

    let lis = document.getElementById("project-list").getElementsByTagName('li');
    switch (pos) {
        case 1:
            document.getElementById("project-title").innerHTML = "Publica��o I";
            lis[0].innerHTML = "Projecto 1";
            lis[1].innerHTML = "Projecto I";
            lis[2].innerHTML = "Projecto 1";
            break;
        case 2:
            document.getElementById("project-title").innerHTML = "Publica��o II";
            lis[0].innerHTML = "Projecto 2";
            lis[1].innerHTML = "Projecto II";
            lis[2].innerHTML = "Projecto 2";
            break;
        case 3:
            document.getElementById("project-title").innerHTML = "Publica��o III";
            lis[0].innerHTML = "Projecto 3";
            lis[1].innerHTML = "Projecto III";
            lis[2].innerHTML = "Projecto 3";
            break;
    }
}

navSlide();
