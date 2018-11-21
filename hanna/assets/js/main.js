"use strict";
jQuery(document).ready(function ($) {

//for Preloader

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });



document.onmousemove = function (e) {
	e = e||window.event;
	var x = 0.5-e.clientX/document.body.offsetWidth;
	var y = 0.5-e.clientY/document.body.offsetHeight;
	document.getElementById("main_home2").style.transform = "translate("+x*40+"px,"+y*40+"px)";
	
};

    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-menu').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 80)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });



    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

// magnificPopup

    $('.popup-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.video-link').magnificPopup({
        type: 'iframe'
    });




//    featured slider
    var swiper = new Swiper('.swiper-container', {
//        pagination: '.swiper-pagination',
        loop: true,
        slidesPerView: 'auto',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        coverflow: {
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: false
        }
    });


var is_running1 = false;
var is_running2 = false;
//---------------------------------------------
// Scroll Up 
//---------------------------------------------

    $(window).scroll(function () {
    	       var about_us_hT = $('#about_us').offset().top,
       about_us_hH = $('#about_us').outerHeight(),
       wS = $(this).scrollTop();
   if (wS > about_us_hT && wS< (about_us_hT+about_us_hH)){
     console.log('you have scrolled to the about_us!');
     	$('.scrollup > .back1').css("display","none");
             $('.scrollup > .back2').css("display","none");
      $('.nav-indicator1').css("display","none");
               $('.nav-indicator2').css("display","none");
                $('.nav-indicator3').css("display","none");
                 $('.nav-indicator4').css("display","none");
              $('#about_us1').css("color","#e1e1e1");
              $('#what_we_do1').css("color","#e1e1e1");
              $('#approach1').css("color","#e1e1e1");
              $('#exprience1').css("color","#e1e1e1");
              $('#contact1').css("color","#e1e1e1");
   }
    	
    	
       var what_we_do_hT = $('#what_we_do').offset().top,
       what_we_do_hH = $('#what_we_do').outerHeight();
   if (wS > what_we_do_hT && wS< (what_we_do_hT+what_we_do_hH)){
     console.log('you have scrolled to the what_we_do!');
     var het1 = 2.75*(1-(wS - what_we_do_hT)/about_us_hH);
     	$('.scrollup > .back1').css("display","none");
             $('.scrollup > .back2').css("display","block");
              $('.nav-indicator1').css({"display":"block","height":het1+"rem"});
               $('.nav-indicator2').css("display","none");
                $('.nav-indicator3').css("display","none");
                 $('.nav-indicator4').css("display","none");
              $('#about_us1').css("color","#e1e1e1");
              $('#what_we_do1').css("color","#77919f");
              $('#approach1').css("color","#e1e1e1");
              $('#exprience1').css("color","#e1e1e1");
              $('#contact1').css("color","#e1e1e1");
   }
   
      var approach_hT = $('#approach').offset().top,
       approach_hH = $('#approach').outerHeight();
   if (wS > approach_hT && wS< (approach_hT+approach_hH)){
     console.log('you have scrolled to the what_we_do!');
     var het2 = 2.75*(1-(wS - approach_hT)/approach_hH);
     	$('.scrollup > .back1').css("display","none");
             $('.scrollup > .back2').css("display","block");
               $('.nav-indicator1').css("display","none");
               $('.nav-indicator2').css({"display":"block","height":het2+"rem"});
                $('.nav-indicator3').css("display","none");
                 $('.nav-indicator4').css("display","none");
              $('#about_us1').css("color","#e1e1e1");
              $('#what_we_do1').css("color","#e1e1e1");
              $('#approach1').css("color","#77919f");
              $('#exprience1').css("color","#e1e1e1");
              $('#contact1').css("color","#e1e1e1");
   }
   
      var exprience_hT = $('#exprience').offset().top,
       exprience_hH = $('#exprience').outerHeight();
   if (wS > exprience_hT && wS< (exprience_hT+exprience_hH)){
     console.log('you have scrolled to the exprience!');
     var het3 = 2.75*(1-(wS - exprience_hT)/exprience_hH);
     	$('.scrollup > .back1').css("display","none");
             $('.scrollup > .back2').css("display","block");
             $('.nav-indicator1').css("display","none");
               $('.nav-indicator2').css("display","none");
                $('.nav-indicator3').css({"display":"block","height":het3+"rem"});
                 $('.nav-indicator4').css("display","none");
               $('#about_us1').css("color","#e1e1e1");
              $('#what_we_do1').css("color","#e1e1e1");
              $('#approach1').css("color","#e1e1e1");
              $('#exprience1').css("color","#77919f");
              $('#contact1').css("color","#e1e1e1");
   }
   
       var contact_hT = $('#contact').offset().top,
       contact_hH = $('#contact').outerHeight();
   if (wS > contact_hT && wS< (contact_hT+contact_hH)){
   	var het4 = 2.75*(1-(wS - contact_hT)/contact_hH);
     $('.scrollup > .back1').css("display","block");
    		$('.scrollup > .back2').css("display","none");
    		$('.nav-indicator1').css("display","none");
               $('.nav-indicator2').css("display","none");
                $('.nav-indicator3').css("display","none");
                 $('.nav-indicator4').css({"display":"block","height":het4+"rem"});
    		    $('#about_us1').css("color","#e1e1e1");
              $('#what_we_do1').css("color","#e1e1e1");
              $('#approach1').css("color","#e1e1e1");
              $('#exprience1').css("color","#e1e1e1");
              $('#contact1').css("color","#77919f");
   }
    	
    	
    	
      if ($(this).scrollTop() > 500) {
        	if((is_running2 == false) && $(this).scrollTop()>1500){
    		$("#video_h").html("<embed id='video_h' src='assets/images/hanna.mp4' autostart='true' loop='-1' style='height:24em;width:40em' >");
    		is_running2 = true;
    		}
    		if((is_running1 == false) && $(this).scrollTop()>900 ){
    		$("#load_h").html("<div id='g2' style='display:none'><p style='text-indent: 2em;line-height:36px;width: 60%;margin-left: 20%'>奇迹汽车文化有限公司是一家致力于传播健康积极向上的汽车文化精神的知名俱乐部，以拥有众多珍稀限量顶级豪车超跑著名。2018年1月面向会员举办的赛道活动日，多辆顶级超跑豪车聚集珠海国际赛车场，我们通过视频输出的形式，最大程度的曝光品牌。</p><a href='javascript:;' class='video1' id='video1'><img title='MIRACLE-ZIC-2' src='assets/images/MIRACLE_ZIC.gif' style='height:166px;width:334px;left: 50%;transform: translate(-50%, -50%);margin-top:6em;position:absolute;cursor: pointer;z-index: 99’ alt=''></a><div class='video-btn1' id='video-btn1'><div class='video-area1' id='video-area1'></div><a class='video-shut1' id='video-shut1'>×</a></div><div id='shadow1'></div></div><div id='g3' style='display:none'><p style='text-indent: 2em;line-height:36px;width: 60%;margin-left: 20%'>一份完美的珠宝来自于匠人的精心雕琢，而这过程中道道复杂的工序往往被人所忽略，我们利用这份精益求精的工匠精神，推出了这条明牌珠宝广告片，诠释品牌秉承的理念。</p><a href='javascript:;' class='video2' id='video2'><img title='明牌珠宝' src='assets/images/mpzb.gif' style='height:166px;width:334px;left: 50%;transform: translate(-50%, -50%);margin-top:6em;position:absolute;cursor: pointer;z-index: 99' alt=''></a><div class='video-btn2' id='video-btn2'><div class='video-area2' id='video-area2'></div><a class='video-shut2' id='video-shut2'>×</a></div><div id='shadow2'></div></div><div id='g4' style='display:none'><p style='text-indent: 2em;line-height:36px;width:60%;margin-left: 20%'>我们与淘宝电商合作，利用当下人们对于食物品质的追求作为切入点，定格每个细节，以短视频的形式将食物的制作过程展现给大众群体，大幅拉进了品牌与消费者之间的联系与信任。</p><a href='javascript:;' class='video3' id='video3'><img title='饕餮老爸篇-鱿鱼圈' src='assets/images/ttlb.gif' style='height:166px;width:334px;left: 50%;transform: translate(-50%, -50%);margin-top:6em;position:absolute;cursor: pointer;z-index: 99' alt=''></a><div class='video-btn3' id='video-btn3'><div class='video-area3' id='video-area3'></div><a class='video-shut3' id='video-shut3'>×</a></div><div id='shadow3'></div></div><div id='g5' style='display:none'><p style='text-indent: 2em;line-height:36px;width:60%;margin-left: 20%'>ROOME是一家专注于家居生活空间的人机交互、智能控制与深度机器学习的科技公司。我们在广告片里将各种各样的生活场景重现在面前，全面突显ROOME开关精灵在各个细节上智能化的体验，让大众群体更能直观的感受到ROOME带来的简单、智能生活，从而令品牌形象更加明确。</p><a href='javascript:;' class='video4' id='video4'><img title='智能开关' src='assets/images/znkg.gif' style='height:166px;width:334px;left: 50%;transform: translate(-50%, -50%);margin-top:6em;position:absolute;cursor: pointer;z-index: 99' alt=''></a><div class='video-btn4' id='video-btn4'><div class='video-area4' id='video-area4'></div><a class='video-shut4' id='video-shut4'>×</a></div><div id='shadow4'></div></div>");
    		
  var obtn1=document.getElementById('video1');
  var ovideo1=document.getElementById('video-btn1');
  var oatn1=document.getElementById('video-area1');
  var oshut1=document.getElementById('video-shut1');
  var oshadow1=document.getElementById('shadow1');
  obtn1.onclick=function () {
    ovideo1.style.display='block';
    oshadow1.style.display='block';
    oatn1.innerHTML='<iframe src="http://player.youku.com/embed/XMzM5Mzg1Mzc2MA==" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>';
  }
  oshut1.onclick= function () {
    ovideo1.style.display='none';
    oshadow1.style.display='none';
    oatn1.innerHTML="";
  }
  
    var obtn2=document.getElementById('video2');
  var ovideo2=document.getElementById('video-btn2');
  var oatn2=document.getElementById('video-area2');
  var oshut2=document.getElementById('video-shut2');
  var oshadow2=document.getElementById('shadow2');
  obtn2.onclick=function () {
    ovideo2.style.display='block';
    oshadow2.style.display='block';
    oatn2.innerHTML='<iframe src="https://v.qq.com/txp/iframe/player.html?vid=l075740cv2d" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>';
  }
  oshut2.onclick= function () {
    ovideo2.style.display='none';
    oshadow2.style.display='none';
    oatn2.innerHTML="";
  }
  
    var obtn3=document.getElementById('video3');
  var ovideo3=document.getElementById('video-btn3');
  var oatn3=document.getElementById('video-area3');
  var oshut3=document.getElementById('video-shut3');
  var oshadow3=document.getElementById('shadow3');
  obtn3.onclick=function () {
    ovideo3.style.display='block';
    oshadow3.style.display='block';
    oatn3.innerHTML='<iframe src="https://v.qq.com/txp/iframe/player.html?vid=m05287w3lr1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>';
  }
  oshut3.onclick= function () {
    ovideo3.style.display='none';
    oshadow3.style.display='none';
    oatn3.innerHTML="";
  }
  
    var obtn4=document.getElementById('video4');
  var ovideo4=document.getElementById('video-btn4');
  var oatn4=document.getElementById('video-area4');
  var oshut4=document.getElementById('video-shut4');
  var oshadow4=document.getElementById('shadow4');
  obtn4.onclick=function () {
    ovideo4.style.display='block';
    oshadow4.style.display='block';
    oatn4.innerHTML='<iframe src="https://v.qq.com/txp/iframe/player.html?vid=g07583cbxrr" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>';
  }
  oshut4.onclick= function () {
    ovideo4.style.display='none';
    oshadow4.style.display='none';
    oatn4.innerHTML="";
  }
            is_running1 = true;
    		}
        
        } 
        
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



    //End

});

	function showimg(){
		$("#Prime").css("color","red")
	}
	function hideimg(){
		$("#Prime").css("color","#6C6C6C")
	}
	
	function showimg1(){
		$("#MIRACLE").css("color","red")
	}
		function hideimg1(){
			$("#MIRACLE").css("color","#6C6C6C")
	}
		function showimg2(){
		$("#mpzb").css("color","red")
	}
		function hideimg2(){
			$("#mpzb").css("color","#6C6C6C")
	}
		function showimg3(){
		$("#ttlb").css("color","red")
	}
		function hideimg3(){
			$("#ttlb").css("color","#6C6C6C")
	}
	function showimg4(){
		$("#znkg").css("color","red")
	}
		function hideimg4(){
			$("#znkg").css("color","#6C6C6C")
	}
	
	//点击显示图片
	function show(){
		$("#g1").show();
		$("#g2").hide();
		$("#g3").hide();
		$("#g4").hide();
		$("#g5").hide();
	}
		function show1(){
		$("#g1").hide();
		$("#g2").show();
		$("#g3").hide();
		$("#g4").hide();
		$("#g5").hide();
	}
		function show2(){
		$("#g1").hide();
		$("#g2").hide();
		$("#g3").show();
		$("#g4").hide();
		$("#g5").hide();
	}
		function show3(){
		$("#g1").hide();
		$("#g2").hide();
		$("#g3").hide();
		$("#g4").show();
		$("#g5").hide();
	}
	    function show4(){
		$("#g1").hide();
		$("#g2").hide();
		$("#g3").hide();
		$("#g4").hide();
		$("#g5").show();
	}
	
	
	var aLi = document.getElementsByTagName('li');
for(var i=0,l=aLi.length;i<l;i++){
aLi[i].onmouseover = function(){
this.getElementsByTagName("a")[0].style.color = "#77919f";
}
aLi[i].onmouseout = function(){
this.getElementsByTagName("a")[0].style.color = "#e1e1e1";
}
}
// scrool Down

$('.nav a').bind('click', function () {
    $('html , body').stop().animate({
        scrollTop: $($(this).attr('rel')).offset().top + 1
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});









