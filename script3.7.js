
$('#task1 p').text('Змінений текст');

$('#task1').addClass('highlight');
$('.highlight').css('color', 'red');

$('#task2 li').addClass('list-item');
$('.list-item').css('background-color', 'lightgray');

$('.highlight').fadeIn(2000); 
$('#task1 p:last-child').text('Новий останній текст');

$('#removeListItemsButton').on('click', function() {
    $('.list-item').remove();
});

