$(document).ready(() => {
    /**
     * SLICK
     *
     * 90 ширина навигации, 60 боковые паддинги в сумме
     */
    let sliderWidth = parseInt($('.suite__pack__item').innerWidth()) - 90 - 60;
    let slider = $('.suiteSlider');
    slider.css('width', sliderWidth + 'px');

    slider.each((index, el) => {
        $(el).addClass('suite' + index);

        $(el).siblings('.suiteSlider__nav').addClass('suiteNav' + index);

        $(el).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.suiteNav' + index
        });

        $('.suiteNav' + index).slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.suite' + index,
            dots: false,
            vertical: true,
            focusOnSelect: true,
            verticalSwiping: true
        });
    });

    $('.feedback__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.suiteSlider__nav',
        dots: true,
        nextArrow: '<a href="#" class="slick-arrow slick-next"><img src="images/arrow.png" alt="arrow"></a>',
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><img src="images/arrow.png" alt="arrow"></a>',
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false
            }
        }]
    });

    /**
     * ACCORDION
     */
    $('.suite__pack__item__prop__name').on('click', (e) => {
        e.preventDefault();

        let parent = $(e.target).parents('.suite__pack__item__prop');

        if (parent.hasClass('active')) {
            parent.find('.suite__pack__item__prop__list').stop(true, true).slideUp();
            parent.removeClass('active');
        } else {
            $('.suite__pack__item__prop__list').stop(true, true).slideUp();
            $('.suite__pack__item__prop').removeClass('active');
            parent.addClass('active');
            parent.find('.suite__pack__item__prop__list').stop(true, true).slideDown();
        }
    });

    /**
     * TABS
     */
    let tabList = $('.suite__tabs li');
    let tabContent = $('.suite__packs__container');

    tabList.on('click', (e) => {
        tabList.removeClass('active');
        tabContent.removeClass('active');

        $(e.target).addClass('active');
        tabContent.eq($(e.target).index()).addClass('active');

        $('.suiteSlider .slick-track').css('width', sliderWidth + 'px')
        $('.suite .suiteSlider .slick-slide img').css('width', sliderWidth + 'px');
    });
});
