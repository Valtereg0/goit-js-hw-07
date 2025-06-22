const nawList = document.querySelector('#categories');
// console.log(navList)
const listEl = nawList.querySelectorAll('.item');
 // console.log(listEl)
console.log(`Number of categories: ${listEl.length}`);


listEl.forEach((item) => {
  const title = item.querySelector('h2').textContent;
  const items = item.querySelectorAll('ul li').length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${items}`);
});
