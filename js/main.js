$(document).ready(function() {
    $('.possibilities__list-item').click(function() {
        $('.possibilities__list-item').removeClass('possibilities__list-item--active');
        $(this).addClass('possibilities__list-item--active');
    });
});
