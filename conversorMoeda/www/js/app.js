function update() {
  let moeda1 = $('#cotacaoDe :selected').val();

  document.getElementById('value').value = moeda1.value;
  console.log(moeda1);
}


update();


function obterValor() {
  let input = document.querySelector('#valor').value;
  let moeda = ['USD-BRL','EUR-BRL','BTC-BRL']
  
  $.ajax({
    type: "GET",
    url: `https://economia.awesomeapi.com.br/last/${moeda}`,
    success: (function (cotacao) {     

      document.getElementById('resposta').innerHTML =
        set ` 
        
      Calculando...
          
          `

    })
  })
}



document.querySelector('#btn-calcular').addEventListener('click', obterValor)