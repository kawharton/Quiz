var index = 0; //set array index to 0
var selectedAnswer; //answer selected by user
var score = 0; //set quiz score to 0

var allQuestions = [
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

	//disable submit button
	document.getElementById('end-button').disabled = true;

	//add questions and choices
	addQuestion();
	addChoices();

	//when a choice is chosen, enable submit button
	$('.choices').on('click', '.choice-button', function() {
		document.getElementById('submit-button').disabled = false;

	});

	//what happens when submit button is clicked
 	$('.confirm').on('click','#submit-button', function() {
 		
 		if (index<allQuestions.length-1){
 		$('#submit-button').hide();
		$('#next-button').show();
		$('#end-button').hide();
		$('.choice-button').attr('disabled', true);
 		checkAnswer();
 		}

	 	else {
	 		$("#submit-button").hide();
			$("#next-button").hide();
			$("#end-button").hide();
			$("#result-button").show();
			$(".choice-button").attr("disabled", true);
	 		checkAnswer();
	 	}
	});


	//what happens when next button is clicked
	$(".confirm").on('click','#next-button', function() {
		$("#next-button").hide();
		$("#submit-button").show();
		$("#end-button").hide();
			
		if (index<allQuestions.length-1){
	 		index++;
	 		$('.choice-button').css('background-color', '');
			$('.choice-button').removeClass('selected');
		 	$('.feedback').hide();
		 	addQuestion();
		 	addChoices();
		 	$('.choice-button').attr('disabled', false);
		 }

	 	else if (index===4){
	 		$('.choice-button').css('background-color', '');
			$('.choice-button').removeClass('selected');
			$('#next-button').hide();
	  		$('#submit-button').hide();
	 	}
	});

	//what happens when the result button is clicked
	 $('.confirm').on('click','#result-button', function() {
	 	$('#end-button').show();
	  	$('.modal-body').append("Your Score: " + score + " out of 5!");
	  	$('.feedback').hide();
	  	$('#result-button').hide();
	 });

	//turn clicked button pink and add .selected
	$('.choices').on('click','button', function() {
		$('.choice-button').css('background-color', '');
		$('.choice-button').removeClass('selected')
		$(this).css('background-color', 'pink');
		$(this).addClass('selected');
	 	});
});

//compare selected answer to correct answer
function checkAnswer() {

	var correct = $(allQuestions[index].correctAnswer).attr('id');
	var userChoice = $('button.selected').attr('id');
	if (userChoice===correct) {
		$('.correct').show();
		$('.incorrect').hide();
		score++;
	}
	else {
		$('.incorrect').show();
		$('.correct').hide();
	}
};

//input new question and disable submit button
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
