import {
    readContacts
} from './utils/readContacts.js';
import {
    writeContacts
} from './utils/writeContacts.js';
import {
    createFakeContact
} from './utils/createFakeContact.js';

(async () => {
    const contacts = await readContacts();
    const newContact = createFakeContact();

    contacts.push(newContact);
    await writeContacts(contacts);

    console.log('Contacts updated successfully!');
})();
