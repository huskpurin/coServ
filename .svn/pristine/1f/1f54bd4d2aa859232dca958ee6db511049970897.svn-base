ctrl.startup = function() {
	ctrl.delToken();
	ctrl.focusAccName();
}

ctrl.doLogin = function()  {
	var  pdata = { accName: get('#accName'), passwd: get('#passwd') };

	if (pdata.accName == "")  {
		alert("電子郵件不可空白");
		ctrl.focusAccName();
		set('passwd', '');
		return;
	}

	if (pdata.passwd == "")  {
		alert("密碼不可空白");
		ctrl.focusPw();
		return;
	}

	var params = { accName: pdata.accName };
	params.passwd = SHA1(SHA1(pdata.accName)+pdata.passwd);

	var req = { url: '/core/user/login', post:params};
	__.api(req, function(data)  {
		if (data.errCode === 0) {
			window.location = '/back/session/list';
			// alert('success@login:\n'+JSON.stringify(data));
		}
		else {
			alert( data.message );
			// alert("Login failed.");
			ctrl.focusAccName();
			set('passwd', '');
		}
	});
	reset();
};

ctrl.focusPw = function() {
	ctrl.sel('#passwd').focus();
};

ctrl.focusAccName = function () {
	ctrl.sel('#accName').focus();
};

ctrl.getOrgID = function() {
	var orgID = ctrl.sel(".isMember").attr("orgID");
	return orgID;
};

ctrl.delToken = function() {
	var expires = new Date();
	expires.setTime (expires.getTime() - 1);
	document.cookie = "token=;expires=" + expires.toGMTString()+ ";" + "; path=/";
};

function get(el) {
  return ctrl.sel(el).val();
}

function set(el, val) {
  ctrl.sel(el).val(val);
}

function reset()  {
	set('#accName', '');
	set('#passwd', '');
};
