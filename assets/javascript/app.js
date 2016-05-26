var correctAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;

function startGame ()
	{
$('#wrongAnswer').html(correctAnswer);
$('#correctAnswer').html(wrongAnswer);
$('#unanswered').html(unanswered);
$('#results').hide();
	}

startGame();


var secondsLeft = 30;
var interval = setInterval(function() {
		secondsLeft--;
    document.getElementById('display').innerHTML = secondsLeft;

    if (secondsLeft <= 0)
    {
    	onSumbit();
      document.getElementById('display').innerHTML = '0';
      clearInterval(interval);
    }
}, 1000);


function onSumbit(){
for (k = 1; k <= 8; k++){

	var questionAnswered = true;
		for (i = 1; i <= 4; i++){
			var temp = "q" + k + "_" + i;
			var answerNumber = document.getElementById(temp);
			if (answerNumber.checked == true) {

			questionAnswered = false;
				if (answerNumber.value == 'wrong') {
					wrongAnswer++;
					$('#wrongAnswer').html(wrongAnswer);
				}
				else if (answerNumber.value == 'correct') {
					correctAnswer++;
					$('#correctAnswer').html(correctAnswer);
				}
			}
		}
		if (questionAnswered == true) {
			unanswered++;
			$('#unanswered').html(unanswered);
		}

}
$('#quiz').hide();
$('#results').show();
clearInterval(interval);
}


$('#done').click(onSumbit);

