const dumpToCsvFile = require('../utils/dumpToCsvFile')
const filesHandler = require('../filesHandler/filesHandler')
const pool = require('../threadPool/threadPool').pool
const path = require("path");


async function handleCall() {
    const readedFile = filesHandler.readFileSync(path.resolve(__dirname, "../coordinates_for_node_test.csv"))
    const keys = Object.keys(readedFile);
    let actions = []
    keys.forEach((key, index) => {
        const veichlePoints = readedFile[key]
        actions.push(
            pool.exec(veichlePoints)
        );
    });

    Promise.all(actions).then((values) => {
        var merged = [].concat.apply([], values);
        var sorted = merged.sort((a, b) => {
            const a_id = a[Object.keys(a)[0]]
            const b_id = b[Object.keys(b)[0]]
            return a_id - b_id;
        });
        dumpToCsvFile.dumpToCsvFile(sorted)
    });
}

module.exports = {handleCall}