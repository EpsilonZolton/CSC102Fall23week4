function playCraps(){
    //troubleshooting playCraps() function
    console.log("begun playing craps");
    //varibles to hold our random numbers to pass back to the html later
    var die1 = 0;
    var die2 = 0;
    var sum = 0;
    //now seting our new varibles to what wee need them to be
    die1 = Math.ceil(6*Math.random());
    die2 = Math.ceil(6*Math.random());
    sum = die1 + die2;
    //testing lines to make sure everything works before contuning ignore them
    //console.log(die1)
    //console.log(die2)

    //these lines use the varibles we just made and set and give it back to the html along with some text to make sure the user knows whats going on
    document.getElementById("die1Res").innerHTML = "The result of die 1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "The result of die 2 is: " + die2;
    document.getElementById("sumRes").innerHTML = "The sum of the dice is: " + sum;

    //this does the same as the lines above but also has an if statment in it to check wether or not the player has won or not and will tell the player what has happened
    var sum = die1 + die2;
    if(sum == 7 || sum == 11){
        document.getElementById("gameRes").innerHTML = "you lose";
    }else if(die1 % 2 == 0 || die1 == die2){
        document.getElementById("gameRes").innerHTML = "you win!";
    }else{
        document.getElementById("gameRes").innerHTML = "no winner";
    }
}