let msg = document.querySelector('#msg');
let img = document.querySelector('#imagem');
let data = new Date();
let hora = data.getHours();
function carregar(){
  msg.innerHTML = `Agora são ${hora} horas`
  if(hora >= 0 && hora < 12){
    // BOM DIA!
    img.src = 'manha.jpg';
    document.body.style.background = '#e2cd9f';
  }else if (hora >= 12 && hora < 18){
    // BOA TARDE!
    img.src = 'tarde.jpg';
    document.body.style.background = '#b9846f';
  } else {
    //BOA NOITE!
    img.src = 'noite.jpg';
    document.body.style.background = '#515154';
  }
}