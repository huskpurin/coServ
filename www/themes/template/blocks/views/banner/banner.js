ctrl.startup = function() {
	if ('<%=bi.client.category%>' === 'mobile') { 		
		ctrl.sel(".wrapper").addClass('mobile');	
	}

	// nav();
};
