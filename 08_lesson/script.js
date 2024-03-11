// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

const inputEl = document.querySelector('#from');
const taskOne = inputEl.nextElementSibling;

inputEl.addEventListener('input', (e) => {
    taskOne.textContent = inputEl.value;
})

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const taskTwoBut = document.querySelector('.messageBtn');
const taskTwo = document.querySelector('.message');

taskTwoBut.addEventListener('click', (e) => {
    taskTwo.classList.add('animate_animated', 'animate_fadeInLeftBig');
    taskTwo.setAttribute("style", "visible: visibility");
})

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const formEl = document.querySelector('form');
const formField = formEl.querySelectorAll('.form-control');
const formSub = formEl.querySelector('button')

formEl.addEventListener('submit', (e) => {
    formField.forEach((child) => {
        if (child.value == "") {
            e.preventDefault;
            child.classList.add('error');
        }
    }); 
});

formField.forEach(el => {
    el.addEventListener('input', (e) => {
        if (el.value == "") {
            el.classList.add('error');
        } else {
            el.classList.remove('error');
        }
        console.log(el.value);
    })
});