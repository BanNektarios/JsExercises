function fruits (fruitType) {
    //Start of switch with required statement.
    switch (fruitType) {
        //First case.
        case "Bananas":
            console.log("The price of bananas is 0,99$ per kg");
            break;
        //Second case.
        case "Oranges":
            console.log("The price of Oranges 0,79$ per kg");
            break;
        //Third case.
        case "Apples":
            console.log("The price of Apples 0.89$ per kg");
            break;
        //Fourth case.
        case "Cherries":
            console.log("The price of Cherries 2,99$ per kg");
            break;
        //Fifth case.
        case "Grapes":
            console.log("The price of Grapes 3,99$ per kg");
            break;
        //Default case, in case the user askes for something we dont sell here.
        default:
            console.log("You asked for something we don't have at the moment!")
    }
}
