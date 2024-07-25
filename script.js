const quizdb = [
    {
        question: "Q1: Which sentence is in the past tense?",
        a: "I eat an apple.",
        b: "I will eat an apple.",
        c: "I am eating an apple.",
        d: "I ate an apple.",
        ans: "ans4"
    },
    {
        question: "Q2: Which sentence is in the future tense?",
        a: "She is reading a book.",
        b: "She reads a book.",
        c: "She will read a book.",
        d: "She read a book.",
        ans: "ans3"
    },
    {
        question: "Q3: Which sentence is in the present continuous tense?",
        a: "They are playing football.",
        b: "They played football.",
        c: "They will play football.",
        d: "They play football.",
        ans: "ans1"
    },
    {
        question: "Q4: Which sentence is in the present simple tense?",
        a: "He was cooking dinner.",
        b: "He is cooking dinner.",
        c: "He cooks dinner.",
        d: "He will cook dinner.",
        ans: "ans3"
    },
    {
        question: "Q5: Which sentence is in the past continuous tense?",
        a: "I was watching TV.",
        b: "I watch TV.",
        c: "I am watching TV.",
        d: "I will watch TV.",
        ans: "ans1"
    },
    {
        question: "Q6: Which sentence is in the present perfect tense?",
        a: "She has finished her homework.",
        b: "She is finishing her homework.",
        c: "She finished her homework.",
        d: "She will finish her homework.",
        ans: "ans1"
    },
    {
        question: "Q7: Which sentence is in the future continuous tense?",
        a: "He was running.",
        b: "He is running.",
        c: "He will be running.",
        d: "He ran.",
        ans: "ans3"
    },
    {
        question: "Q8: Which sentence is in the past perfect tense?",
        a: "They had left the party.",
        b: "They are leaving the party.",
        c: "They leave the party.",
        d: "They will leave the party.",
        ans: "ans1"
    },
    {
        question: "Q9: Which sentence is in the future perfect tense?",
        a: "I will have finished my project.",
        b: "I have finished my project.",
        c: "I am finishing my project.",
        d: "I finish my project.",
        ans: "ans1"
    },
    {
        question: "Q10: Which sentence is in the present perfect continuous tense?",
        a: "She has been studying for hours.",
        b: "She is studying for hours.",
        c: "She studied for hours.",
        d: "She will study for hours.",
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



