const { parentPort, threadId } = require('worker_threads');

function calculateAllDistances(points) {
  points[0]["distance_from_prev_point"] = 0
  points[0]["worker_id"] = threadId
  
  for (let i = 1; i < points.length; i++) {
    points[i]["distance_from_prev_point"] = Math.sqrt(Math.pow(points[i-1]["latitude"] - points[i]["latitude"], 2) + Math.pow(points[i-1]["longitude"] - points[i]["longitude"], 2))
    points[i]["worker_id"] = threadId
  }

  return points
}

parentPort.on('message', (veichlePoints) => {
  
  const result = calculateAllDistances(veichlePoints);

  // return the result to main thread.
  parentPort.postMessage(result);
});