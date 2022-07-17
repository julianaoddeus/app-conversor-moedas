const primeiraMoeda = document.querySelector('[data-js="moeda-um"]')
const segundaMoeda = document.querySelector('[data-js="moeda-dois"]')

const apiURL = `https://v6.exchangerate-api.com/v6/0b15ef5e4192c33c16d03bea/latest/USD`

const fetchBuscaTaxaCambio = async () =>{ 
    const response = await fetch(apiURL)    
    return await response.json()
}

const init = async ()=> {
  const obterDados = await fetchBuscaTaxaCambio()

  console.log(Object.keys(obterDados.conversion_rates))

  const options = `<option>oi</option>`
  
  primeiraMoeda.innerHTML = options
  segundaMoeda.innerHTML = options
}

init()


