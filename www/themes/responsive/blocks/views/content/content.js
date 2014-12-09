ctrl.startup = function() {	

	$( window ).scroll(function() {
	    var  y = window.pageYOffset;
	    if (y){
	    	ctrl.sel(".gotop").fadeIn(300);
	    }
	    else {
	    	ctrl.sel(".gotop").fadeOut(300);
	    }
	});

	if (ctrl.detectmob()) 	
		ctrl.sel(".container").addClass('mobile');
};

ctrl.detectmob = function () {
	var  isMob = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)	|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i);
	
	return isMob;
};