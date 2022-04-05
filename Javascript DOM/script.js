function changeMode(){
    mudarTema();
}

function mudarTema(){
    btn.classList.toggle('dark-mode')
}

const btn = document.getElementsByTagName('body')[0];
const h2 = document.getElementsByTagName('h2')[0];

btn.addEventListener('click', changeMode);