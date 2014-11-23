//var allQuestions=[];
var index =0;
var selectedAnswer;
var answerChosen=false;

	var allQuestions =  [
	{
		question: "Which brain region's primary role is to process emotion?",
		choices: ["Amygdala", "Thalamus", "Cerebellum", "Substantia Nigra"],
		correctAnswer: button0
	},

	{
		question: "Which brain lobe is the visual processing center?",
		choices: ["Frontal Lobe", "Occipital Lobe", "Parietal Lobe", "Temporal Lobe"],
		correctAnswer: button1
	},
	
	{
		question: "Approximately how many neurons are in the human brain?",
		choices: ["86 billion", "860 billion", "86 trillion", "860 trillion"],
		correctAnswer: button0
	},

	{
		question: "Which of the following neurotransmitters is inhibitory?",
		choices: ["Dopamine", "Serotonin", "Norepinephrine", "GABA"],
		correctAnswer: button3
	},
	
	{
		question: "Which part of neurons makes up the corpus callosum?",
		choices: ["Dendrite", "Nucleus", "Axon", "Cell Body"],
		correctAnswer: button2
	}

];

$(document).ready(function(){



	addQuestion();
	addChoices();

	$('.choice-button').on('click', function() {
	document.getElementById('submit-button').disabled = false;
});


 $("#submit-button").on('click', function() {
 $("#submit-button").hide();
 $("#next-button").show();
 checkAnswer();
})


 $("#next-button").on('click', function() {
 $("#next-button").hide();
 $("#submit-button").show();
	if (index<allQuestions.length)
 	index++;
})

//turn clicked button pink and add .selected
$('.choices').on('click','button', function() {
	$('.choice-button').css('background-color', '');
	$('.choice-button').removeClass('selected')
	$(this).css('background-color', 'pink');
	$(this).addClass('selected');
 	});
})



//compare selected answer to correct answer
function checkAnswer() {

var correct = $(allQuestions[index].correctAnswer).attr('id');
var userChoice = $('button.selected').attr('id');
if (userChoice===correct) {
	console.log('correct');
}
else {
	console.log('wrong');
}
};


// 	var foundChoice = false; 
// 	var i=0;
// 	//var correct = $(allQuestions[index].correctAnswer);

// do {
// 	if ($(allQuestions[index].choices[i]).hasClass("selected")) {
// 		selectedAnswer = i;
// 		foundChoice = true; 
// 		console.log(selectedAnswer);
// 	}

// 	else 
// 		i++;	
	
// }

// while (!foundChoice);




//input new question
function addQuestion () {
	$('h2').text(allQuestions[index].question);
	document.getElementById('submit-button').disabled = true;
};

//input choices
function addChoices () {
	$('#button0').text(allQuestions[index].choices[0]);
	$('#button1').text(allQuestions[index].choices[1]);
	$('#button2').text(allQuestions[index].choices[2]);
	$('#button3').text(allQuestions[index].choices[3]);
};

