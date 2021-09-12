var curr_ques = 0;
const quiz = [];

const ques = document.getElementById('ques');
const option1 = docum.getElementById('a-text');
const option2 = docum.getElementById('b-text');
const option3 = docum.getElementById('c-text');
const option4  = docum.getElementById('d-text');
var i=0;
function quiz(){
      ques.innerHTML=   quizdata[i];
      (a-text).innerHTML = quizdata[i].a;
      (b-text).innerHTML = quizdata[i].b;
      (c-text).innerHTML = quizdata[i].c;
      (d-text).innerHTML = quizdata[i].d;

    i++;

}