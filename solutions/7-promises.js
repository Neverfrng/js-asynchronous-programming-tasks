import fsp from 'fs/promises';

// BEGIN
import fs from 'fs/promises';

export async function reverse(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');

        const reversedData = data.split('\n').reverse().join('\n');

        await fs.writeFile(filePath, reversedData, 'utf-8');
    } catch (error) {
        console.error('Ошибка', error);
    }
}
// END