// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

const navBar = document.getElementById('navbar');
const improImg = document.getElementById('imgImprovise');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const body = document.querySelector('body');


addEventListener('scroll', () => {
    if (window.scrollY > 15) {
        navBar.style.height = '50px'
    } else {
        navBar.style.height = '90px'
    }
})

addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        improImg.style.opacity = 1
        improImg.style.transform = "translateX(0)";
    }
})

addEventListener('scroll', () => {
    if (window.scrollY > 990) {
        popup.style.opacity = 1;
        popup.style.transform = "translateX(0)";
    }
})

closeBtn.addEventListener('click', () => {
    popup.style.transform = "translateX(600px)";
    setTimeout(() => popup.remove(), 1000)
})