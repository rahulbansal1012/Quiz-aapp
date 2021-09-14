

const quiz = [{
  question: "What is the most used programming language in 2019?",
  a: "Java",
  b: "C",
  c: "Python",
  d: "JavaScript",
  correct: "d",
},
{
  question: "Who is the President of US?",
  a: "Florin Pop",
  b: "Donald Trump",
  c: "Ivan Saldano",
  d: "Mihai Andrei",
  correct: "b",
},
{
  question: "What does HTML stand for?",
  a: "Hypertext Markup Language",
  b: "Cascading Style Sheet",
  c: "Jason Object Notation",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "a",
},
{
  question: "What year was JavaScript launched?",
  a: "1996",
  b: "1995",
  c: "1994",
  d: "none of the above",
  correct: "b",
},
];

let answer = document.querySelectorAll(".selected");
const ques = document.getElementById("ques");
const option1 = document.getElementById('a-text');
const option2 = document.getElementById('b-text');
const option3 = document.getElementById('c-text');
const option4 = document.getElementById('d-text');
var current_ques = 0;
const submit_btn = document.getElementById("btn");

const selected_option = "";

//function to load quiz
function load_quiz_data() {

  //deslect the previous option
  deselect();

  const current_quiz = quiz[current_ques]
  ques.innerHTML = current_quiz.question;
  option1.innerHTML = current_quiz.a;
  (option2).innerHTML = current_quiz.b;
  (option3).innerHTML = current_quiz.c;
  (option4).innerHTML = current_quiz.d;
}
load_quiz_data();

//Function to deselect
function deselect() {
  answer.forEach((ans_el) => {
    ans_el.checked = false;
  });
}

//Fun to select
function getSelected() {
  let ans = undefined;
  answer.forEach((ans_el) => {
    if (ans_el.checked) {
      ans = ans_el.id;
    }
  });
  console.log(ans);
  return ans;
}
getSelected();



//submit btn
var score = 0;
submit_btn.addEventListener("click",
  () => {

    
    const ansget = getSelected();
    if (ansget) {
      if (ansget === quiz[current_ques].correct) {
        score++;
      }
      current_ques++;
      if (current_ques < quiz.length) {
  load_quiz_data();
      }
      else
        alert('yeee!! Quiz Finished you scored '+score );
    }

  });


