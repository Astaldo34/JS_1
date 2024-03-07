// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const task_1 = document.querySelectorAll('.dropdown-item');

task_1.forEach(el => {
    el.classList.add('super-dropdown');
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const task_2 = document.querySelectorAll('.btn');

task_2.forEach(el => {
    if (el.classList.contains('btn-secondary')) {
        el.classList.remove('btn-secondary');
    } else {
        el.classList.add('btn-secondary');
    }
    
});

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const task_3 = document.querySelectorAll('.menu');

task_3.forEach(el => {
    el.classList.remove('dropdown-menu'); 
});

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const task_4 = document.querySelector('div[class="dropdown"]');
task_4.insertAdjacentHTML("afterBegin", '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const task_5 = document.querySelector('#dropdownMenuButton');
task_5.setAttribute("id", "superDropdown");

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const task_6 = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
task_6.dataset.dd = "3";

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const task_7 = document.querySelector('.dropdown-toggle');
task_7.removeAttribute("type");