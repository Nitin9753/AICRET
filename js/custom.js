$(window).scroll(function(){
    if ($(this).scrollTop() > 40) {
       $('.header-section').addClass('sticky');
    } else {
       $('.header-section').removeClass('sticky');
    }
});

$('.midd-banner-slider').owlCarousel({
    loop: true,
    margin: 0,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
    dots: true,
    nav: false,
    items: 1,
	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

$('.certifications-slider').owlCarousel({
    loop: true,
    margin: 30,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
    dots: true,
    nav: false,
    items: 1,
	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
})

$('.opp-slider').owlCarousel({
    loop: true,
    margin: 30,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
    dots: true,
    nav: false,
    items: 1,
	responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        }
    }
})

$(document).ready(function(){
 $(".st-word").each(function() {
  
  // Some Vars
  var elText,
      openSpan = '<span class="first-word">',
      closeSpan = '</span>';
  
  // Make the text into array
  elText = $(this).text().split(" ");
  
  // Adding the open span to the beginning of the array
  elText.unshift(openSpan);
  
  // Adding span closing after the first word in each sentence
  elText.splice(2, 0, closeSpan);
  
  // Make the array into string 
  elText = elText.join(" ");
  
  // Change the html of each element to style it
  $(this).html(elText);
});

if(window.location.href.indexOf("/authorized-partners") > -1) {
    $(".sgpb-popup-builder-content-html .wpcf7-form").addClass("myforms");
    $(".sgpb-popup-builder-content-html .cf7mls_current_fs>div").removeClass("myforms");
    $(".myforms label").css('display', 'block');
    $(".myforms input").removeAttr("placeholder");
    $(".wpcf7-form .fieldset-cf7mls .cf7mls-btns").css("margin-left", "-60px");
}


$('.wpcf7-countrytext').attr('readonly', 'readonly');

// validation for first name contactform7
document.addEventListener('wpcf7submit', function(event) {
    var FirstnameField = document.querySelector('input[name="FirstName"]');
    var FirstnameValue = FirstnameField.value.trim();

    var LastnameField = document.querySelector('input[name="LastName"]');
    var LastnameValue = LastnameField.value.trim();

    // Regular expression pattern for name validation
    var pattern = /^[A-Za-z\s'-]+$/;

    // Check if the name field is empty or contains invalid characters
    if (FirstnameValue != '' && !pattern.test(FirstnameValue)) {
        // Create a new span element for the error message
        var errorMessage = document.createElement('span');
        errorMessage.textContent = 'Please enter a valid name.';
        errorMessage.classList.add('wpcf7-not-valid-tip');
        errorMessage.setAttribute('aria-hidden', 'true');

        // Add the error message span after the name field
        FirstnameField.parentNode.insertBefore(errorMessage, FirstnameField.nextSibling);
        event.preventDefault();
    }
    if (LastnameValue != '' && !pattern.test(LastnameValue)) {
        // Create a new span element for the error message
        var errorMessage = document.createElement('span');
        errorMessage.textContent = 'Please enter a valid name.';
        errorMessage.classList.add('wpcf7-not-valid-tip');
        errorMessage.setAttribute('aria-hidden', 'true');

        // Add the error message span after the name field
        LastnameField.parentNode.insertBefore(errorMessage, LastnameField.nextSibling);
        event.preventDefault();
    }
}, false);
var width = $(window).width();
    if (width <= 768) {
        $(".page-template-trainer-template .esteemed-partners-cnt h2").css("line-height", "normal");
    }
});

/* Test JS - local to server */



