var mainEl = document.getElementsByTagName('main');
var countdown = document.getElementById('countdown');
var start= document.querySelector("#start");
var question = document.getElementById("currentQuestion");
var listEl= document.getElementById("question-options")
var buttons= document.querySelectorAll("#question-options");
var result= document.getElementById("answerResult")
var l1= document.createElement("li");
var l2= document.createElement("li");
var l3= document.createElement("li");
var button1 = document.createElement("button")
var button2 = document.createElement("button")
var button3 = document.createElement("button")
l1.appendChild(button1)
l2.appendChild(button2)
l3.appendChild(button3)
const Questions = [
    {
        question: "Who invented JavaScript?",
        answers: {
          a: "Douglas Crockford",
          b: "Sheryl Sandberg",
          c: "Brendan Eich"
        },
        correctAnswer: "Brendan Eich"
      },
      {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
          a: "Node.js",
          b: "TypeScript",
          c: "npm"
        },
        correctAnswer: "npm"
      },
      {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
        },
        correctAnswer: "Angular"
      },
      {
        question: "What language is used to style Elements in HTML",
        answers: {
          a: "CSS",
          b: "Javascript",
          c: "Node",
        },
        correctAnswer: "CSS"
      },
      {
        question: "Which one is a valid Integer",
        answers: {
          a: "3",
          b: "3.6",
          c: "124d1",
        },
        correctAnswer: "3"
      },
      {
        question: "What index does an array start in js",
        answers: {
          a: "0",
          b: "1",
          c: "-1",
        },
        correctAnswer: "0"
      }
]

function CD(){
    var timeleft = 99;
    countdown.innertext = timeleft
    var timer = setInterval(function(){
        if (timeleft>0){
            countdown.textContent= timeleft
            timeleft--;
        }
        else if (timeleft===0){
            countdown.textContent= timeleft
            endgame()
            clearInterval(timer)
        }

    },1000)
}
start.addEventListener("click", function(){
    CD();
    start.setAttribute("style", "display:none");
    question.textContent=Questions[0].question;
    button1.textContent= Questions[0].answers.a;
    button2.textContent= Questions[0].answers.b;
    button3.textContent= Questions[0].answers.c;
    listEl.appendChild(l1);
    listEl.appendChild(l2);
    listEl.appendChild(l3);
})


var score= 0;
Qnumber=0;
function button1pressed(){
    if (button1.textContent===Questions[Qnumber].correctAnswer){
        score++;
        result.textContent= "Correct"
        Qnumber++;
    }
    else{
        result.textContent="incorrect";
        Qnumber++;
    };
    if (Qnumber===Questions.length){
        endgame()
        return null
    }
    question.textContent=Questions[Qnumber].question;
    button1.textContent= Questions[Qnumber].answers.a;
    button2.textContent= Questions[Qnumber].answers.b;
    button3.textContent= Questions[Qnumber].answers.c;
    

};
function button2pressed(){
    if (button2.textContent===Questions[Qnumber].correctAnswer){
        score++;
        result.textContent= "Correct"
        Qnumber++;
    }
    else{
        result.textContent="incorrect"
        Qnumber++;
    };
    if (Qnumber===Questions.length){
        endgame()
        return null
    }
    question.textContent=Questions[Qnumber].question;
    button1.textContent= Questions[Qnumber].answers.a;
    button2.textContent= Questions[Qnumber].answers.b;
    button3.textContent= Questions[Qnumber].answers.c;
};
function button3pressed(){
    if (button3.textContent===Questions[Qnumber].correctAnswer){
        score++;
        result.textContent= "Correct"
        Qnumber++;
    }
    else{
        result.textContent="incorrect"
        Qnumber++;
    };
    if (Qnumber===Questions.length){
        endgame()
        return null
    };
    question.textContent=Questions[Qnumber].question;
    button1.textContent= Questions[Qnumber].answers.a;
    button2.textContent= Questions[Qnumber].answers.b;
    button3.textContent= Questions[Qnumber].answers.c;

};
button1.addEventListener("click",function(){
    button1pressed()
});
button2.addEventListener("click",function(){
    button2pressed()
});
button3.addEventListener("click",function(){
    button3pressed()
});
function endgame(){
    listEl.remove()
    question.textContent="GAME OVER";
    result.textContent="Final Score:" + score;

} 