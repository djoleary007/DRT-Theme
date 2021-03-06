var $ = jQuery.noConflict();

//rider hover info
$(function() {

  $(window).resize(function() {
    if($(window).width() <= 600) {
      $(".overlay-full").removeClass('hide');
    } else {
      $(".overlay-full").addClass('hide');
    }
  });
  if($(window).width() <= 600) {
    $(".overlay-full").removeClass('hide');
  }

  $(".rider-pic").hover(function(){
    $(this).find(".overlay-full").stop(true,true).fadeToggle();
  });
});

// Scroll Fade Ins
$(function() {
  var belowFold = ".below-fold-blurb",
  deepPage = ".deep-page-section",
  trainingRings = ".training-rings";

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(belowFold).removeClass('hide');
      $(belowFold).addClass('animated fadeIn');
    }
    if (scroll >= 600) {
      $(trainingRings).removeClass('hide');
      $(trainingRings).addClass('animated fadeIn');
    }
    if (scroll >=1300) {
      $(deepPage).addClass('show animated fadeIn');
    }
  });
});

//at screen width, menu changes to hamburger menu
function mobileViewUpdate() {
    $("#hamburger").hide();
  if ($(window).width() < 850) {
    $("#desktopMenu").hide();
    $("#hamburger").show();
    $("#scrollHamburger").removeClass('hide');
    $("#scrollDesktopMenu").addClass('hide');
  } else {
    $("#desktopMenu").show();
    $("#hamburger").addClass('hide');
    $("#scrollHamburger").addClass('hide');
    $("#mobileMenu").addClass('hide');
    $("#scrollDesktopMenu").removeClass('hide');
  }
}
$(window).ready(mobileViewUpdate);
$(window).resize(mobileViewUpdate);

//on hamburger click, menu opens
$(function() {
 $('#mobileMenu').hide();
 $("#hamburger, #scrollHamburger").on('click', function() {
   $("#mobileMenu").slideDown(300);
 });
});
//on exit click, menu closes
$(function() {
 $("#exit").on('click', function() {
   $("#mobileMenu").slideUp(300);
 });
});


// Packages pane
$(function() {
  $(".training-plan-block").hide();
  $(".training-plan-block-container").hide();
  $(".small-ring").on('click', function() {
    $(".anchor-link").children().removeClass("active");
    $(this).addClass('active');
    $(".training-plan-block-container").slideDown(700);
    $(".training-plan-block").hide();
    $("#small-plan").fadeIn(400);
  });
  $(".middle-ring").on('click', function() {
    $(".anchor-link").children().removeClass("active");
    $(this).addClass('active');
    $(".training-plan-block-container").slideDown(700);
    $(".training-plan-block").hide();
    $("#medium-plan").fadeIn(400);
  });
  $(".large-ring").on('click', function() {
    $(".anchor-link").children().removeClass("active");
    $(this).addClass('active');
    $(".training-plan-block-container").slideDown(700);
    $(".training-plan-block").hide();
    $("#large-plan").fadeIn(400);
  });
});


// Other Training Options
$(function() {
  $(".other-plan-content").hide();
  $("#otherPlanContainer").hide();
  $("#trainingCamp").on('click', function() {
    $(".other-plan-content").hide();
    $("#trainingCampContent").fadeIn(600);
    $("#otherPlanContainer").slideDown(500);
  });
  $("#performanceEval").on('click', function() {
    $(".other-plan-content").hide();
    $("#performanceEvalContent").fadeIn(600);
    $("#otherPlanContainer").slideDown(500);
  });
});

//Fit Options
$(function() {
  $(".fit-content").hide();
  $(".fit-header").on('click', function() {
    $(".fit-content").hide();
    $(this).next(".fit-content").addClass('animated fadeIn delay');
    $(this).next(".fit-content").slideDown(700);
  });
  $(".close").on('click', function() {
    $(".fit-content").slideUp(400);
  });
});

//article list
$(function() {
  $(".article-list-container").hide();
  $("#firstCategory").on('click', function() {
    $(".article-list").hide();
    $("#firstArticles").fadeIn(700);
    $(".article-list-container").slideDown(500);
  });
  $("#secondCategory").on('click', function() {
    $(".article-list").hide();
    $("#secondArticles").fadeIn(700);
    $(".article-list-container").slideDown(500);
  });
});

// smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
