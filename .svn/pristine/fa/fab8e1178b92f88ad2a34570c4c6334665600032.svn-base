var isClick = 0;

ctrl.startup = function() {	
	sideNav();
	ctrl.sel(".list a.page<%=bi.query.ngID%>").find('.subhead').css('color','#6D6D6D');
	// ctrl.sel(".list a.page<%=bi.query.ngID%>").find('small').css('color','#888888');
};

function sideNav() {

	if ('<%=bi.client.category%>' === 'mobile') { 
       	ctrl.sel('.typeside').addClass('mobile');
       	$(".CoservDoc .viewside").css('width', '0px');
       	ctrl.sel(".typeside").css('width', '0px');
       	ctrl.sel(".on").css('display','none');
	}	
	
	ctrl.sel(".sideNav").click(function() { 
		if (isClick){
			isClick=0;
			ctrl.sideNavOff();			
		} 
	    else {           
	    	isClick=1;
	    	ctrl.sideNavOn(); 	    	
	    }          
	});

	ctrl.sideNavOff = function () {	
	   	$(".Doc .viewside").css('width', '0px');
	   	ctrl.sel(".typeside").css('width', '0px');   	
	   	ctrl.sel(".on").css('display','none');	
	   	ctrl.sel("i.fa-chevron-right").css('display','none');
		ctrl.sel("i.fa-chevron-left").css('display','block');		
	};

	ctrl.sideNavOn = function () {	
	   	$(".Doc .viewside").css('width', '500px');
	   	ctrl.sel(".typeside").css('width', '500px');  	
	   	ctrl.sel(".on").css('display','block');	
	   	ctrl.sel("i.fa-chevron-right").css('display','block');
		ctrl.sel("i.fa-chevron-left").css('display','none');		
	};	  
};