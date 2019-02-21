$(document).ready(function () {
    var Random = Math.floor(Math.random() * 121 + 19)
    $('#number').text(Random);
    
    //play music
    var audio = document.getElementById("myAudio");
    function setHalfVolume() {
        audio.volume = 0.2;
    }
    setHalfVolume();

    var GeneratedNumbers = []
    var total = 0;
    var wins = 0;
    var losses = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function fourRandomNumbers() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 12 + 1);
            GeneratedNumbers.push(num);
        }
    }
    fourRandomNumbers();

    //resets the game
    function reset() {
        Random = Math.floor(Math.random()* 69 + 30);
        $('#number').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total = 0;
        $('#combined').text(total);
    }

    //adds the wins to the total
    function win() {
        alert("You were able to fend off the attack!!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    //adds the losses to the total
    function loss() {
        alert("You were defeated. Humanity and the other races have perished");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    
    $('#one').on('click', function () {
        total = total + GeneratedNumbers[0];
        $('#combined').text(total);

        //sets win/lose conditions
        if (total == Random) {
            win();
        }
        else if (total > Random) {
            loss();
        }
    })

    $('#two').on('click', function () {
        total = total + GeneratedNumbers[1];
        $('#combined').text(total);
        
        //sets win/lose conditions
        if (total == Random) {
            win();
        }
        else if (total > Random) {
            loss();
        }
    })

    $('#three').on('click', function () {
        total = total + GeneratedNumbers[2];
        $('#combined').text(total);

        //sets win/lose conditions
        if (total == Random) {
            win();
        }
        else if (total > Random) {
            loss();
        }
    })

    $('#four').on('click', function () {
        total = total + GeneratedNumbers[3];
        $('#combined').text(total);

        //sets win/lose conditions
        if (total == Random) {
            win();
        }
        else if (total > Random) {
            loss();
        }
    });

});