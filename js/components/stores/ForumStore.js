var answerData = {
    "1": {
        body: "React is awesome.",
        correct: false
    },
    "2": {
        body: "React and flux rock.",
        correct: false
    },
    "3": {
        body: "React is pretty cool.",
        correct: false
    },
};

var ForumStore = new EventEmitter();

ForumStore.getAnswers = function(){
	return answerData;
};