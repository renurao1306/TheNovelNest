const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
let db = null;
let dbName = 'test';

async function connect() {
    try {
        await client.connect();
        db = client.db(dbName);
        console.log('Connected to MongoDB');
    }
    catch (e) {
        console.log('Error is ', e);
    }
}

// async function createCollection() {
//     try {
//         await connect();
//         let dbName = 'test';
//         let collectionName = 'students';
//         db = client.db(dbName);
//         console.log('Successfully created db ', dbName);
//         const collection = db.createCollection(collectionName);
//         console.log('Successfully created collection ', collectionName);
//     }
//     catch (e) {
//         console.log('Error is ', e);
//     }
// }


async function insertOneStudent() {
    try {
        await connect();
        let studentDocument = {
            name: 'renu',
            age: 22,
            marks: [78, 98, 80],
            address: {
                street: 'abcd',
                city: 'mumbai',
                zip: '123'
            }
        }

        const result = await db.collection('students').insertOne(studentDocument);
        console.log('Document inserted successfully ' + JSON.stringify(result));
    }
    catch (e) {
        console.log('Error is ', e);
    }
}


async function insertManyStudents() {
    try {
        await connect();
        let studentDocument = [
            {
                name: 'abc',
                age: 27,
                marks: [46, 86, 90],
                address: {
                    street: 'pqrs',
                    city: 'pune',
                    zip: '678'
                }
            },
            {
                name: 'xyz',
                age: 25,
                marks: [46, 87, 55],
                address: {
                    street: 'xyz',
                    city: 'delhi',
                    zip: '987'
                }
            },
            {
                name: 'pqr',
                age: 24,
                marks: [98, 45, 76],
                address: {
                    street: 'efgh',
                    city: 'mumbai',
                    zip: '498'
                }
            }
        ]

        const result = await db.collection('students').insertMany(studentDocument);
        console.log('Documents inserted successfully ' + JSON.stringify(result));
    }
    catch (e) {
        console.log('Error is ', e);
    }
}

async function findStudents() {
    try {
        await connect();
        const cursor = await db.collection('students').find();
        const result = await cursor.toArray(); // Convert cursor to array of documents
        console.log('Documents found successfully: \n' + JSON.stringify(result));
    }
    catch (e) {
        console.log('Error is ', e);
    }
}

async function deleteStudent(){
    try{
        await connect();
        let stud = {name : 'abc'}
        const result = await db.collection('students').deleteOne(stud);
        console.log('Deleted student successfully');
        console.log(result);
    }
    catch(e){
        console.log('Error is ', e);
    }
}

async function updateStudent(){
    try{
        await connect();
        let stud = {name: 'renu', marks: [10, 20, 30]}
        const result = await db.collection('students').updateOne(
            { name: stud.name }, 
            { $set: {marks: stud.marks} } 
        );

        console.log('Student updated successfully');
        console.log(result.modifiedCount);
    }
    catch(e){
        console.log('Error is ', e);
    }
}

// createCollection();
// insertOneStudent();
// insertManyStudents();
deleteStudent();
updateStudent();
findStudents();