const fs = require('fs');

fs.writeFile('sample.txt', 'Hello world. This is line 1.\n', (err) => {
    if (err) {
        console.log('Error occurred', err);
    }
    else {
        console.log('Written to sample.txt');
    }
});

fs.appendFile('sample.txt', 'This is line 2.\n', (err) => {
    if (err) {
        console.log('Error occurred', err);
    }
    else {
        console.log('Appended to sample.txt');
    }
});


fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error occurred', err);
    }
    else {
        console.log('Reading from sample.txt');
        console.log(data);
    }
});