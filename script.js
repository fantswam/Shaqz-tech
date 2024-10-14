function scrollto(div){
    $('html,body').animate(
    {
     scrollTop: $("#"+div).offset().top
    },'slow');
   };





$(window).scroll(function(){
    if($(document).scrollTop() > 300){
        $(".main-nav").addClass("myClass");

    }else{
        $(".main-nav").removeClass("myClass");
    }
})

$(window).scroll(function(){
    if($(document).scrollTop() > 100){
        $(".top-nav").addClass("myNav");

    }else{
        $(".top-nav").removeClass("myNav");
    }
})

$(window).scroll(function(){
    if($(document).scrollTop() > 800){
      document.getElementById('top').style.display = "block";
    }else{
        document.getElementById('top').style.display = "none";
    }
})


let notification = function(){
    alert("OOPS! this page is still under construction");
}


$(document).ready(function(){
    $(".question_one").click(function(){
        $(".first").slideToggle(500);
    })
})

$(document).ready(function(){
    $(".question_two").click(function(){
        $(".second").slideToggle(500);
    })
})

$(document).ready(function(){
    $(".question_three").click(function(){
        $(".third").slideToggle(500);
    })
})

$(document).ready(function(){
    $(".question_four").click(function(){
        $(".forth").slideToggle(500);
    })
})

$(document).ready(function(){
    $(".question_five").click(function(){
        $(".fifth").slideToggle(500);
    })
})

$(document).ready(function(){
    $(".question_six").click(function(){
        $(".sixth").slideToggle(500);
    })
})

$(document).ready(function(){
    $(".question_seven").click(function(){
        $(".seventh").slideToggle(500);
    })
})

$(document).ready(function(){
    $(".question_eight").click(function(){
        $(".eight").slideToggle(500);
    })
})

$(document).ready(function(){
    $(".question_nine").click(function(){
        $(".nine").slideToggle(500);
    })
})