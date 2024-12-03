const {
    createFakeContact
} = require('../utils/createFakeContact');
const {
    readContacts
} = require('../utils/readContacts');
const {
    writeContacts
} = require('../utils/writeContacts');

export const addOneContact = async () => {
    const contacts = readContacts();
    contacts.push(createFakeContact());
    writeContacts(contacts);
    console.log('One contact added successfully!');
};

addOneContact();
