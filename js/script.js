

$(document).ready(function() {
	
	$("#star_1").animate({top: '50px', opacity: '1'}, 1500);	
	$("#star_2").delay(100).animate({top: '50px', opacity: '1'}, 1700);	
	
	$("#title").delay(200).animate({top: '50%', opacity: '1'}, 1800);
	$("#title2").delay(200).animate({top: '50%', opacity: '1'}, 1800);
	
	$("#bg2").delay(200).animate({opacity: '.5'}, 1800);
	$(".toptext").delay(500).animate({top: '-25', opacity: '1'}, 2000);

	$("#cornericon").delay(200).animate({bottom: '20px', opacity: '1'}, 1800);
	$("#cornericon2").delay(200).animate({bottom: '20px', opacity: '1'}, 1800);
	
	$("#date").animate({top: '0', opacity: '1'}, 2000);	
	$("#fullfooter2").animate({bottom: '0', opacity: '1'}, 2000);
	$("#search4").animate({bottom: '0', opacity: '1'}, 2000);
	
	$("#search").animate({bottom: '0', opacity: '1'}, 2000);
	
	$("#arrow1").animate({bottom: '50', opacity: '1'}, 1000);
	$("#arrow2").delay(500).animate({bottom: '50', opacity: '1'}, 1000);
	
	$("#feature_1").mouseenter(function() {
		$("#image1").animate({opacity: '1'}, 100);
	});
	$("#feature_1").mouseleave(function() {
		$("#image1").animate({opacity: '.7'}, 100);
	});
	$("#feature_1").mouseenter(function() {
		$("#feature_1 h3").css({color: 'white'}, 100);
	});
	$("#feature_1").mouseleave(function() {
		$("#feature_1 h3").css({color: '#333333'}, 100);
	});
	
	
	$("#article_1").mouseenter(function() {
		$("#image2").animate({opacity: '1'}, 100);
	});
	$("#article_1").mouseleave(function() {
		$("#image2").animate({opacity: '.7'}, 100);
	});
	$("#article_1").mouseenter(function() {
		$("#article_1 h3").css({color: 'white'}, 100);
	});
	$("#article_1").mouseleave(function() {
		$("#article_1 h3").css({color: '#333333'}, 100);
	});

	$("#article_2").mouseenter(function() {
		$("#image3").animate({opacity: '1'}, 100);
	});
	$("#article_2").mouseleave(function() {
		$("#image3").animate({opacity: '.7'}, 100);
	});
	$("#article_2").mouseenter(function() {
		$("#article_2 h3").css({color: 'white'}, 100);
	});
	$("#article_2").mouseleave(function() {
		$("#article_2 h3").css({color: '#333333'}, 100);
	});

	$("#article_3").mouseenter(function() {
		$("#image4").animate({opacity: '1'}, 100);
	});
	$("#article_3").mouseleave(function() {
		$("#image4").animate({opacity: '.7'}, 100);
	});
	$("#article_3").mouseenter(function() {
	$("#article_3 h3").css({color: 'white'}, 100);
	});
	$("#article_3").mouseleave(function() {
	$("#article_3 h3").css({color: '#333333'}, 100);
	});
	
	$("#article_4").mouseenter(function() {
		$("#image5").animate({opacity: '1'}, 100);
	});
	$("#article_4").mouseleave(function() {
		$("#image5").animate({opacity: '.7'}, 100);
	});
	$("#article_4").mouseenter(function() {
		$("#article_4 h3").css({color: 'white'}, 100);
	});
	$("#article_4").mouseleave(function() {
		$("#article_4 h3").css({color: '#333333'}, 100);
	});

	$("#article_5").mouseenter(function() {
		$("#image6").animate({opacity: '1'}, 100);
	});
	$("#article_5").mouseleave(function() {
		$("#image6").animate({opacity: '.7'}, 100);
	});
	$("#article_5").mouseenter(function() {
		$("#article_5 h3").css({color: 'white'}, 100);
	});
	$("#article_5").mouseleave(function() {
		$("#article_5 h3").css({color: '#333333'}, 100);
	});

	$("#article_6").mouseenter(function() {
		$("#image7").animate({opacity: '1'}, 100);
	});
	$("#article_6").mouseleave(function() {
		$("#image7").animate({opacity: '.7'}, 100);
	});
	$("#article_6").mouseenter(function() {
		$("#article_6 h3").css({color: 'white'}, 100);
	});
	$("#article_6").mouseleave(function() {
		$("#article_6 h3").css({color: '#333333'}, 100);
	});
	
	$("#quote_1").mouseenter(function() {
		$("#overlay").animate({opacity: '1'}, 300);
		$("#text").animate({opacity: '.1'}, 300);
		$(".images").animate({opacity: '.1'}, 300);
		
	});
	$("#quote_1").mouseleave(function() {
		$("#overlay").animate({opacity: '0'}, 300);
		$("#text").animate({opacity: '1'}, 300);
		$(".images").animate({opacity: '.8'}, 300);
		
	});
	$("#quote_2").mouseenter(function() {
		$("#overlay").animate({opacity: '1'}, 300);
		$("#text").animate({opacity: '.1'}, 300);
		$(".images").animate({opacity: '.1'}, 300);
		
	});
	$("#quote_2").mouseleave(function() {
		$("#overlay").animate({opacity: '0'}, 300);
		$("#text").animate({opacity: '1'}, 300);
		$(".images").animate({opacity: '.8'}, 300);
		
	});
	
	
});


$(document).scroll(function() {

	var y = $(document).scrollTop();
	
	var h = $("#top").height(); // this measures the height of the fold

	if ( y < 100){
   		$('#fullfooter').slideUp(300); // we're using .slideUp/Down for brining the footer up/down instead of animate
        }
	else {
	 	$("#fullfooter").slideDown(300);
		}
	
	if ( y < 100){
   		$('#search2').slideUp(300); // we're using .slideUp/Down for brining the footer up/down instead of animate
        }
	else {
	 	$("#search2").slideDown(300);
		}
	
	if ( y > 30 ) {
	 	$("#title").fadeOut(300);
	} 
	else { $('#title').fadeIn(300) }

	if ( y > h ) { // we are now using the height of the fold to trigger the side bar to stick
   		$('#sidebar').css({position: 'fixed', top: '0'});
	}
	else {
	 	$("#sidebar").css({position: 'absolute', top: '0'}, 200);
		}
	
});

$(window).scroll(function () { 
	
	$('#star_1').css({
      'top' : 50-($(this).scrollTop()/30)+"px"
   }); 
	$('#star_2').css({
      'top' : 50-($(this).scrollTop()/30)+"px"
   });
	
	$('.bg').css({
      'top' : -200-($(this).scrollTop()/10)+"px"
   }); 

	$('#quote_1').css({
      'top' : 550-($(this).scrollTop()/10)+"px"
   }); 
	$('#quote_2').css({
      'top' : 1050-($(this).scrollTop()/10)+"px"
   }); 
	
	$('#image_1').css({
      'top' : 250-($(this).scrollTop()/50)+"px"
   }); 
	$('#image_2').css({
      'top' : 850-($(this).scrollTop()/50)+"px"
   }); 

});




$(document).ready(function() {

var videoPlayButton,
	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
				this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="3" stroke="#fff"/>\
                    <polygon points="85, 65 85, 135 135, 100" fill="none" stroke-width="3" stroke="#fff"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
	}

videoMethods.renderVideoPlayButton()



});




