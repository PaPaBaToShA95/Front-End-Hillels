//Вирішив поспілкуватися з вами тут, сподіваюсь це не проблема)


class Student {
    #grades; //Зробив приватними поля grades та attendance для того щоб не можна було змінювати їх ззовні 
    #attendance;

    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.#grades = new Array(25).fill(null);// тут вже від себе додав, співвідношення між grades та attendance якщо присутній на занняті до дадаємо оцінку
        this.#attendance = new Array(25).fill(null);//Тут зрозіміло, в завдані масив з 25 елементів, далі я рахую true або false тому заповнений масив null
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getAverageGrade() {
        const validGrades = this.#grades.filter(grade => grade !== null);
        const sum = validGrades.reduce((a, b) => a + b, 0);
        return validGrades.length > 0 ? sum / validGrades.length : 0;
    }

    present(grade) { //Якщо студент присутній на занятті, то він отримує оцінку яка йде як аргумент при виклиці present(оцінка)
        const index = this.#attendance.indexOf(null);
        if (index !== -1) {
            this.#attendance[index] = true;
            this.#grades[index] = grade;
        } else {
            console.log("Студент вже пройшов курс з 25 уроків!");
        }
    }

    absent() {
        const index = this.#attendance.indexOf(null);
        if (index !== -1) {
            this.#attendance[index] = false;
        } else {
            console.log("Студент вже пройшов курс з 25 уроків! Він не може бути відсутній!");
        }
    }

    getAttendanceRate() {
        const attendedClasses = this.#attendance.filter(val => val === true).length;
        const totalClasses = this.#attendance.filter(val => val !== null).length;
        return totalClasses > 0 ? attendedClasses / totalClasses : 0;
    }

    summary() { 
        const averageGrade = this.getAverageGrade();
        const attendanceRate = this.getAttendanceRate();

        if (averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще.";
        } else {
            return "Редиска!";
        }
    }

    getGrades() {
        return this.#grades.filter(grade => grade !== null); //просто демострую що зрозумів як подивититсь на оцінки та відвідування які є в приватних полях   
    }

    getAttendance() {
        return this.#attendance.filter(val => val !== null);
    }
}

const student1 = new Student("Олексій", "Іванов", 1995); 
const student2 = new Student("Павло", "Петров", 1992);// нічого особистого, просто створюю об'єкти для демонстрації))


student1.present(90)
student1.present(80)
student1.present(100)
student1.present(100)
student1.absent()
student1.getAttendanceRate()
student1.summary()
// загалом наче все ок працює, якщо додаємо present то відповідно додається присутність та оцінка, якщо absent то відповідно відсутність, думав додавати 0 за відсутності але вирішив що це не правильно, тому залишив null тому що тоді буде сильно падати середній бал


// зайвий раз нагадаю, я не вундеркінд, весь код я розумію, пишу його сам але з допомогою, допомога мені полягає в наступному, я питаю в гуглі як зробити те чи інше, знаходжу приклади, правлю, в RunJS тестую(там простіше) і потім збираю по шматочкам готовий код, якось так)
