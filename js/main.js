$(document).ready(function() {
    $('.possibilities__list-item').click(function() {
        $('.possibilities__list-item').removeClass('possibilities__list-item--active');
        $(this).addClass('possibilities__list-item--active');
        var dataNumber = $(this).attr('data-number');
        $('.possibilities__image').removeClass('possibilities__image--active');
        $('.possibilities__image[data-number=' + dataNumber + ']').addClass('possibilities__image--active')
    });
    $('.main-description__technologies-description-list-item-toggle').click(function() {
        if($(this).find('img').attr('src') == 'img/minus.png') {
            $(this).parent().siblings('.main-description__technologies-description-list-item-list').css('display', 'block');
            $(this).parent().siblings('.main-description__technologies-description-list-item-list').slideToggle(150);
            $(this).find('img').attr('src', 'img/plus.png');
            $(this).css('top', '30px');
        } else {
            $(this).parent().siblings('.main-description__technologies-description-list-item-list').css('display', 'none');
            $(this).parent().siblings('.main-description__technologies-description-list-item-list').slideToggle(150);
            $(this).find('img').attr('src', 'img/minus.png');
            $(this).css('top', '25px');
        }
    });
    $('.header__mobile-menu').click(function() {
        if($(this).find('img').attr('src') == 'img/mobile-menu-burger.png') {
            $(this).find('img').attr('src', 'img/mobile-menu-close.png');
            $('.mobile-menu-overlay').addClass('mobile-menu-overlay--active')
        } else {
            $(this).find('img').attr('src', 'img/mobile-menu-burger.png');
            $('.mobile-menu-overlay').removeClass('mobile-menu-overlay--active')
        }
    });
});
