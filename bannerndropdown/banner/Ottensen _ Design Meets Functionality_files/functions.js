$(document).ready(function() {
    $('#tab-container').easytabs();
   // $('#checkout-tabs').tabCollapse();
    $('#myCarousel').carousel();
    $(".topnav").accordion({
        accordion: false,
        speed: 500,
        closedSign: '+',
        openedSign: '-'
    });	
	
    
    fitHtmlToWindowScreen();

    // Navigation Script
    var slideout = $('#slideout');
    $('#click-me').click(function() {
        if ($(this).hasClass('close')) {
            $(this).removeClass('close');
            slideout.animate({
                left: '-300px'
            }, {
                queue: false,
                duration: 500
            });
        } else {
            $(this).addClass('close');
            slideout.animate({
                left: '0px'
            }, {
                queue: false,
                duration: 500
            });
        }
    });
});

var resizeTimer;
$(window).on('resize',function() {
//    clearTimeout(resizeTimer);
//    resizeTimer = setTimeout(function(){
//        fitHtmlToWindowScreen();
//    }, 100);
    fitHtmlToWindowScreen();
});

function fitHtmlToWindowScreen() {
    //var scrollBarWidth = getScrollBarWidth();
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    
    var maxHeight = $('#left-content').height();
    var rightHeight = $('#right-content').height();
    
    //var docHeight = $(document).height();
    //var docWidth = $(document).width();
    var docHeight = $('#content').height();
    
    var leftWidthPercent = (340*100/windowWidth);
    var rightWidthPercent = (100 - leftWidthPercent);
    
    //console.log(newRightWidth+'-'+windowWidth+'-'+scrollBarWidth);
    if (windowWidth > 768) {
        $('#left-content').css('margin-left', '0px');
        $('#left-content').css('width', leftWidthPercent + '%');
        $('#right-content').css('width', rightWidthPercent + '%');

        //$('#left-content').css('height', docHeight + 'px');
        
        $('#myCarousel .item img').hide();
        $('#myCarousel .carousel-inner').height(windowHeight);
    } else {
        /*var leftValue = (windowWidth / 2) - (340 / 2);
        $('#left-content').css('margin-left', leftValue);
        $('#left-content').css('width', '340px');
        $('#right-content').css('width', '100%');*/
		$('#left-content').css('width', '100%');
		$('#left-content').css('position', 'relative');
		$('#right-content').css('width', '100%');
        
        $('#myCarousel .carousel-inner').height('auto');
        $('#myCarousel .item img').show();
    }
    /*var newRightWidth = windowWidth - 340;
    
    //console.log(newRightWidth+'-'+windowWidth+'-'+scrollBarWidth);
    if (windowWidth > 768) {
        $('#left-content').css('margin-left', '0px');
        $('#right-content').css('width', newRightWidth + 'px');
        $('#myCarousel .item img').hide();
        $('#myCarousel .carousel-inner').height(windowHeight);
    } else {
        var leftValue = (windowWidth / 2) - (340 / 2);
        $('#left-content').css('margin-left', leftValue);
        $('#right-content').css('width', '100%');
        
        $('#myCarousel .carousel-inner').height('auto');
        $('#myCarousel .item img').show();
    }*/
}

function getScrollBarWidth(){
	if($(document).height() > $(window).height()){
		$('body').append('<div id="fakescrollbar" style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"></div>');
		fakeScrollBar = $('#fakescrollbar');
		fakeScrollBar.append('<div style="height:100px;">&nbsp;</div>');
		var w1 = fakeScrollBar.find('div').innerWidth();
		fakeScrollBar.css('overflow-y', 'scroll');
		var w2 = $('#fakescrollbar').find('div').html('html is required to init new width.').innerWidth();
		fakeScrollBar.remove();
		return (w1-w2);
	}
	return 0;
}