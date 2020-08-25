let list = document.querySelector("ul");
let items = document.querySelectorAll("li");
let newItems = ['apple', 'banana', 'cat', 'dog'];

items.forEach((li, index) => {
 li.textContent = newItems[index];
});
list.style.backgroundColor = 'limegreen';
