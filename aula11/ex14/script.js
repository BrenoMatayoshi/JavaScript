function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = 'Agora são '+hora+':'+min
    if(hora>=6 && hora<13){
        img.src = 'img/tarde-cropada.png'
        //o nome das imagens estão trocadas
    } else if(hora>=13 && hora<19){
        img.src = 'img/manha-cropada.png'
        //os nomes das imagens estão trocadas
    }
    else{
        img.src = 'img/noite-cropada.png'
    }
    }