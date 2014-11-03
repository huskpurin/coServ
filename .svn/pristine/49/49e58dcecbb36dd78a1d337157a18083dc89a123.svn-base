var isShowAddCnt = 1;

ctrl.embedEditor = function(rs, ngID, noCont) {
	var params = {"ca": getCA(), "appCode": getAppCode(), "rs": rs, "locale":getLocale(), "noCont":noCont, "disable": true};
	if (ngID !== 'undefined')
		params.ngID = ngID;
	ctrl.embed('.editor', '/back/article/editor', {params: params}, function(emCtrl) {
		emCtrl.addHandler("reqCloseEditor", ctrl.closeEditor);
	});
};
ctrl.closeEditor = function() {
	ctrl.sel("#editorModal").modal('hide').on('hidden.bs.modal', function () {
		ctrl.callHandler("reqReloadRsTab");
	});
};

ctrl.delRs = function(rs, ngID, ngTitle)  {
	var msg = "確定刪除 "+ngTitle+" 這筆?";
	if (confirm(msg)) {
		var ca = getCA();
		var appCode = getAppCode();
		var  req = {url: ca+'/'+appCode+'/'+rs+'/delete/'+ngID, post: {}, hasCA: true};
		__.api( req, function(data) {
		if (data.errCode === 0)
			ctrl.callHandler("reqReloadRsTab");
		else
			alert( data.message );
		});
	}
};

function getOrgID() {
	return location.pathname.split('/').reverse()[0];
}
function getCA() {
	return ctrl.sel("span#article").attr("ca");
}
function getAppCode() {
	return ctrl.sel("span#article").attr("appCode");
}
function getRs() {
	return ctrl.sel("span#article").attr("rs");
}
function getLocale() {
	return ctrl.sel("span#article").attr("locale");
}
