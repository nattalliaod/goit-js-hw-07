const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listEl = document.querySelector('ul')

// const elements = ingredients.map(ingredient => {
//     const itemEl = document.createElement('li')
//     itemEl.textContent = ingredient
//  console.log(itemEl)
// return itemEl
       
// })
// console.log(elements)


const makeItemEl = ingredients => {
    return ingredients.map(ingredient => {
        const itemEl = document.createElement('li')
        itemEl.textContent = ingredient
        console.log(itemEl)
        return itemEl
})
}
const elements = makeItemEl(ingredients)
listEl.append(...elements)