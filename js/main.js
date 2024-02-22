$(document).ready(function() {
    $('.possibilities__list-item').click(function() {
        $('.possibilities__list-item').removeClass('possibilities__list-item--active');
        $(this).addClass('possibilities__list-item--active');
        var dataNumber = $(this).attr('data-number');
        $('.possibilities__image').removeClass('possibilities__image--active');
        $('.possibilities__image[data-number=' + dataNumber + ']').addClass('possibilities__image--active')
    });
});
