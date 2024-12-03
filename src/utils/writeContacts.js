const {
    PATH_DB
} = require('../constants/contacts.cjs');


export const writeContacts = async (updatedContacts) => {
    try {
        fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing contacts:', error);
    }
};

module.exports = {
    writeContacts
};
