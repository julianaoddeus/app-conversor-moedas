const primeiraMoeda = document.querySelector('[data-js="primeira-moeda"]')
const segundaMoeda = document.querySelector('[data-js="segunda-moeda"]')
const converterValor = document.querySelector('[data-js="converter-valor"]')
const moedaConvertida = document.querySelector('#moeda-convertida')
const valorInputAtualizado = document.querySelector('#input-valor')

let mudancaValorInput = {}

const getURL = moeda =>
  `https://v6.exchangerate-api.com/v6/0b15ef5e4192c33c16d03bea/latest/${moeda}`

//obtem um array de propriedades das moedas
const fetchBuscaTaxaCambio = async apiURL => {
  const response = await fetch(apiURL)
  return await response.json()
}

//mapeando o array e colocando nas options e fixando em USD e BRL
const init = async () => {
  const obterDados = await fetchBuscaTaxaCambio(getURL('USD'))

  mudancaValorInput = {
    ...obterDados
  } // disponibiliza para toda aplicação os dados obtidos no request

  const getOptions = selectedMoeda =>
    Object.keys(mudancaValorInput.conversion_rates)
    .map(
      moeda =>
      `<option ${
            moeda === selectedMoeda ? 'selected' : ''
          }>${moeda}</option>`
    )
    .join('')

  primeiraMoeda.innerHTML = getOptions('USD')
  segundaMoeda.innerHTML = getOptions('BRL')

  converterValor.textContent = `R$ ${mudancaValorInput.conversion_rates.BRL.toFixed(
    2
  )}`
  moedaConvertida.textContent = `1 USD ${mudancaValorInput.conversion_rates.BRL} BRL`
}

//pegando o valor do input e multiplicando os valores
valorInputAtualizado.addEventListener('input', event => {
  
    converterValor.textContent = (
      event.target.value * mudancaValorInput.conversion_rates[segundaMoeda.value]
    ).toFixed(2)
    
    let alert = document.querySelector('.alert')
    alert.style.display = "block";

})



segundaMoeda.addEventListener('input', event => {
  const moedaValorAtualizado =
    mudancaValorInput.conversion_rates[event.target.value].toFixed(2)
  console.log(moedaValorAtualizado)

  converterValor.textContent = (
    valorInputAtualizado.value * moedaValorAtualizado
  ).toFixed(2)
  moedaConvertida.textContent = `1 ${segundaMoeda.value} = ${
    1 * mudancaValorInput.conversion_rates[segundaMoeda.value].toFixed(2)
  } ${segundaMoeda.value}`
})

primeiraMoeda.addEventListener('input', async event => {
  mudancaValorInput = {
    ...(await fetchBuscaTaxaCambio(getURL(event.target.value)))
  }

  converterValor.textContent = (
    valorInputAtualizado.value *
    mudancaValorInput.conversion_rates[segundaMoeda.value]
  ).toFixed(2)

  moedaConvertida.textContent = `1${primeiraMoeda.value} = ${
    1 * mudancaValorInput.conversion_rates[segundaMoeda.value]
  } ${segundaMoeda.value}`
})

valorInputAtualizado.focus()

init()