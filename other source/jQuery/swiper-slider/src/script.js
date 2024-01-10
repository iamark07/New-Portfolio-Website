$(document).ready(function () {
    var swiper = new Swiper('.swiper-slider-container', {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 4000, // Set the delay in milliseconds
            disableOnInteraction: false, // Allow manual interaction to continue autoplay
        },
        loop: true, // Continues looping through the slides
    });
});

// $(document).ready(function () {
//     var get_more_swiper = new Swiper('.get_more_swiper_container', {
//         direction: 'horizontal',
//         slidesPerView: 1,
//         mousewheel: false,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         autoplay: {
//             delay: 4000, // Set the delay in milliseconds
//             disableOnInteraction: false, // Allow manual interaction to continue autoplay
//         },
//         loop: true, // Continues looping through the slides
//     });
// });



