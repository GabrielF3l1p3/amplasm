let show = true;

const menuToggle = document.querySelector('.menu-toggle'); 
const menuSection = document.querySelector('#menu-section');

menuToggle.addEventListener('click', menuON)

function menuON() {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle('on', show);
    show = !show
}

// ================== parte 2 =============================



function buttonClose(id){    

    document.getElementById(id).addEventListener("click", function(){
    menuSection.classList.remove('on')
    document.body.style.overflow = 'initial'
    }); 
    
    
}

//Busca todos os elementos da classe 'btn'
var navButton = document.getElementsByClassName('nav-btn');

for (i = 0; i < navButton.length; i++){
    var ev = navButton[i].id;
    buttonClose(ev);
}
