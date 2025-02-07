const contactBase = [
    {
        name: `Олексій`,
        number: `+380936064694`,
        email: `mawabel@ukr.net`
    }
];
const addCont = (NewName, NewNumber, NewEmail) => {
    const newContact = {
        name: NewName,
        number: NewNumber,
        email: NewEmail
    };
    contactBase.push(newContact);
}




contactBase
contactBase.newContact(`Masha`, `145t`, `segd`)