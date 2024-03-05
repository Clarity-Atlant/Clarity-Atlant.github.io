$(document).ready(function() {
    $('.possibilities__list-item').click(function() {
        $('.possibilities__list-item').removeClass('possibilities__list-item--active');
        $(this).addClass('possibilities__list-item--active');
        var dataNumber = $(this).attr('data-number');
        $('.possibilities__image').removeClass('possibilities__image--active');
        $('.possibilities__image[data-number=' + dataNumber + ']').addClass('possibilities__image--active');
    });
    $('.main-description__technologies-description-list-item').click(function() {
        if($(this).find('img').attr('src') == 'img/minus.png') {
            $(this).find('.main-description__technologies-description-list-item-list').css('display', 'block');
            $(this).find('.main-description__technologies-description-list-item-list').slideToggle(150);
            $(this).find('img').attr('src', 'img/plus.png');
            $(this).find('.main-description__technologies-description-list-item-toggle').css('top', '30px');
        } else {
            $('.main-description__technologies-description-list-item-list').css('display', 'none');
            $('.main-description__technologies-description-list-item-toggle').find('img').attr('src', 'img/plus.png');
            $(this).find('.main-description__technologies-description-list-item-list').css('display', 'none');
            $(this).find('.main-description__technologies-description-list-item-list').slideToggle(150);
            $(this).find('img').attr('src', 'img/minus.png');
            $(this).find('.main-description__technologies-description-list-item-toggle').css('top', '25px');
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
    $('.possibilities__mobile-nav-item').click(function() {
        var dataNumber = $(this).attr('data-number');
        // if($(this).hasClass('possibilities__mobile-nav-item--active')) {
        //     $(this).removeClass('possibilities__mobile-nav-item--active');
        // } else {
            $('.possibilities__mobile-nav-item').removeClass('possibilities__mobile-nav-item--active');
            $(this).addClass('possibilities__mobile-nav-item--active');
            $('.possibilities__image').removeClass('possibilities__image--active');
            $('.possibilities__image[data-number=' + dataNumber + ']').addClass('possibilities__image--active');
            $('.possibilities__list-item').removeClass('possibilities__list-item--active');
            $('.possibilities__list-item[data-number=' + dataNumber + ']').addClass('possibilities__list-item--active');
        // }
    });
    const swiper = new Swiper('.swiper', {
        width: 360,
        slidesPerView: 1.01,
        slidesPerColumn: 1.5,
        centeredSlides: true,
        spaceBetween: 10,
    });
    const swiperIntentions = new Swiper('.swiper-intentions', {
        width: 360,
        slidesPerView: 1.01,
        slidesPerColumn: 1.5,
        centeredSlides: true,
        spaceBetween: 10,
    });
    $('.slick').slick({
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: false,
        loop: false,
        centerMode: true,
        variableWidth: true,
        mobileFirst: true,
        width: 330,
    });
    $('.intentions__item-bottom-image').mouseenter(function() {
        $(this).find('img').attr('src', 'img/work-black.png')
    });
    $('.intentions__item-bottom-image').mouseleave(function() {
        $(this).find('img').attr('src', 'img/arrow.png')
    });
    $('.intentions-mobile__item-bottom-image').mouseenter(function() {
        $(this).find('img').attr('src', 'img/work-black.png')
    });
    $('.intentions-mobile__item-bottom-image').mouseleave(function() {
        $(this).find('img').attr('src', 'img/arrow.png')
    });
    // const swiperIntentions = new Swiper('.swiper-intentions', {
    //     width: 400,
    // });
    $('.promo__main-bottom-work-start').mouseenter(function() {
        $(this).find('img').attr('src', 'img/work-green.png');
    });
    $('.promo__main-bottom-work-start').mouseleave(function() {
        $(this).find('img').attr('src', 'img/arrow.png');
    });

});
