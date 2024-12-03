const {
    readContacts
} = require('../utils/readContacts');
const {
    writeContacts
} = require('../utils/writeContacts');

export const removeLastContact = async () => {
    const contacts = readContacts();
    if (contacts.length > 0) {
        contacts.pop();
        writeContacts(contacts);
        console.log('Last contact removed successfully!');
    } else {
        console.log('No contacts to remove.');
    }
};

removeLastContact();
