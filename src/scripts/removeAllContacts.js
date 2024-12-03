const {
    writeContacts
} = require('../utils/writeContacts');

export const removeAllContacts = async () => {
    writeContacts([]);
    console.log('All contacts removed successfully!');
}

removeAllContacts();
