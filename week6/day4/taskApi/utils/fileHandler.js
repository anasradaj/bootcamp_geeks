const path = require('path');
const fs = require('fs');
const dataFilePath = path.join(__dirname, '..', 'data', 'userData.json');

async function readData() {
    try {
        const fileContent = await fs.promises.readFile(dataFilePath, 'utf8');
        const json = JSON.parse(fileContent);
        return json;
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            return [];
        } else {}
    console.error('Error reading data file:', error);
    throw error;
    }}

async function writeData(data) {
    try {
        const json = JSON.stringify(data, null, 2);
        await fs.promises.writeFile(dataFilePath, json, 'utf8');
        console.log('Data written successfully');
    } catch (error) {
        console.error('Error writing data file:', error);
        throw error;    
    }}
    
module.exports = {
    readData,
    writeData
};