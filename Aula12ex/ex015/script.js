let data = new Date()
let ano = data.getFullYear()
let fano = document.querySelector('#txtano');
let res = document.querySelector('#res')
let fsex = document.getElementsByName('radsex');

document
.querySelector('#verificar')
.addEventListener('click', verificar);
function verificar(){
  if(fano.value.length == 0 || Number(fano.value) > ano){
    alert('[ERRO] Verifique os dados e tente novamente!');
  } else {
    let idade = ano - Number(fano.value);
    // res.innerHTML = `Idade Calculada: ${idade}`
    let img = document.createElement('img');
    img.setAttribute('id', 'foto')
    let genero = '';
    if(fsex[0].checked){
      genero = 'Homem';
      if (idade >= 0 && idade < 10){
        //Criança
        img.setAttribute('src', 'bebeMasc.jpeg');
      } else if (idade < 21){
        //Jovem
        img.setAttribute('src', 'jovemHomem.jpeg');
      } else if (idade < 50){
        //Adulto
        img.setAttribute('src', 'adultoHomem.jpeg');
      } else {
        //Idoso
        img.setAttribute('src', 'idosoHomem.jpeg');
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher';
      if(idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', 'bebeFem.jpeg');
      } else if (idade < 21) {
        //Jovem
        img.setAttribute('src', 'jovemMulher.jpeg');
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'adultaMulher.jpeg');
      } else {
        //Idoso
        img.setAttribute('src', 'idosaMulher.jpeg');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}