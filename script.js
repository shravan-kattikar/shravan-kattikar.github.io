const questions =[
    {
        question: "The largest island in the world is?",
        answers: [
            { text: "port blair", correct: false },
            { text: "Green land", correct: true },
            { text: "andaman", correct: false },
            { text: "maldives", correct: false },
        ]
    },
    {
        question: " National Girl Child Day in India is celebrated on?",
        answers: [
            { text: "24 january", correct: true },
            { text: "8 january", correct: false },
            { text: "16 february", correct: false },
            { text: "9 march", correct: false },
        ]
    },
    {
        question: "Discovery of India was written by?",
        answers: [
            { text: "Naroji", correct: false },
            { text: "M.K gandhi", correct: false },
            { text: "Nehru", correct: true },
            { text: "Jinnah", correct: false },
        ] 
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: "sydney", correct: false },
            { text: "melbourne", correct: false },
            { text: "canberra", correct: true },
            { text: "brisbane", correct: false },
        ] 
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest ", correct: true},
            { text: "Mount Killimannjaro", correct: false },
            { text: "Denali", correct: false },
        ] 
    },
    
    
];
const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo +". "+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct=answers.correct;
        }
        button.addEventListener("click", selectAnswer);    
    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}


function  selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect= selectedBtn.dataset.correct =="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
     }else{
        selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButtons.children).forEach(button => {
       if(button.dataset.correct=="true"){
        button.classList.add("correct");
    }
    button.disabled=true;

});
nextButton.style.display="block";
    
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
   currentQuestionIndex++;
   if(currentQuestionIndex < questions.length){
    showQuestion();
   }else{
    showScore();

   }

   }
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();


    }else{
        startQuiz();
    }
});
startQuiz();