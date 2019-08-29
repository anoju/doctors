$(function(){
	
	/* ==============================
	 * common
	 * ============================== */
	layerpopup();
	scrollAnimation();
	typedEffect();	
	layoutUi();
	scrollOn();
	$(window).load(function(){
		countUp();
	});

	/* ==============================
	 * content 
	 * ============================== */
	$(window).load(function(){
		if($('#radarChart').length > 0)radarChartInit();
	});

	$('.main .btn_up').click(function(e){
		e.preventDefault();
		var $html = $('html, body'),
			$height = $(window).height(),
			$btnTop = $('.btn_up').offset().top + 33,
			$speed = 700;
		if($(this).hasClass('on')){
			$html.animate({'scrollTop':($btnTop-$height)},$speed);
		}else{
			$html.animate({'scrollTop':($btnTop-80)},$speed);
		}	
	});
	$('.main .scrollLink a').click(function(e){
		e.preventDefault();
		var $html = $('html, body'),
			$href = $(this).attr('href'),
			$top = $($href).offset().top;
		$html.animate({'scrollTop':($top-80)},700);
	});
	/*$(".mainPop .imgList").slick({
		dots: true,
		arrows: false,
		autoplay: true
	});*/
	$('.main .mainPopList a').click(function(e){
		e.preventDefault();
		var idx = $(this).data('index');
		$(this).closest('.btnWrap').toggleClass('on').closest('li').siblings().find('.btnWrap').removeClass('on');
		var $active = $('.mainPop').addClass('show').find('.imgList').eq(idx);
		$active.siblings('.imgList').removeClass('on');
		$active.addClass('on');
		console.log($active.data('slick'));
		if(!$active.data('slick')){
			$active.data('slick',true);
			$active.slick({
				dots: true,
				arrows: false,
				autoplay: true
			});
		}
		
	});
	$('.btn_pop_close a').click(function(e){
		e.preventDefault();
		$('.main .mainPopList .btnWrap').removeClass('on');
		$('.mainPop').fadeOut(500,function(){
			$(this).removeClass('show').removeAttr('style');
		});
	});
	
});
function layoutUi(){
	var $header = $('#headerWrap');

	if($header.length > 0){
		setInterval(function(){
			if($('.headerLine').hasClass('on')){
				$('.headerLine').removeClass('on');
			}else{
				$('.headerLine').addClass('on');
			}
		},5000);
	}

	$('.btnTop a').click(function(e){
		e.preventDefault();
		$('html, body').animate({'scrollTop':0},1000);
	});
}

function scrollOn(){
	var $elements = $( '*[data-scroll-on]' );
	$elements.each( function( i, el ) {
		var $el = $(this),
			$scrollOn = $el.data('scroll-on');

		$(window).on('load scroll resize',function(){
			var $scrollTop = $(this).scrollTop();
			if($scrollOn == 'top')$scrollOn = ($el.offset().top) - $('#headerWrap').outerHeight();

			if($scrollTop >= $scrollOn){
				$el.addClass('on');
			}else{
				$el.removeClass('on');
			}
		});
	});
}

