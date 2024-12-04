import {
    resolve
} from 'path';
import {
    fileURLToPath
} from 'url';

const __dirname = fileURLToPath(new URL('.',
    import.meta.url));

export const PATH_DB = resolve(__dirname, '../db/db.json');
