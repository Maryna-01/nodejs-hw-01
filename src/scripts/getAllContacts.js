import {
    readContacts
} from '../utils/readContacts.js';

const getAllContacts = async () => {
    try {
        const contacts = await readContacts();
        console.log('All contacts:', contacts);
    } catch (error) {
        console.error('Error fetching contacts:', error.message);
    }
};

getAllContacts();
