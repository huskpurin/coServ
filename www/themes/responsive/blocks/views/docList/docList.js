var isClick = 0;

ctrl.startup = function() {	
	sideNav();	
};


function sideNav() {
	if (ctrl.detectmob()) {        	
       	ctrl.setMobile();       	        	

		ctrl.sel(".sideNav").click(function() { 
			if (isClick){
				isClick=0;	
				ctrl.sideNavOpen();
			} 
		    else {           
		    	isClick=1; 
		    	ctrl.sideNavOff();
		    }          
		}); 
	} 	   
};

ctrl.detectmob = function () {
	var  isMob = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)	|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i);
	
	return isMob;
};

ctrl.setMobile = function () {	
	ctrl.sel('.typeside').addClass('mobile');
   	$(".Doc .viewside").css('width', '0px');
   	ctrl.sel(".typeside").css('width', '0px');
   	ctrl.sel(".on").css('display','none');			
};

ctrl.sideNavOpen = function () {	
   	$(".Doc .viewside").css('width', '0px');
   	ctrl.sel(".typeside").css('width', '0px');
   	ctrl.sel(".on").css('display','none');	
   	ctrl.sel("i.fa-chevron-right").css('display','none');
	ctrl.sel("i.fa-chevron-left").css('display','block');		
};

ctrl.sideNavOff = function () {	
   	$(".Doc .viewside").css('width', '500px');
   	ctrl.sel(".typeside").css('width', '500px');
   	ctrl.sel(".on").css('display','block');	
   	ctrl.sel("i.fa-chevron-right").css('display','block');
	ctrl.sel("i.fa-chevron-left").css('display','none');		
};