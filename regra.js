var btn = document.querySelector('#mostrar')
var conteiner = document.querySelector('.conteiner')

btn.addEventListener('click', function() {

    if(conteiner.style.display === 'block'){
        conteiner.style.display = 'none'
    }else{
        conteiner.style.display = 'block'
    }
})