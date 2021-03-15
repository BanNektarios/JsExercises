const cp = require('child_process');

const questionsApp = cp.spawn('node', ["questionsRL.js"])


questionsApp.stdin.write("Alex \n")
questionsApp.stdin.write("Athens \n")
questionsApp.stdin.write("Dominate the known universe \n")

questionsApp.stdout.on('data', data => {
    console.log(`from the question app: ${data}`)
});

questionsApp.on("close", () => {
    console.log(`questionApp process exited`)
})

console.log(arguments)