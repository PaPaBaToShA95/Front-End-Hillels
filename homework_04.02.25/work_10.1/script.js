const user = {
    name: `Олексій`,
    age: 29,
    city: `Бровари`,
    info() {
        return `Ваше імя ${this.name}, Вам ${this.age} років, Ви проживаєте у місті ${this.city}`
    }
};

console.log(user.info())