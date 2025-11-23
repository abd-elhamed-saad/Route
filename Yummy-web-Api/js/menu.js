// ========== Side Menu Animation ==========
let navContentWidth = $('.nav-content').innerWidth();

// Hide menu initially
$('.nav-content').animate({ left: -navContentWidth }, 0);
$('.side-menu').animate({ left: -navContentWidth }, 0);

// Toggle menu on click
$('.menu-controller-icon span').click(function () {
    $('.menu-controller-icon span').toggleClass('fa-close');

    if ($('.nav-content').css('left') == '0px') {
        // Close menu
        $('.nav-content').animate({ left: -navContentWidth }, 500);
        $('.side-menu').animate({ left: -navContentWidth }, 500);
        $('nav li').animate({ top: 300 }, 500);
    } else {
        // Open menu
        $('.nav-content').animate({ left: 0 }, 500);
        $('.side-menu').animate({ left: 0 }, 500);
        for (let i = 0; i < 5; i++) {
            $('nav li').eq(i).animate({ top: 0 }, (i + 9) * 100);
        }
    }
});

// Close menu when nav link clicked
$('nav li a').click(function () {
    $('.nav-content').animate({ left: -navContentWidth }, 500);
    $('.side-menu').animate({ left: -navContentWidth }, 500);
    $('.menu-controller-icon span').toggleClass('fa-close');
});
