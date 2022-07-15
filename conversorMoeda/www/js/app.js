function update() {
  let moeda1 = $('#cotacaoDe :selected').val();

  document.getElementById('value').value = moeda1.value;
}

update();


function obterValor() {
  let input = document.querySelector('#valor').value;

  $.ajax({
    type: "GET",
    url: `https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL`,
    success: (function (cotacao) {
      let valor = cotacao.high
      let codigo = cotacao.code
      let data = cotacao.create_data

      document.getElementById('resposta').innerHTML =
        set ` 
        
      Calculando...
          
          `

    })
  })
}



document.querySelector('#btn-calcular').addEventListener('click', obterValor)