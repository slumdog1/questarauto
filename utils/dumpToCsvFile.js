const ObjectsToCsv = require('objects-to-csv');

async function dumpToCsvFile(jsonObj) {
    const csv = new ObjectsToCsv(jsonObj);
    // Save to file:
    await csv.toDisk('./test.csv');
    // Return the CSV file as string:
    console.log(await csv.toString());
}

module.exports = {dumpToCsvFile}