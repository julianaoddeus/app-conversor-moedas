const primeiraMoeda = document.querySelector('[data-js="primeira-moeda"]')
const segundaMoeda = document.querySelector('[data-js="segunda-moeda"]')
const converterValor = document.querySelector('[data-js="converter-valor"]')
const moedaConvertida = document.querySelector('[moeda-convertida]')

const apiURL = `https://v6.exchangerate-api.com/v6/0b15ef5e4192c33c16d03bea/latest/USD`

//obtem um array de propriedades das moedas
const fetchBuscaTaxaCambio = async () => {
  const response = await fetch(apiURL)
  return await response.json()
}

//mapeando o array e colocando nas options e fixando em USD e BRL
const init = async () => {
  const obterDados = await fetchBuscaTaxaCambio()

  const getOptions = selectedMoeda => Object.keys(obterDados.conversion_rates)
    .map(moeda => `<option ${moeda === selectedMoeda ? 'selected' : '' }>${moeda}</option>`).join('')

  primeiraMoeda.innerHTML = getOptions('USD')
  segundaMoeda.innerHTML = getOptions('BRL')

   converterValor.textContent = `R$ ${obterDados.conversion_rates.BRL.toFixed(2)}`

}

init()