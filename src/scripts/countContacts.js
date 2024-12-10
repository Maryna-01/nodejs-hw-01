import {
    readContacts
} from '../utils/readContacts.js';

const countContacts = async () => {
    try {
        const contacts = await readContacts();

        if (!Array.isArray(contacts)) {
            console.log('Total contacts: 0');
            return;
        }

        const total = contacts.length;
        console.log(`Total contacts: ${total}`);
    } catch (error) {
        console.error('Error counting contacts:', error.message);
    }
};

countContacts();
