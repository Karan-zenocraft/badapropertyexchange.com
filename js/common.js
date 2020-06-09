
//var px = ($('.message').outerHeight()) - ($('.post_feed').outerHeight() * 2);
//if (document.body.scrollTop >= px || document.documentElement.scrollTop >= px) {
//    console.log(px);
//}

var lastScrollTop = 0;
$(window).scroll(function () {
    var x = document.getElementById("getStoreLink");
    /* var offsetHeight = document.getElementById('displayAndroidAppBanner').offsetHeight; */
    var st = $(this).scrollTop();
    if (30 <= lastScrollTop) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    lastScrollTop = st;
});

$('body').on('click', '.stickyBannerClose', function (e) {
    $("#displayAndroidAppBanner").hide(500);
});
/*--------------------*/
jQuery(document).ready(function ($) {
    // Scroll to the desired section on click
    // Make sure to add the `data-scroll` attribute to your `<a>` tag.
    // Example: 
    // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top - 68
        }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);
}(jQuery));
/*-----------------*/
AOS.init({
    easing: 'ease-in-out-sine'
});
/*--------*/

if ($('.mainheader').length > 0) {
    $(window).on('scroll', function () {
        // Add/remove classes to the header when scroll position is reached.
        if ($(window).scrollTop() > 10) {
            $('.navbar ').addClass('shrink');
        } else {
            $('.navbar ').removeClass('shrink');
        }

    });
}

$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.page-section').each(function (i) {
        if ($(this).position().top <= scrollDistance + 200) {
            $('.navigation a.active').removeClass('active');
            $('.navigation a').eq(i).addClass('active');
        }
    });
}).scroll();

var navMain = $("#navbarSupportedContent");
navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
});