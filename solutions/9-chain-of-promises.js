import fsp from 'fs/promises';

// BEGIN
export async function getTypes(pathes) {
    const promis = pathes.map(async (path) => {
        try {
            const stat = await fsp.stat(path);
            return stat.isDirectory() ? 'directory' : 'file';
        } catch (e) {
            return null;
        }
    });

    return Promise.all(promis);
}
// END