$(function(){


    $("a").click(function(e){
        
        if( $("a").has("#")  || $("a").has("") ){ 
            e.preventDefault();
        }
    
    })


    // 탑 팝업 
    $(".close").click(function(){     
        $(".top_banner").slideUp();
    })//

    // 메뉴


    $(".sub").hide();

    $(".gnb").mouseenter(function(){
        $(".header_b").stop().animate({height : "400px"}, 500);
        $(".sub").stop().slideDown();
    })//

    $(".gnb").mouseleave(function(){
        $(".header_b").stop().animate({height : "103px"}, 500);
        $(".sub").stop().slideUp();
    })//


    // 이미지슬라이드
    $(".main_visual").slick({
        autoplay:true,
        autoplaySpeed :3000,
        dots:true,
        arrows:true
    })//

    
    // section4 이미지 슬라이드

    $(".s4_img").slick({
        autoplay:true,
        autoplaySpeed : 1000,
        dots:true,
        arrows :false
    })//
    
    // 탭메뉴

    $(".section5 li").click(function(e){      
        e.preventDefault(); 
        $(".section5 li").removeClass("on");
        $(this).addClass("on");
    })//


    $(".send button").click(function(){
        alert("이름을 입력 하세요")
    })//   


})//jquery