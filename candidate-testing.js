const input = require('readline-sync');

let candidateName = "";

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];

let correctAnswers = [
  'Sally Ride',
  'true',
  '40',
  'Trajectory',
  '3'
];

let candidateAnswers = [];

function askForName() {
  candidateName = input.question("What's your name?\n");
}

function askQuestion() {
  for(let questionsI = 0; questionsI < questions.length; questionsI++) {
      candidateAnswers.push(input.question(questions[questionsI]));
  }
}

function gradeQuiz(candidateAnswers) { 
let grade = 0;  
let numCorrectAns = 0;    

console.log(`\nCandidate Name: ${candidateName}`);
  
for(let correctDisplayI = 0; correctDisplayI < questions.length; correctDisplayI++) {
    console.log(`${correctDisplayI + 1}) ${questions[correctDisplayI]}`);
    console.log(`Your Answer: ${candidateAnswers[correctDisplayI]}`);
    console.log(`Correct Answer: ${correctAnswers[correctDisplayI]}\n`);
    if (candidateAnswers[correctDisplayI].toLowerCase() === correctAnswers[correctDisplayI].toLowerCase()) {
        grade = grade + 20;
        numCorrectAns++;
    }
}
console.log(`>>> Overall Grade: ${grade}% (${numCorrectAns} of 5 responses correct) <<<`);

if(grade >= 80) {
  console.log(`>>> Status: PASSED <<<`);
} else {
  console.log(`>>> Status: FAILED <<<`);
}
  return grade;
}

function runProgram() {
  askForName();
   console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};