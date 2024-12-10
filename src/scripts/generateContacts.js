import {
    readContacts
} from '../utils/readContacts.js';
import {
    writeContacts
} from '../utils/writeContacts.js';
import {
    createFakeContact
} from '../utils/createFakeContact.js';

const generateContacts = async () => {
    try {
        let contacts = await readContacts();

        if (!Array.isArray(contacts)) {
            contacts = [];
        }

        const newContact = Array.from({
            length: 5
        }, createFakeContact);

        contacts.push(...newContact);

        await writeContacts(contacts);

        console.log(contacts);
    } catch (error) {
        console.error('Error generating contacts:', error.message);
    }
};

generateContacts();
