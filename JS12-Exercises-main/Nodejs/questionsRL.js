const collectAnswers = require('./lib/collectAnswers');

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];

const answersEvents = collectAnswers(questions);

answersEvents.on('answer', answer => {
    console.log(`question answered: ${answer}`);
});

answersEvents.on('complete', answers => {
    console.log("Thanks for the answers. ");
    console.log(answers);
});

answersEvents.on('complete', ()=> process.exit());