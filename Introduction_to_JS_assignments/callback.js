const fs = require('fs');

/**
 * reads file synchronously using callack in nodejs
 * @param {string} - filePath - the path to the file to be read
 * @callback - the callback that handle the response from fs
 * Author: Yaekob Demisse
 */

const readFile = (filePath, callback) => {
    try {
        const data = fs.readFileSync(filePath);
        callback(null, data);
    } catch (error) {
        callback(error);
    }
}

// use the function
readFile('dummy.txt', (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data.toString())
    }
})