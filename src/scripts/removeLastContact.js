import {
    readContacts
} from '../utils/readContacts.js';
import {
    writeContacts
} from '../utils/writeContacts.js';

const removeLastContact = async () => {
    try {
        const contacts = await readContacts();

        if (!Array.isArray(contacts) || contacts.length === 0) {
            return;
        }

        const removedContact = contacts.pop();
        await writeContacts(contacts);

        console.log(removedContact);
    } catch (error) {
        console.error('Error removing the last contact:', error.message);
    }
};

removeLastContact();
