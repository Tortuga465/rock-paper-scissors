answer_list = ["rock", "paper", "scissors"];
personChoice = "";
computerChoice = "";

function computerPlay() {
    let random_number = Math.floor(Math.random() * 3);
    let answer = answer_list[random_number];    
    return(answer);
    //return ("Computer answer is: " + answer + '   ' + "Random number is: " + random_number);
}

function personPlay() {
    console.log("Enter your choice");
    let input = prompt();
    if (input.toLowerCase() == "rock") {
        answer = "rock";
    }
    else if (input.toLowerCase() == "paper") {
        answer = "paper";
    }

    else if (input.toLowerCase() == "scissors") {
        answer = "scissors";
    }
    else {
        return (undefined);
    }
    //return ("Persons choice is: " + answer);
    return(answer);
}

function playRound(personChoice, computerChoice) {
    computerChoice = computerPlay();
    personChoice = personPlay();
    console.log(personChoice);
    console.log(computerChoice);
    if(computerChoice == undefined || personChoice == undefined)
    {
        return("fail");
    }
    if (personChoice == computerChoice) {
        return ("draw");
    }
    else if ((personChoice == "rock" && computerChoice == "scissors")
     || (personChoice == "paper" && computerChoice == "rock") || (personChoice == "scissors" && computerChoice == "paper"))
     {        
        return("Human wins!");
     }
    else
    {
        return("Bot wins!");
    }
}
