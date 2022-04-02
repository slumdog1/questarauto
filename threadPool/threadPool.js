const config = require('../config')
const path = require("path");
const { StaticPool } = require('node-worker-threads-pool');
const pool = new StaticPool({
    size: config.num_of_workers,
    task: path.resolve(__dirname, "../worker/worker.js"),
});

module.exports = {pool}