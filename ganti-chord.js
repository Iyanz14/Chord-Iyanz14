$(document).ready(function(){
    $("#ganti-chord").click(function(){
        $(".chord1").slideToggle();
        $(".chord2").slideToggle();
        $(".chord3").slideToggle();
    });
});
$(document).ready(function(){
    $(".chord1").click(function(){
        $(".isichord1").show();
        $(".isichord2").hide();
        $(".isichord3").hide();
    });
    $(".chord2").click(function(){
        $(".isichord2").show();
        $(".isichord1").hide();
        $(".isichord3").hide();
    });
    $(".chord3").click(function(){
        $(".isichord3").show();
        $(".isichord2").hide();
        $(".isichord1").hide();
    });
});
