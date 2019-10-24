$(document).ready(function() {
    // Устанавливаю одинаковую высоту блоков
    $(function() {
        $('.aboutMe__description').matchHeight();
    });

    // Скрытие мобильной навигации по клику на ссылку
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

     // Добавление/удаление класса в навигации
    $('.navbar a').click(function() {
        $('.navbar a.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });

    // Добавление/удаление класса в навигации по нажатию кнопки
    $('.home').click(function(e) {
       $('.navbar a').removeClass('active');
       $('.navbar a[href="#banner"]').addClass('active');
    });

    // Анимирую плавный переход к якорным ссылкам
    $(function(){
        $('a[href^="#"]').on('click', function(event) {
            // отменяем стандартное действие
            event.preventDefault();
            
            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            /*
            * sc - в переменную заносим информацию о том, к какому блоку надо перейти
            * dn - определяем положение блока на странице
            */
            
            $('html, body').animate({scrollTop: dn}, 1000);
            
            /*
            * 1000 скорость перехода в миллисекундах
            */
        });
    });

    // Добавление/удаление класса в ссылки навигации по скроллу
    $(window).scroll(function(){
        var sections = $('section');
        sections.each(function(i,el){
            var top  = $(el).offset().top-100;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if(scroll > top && scroll < bottom) {
                $('a.active').removeClass('active');
                $('a[href="#'+id+'"]').addClass('active');   
            }
        });
    });

    // Оповещение после отправки формы
    $('.contacts .btn').click(function(e) {
        e.preventDefault();
        $('.contacts__message').slideDown();
    }); // end click

    // Анимация для портфолио
   /*  $(window).scroll(function() {

        var blockHeight, windowHeight;
    
        blockHeight = $('.portfolio').offset().top - 200;
    
        windowHeight = $(document).scrollTop();
    
        if (windowHeight >= blockHeight) {

            $('.portfolio figure').animate({
                'opacity': 1
            }, 1500);
            
            $(window).off('scroll');
        }
    
    });
 */

$(window).scroll(function() {
    $('.portfolio figure').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+200) {
          $(this).addClass('zoomIn');
        }
    });
});

}) // end ready