let cityName  = $("#Destinations").val();
$( "#Destinations" ).selectmenu({ change: function() { 
    cityName = $("#Destinations").val(); 
    $(".cityContent").html(cityName)}});


// guide pop up
document.getElementById('guideButton').onclick = function() {
    $("#GuidePopup").removeClass("displayNone");
    $("#GuidePopup").addClass("displayBlock");
};

document.getElementById('ExitPopup').onclick = function() {
    $("#GuidePopup").removeClass("displayBlock");
    $("#GuidePopup").addClass("displayNone");
};
// end of popup




    $( "#datepicker" ).datepicker({
        dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    });

  

    // $('#timepicker').timepicker({
    //     timeFormat: 'h:mm',
    //     interval: 30,
    //     minTime: '8:00',
    //     maxTime: '18:00',
    //     startTime: '8:00',
    //     // defaultTime: '8:00',
    //     dynamic: false,
    //     dropdown: true,
    //     scrollbar: true,
    // });


    let timeValue = "selecteer een tijd";
    let dateValue =  "selecteer een datum";
    $("#timeText").html(timeValue);
    $("#dateText").html(dateValue);

    $("#datepicker").change(function(){
        dateValue = $("#datepicker").val();
        $("#dateText").html(dateValue);
    })


    timeValue = document.getElementById('timepicker').value;
    document.getElementById('timepicker').addEventListener("change", timeUpdate);
    function timeUpdate() {
        timeValue = document.querySelector("#timepicker").value;
        alert
        $("#timeText").html(timeValue);
    }


    

    

   
   
   

    $('.carosel').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
    prevArrow: false,
    nextArrow: false
      });

      $('.guides').slick({
        infinite: false,
        variableWidth: true,
        // slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
    prevArrow: false,
    nextArrow: false
      });


        $( "#Destinations" ).selectmenu();
        $( "#FeaturedTours" ).selectmenu();
        // $("#timepicker").selectmenu();








// Video stuff

let playing = document.getElementById('video');
let savebuttonNumber = 0;
let video = new Array ();
video[0] = "video/Video_Maastricht.mp4"
video[1] = "video/Video_Aachen.mp4"
video[2] = "video/Video_Schimmert.mp4"
video[3] = "video/Video_NewYork.mp4"

$("#FastForwardButton").on("click", function(){
    playing.currentTime += 9;
})
$(".cityButton").on("click", function(){
    let buttonNumber = $(this).attr('id');    

    if (buttonNumber == savebuttonNumber) {
        alert
        if (playing.paused) {
            playing.play();
            $(this).find("i").removeClass("fa-pause");
            $(this).find("i").addClass("fa-play");

        } else {
            playing.pause(); 
            $(this).find("i").removeClass("fa-play");
            $(this).find("i").addClass("fa-pause");}
    } else {
        playing.setAttribute("src", video[buttonNumber]);
        playing.load();
    }
    savebuttonNumber = buttonNumber;
})



        
