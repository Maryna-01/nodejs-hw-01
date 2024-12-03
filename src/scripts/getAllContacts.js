const {
    readContacts
} = require('../utils/readContacts');

export const getAllContacts = async () => {
    const contacts = readContacts();
    console.log('All contacts:', contacts);
    return contacts;
}

console.log(await getAllContacts());
