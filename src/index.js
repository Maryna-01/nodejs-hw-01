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
    console.log('Application is running...');
    const contacts = await readContacts();
    console.log('Existing contacts:', contacts);
    const newContact = createFakeContact();
    console.log('New contact:', newContact);

    contacts.push(newContact);
    await writeContacts(contacts);

    console.log('Contacts updated successfully!');
})();
