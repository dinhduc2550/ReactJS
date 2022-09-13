function logger(log) {
    console.log(log);
}

const logger2 = (log) => {
    console.log(log);
}

const sum = (a, b) => a + b;
const sum2 = (a, b) => ({ a: a, b: b });

const course = {
    name: 'Javascript basic!',
    getName: function() {
        return this.name;
    }
}
console.log(course.getName());

logger('Message...');
logger2('Message...');

console.log(sum(2, 2));
console.log(sum2(2, 2));