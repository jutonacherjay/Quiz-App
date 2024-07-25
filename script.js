const quizdb = [
    {
        question: "Q1: What is 5 + 3?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        ans: "ans3"
    },
    {
        question: "Q2: What is 10 - 4?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        ans: "ans2"
    },
    {
        question: "Q3: What is 7 + 2?",
        a: "8",
        b: "9",
        c: "10",
        d: "11",
        ans: "ans2"
    },
    {
        question: "Q4: What is 6 - 1?",
        a: "4",
        b: "5",
        c: "6",
        d: "7",
        ans: "ans2"
    },
    {
        question: "Q5: What is 3 + 4?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        ans: "ans2"
    },
    {
        question: "Q6: What is 9 - 2?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        ans: "ans3"
    },
    {
        question: "Q7: What is 4 + 5?",
        a: "8",
        b: "9",
        c: "10",
        d: "11",
        ans: "ans2"
    },
    {
        question: "Q8: What is 8 - 3?",
        a: "4",
        b: "5",
        c: "6",
        d: "7",
        ans: "ans2"
    },
    {
        question: "Q9: What is 2 + 6?",
        a: "7",
        b: "8",
        c: "9",
        d: "10",
        ans: "ans2"
    },
    {
        question: "Q10: What is 7 - 5?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans2"
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
    timeDiv.innerHTML = `<h4 class="timetext">Today's time is ${time}</h4>`;
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
});

// Load the first question
load();
