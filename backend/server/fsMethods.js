const fs = require('fs').promises;

async function fileMethods(){
    try{
        await fs.writeFile('sample.txt', 'This is a sample.txt file\n');
        console.log('Finished writing');

        await fs.appendFile('sample.txt', 'This is another line\n');
        console.log('Finished appending');

        const data = await fs.readFile('sample.txt', 'utf-8');
        console.log('Finished reading');
        console.log(data);
    }
    catch(err){
        console.log(`An error occurred: ${err.message}`);
    }
}

fileMethods();