// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage.
//ДОПОЛНИТЕЛЬНАЯ НЕОБЯЗАТЕЛЬНАЯ ЧАСТЬ - Пользователь должен иметь возможность удалить любого пользователя из списка. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const mainBlock = document.querySelector('.main');

const template = persons.content;

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach(el => {
      let newTemplate = template.cloneNode(true);
      newTemplate.querySelector('.person__block__header').textContent = el.username;
      let persInfo = `Имя - ${el.name}\nПочта - ${el.email}\nТелефон - ${el.phone}`;
      newTemplate.querySelector('.person__block__info').textContent = persInfo;
      mainBlock.appendChild(newTemplate);
    });
  });