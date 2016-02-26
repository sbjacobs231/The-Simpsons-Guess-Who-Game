var answers = ["homer", "marge", "maggie", "bart", "lisa", "moe"];


function passAnswers() {
	for(i=0; i < answers.length; i++) {
		var collect = document.getElementById("answer" + i).value
		if (collect.toLowerCase() == answers[i]) {
			var collect = document.getElementById("answer" + i);
			collect.style.color = "#00FF00";
			correctAnswers();
		} else {
			var collect = document.getElementById("answer" + i);
			collect.style.color = "#FF0000";
		}
	}
}

function correctAnswers() {
	var name = document.getElementById("name" + i);
	name.innerHTML = answers[i];

	var pic = document.getElementById("pic" + i);
	pic.src = "img/" + answers[i] + ".jpg";
} 

//return key function
for (i = 0; i < answers.length; i++) {
	$("#answer" + i).keyup(function(event){
	    if(event.keyCode == 13){
	        $("#btn").click();
	    }
	});
}