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
        width: 260,
        slidesPerView: 1.01,
        slidesPerColumn: 1.5,
        centeredSlides: true,
        spaceBetween: 10,
    });
    const swiperIntentions = new Swiper('.swiper-intentions', {
        width: 280,
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

window.addEventListener('resize', function(event) {
    if(this.window.innerWidth < 576) {
        var list = this.document.getElementsByClassName('how-to-start__item');
        for (var i = 0; i < list.length; i++) {
           document.getElementsByClassName('how-to-start__right')[0].appendChild(list[i]);
        }
    }
}, true);

// $(document).ready(function() {
//     $('.subscription__form-select').select2({
//         placeholder: 'Выберите регион',
//         // width: "100%",
//         // dropdownParent: $(this).parent(),
//         // minimumResultsForSearch: "-1",
//     });
// });

// const example = new Choices(element, {
//     addItemFilter: (value) => {
//         return ['orange', 'apple', 'banana'].includes(value);
//     }
// });


// example.setChoices(
//     [
//       { value: 'One', label: 'Label One', disabled: true },
//       { value: 'Two', label: 'Label Two', selected: true },
//       { value: 'Three', label: 'Label Three' },
//     ],
//     'value',
//     'label',
//     false,
// );
  

// document.addEventListener('.possibilities__list-item').click(function(e) {
//     document.getElementsByClassName('possibilities__list-item').classList.remove('possibilities__list-item--active');
//     e.classList.add('possibilities__list-item--active');
//     var dataNumber = e.getAttribute('data-number');
//     document.getElementsByClassName('possibilities__image').classList.remove('possibilities__list-item--active');
//     document.getElementsByClassName('possibilities__image[data-number=' + dataNumber + ']').classList.add('possibilities__image--active');
// });
// document.addEventListener('.main-description__technologies-description-list-item').click(function(e) {
//     if(e.find('img').getAttribute('src') == 'img/minus.png') {
//         e.find('.main-description__technologies-description-list-item-list').css('display', 'block');
//         e.find('.main-description__technologies-description-list-item-list').slideToggle(150);
//         e.find('img').setAttribute('src', 'img/plus.png');
//         e.find('.main-description__technologies-description-list-item-toggle').css('top', '30px');
//     } else {
//         $('.main-description__technologies-description-list-item-list').css('display', 'none');
//         $('.main-description__technologies-description-list-item-toggle').find('img').attr('src', 'img/plus.png');
//         e.find('.main-description__technologies-description-list-item-list').css('display', 'none');
//         e.find('.main-description__technologies-description-list-item-list').slideToggle(150);
//         e.find('img').attr('src', 'img/minus.png');
//         e.find('.main-description__technologies-description-list-item-toggle').css('top', '25px');
//     }
// });
// document.addEventListener('.header__mobile-menu').click(function(e) {

// });
