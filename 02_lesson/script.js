// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const task_1 = document.getElementById('super_link');
console.log(task_1);

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const task_2 = document.querySelectorAll('.card-link');

task_2.forEach(el => {
    el.textContent = "ссылка";
});

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const task_3 = document.querySelectorAll('.card-body .card-link');

task_3.forEach(el => {
    console.log(el);
});

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const task_4 = document.querySelector('[data-number="50"]');
console.log(task_4);

// 5. Выведите содержимое тега title в консоль.

const task_5 = document.querySelector('title');
console.log(task_5.textContent);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const task_6 = document.querySelector('.card-title');
console.log(task_6.parentNode);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const task_7 = document.createElement('p');
task_7.textContent = "Привет";
document.querySelector('.card-title').appendChild(task_7);

// 8. Удалите тег h6 на странице.

task_8 = document.querySelector('h6');
task_8.remove();
