const BACKEND = 'http://localhost:3000';
const tableBody = document.querySelector('tbody');
const select = document.querySelector('select');

const sendXHR = (xhr, method, endpoint) => {
  xhr.open(method, `${BACKEND}/${endpoint}`);
  xhr.send();
};

const getBooks = (filter) => {
  const xhr = new XMLHttpRequest();
  let url = 'book';

  xhr.onload = () => {
    const response = JSON.parse(xhr.response);

    tableBody.innerHTML = '';

    response.forEach((book) => {
      createTableRow(book);
    });
  };

  if (filter) {
    url = `${url}?${filter}`;
  }

  sendXHR(xhr, 'GET', url);
};

const getCategories = () => {
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    const response = JSON.parse(xhr.response);
    fillSelect(response);
  };

  sendXHR(xhr, 'GET', 'book/category');
};

const createTableRow = (rowData) => {
  const tableRow = document.createElement('tr');
  const dataValues = Object.values(rowData);

  dataValues.forEach((value) => {
    const tableData = document.createElement('td');
    tableData.innerText = value;
    tableRow.appendChild(tableData);
  });

  tableBody.appendChild(tableRow);
};

const fillSelect = (data) => {
  data.forEach((elem) => {
    const option = document.createElement('option');
    option.innerText = elem.category;
    option.setAttribute('value', elem.category);
    select.appendChild(option);
  });
};

select.addEventListener('change', () => {
  let query;
  if (select.value !== '') {
    query = `category=${select.value}`;
  }
  getBooks(query);
});

getBooks();
getCategories();
