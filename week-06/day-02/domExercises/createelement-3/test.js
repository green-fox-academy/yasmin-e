let petsDiv = document.querySelector('#pets');

const kids = [
 { 'petName': 'Wattled crane', 'owner': 'Bryant' },
 { 'petName': 'Devil, tasmanian', 'owner': 'Alejandro' },
 { 'petName': 'Mynah, common', 'owner': 'Nelie' },
 { 'petName': 'Dolphin, common', 'owner': 'Mariele' },
 { 'petName': 'Gray duiker', 'owner': 'Maddalena' },
 { 'petName': 'Crab (unidentified)', 'owner': 'Lucine' },
 { 'petName': 'Ant (unidentified)', 'owner': 'Lorianna' },
 { 'petName': 'Bison, american', 'owner': 'Tommie' },
 { 'petName': 'Yellow mongoose', 'owner': 'Vivyan' },
 { 'petName': 'Carpet snake', 'owner': 'Veda' },
 { 'petName': 'Lesser mouse lemur', 'owner': 'Isidor' },
];

kids.forEach((child) => {
 let article = document.createElement('article');
 let h3 = document.createElement('h3');
 let p = document.createElement('p');
 h3.textContent = child.owner;
 p.textContent = child.petName;
 article.appendChild(h3);
 article.appendChild(p);
 petsDiv.appendChild(article);
});