function countUp(){
	$(".countup").each(function(){
		var $el = $(this);
		var rn = $(this).text();
		$el.waypoint(function(){
			$({ val : 0 }).animate({ val : rn }, {
				duration: 1500,
				step: function() {
				  $el.text(comma(Math.floor(this.val)));
				},
				complete: function() {
				  $el.text(comma(Math.floor(this.val)));
				}
			});
		}, { offset: '100%', triggerOnce: true });
	});
	function comma(x) {
    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
}

function typedEffect(){
	$('.typedEffect').each(function(e){
		$(this).addClass('typed' + e);
		var target = '.typed' + e + ' .view';
		var stringE = '.typed' + e + ' .typedStrings';
		
		$('.typed' + e).waypoint(function(){
			var typed = new Typed(target, {
				stringsElement: stringE,
				typeSpeed: 50,
				backSpeed: 50,
				backDelay: 500,
				startDelay: 0,
				loop: false,
				showCursor: false
			});
		}, { offset: '100%', triggerOnce: true });
	});

	function random(min, max){
		return (Math.random() * (max - min)) + min;
		//random(-500, 500)
	}
	$('.splitText').each(function(i,val){
		var $this = $(this),
			$letters = $this.html().split('');
		
		$this.html('');
		$.each($letters, function(j, v){
			var $posX = random(-500, 500),
				$posY = random(-500, 500),
				$posZ = random(-500, 500),
				$delay = 100;
			v = (v == ' ') ? '&nbsp;' : v;
			$this.append('<span>' + $.trim(v) + '</span>').children().last().css({
				'-webkit-transition-delay': $delay*j+'ms',
				'transition-delay': $delay*j+'ms',
				'-webkit-transform':'translate3d('+$posX+'px,'+$posY+'px,'+$posZ+'px) scale(0.8)',
				'transform':'translate3d('+$posX+'px,'+$posY+'px,'+$posZ+'px) scale(0.8)'
			});
		});
	});
	
}


/* parallax scrolling motion */
function scrollAnimation(){
	$(window).load(function(){
		var $elements = $( '*[data-animation]' );
		var h = $(window).height();
		$elements.each( function( i, el ) {
			var $el = $( el ),
			$animationClass = $el.data('animation'),
			    $delay = $el.data('delay'),
			    $duration = $el.data('duration'),
				$timeOut = $el.data('time-out');
			
			if($delay>0){
				if($animationClass != 'on'){
					$el.css({
						'-webkit-animation-delay':$delay+'ms',
						'animation-delay':$delay+'ms'
					});
				}else{
					$el.css({
						'-webkit-transition-delay':$delay+'ms',
						'transition-delay':$delay+'ms'
					});
				}
			}
			if($duration>0){
				if($animationClass != 'on'){
					$el.css({
						'-webkit-animation-duration':$duration+'ms',
						'animation-duration':$duration+'ms'
					});
				}else{
					$el.css({
						'-webkit-transition-duration':$duration+'ms',
						'transition-duration':$duration+'ms'
					});
				}
			}

			if($animationClass != 'on'){
				var t = $el.offset().top;
				if(t > h){
					$el.addClass('wait-animation');
				}
				$el.addClass('animated '+$animationClass);
			}

			$el.waypoint(function(){
				if($animationClass != 'on'){
					$el.removeClass('wait-animation');
				}else{
					if($timeOut>0){
						setTimeout(function(){
							$el.addClass($animationClass);
						},$timeOut);
					}else{
						$el.addClass($animationClass);
					}
				}
			}, { offset: '100%', triggerOnce: true });
		});
	});
}


/* 레이어 팝업 */
function layerpopup(){
	$('.layerPopOpen').click(function(){
		var href = $(this).attr('href');
		layerPopOpen(href);
		return false;
	});
	
	layerPopClose();
}

function layerPopOpen(target){
	var winH = $(window).outerHeight(),popH;
	var cont = $(target).find('.layerPopCont');
	$(target).addClass('on');
	popContposition();
	$(window).resize(function(){popContposition();});
	
	function popContposition(){
		popH = cont.outerHeight();
		winH = $(window).outerHeight();
		if(popH > winH){
			cont.css({'top':'0','margin-top':0});
		}else{
			cont.css({'top':'50%','margin-top':-popH/2});
		}	
	}
	$('body').addClass('hidden');
	
	
	if($(target).find('video').length){
		var t = $(target).find('video').attr('id');
		var video = document.getElementById(t);
		video.play();
	}
}

function layerPopClose(){
	$(document).on('click','.btnPopClose',function(){
		$(this).closest('.layerPopWrap').removeClass('on');
		$('body').removeClass('hidden');
		
		if($(this).closest('.layerPopWrap').find('video').length){
			var t = $(this).closest('.layerPopWrap').find('video').attr('id');
			var video = document.getElementById(t);
			video.pause();
			video.currentTime = 0;
		}
		
		return false;
	});
}

function radarChartInit(){
	var ctx = document.getElementById('radarChart').getContext("2d");
	var gradientColor = ctx.createLinearGradient(85,0, 255,170);
		gradientColor.addColorStop(0, "rgba(255,250,134,0.7)");
		gradientColor.addColorStop(1, "rgba(255,111,195,0.7)");
	var datas = [
		[3,0,0,0,0,0,0,0],
		[3,2,0,0,0,0,0,0],
		[3,2,2,0,0,0,0,0],
		[3,2,2,1,0,0,0,0],
		[3,2,2,1,2,0,0,0],
		[3,2,2,1,2,3,0,0],
		[3,2,2,1,2,3,4,0],
		[3,2,2,1,2,3,4,4]
	];
	
	var labelAr = [
		['여드름 균', '', '', '', '', '', '',''],
		['여드름 균', '피부결', '', '', '', '', '',''],
		['여드름 균', '피부결', '모공', '', '', '', '',''],
		['여드름 균', '피부결', '모공','광채,브라운색소', '', '', '',''],
		['여드름 균', '피부결', '모공','광채,브라운색소', '홍조,멜라닌,피지', '', '',''],
		['여드름 균', '피부결', '모공','광채,브라운색소', '홍조,멜라닌,피지', '피부밝기', '',''],
		['여드름 균', '피부결', '모공','광채,브라운색소', '홍조,멜라닌,피지', '피부밝기', '다크써클',''],
		['여드름 균', '피부결', '모공','광채,브라운색소', '홍조,멜라닌,피지', '피부밝기', '다크써클','미래주름']
	];
	var datasNum = 0;

	var config = {
		type: 'radar',
		data: {
			labels: labelAr[datasNum],
			datasets: [{
				label: '기능',
				backgroundColor:gradientColor,
				borderColor: 'transparent',
				borderWidth: 1,
				pointBorderColor: 'transparent',
				pointHoverBorderColor: 'transparent',
				pointBackgroundColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				data: datas[datasNum]
			}]
		},
		options: {
			responsive: true,
			legend: {
				display: false
			},
			tooltips: {
				enabled: false
			},
			scale: {
				ticks: {
					min: 0,
					max: 5,
					stepSize: 1,
					display: false
				},
				gridLines: {
					color: '#f4f1ef'
				},
				pointLabels: {
					display: false,
					fontColor: '#fff', // labels around the edge like 'Running'
					fontSize:12,
					fontFamily:'Noto Sans'
				},
				angleLines: {
					//display: false
					color:'#ded3cc'
				}
			}
		}
	};

	$('#radarChart').waypoint(function(){
		var myRadar = new Chart(document.getElementById('radarChart'), config);
		var chartUpdate = setInterval(function(){
			datasNum = datasNum + 1;
			if(datasNum >= 7)clearInterval(chartUpdate);
			myRadar.data.labels = labelAr[datasNum];
			myRadar.data.datasets[0].data = datas[datasNum];
			myRadar.update();
		},500);
	}, { offset: '100%', triggerOnce: true });
}

/* 모바일 에이전트 구분 */
var isMobile = {
	Android: function () {
			 return navigator.userAgent.match(/Android/i) == null ? false : true;
	},
	BlackBerry: function () {
			 return navigator.userAgent.match(/BlackBerry/i) == null ? false : true;
	},
	IOS: function () {
			 return navigator.userAgent.match(/iPhone|iPad|iPod/i) == null ? false : true;
	},
	Opera: function () {
			 return navigator.userAgent.match(/Opera Mini/i) == null ? false : true;
	},
	Windows: function () {
			 return navigator.userAgent.match(/IEMobile/i) == null ? false : true;
	},
	any: function () {
			 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
	}
};