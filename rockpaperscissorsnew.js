playerScore = 0;
ComputerScore = 0;

function playGame(playerChoice){
	const choices = ["Rock","Paper","Scissors"];
	var computerChoice = choices[Math.floor(Math.random()*3)];

	/*var resultDiv1 = document.getElementById("io1");*/
	document.getElementById("io1").value = playerChoice;

	/*var resultDiv2 = document.getElementById("io3");*/
	document.getElementById("io3").value = computerChoice;

	var result = document.getElementById("vv");

	if (playerChoice == computerChoice){
		
		result.innerHTML = "The match is tie! try again";
	}
	else if( (playerChoice == "Rock" && computerChoice == "Scissors") ||
		     (playerChoice == "paper" && computerChoice == "Rock") ||
		     (playerChoice == "Scissors" && computerChoice == "Paper")
		)
	{
		playerScore++;
		result.innerHTML = "Player won the match!";
	}
	else{
		ComputerScore++;
		result.innerHTML = "Computer won the match!";
	}

	document.getElementById("io2").value = playerScore;
	document.getElementById("io4").value = ComputerScore;

	setChoiceImage("champ1", playerChoice); // Player's choice
    setChoiceImage("champ2", computerChoice); // Computer's choice
}

function setChoiceImage(elementId, choice) {
    const element = document.getElementById(elementId);
    
    // Define paths for images based on choice
    const imagePaths = {
        "Rock": "NP images/rock.png",       
        "Paper": "NP images/paper.png",     
        "Scissors": "NP images/scissors.png" 
    };

    // Set the background image or insert an <img> tag with the corresponding image
    element.innerHTML = `<img src="${imagePaths[choice]}" alt="${choice}" width="250" height="250" >`;
}