function upDate() {
  let moeda = $('#cotacaoDe :selected').val();
  obterCotação(moeda)
}

function obterCotação() {
  fetch(`https://v6.exchangerate-api.com/v6/0b15ef5e4192c33c16d03bea/latest/USD`)
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