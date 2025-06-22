const navList = document.querySelectorAll('#categories .item');
// console.log(navList)
const listEl = document.querySelectorAll('.item');
// console.log(listEl)
console.log('Number of categories:', navList.length);



listEl.forEach((item) => {
    const title = item.querySelector('.item-title').textContent;
    const items = item.querySelectorAll('.item-list li');
    console.log('Category:', title);
    console.log('Elements:', items.length);
});


