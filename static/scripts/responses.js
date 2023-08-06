function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "HI") {
        return "Hello! Hope I can make your day.";
    } else if (input == "Thank you") {
        return "Thank you for your time! I am always here if you need me.";
    } else {
        return "You know I am desiged for responsing you, unfortunately I don't know how to answer this.";
    }
   
    
}