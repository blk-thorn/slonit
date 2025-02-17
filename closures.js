function createLogger() {
    const logs = [];

    return {
        log: function(message) {
            logs.push(message);
        },
        getLogs: function() {
            return logs;
        }
    };
}


const logger = createLogger();

logger.log("First message");
logger.log("Second message");

console.log(logger.getLogs());



function createRandomGenerator(min, max) {
    return function() {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

const randomGenerator = createRandomGenerator(1, 10);

console.log(randomGenerator());
console.log(randomGenerator());