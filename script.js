const quizdb = [
    {
        question: "Q1: Which sentence is in the past perfect tense?",
        a: "She has finished her work.",
        b: "She had finished her work.",
        c: "She finishes her work.",
        d: "She is finishing her work.",
        ans: "ans2"
    },
    {
        question: "Q2: Choose the correct preposition to complete the sentence: 'He is good _____ mathematics.'",
        a: "at",
        b: "in",
        c: "on",
        d: "for",
        ans: "ans1"
    },
    {
        question: "Q3: Which sentence is in the future continuous tense?",
        a: "She will write a letter.",
        b: "She will be writing a letter.",
        c: "She writes a letter.",
        d: "She is writing a letter.",
        ans: "ans2"
    },
    {
        question: "Q4: Choose the correct preposition to complete the sentence: 'The book is _____ the table.'",
        a: "on",
        b: "in",
        c: "at",
        d: "for",
        ans: "ans1"
    },
    {
        question: "Q5: Which sentence is in the present perfect continuous tense?",
        a: "He has been working here for five years.",
        b: "He works here for five years.",
        c: "He worked here for five years.",
        d: "He is working here for five years.",
        ans: "ans1"
    },
    {
        question: "Q6: Choose the correct preposition to complete the sentence: 'She is afraid _____ spiders.'",
        a: "with",
        b: "from",
        c: "of",
        d: "to",
        ans: "ans3"
    },
    {
        question: "Q7: Which sentence is in the past continuous tense?",
        a: "They are watching a movie.",
        b: "They will be watching a movie.",
        c: "They were watching a movie.",
        d: "They watch a movie.",
        ans: "ans3"
    },
    {
        question: "Q8: Choose the correct preposition to complete the sentence: 'I will meet you _____ the park.'",
        a: "on",
        b: "in",
        c: "at",
        d: "for",
        ans: "ans3"
    },
    {
        question: "Q9: Which sentence is in the future perfect tense?",
        a: "She will finish her homework.",
        b: "She will have finished her homework.",
        c: "She finishes her homework.",
        d: "She is finishing her homework.",
        ans: "ans2"
    },
    {
        question: "Q10: Choose the correct preposition to complete the sentence: 'He is interested _____ learning new languages.'",
        a: "of",
        b: "for",
        c: "in",
        d: "at",
        ans: "ans3"
    },
    {
        question: "Q11: Which sentence is in the present simple tense?",
        a: "He is eating dinner.",
        b: "He eats dinner.",
        c: "He will eat dinner.",
        d: "He has eaten dinner.",
        ans: "ans2"
    },
    {
        question: "Q12: Choose the correct preposition to complete the sentence: 'She arrived _____ the airport on time.'",
        a: "in",
        b: "on",
        c: "to",
        d: "at",
        ans: "ans4"
    },
    {
        question: "Q13: Which sentence is in the present continuous tense?",
        a: "They are playing football.",
        b: "They played football.",
        c: "They will play football.",
        d: "They play football.",
        ans: "ans1"
    },
    {
        question: "Q14: Choose the correct preposition to complete the sentence: 'The cat is hiding _____ the couch.'",
        a: "on",
        b: "in",
        c: "under",
        d: "at",
        ans: "ans3"
    },
    {
        question: "Q15: Which sentence is in the future perfect continuous tense?",
        a: "I will have been studying for hours.",
        b: "I will study for hours.",
        c: "I study for hours.",
        d: "I have studied for hours.",
        ans: "ans1"
    }
];




const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
const timeDiv = document.querySelector('.time');

// Function to get Bangladeshi time
const getBangladeshiTime = () => {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    return new Intl.DateTimeFormat('en-US', options).format(now);
}

// Display Bangladeshi time
const updateTime = () => {
    const time = getBangladeshiTime();
    timeDiv.innerHTML = `<h5 class="timetext"> ${time}</h5>`;
};

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

let count = 0;
let score = 0;



const load = () => {
    const questionList = quizdb[count];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    resetAnswers(); // Reset the radio buttons when loading a new question
};

const resetAnswers = () => {
    answers.forEach((element) => {
        element.checked = false;
    });
};

const getCheckedAnswer = () => {
    let answer;
    answers.forEach((element) => {
        if (element.checked) {
            answer = element.id;
        }
    });
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer) {
        if (checkedAnswer === quizdb[count].ans) {
            score++;
        }

        count++;

        if (count < quizdb.length) {
            load();
        } else {
            showScore.innerHTML = `
                <h2>Your Score is ${score}/${quizdb.length}</h2>
                <button class="resetbtn" onclick="location.reload()">Reset</button>
            `;
            showScore.classList.remove('ScoreArea');
            showScore.style.display = 'block';
        }
    } else {
        alert("Please select an answer");
    }

    if (count < quizdb.length) {
    numberOfQuestion();
    }
});

 const numberOfQuestion =()=>{
    qstnNumber.innerHTML = `
                <h4> ${count+1}/${quizdb.length}</h4>
                
            `;
 }

// Load the first question
load();
numberOfQuestion();



