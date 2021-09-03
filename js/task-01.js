document.querySelectorAll('ul#categories')
    .forEach(amountCategory => console.log(`В списке ${amountCategory.children.length} категории.`))
document.querySelectorAll(".item h2")
    .forEach(elem => console.log(`Категория: ${elem.textContent}. Количество элементов: ${elem.nextElementSibling.children.length}`))