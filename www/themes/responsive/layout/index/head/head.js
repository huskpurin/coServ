var  menuShow = false;

ctrl.startup = function() {
	//console.log('<%=bi.client.category%>');
	 // if (ctrl.detectmob()) {		
	 if ('<%=bi.client.category%>' === 'mobile') {	
		ctrl.setMobile();				
	}

	hover();
};

/*button*/
ctrl.clickMenu = function() {
	if (menuShow) {
		ctrl.sel("#menu").hide();
		menuShow = false;
	}
	else {
		ctrl.sel("#menu").show();
		ctrl.sel("#menu").css('float', 'left');
		menuShow = true;
	}
};

/*ctrl.detectmob = function () {
	var  isMob = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)	|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i);
	
	return isMob;
	// return '<%=bi.client.category%>' === 'mobile';
};*/

ctrl.setMobile = function () {	
	ctrl.sel("#header").addClass('mobile');
	ctrl.sel("#header").css('height','100px');	
	ctrl.sel("button.mobMenu").show();
	ctrl.sel("#menu").hide();
	$('.Banner .wrapper').css('margin-top','99px');				
};


function hover() {
	$( ".bu" ).hover(function() {		
		$( this ).find('.active').show();
	},function() {
		$( this ).find('.active').hide();					
	});
}

/*
var uri = "<%=bi.uri%>";
var pathname = location.pathname.split('?')[0]+"";
ctrl.sel('ul.submenu').find('a.menuBtn').each(function() {
	var href = $(this).attr('href');
	var path = href.split('?')[0]+"";
	if (pathname.indexOf(path)>=0) {
		$(this).parent().addClass('active');		
	}
});
*/

