let company = {
    sales: [
        { name: 'Alex', salary: 1000 },
        { name: 'Vitaliy', salary: 1000 }
    ],
    development: {
        web: [
            { name: 'Oleg', salary: 2000 },
            { name: 'Max', salary: 1500 }
        ],
        internals: [
            { name: 'John', salary: 1800 },
            { name: 'Kate', salary: 1600 }
        ]
    }
};


function getAllSalary(departament) {
    if (Array.isArray(departament)) {
        return departament.reduce((total, employee) => total + employee.salary, 0);
    } else {
        let sum = 0;
        for (let subDep of Object.values(departament)) {
            sum += getAllSalary(subDep)
        }
        return sum;
    }
}

console.log(getAllSalary(company))
