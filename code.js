$(document).ready(function() {

    let counter = 1;
    let count = 0;

    const dog_Bones = 5;

    let bonesRemaining = dog_Bones;

    $("span#bonesRemain").text(bonesRemaining);

    function createGrass() {

        let grass = $("<span>");
        grass.addClass("grass");
        grass.attr("id", counter++);
        $("div#game").append(grass);

    }

    for (let rows = 0; rows < dog_Bones; rows++) {

        for (let squares = 0; squares < dog_Bones; squares++) {
            createGrass();
        }

        $("div#game").append("<br>");

    }


    let numbers = [];
    while (numbers.length < dog_Bones) {
        let r = Math.floor(Math.random() * dog_Bones * dog_Bones) + 1;
        if (numbers.indexOf(r) === -1) numbers.push(r);
    }


    for (let i = 0; i < numbers.length; i++) {
        $(`#${numbers[i]}`).addClass("boneHere");
    }


    function updateMeter() {
        dogMeter = Math.floor(Math.random() * ((dog_Bones * 2) - dog_Bones + 1)) + dog_Bones;
        count += dogMeter;
    }


    $("div#game").on("click", "span.grass", function(event) {

        $target = $(event.target);
        $target.click(false);
        $target.addClass("dirt");

        updateMeter();

        $("#meter").width(`${count}%`);
        $("#meter").text(`${count}%`);
        checkStatus();

    });


    $("div#game").on("click", "span.boneHere", function(event) {


        $target.addClass("bone");
        bonesRemaining = bonesRemaining - 1;
        $("span#bonesRemain").text(bonesRemaining);
        checkStatus();

    });

    function checkStatus() {


        if (bonesRemaining == 0) {
            $("#message").text("Congrats, you found all 5 bones!");
            $(document.getElementsByTagName("span")).click(false);
        }


        else if (count > 100) {
            $("#message").text("Oh no! :( Maybe next time!");
            $(document.getElementsByTagName("span")).click(false);
        }

    }
});
