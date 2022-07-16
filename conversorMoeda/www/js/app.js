function upDate() {
  let moeda = $('#cotacaoDe :selected').val();
  obterCotação(moeda)
}

function obterCotação() {
  fetch(`https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`)
    .then(res => res.json())
    .then(data => {
   
     document.querySelector('#resposta').innerHTML = data.USDBRL.bid
    })
    Dados()
    upDate()
}

const Dados = (moeda) => {
  const array = ['USD-BRL', 'EUR-BRL', 'BTC-BRL']
  if (moeda == array[0]) {
    return moeda
}

}


document.querySelector('#btn-calcular').addEventListener('click', upDate)