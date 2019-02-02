
$(document).ready(function() {

    // initialize variables here
    var wins = 0;
    var loses = 0;

    //variable to hold the running total when crystal buttons are clicked
    var score=0;

    // formula to generate a random number between 19 and 120
    var randonNumber = "";
    console.log('random number : ',randonNumber);

    // formula to generate the crystal random number between 1 and 12
    var crystalRandonNumber = Math.floor((Math.random() * 12) + 1);
    console.log('crystal random number : ',crystalRandonNumber);




    //function to restart game whenever there is a loss/win
    function restartGame(){
        // reset necessary variables here
        score = 0;
        randonNumber = Math.floor((Math.random() * 102) + 19);        
        
        //display the new random number
        $("#yourscore").text(score);

        // display the random number on the div
        $("#myDiv").text(randonNumber);     
        
        //reset the crystals random number on the buttons
        $("#crystal1").attr("value",Math.floor((Math.random() * 12) + 1));
        $("#crystal2").attr("value",Math.floor((Math.random() * 12) + 1));
        $("#crystal3").attr("value",Math.floor((Math.random() * 12) + 1));
        $("#crystal4").attr("value",Math.floor((Math.random() * 12) + 1));
        
    }

    // the onclick function when a crystal is clicked
    $(".btnCrystal").on("click", function () {

        // get the crystal random number from the cliked crystal
        console.log('value : ',$(this).val());
         
        // add the crystal random number into the random number div.
        addCrystalvalues($(this).val());

        // display your current score
        $("#yourscore").text(score);
        // $("#random-number").text(crystalRandonNumber);

        console.log("current score: ",score+"  current random number : ",randonNumber);
        
        // check if win or loss
        calculateWin();

    });

    function addCrystalvalues(clickedRandomNumber){
        score = score + parseInt(clickedRandomNumber);
        console.log('your total score is : ',score);
    }

    // function to compare the score to the random number and increment win/loses accordingly
    function calculateWin(){
        if(score > randonNumber){
            loses++
            alert("Your score is greater than random number. You lose!");

            //update losses
            $("#yourlosses").text(loses);

            //reset game
            restartGame();

        }else if(score === randonNumber){
            wins++
            alert("You win a game !");

            //update wins
            $("#yourwins").text(wins);

            //reset game
            restartGame();
            
        }else{
            console.log("Continue playing");
        }

    }

    // start game from here
    restartGame();


});
