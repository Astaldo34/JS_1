// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', (e) => {console.log("все теги прогрузились")})

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener('load', (e) => {console.log("страница загрузилась")})

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const task_3 = document.querySelectorAll('body')

task_3.forEach(el => {
    el.addEventListener('click', event => {
        const target = event.target;
        haveClass = target.classList.contains('super_element') ? "присутствует" : "отсутсвует";
        console.log(`Класс "super_element" ${haveClass} в элементе ${String(target.nodeName).toLowerCase()}.`);
    })
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const task_4 = document.querySelector('textarea')
task_4.addEventListener('mouseover', (e) => {console.log("Вы навели на textarea.")})

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const task_5 = document.querySelector('ul')

task_5.addEventListener('click', event => {
        const target = event.target;
        if (target.nodeName === "BUTTON") {
            console.log(target.innerText);
        }
    });

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

//Выводит сначала текст из 5 задания из-за "всплытия". В пятом задании у нас короче путь, потому что мы повесили обработчик на ul, а не на body как в 3-ем задании

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const task_7 = document.querySelector('ul');

[...task_7.querySelectorAll('li')].forEach((child, index, array) => {
    if (index % 2 != 0) {
        child.setAttribute("style", "background-color: #adefb7");
        console.log(child.innerText);
    }
});

