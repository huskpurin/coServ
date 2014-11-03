ctrl.startup = function() {	
	hover();
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
}
function hover() {
	$( ".bu" ).hover(function() {		
		$( this ).find('.arrow').show();
	},function() {
		$( this ).find('.arrow').hide();
		$( this ).find('.active').show();					
	});
}

