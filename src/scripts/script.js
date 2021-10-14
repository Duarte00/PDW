const navSlide = () => {
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

navSlide();

function myFunction(pos) {
    document.getElementById("image").style.backgroundImage =
        "url(../../img/" + pos + ".png)";

    let lis = document.getElementById("project-list").getElementsByTagName('li');
    switch (pos) {
        case 1:
            document.getElementById("project-title").innerHTML = "Publicação I";
            lis[0].innerHTML = "Projecto 1";
            lis[1].innerHTML = "Projecto I";
            lis[2].innerHTML = "Projecto 1";
            break;
        case 2:
            document.getElementById("project-title").innerHTML = "Publicação II";
            lis[0].innerHTML = "Projecto 2";
            lis[1].innerHTML = "Projecto II";
            lis[2].innerHTML = "Projecto 2";
            break;
        case 3:
            document.getElementById("project-title").innerHTML = "Publicação III";
            lis[0].innerHTML = "Projecto 3";
            lis[1].innerHTML = "Projecto III";
            lis[2].innerHTML = "Projecto 3";
            break;
    }
}
