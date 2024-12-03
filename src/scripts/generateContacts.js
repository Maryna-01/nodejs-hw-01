const {
    createFakeContact
} = require('../utils/createFakeContact');
const {
    readContacts
} = require('../utils/readContacts');
const {
    writeContacts
} = require('../utils/writeContacts');

const generateContacts = async (number) => {
    const contacts = readContacts();
    for (let i = 0; i < count; i++) {
        contacts.push(createFakeContact());
    }
    writeContacts(contacts);
    console.log(`${count} contacts added successfully!`);

};

generateContacts(5);
