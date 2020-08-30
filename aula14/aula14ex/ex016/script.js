document.querySelector('#botao').addEventListener('click', contar);
function contar(){
  let inicio = document.querySelector('#txtInicio');
  let fim = document.querySelector('#txtFim');
  let passo = document.querySelector('#txtPasso');
  let res = document.querySelector('#res');
  if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    //alert('[ERRO] faltam dados');
    res.innerHTML = 'Impossível contar';
  } else {
    res.innerHTML = 'Contando...'
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p <= 0){
      alert('Passo inválido! Considerando PASSO como 1');
      p = 1;
    }
    if(i < f){
      for (c = i; c <= f; c += p){
        res.innerHTML += `${c} \u{1F449}`;
      }      
    } else {
      for( c = i; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }

}





// let inicio = document.querySelector('#txtInicio');
// let fim = document.querySelector('#txtFim');
// let passo = document.querySelector('#txtPasso');
// let res = document.querySelector('#res');
// let nInicio = Number(inicio.value);
// let nFim = Number(fim.value);
// let nPasso = Number(passo.value);

// document.querySelector('#botao').addEventListener('click', contar);

// function contar(){

  
//   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
//     res.innerHTML = '[ERRO] Confira os valores definidos!'
//   } else {
//     for (i = nInicio; i <= nFim; i += nPasso){
//       res.innerHTML = i;
//     }
    
//   }
// }

