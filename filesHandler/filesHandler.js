const fs = require('fs');

function readFileSync(fileName) {
    csv = fs.readFileSync(fileName)
    var array = csv.toString().split("\r");
    let result = {};
    let headers = array[0].split(",")
    for (let i = 1; i < array.length - 1; i++) {
        let item = array[i].split(',')
        let obj = {}
        obj[headers[0]] = parseFloat(item[0])
        obj[headers[1]] = parseFloat(item[1])
        obj[headers[2]] = parseFloat(item[2])
        obj[headers[3]] = parseFloat(item[3])
        const veichleId = item[1]
        if (!result[veichleId]) { result[veichleId] = [obj] } else result[veichleId].push(obj)
    }
    return result
}


module.exports = {readFileSync}