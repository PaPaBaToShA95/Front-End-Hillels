const contactBook = {
    contacts: [
        {
            name: 'Олексій Ермантраут',
            phone: '+380501234567',
            email: 'oleksii@gmail.com'
        },
        {
            name: 'Анна Сидорова',
            phone: '+380673456789',
            email: 'anna.sydorova@gmail.com'
        },
        {
            name: 'Іван Іванов',
            phone: '+380932345678',
            email: 'ivan.ivanov@gmail.com'
        }
    ],
    addContact(newName, newPhone, newEmail) {
        this.contacts.push({
            name: newName,
            phone: newPhone,
            email: newEmail
        });
    },
    contactList() {
        this.contacts.forEach(contact => {
            console.log(`Ім'я: ${contact.name}, Телефон: ${contact.phone}, Пошта: ${contact.email}`);
        });
    }
};
contactBook.addContact(`Вася Пупкін`, `+380932957409`, `vasya.pupkin@gmail.com`)
contactBook.contactList()

