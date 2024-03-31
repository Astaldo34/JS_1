// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
   library = "OOO D&D";

   constructor(title, autor, pages) {
      this.title = title;
      this.autor = autor;
      this.pages = pages;
   }

   displayInfo = () => {
      console.log(`Название - ${this.title}\nАвтор - ${this.autor}\nКоличество страниц - ${this.pages}\nБиблиотерка - ${this.library}`)
   }
}

newBook = new Book("Vedmak", "Sapkovskij.A", 548);
newBook.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

class Student {
   constructor(name, age, grade) {
      this.name = name;
      this.age = age;
      this.grade = grade;
   }

   displayInfo = () => {
      console.log(`Имя - ${this.name}\nВозраст - ${this.age}\nКласс - ${this.grade}`)
   }
}

firstStudent = new Student("Alex", 37, "9G");
secondStudent = new Student("Lusil", 15, "9A")

firstStudent.displayInfo();
secondStudent.displayInfo();
