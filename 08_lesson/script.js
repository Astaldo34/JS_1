// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx
// Задание 1

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    }
    
}

// Задание 2

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

// Задание 3

const array_2 = [];
sum = 0;
min = 9;
hasThree = false;

for (let i = 0; i <= 5; i++) {
    n = Math.floor(Math.random() * 10)
    array_2.push(n);
    if (n < min ) min = n;
    if (n === 3) hasThree = true;
    sum += n;
}

console.log(`Массив - ${array_2}`);
console.log(`Сумма элементов - ${sum}`);
console.log(`Минимальное число - ${min}`);
console.log(`В этом массиве число 3 - ${hasThree ? "есть" : "отсутсвует"}`);

//Задание *

pict = "x"

for (let i = 0; i <= 20; i++) {
    console.log(pict)
    pict = pict + "x";
}

// let num_1 = Number(prompt("Введите первую цифру"));
// let num_2 = Number(prompt("Введите вторую цифру"));
// let num_3 = Number(prompt("Введите третью цифру"));

// let isBiggerNum = (num1, num2, num3) => {
//     if (num1 > num2) {
//         if (num1 > num3) {
//             console.log(`больше всех - ${num1}`);
//         } else {
//             console.log(`больше всех - ${num3}`);
//         }
//     } else {
//         if (num2 > num3) {
//             console.log(`больше всех - ${num2}`);
//         } else {
//             console.log(`больше всех - ${num3}`);
//         }
//     }
// }

// isBiggerNum(num_1, num_2, num_3);

// // Задание 4

// let numSum = (n1, n2) => {
//     console.log(`Сумма чисел равна - ${n1 + n2}`);
// }

// let numDiff = (n1, n2) => {
//     if (n1 > n2) {
//         console.log(`Разность чисел равна - ${n1 - n2}`);
//     } else {
//         console.log(`Разность чисел равна - ${n2 - n1}`);
//     }
    
// }

// let numMulti = (n1, n2) => {
//     console.log(`Умножение чисел - ${n1 * n2}`);
// }

// let numDivid = (n1, n2) => {
//     console.log(`Деление первого числа на второе - ${n1 / n2}`);
// }

// numSum(5, 8);
// numDiff(10, 1);
// numDiff(2, 7);
// numMulti(2,2);
// numDivid(10,2);

