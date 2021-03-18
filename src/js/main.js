import $ from './lib/lib';

//$('.active').toggleClass('huy1na');

$('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
});

//console.log($('div').eq(2).find('.more'));
//console.log($('.some').closest('.finqdme'));
console.log($('.findme').siblings());


//console.log($('button').html("Hello"));