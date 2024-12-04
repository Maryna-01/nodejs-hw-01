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
            console.warn('Contacts is not an array. Initializing an empty array.');
            contacts = [];
        }

        const newContact = createFakeContact();
        console.log('Generated contact:', newContact);

        contacts.push(newContact);

        await writeContacts(contacts);

        console.log('Contact generated and saved successfully!');
    } catch (error) {
        console.error('Error generating contacts:', error.message);
    }
};

generateContacts();
