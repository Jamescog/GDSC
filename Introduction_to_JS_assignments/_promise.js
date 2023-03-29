const { rejects } = require('assert');
const fs = require('fs');

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (error, data) => {
            if(error) {
                reject(error);
            } else {
                resolve(data.toString());
            }
        })
    })
}

// Use the promise
readFile('dummy.txt')
    .then(data => console.log(data))
    .catch(error => console.error(error))