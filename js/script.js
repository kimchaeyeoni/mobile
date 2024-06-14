

//jQuery source
$(document).ready(function(){

  //btn
  $(".nav_btn").click(function(){
    $(this).toggleClass("active");
    $(".sub_list").stop(true,true).slideToggle("fast");
  });

  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp();
  });


  //main img
  function horizontalSlider(){
    hautoplay = setInterval(function(){
      $(".slide-horizontal-items").animate({left: "-100%"},function(){
        $('.slide-horizontal-items').css({left: 0});
        $('.slide-hitem:first-child').appendTo('.slide-horizontal-items');
      });      
    },4000);
  };
  horizontalSlider();

  $('.slide-horizontal').mouseenter(function(){
    clearInterval(hautoplay);
  })
  .mouseleave(function(){
    horizontalSlider();
  });

  $('.slide-vertical').mouseenter(function(){
    clearInterval(vautoplay);
  })
  .mouseleave(function(){
    verticalSlider();
  });


  //section4
  let slideContainer = $('.slide4'),
      slideWidth = slideContainer.width(),
      slideHeight = slideContainer.height(),
      slideCount = $('.slide-items li').length,
      slideItemsWidth = slideWidth * slideCount,
      slidePrev = slideContainer.find(".control .prev"),
      slideNext = slideContainer.find(".control .next"),
      control = $(".control .play-stop"),
      playBtn = control.find(".play"),
      stopBtn = control.find(".stop");

  let pageNumber = $('.slide-item').index();
  $(".page span:nth-child(1)").text(pageNumber+1);
    
  $('.slide-item').css({'width': slideWidth, 'height': slideHeight});
  $('.slide-items').css({'width': slideItemsWidth, 'height': slideHeight});
  $('.slide-item:last-child').prependTo($('.slide-items'));
  $('.slide-items').css({'margin-left': -slideWidth});

  function slideLeft(){
    $('.slide-items').stop().animate({'left': -slideWidth}, 500, function(){
      $('.slide-items').css({'left': 0}); //최종위치
      $('.slide-item:first-child').appendTo('.slide-items');

      pageNumber++;
      if(pageNumber > slideCount-1){ 
        pageNumber=0;
      }
      $(".page span:nth-child(1)").text(pageNumber+1); 
    });
  };

  function slideRight(){
    $('.slide-items').stop().animate({left: slideWidth}, 500, function(){
      $('.slide-items').css({'left': 0});
      $('.slide-item:last-child').prependTo('.slide-items');
    });

    pageNumber--;
    if(pageNumber < 0){ 
      pageNumber=slideCount-1;
    }
    $(".page span:nth-child(1)").text(pageNumber+1); 
  };

  slideAuto = setInterval(slideLeft, 4000);

  // Next Prev Button
  slidePrev.click(function(e){
    e.preventDefault();
    slideRight(); 
  });

  slideNext.click(function(e){
    e.preventDefault();
    slideLeft();  
  });

  //play-stop
  playBtn.hide();
  let check = true;

  control.click(function(){
    if(check){
      clearInterval(slideAuto);
      playBtn.show();
      stopBtn.hide();
      check = false;
    }else{
      slideAuto = setInterval(slideLeft, 4000);
      playBtn.hide();
      stopBtn.show();
      check = true;
    };
  });

  //quick menu
  bb=true;

  $(".trigger_btn").click(function(){

    $(this).toggleClass("qactive");
    if(bb){  /* 상하간격을 고려하여 위치를 잡아준다. */
      $(".quick_icon .icon4").stop().animate({"bottom":"6rem"},500,"easeOutBack");
			$(".quick_icon .icon3").stop().animate({"bottom":"12rem"},500,"easeOutBack");
			$(".quick_icon .icon2").stop().animate({"bottom":"18rem"},500,"easeOutBack");
			$(".quick_icon .icon1").stop().animate({"bottom":"24rem"},500,"easeOutBack");
      bb=false;
    }else{
      $(".quick_icon li").stop(true,true).animate({"bottom":"0rem"},200);
      bb=true;
    }
  });

  

});