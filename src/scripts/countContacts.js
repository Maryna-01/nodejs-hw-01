const {
    readContacts
} = require('../utils/readContacts');

export const countContacts = async () => {
    const contacts = readContacts();
    console.log(`Total contacts: ${contacts.length}`);
    return contacts.length;
}

console.log(await countContacts());
