const list = document.querySelector('.carousel')
const buttonMenu = document.querySelector('.show-All')
const buttonDescont = document.querySelector('.map-all')
const somarTotal = document.querySelector('.total-valor')
const filterProduct = document.querySelector('.filter')

function formatCurrency(value) {
  const newValue = value.toLocaleString('pt-br', { 
  style: 'currency', 
  currency: 'BRL', 
})
  return newValue

}

function showAll(productsArray) {
  let myLi = ''

  menuOptions.forEach((product) => {
    myLi += `
        
      <div class="box">
      <img src=${product.src}>
      <h3>${product.name}</h3>
      <p>R$ ${formatCurrency(product.price)}</p>
      </div> 
       
    `
  })

  list.innerHTML = myLi
}

function mapAllItens() {
  const newPrice = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,


  }))

  showAll(newPrice)
}

function sumallItens() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

  list.innerHTML = `
  <div class="box">
  <p>O valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
  </div> 
   
`
}

function filterAllItens() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan)

  showAll(filterJustVegan)
}

buttonMenu.addEventListener('click', () => showAll(menuOptions))
buttonDescont.addEventListener('click', mapAllItens)
somarTotal.addEventListener('click', sumallItens)
filterProduct.addEventListener('click', filterAllItens)