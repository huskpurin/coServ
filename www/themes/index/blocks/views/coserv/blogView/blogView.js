ctrl.startup = function() {
	enableUpDown();
};
function enableUpDown(){
	$(window).resize(function() { 
        if ($(this).width() > 800){
        	$(".down").css('visibility','hidden');        	
        }
        else {	        	
        	$(".down").css('visibility','visible');
        }            
    });
}
