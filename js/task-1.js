const categoriesList = document.querySelector(`#categories`);
const categoriesItem = categoriesList.querySelectorAll(`.item`);
console.log(`Number of categories: ${categoriesItem.length}`);
categoriesItem.forEach(element => {
    console.log(`Categories: ${element.children[0].textContent}`); 
    console.log(`Elements: ${element.children[1].children.length}`);
});