import $ from './lib/lib';







































/* Old functional
$('#first').click(() => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').click(() => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).click(() => {
    $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est odio tempore, nesciunt consequatur, nisi autem sapiente voluptas ullam dolorum perspiciatis nulla dolore ipsam animi minus dolores mollitia? Nesciunt, quos necessitatibus.'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Здорова');
                }
            ]
        ]
    }
}));

$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));

// //$('.active').toggleClass('huy1na');

// $('button').on('click', function() {
//     $('div').eq(1).toggleClass('active');
// });
// //console.log($('div').eq(2).find('.more'));
// //console.log($('.some').closest('.finqdme'));
// //console.log($('.findme').siblings());
// //$('.findme').fadeIn(1800);
// //console.log($('button').html("Hello"));
*/