$(document).ready(function() {
    // Устанавливаю одинаковую высоту блоков
  /*   if($('body').width() > 576) {
        var min_height = 0;
        $(".aboutMe__description, .aboutMe__head").each(function () {
            var block_height = $(this).height();
            if(block_height > min_height) {
            min_height = block_height;
            };
        });
        $(".aboutMe__description, .aboutMe__head").height(min_height);
    }; */

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.navbar a').click(function() {
        $('.navbar a.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });

    $('.home-btn').click(function(e) {
       $('.navbar a').removeClass('active');
       $('.navbar a[href="#banner"]').addClass('active');
    });


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
    
    $(".navbar").on("click","a", function (event) {
       // исключаем стандартную реакцию браузера
       event.preventDefault();
    
       // получем идентификатор блока из атрибута href
       var id  = $(this).attr('href'),
    
       // находим высоту, на которой расположен блок
        top = $(id).offset().top;
        
       // анимируем переход к блоку, время: 800 мс
       $('body,html').animate({scrollTop: top}, 800);
    });

}) // end ready