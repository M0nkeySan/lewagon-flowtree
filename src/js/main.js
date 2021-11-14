let mapOfQuestion = new Map();
mapOfQuestion.set(1, new Question( 1, "Are you ready to change your life?", "Definitely", "No, thanks",2,5,false ));
mapOfQuestion.set(2, new Question(2, "Awesome! Do you already have a full time occupation?", "no, I'm free", "yes, I'm very busy",4,3,false ));
mapOfQuestion.set(3, new Question(3, "Could you get available for 9 weeks?", "I could", "unfortunately, no",4,8,false ));
mapOfQuestion.set(4, new Question(4, "Are you interested in Web Development or Data Science?", "Web Dev", "Data Science",6,7,false ));
mapOfQuestion.set(5, new Question(5, "Really sad! But you can still change your mind"));
mapOfQuestion.set(6, new Question(6, "Hey future coder! Did you know you can apply in", "Barcelona", "Madrid" ));
mapOfQuestion.set(7, new Question(7, "Hey future scientist! Did you know you can apply in", "Barcelona", "Madrid"));
mapOfQuestion.set(8, new Question(8, "TODO" ));

let currentQuestionId = 1;

initQuestion();

function initQuestion(){
    let currentQuestion = mapOfQuestion.get(currentQuestionId);
    updateQuestionAndButton(currentQuestion);
}

document.getElementById("button-no").onclick = function() {
    handleButtonNo();
}

document.getElementById("button-yes").onclick = function() {
    handleButtonYes();
}


function handleButtonNo() {
    let nextQuestion = mapOfQuestion.get(mapOfQuestion.get(currentQuestionId).nextIdNo);

    if(nextQuestion.isFinal) {
        document.getElementById("question-text").textContent = nextQuestion.text;
        document.getElementById("button-yes").hidden = true;
        document.getElementById("button-no").hidden = true;
    }else {
        updateQuestionAndButton(nextQuestion);
    }

    currentQuestionId = nextQuestion.id;
}

function handleButtonYes() {
    let nextQuestion = mapOfQuestion.get(mapOfQuestion.get(currentQuestionId).nextIdYes);
    updateQuestionAndButton(nextQuestion);
    currentQuestionId = nextQuestion.id;
}

function updateQuestionAndButton(question){
    document.getElementById("question-text").textContent = question.text;
    document.getElementById("button-yes").textContent = question.yesButton;
    document.getElementById("button-no").textContent = question.noButton;
}

function Question(id, text, yesButton=null, noButton=null, nextIdYes=null, nextIdNo=null, isFinal=true) {
    this.id = id;
    this.text = text;
    this.yesButton = yesButton;
    this.noButton = noButton;
    this.nextIdYes = nextIdYes;
    this.nextIdNo = nextIdNo;
    this.isFinal = isFinal;
}
