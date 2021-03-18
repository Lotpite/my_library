import $ from './lib/lib';

$('#first').click(() => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').click(() => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).click(() => {
    $('.w-500').fadeToggle(800);
});

// //$('.active').toggleClass('huy1na');

// $('button').on('click', function() {
//     $('div').eq(1).toggleClass('active');
// });
// //console.log($('div').eq(2).find('.more'));
// //console.log($('.some').closest('.finqdme'));
// //console.log($('.findme').siblings());
// //$('.findme').fadeIn(1800);
// //console.log($('button').html("Hello"));